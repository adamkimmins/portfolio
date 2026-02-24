import type { NextConfig } from "next";

const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages serves your project at /portfolio (not /)
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default nextConfig;