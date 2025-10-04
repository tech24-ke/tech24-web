import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech24 — Always-On Digital Power",
  description:
    "Websites and simple apps for Kenyan businesses. Fast delivery on Vercel with local insight.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
