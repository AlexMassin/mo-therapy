import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Conditions from '@/components/Conditions';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy in Markham',
  description: 'Expert physiotherapy, massage therapy, and chiropractic care for athletes in Markham. Specialized in sports injury treatment, performance optimization, and injury prevention.',
  keywords: [
    'sports physiotherapy Markham',
    'athletic therapy Markham',
    'sports massage Markham',
    'injury prevention',
    'performance optimization',
    'sports medicine clinic',
    'athlete treatment',
    'sports injury rehabilitation'
  ],
  openGraph: {
    title: 'M.O. Therapy - Premier Sports Medicine & Physiotherapy in Markham',
    description: 'Expert care for athletes. Physiotherapy, massage therapy, and chiropractic services designed for peak performance.',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Conditions />
      </main>
      <Footer />
    </>
  );
}