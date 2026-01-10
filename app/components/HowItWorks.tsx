"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Set your step goal",
  },
  {
    number: "2",
    title: "Choose which apps to block",
  },
  {
    number: "3",
    title: "Move",
  },
  {
    number: "4",
    title: "Apps unlock",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-dark-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-text-muted">
            Minimal setup. Maximum motivation to move.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-green text-dark-bg rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xl text-text-muted mt-12"
        >
          {`That's it.`}
        </motion.p>
      </div>
    </section>
  );
}
