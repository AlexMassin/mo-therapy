'use client';
import { useEffect, useRef, useState } from 'react';

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  { name: 'Josh H.', rating: 5, text: 'MO Therapy really sets the bar. As soon as you enter, they have a super friendly and great receptionist. I have been seeing Jeremy regularly for deep tissue sports massages and he does a fantastic job every time. Overall amazing clinic - would highly recommend!' },
  { name: 'Swathi', rating: 5, text: 'Shruthi was amazing!! She genuinely listened, understood where I was hurting, and focused exactly where I needed it. Those 90 minutes felt like a full reset. I walked out feeling lighter, refreshed, and ready to get back on track. I’ve started the exercises and already feel healing.' },
  { name: 'Adewale A.', rating: 5, text: 'I cannot say enough good things about the care that I have received from Damian. He truly cares and I can see that he genuinely wants to help. I can see the improvements especially on my ankle that has been aching for the past few years due to long distance running. His techniques is amazing and he has been taking care of all of my problems from head to toe. I highly recommend him :)' },
  { name: 'Jamie C.', rating: 5, text: 'I have been coming here for my frozen shoulder. They have been extremely helpful and have worked with me to get my shoulder back to normal. Within this short period of time my shoulder has drastically improved. I believe that with continued sessions I will be able to get back to 95% if not 100%. All the staff are extremely friendly. I would definitely recommend MO Therapy.' },
  { name: 'Jeremy', rating: 5, text: 'The entire MO Therapy team is friendly, knowledgeable, and respectful. The facility itself is also clean, welcoming, and fully equipped with everything needed for a successful recovery. Thank you, MO Therapy team, for helping me get back on my feet (literally lol).' },
];

export default function ReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const velocityRef = useRef(0);
  const posRef = useRef(0);

  // === Auto-scroll loop ===
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animation: number;
    const step = () => {
      if (!paused) {
        posRef.current -= 0.3;
        if (Math.abs(posRef.current) >= el.scrollWidth / 2) {
          posRef.current = 0;
        }
        el.style.transform = `translateX(${posRef.current}px)`;
      }
      // momentum drag
      else if (Math.abs(velocityRef.current) > 0.1) {
        posRef.current += velocityRef.current;
        velocityRef.current *= 0.95; // friction
        el.style.transform = `translateX(${posRef.current}px)`;
      }
      animation = requestAnimationFrame(step);
    };

    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [paused]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // === Touch swipe w/ momentum ===
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let lastX = 0;
    let lastTime = 0;
    let dragging = false;

    const onTouchStart = (e: TouchEvent) => {
      dragging = true;
      setPaused(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      startX = e.touches[0].clientX;
      lastX = startX;
      lastTime = performance.now();
      velocityRef.current = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const x = e.touches[0].clientX;
      const now = performance.now();

      const delta = x - lastX;
      const dt = now - lastTime;

      posRef.current += delta;
      el.style.transform = `translateX(${posRef.current}px)`;

      velocityRef.current = delta / dt * 16; // normalize to ~60fps

      lastX = x;
      lastTime = now;
    };

    const onTouchEnd = () => {
      dragging = false;
      // let momentum play out for 2s before resuming auto-scroll
      timeoutRef.current = setTimeout(() => setPaused(false), 2000);
    };

    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    el.addEventListener('touchend', onTouchEnd);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      className="overflow-hidden relative w-full bg-white py-6 bg-gradient-to-r from-gray-900 to-blue-600"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="flex gap-6 whitespace-nowrap will-change-transform transition-transform"
        style={{ width: 'max-content' }}
      >
        {[...reviews, ...reviews].map((review, i) => (
            <div
            key={i}
            className="flex-shrink-0 w-80 min-h-[220px] p-6 rounded-2xl shadow bg-white flex flex-col"
            >
            <p className="font-semibold text-gray-900">{review.name}</p>
            <div className="text-yellow-500 mt-1">
                {'★'.repeat(review.rating)}
            </div>
            <div className="mt-3 flex-1">
                <p className="text-gray-600 text-sm leading-snug break-words whitespace-normal">
                    {review.text}
                </p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}
