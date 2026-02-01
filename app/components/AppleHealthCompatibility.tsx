"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppleHealthCompatibility() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Compatible with All Wearables
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-base md:text-lg lg:text-xl font-bold text-text-light leading-tight max-w-xl">
              Apple Watch, Oura Ring, Whoop -<br />
              brb syncs with any device through Apple Health.<br />
              <br />
              No smartwatch? No problem.<br />
              Your iPhone tracks steps automatically<br />
              using its built-in motion sensors.<br />
              Just keep your phone in your pocket and move.
            </p>
          </motion.div>

          {/* Right: Apple Watch Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xs">
              <Image
                src="/watch.png"
                alt="brb on Apple Watch with Works with Apple Health badge"
                width={400}
                height={480}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
