import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "opengraph.githubassets.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "repository-images.githubusercontent.com",
                pathname: "/**",
            },
        ],
    },
    experimental: {
        scrollRestoration: true,
    },
};

export default nextConfig;
