"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "📍",
    title: "Accurate Step Tracking",
    description: "Syncs with Apple Health for accurate data. Works with any wearable that connects to Health. Built-in iPhone pedometer for watch-free tracking.",
  },
  {
    emoji: "🔒",
    title: "Smart App Blocking",
    description: "Uses Apple&apos;s Screen Time API for reliable blocking. Choose exactly which apps to block. System-level restrictions that actually work.",
  },
  {
    emoji: "🎯",
    title: "Honest Goal Setting",
    description: "Raise your step goal anytime. Lowering only takes effect the next day. No shortcuts — today&apos;s goal is today&apos;s goal.",
  },
  {
    emoji: "🚨",
    title: "Emergency Unlock",
    description: "One free 5-minute unlock per day for genuine emergencies. Life happens — we get it. Resets at midnight so you always have a safety net.",
  },
  {
    emoji: "💪",
    title: "Strict Mode",
    description: "For when you&apos;re ready to commit fully. No way out except hitting your step goal. Maximum accountability.",
  },
  {
    emoji: "📊",
    title: "Progress Tracking",
    description: "Beautiful circular progress ring. Track your streaks and watch your consistency grow. See your daily wins add up.",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            Key Features
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Everything you need to build a healthier relationship with your phone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-secondary rounded-2xl p-8 text-center hover:bg-dark-secondary/80 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/10"
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

