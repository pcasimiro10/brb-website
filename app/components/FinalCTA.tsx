"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-light mb-6"
        >
          Earn Your Apps Back
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-text-light mb-10"
        >
          Join thousands of people who are moving more and scrolling less.
        </motion.p>

        {/* App Store Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a href="#" className="inline-block">
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={200}
              height={67}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
