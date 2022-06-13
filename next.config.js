/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    API_URL_ALCHEMY: process.env.API_URL_ALCHEMY,
    API_KEY_ALCHEMY: process.env.API_KEY_ALCHEMY,
  },
};

module.exports = nextConfig;
