import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0F0F0F]">
      <div className="max-w-5xl mx-auto">
        {/* Flex Layout: 3 columns spread on desktop, stacked on mobile */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          {/* Left Column: brb */}
          <div className="order-1 text-center md:text-left">
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

          {/* Center: Social Proof (bottom on mobile, center on desktop) */}
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
          <div className="order-2 md:order-3 text-center md:text-left">
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

