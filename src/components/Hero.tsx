'use client';

import { Calendar, Play, Shield, Award, Users, DollarSign } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { getVideoPath } from '@/lib/assets';
import GradientBlinds from './GradientBlinds';
import RotatingText from './RotatingText';
import { motion, LayoutGroup } from 'framer-motion';


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
      {/* Gradient Blinds Background - positioned behind content */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          className=""
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1}
          gradientColors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']}
          angle={0}
          noise={0.25}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.35}
          distortAmount={40}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Content layer with pointer-events-none to allow mouse events to pass through */}
      <div className="relative container-custom pt-32 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
          {/* Hero Video - Top */}
          <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-primary-800 to-primary-400 rounded-3xl p-6 shadow-2xl transform scale-105 sm:scale-100 md:scale-105 lg:scale-110">
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
            
            <LayoutGroup>
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl flex items-center justify-center gap-2"
                layout
              >
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: 'spring', damping: 40, stiffness: 400 }}
                >
                  Your M.O. is{' '}
                </motion.span>
                <RotatingText
                  texts={['your hustle', 'pain free', 'limitless', 'performance', 'here']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary-300 text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={'last'}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: 'spring', damping: 40, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.h1>
            </LayoutGroup>
            
           
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              <div className="text-center bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-300 drop-shadow-2xl">500+</div>
                <div className="text-xs sm:text-sm text-white drop-shadow-lg font-medium">Athletes Treated</div>
              </div>
              <div className="text-center bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300 drop-shadow-2xl">95%</div>
                <div className="text-xs sm:text-sm text-white drop-shadow-lg font-medium">Return to Sport</div>
              </div>
              <div className="text-center bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 drop-shadow-2xl">10+</div>
                <div className="text-xs sm:text-sm text-white drop-shadow-lg font-medium">Years Experience</div>
              </div>
            </div>

           

            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 text-xs sm:text-sm text-primary-100 px-4 sm:px-0 max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px]">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary-300 flex-shrink-0 drop-shadow-md" />
                <span className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">Same Day Booking</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px]">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-300 flex-shrink-0 drop-shadow-md" />
                <span className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">Direct Billing</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px]">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary-300 flex-shrink-0 drop-shadow-md" />
                <span className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">Licensed Pros</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px]">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-green-300 flex-shrink-0 drop-shadow-md" />
                <span className="text-xs sm:text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">Insurance Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" style={{ marginLeft: '0', marginRight: '0' }}></div>
        </div>
      </div>
    </section>
  );
}
