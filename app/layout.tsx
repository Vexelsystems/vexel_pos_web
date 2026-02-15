import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SoundToaster } from "@/components/SoundToaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generatePageMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generatePageMetadata({
  title: "Vexel POS | Modern Subscription-Based POS System",
  description:
    "Vexel POS is a smart, scalable POS system for retail shops, supermarkets, and SMBs in Sri Lanka. Manage your business with ease.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SoundToaster />
      </body>
    </html>
  );
}
