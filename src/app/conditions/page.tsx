import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Target, Heart, Shield, Activity, Users, ArrowRight, CheckCircle, Brain, Zap, FileText, CreditCard, Clock, Award, TrendingUp, Briefcase } from 'lucide-react';
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
    title: 'Head & Neck',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-500',
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
    gradient: 'from-blue-500 to-cyan-500',
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
    gradient: 'from-green-500 to-emerald-500',
    conditions: [
      'Tennis Elbow (Lateral Epicondylitis)',
      'Golfer\'s Elbow (Medial Epicondylitis)',
      'Biceps Tendinopathy',
      'Elbow Instability'
    ]
  },
  {
    title: 'Wrist & Hand',
    icon: Target,
    gradient: 'from-orange-500 to-amber-500',
    conditions: [
      'Carpal Tunnel Syndrome',
      'Cubital Tunnel Syndrome',
      'Wrist Sprains',
      'De Quervain\'s Tenosynovitis'
    ]
  },
  {
    title: 'Lower Back & Spine',
    icon: Activity,
    gradient: 'from-red-500 to-pink-500',
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
    gradient: 'from-purple-500 to-pink-500',
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
    gradient: 'from-cyan-500 to-blue-500',
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
    gradient: 'from-indigo-500 to-purple-500',
    conditions: [
      'Ankle Sprains',
      'Plantar Fasciitis',
      'Achilles Tendinopathy',
      'Shin Splints',
      'Stress Fractures'
    ]
  }
];

const insuranceBenefits = [
  {
    title: 'Direct Billing Available',
    description: 'We bill most major insurance providers directly - no upfront payment needed',
    icon: CreditCard,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Fast Processing',
    description: 'Insurance claims processed within 24-48 hours for quick reimbursement',
    icon: Clock,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'WSIB Approved',
    description: 'Registered provider for workplace injuries and rehabilitation programs',
    icon: Shield,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Corporate Packages',
    description: 'Special rates for corporate wellness programs and employee benefits',
    icon: Briefcase,
    gradient: 'from-orange-500 to-amber-500'
  }
];

