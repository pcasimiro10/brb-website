"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "BLOCK DISTRACTING APPS",
    copy: "brb shows your most-used apps ranked by screen time. Select the ones that steal your attention: Instagram, TikTok, Twitter, whatever. Lock them all with one tap.",
    image: "/block-apps.png",
  },
  {
    number: "02",
    title: "SET YOUR GOAL",
    copy: "Set your daily step goal. Your apps lock until you hit it. Want to scroll? Start moving.",
    image: "/goal-setting.png",
  },
  {
    number: "03",
    title: "WALK TO UNLOCK",
    copy: "Watch that ring fill with every step. Hit 100%? Apps unlock. Miss it? They stay locked. Track your streaks, compete with yourself, build habits that actually last.",
    image: "/unlock.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24"
        >
          How It Works
        </motion.h2>

        {/* Alternating Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isImageRight ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Content */}
                <div className={`${isImageRight ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  {/* Number */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl font-black text-primary-green block mb-4"
                  >
                    {step.number}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Green accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="h-1 bg-primary-green mb-6"
                  />

                  {/* Copy */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-text-light leading-relaxed"
                  >
                    {step.copy}
                  </motion.p>
                </div>

                {/* Phone Image */}
                <div className={`${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-xs mx-auto lg:max-w-sm"
                  >
                    <Image
                      src={step.image}
                      alt={`brb app - ${step.title}`}
                      width={400}
                      height={800}
                      className="w-full h-auto drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
