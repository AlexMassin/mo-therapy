'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { getVideoPath } from '@/lib/assets';

interface VideoPlayerProps {
  videoUrl: string;
  name: string;
  sport: string;
}

export default function VideoPlayer({ videoUrl, name, sport }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        const aspectRatio = video.videoWidth / video.videoHeight;
        setIsPortrait(aspectRatio < 1); // Portrait if height > width
      };
      
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div 
      className={`relative bg-black rounded-xl overflow-hidden group cursor-pointer ${
        isPortrait ? 'aspect-[9/16]' : 'aspect-video'
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={getVideoPath(videoUrl)}
        className={`w-full h-full ${isPortrait ? 'object-contain' : 'object-cover'}`}
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay with play button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="h-8 w-8 text-primary-600 ml-1" />
          </div>
        </div>
      )}

      {/* Video Controls */}
      {showControls && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="text-white hover:text-primary-300 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="text-white hover:text-primary-300 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="text-white hover:text-primary-300 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

