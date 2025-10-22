'use client';

import Link from 'next/link';
import { Activity, Heart, Zap, Compass, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import GradientText from '@/components/GradientText';

const services = [
  {
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Comprehensive movement assessment and targeted treatment to restore function, strength, and mobility for optimal athletic performance.',
    features: [
      'Sports injury rehabilitation',
      'Movement pattern analysis', 
      'Performance optimization',
      'Post-surgical recovery'
    ],
    href: '/services/physiotherapy',
    color: 'blue'
  },
  {
    icon: Heart,
    title: 'Sports Massage Therapy',
    description: 'Specialized massage techniques designed to enhance circulation, reduce muscle tension, and accelerate recovery for active individuals.',
    features: [
      'Deep tissue massage',
      'Pre/post-event massage',
      'Trigger point therapy',
      'Myofascial release'
    ],
    href: '/services/massage-therapy',
    color: 'green'
  },
  {
    icon: Zap,
    title: 'Chiropractic Care',
    description: 'Evidence-based spinal and joint care to optimize nervous system function and enhance athletic performance.',
    features: [
      'Spinal adjustments',
      'Joint mobilization',
      'Sports-specific treatment',
      'Movement restoration'
    ],
    href: '/services/chiropractic',
    color: 'orange'
  },
  {
    icon: Compass,
    title: 'Osteopathy',
    description: 'Holistic manual therapy approach focusing on the body\'s structural balance and natural healing capacity.',
    features: [
      'Whole-body assessment',
      'Manual therapy techniques',
      'Structural integration',
      'Pain management'
    ],
    href: '/services/osteopathy',
    color: 'purple'
  }
];

const colorVariants = {
  blue: {
    bg: 'bg-primary-50',
    icon: 'text-primary-600',
    button: 'text-primary-600 hover:text-primary-700',
    accent: 'bg-primary-100'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    button: 'text-green-600 hover:text-green-700',
    accent: 'bg-green-100'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    button: 'text-orange-600 hover:text-orange-700',
    accent: 'bg-orange-100'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    button: 'text-purple-600 hover:text-purple-700',
    accent: 'bg-purple-100'
  }
};

export default function Services() {
  const handleServiceClick = (serviceName: string) => {
    trackEvent('click', 'service', serviceName);
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-gray-900 mb-6">
            Comprehensive Care for <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">Peak Athletic Performance</GradientText>
          </h2>
          <p className="text-xl text-gray-600">
            Our integrated approach combines multiple therapeutic disciplines to address the root cause of your concerns 
            and optimize your athletic potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const colors = colorVariants[service.color as keyof typeof colorVariants];
            const Icon = service.icon;
            
            return (
              <div key={service.title} className="service-card group">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl ${colors.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="heading-sm text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-body mb-4">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.accent}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Link
                      href={service.href}
                      onClick={() => handleServiceClick(service.title)}
                      className={`inline-flex items-center gap-2 font-medium ${colors.button} transition-colors duration-200 group/link`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-soft">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Not sure which service is right for you?
              </h3>
              <p className="text-gray-600">
                Book a comprehensive assessment and we&apos;ll create a personalized treatment plan.
              </p>
            </div>
            <button
              onClick={() => {
                trackEvent('click', 'booking', 'services_assessment');
                window.open('https://modeofoperation.janeapp.com/', '_blank');
              }}
              className="btn-primary whitespace-nowrap"
            >
              Book Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
