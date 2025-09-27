import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Users, Award, Heart, Star, Mail } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Our Expert Team - M.O. Therapy Markham | Physiotherapists & RMTs',
  description: 'Meet our experienced team of physiotherapists, registered massage therapists, and chiropractors at M.O. Therapy Markham. Expert care from licensed professionals dedicated to your recovery.',
  keywords: [
    'physiotherapy team Markham',
    'registered massage therapists Markham',
    'chiropractor Markham',
    'sports medicine team',
    'licensed physiotherapists Markham',
    'resident physiotherapist',
    'RMT team Markham',
    'healthcare professionals Markham',
    'injury rehabilitation specialists',
    'M.O. Therapy staff',
    'Apple Creek Blvd therapists',
    'certified massage therapists',
    'experienced chiropractors'
  ],
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Expert Healthcare Team - M.O. Therapy Markham',
    description: 'Meet our skilled physiotherapists, RMTs, and chiropractors dedicated to helping you achieve optimal health and performance. Book with our expert team today.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/team',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'M.O. Therapy Expert Team - Physiotherapists, RMTs & Chiropractors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Healthcare Team - M.O. Therapy Markham',
    description: 'Meet our skilled physiotherapists, RMTs, and chiropractors dedicated to your recovery.',
    images: ['/og-team.jpg'],
  },
};

const teamMembers = [
  {
    name: "Dillon Dela Cruz",
    title: "Registered Massage Therapist",
    description: "Dillon is an RMT who focuses to provide a positive experience for clients seeking therapy. His goal is to identify the root cause of your pain so that you can continue doing the things you love pain free.",
    image: "/team/dillon.png",
    specialty: "Pain Management & Recovery",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/1"
  },
  {
    name: "Damian Koo", 
    title: "Registered Massage Therapist",
    description: "Damian is an RMT who focuses to regain confidence that you might have lost through an injury or lifestyle changes. He uses massage techniques and exercises to increase your movement and quality of life.",
    image: "/team/damian.png",
    specialty: "Movement & Confidence Building",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/2"
  },
  {
    name: "Carrie Chou",
    title: "Physiotherapist",
    description: "Carrie is a registered PT whose mission is to educate you on the importance of rehab. She guides her clients through a rehabilitation and strengthening program to prevent future and chronic recurring injuries.",
    image: "/team/carrie.png",
    specialty: "Rehabilitation & Education",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/5"
  },
  {
    name: "Smit Desai",
    title: "Chiropractor", 
    description: "Smit is a registered chiropractor who specializes in personalized and goal-oriented functional rehabilitation. Smit combines manual therapy, such as adjustments, to ensure that you achieve your personal goals.",
    image: "/team/smit.png",
    specialty: "Functional Rehabilitation",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/19"
  },
  {
    name: "Jeremy Chan",
    title: "Registered Massage Therapist & FST",
    description: "Jeremy is a skilled Registered Massage Therapist and Fascial Stretch Therapist (FST) dedicated to helping clients recover, enhance mobility, and achieve optimal health. Jeremy thoughtfully customizes each session to help clients relieve tension, improve flexibility, and recover from injuries.",
    image: "/team/jeremy.png",
    specialty: "Fascial Stretch Therapy",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/28"
  },
  {
    name: "Shruti Chudasama",
    title: "Registered Massage Therapist",
    description: "Shruti is an RMT who focuses on restoring movement and reducing pain through a combination of soft-tissue techniques and therapeutic exercise. She is dedicated to helping clients recover from injuries, manage chronic conditions, and enhance their overall physical well-being.",
    image: "/team/shruti.png",
    specialty: "Chronic Condition Management",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/29"
  },
  {
    name: "Leo Huang",
    title: "Resident Physiotherapist",
    description: "Leo is a Resident Physiotherapist committed to helping clients recover, restore movement, and optimize their physical health. He tailors each treatment plan to address individual needs, focusing on injury rehabilitation, pain management, and performance enhancement.",
    image: "/team/leo.png",
    specialty: "Performance Enhancement",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/31"
  },
  {
    name: "Nadeem Mamajiwalla",
    title: "Resident Physiotherapist", 
    description: "Nadeem is a Resident Physiotherapist who prioritizes personalized care to support recovery and improve overall function. He takes a hands-on approach to treatment, focusing on injury rehabilitation, mobility restoration, and long-term physical wellness tailored to each client's goals.",
    image: "/team/nadeem.png",
    specialty: "Personalized Care",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/33"
  },
  {
    name: "Nathan Tien-Kai Wu",
    title: "Resident Physiotherapist",
    description: "Nathan is a Resident Physiotherapist who provides comprehensive care focused on helping clients achieve their rehabilitation goals. He combines evidence-based treatment approaches with personalized care to support recovery and optimize physical function.",
    image: "/team/nathan.png",
    specialty: "Evidence-Based Rehabilitation",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/34"
  },
  {
    name: "Dr. Taylor Chan",
    title: "Chiropractor & Clinical Acupuncture Provider",
    description: "Dr. Taylor Chan is passionate about helping people move with ease, recover from pain, and feel confident in their bodies. She earned her Doctor of Chiropractic degree from CMCC, graduating Summa Cum Laude. Her approach is rooted in evidence-based care, tailoring treatments to each individual's needs and goals.",
    image: "/team/taylor.png",
    specialty: "Chiropractic Care & Acupuncture",
    bookingLink: "https://modeofoperation.janeapp.com/#/staff_member/36"
  }
];

