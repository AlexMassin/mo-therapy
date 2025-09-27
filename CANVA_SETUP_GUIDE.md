# Canva Setup Guide for M.O. Therapy OpenGraph Images

## 🎨 **Step 1: Create Brand Kit in Canva**

### **Upload Brand Assets:**
1. **Logo**: Upload `/public/logo.png`
2. **Team Photos**: Upload all images from `/public/team/`
3. **Service Images**: Upload all images from `/public/services/`
4. **Background Images**: Upload `/public/team/mo-team-celebration.jpg`

### **Set Brand Colors:**
- **Primary Blue**: #40c6e5
- **Dark Blue**: #0a171b
- **White**: #ffffff
- **Light Gray**: #f8f9fa (for backgrounds)

### **Set Brand Fonts:**
- **Primary**: Poppins (Bold, SemiBold)
- **Secondary**: Inter (Regular, Medium)

## 📐 **Step 2: Create Master Template**

### **Canvas Setup:**
- **Size**: Custom - 1200 x 630 pixels
- **Background**: Gradient from #0a171b to #40c6e5

### **Layout Elements:**
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO - 80px height]              [TRUST BADGE]       │
│                                                         │
│                [MAIN HEADLINE]                          │
│                   48-60px font                          │
│                                                         │
│              [Supporting Text]                          │
│                 24-32px font                            │
│                                                         │
│  [BACKGROUND IMAGE/ICONS]         [CALL-TO-ACTION]      │
└─────────────────────────────────────────────────────────┘
```

## 🖼️ **Step 3: Create Individual Templates**

### **Template 1: Homepage**
**Canva Steps:**
1. Start with master template
2. Add logo (top-left, 80px height)
3. **Headline**: "Your M.O. is your hustle. Do it pain free."
   - Font: Poppins Bold, 52px, White
4. **Subtext**: "Premier Sports Medicine & Physiotherapy in Markham"
   - Font: Inter Medium, 28px, #40c6e5
5. **Trust Badge**: "Same Day Appointments"
   - Background: White, rounded corners
   - Text: #0a171b, 20px
6. **Background**: Extract frame from homepage video or use gradient

### **Template 2: Services**
**Canva Steps:**
1. White/light background
2. **Service Icons Grid**: 2x2 layout
   - Use: physiotherapy.png, massage-therapy.png, chiropractor.png, osteopath.png
   - Size: 120x120px each
3. **Headline**: "Comprehensive Therapeutic Services"
   - Font: Poppins Bold, 48px, #0a171b
4. **Service List**: "Physiotherapy • Massage • Chiropractic • Osteopathy"
   - Font: Inter Medium, 24px, #40c6e5

### **Template 3: About**
**Canva Steps:**
1. **Background**: mo-team-celebration.jpg (full background)
2. **Dark Overlay**: 60% opacity black rectangle
3. **Headline**: "About M.O. Therapy"
   - Font: Poppins Bold, 52px, White
4. **Subtext**: "Expert Athletic Care Team in Markham"
   - Font: Inter Medium, 28px, #40c6e5
5. **Stats**: "10+ Years Experience • Licensed Professionals"
   - Font: Inter Regular, 22px, White

### **Template 4: Team**
**Canva Steps:**
1. **Background**: Professional gradient (#f8f9fa to white)
2. **Team Photos Grid**: 3x2 layout
   - Use: dillon.png, carrie.png, damian.png, jeremy.png, leo.png, nadeem.png
   - Crop to circles, 100px diameter
3. **Headline**: "Meet Our Expert Team"
   - Font: Poppins Bold, 48px, #0a171b
4. **Credentials**: "RMT • Physiotherapist • Chiropractor"
   - Font: Inter Medium, 24px, #40c6e5

### **Template 5: Contact**
**Canva Steps:**
1. **Background**: Gradient or professional clinic image
2. **Headline**: "Contact M.O. Therapy"
   - Font: Poppins Bold, 48px, White
3. **Phone**: "(905) 201-5827"
   - Font: Poppins SemiBold, 36px, #40c6e5
4. **Address**: "20 Apple Creek Blvd, Markham"
   - Font: Inter Medium, 24px, White
5. **Features**: "Same Day Booking • Direct Billing"
   - Background: White rounded rectangle
   - Text: #0a171b, 20px

## 🚀 **Step 4: Export Settings**

### **Export Specifications:**
- **Format**: JPG (smaller file size) or PNG (if transparency needed)
- **Quality**: High (but keep under 1MB)
- **Filename Convention**: 
  - `og-image.jpg` (homepage)
  - `og-services.jpg`
  - `og-about.jpg`
  - `og-team.jpg`
  - `og-contact.jpg`
  - `og-conditions.jpg`
  - `og-blog.jpg`

## 📱 **Step 5: Testing**

### **Preview Tools:**
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

### **Test Checklist:**
- [ ] Image displays correctly on Facebook
- [ ] Image displays correctly on LinkedIn
- [ ] Image displays correctly on Twitter
- [ ] Text is readable at small sizes
- [ ] Logo is clearly visible
- [ ] File size under 1MB
- [ ] Consistent branding

## 💾 **Step 6: Implementation**

Once you've created the images in Canva:

1. **Download** all images to your computer
2. **Replace** the placeholder files in `/public/` directory:
   ```
   /public/og-image.jpg
   /public/og-services.jpg
   /public/og-about.jpg
   /public/og-team.jpg
   /public/og-contact.jpg
   /public/og-conditions.jpg
   /public/og-blog.jpg
   ```
3. **Test** the images by sharing your website links on social media
4. **Optimize** file sizes if needed (use tools like TinyPNG)

## 🎯 **Quick Start Priority**

**Start with these 3 most important images:**
1. **Homepage** (`og-image.jpg`) - Gets the most shares
2. **Services** (`og-services.jpg`) - High conversion potential  
3. **About** (`og-about.jpg`) - Trust and credibility

## 💡 **Pro Tips**

- **Save as Templates**: Save each design as a Canva template for future updates
- **Batch Creation**: Create all images in one session for consistency
- **Version Control**: Keep a folder with all source Canva files
- **Seasonal Updates**: Plan to refresh images quarterly
- **A/B Testing**: Try different headlines/layouts and measure engagement

## 🔄 **Maintenance Schedule**

- **Monthly**: Check image performance in social media analytics
- **Quarterly**: Update stats/numbers if they've improved
- **Annually**: Refresh images with new photos/branding
- **As Needed**: Update for new services or team members
