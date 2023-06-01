/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  // async rewrites() {
  //   return [
  //     {
  //       //ssr
  //       source: 'http://udemy-next-bbd80-default-rtdb.firebaseio.com/:path*', // 라우팅하려는 경로.
  //       destination: '/:path*', //서버 주소.
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
