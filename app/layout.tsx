import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import PageLoader from '@/src/components/ui/PageLoader';

const googleSansFlex = localFont({
  src: '../public/assets/Google_Sans_Flex/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf',
  variable: '--font-google-sans-flex',
  display: 'swap',
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
    <html lang="en" className={googleSansFlex.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
