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
};

module.exports = nextConfig;
