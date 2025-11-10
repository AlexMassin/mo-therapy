type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

export type GooglePlacesReviewData = {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  url?: string;
};

const GOOGLE_PLACES_DETAILS_ENDPOINT =
  'https://maps.googleapis.com/maps/api/place/details/json';

const DEFAULT_REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

type GooglePlaceDetailsResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: GoogleReview[];
  };
  error_message?: string;
};

export async function getGooglePlaceReviews(): Promise<GooglePlacesReviewData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[googlePlaces] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables.'
      );
    }
    return null;
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'rating,user_ratings_total,url,reviews',
    reviews_sort: 'newest',
    key: apiKey,
  });

  try {
    const response = await fetch(`${GOOGLE_PLACES_DETAILS_ENDPOINT}?${params.toString()}`, {
      next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[googlePlaces] Google Places API request failed: ${response.status} ${response.statusText}`
        );
      }
      return null;
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (data.status !== 'OK' || !data.result) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[googlePlaces] Unexpected Google Places API response: ${data.status}${
            data.error_message ? ` - ${data.error_message}` : ''
          }`
        );
      }
      return null;
    }

    const { rating = 0, user_ratings_total = 0, reviews = [], url } = data.result;

    return {
      rating,
      user_ratings_total,
      reviews,
      url,
    };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[googlePlaces] Failed to fetch Google reviews', error);
    }
    return null;
  }
}

export type { GoogleReview };

