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
};

export default nextConfig;
