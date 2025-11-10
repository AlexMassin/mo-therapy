import { Star } from 'lucide-react';

interface StarDisplayProps {
  rating: number;
  className?: string;
  starClassName?: string;
  size?: number;
}

export default function StarDisplay({
  rating,
  className,
  starClassName = 'text-yellow-400',
  size = 24,
}: StarDisplayProps) {
  return (
    <div className={['flex items-center gap-1', className].filter(Boolean).join(' ')} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        const fillPercentage = Math.max(0, Math.min(1, rating - (starValue - 1)));

        return (
          <span key={starValue} className="relative inline-flex" style={{ width: size, height: size }}>
            <Star
              className="absolute inset-0 h-full w-full text-gray-200"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <Star
              className={['absolute inset-0 h-full w-full', starClassName].filter(Boolean).join(' ')}
              strokeWidth={1.5}
              fill="currentColor"
              style={{ clipPath: `inset(0 ${100 - fillPercentage * 100}% 0 0)` }}
              aria-hidden="true"
            />
            <span className="sr-only">Star {starValue}</span>
          </span>
        );
      })}
    </div>
  );
}

