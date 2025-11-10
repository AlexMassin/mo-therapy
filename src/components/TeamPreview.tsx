'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users, ArrowRight, Award, Heart, Star } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

const featuredTeam = [
  {
    name: "Dillon Dela Cruz",
    title: "Registered Massage Therapist",
    image: "/team/dillon.png",
    specialty: "Pain Management & Recovery"
  },
  {
    name: "Carrie Chou",
    title: "Physiotherapist",
    image: "/team/carrie.png",
    specialty: "Rehabilitation & Education"
  },
  {
    name: "Smit Desai",
    title: "Chiropractor",
    image: "/team/smit.png",
    specialty: "Functional Rehabilitation"
  },
  {
    name: "Jeremy Chan",
    title: "RMT & FST",
    image: "/team/jeremy.png",
    specialty: "Fascial Stretch Therapy"
  }
];

export default function TeamPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Expert Care Team
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Meet Our <span className="text-primary-600 font-bold">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our licensed healthcare professionals bring years of experience and specialized training 
            to help you achieve optimal health and performance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredTeam.map((member, index) => (
            <div key={member.name} className="group relative">
              {/* Card */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                  <Image
                    src={getImagePath(member.image)}
                    alt={`${member.name} - ${member.title} at M.O. Therapy in Markham`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{member.title}</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                    <Star className="h-3 w-3" />
                    {member.specialty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">9+</div>
            <div className="text-sm text-gray-600">Expert Practitioners</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-600">Licensed Professionals</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Patient Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
          >
            Meet Our Full Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

