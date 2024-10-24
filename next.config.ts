import { NextConfig } from "next";

export default {
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
    },
} satisfies NextConfig;
