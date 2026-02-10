import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0F0F0F]">
      <div className="max-w-5xl mx-auto">
        {/* Three Column Layout: brb, Social Proof (center), Legal */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-40 lg:gap-48">
          {/* Left Column: brb */}
          <div className="flex-shrink-0">
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

          {/* Center: Social Proof */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Image
              src="/social-proof.png"
              alt="brb social proof"
              width={160}
              height={53}
              className="opacity-80"
            />
          </div>

          {/* Right Column: Legal */}
          <div className="flex-shrink-0">
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

