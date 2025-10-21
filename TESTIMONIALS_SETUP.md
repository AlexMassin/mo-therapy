# Testimonials Page Setup Guide

## Overview
The testimonials page has been created at `/testimonials` and includes:
- Video testimonials section with 6 placeholder testimonials
- Text testimonials section with 4 written reviews
- Partners & Supporters section with 8 placeholder partners
- Stats section showing patient satisfaction metrics
- Call-to-action sections

## Required Assets

### Video Testimonials
To add actual video testimonials, you'll need to:

1. **Upload videos to YouTube or Vimeo**
   - Record patient testimonials (with signed consent forms)
   - Upload to your preferred video platform
   - Get embed URLs

2. **Update the `videoTestimonials` array** in `src/app/testimonials/page.tsx`:
   ```typescript
   {
     id: 1,
     name: "Patient Name",
     sport: "Activity/Sport",
     videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Update this
     thumbnail: "/testimonials/thumbnail.jpg", // Optional custom thumbnail
     quote: "Short quote from the video",
     rating: 5
   }
   ```

### Optional: Custom Video Thumbnails
If you want custom thumbnails instead of the gradient placeholders:
1. Create a `/public/testimonials/` directory
2. Add thumbnail images (e.g., `sarah-thumbnail.jpg`)
3. The thumbnails will be used when you implement actual video playback

### Partner/Brand Logos
To add actual partner logos:

1. **Add logo files** to `/public/partners/` directory:
   - Recommended format: PNG with transparent background
   - Recommended size: 300x300px or similar square dimensions
   - File naming: `partner-name-logo.png`

2. **Update the `partners` array** in `src/app/testimonials/page.tsx`:
   ```typescript
   {
     name: "Partner Name",
     logo: "/partners/partner-name-logo.png", // Update this
     category: "Category Type"
   }
   ```

### Text Testimonials
To add or update text testimonials, modify the `textTestimonials` array:
```typescript
{
  name: "Patient Name",
  sport: "Activity/Sport",
  quote: "Full testimonial text...",
  rating: 5,
  image: "/testimonials/patient-photo.jpg" // Optional
}
```

## Implementation Steps

### 1. Create Asset Directories
```bash
mkdir -p public/testimonials
mkdir -p public/partners
```

### 2. Add Placeholder Images (Optional)
If you want to use actual images before getting partner logos:
```bash
# Add placeholder files
touch public/testimonials/placeholder-avatar.jpg
touch public/partners/placeholder-logo.png
```

### 3. Implement Video Playback (Optional Enhancement)
Currently, videos show a play button but don't play inline. To implement:

- Option A: Link to external video pages
- Option B: Use a modal/lightbox to play videos inline
- Option C: Embed videos directly (may impact page load time)

### 4. Collect Real Content
- **Patient Testimonials**: Get written consent, record videos
- **Partner Logos**: Collect high-quality logo files
- **Update Stats**: Ensure stats reflect actual numbers

## Video Testimonial Best Practices

1. **Content Guidelines**:
   - Keep videos 1-3 minutes long
   - Focus on specific results/experiences
   - Include before/after context
   - Mention specific practitioners if possible

2. **Legal Requirements**:
   - Get signed video release forms
   - Ensure HIPAA compliance
   - Don't make medical claims
   - Use first names only if needed for privacy

3. **Production Tips**:
   - Good lighting and audio quality
   - Stable camera/phone setup
   - Quiet background
   - Natural, conversational tone

## Navigation
The testimonials page has been added to the main navigation menu between "Our Team" and "Blog".

## SEO Optimization
The page includes:
- Optimized meta title and description
- Relevant keywords for local search
- OpenGraph tags for social sharing
- Structured content with proper headings

## Customization Options

### Change Colors
The gradient colors used match your global brand colors:
```typescript
colors={['#0ea5e9', '#40c6e5', '#5ce3fa', '#0284c7', '#000000']}
```

### Modify Stats
Update the `stats` array to reflect your actual metrics:
```typescript
const stats = [
  { number: '500+', label: 'Happy Patients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '95%', label: 'Would Recommend' },
  { number: '10+', label: 'Years of Trust' }
];
```

### Add More Sections
You can add additional sections like:
- Google Reviews integration
- Before/After photo galleries (with consent)
- Treatment-specific testimonials
- Video compilation/highlight reel

## Next Steps

1. ✅ Testimonials page created
2. ✅ Added to navigation
3. ⏳ Collect patient testimonials (video & written)
4. ⏳ Gather partner logos
5. ⏳ Upload videos to YouTube/Vimeo
6. ⏳ Update page with real content
7. ⏳ Test video playback functionality
8. ⏳ Review and deploy

## Questions?
Contact the development team if you need help with:
- Video embedding setup
- Custom video player implementation
- Additional testimonial features
- Integration with review platforms (Google, Yelp, etc.)

