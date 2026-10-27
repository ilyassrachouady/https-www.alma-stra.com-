import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
 images: {
  deviceSizes: [360, 480, 640, 768, 960, 1200, 1600, 1920],
  imageSizes: [32, 48, 64, 96, 128, 180, 256],
  qualities: [75, 85],
  remotePatterns: [{ protocol: 'https', hostname: 'alma-stra.com' }, { protocol: 'https', hostname: 'www.alma-stra.com' }],
 },
 async redirects() {
  return [
   { source: '/:path*', has: [{ type: 'host' as const, value: 'www.alma-stra.com' }], destination: 'https://alma-stra.com/:path*', permanent: true },
   { source: '/a-propos', destination: '/about', permanent: true },
   { source: '/services', destination: '/expertise', permanent: true },
   { source: '/projets', destination: '/projects', permanent: true },
   { source: '/politique-de-confidentialite-2', destination: '/politique-de-confidentialite', permanent: true },
   ...['viabilisation-des-lotissements', 'amenagement-btp', 'travaux-tous-corps-detat'].flatMap(slug => [ { source: `/${slug}`, destination: `/expertise/${slug}`, permanent: true }, { source: `/services/${slug}`, destination: `/expertise/${slug}`, permanent: true } ]),
  ];
 },
};
export default nextConfig;
