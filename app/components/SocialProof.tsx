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
    suffix: "+ hours",
    label: "Less daily\nscreen time",
  },
  {
    value: "67",
    suffix: " days",
    label: "Average\nstreak",
  },
];

const testimonials = [
  {
    quote: "I've walked more in the last 2 weeks than I did all last month. This app actually works.",
    author: "Christine C.",
    initials: "CC",
  },
  {
    quote: "My Apple Watch thought I became a runner. Nope, just addicted to Instagram.",
    author: "Marcus T.",
    initials: "MT",
  },
  {
    quote: "10K steps just to check Twitter? Worth it every time.",
    author: "Sarah K.",
    initials: "SK",
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
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-green" style={{ textShadow: '0 0 40px rgba(191, 242, 77, 0.3)' }}>
      {isNaN(numericValue) ? value : count}
      {suffix}
    </div>
  );
}

// Generate consistent colors for avatars based on initials
function getAvatarColor(initials: string) {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
  ];
  const index = initials.charCodeAt(0) % colors.length;
  return colors[index];
}

export default function SocialProof() {
  return (
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Real Results
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
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
              <p className="text-base md:text-lg text-text-light mt-4 whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full ${getAvatarColor(testimonial.initials)} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                {testimonial.initials}
              </div>
              
              {/* Quote */}
              <p className="text-base md:text-lg text-text-light italic mb-3">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <p className="text-sm text-text-muted">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
