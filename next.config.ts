import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com','imgs.search.brave.com','images.unsplash.com'],
  },
  devIndicators : false,
};

export default nextConfig;
