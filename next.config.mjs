/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Saasolution-sl/clinica-avanzada/**",
      },
    ],
  },
};

export default nextConfig;
