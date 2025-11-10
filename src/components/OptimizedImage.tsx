import React from 'react';
import { getImagePath } from '@/lib/assets';

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> {
  src: string;
  priority?: boolean;
}

export default function OptimizedImage({ src, priority = false, ...rest }: OptimizedImageProps) {
  const resolvedSrc = getImagePath(src);

  return (
    <img
      {...rest}
      src={resolvedSrc}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
