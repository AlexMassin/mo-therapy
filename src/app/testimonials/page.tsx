import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Quote, Star, Award, Users, Heart } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image';
import { getImagePath } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Patient Testimonials - M.O. Therapy Markham | Success Stories',
  description: 'Hear from our satisfied patients about their recovery journey at M.O. Therapy. Watch video testimonials and read success stories from athletes and active individuals in Markham.',
  keywords: [
    'patient testimonials Markham',
    'physiotherapy reviews',
    'massage therapy testimonials',
    'chiropractic care reviews',
    'M.O. Therapy success stories',
    'patient experiences',
    'athletic care reviews',
    'sports medicine testimonials'
  ],
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Patient Testimonials - M.O. Therapy Markham',
    description: 'Hear from our satisfied patients about their recovery journey at M.O. Therapy.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/testimonials',
    siteName: 'M.O. Therapy',
    images: ['/og-team.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials - M.O. Therapy Markham',
    description: 'Real success stories from our patients.',
    images: ['/og-team.jpg'],
  },
};

// Featured testimonial compilation
const featuredTestimonial = {
  name: "Patient Stories",
  sport: "Community Testimonials",
  videoUrl: "/testimonials/Testimonials.mp4",
  quote: "Watch a collection of patient success stories from our community",
  description: "Hear from multiple patients about their experiences, recoveries, and success stories with M.O. Therapy. This compilation showcases the diverse range of conditions we treat and the positive outcomes our patients achieve.",
  summary: "Real Stories, Real Results"
};

const videoTestimonials = [
  {
    id: 1,
    name: "DJ",
    sport: "Patient Success Story",
    videoUrl: "/testimonials/Dj VO IG.mp4",
    quote: "Hear from DJ about their experience with M.O. Therapy",
    summary: "From Pain to Performance"
  },
  {
    id: 2,
    name: "Jimmy",
    sport: "Running Athlete",
    videoUrl: "/testimonials/Jimmy Running Ad(1).mp4",
    quote: "Running performance improvement with M.O. Therapy",
    summary: "Back to Running Strong"
  },
  {
    id: 3,
    name: "Josh",
    sport: "Athlete Recovery",
    videoUrl: "/testimonials/Josh Ad Final.mp4",
    quote: "Josh's journey to recovery and peak performance",
    summary: "Complete Recovery Journey"
  },
  {
    id: 4,
    name: "Josh",
    sport: "Personal Perspective",
    videoUrl: "/testimonials/Josh POV Ad.mp4",
    quote: "A personal look at Josh's treatment experience",
    summary: "Inside the Treatment Process"
  },
  {
    id: 5,
    name: "Nadeem & Ron",
    sport: "Treatment Success",
    videoUrl: "/testimonials/Nadeem Ron IG.mp4",
    quote: "Collaborative care and successful outcomes",
    summary: "Expert Collaborative Care"
  },
  {
    id: 6,
    name: "Nadeem",
    sport: "SI Joint Pain Relief",
    videoUrl: "/testimonials/Nadeem SI Joint Pain IG.mp4",
    quote: "Overcoming SI joint pain with expert treatment",
    summary: "Overcoming SI Joint Pain"
  },
  {
    id: 7,
    name: "Rivka",
    sport: "Patient Testimonial",
    videoUrl: "/testimonials/Rivka.mp4",
    quote: "Rivka shares her recovery story",
    summary: "A Patient's Recovery Story"
  },
  {
    id: 8,
    name: "Winnie",
    sport: "Patient Journey",
    videoUrl: "/testimonials/Winnie POV IG.mp4",
    quote: "Winnie's perspective on treatment and recovery",
    summary: "Life-Changing Treatment"
  }
];

const textTestimonials = [
  {
    name: "Alexandra Williams",
    sport: "Competitive Swimmer",
    quote: "I've been dealing with shoulder pain for years, and the team at M.O. Therapy finally helped me find lasting relief. Their expertise in sports medicine is unmatched.",
    rating: 5,
    image: "/testimonials/placeholder-avatar.jpg"
  },
  {
    name: "Robert Johnson",
    sport: "Weekend Warrior",
    quote: "As someone who's active but not a professional athlete, I appreciated how they treated me with the same level of care and attention. My tennis elbow is completely healed!",
    rating: 5,
    image: "/testimonials/placeholder-avatar.jpg"
  },
  {
    name: "Priya Patel",
    sport: "Triathlete",
    quote: "The multidisciplinary approach really sets M.O. apart. Having physiotherapy, massage, and chiropractic all in one place made my recovery so much more efficient.",
    rating: 5,
    image: "/testimonials/placeholder-avatar.jpg"
  },
  {
    name: "Marcus Brown",
    sport: "Powerlifter",
    quote: "These guys know their stuff! They didn't just treat my injury, they helped me optimize my training to prevent future issues. True performance care.",
    rating: 5,
    image: "/testimonials/placeholder-avatar.jpg"
  }
];

