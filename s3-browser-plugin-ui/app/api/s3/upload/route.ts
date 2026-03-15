import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles binary file uploads to S3.
 * Query params: bucket, key, region (optional)
 * Body: raw file bytes
 */
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const bucket = searchParams.get('bucket');
    const key = searchParams.get('key');
    const region = searchParams.get('region') || 'us-east-1';

    if (!bucket || !key) {
      return NextResponse.json({ error: 'bucket and key are required' }, { status: 400 });
    }

    const contentType = req.headers.get('content-type') || 'application/octet-stream';
    const body = Buffer.from(await req.arrayBuffer());

    const client = new S3Client({ region, credentials: fromNodeProviderChain() });
    await client.send(
      new PutObjectCommand({ Bucket: bucket, Key: key, Body: body, ContentType: contentType })
    );

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
