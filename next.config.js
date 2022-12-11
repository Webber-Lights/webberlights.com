/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'lucaswebber.dev', 'https://media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  },
  // ONLY FOR DEVELOPMENT
  // experimental: {
  //   appDir: true,
  // },
  output: 'standalone',
}

module.exports = withContentlayer(nextConfig)