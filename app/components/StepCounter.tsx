"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepCounter() {
  const baseSteps = 50000000;
  const [steps, setSteps] = useState(baseSteps);

  useEffect(() => {
    // More aggressive: increment every 500ms
    const interval = setInterval(() => {
      setSteps((prev) => prev + 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const stepsString = formatNumber(steps);
  const digits = stepsString.split('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-dark-secondary/90 backdrop-blur-sm border border-primary-green/20 rounded-full px-4 py-2 shadow-2xl opacity-90">
        <div className="flex items-baseline gap-2">
          <div className="flex items-center tabular-nums text-lg md:text-xl font-bold text-primary-green">
            <AnimatePresence mode="popLayout">
              {digits.map((digit, index) => (
                <motion.span
                  key={`${index}-${digit}-${steps}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {digit}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
          <span className="text-xs md:text-sm text-text-muted whitespace-nowrap">
            steps taken with brb
          </span>
        </div>
      </div>
    </motion.div>
  );
}
