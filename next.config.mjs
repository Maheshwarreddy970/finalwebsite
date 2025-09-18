/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverActions: {
    bodySizeLimit: "5mb",
  },
  output: "standalone", // ✅ enables SSR deployment on Netlify
};

export default nextConfig;
