/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[{
      protocol: 'http',
      hostname: 't1.gstatic.com',
      port: '',
      pathname: '/**'
    }]
  }
};

export default nextConfig;
