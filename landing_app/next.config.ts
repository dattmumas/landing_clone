import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Ensure generated CSS is compatible with older browsers
  experimental: {
    // Enable optimizations for cross-browser compatibility
    optimizeCss: true,
  },
  
  // Font configuration
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],
};

export default nextConfig;
