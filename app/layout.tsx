import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollToTop } from '@/components/ScrollToTop';
export const metadata: Metadata = {
  title: 'GridNest Workforce - Powering Teams. Structuring Growth.',
  description: 'GridNest Workforce is India’s trusted partner for verified manpower supply, CX support, and operational staffing across logistics, food tech, and retail. Fast deployment, shift flexibility, and scalable solutions.',
  keywords: 'workforce solutions, gridnestworkforce, manpower supply, staffing services, CX support, operational staffing, India',
  metadataBase: new URL("https://gridnestworkforce.in"),
  icons:{
    icon:'./../assets/gnw_logo.png'
  },
  openGraph: {
    title: 'GridNest Workforce - Powering Teams. Structuring Growth.',
    description: 'Your trusted partner for reliable, structured manpower solutions across India.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://gridnestworkforce.in',
    siteName: 'GridNest Workforce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GridNest Workforce',
    description: 'Structured Manpower. Fast Deployment. Trusted Nationwide.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}