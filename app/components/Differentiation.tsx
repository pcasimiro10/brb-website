"use client";

import { motion } from "framer-motion";

export default function Differentiation() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12">
            One Rule: No Steps, No Scrolling
          </h2>

          <div className="space-y-8 text-left md:text-center">
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Other apps just lock your phone and leave you waiting.
            </p>

            <p className="text-xl md:text-2xl text-text-light leading-relaxed font-medium">
              brb gives you something to do: move.
            </p>

            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              {`Every minute you're blocked is a minute you could be moving.`}
            </p>

            <div className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-green/20">
              <p className="text-2xl md:text-3xl font-bold text-primary-green leading-relaxed">
                Your apps become your motivation, not your distraction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
