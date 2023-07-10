/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_API: process.env.GOOGLE_API,
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
    WH_SECRET: process.env.WH_SECRET,
    GQL_ENDPOINT: process.env.GQL_ENDPOINT,
  },
  images: {
    domains: ["thispersondoesnotexist.com"],
  },
};

module.exports = nextConfig;
