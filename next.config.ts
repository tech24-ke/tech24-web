import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow Next.js to use your custom quality values (85, 88) from <Image />
    qualities: [75, 80, 85, 88, 90],
    // Optionally add any allowed external domains if you host images elsewhere
    // domains: ["res.cloudinary.com", "tech24.co.ke"],
  },
  // Keep other global Next settings if you have them
};

export default nextConfig;
