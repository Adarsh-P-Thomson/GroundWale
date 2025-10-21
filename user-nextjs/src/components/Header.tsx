// Header component - Sticky navigation bar with logo and navigation links
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl px-4 py-2 rounded-2xl">
              GW
            </div>
            <span className="text-2xl font-bold text-dark">GroundWale</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dark hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/static/faq" className="text-dark hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/login" className="text-dark hover:text-primary transition-colors">
              Login
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            <Link
              href="/"
              className="block text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/static/faq"
              className="block text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="block text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-2xl shadow-lg">
              Book Now
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
