import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [new URL('https://lucaswebber.dev')],
    qualities: [90],
    dangerouslyAllowSVG: true,
  },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);