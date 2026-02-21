import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
