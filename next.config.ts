import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "www.artmajeur.com",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
