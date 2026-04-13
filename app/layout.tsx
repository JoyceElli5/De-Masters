import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'De-Masters Academy',
    template: '%s | De-Masters Academy',
  },
  description:
    'De-Masters Academy — a world-class learning institution committed to excellence, discipline, and innovation.',
  keywords: ['school', 'academy', 'education', 'De-Masters', 'Ghana'],
  openGraph: {
    title: 'De-Masters Academy',
    description: 'Excellence • Discipline • Innovation',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
