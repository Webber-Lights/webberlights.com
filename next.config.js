/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "lucaswebber.dev",
      "https://media-exp1.licdn.com",
    ],
    dangerouslyAllowSVG: true,
  },
  // ONLY FOR DEVELOPMENT
  // experimental: {
  //   appDir: true,
  // },
  output: "standalone",
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
