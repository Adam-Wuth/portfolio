/** @type {import('next').NextConfig} */

// Check if we are building for production
const isProd = process.env.NODE_ENV === 'production';

// Set the basePath if deploying to a subfolder like /portfolio
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export', // ✅ Important for static export
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // ✅ Important for static hosting (Next.js image optimization won't work otherwise)
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

module.exports = nextConfig;
