# Home Section Components

This folder contains all components used in the main landing page (home page) of Groundwale.

## Components

### 1. **HeroSection.jsx**
- Full viewport hero section with search functionality
- Animated gradient background
- Dual search inputs (Sport & Location)
- Quick statistics display
- Scroll indicator

### 2. **BookingCategories.jsx**
- Four main service category cards:
  - Book Grounds
  - Book Turfs
  - Join Academies
  - Hire Coaches
- Interactive hover effects
- Feature lists for each category
- "Why Choose Us" section

### 3. **SportsShowcase.jsx**
- Display of 3 popular sports (Cricket, Football, Pickleball)
- Interactive sport cards with emojis
- Performance statistics section
- Responsive grid layout

### 4. **TestimonialsAndFeatures.jsx**
- Platform features grid (4 key features)
- User testimonials section
- 5-star rating displays
- Quote styling

### 5. **CTASection.jsx**
- Mobile app download promotion
- App Store and Google Play buttons
- Feature highlights
- Phone mockup visualization
- Animated effects

## Usage

### Individual Import
```jsx
import HeroSection from '@/components/Home/HeroSection'
```

### Bulk Import (using index.js)
```jsx
import { HeroSection, BookingCategories, SportsShowcase } from '@/components/Home'
```

## Technologies
- React 19
- Next.js 15
- Tailwind CSS v4
- Lucide React (icons)

## File Structure
```
Home/
├── index.js                      # Centralized exports
├── README.md                     # This file
├── HeroSection.jsx              # Hero/Banner section
├── BookingCategories.jsx        # Main service categories
├── SportsShowcase.jsx           # Sports grid display
├── TestimonialsAndFeatures.jsx  # Reviews & features
└── CTASection.jsx               # App download CTA
```

## Notes
- All components are client-side ("use client")
- Fully responsive with Tailwind CSS
- Optimized for performance with dynamic imports
- Follow consistent naming conventions

## Suggested Page Structure
```
<Header />
  ↓
<HeroSection />         // Hero with search
  ↓
<BookingCategories />   // 4 main services
  ↓
<SportsShowcase />      // 3 sports only (Cricket, Football, Pickleball)
  ↓
<TestimonialsAndFeatures /> // Reviews & features
  ↓
<Faq />                 // FAQ section
  ↓
<Footer />              // CTA is here (app download)
```


