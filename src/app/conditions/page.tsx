import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Target, Heart, Shield, Activity, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { getImagePath } from '@/lib/assets';
import GradientText from '@/components/GradientText';

export const metadata: Metadata = {
  title: 'Conditions We Treat - M.O. Therapy Markham | Sports Injuries & Pain Relief',
  description: 'Comprehensive treatment for sports injuries, back pain, neck pain, joint pain, and more. Expert physiotherapy, massage therapy, and chiropractic care in Markham for optimal recovery. Book your assessment today.',
  keywords: [
    'sports injuries treatment Markham',
    'back pain physiotherapy Markham',
    'neck pain treatment Markham',
    'knee injury rehabilitation',
    'shoulder pain therapy',
    'ankle sprain treatment',
    'hip pain relief Markham',
    'headache treatment',
    'TMJ therapy Markham',
    'concussion rehabilitation',
    'carpal tunnel treatment',
    'tennis elbow therapy',
    'ACL injury physiotherapy',
    'plantar fasciitis treatment',
    'pelvic floor physiotherapy Markham',
    'Apple Creek Blvd treatment',
    'Markham pain management'
  ],
  alternates: {
    canonical: '/conditions',
  },
  openGraph: {
    title: 'Sports Injuries & Conditions Treatment - M.O. Therapy Markham',
    description: 'Expert treatment for a wide range of musculoskeletal conditions. From acute sports injuries to chronic pain management. Personalized care for optimal recovery.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/conditions',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Conditions Treatment - Sports Injuries & Pain Relief',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Injuries & Conditions Treatment - M.O. Therapy',
    description: 'Expert treatment for sports injuries and chronic pain. Personalized care for optimal recovery.',
    images: ['/og-conditions.jpg'],
  },
};

const conditionCategories = [
  {
    title: 'Head & Neck Pain',
    icon: Target,
    image: '/conditions/head-neck-pain.jpg',
    conditions: [
      'Headaches',
      'Concussion',
      'Neck Associated Disorder/Non-specific Mechanical Neck Pain',
      'Cervical Spinal Stenosis',
      'TMJ',
      'BPPV'
    ]
  },
  {
    title: 'Shoulder Pain',
    icon: Shield,
    image: '/conditions/shoulder-pain.jpg',
    conditions: [
      'Subacromial Pain Syndrome (formally Subacromial Impingement Syndrome)',
      'Shoulder Instability',
      'ACJ irritation',
      'Rotator Cuff Related Shoulder Pain',
      'Adhesive capsulitis (Frozen Shoulder)'
    ]
  },
  {
    title: 'Arm & Elbow Pain',
    icon: Activity,
    image: '/conditions/arm-elbow-pain.jpg',
    conditions: [
      'Tennis Elbow',
      'Golfer\'s Elbow',
      'Biceps Tendinopathy'
    ]
  },
  {
    title: 'Wrist & Hand Pain',
    icon: Heart,
    image: '/conditions/wrist-hand-pain.jpg',
    conditions: [
      'Carpal Tunnel Syndrome',
      'Cubital Tunnel Syndrome',
      'Scapholunate Instability'
    ]
  },
  {
    title: 'Low Back Pain',
    icon: Target,
    image: '/conditions/low-back-pain.jpg',
    conditions: [
      'Non-Specific Mechanical Low Back Pain',
      'Disc Herniation/Discogenic Low Back Pain',
      'Lumbar Spinal Stenosis',
      'Piriformis Syndrome',
      'SIJ irritation'
    ]
  },
  {
    title: 'Knee Pain',
    icon: Activity,
    image: '/conditions/knee-pain.jpg',
    conditions: [
      'Knee OA',
      'Patellar Tendinopathy',
      'Meniscus Irritation/Tear',
      'Ligamentous: ACL, PCL, LCL, MCL Irritation/Tear'
    ]
  },
  {
    title: 'Hip Pain',
    icon: Shield,
    image: '/conditions/hip-pain.jpg',
    conditions: [
      'Hip OA',
      'Femoral Acetabular Impingement',
      'Greater Trochanteric Pain Syndrome'
    ]
  },
  {
    title: 'Ankle & Foot Pain',
    icon: Heart,
    image: '/conditions/ankle-foot-pain.jpg',
    conditions: [
      'Ankle Sprains (Lateral, Medial, High)',
      'Plantar Fasciopathy',
      'Achilles Tendinopathy'
    ]
  },
  {
    title: 'General Conditions',
    icon: Users,
    image: '/conditions/general-conditions.jpg',
    conditions: [
      'Muscle strains',
      'Post-surgical Recovery'
    ]
  }
];

