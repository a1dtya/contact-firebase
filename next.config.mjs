/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/contacts',
        permanent: true,
      },
    ]
  },
 
};

export default nextConfig;




