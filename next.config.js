const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://images.unsplash.com', 'https://lucaswebber.dev', 'https://media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  },
  output: 'standalone',
}

module.exports = withContentlayer(nextConfig)