import createMDX from '@next/mdx'

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    reactStrictMode: true,
    // Configure images
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "inline",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**",    
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

export default withMDX(nextConfig)

