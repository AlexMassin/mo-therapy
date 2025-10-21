import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Quote, Star, Play, Award, Users, Heart } from 'lucide-react';
import GradientText from '@/components/GradientText';

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
  openGraph: {
    title: 'Patient Testimonials - M.O. Therapy Markham',
    description: 'Hear from our satisfied patients about their recovery journey at M.O. Therapy.',
    images: ['/og-team.jpg'],
  },
};

const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    sport: "Marathon Runner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/sarah-thumbnail.jpg",
    quote: "M.O. Therapy helped me recover from a stress fracture and get back to competitive running faster than I expected.",
    rating: 5
  },
  {
    id: 2,
    name: "James Chen",
    sport: "Basketball Player",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/james-thumbnail.jpg",
    quote: "The integrated approach combining physiotherapy and massage therapy was exactly what I needed.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    sport: "CrossFit Athlete",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/emily-thumbnail.jpg",
    quote: "Professional, knowledgeable, and genuinely caring. They got me back to lifting at my best.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Park",
    sport: "Soccer Player",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/michael-thumbnail.jpg",
    quote: "After my ACL injury, the team at M.O. helped me return to the field stronger than ever.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    sport: "Yoga Instructor",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/lisa-thumbnail.jpg",
    quote: "Their holistic approach to treating my chronic back pain changed my life and my practice.",
    rating: 5
  },
  {
    id: 6,
    name: "David Kumar",
    sport: "Hockey Player",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    thumbnail: "/testimonials/david-thumbnail.jpg",
    quote: "The personalized treatment plan was key to my recovery. Highly recommend!",
    rating: 5
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
    name: "Markham Sports Club",
    logo: "/partners/placeholder-logo.png",
    category: "Sports Organization"
  },
  {
    name: "Elite Performance Gym",
    logo: "/partners/placeholder-logo.png",
    category: "Fitness Center"
  },
  {
    name: "Markham Hockey League",
    logo: "/partners/placeholder-logo.png",
    category: "Sports League"
  },
  {
    name: "CrossFit Markham",
    logo: "/partners/placeholder-logo.png",
    category: "Training Facility"
  },
  {
    name: "York Region Athletics",
    logo: "/partners/placeholder-logo.png",
    category: "Athletic Association"
  },
  {
    name: "Markham Soccer Association",
    logo: "/partners/placeholder-logo.png",
    category: "Sports Organization"
  },
  {
    name: "Local Insurance Partners",
    logo: "/partners/placeholder-logo.png",
    category: "Insurance Provider"
  },
  {
    name: "Community Health Network",
    logo: "/partners/placeholder-logo.png",
    category: "Healthcare Network"
  }
];

const stats = [
  { number: '500+', label: 'Happy Patients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '95%', label: 'Would Recommend' },
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
                Real <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Success Stories</GradientText> from Our Patients
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

        {/* Video Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Watch <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Patient Stories</GradientText>
              </h2>
              <p className="text-xl text-gray-600">
                Hear directly from our patients about their recovery journey and experience with M.O. Therapy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="card group hover:scale-105 transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-primary-600 ml-1" />
                      </div>
                    </div>
                    {/* Placeholder for video thumbnail - replace with actual thumbnail */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600">{testimonial.sport}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Text Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                More <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Patient Reviews</GradientText>
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">
                Trusted <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Partners & Supporters</GradientText>
              </h2>
              <p className="text-xl text-gray-600">
                Proud to work with leading sports organizations, fitness centers, and healthcare partners in the community
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Placeholder logo - replace with actual logos */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors duration-300">
                    <Heart className="h-12 w-12 text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-gray-500">{partner.category}</p>
                </div>
              ))}
            </div>

            {/* Partnership CTA */}
            <div className="bg-gradient-to-r from-primary-900 to-primary-400 rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Partnering with Us?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                We&apos;re always looking to collaborate with organizations that share our commitment to athletic excellence and community health.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-gray-900 mb-6">
                Ready to Write <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']} className="inline font-bold">Your Success Story?</GradientText>
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

