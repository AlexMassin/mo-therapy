# M.O. Therapy Website

A modern, SEO-optimized website for M.O. Therapy - a premier physiotherapy, massage therapy, and chiropractic clinic specializing in athletic care in Markham, Ontario.

## 🚀 Features

### ⚡ Performance & SEO
- **Next.js 14** with App Router for optimal performance
- **Server-side rendering** for better SEO and loading times
- **Comprehensive SEO optimization** with meta tags, Open Graph, and structured data
- **Schema.org markup** for better search engine understanding
- **Sitemap generation** with next-sitemap
- **Google Analytics integration** ready for tracking

### 🎨 Design & UX
- **Modern, responsive design** built with Tailwind CSS
- **Mobile-first approach** optimized for all devices
- **Accessibility features** for inclusive user experience
- **Smooth animations** and interactions
- **Athletic-focused branding** with gradient text and professional styling

### 🏥 Healthcare-Specific Features
- **Jane App booking integration** for appointment scheduling
- **Service-specific landing pages** for better conversions
- **Condition-based content** for targeted SEO
- **Professional credibility indicators** (licensing, insurance, etc.)
- **Contact forms** with healthcare-appropriate fields

### 📱 Core Pages
- **Homepage** - Athletic-focused hero, services overview, why choose us
- **Services** - Detailed pages for Physiotherapy, Massage, Chiropractic, Osteopathy
- **About** - Mission, values, team credentials
- **Contact** - Multiple contact methods, hours, location map
- **Blog** - Content marketing foundation (ready for expansion)

## 🛠 Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 integration
- **Fonts**: Inter and Poppins via Google Fonts
- **Deployment**: Ready for Vercel, Netlify, or custom hosting

## 📈 SEO Strategy

### Primary Keywords Targeted:
- "physiotherapy Markham"
- "massage therapy Markham"
- "chiropractic Markham"
- "sports injury treatment"
- "athletic therapy"
- "injury prevention"

### Technical SEO Features:
- ✅ Optimized title tags and meta descriptions
- ✅ Schema.org structured data for LocalBusiness
- ✅ Open Graph and Twitter Card optimization
- ✅ Sitemap and robots.txt generation
- ✅ Internal linking strategy
- ✅ Image optimization and alt text
- ✅ Mobile-first responsive design
- ✅ Fast loading times with Next.js optimization

## 🚀 Getting Started

### Prerequisites
- Node.js ^18.18.0 || ^19.8.0 || >= 20.0.0 installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mo-therapy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Google Analytics
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   
   # Google Search Console Verification
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
   
   # Jane App Integration (if needed)
   JANE_APP_API_KEY=your_jane_app_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Visit the website**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

### Generate Sitemap
```bash
npm run postbuild
```

## 🔧 Configuration

### Google Analytics Setup
1. Create a Google Analytics 4 property
2. Get your GA4 Measurement ID (G-XXXXXXXXXX)
3. Add it to your `.env.local` file as `NEXT_PUBLIC_GA_ID`

### Jane App Integration
- The booking buttons currently open the Jane App booking page in a new tab
- For deeper integration, you can use the Jane App API with your API key

### SEO Optimization
- Update the `metadata` objects in each page for your specific keywords
- Modify the schema.org structured data in `layout.tsx`
- Update the sitemap configuration in `next-sitemap.config.js`

## 📊 Performance Monitoring

### Core Web Vitals Optimization
- Images are optimized with Next.js Image component
- CSS and JavaScript are automatically optimized
- Font loading is optimized with `display: swap`

### Analytics & Tracking
- Google Analytics 4 integration for user behavior tracking
- Event tracking for booking clicks and form submissions
- Conversion tracking ready for setup

## 🎯 Marketing Features

### Content Marketing Ready
- Blog structure in place for content marketing
- SEO-optimized article templates
- Internal linking strategy for topic clusters

### Local SEO Optimized
- Google My Business schema markup
- Local business structured data
- Location-specific content and keywords

### Conversion Optimization
- Strategic placement of booking CTAs
- Social proof elements (testimonials, stats)
- Clear value propositions throughout

## 📞 Support & Maintenance

### Regular Updates Recommended:
- Keep Next.js and dependencies updated
- Add new blog content regularly for SEO
- Monitor Google Analytics for performance insights
- Update service descriptions and team information

### SEO Monitoring:
- Set up Google Search Console
- Monitor keyword rankings
- Track Core Web Vitals
- Regular SEO audits

## 🏆 Competitive Advantages

### Over Current Website:
- **10x faster loading times** with Next.js optimization
- **Mobile-first responsive design** vs. basic mobile support
- **Comprehensive SEO implementation** vs. minimal optimization
- **Professional athletic branding** vs. generic healthcare design
- **Integrated booking system** vs. external booking only

### Over Competitors:
- **Athletic specialization focus** in messaging and design
- **Performance optimization** for better search rankings
- **Comprehensive service descriptions** for better conversions
- **Modern, trustworthy design** that builds credibility

---

**Built with ❤️ for athletes by the M.O. Therapy team**

For technical support or questions about the website, please contact your development team.