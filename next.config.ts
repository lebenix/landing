import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrites: serve English-named pages at Spanish URLs (canonical = Spanish)
  async rewrites() {
    return [
      { source: "/nosotros", destination: "/about" },
      { source: "/contacto", destination: "/contact" },
    ];
  },
  // Redirects: prevent /about and /contact from being indexed as duplicates
  async redirects() {
    return [
      { source: "/about", destination: "/nosotros", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
