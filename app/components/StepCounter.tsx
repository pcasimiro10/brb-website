"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepCounter() {
  const baseSteps = 50000000;
  const [steps, setSteps] = useState(baseSteps);
  const prevStepsRef = useRef(baseSteps);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => {
        prevStepsRef.current = prev;
        return prev + 1000;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const stepsString = formatNumber(steps);
  const prevStepsString = formatNumber(prevStepsRef.current);
  const digits = stepsString.split('');
  const prevDigits = prevStepsString.split('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-0 right-0 z-40 flex justify-center"
    >
      <div className="bg-dark-secondary/60 backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 shadow-xl opacity-60">
        <div className="flex items-baseline gap-2">
          <div className="flex items-center tabular-nums text-base md:text-lg font-bold text-primary-green/60">
            {digits.map((digit, index) => {
              const hasChanged = prevDigits[index] !== digit;
              return (
                <span key={index} className="inline-block relative overflow-hidden h-[1.2em]">
                  {hasChanged ? (
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={`${index}-${digit}`}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        {digit}
                      </motion.span>
                    </AnimatePresence>
                  ) : (
                    <span>{digit}</span>
                  )}
                </span>
              );
            })}
          </div>
          <span className="text-xs md:text-sm text-text-muted/60 whitespace-nowrap">
            steps taken with brb
          </span>
        </div>
      </div>
    </motion.div>
  );
}
