'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText, Heart, Activity, Shield } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

interface BlogImageWithFallbackProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  category?: string;
  sizes?: string;
}

const categoryIcons = {
  'Pain Management': Heart,
  'Sports Medicine': Activity,
  'Rehabilitation': Shield,
  'Injury Prevention': Shield,
  'Sports Performance': Activity,
  'Massage Therapy': Heart,
  'General': FileText,
};

const categoryColors = {
  'Pain Management': 'bg-red-100 text-red-600',
  'Sports Medicine': 'bg-primary-100 text-primary-600',
  'Rehabilitation': 'bg-green-100 text-green-600',
  'Injury Prevention': 'bg-orange-100 text-orange-600',
  'Sports Performance': 'bg-purple-100 text-purple-600',
  'Massage Therapy': 'bg-pink-100 text-pink-600',
  'General': 'bg-gray-100 text-gray-600',
};

function FallbackImage({ category, className }: { category: string; className: string }) {
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || FileText;
  const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors.General;

  return (
    <div className={`relative ${className} ${colorClass} flex items-center justify-center overflow-hidden h-full`}>
      <div className="flex flex-col items-center justify-center p-6 w-full h-full">
        <IconComponent className="h-12 w-12 mb-3 opacity-60 flex-shrink-0" />
        <span className="text-sm font-medium opacity-80 text-center leading-tight">{category}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
    </div>
  );
}

export default function BlogImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  category = 'General',
  sizes
}: BlogImageWithFallbackProps) {
  const [showFallback, setShowFallback] = useState(false);

  // If no src provided, show fallback immediately
  if (!src) {
    return <FallbackImage category={category} className={className} />;
  }

  // If we determined the image failed, show fallback
  if (showFallback) {
    return <FallbackImage category={category} className={className} />;
  }

  // Try to load the actual image (normal Next.js Image behavior)
  return (
    <Image
      src={getImagePath(src)}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => {
        console.log(`Failed to load image: ${src}, showing fallback`);
        setShowFallback(true);
      }}
    />
  );
}