const partners = [
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

const stats = [
  { number: '500+', label: 'Happy Patients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '8+', label: 'Video Testimonials' },
  { number: '10+', label: 'Years of Trust' }
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <Quote className="h-4 w-4" />
                Patient Success Stories
              </div>
              <h1 className="heading-xl text-white mb-6">
                Real <span className="text-primary-400 font-bold">Success Stories</span> from Our Patients
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Don&apos;t just take our word for it. Hear directly from the athletes and active individuals we&apos;ve helped recover, 
                perform better, and achieve their health goals.
              </p>
              <BookingButton
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
              >
                Start Your Journey
              </BookingButton>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-2xl mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                    <Award className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial Compilation */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg text-white mb-6">
                <span className="text-primary-400 font-bold">Patient Stories</span>
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed mb-4">
                {featuredTestimonial.description}
              </p>
            </div>

            <div className="mx-auto" style={{ maxWidth: '26rem' }}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6">
                <VideoPlayer
                  videoUrl={featuredTestimonial.videoUrl}
                  name={featuredTestimonial.name}
                  sport={featuredTestimonial.sport}
                />
                <div className="mt-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-3">
                    {featuredTestimonial.summary}
                  </h3>
                  <p className="text-primary-100 text-base italic">
                    &ldquo;{featuredTestimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Video Testimonials Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Individual <span className="text-primary-600 font-bold">Patient Journeys</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Watch real recovery stories from our patients and see the transformative impact of personalized care
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
              {videoTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="group">
                  {/* Video Card */}
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
                    {/* Video Player */}
                    <div className="relative isolate">
                      <VideoPlayer
                        videoUrl={testimonial.videoUrl}
                        name={testimonial.name}
                        sport={testimonial.sport}
                      />
                      {/* Title Badge */}
                      <div className="absolute top-6 left-6 right-6 z-20 pointer-events-none">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-800 backdrop-blur-lg rounded-2xl px-5 py-4 border border-white/30 shadow-xl will-change-auto">
                          <h3 className="text-white font-bold text-xl md:text-2xl mb-1 leading-tight drop-shadow-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-primary-100 text-sm md:text-base font-semibold drop-shadow-md">
                            {testimonial.sport}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="p-6 md:p-8">
                      {/* Summary Header */}
                      <div className="mb-4 text-center">
                        <h4 className="text-primary-600 font-bold text-lg md:text-xl mb-1">
                          {testimonial.summary}
                        </h4>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                        <Quote className="h-5 w-5 text-primary-300 inline-block mb-2" />
                        <p className="italic">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add More CTA */}
            <div className="mt-20 text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl px-8 py-10 shadow-lg">
                <Users className="h-12 w-12 text-primary-600" />
                <p className="text-xl font-semibold text-gray-900">
                  Want to share your story?
                </p>
                <p className="text-gray-600 max-w-md">
                  We&apos;re always looking to feature more patient success stories. Contact us to be part of our testimonials.
                </p>
                <a
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Text Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                More <span className="text-primary-600 font-bold">Patient Reviews</span>
              </h2>
              <p className="text-xl text-gray-600">
                Read what our patients have to say about their experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {textTestimonials.map((testimonial, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary-200 mb-4" />
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.sport}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners & Supporters Section */}
        <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-primary-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Our <span className="text-primary-600 font-bold">Partners & Supporters</span>
              </h2>
              <p className="text-xl text-gray-600">
                Proud to collaborate with leading organizations in our community
              </p>
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {partners.map((partner, index) => {
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Logo */}
                      <div className="w-full h-32 relative mb-6 flex items-center justify-center">
                        <Image
                          src={getImagePath(partner.logo)}
                          alt={`${partner.name} logo`}
                          width={200}
                          height={128}
                          className="object-contain max-h-24"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {partner.name}
                      </h3>

                      {/* Category */}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partnership CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl px-10 py-12 shadow-xl text-white max-w-2xl">
                <Heart className="h-12 w-12 text-primary-200" />
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

        {/* Final CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-gray-900 mb-6">
                Ready to Write <span className="text-primary-600 font-bold">Your Success Story?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the hundreds of athletes and active individuals who have achieved their health and performance goals with M.O. Therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                  Book an Appointment
                </BookingButton>
                <a
                  href="/contact"
                  className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

