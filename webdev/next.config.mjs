/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Uncomment and set if deploying to a repository path (e.g., https://username.github.io/repo-name/)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

export default nextConfig;
