import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VeRaFIED Vets: Free VA Benefits Help",
  description:
    "Free forever. Find out what VA benefits you may qualify for, organize your evidence, and get matched with free accredited helpers. No ads. No fees. A VeRaFIED Studio app: veterans helping veterans. Not affiliated with the VA.",
  openGraph: {
    title: "VeRaFIED Vets: You earned it. Getting it should be free.",
    description:
      "Free VA benefits help for veterans. No ads. No fees. Real human help.",
    images: [{ url: "/assets/social-card.png", width: 1200, height: 630, alt: "VeRaFIED Vets: You earned it. Getting it should be free." }],
    type: "website",
    siteName: "VeRaFIED Vets",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeRaFIED Vets: Free VA Benefits Help",
    description: "Free VA benefits help for veterans. No ads. No fees.",
    images: ["/assets/social-card.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-navy-950 antialiased">{children}</body>
    </html>
  );
}
