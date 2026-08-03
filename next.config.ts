import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
  allowedDevOrigins: ['192.168.1.19'],
  // Explicitly set the Turbopack root to the current directory
  // to resolve the "inferred workspace root" warning.
  turbopack: { root: __dirname },

};

export default nextConfig;