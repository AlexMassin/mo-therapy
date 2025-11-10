import Link from 'next/link';

import BookingButton from '@/components/BookingButton';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import StarDisplay from '@/components/StarDisplay';
import { getGooglePlaceReviews } from '@/lib/googlePlaces';

const MAX_REVIEWS_FROM_API = 10;
const MAX_REVIEWS_DISPLAY = 7;

function srRatingText(rating: number, total: number) {
  return `Rated ${rating.toFixed(1)} out of 5 based on ${total} Google reviews`;
}

export default async function GoogleReviews() {
  const data = await getGooglePlaceReviews();

  const rating = data?.rating ?? 0;
  const ratingCount = data?.user_ratings_total ?? 0;
  const reviews = (data?.reviews ?? [])
    .slice(0, MAX_REVIEWS_FROM_API)
    .filter((review) => review.text && review.text.trim().length > 0)
    .slice(0, MAX_REVIEWS_DISPLAY);

  const placeUrl =
    data?.url ??
    (process.env.GOOGLE_PLACE_ID
      ? `https://www.google.com/maps/search/?api=1&query_place_id=${process.env.GOOGLE_PLACE_ID}`
      : null);

  const hasLiveReviews = reviews.length > 0 && rating > 0;
  const displayRating = hasLiveReviews ? rating : 0;
  const ratingLabel = hasLiveReviews ? displayRating.toFixed(1) : '—';

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 lg:pr-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
              <span className="h-2.5 w-2.5 rounded-full bg-primary-400" />
              Real Google Reviews
            </div>
            <h2 className="heading-lg mt-6 text-white">
              Trusted by athletes and active professionals across Markham
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Every review comes directly from Google to give you full confidence in the care
              you&apos;ll receive at M.O. Therapy.
            </p>

            <div className="mt-8 flex flex-col gap-6 rounded-3xl bg-white/5 p-6 shadow-lg backdrop-blur">
              <div className="flex flex-wrap items-center gap-4">
                <StarDisplay rating={displayRating} size={22} />
                <div>
                  <div className="text-4xl font-bold text-white">
                    {ratingLabel}
                  </div>
                  <p className="text-sm text-white/60">
                    Google rating · {ratingCount > 0 ? `${ratingCount} reviews` : 'Rating coming soon'}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {placeUrl ? (
                  <Link
                    href={placeUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    Read more reviews on Google
                  </Link>
                ) : null}
                <BookingButton className="btn-primary">
                  Book an Assessment
                </BookingButton>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:col-span-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
            {hasLiveReviews ? (
              <ReviewsCarousel reviews={reviews} />
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Google reviews are on the way
                </h3>
                <p className="mt-3 text-base text-white/70">
                  We&apos;re setting up live Google reviews for this page. In the meantime,
                  you can read every review directly on Google.
                </p>
                {placeUrl ? (
                  <Link
                    href={placeUrl}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    View Google Listing
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {hasLiveReviews
          ? srRatingText(displayRating, ratingCount)
          : 'Google reviews not yet available'}
      </span>
    </section>
  );
}

