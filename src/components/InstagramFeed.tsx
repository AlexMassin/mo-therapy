'use client';

import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';
import GradientText from './GradientText';
import Image from 'next/image';

// Latest Instagram reels from @motherapy
const instagramReels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/p/DPpRUD_kdk0/embed",
    postUrl: "https://www.instagram.com/p/DPpRUD_kdk0/",
    thumbnail: "/instagram/reel-1.png",
    caption: "The dead bug is a great exercise to help target the deeper core, which isn’t isolated as much with your typical core exercises, like crunches (not hating on crunches they have their benefits 😅). 🧱 Try them out and let me know how they feel! #deadbug #deepcoreexercises #posturefix"
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/p/DPEZ_Q9kVOa/embed",
    postUrl: "https://www.instagram.com/p/DPEZ_Q9kVOa/",
    thumbnail: "/instagram/reel-2.png",
    caption: "The power clean is an intimidating move, and rightfully so. It’s a combination of compound movements that requires good timing and strength at the same time."
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/p/DO7S5RKjpEC/embed",
    postUrl: "https://www.instagram.com/p/DO7S5RKjpEC/",
    thumbnail: "/instagram/reel-3.png",
    caption: "1 month post ACL surgery. Rehab after surgery is always hard work 💪💪💪. Vince puts in the work everyday, and his progress has been 🔥"
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/p/DOHmyLODr2S/embed",
    postUrl: "https://www.instagram.com/p/DOHmyLODr2S/",
    thumbnail: "/instagram/reel-4.png",
    caption: "Try out this 5 minute mobility routine! 💪 All you need is your bedroom to do these stretches 🛏️. These stretches are great for improving your upper body mobility to help with your push and pull days!"
  },
  {
    id: 5,
    embedUrl: "https://www.instagram.com/p/DNy3h0dYobH/embed",
    postUrl: "https://www.instagram.com/p/DNy3h0dYobH/",
    thumbnail: "/instagram/reel-5.png",
    caption: "Here are 2 simple tricks that you can incorporate while doing your bicep curls ! If you’ve got questions about any injuries related to lifting, DM me and let’s get to the bottom of it !"
  }, {
    id: 6,
    embedUrl: "https://www.instagram.com/p/DPzj6qEjuup/embed",
    postUrl: "https://www.instagram.com/p/DPzj6qEjuup/?hl=en",
    thumbnail: "/instagram/reel-6.png",
    caption: "Members of Function Studios, this one’s for you! 🙌 Get a complimentary treatment from the M.O. Therapy team on October 25th (9AM–1PM) and learn how we can help you move and feel your best. 💥"
  }
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-6">
            Latest from <GradientText animationSpeed={3} colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7']} className="inline font-bold">@m.o.therapy</GradientText>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Stay up to date with tips, success stories, and behind-the-scenes content
          </p>
          <a
            href="https://www.instagram.com/m.o.therapy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
          >
            <Instagram className="h-5 w-5" />
            Follow @m.o.therapy
          </a>
        </div>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramReels.map((reel) => (
            <div
              key={reel.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Instagram Embed */}
              <a
                href={reel.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[9/16] bg-gradient-to-br from-pink-500/20 to-purple-500/20"
              >
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-pink-500 ml-1" />
                  </div>
                </div>

                {/* Thumbnail Image */}
                {reel.thumbnail ? (
                  <Image
                    src={reel.thumbnail}
                    alt={reel.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Instagram className="h-16 w-16 text-white/20" />
                  </div>
                )}

                {/* Instagram Icon Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                </div>
              </a>

              {/* Caption */}
              <div className="p-6">
                <p className="text-white text-base leading-relaxed line-clamp-4">
                  {reel.caption}
                </p>
                <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4" />
                    Like
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" />
                    Comment
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">
            Want to see more? Follow us for daily tips, success stories, and exclusive content!
          </p>
          <a
            href="https://www.instagram.com/motherapy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 font-semibold transition-colors duration-200"
          >
            View all posts on Instagram
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

