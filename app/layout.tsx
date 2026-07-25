import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kampasati Vamshi | Personal Portfolio & Data Analytics",
  description:
    "Official portfolio website of Kampasati Vamshi — Data Analyst & Machine Learning Engineer specializing in Python, SQL, YOLOv8, Computer Vision, and Next.js full-stack development.",
  keywords: [
    "Kampasati Vamshi",
    "Data Analyst Hyderabad",
    "Machine Learning Engineer",
    "Python Developer",
    "SQL Specialist",
    "YOLOv8 Realtime Detection",
    "Deloitte Data Analytics",
    "Computer Science Portfolio",
  ],
  authors: [{ name: "Kampasati Vamshi" }],
  creator: "Kampasati Vamshi",
  openGraph: {
    title: "Kampasati Vamshi | Data Analyst & ML Engineer Portfolio",
    description:
      "Explore Kampasati Vamshi's projects in computer vision, machine learning forecasting, data analytics, and modern web application development.",
    url: "https://kampasati-vamshi.vercel.app",
    siteName: "Kampasati Vamshi Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Kampasati Vamshi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampasati Vamshi | Data Analyst & ML Engineer",
    description:
      "Explore real-time vehicle detection AI, Deloitte simulation analytics, and Next.js full-stack projects.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#030712] text-slate-100 min-h-screen selection:bg-blue-500/40 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
