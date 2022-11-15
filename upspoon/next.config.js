/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   outputStandalone: true,
  // },
  async redirects() {
    return [
      {
        source: "/restaurant",
        destination: "/restaurant/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
