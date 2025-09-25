/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "onpgpvvbtqtonbzbuodl.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "alt.tailus.io", // 👈 allow Tailus images
        pathname: "/images/**",    // restrict only to `/images/` paths
      },
    ],
  },
  serverActions: {
    bodySizeLimit: "5mb",
  },
  output: "standalone", // ✅ enables SSR deployment on Netlify
};

export default nextConfig;
