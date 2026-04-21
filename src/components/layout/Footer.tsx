import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const quickLinks = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'       },
  { label: 'Programs',   href: '/programs'    },
  { label: 'Admissions', href: '/admissions'  },
  { label: 'Contact',    href: '/contact'     },
];

const contactItems = [
  { Icon: MapPin,  text: '123 Academy Road, Education District, Ghana' },
  { Icon: Phone,   text: '+233 00 000 0000',                             href: 'tel:+233000000000' },
  { Icon: Mail,    text: 'info@demastersacademy.edu.gh',                 href: 'mailto:info@demastersacademy.edu.gh' },
  { Icon: Clock,   text: 'Mon – Fri: 7:30 AM – 4:00 PM' },
];

/* TikTok SVG — not in lucide-react */
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="relative w-11 h-11 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="De-Masters Academy crest"
                fill
                sizes="44px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-wide">De-Masters</span>
              <span className="text-accent font-bold text-[8px] tracking-[0.3em] uppercase mt-0.5">Academy</span>
            </div>
          </Link>

          <p className="text-white/50 text-sm leading-relaxed">
            Shaping the leaders of tomorrow through excellence, discipline, and innovation.
          </p>

          <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-semibold">
            Trust &amp; Hardwork
          </p>

          {/* Socials */}
          <div className="flex flex-col gap-3 mt-1">
            <a
              href="https://www.instagram.com/de_masters_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
              aria-label="Instagram: @de_masters_academy"
            >
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                <InstagramIcon size={14} />
              </div>
              <span className="text-white/45 text-sm group-hover:text-white transition-colors duration-200">
                @de_masters_academy
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@de_masters_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
              aria-label="TikTok: @de_masters_academy"
            >
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-accent transition-colors duration-200 text-white/70 group-hover:text-white">
                <TikTokIcon size={14} />
              </div>
              <span className="text-white/45 text-sm group-hover:text-white transition-colors duration-200">
                @de_masters_academy
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            {contactItems.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={14} className="text-white/35 flex-shrink-0 mt-0.5" />
                {href ? (
                  <a href={href} className="text-white/50 hover:text-white text-sm leading-relaxed transition-colors duration-200">
                    {text}
                  </a>
                ) : (
                  <span className="text-white/50 text-sm leading-relaxed">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} De-Masters Academy. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase">Trust &amp; Hardwork</p>
        </div>
      </div>
    </footer>
  );
}
