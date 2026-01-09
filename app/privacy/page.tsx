import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - brb",
  description: "Privacy Policy for brb - Move First, Scroll Later",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-text-muted mb-12">Last Updated: January 2, 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            At brb, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our iOS application.
          </p>
          <p className="text-text-muted leading-relaxed">
            The fundamental principle of brb is that your data stays on your device. We don't collect, store, or transmit your personal information to any servers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">1. Information Collection</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            brb requires certain iOS permissions to function properly. Here's what we need and why:
          </p>
          
          <div className="bg-dark-secondary rounded-lg p-6 mb-6">
            <p className="text-text-light font-bold mb-4">Required permissions:</p>
            <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
              <li><strong className="text-text-light">HealthKit:</strong> to track your daily step count and activity history</li>
              <li><strong className="text-text-light">Motion & Fitness:</strong> to track your real-time movement throughout the day</li>
              <li><strong className="text-text-light">Screen Time:</strong> to manage app blocking and unlock schedules based on your progress</li>
              <li><strong className="text-text-light">Notifications:</strong> to send you progress updates, reminders, and motivational alerts</li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed">
            These permissions are used solely for the app's core functionality. We cannot access any other health data beyond step counts, and we never transmit this data off your device.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">2. Data Usage and Protection</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Your health and activity data is:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>Step count is read from Apple HealthKit and Motion & Fitness sensors</li>
            <li>Used only to determine if you've reached your goal and should unlock apps</li>
            <li>Stored locally on your device</li>
            <li>Not shared with third parties</li>
            <li>Not transmitted to our servers</li>
            <li>You can revoke HealthKit access at any time in iOS Settings</li>
          </ul>

          <p className="text-text-muted leading-relaxed">
            brb operates entirely on-device. Your step counts, blocked apps list, and progress data never leave your iPhone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">3. Data Collection and Usage</h2>
          
          <h3 className="text-xl font-bold mb-4">3.1 Data Not Linked to Your Identity</h3>
          <p className="text-text-muted leading-relaxed mb-4">
            The following data is collected and stored locally on your device:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>Daily step counts and activity history</li>
            <li>Your selected blocked apps list</li>
            <li>Daily goal targets and preferences</li>
            <li>Streak data and win rate statistics</li>
            <li>Progress tracking over time</li>
          </ul>

          <p className="text-text-muted leading-relaxed mb-4">All of this data:</p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>Remains on your device only</li>
            <li>Is not transmitted to any servers</li>
            <li>Is not shared with third parties</li>
            <li>Is not used for advertising or marketing</li>
            <li>Can be deleted by uninstalling the app</li>
          </ul>

          <p className="text-text-muted leading-relaxed">
            Your step count data and app blocking preferences remain:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
            <li>Locally on your device</li>
            <li>Without external data transmission</li>
            <li>Completely private and secure</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">4. Your Rights</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            You have complete control over your data:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
            <li>You can revoke any permission at any time through iOS Settings</li>
            <li>You can delete all app data by uninstalling brb</li>
            <li>You can reset your progress and settings within the app</li>
            <li>You control which apps are blocked and what your step goals are</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Data Retention</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Since all data is stored locally on your device, retention is entirely under your control. Data persists until you:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
            <li>Uninstall the app (removes all app data)</li>
            <li>Reset your device</li>
            <li>Manually delete data through the app's settings</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Changes to Privacy Policy</h2>
          <p className="text-text-muted leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-text-muted leading-relaxed">
            If you have any questions about this Privacy Policy or how brb handles your data, please contact us at{" "}
            <a href="mailto:betterdailyapp@gmail.com" className="text-primary-green hover:underline">
              betterdailyapp@gmail.com
            </a>
          </p>
        </section>

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
          <p className="text-text-muted text-sm mt-6">© 2025 brb. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

