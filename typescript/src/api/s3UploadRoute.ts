import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const bucket = searchParams.get('bucket')!;
    const key = searchParams.get('key')!;
    const region = searchParams.get('region') ?? 'us-east-1';

    const client = new S3Client({ region, credentials: fromNodeProviderChain() });
    const buf = Buffer.from(await req.arrayBuffer());

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buf,
        ContentType: req.headers.get('content-type') ?? 'application/octet-stream',
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
