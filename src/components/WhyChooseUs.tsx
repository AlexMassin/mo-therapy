'use client';

import { CheckCircle, Clock, Award, Heart, Users, Shield } from 'lucide-react';
import GradientText from '@/components/GradientText';

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
    description: 'Every treatment plan is tailored to your specific goals, sport, and lifestyle requirements.'
  },
  {
    icon: Users,
    title: 'Multidisciplinary Approach',
    description: 'Our integrated team approach ensures comprehensive care addressing all aspects of your health.'
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-gray-900 mb-6">
            Why Athletes Choose <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">M.O. Therapy</GradientText>
          </h2>
          <p className="text-xl text-gray-600">
            We understand the unique demands placed on your body. Our specialized approach goes beyond traditional therapy 
            to optimize your performance and prevent future injuries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-body">{feature.description}</p>
              </div>
            );
          })}
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
