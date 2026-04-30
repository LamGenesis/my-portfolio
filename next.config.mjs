/** @type {import('next').NextConfig} */

// Cho phép override basePath khi deploy lên GitHub Pages dạng project page
// (ví dụ: https://<user>.github.io/<repo>). Khi build trên GitHub Actions
// chúng ta sẽ truyền NEXT_PUBLIC_BASE_PATH=/<repo>.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
