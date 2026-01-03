# brb - Move First, Scroll Later

A beautiful, conversion-focused landing page for **brb**, an iOS fitness gamification app that transforms your biggest distraction into your biggest motivation.

## 🎯 About brb

brb blocks your distracting apps until you hit your daily step goal. Every morning, the apps you choose get locked—Instagram, TikTok, games, whatever steals your time. The only way to unlock them? Hit your step goal. No cheating. No exceptions. Just movement.

**Core Mechanism:**
- Your apps become your reward for movement
- Uses Apple's Screen Time API for unbreakable enforcement
- Helps you become someone who moves

**Key Features:**
- Tracks daily step count via HealthKit
- Blocks chosen apps using Screen Time API
- Unlocks apps when you hit your step goal
- Streak tracking and win rate monitoring
- Customizable goals and app selection

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Image Optimization:** Next.js Image component

## 📁 Project Structure

```
brb-website/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Hero with empathetic headline
│   │   ├── ValueProposition.tsx  # "Biggest distraction → motivation"
│   │   ├── Features.tsx          # 3 psychological benefit cards
│   │   ├── HowItWorks.tsx        # 3-step habit formation
│   │   ├── CTA.tsx               # Final conversion section
│   │   └── Footer.tsx            # Minimal footer with tagline
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles and Tailwind
├── public/
│   ├── logo.png                  # brb logo
│   ├── hero-phone.png            # iPhone mockup
│   └── app-store-badge.png       # App Store download badge
└── tailwind.config.ts            # Custom brand colors
```

## 📝 Copy & Messaging

The landing page follows a psychological framework:

1. **Recognition:** "You know you should move more. You know you should scroll less."
2. **Mechanism:** Show how apps become motivation through blocking
3. **Identity:** Help them see themselves as "someone who moves"

### Key Headlines:
- Hero: "You know you should move more. You know you should scroll less."
- Value Prop: "What if your biggest distraction became your biggest motivation?"
- Features: "How brb works"
- How It Works: "Three steps to a new habit"
- CTA: "Your next scroll starts with your next step."

### Tone Guidelines:
- Empathetic and understanding (no guilt)
- Direct and honest (no corporate buzzwords)
- Motivating but not preachy (supportive friend)
- Simple and clear (short sentences, scannable)

## ✨ Features

- **Conversion-Focused Copy:** Empathetic, psychological messaging that resonates
- **Identity Transformation:** "Become someone who moves" positioning
- **Clear Differentiation:** Apps as motivation, not just blockers
- **Minimalist Design:** Inspired by thebrainrotapp.com aesthetic
- **Centered Layout:** Phone mockup as hero, spacious and breathable
- **Simple Animations:** Subtle fade-in effects using Framer Motion
- **No Waitlist/Modal:** Direct App Store links (ready for launch)
- **Official App Store Badge:** Apple's official download badge
- **SEO Optimized:** Conversion-focused meta descriptions
- **Accessible:** Semantic HTML, alt text, ARIA labels
- **Performance:** Optimized images and modern React patterns

## 🚢 Deployment

The site is ready to deploy to Vercel:

```bash
npm run build
```

Or deploy directly to Vercel by connecting your GitHub repository.

## 📱 Responsive Breakpoints

- **Mobile:** 375px
- **Tablet:** 768px
- **Desktop:** 1440px+

## 📝 License

© 2025 brb. All rights reserved.

