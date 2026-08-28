// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // Allows any path on picsum.photos
      },
    ],
  },
  // ... any other configuration you might have
};

module.exports = nextConfig;