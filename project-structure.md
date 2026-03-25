/src
│
├── /app                         # Next.js App Router
│   ├── /(public)                # Public-facing site
│   │   ├── page.tsx             # Home
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── login/page.tsx       # Auth pages
│   │   └── signup/page.tsx
│   │
│   ├── /(admin)                # Protected admin area
│   │   ├── layout.tsx           # Admin layout (sidebar, etc.)
│   │   ├── page.tsx             # Dashboard
│   │   │
│   │   ├── properties
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx 
│   │   │   └── [id]/edit/page.tsx
│   │
│   ├── /api                     # Backend routes
│   │   ├── /auth
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── me/route.ts
│   │   │
│   │   ├── /properties
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   │
│   │   ├── /contact
│   │   │   └── route.ts
│   │
│   ├── layout.tsx               # Root layout
│   └── globals.css
│
├── /components                  # Pure UI (NO business logic)
│   ├── /ui
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Loader.tsx
│   │   └── Card.tsx
│   │
│   ├── /layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx 
│   │   └── Container.tsx
│   │ 
│   ├── /shared
│   │   ├── SectionHeader.tsx
│   │   ├── EmptyState.tsx
│   │   └── ClientOnly.tsx       # Hydration-safe wrapper
│
├── /features                    # Business logic (VERY IMPORTANT)
│   ├── /auth
│   │   ├── /hooks
│   │   │   └── useAuth.ts
│   │   │
│   │   ├── /services
│   │   │   └── authService.ts
│   │   │
│   │   └── /components
│   │       ├── LoginForm.tsx
│   │       └── SignupForm.tsx
│   │
│   ├── /properties
│   │   ├── /components
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyGrid.tsx
│   │   │   └── PropertyForm.tsx
│   │   │
│   │   ├── /hooks
│   │   │   └── useProperties.ts
│   │   │
│   │   └── /services
│   │       └── propertyService.ts
│   │
│   ├── /contact
│   │   ├── /components 
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── /services
│   │       └── contactService.ts
│
├── /hooks                       # Global reusable hooks
│   ├── useDebounce.ts
│   ├── useScroll.ts
│   └── useClient.ts             # Hydration-safe hook
│
├── /lib                         # Core backend utilities
│   ├── db.ts                    # MongoDB connection
│   ├── auth.ts                  # JWT helpers
│   └── cloudinary.ts
│
├── /models                      # Database schemas 
│   ├── User.ts
│   ├── Property.ts
│   └── Lead.ts
│
├── /types                       # TypeScript types
│   ├── user.ts
│   ├── property.ts
│   └── api.ts
│
├── /utils                       # Pure utility functions
│   ├── formatPrice.ts
│   ├── slugify.ts
│   └── constants.ts
│
├── /styles
│   └── globals.css              # (if not in /app)
│
├── /middleware.ts               🔥 (IMPORTANT - protect admin)
│
├── .env.local
├── next.config.js
├── package.json
└── tsconfig.json