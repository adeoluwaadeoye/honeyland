
<!-- Honeyland Fullstack Folder Structure -->
/honeyland
│
├── /app                  # Next.js App Router Pages & API
│   ├── /(public)         # Frontend pages (public users)
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── gallery/page.tsx
│   │
│   ├── /(admin)          # Admin panel pages
│   │   ├── page.tsx
│   │   ├── properties/page.tsx
│   │   ├── properties/new/page.tsx
│   │   └── properties/[id]/edit/page.tsx
│   │
│   ├── /api              # Backend API routes
│   │   ├── /properties
│   │   │   ├── route.ts       # GET, POST for all properties
│   │   │   └── [id]/route.ts  # GET, PUT, DELETE for single property
│   │   │
│   │   ├── /auth
│   │   │   ├── register/route.ts
│   │   │   └── login/route.ts
│   │   │
│   │   └── /contact
│   │       └── route.ts
│   │
│   └── layout.tsx        # App-level layout
│
├── /components           # Pure UI Components
│   ├── /ui               # Small reusable UI elements
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Loader.tsx
│   │
│   ├── /layout           # Layout elements
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   └── /shared           # Shared, generic components
│       ├── SectionHeader.tsx
│       └── EmptyState.tsx
│
├── /features             # Feature-based logic (business logic)
│   ├── /properties
│   │   ├── /components
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyGrid.tsx
│   │   │   └── PropertyFilter.tsx
│   │   ├── /hooks
│   │   │   └── useProperties.ts
│   │   └── /services
│   │       └── propertyService.ts
│   │
│   ├── /auth
│   │   ├── /hooks
│   │   │   └── useAuth.ts
│   │   └── /services
│   │       └── authService.ts
│   │
│   └── /contact
│       ├── /components
│       │   └── ContactForm.tsx
│       └── /services
│           └── contactService.ts
│
├── /models               # MongoDB Models (Mongoose)
│   ├── Property.ts
│   ├── User.ts
│   └── Lead.ts
│
├── /lib                  # Core helpers / infrastructure
│   ├── db.ts             # MongoDB connection
│   ├── auth.ts           # JWT / auth helpers
│   └── cloudinary.ts     # Image upload helper
│
├── /hooks                # Global reusable React hooks
│   ├── useDebounce.ts
│   └── useScroll.ts
│
├── /utils                # Pure functions & constants
│   ├── formatPrice.ts
│   ├── slugify.ts
│   └── constants.ts
│
├── /types                # TypeScript types
│   ├── property.ts
│   ├── user.ts
│   └── api.ts
│
├── /styles
│   └── globals.css
│
├── /public               # Static files (images, icons, etc.)
│   ├── images/
│   └── icons/
│
├── .env.local            # Environment variables
├── next.config.js
├── package.json
└── tsconfig.json