import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 py-12 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Centered Social Proof Badge - At Top */}
        <div className="flex justify-center mb-12">
          <Image
            src="/social-proof.png"
            alt="brb social proof"
            width={200}
            height={50}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex justify-between gap-16">
          {/* Left Column: brb */}
          <div>
            <h3 className="text-text-light font-semibold mb-3">brb</h3>
            <div className="flex flex-col gap-2">
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

          {/* Right Column: Legal */}
          <div>
            <h3 className="text-text-light font-semibold mb-3">Legal</h3>
            <div className="flex flex-col gap-2">
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

