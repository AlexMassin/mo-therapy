'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

export function Analytics() {
  useEffect(() => {
    // Only load Google Analytics in production
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.gtag = function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date().toString());
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(
          `script[src*="googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}"]`
        );
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  return null;
}

// Helper function to track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
