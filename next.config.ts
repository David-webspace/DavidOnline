import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
};

export default nextConfig;
