"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🔒",
    title: "Block apps",
    description: "Lock Instagram, TikTok, or any app that steals your time",
  },
  {
    emoji: "🚶",
    title: "Walk to unlock",
    description: "Hit your step goal to get your apps back",
  },
  {
    emoji: "📊",
    title: "Track progress",
    description: "Build streaks and watch your daily steps climb",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            How it works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-secondary rounded-2xl p-8 text-center"
            >
              <div className="text-6xl md:text-7xl mb-6">{feature.emoji}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

