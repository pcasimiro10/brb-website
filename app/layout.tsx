import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brb: Walk to Unlock Apps | Move First, Scroll Later",
  description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
  openGraph: {
    title: "brb: Walk to Unlock Apps | Move First, Scroll Later",
    description: "brb blocks your distracting apps until you hit your daily step goal. Turn your biggest distraction into your biggest motivation. Available on iOS.",
    type: "website",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}

