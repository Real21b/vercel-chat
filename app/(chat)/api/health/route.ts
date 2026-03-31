import { isProductionEnvironment } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: isProductionEnvironment ? 'production' : 'development',
      version: process.env.npm_package_version ?? 'unknown',
    },
    { status: 200 },
  );
}
