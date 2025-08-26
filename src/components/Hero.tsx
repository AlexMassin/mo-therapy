'use client';

import { Calendar, Play, Shield, Award, Users } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

export default function Hero() {
  const handleBookNowClick = () => {
    trackEvent('click', 'booking', 'hero_book_now');
    window.open('https://modeofoperation.janeapp.com/', '_blank');
  };

  const handleVideoClick = () => {
    trackEvent('click', 'engagement', 'hero_video');
    // Future video modal implementation
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300 rounded-full blur-xl"></div>
      </div>

      <div className="relative container-custom pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Trusted Athletic Care Specialists
              </span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Your <span className="gradient-text">M.O.</span> is your hustle.{' '}
              <span className="text-blue-300">Do it pain free.</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Expert physiotherapy, massage therapy, and chiropractic care designed specifically for athletes and active individuals. 
              We don&apos;t just treat injuries—we optimize your performance and prevent future setbacks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-100">Athletes Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">95%</div>
                <div className="text-sm text-blue-100">Return to Sport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleBookNowClick}
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Calendar className="h-5 w-5" />
                Book Assessment
              </button>
              <button
                onClick={handleVideoClick}
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Play className="h-5 w-5" />
                Watch Our Approach
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-blue-300" />
                Licensed Professionals
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-green-300" />
                Insurance Accepted
              </div>
            </div>
          </div>

          {/* Hero Image/Video */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-blue-600 rounded-2xl p-8 shadow-2xl">
              {/* Placeholder for hero image - you can replace with actual image */}
              <div className="aspect-square bg-white rounded-xl shadow-soft flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Professional Care</h3>
                  <p className="text-gray-600">Expert treatment for optimal recovery</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-medium">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">Same Day</div>
                  <div className="text-xs text-gray-600">Appointments</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-medium">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">Direct Billing</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
