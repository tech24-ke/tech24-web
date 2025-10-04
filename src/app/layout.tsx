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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
