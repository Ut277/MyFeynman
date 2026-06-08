import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // OneDrive sync triggers false file-change events; polling is more stable
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/.git/**", "**/node_modules/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
