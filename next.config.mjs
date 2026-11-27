/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint runs as its own step (npm run lint, and in CI), so the build doesn't repeat it.
  eslint: { ignoreDuringBuilds: true }
}

export default nextConfig
