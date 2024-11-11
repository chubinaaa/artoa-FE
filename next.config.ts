import { NextConfig } from "next";

export default {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compiler: {
    removeConsole: true,
  },
} satisfies NextConfig;
