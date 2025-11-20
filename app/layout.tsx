import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import RocketScrollIndicator from "./components/RocketScrollIndicator";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hephaestus - University Robotics & Automation Team",
  description: "University Robotics and Automation & Informatics Team dedicated to innovation, research, and pushing the boundaries of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 pt-20`}
      >
        <Navigation />
        {children}
        <Footer />
        <RocketScrollIndicator />
        <Analytics />
      </body>
    </html>
  );
}
