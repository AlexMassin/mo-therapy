'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import StarDisplay from '@/components/StarDisplay';
import type { GoogleReview } from '@/lib/googlePlaces';

interface ReviewsCarouselProps {
  reviews: GoogleReview[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const slides = useMemo(() => reviews.slice(0, 7), [reviews]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  if (totalSlides === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((review, index) => (
            <article
              key={`${review.author_name}-${review.relative_time_description}-${index}`}
              className="min-w-full p-5 md:p-6"
              aria-label={`Google review by ${review.author_name}`}
            >
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                  {review.profile_photo_url ? (
                    <Image
                      src={review.profile_photo_url}
                      alt=""
                      width={48}
                      height={48}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-base font-semibold text-gray-600">
                      {review.author_name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{review.author_name}</h3>
                    <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <StarDisplay rating={review.rating} size={18} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700 line-clamp-4">
                  {review.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {totalSlides > 1 ? (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 p-1.5 text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 p-1.5 text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Next review"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? 'w-5 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Show review group ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

