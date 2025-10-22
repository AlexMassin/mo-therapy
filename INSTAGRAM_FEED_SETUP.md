# Instagram Feed Setup Guide

## Overview
The Instagram feed section displays your latest 5 reels from @motherapy on the homepage. This is a manual implementation that you can easily update.

## How to Update Instagram Reels

### Step 1: Get Instagram Reel URLs
1. Go to https://www.instagram.com/motherapy
2. Click on the reel you want to feature
3. Copy the URL from your browser (e.g., `https://www.instagram.com/reel/ABC123xyz/`)

### Step 2: Update the Component
Open the file: `src/components/InstagramFeed.tsx`

Find the `instagramReels` array and update it with your reel URLs:

```typescript
const instagramReels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/YOUR_REEL_ID/embed",
    postUrl: "https://www.instagram.com/reel/YOUR_REEL_ID/",
    thumbnail: "/instagram/reel-1.jpg", // Optional
    caption: "Your caption here"
  },
  // ... add 4 more reels
];
```

### Step 3: Replace Placeholder Values
- **postUrl**: The direct link to your Instagram reel
- **embedUrl**: Same as postUrl but add `/embed` at the end
- **caption**: A short description of the reel
- **thumbnail**: (Optional) Path to a thumbnail image in `/public/instagram/`

### Example with Real Data
```typescript
const instagramReels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/C1234567890/embed",
    postUrl: "https://www.instagram.com/reel/C1234567890/",
    thumbnail: "/instagram/reel-1.jpg",
    caption: "5 exercises to prevent runner's knee"
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/C0987654321/embed",
    postUrl: "https://www.instagram.com/reel/C0987654321/",
    thumbnail: "/instagram/reel-2.jpg",
    caption: "Patient success story: From injury to marathon"
  },
  // ... and so on
];
```

## Optional: Add Thumbnail Images

For better performance and visual appeal, you can add thumbnail images:

1. Take screenshots of your Instagram reels
2. Save them as `reel-1.jpg`, `reel-2.jpg`, etc.
3. Place them in `/public/instagram/`
4. Update the `thumbnail` field in the component

## Styling and Design

The component features:
- ✨ Gradient Instagram-themed design (pink to purple)
- 🎨 5-column responsive grid
- 🎬 Play button overlay on hover
- 📱 Mobile-friendly layout
- 🔗 Direct links to your Instagram posts

## Removing the Section

If you decide you don't want this section:

1. Open `src/app/page.tsx`
2. Remove the line: `import InstagramFeed from '@/components/InstagramFeed';`
3. Remove `<InstagramFeed />` from the JSX
4. (Optional) Delete `src/components/InstagramFeed.tsx`

## Future Improvements

If you want to automate this in the future, you can:
1. Set up Instagram Basic Display API
2. Use a third-party service like EmbedSocial
3. Implement server-side fetching with cron jobs

For now, manual updates give you full control and no API complexity!

---

**Pro Tip**: Update this section weekly or monthly with your latest content to keep your website fresh and engaging!

