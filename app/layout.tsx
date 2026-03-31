import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brb: Walk to Unlock Apps | Block Apps Until You Hit Your Step Goal",
  description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
  openGraph: {
    title: "brb: Walk to Unlock Apps | Block Apps Until You Hit Your Step Goal",
    description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
    type: "website",
    url: "https://berightbackapp.com",
    siteName: "brb",
    images: [
      {
        url: "https://berightbackapp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "brb – walk to unlock your apps. No steps = no doomscrolling.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "brb: Walk to Unlock Apps | Block Apps Until You Hit Your Step Goal",
    description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
    images: ["https://berightbackapp.com/og-image.png"],
    creator: "@pat_caz",
    site: "@berightbackapp",
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

