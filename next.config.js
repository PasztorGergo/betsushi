/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_API: process.env.GOOGLE_API,
  },
};

module.exports = nextConfig;
