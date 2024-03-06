/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gabrielgodoy.com.ar",
        port: "",
        pathname: "/resources/**",
      },
    ],
  },
};

export default nextConfig;
