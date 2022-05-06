/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { defaultLoaders, isServer }) => {
    config.module.rules.push({ test: /\.(js|jsx)$/, use: 'babel-loader' });

    return config;
  },
};

module.exports = nextConfig;
