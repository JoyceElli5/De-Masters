import Link from 'next/link';
import Image from 'next/image';
import {
  Location01Icon,
  SmartPhone01Icon,
  Mail01Icon,
  Clock01Icon,
  InstagramIcon,
  TiktokIcon,
} from 'hugeicons-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

const contactItems = [
  {
    Icon: Location01Icon,
    text: '123 Academy Road, Education District, Ghana',
  },
  {
    Icon: SmartPhone01Icon,
    text: '+233 00 000 0000',
    href: 'tel:+233000000000',
  },
  {
    Icon: Mail01Icon,
    text: 'info@demastersacademy.edu.gh',
    href: 'mailto:info@demastersacademy.edu.gh',
  },
  {
    Icon: Clock01Icon,
    text: 'Mon – Fri: 7:30 AM – 4:00 PM',
  },
];

const socials = [
  {
    Icon: InstagramIcon,
    label: 'Instagram',
    handle: '@de_masters_academy',
    href: 'https://www.instagram.com/de_masters_academy',
  },
  {
    Icon: TiktokIcon,
    label: 'TikTok',
    handle: '@de_masters_academy',
    href: 'https://www.tiktok.com/@de_masters_academy',
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="De-Masters Academy crest"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-wide">
                De-Masters
              </span>
              <span className="text-brand-red font-bold text-[9px] tracking-[0.3em] uppercase">
                Academy
              </span>
            </div>
          </Link>

          <p className="text-white/50 text-sm leading-relaxed">
            Shaping the leaders of tomorrow through excellence, discipline, and
            innovation.
          </p>

          {/* Motto */}
          <p className="text-white/30 text-[11px] tracking-widest uppercase font-semibold">
            Trust &amp; Hardwork
          </p>

          {/* Social links */}
          <div className="flex flex-col gap-2.5 mt-1">
            {socials.map(({ Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
                aria-label={`${label}: ${handle}`}
              >
                <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-200">
                  <Icon size={15} color="rgba(255,255,255,0.75)" />
                </div>
                <span className="text-white/50 text-sm group-hover:text-white transition-colors duration-200">
                  {handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm mb-5 text-white/80 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/50 hover:text-brand-red text-sm transition-colors duration-200 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-sm mb-5 text-white/80 uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            {contactItems.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={14} color="rgba(255,255,255,0.55)" />
                </div>
                {href ? (
                  <a
                    href={href}
                    className="text-white/50 hover:text-brand-red text-sm transition-colors duration-200 leading-relaxed"
                  >
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} De-Masters Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white transition-colors duration-200"
              >
                <Icon size={14} color="currentColor" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
