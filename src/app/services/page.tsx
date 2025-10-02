import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import BookingButton from '@/components/BookingButton';
import { Activity, Heart, Zap, Compass, Shield, Target } from 'lucide-react';
import { getImagePath } from '@/lib/assets';
import GradientText from '@/components/GradientText';

export const metadata: Metadata = {
  title: 'Our Services - Physiotherapy, Massage & Chiropractic Care | M.O. Therapy',
  description: 'Comprehensive therapeutic services for athletes in Markham. Physiotherapy, registered massage therapy, chiropractic care, and osteopathy for peak performance. Book your appointment today.',
  keywords: [
    'physiotherapy services Markham',
    'massage therapy services Markham',
    'chiropractic care Markham',
    'osteopathy services Markham',
    'sports therapy Markham',
    'athletic treatment services',
    'MMA physiotherapy Markham',
    'BJJ injury treatment',
    'Muay Thai therapy services',
    'combat sports physiotherapy',
    'martial arts injury treatment',
    'fighter rehabilitation Markham',
    'Apple Creek Blvd physiotherapy',
    'Markham sports medicine clinic'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Expert Therapeutic Services - M.O. Therapy Markham',
    description: 'Comprehensive physiotherapy, massage therapy, chiropractic care, and osteopathy services for athletes in Markham. Specialized in sports injury treatment and performance optimization.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/services',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Services - Physiotherapy, Massage & Chiropractic Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Therapeutic Services - M.O. Therapy Markham',
    description: 'Comprehensive care for athletes. Physiotherapy, massage therapy, chiropractic & osteopathy services.',
    images: ['/og-services.jpg'],
  },
};

const serviceDetails = [
  {
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Our physiotherapy services focus on restoring movement, improving function, and optimizing performance through evidence-based treatment approaches.',
    treatments: [
      'Manual therapy and joint mobilization',
      'Exercise prescription and rehabilitation',
      'Movement analysis and correction',
      'Dry needling and acupuncture',
      'Ultrasound and electrical stimulation',
      'Sport-specific return-to-play programs'
    ],
    conditions: [
      'Sports injuries and acute trauma',
      'Post-surgical rehabilitation',
      'Chronic pain management',
      'Movement dysfunction',
      'Workplace injuries',
      'Performance optimization'
    ],
    href: '/services/physiotherapy'
  },
  {
    icon: Heart,
    title: 'Registered Massage Therapy',
    description: 'Therapeutic massage designed to enhance recovery, reduce muscle tension, and improve circulation for optimal athletic performance.',
    treatments: [
      'Deep tissue massage',
      'Sports massage therapy',
      'Trigger point release',
      'Myofascial release',
      'Lymphatic drainage',
      'Pre and post-event massage'
    ],
    conditions: [
      'Muscle tension and stiffness',
      'Sports-related muscle injuries',
      'Stress and anxiety management',
      'Circulation improvement',
      'Recovery enhancement',
      'Performance maintenance'
    ],
    href: '/services/massage-therapy'
  },
  {
    icon: Zap,
    title: 'Chiropractic Care',
    description: 'Specialized spinal and joint care focused on optimizing nervous system function and enhancing athletic performance.',
    treatments: [
      'Spinal adjustments and manipulation',
      'Joint mobilization techniques',
      'Soft tissue therapy',
      'Posture correction',
      'Exercise rehabilitation',
      'Ergonomic assessment'
    ],
    conditions: [
      'Back and neck pain',
      'Headaches and migraines',
      'Joint dysfunction',
      'Sciatica and nerve pain',
      'Sports-related injuries',
      'Postural problems'
    ],
    href: '/services/chiropractic'
  },
  {
    icon: Compass,
    title: 'Osteopathy',
    description: 'Holistic manual therapy approach that treats the body as an integrated whole, focusing on structural balance and natural healing.',
    treatments: [
      'Osteopathic manual therapy',
      'Craniosacral therapy',
      'Visceral manipulation',
      'Structural integration',
      'Fascial release techniques',
      'Whole-body assessment'
    ],
    conditions: [
      'Chronic pain syndromes',
      'Digestive issues',
      'Stress-related ailments',
      'Joint pain and stiffness',
      'Post-injury compensation patterns',
      'Overall wellness optimization'
    ],
    href: '/services/osteopathy'
  }
];

