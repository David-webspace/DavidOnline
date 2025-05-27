import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    domains: ['images.unsplash.com', 'images.pexels.com', 'somecdn.com'], 
  },
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    localeDetection: false,
  },
};

export default nextConfig;
