/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_API: process.env.GOOGLE_API,
  },
  images: {
    domains: ["thispersondoesnotexist.com"],
  },
};

module.exports = nextConfig;
