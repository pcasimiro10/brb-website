"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "40",
    suffix: "%",
    label: "More steps\ndaily",
  },
  {
    value: "2",
    suffix: "+ hrs",
    label: "Less scrolling\ndaily",
  },
  {
    value: "100",
    suffix: "%",
    label: "Put movement\nbefore screen time",
  },
];

function CountUpNumber({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value);

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-green">
      {isNaN(numericValue) ? value : count}
      {suffix}
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-base md:text-lg text-text-muted mt-3 whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-green/20 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-text-light italic mb-4">
            {`"I've walked more in the last 2 weeks than I did all last month. This app actually works."`}
          </p>
          <p className="text-sm text-text-muted">- Christine C.</p>
        </motion.div>
      </div>
    </section>
  );
}
