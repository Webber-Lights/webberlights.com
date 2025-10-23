/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
