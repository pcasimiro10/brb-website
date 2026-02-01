"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppleHealthCompatibility() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              Works with Apple Health
            </h2>

            <p className="text-xl md:text-2xl text-text-light mb-6 leading-relaxed">
              Apple Watch, Oura Ring, Whoop, Garmin, Fitbit, or any device that syncs to Apple Health.
            </p>

            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              No smartwatch? No problem. Just keep your iPhone in your pocket and move.
            </p>
          </motion.div>

          {/* Right: Apple Watch Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/watch.png"
                alt="brb on Apple Watch with Works with Apple Health badge"
                width={500}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
