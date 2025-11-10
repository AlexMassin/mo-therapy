'use client';

import { Heart, Sparkles, Shield, ArrowRight } from 'lucide-react';
import BookingButton from './BookingButton';
import { getImagePath } from '@/lib/assets';

export default function WellnessRelaxation() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-6">
            <Sparkles className="h-4 w-4" />
            Clinical Wellness & Preventative Care
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            More Than Recovery - <span className="text-primary-600 font-bold">Total Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From stress relief to preventative care, our therapeutic services support your overall health and wellbeing. 
            No injury required—just you, prioritizing yourself.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column - Large Image Feature */}
          <div className="lg:col-span-5 space-y-8">
            {/* Main Wellness Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[4/5] relative">
                <img
                  src={getImagePath("/services/massage-therapy.png")}
                  alt="Relaxing massage therapy session at M.O. Therapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    <Heart className="h-4 w-4" />
                    Therapeutic Massage
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Stress Relief & Relaxation</h3>
                  <p className="text-white/90 text-sm">Melt away tension with expert therapeutic massage</p>
                </div>
              </div>
            </div>

            {/* Osteopathy Treatment Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[16/9]">
                <img
                  src={getImagePath("/services/osteopath.png")}
                  alt="Osteopathy treatment and manual therapy at M.O. Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Wellness Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Relaxation & Stress Management</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Therapeutic massage designed for busy professionals. From Swedish to deep tissue, our treatments 
                    help you decompress, recharge, and prioritize self-care.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">60-90 min sessions</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Customized pressure</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Same-day available</span>
                  </div>
                  <BookingButton className="btn-primary inline-flex items-center gap-2" trackingLabel="wellness_relaxation">
                    Book Wellness Session
                    <ArrowRight className="h-4 w-4" />
                  </BookingButton>
                </div>
              </div>
            </div>

            {/* Image Grid Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <div className="aspect-square">
                  <img
                    src={getImagePath("/services/physiotherapy.png")}
                    alt="Physiotherapy wellness care"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <div className="aspect-square">
                  <img
                    src={getImagePath("/services/chiropractor.png")}
                    alt="Chiropractic care and spinal adjustment at M.O. Therapy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Wellness Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Preventative Care & Ergonomics</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Workplace wellness programs, ergonomic assessments, and preventative maintenance. Stay ahead 
                    of pain and optimize your posture for long-term health.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Desk assessments</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Posture correction</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">Corporate programs</span>
                  </div>
                  <a 
                    href="/wellness" 
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
                  >
                    Learn About Wellness Care
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-12 text-white">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img
              src={getImagePath("/services/osteopath.png")}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Insurance Coverage
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Use Your Extended Health Benefits
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Most plans cover massage therapy and physiotherapy for wellness and preventative care—not just injury treatment. 
              Maximize your benefits for regular self-care and stress management.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Direct Billing Available
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Most Insurance Accepted
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Wellness Coverage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
