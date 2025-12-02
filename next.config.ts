import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.hackthebox.com',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
