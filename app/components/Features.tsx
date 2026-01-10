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
    description: "brb ranks your top distractions (TikTok, Reddit, YouTube, etc.) by screen time. One tap to block them.",
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
    description: "The ultimate commitment. Apps stay locked until you hit your goal. No exceptions, no shortcuts.",
  },
  {
    emoji: "🔥",
    title: "Progress Tracking",
    description: "Track your streaks and compete with yourself. Every day is a chance to beat your best.",
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
              className="group bg-dark-secondary rounded-2xl p-8 text-center border border-primary-green/0 hover:border-primary-green/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary-green/30 hover:bg-gradient-to-br hover:from-dark-secondary hover:to-primary-green/5 transition-all duration-300 ease-out"
            >
              <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 group-hover:translate-y-[-4px] transition-transform duration-200 delay-75">{feature.emoji}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary-green transition-colors duration-300">{feature.title}</h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

