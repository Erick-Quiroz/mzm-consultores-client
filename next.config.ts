import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mzmconsultores-minio-199198-147-93-118-204.traefik.me"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // ✅ Aumentar límite si subes imágenes grandes
    },
  },
};

export default nextConfig;
