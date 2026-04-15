'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/src/hooks/useScroll';
import { Menu01Icon, Cancel01Icon } from 'hugeicons-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

function LogoMark() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    /* Fallback: initials shield */
    return (
      <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center flex-shrink-0">
        <span className="text-white font-black text-sm tracking-tight">DM</span>
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="De-Masters Academy crest"
        fill
        sizes="40px"
        className="object-contain drop-shadow-sm"
        priority
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScroll(60);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-blue/97 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-[17px] tracking-wide">
              De-Masters
            </span>
            <span className="text-brand-red text-[9px] font-bold tracking-[0.3em] uppercase">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 group',
                  active ? 'text-white' : 'text-white/75 hover:text-white hover:bg-white/8',
                ].join(' ')}
              >
                {label}
                <span
                  className={[
                    'absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-brand-red',
                    'transition-transform duration-300 origin-left',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  ].join(' ')}
                />
              </Link>
            );
          })}
          <Link
            href="/admissions"
            className="ml-3 bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded-2xl hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/30 transition-all duration-300"
            style={{ transition: 'all 0.25s var(--bounce)' }}
          >
            Apply Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          {menuOpen ? <Cancel01Icon size={22} /> : <Menu01Icon size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden bg-brand-blue border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'py-3 px-4 rounded-xl text-base font-medium transition-colors',
                      'border-b border-white/8 last:border-0',
                      active ? 'text-brand-red bg-brand-red/8' : 'text-white/80 hover:text-white hover:bg-white/8',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-brand-red text-white text-center font-semibold px-5 py-3 rounded-2xl hover:bg-brand-red-dark transition-colors"
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
