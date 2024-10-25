import { NextConfig } from "next";

export default {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
} satisfies NextConfig;
