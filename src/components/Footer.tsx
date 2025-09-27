'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
];

const services = [
  { name: 'Physiotherapy', href: '/services/physiotherapy' },
  { name: 'Massage Therapy', href: '/services/massage-therapy' },
  { name: 'Chiropractic Care', href: '/services/chiropractic' },
  { name: 'Osteopathy', href: '/services/osteopathy' },
];

const conditions = [
  { name: 'Sports Injuries', href: '/conditions/sports-injuries' },
  { name: 'Back Pain', href: '/conditions/back-pain' },
  { name: 'Neck Pain', href: '/conditions/neck-pain' },
  { name: 'Joint Pain', href: '/conditions/joint-pain' },
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

export default function Footer() {
  const handleContactClick = (type: string) => {
    trackEvent('click', 'contact', `footer_${type}`);
  };

  const handleBookingClick = () => {
    trackEvent('click', 'booking', 'footer_book_now');
    window.open('https://modeofoperation.janeapp.com/', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 block">
              M.O. Therapy
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert physiotherapy, massage therapy, and chiropractic care for athletes and active individuals in Markham, Ontario.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+19052015827"
                onClick={() => handleContactClick('phone')}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-5 w-5 text-primary-400" />
                (905) 201-5827
              </a>
              <a
                href="mailto:motherapycanada@gmail.com"
                onClick={() => handleContactClick('email')}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-primary-400" />
                motherapycanada@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div>20 Apple Creek Blvd. Unit A1</div>
                  <div>Markham, ON L3R5Z1</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Common Conditions</h3>
            <ul className="space-y-2">
              {conditions.map((condition) => (
                <li key={condition.name}>
                  <Link
                    href={condition.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {condition.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Booking */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-400" />
              Hours of Operation
            </h3>
            <div className="space-y-2 mb-8">
              {hours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between text-sm">
                  <span className="text-gray-300">{schedule.day}:</span>
                  <span className="text-white font-medium">{schedule.time}</span>
                </div>
              ))}
            </div>
            
            <button
              onClick={handleBookingClick}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </button>
            
            <p className="text-xs text-gray-400 mt-3 text-center">
              We are booking by appointment only
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 M.O. Therapy. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <div className="text-gray-400">
                Made with ❤️ for athletes
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
