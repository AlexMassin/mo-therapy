'use client';

import { CreditCard, Clock, Shield, Briefcase, Award } from 'lucide-react';

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

export default function InsuranceBenefits() {
  return (
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
  );
}

