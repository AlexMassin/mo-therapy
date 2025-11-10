import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Shield, Award, Users, Target, Heart, CheckCircle, Camera } from 'lucide-react';
import { getImagePath } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import TeamGalleryCreative from '@/components/TeamGalleryCreative';

export const metadata: Metadata = {
  title: 'About M.O. Therapy - Expert Athletic Care Team in Markham',
  description: 'Learn about M.O. Therapy\'s mission to provide exceptional physiotherapy, massage therapy, and chiropractic care for athletes and active individuals in Markham. Meet our expert team.',
  keywords: [
    'about M.O. Therapy',
    'physiotherapy team Markham',
    'athletic care specialists',
    'sports medicine clinic Markham',
    'registered therapists Markham',
    'healthcare professionals Markham',
    'Apple Creek Blvd clinic',
    'Markham physiotherapy clinic',
    'licensed massage therapists',
    'certified chiropractors Markham'
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About M.O. Therapy - Expert Athletic Care Team in Markham',
    description: 'Meet our expert team of physiotherapists, massage therapists, and chiropractors dedicated to helping athletes achieve peak performance in Markham.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/about',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Team - Expert Healthcare Professionals in Markham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About M.O. Therapy - Expert Athletic Care Team',
    description: 'Meet our expert team dedicated to helping athletes achieve peak performance.',
    images: ['/og-about.jpg'],
  },
};

const values = [
  {
    icon: Shield,
    title: 'Evidence-Based Care',
    description: 'We base all our treatments on the latest research and proven methodologies to ensure the best outcomes for our patients.'
  },
  {
    icon: Target,
    title: 'Performance Focused',
    description: 'Our approach goes beyond injury treatment to optimize your athletic performance and prevent future setbacks.'
  },
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'Every treatment plan is personalized to your unique goals, lifestyle, and athletic demands.'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Our multidisciplinary team works together to provide comprehensive care addressing all aspects of your health.'
  }
];

const stats = [
  { number: '500+', label: 'Athletes Treated' },
  { number: '95%', label: 'Return to Sport Rate' },
  { number: '10+', label: 'Years Combined Experience' },
  { number: '4.9/5', label: 'Patient Satisfaction' }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://motherapy.ca"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://motherapy.ca/about"
    }
  ]
};

