// next.config.js
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/sass")],
    prependData: `@import "mixins.scss";`,
  },
};

export default nextConfig;
