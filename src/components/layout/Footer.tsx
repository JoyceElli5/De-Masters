import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Location01Icon,
  Call02Icon,
  Mail01Icon,
  Clock01Icon,
} from '@hugeicons/core-free-icons';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-bold tracking-wide">De-Masters</p>
            <p className="text-brand-red font-semibold text-sm tracking-widest uppercase">
              Academy
            </p>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Shaping the leaders of tomorrow through excellence, discipline, and
            innovation. A world-class learning experience for every child.
          </p>
          <p className="text-white/50 text-xs">Excellence • Discipline • Innovation</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/70 hover:text-brand-red text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-brand-red"><HugeiconsIcon icon={Location01Icon} size={18} /></span>
              <span>123 Academy Road, Education District, Ghana</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red"><HugeiconsIcon icon={Call02Icon} size={18} /></span>
              <a href="tel:+233000000000" className="hover:text-brand-red transition-colors">
                +233 00 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red"><HugeiconsIcon icon={Mail01Icon} size={18} /></span>
              <a
                href="mailto:info@demastersacademy.edu.gh"
                className="hover:text-brand-red transition-colors"
              >
                info@demastersacademy.edu.gh
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red"><HugeiconsIcon icon={Clock01Icon} size={18} /></span>
              <span>Mon – Fri: 7:30 AM – 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} De-Masters Academy. All rights reserved.</p>
          <p>Designed with excellence in mind.</p>
        </div>
      </div>
    </footer>
  );
}
