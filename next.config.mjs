/** @type {import('next').NextConfig} */
const nextConfig = {
    // trailingSlash: true,
    // output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            search: '',
          },
          {
            hostname: 'assets.react-photo-album.com',
          },
        ],
        // unoptimized: true,
      },
};

export default nextConfig;