const specialtyServices = [
  {
    title: 'Pelvic Health Physiotherapy',
    description: 'Specialized treatment for pelvic floor dysfunction, pre/post-natal care, and core stability. Evidence-based approach for optimal pelvic health.',
    practitioner: 'Carrie Chou, PT',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Combat Sports Medicine',
    description: 'Specialized care for MMA, BJJ, and Muay Thai athletes. Expert treatment for combat sport-specific injuries and performance optimization.',
    practitioner: 'Specialized Team',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Corporate Wellness',
    description: 'Ergonomic assessments, injury prevention programs, and on-site services for busy professionals. Maximize productivity, minimize downtime.',
    practitioner: 'Team Approach',
    icon: Briefcase,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Sports Performance',
    description: 'Movement optimization, strength training, and return-to-sport protocols. Get back to peak performance faster and stronger.',
    practitioner: 'Performance Team',
    icon: TrendingUp,
    gradient: 'from-green-500 to-teal-500'
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
                Expert Treatment for <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">Active Professionals</GradientText>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Insurance-covered, evidence-based care designed for busy professionals and athletes. Get back to peak 
                performance with minimal downtime. Direct billing available for most major insurance providers.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {conditionCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="group relative">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-primary-200 transition-all duration-300 hover:shadow-xl h-full overflow-hidden">
                      {/* Icon Header */}
                      <div className={`bg-gradient-to-br ${category.gradient} p-6`}>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
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

        {/* Wellness & Relaxation Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Not Just Recovery - <span className="text-primary-600 font-bold">Pure Relaxation</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sometimes you don't need treatment – you need to unwind. Our therapeutic massage services are perfect for 
                stress relief, relaxation, and overall wellness. No injury required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stress Relief Massage</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Melt away tension with our Swedish and deep tissue massage techniques. Perfect for busy professionals 
                  looking to decompress and recharge.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>60 or 90-minute sessions</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Customized pressure levels</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Aromatherapy options</span>
                  </li>
                </ul>
                <BookingButton className="btn-outline w-full" trackingLabel="wellness_stress_relief">
                  Book Relaxation Session
                </BookingButton>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness Maintenance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Regular massage therapy for overall health and wellbeing. Prevent issues before they start with 
                  consistent self-care.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Monthly membership options</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Preventative care focus</span>
                  </li>
                </ul>
                <BookingButton className="btn-outline w-full" trackingLabel="wellness_maintenance">
                  Start Wellness Plan
                </BookingButton>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gift of Relaxation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Share the gift of wellness with loved ones. Perfect for birthdays, holidays, or showing someone you care.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Gift certificates available</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Customizable packages</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span>Digital or physical cards</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-outline w-full inline-flex items-center justify-center gap-2">
                  Purchase Gift Card
                </a>
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Insurance May Cover Relaxation Too
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Many extended health plans cover massage therapy for general wellness, not just injury treatment. 
                Book a relaxation massage and use your benefits to prioritize self-care.
              </p>
            </div>
          </div>
        </section>

        {/* Insurance & Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg text-gray-900 mb-4">
                Maximize Your <span className="text-primary-600 font-bold">Insurance Benefits</span>
              </h2>
              <p className="text-xl text-gray-600">
                Make the most of your extended health benefits. We handle the paperwork, you focus on recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {insuranceBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                    <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-100 group-hover:border-primary-300 transition-all duration-300 hover:shadow-lg h-full">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-4 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="max-w-2xl mx-auto">
                <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  We Accept All Major Insurance Providers
                </h3>
                <p className="text-gray-600 mb-6">
                  Including Manulife, Sunlife, Great-West Life, Canada Life, Green Shield, Blue Cross, Desjardins, and more. 
                  Not sure if we accept yours? Contact us to verify coverage.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                    Physiotherapy
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                    Massage Therapy
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                    Chiropractic
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                    WSIB
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                    MVA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">Specialized Programs</span> for Professionals & Athletes
              </h2>
              <p className="text-xl text-gray-600">
                Tailored treatment programs designed for specific needs and performance goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {specialtyServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-primary-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                      {/* Icon Header */}
                      <div className="p-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Footer */}
                      <div className="mt-auto p-6 pt-0">
                        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                          <span className="font-medium">{service.practitioner}</span>
                        </div>
                        <BookingButton
                          className="btn-outline w-full"
                          trackingLabel={`specialty_${service.title.toLowerCase().replace(/\s+/g, '_')}`}
                        >
                          Book Consultation
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
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-white mb-6">
                  Get Back to <span className="text-primary-300">Peak Performance</span>
                </h2>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  Don't let pain compromise your productivity or performance. Use your insurance benefits to access 
                  expert care with minimal out-of-pocket costs. Book your assessment today.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Same Day Bookings</h3>
                  <p className="text-primary-100 text-sm">Flexible scheduling to fit your busy life. Early morning and evening appointments available.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <CreditCard className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Direct Billing</h3>
                  <p className="text-primary-100 text-sm">We bill most insurance providers directly. No upfront payment required for covered services.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="h-10 w-10 text-primary-200 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Expert Care</h3>
                  <p className="text-primary-100 text-sm">Licensed professionals with specialized training in sports medicine and rehabilitation.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <BookingButton
                    className="btn-primary text-lg px-8 py-4 flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100"
                    trackingLabel="conditions_page_cta_book"
                  >
                    <CheckCircle className="h-5 w-5" />
                    Book Your Assessment
                  </BookingButton>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200 rounded-lg font-semibold border border-white/30"
                  >
                    <Users className="h-5 w-5" />
                    Verify Insurance Coverage
                  </a>
                </div>
                <p className="text-primary-200 text-sm">
                  Questions about your coverage? Contact us at (437) 747-0063 or email info@motherapy.ca
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
