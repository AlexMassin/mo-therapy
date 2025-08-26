'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  excerpt: string;
}

export default function ShareButtons({ title, excerpt }: ShareButtonsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(excerpt + '\n\n' + window.location.href);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Share2 className="h-5 w-5" />
        Share This Post
      </h3>
      <div className="space-y-3">
        <button
          onClick={handleShare}
          className="w-full btn-outline text-sm"
        >
          Share Article
        </button>
        <button
          onClick={handleEmailShare}
          className="w-full btn-outline text-sm"
        >
          Email Article
        </button>
      </div>
    </div>
  );
}
