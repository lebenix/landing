import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/nosotros", destination: "/about" },
      { source: "/contacto", destination: "/contact" },
    ];
  },
};

export default nextConfig;
