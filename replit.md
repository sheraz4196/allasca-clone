# Overview

This is a full-stack construction company website called "AllCasa" built with a modern TypeScript React frontend and Express.js backend. The application showcases construction services including custom home builds, renovations, basement development, and landscaping. It features a comprehensive service portfolio, interactive quote system, contact forms, and content pages with testimonials and project galleries.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

## SEO Optimization (October 2025)
- **Primary Keywords**: Full Home Renovation, Full Basement Renovation, New Luxury Custom House Design and Build
- **Meta Tags**: Updated page title and description to include target keywords for Google Ads
- **Content Strategy**: Added keyword-rich paragraphs throughout homepage and About Us page
- **Target Market**: Toronto, GTA, North York, Mississauga - custom home construction and renovation
- **SEO Sections**: Enhanced SEOSection.tsx with 4 comprehensive paragraphs targeting primary keywords
- **Open Graph**: Updated social media meta tags for better sharing optimization
- **Canonical URLs**: Added canonical links to all pages pointing to non-www versions (https://allcasa.ca/)
- **SEO Component**: Created reusable Seo.tsx component for consistent meta tags across all pages
- **www Redirect**: Implemented 301 redirect from www to non-www in server with trust proxy support
- **Admin Page**: Added noindex,nofollow meta tags to prevent search engine indexing of admin pages

## Performance Optimizations (October 2025)

### Development & Production Optimizations
- **Code Splitting**: Implemented React.lazy for non-critical routes (Admin, AboutUs, PrivacyPolicy, etc.)
- **Caching**: Added cache-control headers for production static assets (1-year immutable)
- **Server Compression**: Enabled gzip/brotli compression middleware for all text assets (level 6)
- **Animations**: Optimized intersection observers from dozens to 2-3 shared observers
- **DOM Performance**: Throttled MutationObserver, limited observation scope to main content
- **Image Loading**: Eager loading for above-the-fold images, lazy loading for others
- **Image Optimization**: 
  - Converted all Unsplash URLs to WebP format (800px width, quality 75)
  - Added fetchPriority="high" for LCP image
  - Added decoding="async" for non-critical images
  - Preload link for hero carousel first image
- **SEO Indexing**: Added explicit meta robots tags to allow search engine indexing
- **Component Memoization**: Added React.memo to ServiceCard and PortfolioCard to prevent unnecessary re-renders
- **Callback Optimization**: Wrapped event handlers in useCallback to maintain stable references
- **Animation Removal**: Removed performance-intensive typing animation from Hero component
- **Script Deferral**: Moved Google Tag Manager to load after page load event (100ms delay)
- **Resource Hints**: Added preconnect and preload tags for critical resources

### Production-Only Optimizations (Requires Publishing)
These optimizations only take effect when the app is published to production:
- **JavaScript Minification**: Vite automatically minifies JS in production build
- **Tree Shaking**: Unused code is removed during production build
- **Legacy JavaScript**: Production build targets modern browsers (no unnecessary polyfills)
- **CSS Purging**: Tailwind purges unused CSS in production
- **Asset Hashing**: Files get content hashes for optimal caching
- **Bundle Optimization**: Code splitting and chunk optimization via Vite
- **HTTP/2**: Production hosting enables HTTP/2 multiplexing

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server with hot module replacement
- **TailwindCSS** for styling with custom design tokens and responsive design
- **Radix UI** components with shadcn/ui component library for consistent UI elements
- **React Router** for client-side routing with dedicated pages for privacy policy and terms of service
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling and validation

## Backend Architecture
- **Express.js** server with TypeScript using ES modules
- **RESTful API** structure with routes organized in separate modules
- **Memory storage** implementation with interface for potential database integration
- **Middleware** for request logging, JSON parsing, and error handling
- **Development/Production** environment configuration with conditional Vite integration

## Database Design
- **Drizzle ORM** configured for PostgreSQL with Neon serverless database
- **User schema** with basic authentication fields (id, username, password)
- **Database migrations** managed through Drizzle Kit
- **Connection pooling** using Neon's serverless connection pool

## Component Structure
- **Modular component architecture** with reusable UI components
- **Custom carousel component** for image galleries
- **Interactive forms** with multi-step quote generation system
- **Animation system** with intersection observer for scroll-triggered animations
- **Responsive design** optimized for mobile and desktop viewports

## State Management
- **Local component state** using React hooks
- **Form state** managed with React Hook Form
- **Server state** cached with TanStack Query
- **Cart/Quote system** with local storage persistence

## Styling Strategy
- **Utility-first CSS** with TailwindCSS
- **Custom color palette** with CSS custom properties for theming
- **Component variants** using class-variance-authority for consistent styling
- **Responsive breakpoints** with mobile-first design approach

# External Dependencies

## Database Services
- **Neon Database** - Serverless PostgreSQL database hosting
- **Drizzle ORM** - Type-safe database queries and schema management

## UI Libraries
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Carousel/slider functionality for image galleries

## Form & Validation
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

## Development Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Type safety and enhanced developer experience
- **ESBuild** - Fast JavaScript bundler for production builds
- **PostCSS** - CSS processing with autoprefixer

## Email Services
- **Supabase Functions** - Serverless functions for email notifications
- **Resend API** - Transactional email service for form submissions

## Analytics & Tracking
- **Google Tag Manager** integration for event tracking and analytics
- **Custom tracking utilities** for form interactions and user behavior

## Deployment & Hosting
- **Replit** - Development environment and potential hosting platform
- **Environment variables** for database URLs and API keys
- **Static asset serving** with Express.js for production builds