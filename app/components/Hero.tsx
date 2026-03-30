"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 py-12 lg:py-16 overflow-hidden">
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
              Walk to unlock your apps.
            </motion.h1>

            {/* Subtitle line 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-light max-w-2xl mx-auto lg:mx-0"
            >
              brb blocks distracting apps until you hit your daily step goal.
            </motion.p>

            {/* Subtitle line 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-primary-green max-w-2xl mx-auto lg:mx-0 mb-6 mt-1"
            >
              Your apps will be right back. After you move.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              {[
                'No steps = no screen time. One simple rule.',
                'Strict Mode: no ignore button, no way out.',
                'Works with any wearable — or just your iPhone.',
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
              className="flex flex-col items-center lg:items-start gap-3"
            >
              {/* Button + micro-copy + Android link */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://apps.apple.com/app/brb-walk-to-unlock-apps/id6757323160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary-green text-dark-bg font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-green/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-green/20"
                >
                  Download Free (iPhone)
                </a>
                <p className="text-xs text-text-muted">
                  7-day free trial · cancel anytime
                </p>
              </div>
              <p className="text-sm text-text-muted">
                Android?{" "}
                <Link
                  href="/contact?waitlist=android"
                  className="underline underline-offset-2 hover:text-text-light transition-colors"
                >
                  Join the waitlist →
                </Link>
              </p>
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

