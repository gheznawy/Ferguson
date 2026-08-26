import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  trailingSlash: true,
  images: {
    // Serve modern, browser-negotiated formats while retaining Next's responsive
    // width selection. The sources are static, hashed assets, so a long cache
    // lifetime avoids repeat optimization and transfer work for return visitors.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31_536_000,
  },
};

export default nextConfig;
