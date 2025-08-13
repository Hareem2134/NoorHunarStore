# Overview

This is an Islamic e-commerce web application called "Noor-e-Hunar" that specializes in selling handcrafted Islamic art pieces including calligraphy, frames, dua cards, and other religious artifacts. The application is built as a full-stack web solution with a React frontend and Express.js backend, featuring a clean, modern design with Islamic aesthetic elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and modern development practices:
- **Component Library**: Extensive use of Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom Islamic-themed design tokens (emerald greens, gold accents)
- **State Management**: Zustand for cart state management, TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The server follows a RESTful API design pattern:
- **Framework**: Express.js with TypeScript for type safety
- **Route Organization**: Centralized route registration with modular endpoint definitions
- **Error Handling**: Standardized error middleware with proper HTTP status codes
- **Development Setup**: Integrated Vite middleware for seamless full-stack development

## Data Storage Solutions
The application uses a flexible storage abstraction pattern:
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema Design**: Normalized tables for products, cart items, and newsletter subscriptions
- **Development Storage**: In-memory storage implementation for development/testing with sample data seeding
- **Session Management**: Cookie-based sessions for cart persistence across browser sessions

## Authentication and Authorization
Currently implements a simplified session-based approach:
- **Session Storage**: Uses session IDs stored in cookies for cart tracking
- **Cart Management**: Anonymous cart functionality without user authentication
- **Newsletter**: Email-based subscription system with duplicate prevention

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL configured via DATABASE_URL environment variable
- **Drizzle Kit**: Database migration and schema management tools

## UI Component Libraries
- **Radix UI**: Comprehensive unstyled component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel implementation for product showcases

## Development Tools
- **Replit Integration**: Custom vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TypeScript**: Strict type checking across the entire application stack

## Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Clsx & Tailwind Merge**: Conditional CSS class management
- **Nanoid**: Unique ID generation for various entities
- **Zod**: Runtime type validation and schema parsing

The application is designed to be easily deployable on Replit with integrated development tools and can scale to use external PostgreSQL databases in production.