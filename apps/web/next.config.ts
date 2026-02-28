import path from "node:path";
import type { NextConfig } from "next";

const uiPackagePath = path.resolve(__dirname, "../../packages/ui/src");

const nextConfig: NextConfig = {
  transpilePackages: ["@aac/ui"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/lib/utils": path.join(uiPackagePath, "lib/utils"),
      "@/components": path.join(uiPackagePath, "components"),
      "@/hooks": path.join(uiPackagePath, "hooks"),
      "@/lib": path.join(uiPackagePath, "lib"),
    };
    return config;
  },
};

export default nextConfig;
