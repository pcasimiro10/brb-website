export type FAQ = {
  question: string;
  answer: string;
};

export type FAQSection = {
  emoji: string;
  title: string;
  faqs: FAQ[];
};

export const faqSections: FAQSection[] = [
  {
    emoji: "📱",
    title: "Getting Started",
    faqs: [
      {
        question: "How does brb work?",
        answer:
          "brb blocks your chosen apps every morning. As you walk and reach your daily step goal, your apps unlock. Move first, scroll later.",
      },
      {
        question: "How do I set up app blocking?",
        answer:
          'Go to the "Block Apps" tab, select which apps to block, then set your daily step goal. brb will request Screen Time permissions to manage blocking.',
      },
      {
        question: "What apps can brb block?",
        answer:
          "Any app on your iPhone - social media, games, news, browsers, whatever distracts you. You have complete control over which apps to block.",
      },
      {
        question: "How do I change my step goal?",
        answer:
          'Tap the Settings icon, then adjust your "Daily Step Goal." Start with a realistic target (like 5,000 steps) and increase it as you build the habit.',
      },
    ],
  },
  {
    emoji: "⚠️",
    title: "Troubleshooting",
    faqs: [
      {
        question: "My apps aren't locking or unlocking properly",
        answer: `If locked apps are still accessible or unlocked apps remain locked, try these steps:
1. Check your blocked apps list - Go to the Block Apps page in brb and make sure the apps you want blocked are actually in your list. You can add or remove apps here.
2. Verify Screen Time permissions - Go to iOS Settings > Screen Time and make sure brb has the necessary permissions enabled.
3. Remove conflicting Screen Time limits - If you have manual Screen Time limits or Downtime schedules in iOS Settings, remove them as they can conflict with brb.
4. Restart your iPhone - Sometimes iOS needs a restart to sync Screen Time changes properly.
5. If issues persist, contact support at berightbackapp@gmail.com`,
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
        answer:
          "A streak is the number of consecutive days you've hit your step goal. The longer your streak, the more you're building the habit of moving more.",
      },
      {
        question: "What is win rate?",
        answer:
          "Win rate shows the percentage of days you've successfully hit your goal. For example, if you hit your goal 5 out of 7 days, your win rate is 71%.",
      },
      {
        question: "Can I unlock apps before hitting my goal?",
        answer:
          "No. That's the point! brb uses Apple's Screen Time API, which cannot be bypassed. The only way to unlock your apps is to reach your step goal.",
      },
      {
        question: "What happens if I need to access a locked app in an emergency?",
        answer:
          'brb includes a 5-minute Emergency Unlock feature on the Block Apps page. Tap "Emergency Unlock" to immediately access all locked apps for 5 minutes. You can use this once per day (resets at midnight). Use it wisely for truly urgent situations - the goal is to build the habit of moving first, not finding ways around it.',
      },
    ],
  },
  {
    emoji: "🔒",
    title: "Privacy & Data",
    faqs: [
      {
        question: "Is my health data private?",
        answer:
          "Yes. All your step data, blocked app list, and progress stay on your device only. brb doesn't send any data to servers or share it with third parties. See our Privacy Policy for full details.",
      },
      {
        question: "Why does brb need HealthKit permission?",
        answer:
          "brb needs to read your daily step count from Apple Health to determine when you've reached your goal and should unlock your apps.",
      },
      {
        question: "Why does brb need Screen Time permission?",
        answer:
          "Screen Time permission allows brb to lock and unlock apps on your device. This is the same system Apple uses for parental controls - it's secure and cannot be bypassed.",
      },
    ],
  },
  {
    emoji: "📱",
    title: "Technical",
    faqs: [
      {
        question: "What devices does brb support?",
        answer:
          "brb requires iOS 16 or later and works on all iPhone models. iPad support coming soon.",
      },
      {
        question: "Is brb available for Android?",
        answer:
          "Not yet. brb is currently iOS-only because it relies on Apple's HealthKit and Screen Time APIs. We're exploring Android options for the future.",
      },
      {
        question: "Can I use brb on multiple devices?",
        answer:
          "Yes, but each device tracks independently. If you use multiple iPhones, you'll need to set up brb on each one separately.",
      },
    ],
  },
  {
    emoji: "💬",
    title: "Support & Contact",
    faqs: [
      {
        question: "How do I report a bug or request a feature?",
        answer:
          "Email us at berightbackapp@gmail.com with details about the issue or your feature suggestion. We read every message and prioritize based on user feedback.",
      },
      {
        question: "I have a question not answered here",
        answer:
          "Contact us at berightbackapp@gmail.com and we'll help you out. We typically respond within 24 hours.",
      },
    ],
  },
];
