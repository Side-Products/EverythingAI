/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "miro.medium.com",
      "everythingai.s3.amazonaws.com",
      "everythingai.s3.ap-south-1.amazonaws.com",
      "blog.everythingai.club",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
});
