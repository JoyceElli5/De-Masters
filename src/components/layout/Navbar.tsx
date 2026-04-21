'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/src/hooks/useScroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'       },
  { label: 'Programs',   href: '/programs'    },
  { label: 'Admissions', href: '/admissions'  },
  { label: 'Contact',    href: '/contact'     },
];

function LogoMark() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
        <span className="text-white font-black text-xs tracking-tight">DM</span>
      </div>
    );
  }

  return (
    <div className="relative w-9 h-9 flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="De-Masters Academy crest"
        fill
        sizes="36px"
        className="object-contain"
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

  /* text colors shift between hero (white on dark) and scrolled (navy on white) */
  const linkBase    = scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white';
  const linkActive  = scrolled ? 'text-navy'                      : 'text-white';
  const iconColor   = scrolled ? '#002366'                        : 'white';

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="flex flex-col leading-none">
            <span
              className={`font-bold text-[15px] tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              De-Masters
            </span>
            <span className="text-accent text-[8px] font-bold tracking-[0.3em] uppercase">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group',
                  active ? linkActive : linkBase,
                ].join(' ')}
              >
                {label}
                <span
                  className={[
                    'absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full bg-accent',
                    'transition-transform duration-300 origin-left',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  ].join(' ')}
                />
              </Link>
            );
          })}

          <Link
            href="/admissions"
            className="ml-4 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-all duration-200"
          >
            Apply Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
            scrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'
          }`}
        >
          {menuOpen
            ? <X size={22} color={iconColor} />
            : <Menu size={22} color={iconColor} />}
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
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
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
                      'py-3 px-4 rounded-lg text-sm font-medium transition-colors border-b border-slate-50 last:border-0',
                      active
                        ? 'text-navy bg-blue-50 font-semibold'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-50',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-accent text-white text-center font-semibold px-5 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm"
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
