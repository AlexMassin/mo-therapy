import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Target, Heart, Shield, Activity, Users, ArrowRight, CheckCircle, Brain, Zap, CreditCard, Clock, Award, TrendingUp, Briefcase, Phone } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: 'Conditions We Treat - M.O. Therapy Markham | Sports Injuries, Wellness & Stress Relief',
  description: 'Expert treatment for sports injuries and wellness massage in Markham. From athletic performance to stress relief and relaxation. Insurance-covered physiotherapy, massage therapy, and chiropractic care.',
  keywords: [
    'sports injuries treatment Markham',
    'stress relief massage Markham',
    'corporate wellness Markham',
    'relaxation therapy Markham',
    'back pain physiotherapy Markham',
    'neck pain treatment Markham',
    'knee injury rehabilitation',
    'shoulder pain therapy',
    'wellness massage Markham',
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
    title: 'Sports Injuries & Wellness Treatment - M.O. Therapy Markham',
    description: 'Expert treatment for athletes and professionals. From injury recovery to stress relief and relaxation. Personalized care for optimal wellness.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/conditions',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Conditions Treatment - Sports Injuries & Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Injuries & Wellness Treatment - M.O. Therapy',
    description: 'Expert treatment for athletes and professionals. From injury recovery to stress relief.',
    images: ['/og-conditions.jpg'],
  },
};

const conditionCategories = [
  {
    title: 'Head & Neck',
    icon: Brain,
    gradient: 'from-primary-500 to-primary-600',
    conditions: [
      'Headaches & Migraines',
      'Concussion Management',
      'Neck Pain & Stiffness',
      'Cervical Spinal Stenosis',
      'TMJ Dysfunction',
      'Vertigo (BPPV)'
    ]
  },
  {
    title: 'Shoulder & Upper Body',
    icon: Shield,
    gradient: 'from-primary-500 to-cyan-500',
    conditions: [
      'Rotator Cuff Injuries',
      'Shoulder Impingement',
      'Frozen Shoulder',
      'Shoulder Instability',
      'AC Joint Irritation'
    ]
  },
  {
    title: 'Elbow & Forearm',
    icon: Zap,
    gradient: 'from-primary-600 to-primary-500',
    conditions: [
      'Tennis Elbow (Lateral Epicondylitis)',
      'Golfer&apos;s Elbow (Medial Epicondylitis)',
      'Biceps Tendinopathy',
      'Elbow Instability'
    ]
  },
  {
    title: 'Wrist & Hand',
    icon: Target,
    gradient: 'from-cyan-500 to-primary-500',
    conditions: [
      'Carpal Tunnel Syndrome',
      'Cubital Tunnel Syndrome',
      'Wrist Sprains',
      'De Quervain&apos;s Tenosynovitis'
    ]
  },
  {
    title: 'Lower Back & Spine',
    icon: Activity,
    gradient: 'from-primary-600 to-primary-700',
    conditions: [
      'Mechanical Low Back Pain',
      'Disc Herniation',
      'Lumbar Spinal Stenosis',
      'Sciatica',
      'SI Joint Dysfunction'
    ]
  },
  {
    title: 'Hip & Pelvis',
    icon: Heart,
    gradient: 'from-primary-500 to-primary-600',
    conditions: [
      'Hip Osteoarthritis',
      'Hip Impingement (FAI)',
      'Hip Bursitis',
      'Groin Strains',
      'Pelvic Floor Dysfunction'
    ]
  },
  {
    title: 'Knee & Patella',
    icon: TrendingUp,
    gradient: 'from-cyan-600 to-primary-600',
    conditions: [
      'ACL/PCL/MCL/LCL Injuries',
      'Meniscus Tears',
      'Patellar Tendinopathy',
      'Knee Osteoarthritis',
      'Runner\'s Knee (PFPS)'
    ]
  },
  {
    title: 'Ankle & Foot',
    icon: Zap,
    gradient: 'from-primary-600 to-cyan-600',
    conditions: [
      'Ankle Sprains',
      'Plantar Fasciitis',
      'Achilles Tendinopathy',
      'Shin Splints',
      'Stress Fractures'
    ]
  }
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
      "name": "Conditions",
      "item": "https://motherapy.ca/conditions"
    }
  ]
};

