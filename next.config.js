const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push(
      // Convert all other *.svg imports to React Components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },  // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    return config;
  }
};

module.exports = nextConfig;