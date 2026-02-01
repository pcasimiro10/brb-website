"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppleHealthCompatibility() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Works with Apple Health
            </h2>

            <p className="text-lg md:text-xl text-text-light mb-4 leading-relaxed">
              Apple Watch, Oura Ring, Whoop, Garmin, Fitbit, or any device that syncs to Apple Health.
            </p>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              No smartwatch? No problem. Just keep your iPhone in your pocket and move.
            </p>
          </motion.div>

          {/* Apple Watch Mockup - Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <Image
              src="/watch.png"
              alt="brb on Apple Watch with Works with Apple Health badge"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-2xl mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
