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
              {/* Instagram */}
              <a
                href="https://instagram.com/berightbackapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary-green transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

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

              {/* Threads */}
              <a
                href="https://threads.net/@berightbackapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary-green transition-colors"
                aria-label="Threads"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.058 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.021 0-1.923-.247-2.616-.716a2.682 2.682 0 01-1.08-1.49c-.311-.754-.404-2.06.027-3.688.457-1.718 1.504-4.856 2.077-6.533l.018-.055c.378-1.107.731-2.157 1.046-3.138.32-.99.664-2.052 1.025-3.161l1.965.625c-.355 1.09-.697 2.134-1.01 3.103-.318.987-.674 2.045-1.055 3.163l-.026.076c-.573 1.677-1.614 4.792-2.068 6.492-.36 1.346-.312 2.32-.145 2.713.066.155.175.289.33.396.369.255.947.404 1.588.404 1.059 0 1.902-.409 2.448-1.19.405-.577.708-1.386.878-2.35a6.027 6.027 0 00-.36-.155c-.909-.352-1.69-.848-2.324-1.473-.951-.938-1.518-2.152-1.518-3.426 0-1.555.658-2.94 1.853-3.897 1.125-.9 2.595-1.396 4.25-1.396 1.661 0 3.134.497 4.262 1.397 1.196.956 1.854 2.342 1.854 3.897 0 2.091-.622 3.912-1.853 5.414-1.38 1.684-3.434 2.618-6.326 2.644zM12 6.868c-1.219 0-2.24.345-2.95.997-.648.595-1.006 1.414-1.006 2.303 0 .889.358 1.708 1.006 2.303.71.652 1.731.997 2.95.997 1.219 0 2.24-.345 2.95-.997.648-.595 1.006-1.414 1.006-2.303 0-.889-.358-1.708-1.006-2.303-.71-.652-1.731-.997-2.95-.997z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