const specialtyServices = [
  {
    title: 'Pelvic Health Physiotherapy',
    description: 'Pelvic floor physiotherapy is a specialized form of physiotherapy that focuses on the assessment and treatment of pelvic floor muscle dysfunction. Pelvic floor physiotherapy can be beneficial in restoring strength and function in your pelvis.',
    practitioner: 'Carrie Chou',
    icon: Heart,
    image: '/conditions/pelvic-health.jpg'
  },
  {
    title: 'Combat Sports Specialization',
    description: 'At M.O., our therapists specialize in catering to clients who have experienced pain and injuries related to various combat sports, including Mixed Martial Arts (MMA), Brazilian Jiu Jitsu (BJJ), and Muay Thai.',
    practitioner: 'Our Specialized Team',
    icon: Shield,
    image: '/conditions/combat-sports.jpg'
  }
];

const treatmentTechniques = [
  {
    title: 'Myofascial Release',
    description: 'Myofascial Release works on the fascial layer of the skin to increase range of motion and decrease pain.',
    icon: Target
  },
  {
    title: 'Joint Mobilizations',
    description: 'The therapist applies a pressured force of a joint in a specific direction to improve mobility.',
    icon: Activity
  },
  {
    title: 'Neurofunctional Acupuncture',
    description: 'This technique targets specific nerves with acupuncture needles to relieve nerve, muscle and joint pain.',
    icon: Shield
  },
  {
    title: 'Cupping Therapy',
    description: 'A Traditional Chinese Medicine technique creating suction on the skin with special cups to help with inflammation, pain and improve blood flow to specific areas.',
    icon: Heart
  }
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Comprehensive Care
              </div>
              <h1 className="heading-xl text-white mb-6">
                <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">Conditions We Treat</GradientText> & Specialized Care
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                From acute sports injuries to chronic pain management, our expert team provides targeted treatment 
                for a wide range of musculoskeletal conditions. Experience personalized care that gets you back to 
                what you love doing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                  trackingLabel="conditions_page_hero"
                >
                  <CheckCircle className="h-5 w-5" />
                  Book Assessment
                </BookingButton>
                <a
                  href="#conditions"
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <ArrowRight className="h-5 w-5" />
                  View All Conditions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our M.O. Mission */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-gray-900 mb-6">
                Our <span className="text-primary-600 font-bold">M.O.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Your M.O. is your hustle. <strong>Do it pain free.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At M.O., our highly skilled team of therapists have a wealth of experience and a diverse background 
                in the fields of massage therapy, physiotherapy, osteopathy, and chiropractic treatment. Our professionals 
                bring a unique set of skills and knowledge to the table, ensuring that our clients receive personalized 
                care tailored to their specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section id="conditions" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">Conditions</span> We Treat
              </h2>
              <p className="text-xl text-gray-600">
                Our expert team provides specialized treatment for a comprehensive range of musculoskeletal conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {conditionCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                    {/* Image Section */}
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <img 
                        src={getImagePath(category.image)}
                        alt={`${category.title} treatment at M.O. Therapy`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white">
                            <Icon className="h-5 w-5" />
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <ul className="space-y-2">
                        {category.conditions.map((condition, conditionIndex) => (
                          <li key={conditionIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600" />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <BookingButton
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
                trackingLabel="conditions_page_book_treatment"
              >
                <Target className="h-5 w-5" />
                Get Personalized Treatment
              </BookingButton>
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">Specialties</span> at M.O.
              </h2>
              <p className="text-xl text-gray-600">
                Specialized care for unique conditions and specific populations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {specialtyServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                    {/* Image Section */}
                    <div className="aspect-[16/9] bg-gray-100 relative">
                      <img 
                        src={getImagePath(service.image)}
                        alt={`${service.title} at M.O. Therapy`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white">
                            <Icon className="h-5 w-5" />
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <strong>Practitioner:</strong> {service.practitioner}
                        </div>
                        <BookingButton
                          className="btn-outline"
                          trackingLabel={`specialty_${service.title.toLowerCase().replace(' ', '_')}`}
                        >
                          Book Now
                        </BookingButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Treatment Techniques */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Advanced <span className="text-primary-600 font-bold">Treatment Techniques</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our practitioners utilize a variety of specialized techniques to provide optimal care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentTechniques.map((technique, index) => {
                const Icon = technique.icon;
                return (
                  <div key={technique.title} className="card hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{technique.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {technique.description}
                      </p>
                      <BookingButton
                        className="btn-outline w-full"
                        trackingLabel={`technique_${technique.title.toLowerCase().replace(' ', '_')}`}
                      >
                        Book Now
                      </BookingButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-400">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-white mb-6">
                Ready to Start Your <span className="text-primary-300">Recovery Journey?</span>
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Don't let pain hold you back from doing what you love. Our expert team is here to help you 
                recover, perform better, and prevent future injuries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                  trackingLabel="conditions_page_cta_book"
                >
                  <CheckCircle className="h-5 w-5" />
                  Book Your Assessment
                </BookingButton>
                <a
                  href="/contact"
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <Users className="h-5 w-5" />
                  Contact Our Team
                </a>
              </div>
              <p className="text-primary-200 text-sm mt-6">
                Have questions? Visit our FAQs page or contact us directly!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
