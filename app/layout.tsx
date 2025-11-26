import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Tenerife Next Academy",
  description: "Elite football experiences in Europe's paradise. Where performance meets paradise.",
  openGraph: {
    title: "Tenerife Next Academy",
    description: "Elite football experiences in Europe's paradise. Where performance meets paradise.",
    url: "/",
    type: "website",
    images: ["/images/hero-teide.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenerife Next Academy",
    description: "Elite football experiences in Europe's paradise. Where performance meets paradise.",
    images: ["/images/hero-teide.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen bg-transparent text-white`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
