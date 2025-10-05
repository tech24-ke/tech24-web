// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech24.co.ke — Digital Made Simple",
  description:
    "Fast, modern websites for Kenyan businesses. M-Pesa integrations, WhatsApp CTA, social media setup, and secure hosting.",
  metadataBase: new URL("https://tech24.co.ke"),
  openGraph: {
    title: "Tech24.co.ke — Digital Made Simple",
    description:
      "Websites, M-Pesa integrations, WhatsApp CTA, social setup, and secure hosting for Kenyan businesses.",
    url: "https://tech24.co.ke",
    siteName: "Tech24.co.ke",
    images: [{ url: "/og-cover.png" }],
    type: "website",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/* Flex column + dynamic viewport height to stop iOS bar jump */}
      <body className={`${inter.className} min-h-dvh flex flex-col`} suppressHydrationWarning>
        {/* The page component will take flex-1 so the footer can sit at the bottom */}
        {children}
      </body>
    </html>
  );
}
