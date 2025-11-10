import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import OptimizedImage from '@/components/OptimizedImage';
import { Heart, Briefcase, Calendar, Shield, Coffee, Brain, TrendingUp, Clock, Zap, Users, CheckCircle, Phone } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Clinical Wellness & Preventative Care | M.O. Therapy Markham',
  description: 'Professional wellness and preventative care for busy professionals in Markham. Stress relief massage, ergonomic assessments, and corporate wellness programs. Insurance coverage available.',
  keywords: [
    'wellness massage Markham',
    'corporate wellness Markham',
    'stress relief massage',
    'ergonomic assessment Markham',
    'preventative care Markham',
    'workplace wellness',
    'relaxation therapy Markham',
    'desk posture treatment',
    'repetitive strain prevention',
    'professional massage therapy',
    'extended health benefits massage',
    'insurance wellness coverage'
  ],
  alternates: {
    canonical: '/wellness',
  },
  openGraph: {
    title: 'Clinical Wellness & Preventative Care - M.O. Therapy Markham',
    description: 'Professional wellness and preventative care for busy professionals. Stress relief, ergonomic assessments, and corporate wellness programs.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/wellness',
    siteName: 'M.O. Therapy',
  },
};

const treatmentOptions = [
  {
    icon: Heart,
    title: 'Relaxation Massage',
    description: 'Therapeutic massage designed to melt away stress and tension. Perfect for professionals seeking relief from workplace stress.',
    features: [
      'Swedish massage techniques',
      'Deep tissue therapy',
      'Customized pressure levels',
      'Aromatherapy options',
      '60 or 90-minute sessions',
      'Same-day appointments'
    ]
  },
  {
    icon: Briefcase,
    title: 'Ergonomic Assessment',
    description: 'Comprehensive workplace posture analysis to prevent injury and optimize comfort at your desk.',
    features: [
      'Desk setup evaluation',
      'Posture correction strategies',
      'Stretching program design',
      'Equipment recommendations',
      'Follow-up support',
      'Corporate packages available'
    ]
  },
  {
    icon: Calendar,
    title: 'Maintenance Plans',
    description: 'Regular preventative care to keep you at your best. Use your extended health benefits for consistent self-care.',
    features: [
      'Bi-weekly or monthly visits',
      'Flexible scheduling',
      'Insurance direct billing',
      'Priority booking',
      'Progress tracking',
      'Personalized care plans'
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Feel more focused and energized throughout your workday with reduced pain and tension.'
  },
  {
    icon: Brain,
    title: 'Stress Management',
    description: 'Professional techniques to help you manage workplace stress and maintain mental clarity.'
  },
  {
    icon: Clock,
    title: 'Improved Work-Life Balance',
    description: 'Regular self-care helps you show up as your best self both professionally and personally.'
  },
  {
    icon: Zap,
    title: 'Injury Prevention',
    description: 'Address minor issues before they become major problems through consistent preventative care.'
  },
  {
    icon: Shield,
    title: 'Reduced Sick Days',
    description: 'Preventative care strengthens your body\'s resilience and helps avoid injury-related time off work.'
  },
  {
    icon: Users,
    title: 'Professional Care Team',
    description: 'Licensed healthcare professionals who understand the unique demands of modern professional life.'
  }
];

export default function WellnessPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                  <Heart className="h-4 w-4" />
                  Clinical Wellness Services
                </div>
                <h1 className="heading-xl text-white mb-6">
                  <span className="text-primary-400 font-bold">Wellness & Preventative Care</span> for Modern Professionals
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed mb-8">
                  Expert care designed for busy professionals seeking stress relief, injury prevention, and optimal work-life balance. 
                  Use your extended health benefits for regular self-care and wellness maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingButton
                    className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium"
                    trackingLabel="wellness_hero_booking"
                  >
                    Book Wellness Session
                  </BookingButton>
                  <a
                    href="tel:9052015827"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white hover:bg-primary-500 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-4 text-primary-100">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Insurance Coverage Available • Direct Billing</span>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage 
                    src="/team/DSC00525.JPG"
                    alt="Professional wellness care at M.O. Therapy in Markham"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Corporate Professionals Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4" />
                For Corporate Professionals
              </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                No Injury Required - <span className="text-primary-600 font-bold">Just You, Prioritizing Yourself</span>
              </h2>
              <p className="text-xl text-gray-600">
                You don&apos;t need to be hurt to benefit from professional care. Our wellness services are designed 
                for busy professionals who want to stay ahead of pain, manage stress, and optimize their health.
              </p>
            </div>

            {/* Treatment Options */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {treatmentOptions.map((treatment) => {
                const Icon = treatment.icon;
                return (
                  <div key={treatment.title} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{treatment.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {treatment.description}
                    </p>
                    <ul className="space-y-2">
                      {treatment.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <BookingButton
                className="btn-primary text-lg px-8 py-4"
                trackingLabel="wellness_treatment_booking"
              >
                Schedule Your Wellness Session
              </BookingButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                The Benefits of <span className="text-primary-600 font-bold">Preventative Wellness Care</span>
              </h2>
              <p className="text-xl text-gray-600">
                Regular wellness care helps you perform at your best, both professionally and personally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Insurance & Coverage Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Insurance Coverage
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Use Your <span className="text-primary-600 font-bold">Extended Health Benefits</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Many extended health plans cover massage therapy and physiotherapy for general wellness and preventative 
                  care - not just injury treatment. Maximize your benefits for regular self-care.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-primary-100 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                  What&apos;s Typically Covered
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Massage Therapy</h4>
                    <p className="text-gray-600 mb-6">
                      Most plans cover wellness massage and preventative physiotherapy - you don&apos;t need an injury to use your benefits. 
                      Regular maintenance is often fully covered.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        Stress relief and relaxation
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        Preventative maintenance
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        General wellness care
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Physiotherapy</h4>
                    <p className="text-gray-600 mb-6">
                      Coverage often includes assessments for workplace ergonomics, posture correction, and preventative care programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        Ergonomic assessments
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        Posture optimization
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        Injury prevention
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Direct Billing Available</h4>
                      <p className="text-gray-700 text-sm">
                        We handle the paperwork with most major insurance providers. Simply bring your insurance information 
                        and we&apos;ll bill directly on your behalf.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Wellness Packages */}
        <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Corporate Wellness Programs
              </div>
              <h2 className="heading-lg text-white mb-6">
                Corporate <span className="text-primary-400 font-bold">Wellness Packages</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Invest in your team&apos;s health and productivity with our corporate wellness programs. 
                Flexible packages designed to fit your organization&apos;s needs.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Coffee className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">On-Site Chair Massage</h3>
                  <p className="text-gray-300 text-sm">Quick stress-relief sessions at your office</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Briefcase className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Ergonomic Workshops</h3>
                  <p className="text-gray-300 text-sm">Team education on workplace wellness</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Employee Wellness Plans</h3>
                  <p className="text-gray-300 text-sm">Ongoing preventative care programs</p>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Inquire About Corporate Packages
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-gray-900 mb-6">
                Ready to Prioritize <span className="text-primary-600 font-bold">Your Wellness?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Book your first wellness session and experience the difference preventative care can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton
                  className="btn-primary text-lg px-8 py-4"
                  trackingLabel="wellness_final_cta"
                >
                  Book Wellness Session
                </BookingButton>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

