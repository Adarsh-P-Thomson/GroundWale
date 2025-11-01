# Components Directory

This directory contains all reusable React components for the Groundwale application.

## Structure

```
components/
├── Home/                    # Landing page components
│   ├── HeroSection.jsx
│   ├── BookingCategories.jsx
│   ├── SportsShowcase.jsx
│   ├── TestimonialsAndFeatures.jsx
│   ├── CTASection.jsx
│   ├── index.js
│   └── README.md
├── Header.jsx              # Global header/navigation
├── Header.css             # Header styles
└── Footer.jsx             # Global footer
```

## Component Categories

### Global Components
- **Header.jsx** - Main navigation bar (sticky, responsive)
- **Footer.jsx** - Site footer with links and app download
- **Header.css** - Styles for header component

### Home Section
See [Home/README.md](./Home/README.md) for details on landing page components.

## Guidelines

### Component Creation
1. Use `.jsx` extension for React components
2. Include `"use client"` directive for client components
3. Use Tailwind CSS for styling
4. Follow responsive design principles
5. Add proper PropTypes or TypeScript types (future)

### Naming Conventions
- **PascalCase** for component files: `ComponentName.jsx`
- **camelCase** for folders containing multiple related components
- Use descriptive names that reflect component purpose

### Import Patterns
```jsx
// Global components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Home section components
import { HeroSection, BookingCategories } from '@/components/Home'
```

## Best Practices

1. **Keep components small and focused** - Single responsibility
2. **Make components reusable** - Use props for customization
3. **Responsive by default** - Mobile-first approach
4. **Optimize performance** - Use dynamic imports where appropriate
5. **Document complex components** - Add comments for clarity

## Technologies Used

- **React 19** - UI library
- **Next.js 15** - React framework
- **Tailwind CSS v4** - Utility-first CSS
- **Lucide React** - Icon library
- **Material-UI Icons** - Additional icons (select components)

## Adding New Components

1. Create component file in appropriate directory
2. Use functional components with hooks
3. Add to index.js if part of a component group
4. Update this README if creating new category
5. Test responsiveness across breakpoints

## Notes

- All home landing page components are in `Home/` folder
- Global components (Header, Footer) remain in root `components/`
- Use dynamic imports in pages for better performance
- Follow existing patterns for consistency
