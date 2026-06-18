/** @type {import('next').NextConfig} */
const useLocalDistDir = process.env.NEXT_USE_LOCAL_DIST_DIR === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(useLocalDistDir ? { distDir: "next-build" } : {})
};

export default nextConfig;
