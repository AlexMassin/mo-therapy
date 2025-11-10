import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@/components/Analytics';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "M.O. Therapy - Physiotherapy, Massage & Chiropractic in Markham",
    template: "%s | M.O. Therapy Markham"
  },
  description: "M.O. Therapy specializes in physiotherapy, registered massage therapy, chiropractic care & osteopathy in Markham. Expert treatment for athletic injuries, pain relief & injury prevention.",
  keywords: [
    "physiotherapy Markham",
    "massage therapy Markham", 
    "chiropractic Markham",
    "sports injury treatment",
    "athletic therapy",
    "injury prevention",
    "pain relief",
    "osteopathy Markham",
    "registered massage therapist",
    "sports massage",
    "back pain treatment",
    "knee injury physiotherapy"
  ],
  authors: [{ name: "M.O. Therapy" }],
  creator: "M.O. Therapy",
  publisher: "M.O. Therapy",
  metadataBase: new URL('https://motherapy.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca',
    title: 'M.O. Therapy - Premier Physiotherapy & Sports Medicine in Markham',
    description: 'Expert physiotherapy, massage therapy, and chiropractic care for athletes and active individuals. Specialized in injury prevention and athletic performance optimization.',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy - Physiotherapy and Sports Medicine Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.O. Therapy - Physiotherapy & Sports Medicine Markham',
    description: 'Expert care for athletes. Physiotherapy, massage therapy, chiropractic & osteopathy services.',
    images: ['/og-about.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "PhysicalTherapist"],
  "name": "M.O. Therapy",
  "alternateName": "Mode of Operation Therapy",
  "description": "Physiotherapy, massage therapy, chiropractic care and osteopathy clinic specializing in athletic injuries and injury prevention in Markham, Ontario",
  "url": "https://motherapy.ca",
  "logo": "https://motherapy.ca/logo.png",
  "image": "https://motherapy.ca/og-image.jpg",
  "telephone": "+1-905-201-5827",
  "email": "motherapycanada@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "20 Apple Creek Blvd. Unit A1",
    "addressLocality": "Markham",
    "addressRegion": "Ontario",
    "postalCode": "L3R5Z1",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.8561",
    "longitude": "-79.3370"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "43.8561",
      "longitude": "-79.3370"
    },
    "geoRadius": "25000"
  },
  "openingHours": [
    "Mo 08:00-20:00",
    "Tu 10:00-20:00", 
    "We 08:00-20:00",
    "Th 10:00-20:00",
    "Fr 08:00-20:00",
    "Sa 09:00-16:00",
    "Su 09:00-16:00"
  ],
  "medicalSpecialty": [
    "Physiotherapy",
    "Massage Therapy", 
    "Chiropractic Care",
    "Osteopathy",
    "Sports Medicine",
    "Athletic Therapy",
    "Injury Rehabilitation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapeutic Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Physiotherapy",
          "description": "Expert physiotherapy services for sports injuries, rehabilitation, and performance optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Registered Massage Therapy",
          "description": "Professional massage therapy for pain relief, recovery, and wellness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Chiropractic Care",
          "description": "Chiropractic treatment for spinal health, alignment, and pain management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Osteopathy",
          "description": "Osteopathic treatment for holistic health, wellness, and injury prevention"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Insurance"],
  "currenciesAccepted": "CAD",
  "sameAs": [
    "https://www.facebook.com/motherapycanada",
    "https://www.instagram.com/motherapycanada"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}