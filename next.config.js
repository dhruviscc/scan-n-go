/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 
  turbopack: {
    root: '.',
  },
  allowedDevOrigins: ['192.168.1.19'],

};

module.exports = nextConfig;