import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brb: Walk to Unlock Apps | Move First, Scroll Later",
  description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
  openGraph: {
    title: "brb: Walk to Unlock Apps | Move First, Scroll Later",
    description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
    type: "website",
    url: "https://berightbackapp.com",
    siteName: "brb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

