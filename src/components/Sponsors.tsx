'use client';

import { Building2 } from 'lucide-react';
import GradientText from './GradientText';
import Image from 'next/image';
import { getImagePath } from '@/lib/assets';

const sponsors = [
  {
    name: "Orangetheory Markham",
    category: "Fitness Partner",
    logo: "/partners/orangetheory.png"
  },
  {
    name: "F45 Jefferson",
    category: "Training Partner",
    logo: "/partners/jefferson.png"
  },
  {
    name: "BMW Autohaus",
    category: "Corporate Partner",
    logo: "/partners/bmw.png"
  },
  {
    name: "Mercedes-Benz Markham",
    category: "Corporate Partner",
    logo: "/partners/mercedes.png"
  },
  {
    name: "Function Pilates",
    category: "Wellness Partner",
    logo: "/partners/function.png"
  },
  {
    name: "Soul Martial Arts",
    category: "Athletic Partner",
    logo: "/partners/soul.png"
  },
  {
    name: "Markham Stouffville Hospital",
    category: "Healthcare Partner",
    logo: "/partners/markham-hospital.png"
  }
];

export default function Sponsors() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-gray-900 mb-6">
            Our <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">Partners & Supporters</GradientText>
          </h2>
          <p className="text-xl text-gray-600">
            Proud to collaborate with leading organizations in our community
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {sponsors.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Logo */}
                  <div className="w-full h-32 relative mb-6 flex items-center justify-center">
                    <Image
                      src={getImagePath(sponsor.logo)}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={128}
                      className="object-contain max-h-24"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {sponsor.name}
                  </h3>

                  {/* Category */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {sponsor.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl px-10 py-12 shadow-xl text-white max-w-2xl">
            <Building2 className="h-12 w-12 text-primary-200" />
            <h3 className="text-2xl font-bold">
              Interested in Partnering with Us?
            </h3>
            <p className="text-primary-100 text-lg">
              We&apos;re always looking to collaborate with organizations that share our commitment to health, wellness, and community support.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

