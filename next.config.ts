import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "alma-stra.com" },
      { protocol: "https", hostname: "www.alma-stra.com" }
    ]
  }
};

export default nextConfig;
