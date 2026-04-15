import type { Metadata } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-google-sans-flex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://demastersacademy.edu.gh'),
  title: {
    default: 'De-Masters Academy',
    template: '%s | De-Masters Academy',
  },
  description:
    'De-Masters Academy — a world-class learning institution committed to Trust & Hardwork. Excellence, Discipline, and Innovation since 2009.',
  keywords: ['school', 'academy', 'education', 'De-Masters', 'Ghana'],
  openGraph: {
    title: 'De-Masters Academy',
    description: 'Trust & Hardwork — Excellence • Discipline • Innovation',
    type: 'website',
    images: [{ url: '/images/logo.png', width: 512, height: 512, alt: 'De-Masters Academy Crest' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={googleSansFlex.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
