"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Split Layout: Text Left, Phone Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.05] lg:leading-[1.1] mb-6"
            >
              Move first. Scroll later.
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-text-light mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Your apps will be right back. <span className="text-primary-green">After you move.</span>
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {[
                'Block Instagram, TikTok, or any distracting apps',
                'Hit your daily step goal, apps unlock automatically',
                'No complicated schedules. No timers. Just move.'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-3 text-left"
                >
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base md:text-lg text-text-light">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
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
          </div>

          {/* Right Phone Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative w-full max-w-[320px] lg:max-w-[320px]"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/hero-phone.png"
                  alt="brb app interface on iPhone"
                  width={320}
                  height={640}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

