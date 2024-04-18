/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    domains: ["static.cartridge.gg", "static.localhost"],
  },
};

import withPWA from "next-pwa";
// const withPWA = require("next-pwa")

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);

export default config;
