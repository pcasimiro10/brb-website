import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0F0F0F]">
      <div className="max-w-5xl mx-auto">
        {/* Grid Layout: 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Left Column: brb */}
          <div className="md:order-1">
            <h3 className="text-text-light font-semibold mb-3">brb</h3>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <a
                href="#"
                className="text-text-muted hover:text-text-light transition-colors text-sm"
              >
                App Store
              </a>
              <Link
                href="/contact"
                className="text-text-muted hover:text-text-light transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Center: Social Proof (center on desktop, bottom on mobile) */}
          <div className="order-3 md:order-2 flex items-center justify-center">
            <Image
              src="/social-proof.png"
              alt="brb social proof"
              width={160}
              height={53}
              className="opacity-80"
            />
          </div>

          {/* Right Column: Legal */}
          <div className="md:order-3">
            <h3 className="text-text-light font-semibold mb-3">Legal</h3>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <Link
                href="/faq"
                className="text-text-muted hover:text-text-light transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                href="/privacy"
                className="text-text-muted hover:text-text-light transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-text-muted hover:text-text-light transition-colors text-sm"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