// Team group photos
const teamPhotos = [
  {
    src: '/team/DSC00428.JPG',
    alt: 'M.O. Therapy team collaborating on patient care strategies in Markham clinic',
    caption: 'Our team working together for your best care'
  },
  {
    src: '/team/DSC00429.JPG',
    alt: 'M.O. Therapy healthcare professionals during team meeting at Markham location',
    caption: 'Continuous learning and development'
  },
  {
    src: '/team/DSC00441.JPG',
    alt: 'M.O. Therapy physiotherapists, RMTs, and chiropractors in group discussion',
    caption: 'Collaborative multidisciplinary approach'
  },
  {
    src: '/team/DSC00467.JPG',
    alt: 'M.O. Therapy team members in modern clinic facility on Apple Creek Blvd',
    caption: 'Modern facilities for optimal care'
  },
  {
    src: '/team/DSC00475.JPG',
    alt: 'M.O. Therapy staff demonstrating teamwork and professional excellence',
    caption: 'Excellence through teamwork'
  },
  {
    src: '/team/DSC00489.JPG',
    alt: 'M.O. Therapy healthcare team at their Markham sports medicine clinic',
    caption: 'Your trusted healthcare partners'
  },
  {
    src: '/team/DSC00498.JPG',
    alt: 'M.O. Therapy practitioners showcasing clinic environment and team culture',
    caption: 'A welcoming, professional environment'
  },
  {
    src: '/team/DSC00525.JPG',
    alt: 'M.O. Therapy team gathering showcasing clinic culture and values',
    caption: 'Building a culture of care'
  },
  {
    src: '/team/DSC00534.JPG',
    alt: 'M.O. Therapy licensed professionals at work in their practice',
    caption: 'Dedicated to your recovery'
  },
  {
    src: '/team/DSC00546.JPG',
    alt: 'M.O. Therapy team demonstrating commitment to patient-centered care',
    caption: 'Patient-first approach'
  },
  {
    src: '/team/DSC00557.JPG',
    alt: 'M.O. Therapy complete healthcare team at their Markham facility',
    caption: 'Together, we achieve more'
  }
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
              <div>
                <h1 className="heading-xl text-white mb-6">
                  About <span className="text-primary-400 font-bold">M.O. Therapy</span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed mb-8">
                  Founded with a passion for helping athletes and active individuals achieve their peak potential, 
                  M.O. Therapy has become Markham&apos;s trusted destination for comprehensive athletic care.
                </p>
                <p className="text-lg text-primary-100 leading-relaxed">
                  Our mission is simple: to provide exceptional, evidence-based therapeutic services that not only 
                  treat injuries but optimize performance and prevent future setbacks. We believe that everyone 
                  deserves to live and perform pain-free.
                </p>
              </div>
              <div className="relative transform scale-105 md:scale-100 lg:scale-110">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-800 to-primary-400 rounded-2xl p-6 shadow-soft">
                  <div className="w-full h-full bg-white rounded-xl shadow-soft overflow-hidden relative">
                    <img 
                      src={getImagePath("/team/DSC00428.JPG")}
                      alt="M.O. Therapy team collaborating and working together in the clinic"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with team info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-400 rounded-full flex items-center justify-center">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">Our Team</h3>
                            <p className="text-primary-100 text-sm">Excellence in Care</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card">
                <h2 className="heading-md text-gray-900 mb-4">Our Mission</h2>
                <p className="text-body mb-4">
                  To empower athletes and active individuals to achieve their full potential through comprehensive, 
                  evidence-based therapeutic care that treats the whole person, not just the injury.
                </p>
                <p className="text-body">
                  We are committed to providing personalized treatment plans that address the root cause of issues 
                  while optimizing performance and preventing future injuries.
                </p>
              </div>
              <div className="card">
                <h2 className="heading-md text-gray-900 mb-4">Our Vision</h2>
                <p className="text-body mb-4">
                  To be the leading sports medicine clinic in the Greater Toronto Area, recognized for our 
                  innovative approach, exceptional outcomes, and unwavering commitment to patient care.
                </p>
                <p className="text-body">
                  We envision a community where every athlete has access to world-class therapeutic care 
                  that enables them to pursue their passions without limitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Our <span className="text-primary-600 font-bold">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600">
                These principles guide everything we do and ensure every patient receives the highest quality care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="heading-sm text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-body">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-400">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-white mb-4">
                Our Impact by the Numbers
              </h2>
              <p className="text-xl text-primary-100">
                These statistics reflect our commitment to excellence and the trust our patients place in us.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-100 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Why Athletes Choose M.O. Therapy
                </h2>
                <div className="space-y-6">
                  {[
                    'Specialized focus on athletic performance and sports injuries',
                    'Multidisciplinary team approach for comprehensive care',
                    'Evidence-based treatments with proven results',
                    'Personalized treatment plans tailored to your sport and goals',
                    'Same-day appointments for urgent injuries',
                    'Direct insurance billing for your convenience'
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-lg">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-800 to-primary-400 rounded-2xl p-8 shadow-soft">
                  <div className="w-full h-full bg-white rounded-xl shadow-soft overflow-hidden relative">
                    <img 
                      src={getImagePath("/team/DSC00467.JPG")}
                      alt="M.O. Therapy team excellence - dedicated healthcare professionals in modern Markham clinic"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with team info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Team Excellence</h3>
                        <p className="text-white text-sm">Dedicated professionals committed to your success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Culture & Gallery Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Camera className="h-4 w-4" />
                Behind the Scenes
              </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Our Team <span className="text-primary-600 font-bold">In Action</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get a glimpse into our collaborative, patient-focused environment where excellence meets compassion. 
                These photos showcase our team culture and the dedication we bring to every patient interaction.
              </p>
            </div>

            <TeamGalleryCreative photos={teamPhotos} />
          </div>
        </section>

        {/* Team Member Grid Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg text-gray-900 mb-6">
                Meet Your <span className="text-primary-600 font-bold">Care Team</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our diverse team of licensed professionals is here to support your health journey.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {[
                { name: "Dillon", title: "RMT", image: "/team/dillon.png" },
                { name: "Damian", title: "RMT", image: "/team/damian.png" },
                { name: "Carrie", title: "PT", image: "/team/carrie.png" },
                { name: "Smit", title: "DC", image: "/team/smit.png" },
                  { name: "Jeremy", title: "RMT", image: "/team/jeremy.png" },
                  { name: "Shruti", title: "RMT", image: "/team/shruti.png" },
                  { name: "Nadeem", title: "PT", image: "/team/nadeem.png" },
                  { name: "Nathan", title: "PT", image: "/team/nathan.png" },
                { name: "Taylor", title: "DC", image: "/team/taylor.png" },
              ].map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="aspect-square relative overflow-hidden rounded-2xl mb-3 bg-gradient-to-br from-primary-100 to-primary-50 shadow-lg">
                    <Image
                      src={getImagePath(member.image)}
                      alt={`${member.name} - ${member.title} at M.O. Therapy`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
                  <p className="text-primary-600 text-xs font-medium">{member.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                <Users className="h-5 w-5" />
                Learn More About Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-gray-900 mb-6">
              Ready to Experience the M.O. Therapy Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of athletes who have trusted us with their care. Book an assessment today and 
              discover how we can help you achieve your goals.
            </p>
            <BookingButton
              className="btn-primary text-lg px-8 py-4"
              trackingLabel="about_page_assessment"
            >
              Book Your Assessment
            </BookingButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