const teamStats = [
  { number: '10+', label: 'Expert Practitioners' },
  { number: '15+', label: 'Years Combined Experience' },
  { number: '100%', label: 'Licensed Professionals' },
  { number: '500+', label: 'Happy Clients' }
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Meet Our Team
              </div>
              <h1 className="heading-xl text-white mb-6">
                Expert <span className="text-primary-300 font-bold">Healthcare Professionals</span> Dedicated to Your Recovery
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Our multidisciplinary team of licensed physiotherapists, registered massage therapists, and chiropractors 
                brings years of experience and specialized training to help you achieve optimal health and performance.
              </p>

              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-300 mb-1">{stat.number}</div>
                    <div className="text-sm text-primary-100">{stat.label}</div>
                  </div>
                ))}
              </div>

              <BookingButton
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
                trackingLabel="team_page_hero"
              >
                <Award className="h-5 w-5" />
                Book with Our Team
              </BookingButton>
            </div>
          </div>
        </section>

        {/* Team Mission */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                <span className="text-primary-600 font-bold">Your Focus</span> is Our Focus
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our team knows the importance of health and well-being, so we want to provide you with an environment 
                where you can learn and see the development of your growth journey. Every practitioner brings unique 
                expertise while sharing our commitment to evidence-based, personalized care.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="card group hover:scale-105 transition-all duration-300 flex flex-col h-full">
                  {/* Team Member Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl mb-6 overflow-hidden relative">
                    <Image
                      src={getImagePath(member.image)}
                      alt={`${member.name} - ${member.title} at M.O. Therapy`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* Member Info */}
                  <div className="text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-primary-600 font-medium mb-3">{member.title}</div>
                    <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 mx-auto">
                      <Star className="h-3 w-3 mr-1" />
                      {member.specialty}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {member.description}
                    </p>
                    <BookingButton
                      className="btn-outline w-full mt-auto"
                      trackingLabel={`team_book_${member.name.toLowerCase().replace(' ', '_')}`}
                      bookingUrl={member.bookingLink}
                    >
                      Book with {member.name.split(' ')[0]}
                    </BookingButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-400">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                Join Our Mission
              </div>
              <h2 className="heading-lg text-white mb-6">
                Interested in <span className="text-primary-300">Joining Our Team?</span>
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                For the last four years, our team of practitioners focus on providing an environment where you can see 
                the development of clients health and well-being. We are always looking for talented and passionate 
                individuals who are committed to helping clients to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:motherapycanada@gmail.com"
                  className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <Mail className="h-5 w-5" />
                  Send Your Resume
                </a>
                <BookingButton
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                  trackingLabel="team_page_experience_clinic"
                >
                  <Users className="h-5 w-5" />
                  Experience Our Clinic
                </BookingButton>
              </div>
              <p className="text-primary-200 text-sm mt-4">
                Send resume and documents to: motherapycanada@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
