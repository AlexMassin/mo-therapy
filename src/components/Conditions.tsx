'use client';

import Link from 'next/link';
import { ArrowRight, Target } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

const conditionCategories = [
  {
    title: 'Sports Injuries',
    conditions: [
      'ACL/MCL/PCL Injuries',
      'Ankle Sprains',
      'Tennis/Golfer\'s Elbow',
      'Rotator Cuff Injuries',
      'Hamstring Strains',
      'IT Band Syndrome'
    ],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Back & Neck Pain',
    conditions: [
      'Lower Back Pain',
      'Disc Herniation',
      'Neck Pain',
      'Whiplash',
      'Sciatica',
      'Postural Issues'
    ],
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Joint Pain',
    conditions: [
      'Knee Osteoarthritis',
      'Hip Impingement',
      'Shoulder Impingement',
      'TMJ Disorders',
      'Carpal Tunnel',
      'Plantar Fasciitis'
    ],
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Performance Issues',
    conditions: [
      'Movement Dysfunction',
      'Muscle Imbalances',
      'Poor Flexibility',
      'Strength Deficits',
      'Coordination Problems',
      'Fatigue Management'
    ],
    color: 'bg-purple-50 text-purple-600'
  }
];

export default function Conditions() {
  const handleLearnMoreClick = () => {
    trackEvent('click', 'conditions', 'learn_more');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Target className="h-4 w-4" />
            Specialized Treatment
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Sports Injuries & Conditions We <span className="text-blue-600 font-bold">Specialize In</span>
          </h2>
          <p className="text-xl text-gray-600">
            From acute sports injuries to chronic pain management, our expert team provides targeted treatment 
            for a wide range of musculoskeletal conditions.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {conditionCategories.map((category, index) => (
            <div key={category.title} className="card group hover:scale-105 transition-all duration-300">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.color}`}>
                {category.title}
              </div>
              <ul className="space-y-3">
                {category.conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-2xl shadow-soft max-w-4xl mx-auto">
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Don&apos;t see your condition listed?
              </h3>
              <p className="text-gray-600 text-lg">
                We treat a comprehensive range of musculoskeletal conditions. 
                Contact us to discuss how we can help with your specific needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/conditions"
                onClick={handleLearnMoreClick}
                className="btn-secondary flex items-center gap-2"
              >
                View All Conditions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => {
                  trackEvent('click', 'booking', 'conditions_consultation');
                  window.open('https://modeofoperation.janeapp.com/', '_blank');
                }}
                className="btn-primary"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
