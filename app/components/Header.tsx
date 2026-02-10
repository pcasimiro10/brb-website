"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-6 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="brb logo"
              width={80}
              height={40}
              className="w-20 md:w-24 hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Center Navigation - Desktop Only */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-text-light hover:text-primary-green transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="text-text-light hover:text-primary-green transition-colors text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-text-light hover:text-primary-green transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center gap-4">
            {/* TikTok */}
            <a
              href="https://tiktok.com/@berightbackapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-primary-green transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/berightbackapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-primary-green transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
            aria-label="Open menu"
          >
            <span className="w-8 h-0.5 bg-text-light transition-all"></span>
            <span className="w-6 h-0.5 bg-text-light transition-all"></span>
            <span className="w-8 h-0.5 bg-text-light transition-all"></span>
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col px-6 py-6"
          >
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-12">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="brb logo"
                  width={80}
                  height={40}
                  className="w-20"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-text-light hover:text-primary-green transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl font-bold text-text-light hover:text-primary-green transition-colors block"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/faq"
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl font-bold text-text-light hover:text-primary-green transition-colors block"
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl font-bold text-text-light hover:text-primary-green transition-colors block"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>

            {/* Social Icons at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              {/* TikTok */}
              <a
                href="https://tiktok.com/@berightbackapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary-green transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/berightbackapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary-green transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
