"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    copy: "Pick your daily steps: 2,000 (starter), 5,000 (solid), 10,000+ (beast mode). The moment you save, your apps lock and stay locked until you hit your goal. Want to check Instagram? Go for a walk. Choose Strict Mode for zero compromises, or keep the 5-minute emergency unlock if needed.",
    image: "/goal-setting.png",
  },
  {
    number: "03",
    title: "WALK TO UNLOCK",
    copy: "Every step fills that circle. Track your progress in real-time all day. Hit 100%? Everything unlocks instantly and that green glow is deeply satisfying. Miss your goal? Apps stay locked until tomorrow. Build streaks that actually stick.",
    image: "/unlock.png",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
        >
          How It Works
        </motion.h2>

        {/* Section Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-16"
        >
          brb blocks Instagram, TikTok, or any distracting app until you hit your daily step goal.
        </motion.p>

        {/* Steps + Image Layout */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start">
          {/* Left: Clickable Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`p-6 lg:p-8 rounded-2xl transition-all ${
                    isActive ? 'bg-dark-secondary' : 'bg-transparent hover:bg-dark-secondary/30'
                  }`}>
                    {/* Number + Title */}
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className={`text-3xl md:text-4xl font-black transition-colors ${
                        isActive ? 'text-primary-green' : 'text-text-muted'
                      }`}>
                        {step.number}
                      </span>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${
                          isActive ? 'text-text-light' : 'text-text-muted'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Green accent line (only for active) */}
                    {isActive && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.4 }}
                        className="h-1 bg-primary-green mb-4"
                      />
                    )}

                    {/* Copy (only visible when active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-base md:text-lg text-text-light leading-relaxed"
                        >
                          {step.copy}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Phone Image (Sticky) */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm mx-auto"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={`brb app - ${steps[activeStep].title}`}
                    width={320}
                    height={640}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
