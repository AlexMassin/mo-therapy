'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import Logo from '@/components/Logo';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'All Services', href: '/services' },
      { name: 'Wellness Programs', href: '/wellness' },
      { name: 'Conditions We Treat', href: '/conditions' },
    ]
  },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [mobileMenuOpen]);

  const handleBookNowClick = () => {
    trackEvent('click', 'booking', 'header_book_now');
    // Jane booking system integration will go here
    window.open('https://modeofoperation.janeapp.com/', '_blank');
  };

  const handlePhoneClick = () => {
    trackEvent('click', 'contact', 'header_phone');
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-gray-100' 
          : 'bg-white'
      }`}>
        <nav className="container-custom" aria-label="Global">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <Logo className="hover:opacity-80 transition-opacity duration-200" width={60} height={24} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 px-1 py-2"
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 px-1 py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
              <a
                href="tel:+19052015827"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">(905) 201-5827</span>
              </a>
              <button
                onClick={handleBookNowClick}
                className="btn-primary flex items-center gap-2 shadow-sm"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu - moved outside header */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-[60] bg-black bg-opacity-50 transition-opacity lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Mobile menu panel */}
          <div className="fixed inset-0 z-[70] bg-white overflow-y-auto lg:hidden">
            <div className="px-6 py-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Logo width={60} height={24} />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      item.dropdown ? (
                        <div key={item.name} className="-mx-3">
                          <div className="px-3 py-2 text-base font-bold text-gray-900">
                            {item.name}
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <a
                      href="tel:+19052015827"
                      onClick={handlePhoneClick}
                      className="flex items-center gap-2 text-base font-semibold text-gray-900"
                    >
                      <Phone className="h-5 w-5" />
                      (905) 201-5827
                    </a>
                    <button
                      onClick={handleBookNowClick}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
