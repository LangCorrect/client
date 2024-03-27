import nextMdx from '@next/mdx'

const withMDX = nextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
