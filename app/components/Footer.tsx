import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-text-muted">
            <a href="/faq" className="hover:text-text-light transition-colors">
              FAQ
            </a>
            <span className="text-text-muted">•</span>
            <a href="/terms" className="hover:text-text-light transition-colors">
              Terms
            </a>
            <span className="text-text-muted">•</span>
            <a href="/privacy" className="hover:text-text-light transition-colors">
              Privacy
            </a>
            <span className="text-text-muted">•</span>
            <a href="/contact" className="hover:text-text-light transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-sm">
            <p>&copy; 2026 brb. Your apps will be right back.</p>
          </div>

          {/* App Store Badge */}
          <div className="flex justify-center">
            <a href="#">
              <Image
                src="/app-store-badge.png"
                alt="Download on the App Store"
                width={140}
                height={47}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

