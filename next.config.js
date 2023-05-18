/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