const breadcrumbJsonLd = {
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
      "name": "Services",
      "item": "https://motherapy.ca/services"
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl text-white mb-6">
                Comprehensive <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Athletic Care</GradientText> Services
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Our integrated approach combines multiple therapeutic disciplines to provide comprehensive care 
                that addresses the root cause of your concerns and optimizes your athletic potential.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-16 sm:space-y-20">
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.title} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Service Image - Always first on mobile, alternates on desktop */}
                    <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="aspect-square bg-gradient-to-br from-primary-800 to-primary-400 rounded-2xl p-6 shadow-soft">
                        <div className="w-full h-full bg-white rounded-xl shadow-soft overflow-hidden relative">
                          {service.title === 'Physiotherapy' ? (
                            <img 
                              src={getImagePath("/services/physiotherapy.png")}
                              alt="Professional physiotherapy treatment session at M.O. Therapy"
                              className="w-full h-full object-cover"
                            />
                          ) : service.title === 'Registered Massage Therapy' ? (
                            <img 
                              src={getImagePath("/services/massage-therapy.png")}
                              alt="Professional registered massage therapy session at M.O. Therapy"
                              className="w-full h-full object-cover"
                            />
                          ) : service.title === 'Chiropractic Care' ? (
                            <img 
                              src={getImagePath("/services/chiropractor.png")}
                              alt="Professional chiropractic care treatment at M.O. Therapy"
                              className="w-full h-full object-cover"
                            />
                          ) : service.title === 'Osteopathy' ? (
                            <img 
                              src={getImagePath("/services/osteopath.png")}
                              alt="Professional osteopathy treatment session at M.O. Therapy"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center">
                                <Icon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mt-2">Professional care for optimal results</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content - Always second on mobile, alternates on desktop */}
                    <div className={`order-2 px-4 sm:px-6 lg:px-0 ${isEven ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary-50 rounded-xl">
                          <Icon className="h-8 w-8 text-primary-600" />
                        </div>
                        <h2 className="heading-lg text-gray-900">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Treatments */}
                        <div>
                          <h3 className="heading-sm text-gray-900 mb-4">Treatment Methods</h3>
                          <ul className="space-y-2">
                            {service.treatments.map((treatment, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                                {treatment}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Conditions */}
                        <div>
                          <h3 className="heading-sm text-gray-900 mb-4">Conditions Treated</h3>
                          <ul className="space-y-2">
                            {service.conditions.map((condition, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2.5 flex-shrink-0"></div>
                                {condition}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <BookingButton
                          className="btn-primary"
                          trackingLabel={`services_${service.title.toLowerCase().replace(/\s+/g, '_')}`}
                        >
                          Book {service.title} Session
                        </BookingButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Combat Sports Specialization Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Image - First on mobile, second on desktop */}
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-800 to-primary-400 rounded-2xl p-6 shadow-soft">
                  <div className="w-full h-full bg-white rounded-xl shadow-soft overflow-hidden relative">
                    <img 
                      src={getImagePath("/services/combat-sports-treatment.jpg")}
                      alt="MMA, BJJ, and Muay Thai fighter receiving specialized physiotherapy treatment at M.O. Therapy in Markham"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with combat sports info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-400 rounded-full flex items-center justify-center">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">Fighter Focused</h3>
                            <p className="text-primary-100 text-sm">Combat Sports Expertise</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Second on mobile, first on desktop */}
              <div className="order-2 lg:order-1 px-4 sm:px-6 lg:px-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Combat Sports Specialization
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  <span className="text-primary-600 font-bold">MMA, BJJ, MUAY THAI</span> Fighter Treatment
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  At M.O., our therapists specialize in catering to clients who have experienced pain and injuries 
                  related to various combat sports, including <strong>Mixed Martial Arts (MMA)</strong>, <strong>Brazilian Jiu Jitsu (BJJ)</strong>, and <strong>Muay Thai</strong>.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our therapists understand the physical demands and stresses of individuals of these sports, which is why 
                  our team provides targeted care to address the specific challenges that comes with combat sports.
                </p>

                {/* Combat Sports Specific Treatments */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialized Combat Sports Treatments:</h3>
                  <div className="grid gap-3">
                    {[
                      'Grappling injury rehabilitation and prevention',
                      'Striking-related trauma and recovery therapy',
                      'Joint mobility optimization for ground fighting',
                      'Concussion management and return-to-training protocols',
                      'Cauliflower ear treatment and prevention',
                      'Combat sports-specific strength and conditioning',
                      'Pre-fight preparation and post-fight recovery',
                      'Martial arts movement pattern correction'
                    ].map((treatment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <BookingButton
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium"
                  trackingLabel="combat_sports_booking"
                >
                  Book Fighter Assessment
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-400">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you achieve your goals. Book an assessment today and 
              discover the difference comprehensive athletic care can make.
            </p>
            <BookingButton
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium text-lg"
              trackingLabel="services_page_cta"
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
