/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  env: {
    API_URL_CMC: process.env.API_URL,
    API_KEY_CMC: process.env.API_KEY,
    API_URL_LOGO: process.env.API_URL_LOGO,
    API_URL_ALCHEMY: process.env.API_URL_ALCHEMY,
    API_KEY_ALCHEMY: process.env.API_KEY_ALCHEMY,
  },
};

module.exports = nextConfig;