export default function ConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Split Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400 overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 relative">
              {/* Athletic Treatment Side */}
              <div className="relative bg-gradient-to-br from-black/40 via-black/30 to-transparent rounded-2xl overflow-hidden backdrop-blur-sm border-2 border-white/10">
                <div className="absolute inset-0 opacity-20">
                  <OptimizedImage
                    src="/services/physiotherapy.png"
                    alt="Athletic performance and injury treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative p-8 lg:p-12 min-h-[500px] flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 w-fit">
                    <Activity className="h-4 w-4" />
                    Performance & Recovery
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Peak Performance & Injury Recovery
                  </h1>
                  <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                    Expert treatment for sports injuries, chronic pain, and musculoskeletal conditions. 
                    Get back to peak performance faster.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-white">
                      <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
                      <span>Return-to-sport protocols</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
                      <span>Advanced rehabilitation techniques</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                  <BookingButton
                    className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center gap-2 w-fit"
                    trackingLabel="conditions_hero_athletic"
                  >
                    <Target className="h-5 w-5" />
                    Book Athletic Assessment
                  </BookingButton>
                </div>
              </div>

              {/* Center Divider - Desktop Only */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                <div className="bg-white rounded-full p-6 shadow-xl border-4 border-primary-200">
                  <span className="text-2xl font-bold text-primary-600">OR</span>
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="lg:hidden flex items-center justify-center py-6">
                <div className="bg-white rounded-full px-6 py-3 shadow-lg">
                  <span className="text-lg font-bold text-primary-600">OR</span>
                </div>
              </div>

              {/* Wellness & Relaxation Side */}
              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                <div className="absolute inset-0 opacity-30">
                  <OptimizedImage
                    src="/services/massage-therapy.png"
                    alt="Relaxation and wellness massage therapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative p-8 lg:p-12 min-h-[500px] flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium mb-6 w-fit">
                    <Heart className="h-4 w-4" />
                    Wellness & Relaxation
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Stress Relief & Pure Relaxation
              </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    No injury required. Therapeutic massage for busy professionals seeking stress relief, 
                    relaxation, and overall wellness.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Stress & tension relief</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Corporate wellness programs</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Insurance coverage available</span>
                    </li>
                  </ul>
                <BookingButton
                    className="bg-primary-600 text-white hover:bg-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center gap-2 w-fit"
                    trackingLabel="conditions_hero_wellness"
                >
                    <Heart className="h-5 w-5" />
                    Book Wellness Session
                </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section id="conditions" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/30 relative">
          {/* Background Action Shot */}
          <div className="absolute inset-0 opacity-5">
            <OptimizedImage
              src="/team/DSC00525.JPG"
              alt="M.O. Therapy team in action"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Comprehensive Treatment
              </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">All Conditions</span> We Treat
              </h2>
              <p className="text-xl text-gray-600">
                From acute sports injuries to chronic pain management, our expert team provides specialized treatment 
                for a comprehensive range of musculoskeletal conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {conditionCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="group relative">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-primary-300 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden">
                      {/* Icon Header */}
                      <div className={`bg-gradient-to-br ${category.gradient} p-6`}>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6">
                        <ul className="space-y-3">
                          {category.conditions.map((condition, conditionIndex) => (
                            <li key={conditionIndex} className="flex items-start gap-2.5 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-600" />
                              <span className="leading-tight">{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <a
                href="#treatment-approach"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Explore Treatment Options
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Action Shot Collage */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <OptimizedImage 
                        src="/team/DSC00525.JPG"
                        alt="M.O. Therapy treatment in action"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <OptimizedImage 
                        src="/team/DSC00546.JPG"
                        alt="Professional wellness care"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <OptimizedImage 
                        src="/team/DSC00534.JPG"
                        alt="Expert therapeutic treatment"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
            </div>
                </div>
              </div>

              {/* Benefits Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4" />
                  Why M.O. Therapy
                </div>
                <h2 className="heading-lg text-gray-900 mb-8">
                  Trusted by <span className="text-primary-600 font-bold">Athletes & Professionals</span>
                </h2>

                {/* For Athletes */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="h-6 w-6 text-primary-600" />
                    For Athletes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Performance Optimization</span>
                        <p className="text-gray-600 text-sm">Sport-specific training and movement analysis to enhance athletic performance</p>
                      </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Return-to-Sport Protocols</span>
                        <p className="text-gray-600 text-sm">Evidence-based rehabilitation to get you back in the game safely and quickly</p>
                      </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Injury Prevention</span>
                        <p className="text-gray-600 text-sm">Proactive strategies to keep you performing at your best</p>
                      </div>
                  </li>
                </ul>
                </div>

                {/* For Professionals */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary-600" />
                    For Professionals
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Stress Management</span>
                        <p className="text-gray-600 text-sm">Therapeutic massage to decompress and recharge from work demands</p>
                      </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Flexible Scheduling</span>
                        <p className="text-gray-600 text-sm">Early morning and evening appointments to fit your busy schedule</p>
                      </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Insurance Coverage</span>
                        <p className="text-gray-600 text-sm">Direct billing available for wellness and preventative care</p>
                      </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section id="treatment-approach" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Two Approaches, <span className="text-primary-600 font-bold">One Goal: Your Wellness</span>
              </h2>
              <p className="text-xl text-gray-600">
                Whether you&apos;re recovering from injury or seeking pure relaxation, we have the expertise and approach to help you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Athletic Treatment */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/combat-sports-treatment.jpg"
                    alt="Athletic treatment and sports medicine"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-600 text-white rounded-full text-sm font-medium mb-3">
                      <Activity className="h-4 w-4" />
                      Athletic Treatment
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Injury Recovery & Performance</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    Advanced rehabilitation techniques combining manual therapy, exercise prescription, and performance training 
                    to help you return to sport stronger than before.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Manual therapy & joint mobilizations</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Neurofunctional acupuncture</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Therapeutic exercise programs</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Sports-specific conditioning</span>
                    </li>
                  </ul>
                  <BookingButton
                    className="btn-primary w-full"
                    trackingLabel="treatment_athletic"
                  >
                    Book Athletic Treatment
                  </BookingButton>
                </div>
            </div>

              {/* Wellness Sessions */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/massage-therapy.png"
                    alt="Relaxation and wellness massage therapy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-600 text-white rounded-full text-sm font-medium mb-3">
                      <Heart className="h-4 w-4" />
                      Wellness Sessions
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Relaxation & Stress Relief</h3>
                  </div>
                </div>
                <div className="p-8">
                <p className="text-gray-600 mb-6">
                    Therapeutic massage designed for busy professionals seeking stress relief, muscle tension release, 
                    and overall wellness. No injury required.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Swedish & deep tissue massage</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Trigger point therapy</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Myofascial release</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Aromatherapy options</span>
                    </li>
                  </ul>
                  <BookingButton
                    className="btn-primary w-full"
                    trackingLabel="treatment_wellness"
                  >
                    Book Wellness Session
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Specialized Care
              </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">Expert Programs</span> for Specific Needs
              </h2>
              <p className="text-xl text-gray-600">
                Tailored treatment programs with specialized expertise for unique conditions and performance goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Combat Sports Medicine */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/athletic-rehab.png"
                    alt="Combat sports medicine and treatment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                        </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Combat Sports Medicine</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    Specialized care for MMA, BJJ, and Muay Thai athletes. Expert treatment for combat sport-specific injuries.
                  </p>
                  <BookingButton
                    className="btn-outline w-full text-sm mt-auto"
                    trackingLabel="specialty_combat"
                  >
                    Book Consultation
                  </BookingButton>
                </div>
                      </div>
                      
              {/* Pelvic Health */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/hip-rehab.png"
                    alt="Pelvic health physiotherapy treatment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                  </div>
                        </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pelvic Health Physiotherapy</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    Specialized treatment for pelvic floor dysfunction, pre/post-natal care, and core stability.
                  </p>
                        <BookingButton
                    className="btn-outline w-full text-sm mt-auto"
                    trackingLabel="specialty_pelvic"
                        >
                          Book Consultation
                        </BookingButton>
                      </div>
              </div>

              {/* Corporate Wellness */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/osteopath.png"
                    alt="Corporate wellness and ergonomic assessments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Wellness</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    Ergonomic assessments, injury prevention programs, and on-site services for busy professionals.
                  </p>
                  <BookingButton
                    className="btn-outline w-full text-sm mt-auto"
                    trackingLabel="specialty_corporate"
                  >
                    Book Assessment
                  </BookingButton>
                </div>
              </div>

              {/* Sports Performance */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <OptimizedImage 
                    src="/services/chiropractor.png"
                    alt="Sports performance optimization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sports Performance</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    Movement optimization, strength training, and return-to-sport protocols for peak performance.
                  </p>
                  <BookingButton
                    className="btn-outline w-full text-sm mt-auto"
                    trackingLabel="specialty_performance"
                  >
                    Start Training
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Corporate Wellness Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/30">
          <div className="container-custom">
            {/* Insurance Coverage */}
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Insurance Benefits
                </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                  Maximize Your <span className="text-primary-600 font-bold">Insurance Benefits</span>
              </h2>
              <p className="text-xl text-gray-600">
                  Make the most of your extended health benefits. We handle the paperwork, you focus on wellness.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 shadow-lg">
                    <CreditCard className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Billing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We bill most insurance providers directly - no upfront payment needed for covered services.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl mb-4 shadow-lg">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Processing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Insurance claims processed within 24-48 hours for quick reimbursement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl mb-4 shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WSIB Approved</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Registered provider for workplace injuries and rehabilitation programs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-primary-600 rounded-xl mb-4 shadow-lg">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Wellness Coverage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Many plans cover massage therapy for relaxation and preventative care.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-primary-100 shadow-lg">
                <div className="text-center max-w-2xl mx-auto">
                  <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    We Accept All Major Insurance Providers
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Including Manulife, Sunlife, Great-West Life, Canada Life, Green Shield, Blue Cross, Desjardins, and more.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-primary-50 rounded-lg text-sm font-medium text-primary-700 border border-primary-200">
                      Physiotherapy
                    </span>
                    <span className="px-4 py-2 bg-primary-50 rounded-lg text-sm font-medium text-primary-700 border border-primary-200">
                      Massage Therapy
                    </span>
                    <span className="px-4 py-2 bg-primary-50 rounded-lg text-sm font-medium text-primary-700 border border-primary-200">
                      Chiropractic
                    </span>
                    <span className="px-4 py-2 bg-primary-50 rounded-lg text-sm font-medium text-primary-700 border border-primary-200">
                      WSIB
                    </span>
                    <span className="px-4 py-2 bg-primary-50 rounded-lg text-sm font-medium text-primary-700 border border-primary-200">
                      MVA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Wellness Programs */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  <Briefcase className="h-4 w-4" />
                  For Businesses
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  <span className="text-primary-600 font-bold">Corporate Wellness</span> Programs
                </h2>
                <p className="text-xl text-gray-600">
                  Invest in your team&apos;s health and productivity with our comprehensive workplace wellness solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Site Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bring wellness to your workplace. Chair massage, ergonomic assessments, and injury prevention workshops.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Monthly on-site visits</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Custom scheduling</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Wellness education</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn-outline w-full inline-flex items-center justify-center gap-2">
                    Request Quote
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                      </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ergonomic Assessments</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive workstation evaluations to prevent injuries and optimize comfort and productivity.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Individual assessments</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Detailed recommendations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Follow-up support</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn-outline w-full inline-flex items-center justify-center gap-2">
                    Learn More
                  </a>
                    </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Benefits</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Special corporate rates and packages for employee wellness programs and extended health benefits.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Preferred pricing</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Priority booking</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span>Flexible packages</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn-outline w-full inline-flex items-center justify-center gap-2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-white mb-6">
                  Ready to Start Your <span className="text-primary-300">Wellness Journey?</span>
                </h2>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  Whether you&apos;re recovering from injury or seeking pure relaxation, our expert team is here to help. 
                  Book your appointment today and experience the M.O. Therapy difference.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Same Day Bookings</h3>
                  <p className="text-primary-100 text-sm">Flexible scheduling for your busy life. Early morning and evening appointments available.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <CreditCard className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Direct Billing</h3>
                  <p className="text-primary-100 text-sm">We bill most insurance providers directly. No upfront payment for covered services.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Expert Care</h3>
                  <p className="text-primary-100 text-sm">Licensed professionals with specialized training in sports medicine and wellness.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <BookingButton
                    className="btn-primary text-lg px-8 py-4 flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100"
                    trackingLabel="conditions_page_cta"
                  >
                    <CheckCircle className="h-5 w-5" />
                    Book Your Appointment
                  </BookingButton>
                  <a
                    href="tel:+19052015827"
                    className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200 rounded-lg font-semibold border border-white/30"
                  >
                    <Phone className="h-5 w-5" />
                    (905) 201-5827
                  </a>
                </div>
                <p className="text-primary-200 text-sm">
                  Questions? Contact us at info@motherapy.ca or visit us at 7030 Warden Ave, Unit 18, Markham
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
