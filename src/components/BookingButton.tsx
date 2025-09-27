'use client';

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  trackingLabel?: string;
  bookingUrl?: string;
}

export default function BookingButton({ children, className = '', trackingLabel = 'generic', bookingUrl }: BookingButtonProps) {
  const handleClick = () => {
    // Track the event if analytics is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'booking',
        event_label: trackingLabel,
      });
    }
    
    // Open specific booking URL or default Jane booking system
    const targetUrl = bookingUrl || 'https://modeofoperation.janeapp.com/';
    window.open(targetUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
