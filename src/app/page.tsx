import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Conditions from '@/components/Conditions';
import WellnessRelaxation from '@/components/WellnessRelaxation';
import InsuranceBenefits from '@/components/InsuranceBenefits';
import InstagramFeed from '@/components/InstagramFeed';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy in Markham',
  description: 'Expert physiotherapy, massage therapy, and chiropractic care for athletes in Markham. Specialized in sports injury treatment, performance optimization, and injury prevention. Book your assessment today.',
  keywords: [
    'sports physiotherapy Markham',
    'athletic therapy Markham',
    'sports massage Markham',
    'injury prevention Markham',
    'performance optimization',
    'sports medicine clinic Markham',
    'athlete treatment',
    'sports injury rehabilitation',
    'Apple Creek Blvd physiotherapy',
    'Markham athletic care',
    'same day appointments',
    'direct billing available'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy in Markham',
    description: 'Expert care for athletes. Physiotherapy, massage therapy, and chiropractic services designed for peak performance. Same-day appointments available.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy in Markham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy',
    description: 'Expert care for athletes. Same-day appointments available in Markham.',
    images: ['/og-about.jpg'],
  },
};

import TeamPreview from '@/components/TeamPreview';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <GoogleReviews />
        <TeamPreview />
        <Conditions />
        <WellnessRelaxation />
        <InsuranceBenefits />
        <InstagramFeed />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}