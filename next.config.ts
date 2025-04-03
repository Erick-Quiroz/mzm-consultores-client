const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minio-h4swg8ss4k8osowc8ook8s0k.147.93.118.204.sslip.io",
        pathname: "/mzm/**",
      },
      {
        protocol: "https",
        hostname: "ejemplo.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
