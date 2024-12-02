import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'], // Add your allowed image domains
  },
  reactStrictMode: true,
  // Add other configurations here
};

export default config;
