'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImagePath } from '@/lib/assets';

interface TeamPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface TeamGalleryCreativeProps {
  photos: TeamPhoto[];
}

export default function TeamGalleryCreative({ photos }: TeamGalleryCreativeProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageOrientations, setImageOrientations] = useState<('portrait' | 'landscape')[]>([]);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Load images and detect their orientations
  useEffect(() => {
    const loadImageOrientations = async () => {
      const orientations = await Promise.all(
        photos.map((photo) => {
          return new Promise<'portrait' | 'landscape'>((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              const orientation = img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape';
              resolve(orientation);
            };
            img.onerror = () => {
              resolve('landscape');
            };
            img.src = getImagePath(photo.src);
          });
        })
      );
      setImageOrientations(orientations);
    };

    loadImageOrientations();
  }, [photos]);

  // Simple row-based layout: portrait - landscape - portrait pattern
  const getMagazineLayout = () => {
    if (imageOrientations.length === 0) return [];

    const layout: Array<{ span: string; aspectRatio: 'portrait' | 'landscape' }> = [];
    
    // Simple pattern: alternate based on orientation, maintaining row structure
    imageOrientations.forEach((orientation) => {
      if (orientation === 'portrait') {
        // Portrait: narrow tall box
        layout.push({ span: 'col-span-1 row-span-2', aspectRatio: orientation });
      } else {
        // Landscape: wide box in center
        layout.push({ span: 'col-span-2 row-span-2', aspectRatio: orientation });
      }
    });
    
    return layout;
  };

  const magazineLayout = getMagazineLayout();

  // Don't render until orientations are loaded
  if (imageOrientations.length === 0) {
    return <div className="text-center py-12 text-gray-500">Loading gallery...</div>;
  }

  return (
    <>
      {/* Magazine-Style Grid */}
      <div className="relative">
        {/* Desktop: Magazine Layout - Compact & Centered */}
        <div className="hidden md:grid grid-cols-4 gap-3 w-fit mx-auto" style={{ gridAutoRows: '160px', gridAutoFlow: 'dense' }}>
          {photos.map((photo, index) => {
            const layoutStyle = magazineLayout[index];
            if (!layoutStyle) return null;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ${layoutStyle.span}`}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-full bg-gray-100">
                  <img
                    src={getImagePath(photo.src)}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Clean overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {photo.caption && (
                        <p className="text-white font-medium text-sm mb-2">{photo.caption}</p>
                      )}
                      <p className="text-white/80 text-xs">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Compact Grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {photos.map((photo, index) => {
            const isPortrait = imageOrientations[index] === 'portrait';
            const isFeatured = index % 5 === 0;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer ${isFeatured ? 'col-span-2' : 'col-span-1'}`}
                onClick={() => setSelectedImage(index)}
              >
                <div className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  isPortrait ? 'aspect-[3/4]' : isFeatured ? 'aspect-[16/9]' : 'aspect-square'
                }`}>
                  <img
                    src={getImagePath(photo.src)}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Mobile overlay */}
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-xs font-medium">{photo.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImagePath(photos[selectedImage].src)}
              alt={photos[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            {/* Caption */}
            {photos[selectedImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white text-center text-xl font-medium">
                  {photos[selectedImage].caption}
                </p>
              </div>
            )}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <p className="text-white text-sm font-medium">
              {selectedImage + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
