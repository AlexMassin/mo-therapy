import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import BookingButton from '@/components/BookingButton';
import { Activity, Heart, Zap, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Physiotherapy, Massage & Chiropractic Care | M.O. Therapy',
  description: 'Comprehensive therapeutic services for athletes in Markham. Physiotherapy, registered massage therapy, chiropractic care, and osteopathy for peak performance.',
  keywords: [
    'physiotherapy services Markham',
    'massage therapy services',
    'chiropractic care Markham',
    'osteopathy services',
    'sports therapy Markham',
    'athletic treatment services'
  ],
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

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl text-white mb-6">
                Comprehensive <span className="gradient-text">Athletic Care</span> Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Our integrated approach combines multiple therapeutic disciplines to provide comprehensive care 
                that addresses the root cause of your concerns and optimizes your athletic potential.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-20">
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-50 rounded-xl">
                          <Icon className="h-8 w-8 text-blue-600" />
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
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
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

                    {/* Image placeholder */}
                    <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="aspect-square bg-gradient-to-br from-gray-800 to-blue-600 rounded-2xl p-8 shadow-soft">
                        <div className="w-full h-full bg-white rounded-xl shadow-soft flex items-center justify-center">
                          <div className="text-center">
                            <Icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 mt-2">Professional care for optimal results</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-gray-900 to-blue-600">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you achieve your goals. Book an assessment today and 
              discover the difference comprehensive athletic care can make.
            </p>
            <BookingButton
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium text-lg"
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
