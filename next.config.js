/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'www.car-logos.org',
      'igbpxesaulnzqaiqdjol.supabase.co'
    ],
  },
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;