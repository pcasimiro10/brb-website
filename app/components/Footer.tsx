export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-text-muted">
            <a href="/privacy" className="hover:text-text-light transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-text-light transition-colors">
              Terms
            </a>
            <a href="/contact" className="hover:text-text-light transition-colors">
              Contact
            </a>
            <a href="/faq" className="hover:text-text-light transition-colors">
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-sm">
            <p>&copy; 2025 brb. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

