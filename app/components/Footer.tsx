import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-dark-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-8 mb-8">
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

        {/* Centered Social Proof Badge */}
        <div className="flex justify-center">
          <Image
            src="/social-proof.png"
            alt="brb social proof"
            width={200}
            height={50}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
}

