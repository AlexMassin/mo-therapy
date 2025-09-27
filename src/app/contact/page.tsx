import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact M.O. Therapy - Book Your Appointment in Markham',
  description: 'Contact M.O. Therapy for physiotherapy, massage therapy, and chiropractic care in Markham. Call (905) 201-5827 or book online. Located at 20 Apple Creek Blvd. Same-day appointments available.',
  keywords: [
    'contact M.O. Therapy',
    'book appointment Markham',
    'physiotherapy clinic contact',
    'M.O. Therapy phone number',
    'M.O. Therapy address',
    'Apple Creek Blvd Markham',
    'same day appointments Markham',
    'direct billing available',
    'Markham sports medicine contact',
    'physiotherapy booking Markham'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact M.O. Therapy - Book Your Appointment in Markham',
    description: 'Ready to start your recovery? Contact M.O. Therapy for expert physiotherapy, massage therapy, and chiropractic care. Same-day appointments available.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://motherapy.ca/contact',
    siteName: 'M.O. Therapy',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact M.O. Therapy - Book Your Appointment in Markham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact M.O. Therapy - Book Your Appointment',
    description: 'Ready to start your recovery? Same-day appointments available in Markham.',
    images: ['/og-contact.jpg'],
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '(905) 201-5827',
    href: 'tel:+19052015827',
    description: 'Call us for immediate assistance or to book an appointment'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'motherapycanada@gmail.com',
    href: 'mailto:motherapycanada@gmail.com',
    description: 'Send us a message and we\'ll get back to you within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '20 Apple Creek Blvd. Unit A1, Markham, ON L3R5Z1',
    href: 'https://maps.google.com/?q=20+Apple+Creek+Blvd+Unit+A1+Markham+ON',
    description: 'Visit our modern clinic in the heart of Markham'
  }
];

const hours = [
  { day: 'Monday', time: '8:00 AM - 8:00 PM' },
  { day: 'Tuesday', time: '10:00 AM - 8:00 PM' },
  { day: 'Wednesday', time: '8:00 AM - 8:00 PM' },
  { day: 'Thursday', time: '10:00 AM - 8:00 PM' },
  { day: 'Friday', time: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: '9:00 AM - 4:00 PM' },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-400">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl text-white mb-6">
                Contact <span className="gradient-text">M.O. Therapy</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Ready to start your journey to better health and performance? We&apos;re here to help you every step of the way.
              </p>
              <BookingButton
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
                trackingLabel="contact_page_hero"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment Online
              </BookingButton>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="card text-center group hover:scale-105 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="heading-sm text-gray-900 mb-3">{info.title}</h3>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 hover:text-primary-700 font-medium block mb-3 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                    <p className="text-body text-sm">{info.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Hours and Location */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Hours */}
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <h2 className="heading-md text-gray-900">Hours of Operation</h2>
                </div>
                <div className="space-y-3">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-800 font-medium">
                    📅 We are booking by appointment only
                  </p>
                </div>
              </div>

              {/* Map placeholder and directions */}
              <div className="card">
                <h2 className="heading-md text-gray-900 mb-6">Find Us</h2>
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8234567890123!2d-79.3456789!3d43.8567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s20%20Apple%20Creek%20Blvd%2C%20Markham%2C%20ON%20L3R%205Z1!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="M.O. Therapy Location - 20 Apple Creek Blvd, Markham"
                  ></iframe>
                </div>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <p><strong>Parking:</strong> Free parking available on-site</p>
                  <p><strong>Transit:</strong> Close to YRT bus routes</p>
                  <p><strong>Accessibility:</strong> Wheelchair accessible entrance</p>
                </div>
                <a
                  href="https://maps.google.com/?q=20+Apple+Creek+Blvd+Unit+A1+Markham+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-gray-900 mb-6">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Have a question about our services? We&apos;d love to hear from you.
                </p>
              </div>

              <div className="card max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="massage-therapy">Massage Therapy</option>
                      <option value="chiropractic">Chiropractic Care</option>
                      <option value="osteopathy">Osteopathy</option>
                      <option value="assessment">Initial Assessment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Tell us about your condition, goals, or any questions you have..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by M.O. Therapy regarding my inquiry. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="py-8 bg-red-50 border-t border-red-200">
          <div className="container-custom">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Medical Emergency?</h3>
              <p className="text-red-700">
                If you are experiencing a medical emergency, please call 911 or visit your nearest emergency room immediately.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
