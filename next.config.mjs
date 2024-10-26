/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "d3mtr3qumpo1r3.cloudfront.net",
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ]
    }
};

export default nextConfig;
