/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the root directory for file tracing to the webApp directory
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
