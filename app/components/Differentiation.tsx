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
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12">
            Why brb is Different
          </h2>

          <div className="space-y-8 text-left md:text-center">
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Most screen time apps just block you. You set limits, and then you wait.
            </p>

            <p className="text-xl md:text-2xl text-text-light leading-relaxed font-medium">
              brb does more than block — it keeps you active. Instead of sitting around waiting for a timer to end, you walk.
            </p>

            <div className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-green/20">
              <p className="text-2xl md:text-3xl font-bold text-primary-green leading-relaxed">
                Other apps restrict your screen time.
                <br />
                brb converts it into steps.
              </p>
            </div>

            <p className="text-xl text-text-muted leading-relaxed">
              One simple rule. Real physical activity. Earn your screen time by moving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
