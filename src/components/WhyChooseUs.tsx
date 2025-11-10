'use client';

import { CheckCircle, Clock, Award, Heart, Users, Shield } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const features = [
  {
    icon: CheckCircle,
    title: 'Evidence-Based Treatment',
    description: 'All our treatments are grounded in the latest research and proven methodologies for optimal outcomes.'
  },
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    description: 'Urgent injury? We offer same-day appointments to get you back on track quickly.'
  },
  {
    icon: Award,
    title: 'Licensed Professionals',
    description: 'Our team consists of registered and licensed healthcare professionals with extensive sports medicine experience.'
  },
  {
    icon: Heart,
    title: 'Personalized Care Plans',
    description: 'Every treatment plan is tailored to your specific goals - whether that\'s peak athletic performance, stress relief, ergonomic optimization, or preventative wellness.'
  },
  {
    icon: Users,
    title: 'Multidisciplinary Approach',
    description: 'Our integrated team approach ensures comprehensive care addressing all aspects of your health - from injury treatment to workplace ergonomics and stress management.'
  },
  {
    icon: Shield,
    title: 'Direct Insurance Billing',
    description: 'We handle the paperwork with most major insurance providers for your convenience.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content Side */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2 className="heading-lg text-gray-900 mb-6">
                Why Active Professionals & Athletes Choose <span className="text-primary-600 font-bold">M.O. Therapy</span>
              </h2>
              <p className="text-xl text-gray-600">
                We understand the demands placed on your body - whether you&apos;re an athlete, a busy professional, or someone prioritizing wellness. 
                Our specialized approach optimizes performance, relieves stress, and prevents future issues through evidence-based care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Images Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large team photo */}
              <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage 
                  src="/team/DSC00525.JPG"
                  alt="M.O. Therapy team collaborating on patient care"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Two smaller photos */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage 
                  src="/team/DSC00534.JPG"
                  alt="M.O. Therapy healthcare professionals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage 
                  src="/team/DSC00546.JPG"
                  alt="M.O. Therapy team at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-400 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Athletes Treated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Return to Sport Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
