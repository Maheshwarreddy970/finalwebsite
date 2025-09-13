/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverActions: {
    bodySizeLimit: "5mb", // Increase to 2 MB (or adjust as needed)
  },
};

export default nextConfig;