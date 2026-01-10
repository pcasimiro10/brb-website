"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-6 md:left-12 z-10"
      >
        <Image
          src="/logo.png"
          alt="brb logo"
          width={80}
          height={40}
          className="w-20 md:w-24"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Move first. Scroll later.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-text-light mb-4 max-w-2xl mx-auto"
        >
          brb blocks Instagram, TikTok, or any distracting app until you hit your daily step goal.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto italic"
        >
          {`The name says it all: your apps will Be Right Back - after you move.`}
        </motion.p>

        {/* CTA Above Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <a href="#">
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </motion.div>

        {/* Phone Mockup - The Star */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/hero-phone.png"
              alt="brb app interface on iPhone"
              width={400}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

