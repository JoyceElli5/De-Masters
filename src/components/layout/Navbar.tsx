'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Home01Icon,
  InformationCircleIcon,
  Book01Icon,
  Mortarboard01Icon,
  Mail01Icon,
} from '@hugeicons/core-free-icons';
import { useScroll } from '@/src/hooks/useScroll';

const navLinks = [
  { label: 'Home', href: '/', icon: Home01Icon },
  { label: 'About', href: '/about', icon: InformationCircleIcon },
  { label: 'Programs', href: '/programs', icon: Book01Icon },
  { label: 'Admissions', href: '/admissions', icon: Mortarboard01Icon },
  { label: 'Contact', href: '/contact', icon: Mail01Icon },
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
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight transition-transform duration-300 hover:scale-105">
          <span className="text-white font-bold text-xl tracking-wide">
            De-Masters
          </span>
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
            Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={[
                'relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300',
                pathname === href
                  ? 'text-brand-red bg-white'
                  : 'text-white/90 hover:text-white hover:bg-white/15 hover:-translate-y-0.5',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="bg-brand-red text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-red-dark hover:-translate-y-0.5 transition-all duration-300"
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
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu backdrop"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-16 bg-black/35 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="md:hidden absolute top-full left-4 right-4 mt-3"
            >
              <nav className="rounded-3xl border border-white/20 bg-brand-blue/95 backdrop-blur-xl p-3 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map(({ label, href, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'flex items-center gap-2.5 px-3 py-3 rounded-2xl text-sm font-semibold transition-all',
                        pathname === href
                          ? 'bg-white text-brand-blue'
                          : 'text-white/90 bg-white/5 hover:bg-white/10',
                      ].join(' ')}
                    >
                      <HugeiconsIcon icon={icon} size={18} />
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 bg-brand-red text-white text-center font-semibold px-5 py-3 rounded-2xl hover:bg-brand-red-dark transition-colors block"
                >
                  Apply Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
