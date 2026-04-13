'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/src/hooks/useScroll';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const scrolled = useScroll(50);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-blue shadow-lg py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-xl tracking-wide">
            De-Masters
          </span>
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
            Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={[
                'text-sm font-medium transition-colors duration-200',
                pathname === href
                  ? 'text-brand-red'
                  : 'text-white/90 hover:text-white',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="bg-brand-red text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-red-dark transition-colors duration-200"
          >
            Apply Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-brand-blue border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'py-3 text-base font-medium border-b border-white/10 last:border-0 transition-colors',
                    pathname === href ? 'text-brand-red' : 'text-white/90 hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-brand-red text-white text-center font-semibold px-5 py-3 rounded-lg hover:bg-brand-red-dark transition-colors"
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
