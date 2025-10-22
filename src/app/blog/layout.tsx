import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Health & Sports Blog - M.O. Therapy Markham | Injury Prevention Tips',
  description: 'Expert insights on sports injuries, physiotherapy, recovery tips, and injury prevention from our licensed professionals. Stay informed about the latest in sports medicine and wellness.',
  keywords: [
    'sports injury blog Markham',
    'physiotherapy tips',
    'injury prevention advice',
    'recovery advice',
    'sports medicine articles',
    'exercise rehabilitation',
    'athletic performance tips',
    'health and wellness Markham',
    'massage therapy benefits',
    'chiropractic care insights',
    'Apple Creek Blvd blog',
    'Markham healthcare blog'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Health & Sports Medicine Blog - M.O. Therapy Markham',
    description: 'Expert insights on sports injuries, recovery, and performance optimization from our licensed healthcare professionals in Markham.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/blog',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Health & Sports Medicine Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Sports Medicine Blog - M.O. Therapy',
    description: 'Expert insights on sports injuries, recovery, and performance optimization.',
    images: ['/og-blog.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

