"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "📍",
    title: "Accurate Step Tracking",
    description: "brb syncs with Apple Health for accurate data. Works with any wearable that connects to Health. Built-in iPhone pedometer for watch-free tracking.",
  },
  {
    emoji: "🔒",
    title: "Smart App Blocking",
    description: "See your biggest distractions ranked by screen time. Safari, Instagram, TikTok — all laid out. Then block exactly what's stealing your time.",
  },
  {
    emoji: "🎯",
    title: "Honest Goal Setting",
    description: "Raise your step goal anytime. Lowering your goal goes into effect the following day. No shortcuts — today's goal is today's goal.",
  },
  {
    emoji: "🚨",
    title: "Emergency Unlock",
    description: "One 5-minute unlock per day for genuine emergencies. Life happens! We get it.",
  },
  {
    emoji: "💪",
    title: "Strict Mode",
    description: "For when you're ready to commit fully. No way to unlock apps except hitting your step goal. Maximum accountability.",
  },
  {
    emoji: "🔥",
    title: "Progress Tracking",
    description: "Track your streaks and compete with yourself. Beat your personal best. Watch your daily wins add up into unstoppable momentum.",
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
            How It Works
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

