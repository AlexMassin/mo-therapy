'use client';

import { Calendar, Play, Shield, Award, Users, DollarSign } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { getVideoPath } from '@/lib/assets';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-300 rounded-full blur-xl"></div>
      </div>

      <div className="relative container-custom pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
          {/* Hero Video - Top */}
          <div className="relative w-full max-w-6xl">
            <div className="relative bg-gradient-to-br from-primary-800 to-primary-400 rounded-3xl p-6 shadow-2xl transform scale-105 sm:scale-110">
              {/* Hero Video */}
              <div className="aspect-[16/9] bg-white rounded-2xl shadow-soft overflow-hidden relative">
                <video 
                  src={getVideoPath("/homepage/mo-therapy-homepage-video.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Content - Bottom */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Trusted Athletic Care Specialists
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your <span className="gradient-text">M.O.</span> is your hustle.<br />
              <span className="text-primary-300">Do it pain free.</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              Expert physiotherapy, massage therapy, and chiropractic care designed specifically for athletes and active individuals. 
              We don&apos;t just treat injuries—we optimize your performance and prevent future setbacks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-300">500+</div>
                <div className="text-xs sm:text-sm text-primary-100">Athletes Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300">95%</div>
                <div className="text-xs sm:text-sm text-primary-100">Return to Sport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300">10+</div>
                <div className="text-xs sm:text-sm text-primary-100">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center px-4 sm:px-0">
              <button
                onClick={handleBookNowClick}
                className="btn-primary flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Book Assessment
              </button>
              <button
                onClick={handleVideoClick}
                className="btn-secondary flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Watch Our Approach
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-xs sm:text-sm text-primary-100 px-4 sm:px-0 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary-300" />
                Same Day Booking
              </div>
              <div className="flex items-center justify-center gap-1">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-300" />
                Direct Billing Available
              </div>
              <div className="flex items-center justify-center gap-1">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary-300" />
                Licensed Professionals
              </div>
              <div className="flex items-center justify-center gap-1">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-green-300" />
                Insurance Accepted
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
