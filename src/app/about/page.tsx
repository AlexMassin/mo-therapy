import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Shield, Award, Users, Target, Heart, CheckCircle } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'About M.O. Therapy - Expert Athletic Care Team in Markham',
  description: 'Learn about M.O. Therapy\'s mission to provide exceptional physiotherapy, massage therapy, and chiropractic care for athletes and active individuals in Markham.',
  keywords: [
    'about M.O. Therapy',
    'physiotherapy team Markham',
    'athletic care specialists',
    'sports medicine clinic Markham',
    'registered therapists',
    'healthcare professionals'
  ],
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
              <div>
                <h1 className="heading-xl text-white mb-6">
                  About <span className="gradient-text">M.O. Therapy</span>
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
              <div className="relative transform scale-110 lg:scale-125">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-800 to-primary-400 rounded-2xl p-6 shadow-soft">
                  <div className="w-full h-full bg-white rounded-xl shadow-soft overflow-hidden relative">
                    <img 
                      src={getImagePath("/team/mo-team-celebration.jpg")}
                      alt="M.O. Therapy team celebrating together in the clinic"
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
                  <div className="w-full h-full bg-white rounded-xl shadow-soft flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Team Excellence</h3>
                      <p className="text-gray-600">Dedicated professionals committed to your success</p>
                    </div>
                  </div>
                </div>
              </div>
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
