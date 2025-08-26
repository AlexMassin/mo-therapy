import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 80, height = 32 }: LogoProps) {
  return (
    <Image
      src={getImagePath("/logo.png")}
      alt="M.O. Therapy Logo"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
