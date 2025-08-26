'use client';

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  trackingLabel?: string;
}

export default function BookingButton({ children, className = '', trackingLabel = 'generic' }: BookingButtonProps) {
  const handleClick = () => {
    // Track the event if analytics is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'booking',
        event_label: trackingLabel,
      });
    }
    
    // Open Jane booking system
    window.open('https://modeofoperation.janeapp.com/', '_blank');
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
