import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/dinners",
        destination: "/special-events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;