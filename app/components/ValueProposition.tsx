"use client";

import { motion } from "framer-motion";

export default function ValueProposition() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
        >
          What if your biggest distraction became your biggest motivation?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted leading-relaxed"
        >
          Every morning, brb locks the apps you choose—Instagram, TikTok, games, whatever steals your time. The only way to unlock them? Hit your step goal. No cheating. No exceptions. Just movement.
        </motion.p>
      </div>
    </section>
  );
}

