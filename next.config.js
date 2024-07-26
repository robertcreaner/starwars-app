/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngall.com',
        port: '',
        pathname: '/wp-content/uploads/2016/03/Star-Wars-Ship-Vector-PNG.png',
      },
    ],
  },
};

module.exports = nextConfig;
