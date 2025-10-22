'use client';

import { Heart, Zap, CheckCircle } from 'lucide-react';
import BookingButton from './BookingButton';

export default function WellnessRelaxation() {
  return (
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
  );
}

