'use client';

import { Building2 } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/assets';

const sponsors = [
  {
    name: "Orangetheory Markham",
    logo: "/partners/orangetheory.png",
    category: "Fitness Partner"
  },
  {
    name: "Function Health Club",
    logo: "/partners/function.png",
    category: "Fitness Partner"
  },
  {
    name: "Soul Asylum Gym",
    logo: "/partners/soul.png",
    category: "Training Partner"
  },
  {
    name: "Jefferson Fitness",
    logo: "/partners/jefferson.png",
    category: "Fitness Partner"
  },
  {
    name: "Markham Stouffville Hospital",
    logo: "/partners/markham-hospital.png",
    category: "Healthcare Partner"
  },
  {
    name: "BMW",
    logo: "/partners/bmw.png",
    category: "Corporate Partner"
  },
  {
    name: "Mercedes-Benz",
    logo: "/partners/mercedes.png",
    category: "Corporate Partner"
  }
];

export default function Sponsors() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-6">
            <Building2 className="h-4 w-4" />
            Trusted Partners
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Collaborating with <span className="text-primary-600 font-bold">Leading Organizations</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proud to work with exceptional partners who share our commitment to health, wellness, and community
          </p>
        </div>

        {/* Sponsors Grid - Minimalistic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="group flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-24 relative flex items-center justify-center">
                  <Image
                    src={getImagePath(sponsor.logo)}
                    alt={`${sponsor.name} logo`}
                    width={180}
                    height={96}
                    className="object-contain max-h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership CTA - Simplified */}
        <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-2xl p-12">
          <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Partner with M.O. Therapy
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We collaborate with organizations that share our commitment to health, wellness, and community support.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
