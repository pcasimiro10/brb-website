import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - brb",
  description: "Terms of Service for brb - Move First, Scroll Later",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-text-muted mb-12">Effective date: January 2, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="text-text-muted leading-relaxed">
            Welcome to brb (&quot;the App&quot;). By downloading or using the App, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">2. App Services</h2>
          
          <h3 className="text-xl font-bold mb-3">2.1 Features</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>Track daily steps via Apple HealthKit integration</li>
            <li>Block apps using iOS Family Controls APIs</li>
            <li>Unlock blocked apps when step goal is reached</li>
            <li>Customize daily step goals</li>
            <li>Track streaks and win rates</li>
            <li>View weekly progress calendar</li>
            <li>Access historical step and unlock data</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">2.2 Pricing and Payments</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>The App is available through in-app purchase with subscription options that may include weekly, monthly, or annual subscriptions</li>
            <li>All prices are shown in your local currency within the App</li>
            <li>Prices may vary by region and are subject to change</li>
            <li>Payment will be charged to your iTunes Account at confirmation of purchase</li>
            <li>Subscriptions automatically renew unless auto-renew is turned off at least 24-hours before the end of the current period</li>
            <li>Your account may be charged for renewal within 24-hours prior to the end of the current period</li>
            <li>You can manage and cancel subscriptions in your iTunes Account settings</li>
            <li>If you cancel, you will retain access to App features until the end of the current billing period</li>
            <li>No refunds will be issued for any unused portion of a subscription period</li>
            <li>There are no long-term contracts; you can change or cancel your plan at any time through your iTunes Account settings</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">2.3 App Blocking Functionality</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>The App uses iOS Family Controls APIs to restrict access to selected applications</li>
            <li>Locked apps remain inaccessible until your daily step goal is achieved</li>
            <li>You can configure which apps to block and customize your step goal within the App</li>
            <li>Apps unlock automatically when you reach your configured step target</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">2.4 HealthKit Integration</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>The App integrates with Apple HealthKit to read your daily step count</li>
            <li>You must grant HealthKit permission for the App to function properly</li>
            <li>Your health data is used solely to track progress toward your step goal</li>
            <li>We do not share your HealthKit data with third parties</li>
            <li>Step data is stored locally on your device and synced via iCloud if enabled</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">3. User Rights and Obligations</h2>
          
          <h3 className="text-xl font-bold mb-3">3.1 Age and Consent</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>The App is available for users of all ages</li>
            <li>Users under 13 must have parent or guardian consent</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">3.2 Acceptable Use</h3>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-2">
            <li>{`You agree not to circumvent or attempt to circumvent the App's blocking mechanisms`}</li>
            <li>You agree not to use the App for any unlawful purpose</li>
            <li>You are responsible for all activity that occurs under your account</li>
            <li>You agree not to reverse engineer or attempt to extract the source code</li>
            <li>You agree not to use the App in any way that could damage or overburden our infrastructure</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Changes to Service</h2>
          <p className="text-text-muted leading-relaxed mb-4">We reserve the right to:</p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
            <li>Modify or discontinue any part of the service</li>
            <li>Change subscription prices or availability</li>
            <li>Update these terms with reasonable notice</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            The App is provided &quot;as is&quot; without warranties. We are not responsible for:
          </p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
            <li>Inability to access locked apps</li>
            <li>Any consequences of app locking or unlocking</li>
            <li>Step tracking accuracy or HealthKit data discrepancies</li>
            <li>Interruptions in service availability</li>
            <li>Any losses or damages resulting from your use of the App</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Termination</h2>
          <p className="text-text-muted leading-relaxed">
            We reserve the right to terminate or suspend access to the App for violations of these terms or for any other reason at our discretion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Contact</h2>
          <p className="text-text-muted leading-relaxed">
            If you have any questions about these terms, please contact us at{" "}
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
          <a href="mailto:betterdailyapp@gmail.com" className="text-text-muted hover:text-text-light transition-colors">
            Contact
          </a>
          <p className="text-text-muted text-sm mt-6">© 2025 brb. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

