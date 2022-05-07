const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  typescript: {
    tsconfigPath: path.join("../../..", "tsconfig.json"),
  },
};

module.exports = nextConfig;
