"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSection = {
  emoji: string;
  title: string;
  faqs: FAQ[];
};

const faqSections: FAQSection[] = [
  {
    emoji: "📱",
    title: "Getting Started",
    faqs: [
      {
        question: "How does brb work?",
        answer: "brb blocks your chosen apps every morning. As you walk and reach your daily step goal, your apps unlock. Move first, scroll later.",
      },
      {
        question: "How do I set up app blocking?",
        answer: 'Go to the "Block Apps" tab, select which apps to block, then set your daily step goal. brb will request Screen Time permissions to manage blocking.',
      },
      {
        question: "What apps can brb block?",
        answer: "Any app on your iPhone - social media, games, news, browsers, whatever distracts you. You have complete control over which apps to block.",
      },
      {
        question: "How do I change my step goal?",
        answer: 'Tap the Settings icon, then adjust your "Daily Step Goal." Start with a realistic target (like 5,000 steps) and increase it as you build the habit.',
      },
    ],
  },
  {
    emoji: "⚠️",
    title: "Troubleshooting",
    faqs: [
      {
        question: "My apps aren't blocking or unlocking properly",
        answer: `If blocked apps are still accessible or unlocked apps remain blocked, try these steps:
1. Check your blocked apps list - Go to the Block Apps page in brb and make sure the apps you want blocked are actually in your list. You can add or remove apps here.
2. Verify Screen Time permissions - Go to iOS Settings > Screen Time and make sure brb has the necessary permissions enabled.
3. Remove conflicting Screen Time limits - If you have manual Screen Time limits or Downtime schedules in iOS Settings, remove them as they can conflict with brb.
4. Restart your iPhone - Sometimes iOS needs a restart to sync Screen Time changes properly.
5. If issues persist, contact support at betterdailyapp@gmail.com`,
      },
      {
        question: "Why is my step count not updating?",
        answer: `Step count updates rely on Apple HealthKit and Motion & Fitness sensors. Try:
1. Make sure brb has HealthKit permission (Settings > Health > Data Access)
2. Check that Motion & Fitness is enabled (Settings > Privacy > Motion & Fitness)
3. Open the Apple Health app to sync data
4. Pull down to refresh in brb
If your iPhone is low on battery, step tracking may be limited.`,
      },
      {
        question: "My streak reset even though I hit my goal",
        answer: `This can happen if:
- Data synced late from HealthKit (try refreshing)
- Your goal was changed mid-day
- You hit the goal after midnight
If you believe this is an error, contact us with the date and we'll investigate.`,
      },
    ],
  },
  {
    emoji: "🎯",
    title: "Understanding Features",
    faqs: [
      {
        question: "What is a streak?",
        answer: "A streak is the number of consecutive days you've hit your step goal. The longer your streak, the more you're building the habit of moving more.",
      },
      {
        question: "What is win rate?",
        answer: "Win rate shows the percentage of days you've successfully hit your goal. For example, if you hit your goal 5 out of 7 days, your win rate is 71%.",
      },
      {
        question: "Can I unlock apps before hitting my goal?",
        answer: "No. That's the point! brb uses Apple's Screen Time API, which cannot be bypassed. The only way to unlock your apps is to reach your step goal.",
      },
      {
        question: "What happens if I need to access a blocked app in an emergency?",
        answer: "brb includes a 5-minute Emergency Unlock feature on the Block Apps page. Tap \"Emergency Unlock\" to immediately access all blocked apps for 5 minutes. You can use this once per day (resets at midnight). Use it wisely for truly urgent situations - the goal is to build the habit of moving first, not finding ways around it.",
      },
    ],
  },
  {
    emoji: "🔒",
    title: "Privacy & Data",
    faqs: [
      {
        question: "Is my health data private?",
        answer: "Yes. All your step data, blocked apps, and progress stay on your device only. brb doesn't send any data to servers or share it with third parties. See our Privacy Policy for full details.",
      },
      {
        question: "Why does brb need HealthKit permission?",
        answer: "brb needs to read your daily step count from Apple Health to determine when you've reached your goal and should unlock your apps.",
      },
      {
        question: "Why does brb need Screen Time permission?",
        answer: "Screen Time permission allows brb to block and unblock apps on your device. This is the same system Apple uses for parental controls - it's secure and cannot be bypassed.",
      },
    ],
  },
  {
    emoji: "📱",
    title: "Technical",
    faqs: [
      {
        question: "What devices does brb support?",
        answer: "brb requires iOS 16 or later and works on all iPhone models. iPad support coming soon.",
      },
      {
        question: "Is brb available for Android?",
        answer: "Not yet. brb is currently iOS-only because it relies on Apple's HealthKit and Screen Time APIs. We're exploring Android options for the future.",
      },
      {
        question: "Can I use brb on multiple devices?",
        answer: "Yes, but each device tracks independently. If you use multiple iPhones, you'll need to set up brb on each one separately.",
      },
    ],
  },
  {
    emoji: "💬",
    title: "Support & Contact",
    faqs: [
      {
        question: "How do I report a bug or request a feature?",
        answer: "Email us at betterdailyapp@gmail.com with details about the issue or your feature suggestion. We read every message and prioritize based on user feedback.",
      },
      {
        question: "I have a question not answered here",
        answer: "Contact us at betterdailyapp@gmail.com and we'll help you out. We typically respond within 24 hours.",
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    const key = `${sectionIndex}-${questionIndex}`;
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-text-muted">Everything you need to know about brb</p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-dark-secondary rounded-2xl overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full flex items-center justify-between p-6 hover:bg-dark-secondary/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{section.emoji}</span>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <motion.div
                  animate={{ rotate: expandedSections.has(sectionIndex) ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl text-primary-green"
                >
                  +
                </motion.div>
              </button>

              {/* Questions */}
              <AnimatePresence>
                {expandedSections.has(sectionIndex) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4">
                      {section.faqs.map((faq, faqIndex) => {
                        const key = `${sectionIndex}-${faqIndex}`;
                        const isExpanded = expandedQuestions.has(key);

                        return (
                          <div key={faqIndex} className="border-t border-text-muted/10 pt-4">
                            <button
                              onClick={() => toggleQuestion(sectionIndex, faqIndex)}
                              className="w-full flex items-start justify-between gap-4 text-left hover:text-primary-green transition-colors"
                            >
                              <span className="text-lg font-medium flex-1">{faq.question}</span>
                              <motion.div
                                animate={{ rotate: isExpanded ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-2xl text-primary-green flex-shrink-0"
                              >
                                +
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <p className="text-text-muted leading-relaxed mt-3 whitespace-pre-line">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-dark-secondary rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl text-text-muted mb-8">
            {`Can't find what you're looking for? We're here to help.`}
          </p>
          <a
            href="mailto:betterdailyapp@gmail.com"
            className="inline-block bg-primary-green text-dark-bg font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-green/90 transition-all duration-300 hover:scale-105"
          >
            Email Support
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-dark-secondary text-center">
          <Link href="/" className="text-text-muted hover:text-text-light transition-colors">
            Home
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/privacy" className="text-text-muted hover:text-text-light transition-colors">
            Privacy
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/terms" className="text-text-muted hover:text-text-light transition-colors">
            Terms
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/contact" className="text-text-muted hover:text-text-light transition-colors">
            Contact
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/faq" className="text-text-muted hover:text-text-light transition-colors">
            FAQ
          </Link>
          <p className="text-text-muted text-sm mt-6">© 2025 brb. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

