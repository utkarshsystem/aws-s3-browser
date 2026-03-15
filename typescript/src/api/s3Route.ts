import {
  CopyObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  ListBucketsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import { NextRequest, NextResponse } from 'next/server';

function getClient(region: string) {
  return new S3Client({ region, credentials: fromNodeProviderChain() });
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { action, region = 'us-east-1', bucket, prefix, key, newKey, contentType, body } = json;
    const client = getClient(region);

    switch (action) {
      case 'listBuckets': {
        const res = await client.send(new ListBucketsCommand({}));
        return NextResponse.json({
          buckets: (res.Buckets ?? []).map((b) => b.Name),
        });
      }

      case 'listObjects': {
        const res = await client.send(
          new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix ?? '', Delimiter: '/' })
        );
        const folders = (res.CommonPrefixes ?? []).map((cp) => ({
          key: cp.Prefix!,
          isFolder: true,
        }));
        const files = (res.Contents ?? [])
          .filter((obj) => obj.Key !== (prefix ?? ''))
          .map((obj) => ({
            key: obj.Key!,
            size: obj.Size,
            lastModified: obj.LastModified?.toISOString(),
            isFolder: false,
          }));
        return NextResponse.json({ items: [...folders, ...files] });
      }

      case 'getDownloadUrl': {
        const url = await getSignedUrl(
          client,
          new GetObjectCommand({ Bucket: bucket, Key: key }),
          { expiresIn: 300 }
        );
        return NextResponse.json({ url });
      }

      case 'getFileContent': {
        const url = await getSignedUrl(
          client,
          new GetObjectCommand({ Bucket: bucket, Key: key }),
          { expiresIn: 300 }
        );
        const res = await fetch(url);
        if (!res.ok) throw new Error(`S3 fetch failed: ${res.status}`);
        const text = await res.text();
        return NextResponse.json({ content: text });
      }

      case 'putObject': {
        await client.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: body,
            ContentType: contentType ?? 'application/octet-stream',
          })
        );
        return NextResponse.json({ ok: true });
      }

      case 'deleteObject': {
        await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
        return NextResponse.json({ ok: true });
      }

      case 'createFolder': {
        await client.send(
          new PutObjectCommand({ Bucket: bucket, Key: key, Body: '', ContentType: 'application/x-directory' })
        );
        return NextResponse.json({ ok: true });
      }

      case 'renameObject': {
        await client.send(
          new CopyObjectCommand({
            Bucket: bucket,
            CopySource: `${bucket}/${key}`,
            Key: newKey,
          })
        );
        await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
        return NextResponse.json({ ok: true });
      }

      default:
        return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
