/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [new URL('https://lucaswebber.dev')],
    qualities: [90],
    dangerouslyAllowSVG: true,
  },
  // ONLY FOR DEVELOPMENT
  // experimental: {
  //   appDir: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/donate',
  //       destination: 'https://paypal.me/xcraftman52?country.x=US&locale.x=en_US',
  //       permanent: true,
  //     },
  //   ]
  // },
};

module.exports = withContentlayer(nextConfig);
