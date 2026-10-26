import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import MotionProvider from '@/src/components/layout/MotionProvider';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://demastersacademy.edu.gh'),
  title: {
    default: 'De-Masters Academy',
    template: '%s | De-Masters Academy',
  },
  description:
    'De-Masters Academy in Accra, Ghana. Early Childhood to Senior Secondary since 2009. Motto: Trust & Hardwork.',
  keywords: ['school', 'academy', 'education', 'De-Masters', 'Ghana'],
  openGraph: {
    title: 'De-Masters Academy',
    description: 'Early Childhood to Senior Secondary in Accra, Ghana, since 2009.',
    type: 'website',
    images: [{ url: '/images/logo.png', width: 512, height: 512, alt: 'De-Masters Academy Crest' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-800">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
