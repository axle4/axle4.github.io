# Axel44 Agency - Agent Instructions

## Project Overview
Axel44 Agency is a **professional personal brand website** for a full-stack web developer, crypto/futures trader, and social media expert. The site showcases services and premium educational e-books with an admin dashboard for management.

## Purpose & Goal
- Build personal brand and agency credibility
- Showcase diverse services (web development, crypto trading, social media, marketing)
- Sell premium e-books on business and technical topics
- Provide secure admin access for dashboard management
- Demonstrate modern web development best practices

## Project Structure
```
axel44-agency/
├── index.html                # Home page with hero and expertise
├── services.html             # Detailed services listing
├── ebooks.html              # Premium e-books catalog
├── admin-login.html         # Admin authentication portal
├── admin-dashboard.html     # Admin dashboard with stats
├── style.css                # Main styling (public pages)
├── admin-style.css          # Admin-specific styling
├── main.js                  # Public pages functionality
├── admin.js                 # Admin dashboard & auth logic
└── AGENTS.md               # This file
```

## Key Features

### Public Pages
- **index.html**: Hero section with CTA, expertise showcase, call-to-action
- **services.html**: 6 core services with detailed descriptions and pricing packages
- **ebooks.html**: 6 premium e-books + bundle offer with pricing

### Admin Section
- **admin-login.html**: Login form with demo credentials
- **admin-dashboard.html**: Welcome dashboard with auto-updating date/time
- **Features**:
  - Session management via localStorage
  - Real-time clock (updates every second)
  - Quick action buttons
  - Activity feed
  - Services overview
  - Session timeout (30 minutes inactivity)
  - Keyboard shortcuts (Alt+L logout, Alt+D dashboard)

## Design & Styling

### Color Scheme (Modern Dark Theme)
- **Primary**: `#00d4ff` (Bright Cyan)
- **Secondary**: `#ff6b9d` (Pink)
- **Accent**: `#ffd700` (Gold)
- **Dark BG**: `#0a0e27` (Deep Navy)
- **Card BG**: `#1a1f3a` (Card Blue)
- **Text Light**: `#e0e6ff` (Light Blue)
- **Text Muted**: `#8892b0` (Muted)

### CSS Organization
- **style.css**: Public pages (navigation, hero, grids, responsive)
- **admin-style.css**: Admin pages (dashboard layout, sidebar, stats cards)
- CSS Variables defined in `:root` for easy theming
- Mobile-first responsive design with breakpoints at 768px and 480px

## Development Conventions

### HTML
- Semantic HTML tags (`<nav>`, `<section>`, `<footer>`)
- IDs for JavaScript targets (camelCase: `adminUsername`, `currentDate`)
- Classes for styling (kebab-case: `nav-links`, `stat-card`)
- Proper meta tags (charset, viewport)

### CSS
- All theme colors defined as CSS variables
- Use CSS custom properties for colors, spacing, shadows
- Responsive design with media queries at 768px, 480px
- Animations: fade-in-up, float, smooth transitions
- Grid-based layout system

### JavaScript
- Vanilla JavaScript (no frameworks)
- Const/let for all variables
- Comments with section dividers: `// ==========================================`
- Event delegation and proper event handling
- LocalStorage for session management
- Console logging for debugging

### Naming Conventions
- **HTML IDs**: camelCase (`adminLoginForm`, `currentTime`, `welcomeMessage`)
- **CSS Classes**: kebab-case (`admin-container`, `login-box`, `sidebar-nav`)
- **JavaScript Functions**: camelCase with verb prefixes (`updateDateTime`, `checkAdminSession`, `resetSessionTimeout`)

## Services & Content

### Services (6 Core Offerings)
1. **Full Stack Development** - Websites and custom solutions
2. **Crypto & Trading** - Market analysis and portfolio strategy
3. **Social Media Management** - Content and growth strategies
4. **Marketing Solutions** - Strategic campaigns and optimization
5. **Prompt Engineering** - AI optimization and automation
6. **E-Books & Content** - Educational resources on business topics

### E-Books (6 Premium Offerings)
1. The Complete E-Commerce Blueprint ($29.99)
2. Product Planning & Execution ($34.99)
3. Crypto Trading Fundamentals ($39.99)
4. Social Media Growth Hacking ($24.99)
5. Full Stack Web Development Guide ($44.99)
6. AI & Prompt Engineering Mastery ($29.99)
7. **Bundle**: All 6 for $129.99 (36% discount)

## Admin Credentials (Demo)
- **Username**: admin
- **Password**: password

## JavaScript Features

### main.js (Public Pages)
- Mobile hamburger menu with rotation animation
- E-book purchase button handlers
- Bundle purchase functionality
- Smooth scroll behavior
- Intersection Observer for fade-in animations
- Active link highlighting
- Console welcome message

### admin.js (Admin Pages)
- Login form validation
- Session management (localStorage)
- Admin dashboard access control
- Auto-updating date/time (updates every 1 second)
- Logout with confirmation
- Sidebar navigation highlighting
- Session timeout after 30 minutes inactivity
- Keyboard shortcuts (Alt+L, Alt+D)
- Dashboard animations

## Common Tasks

- **Add New Service**: Add card to services.html, update count in dashboard
- **Add New E-Book**: Add card to ebooks.html, update bundle price/total count
- **Modify Colors**: Update CSS variables in `:root` in both CSS files
- **Add Admin Features**: Extend admin.js with new functionality
- **Change Service Packages**: Edit packages section in services.html

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (tested at 768px and 480px)
- No build tools required - runs directly in browser
- LocalStorage required for admin functionality

## Key Implementation Details

### Responsive Breakpoints
- **Desktop**: Full layout (>768px)
- **Tablet**: Mobile navigation appears, grid adjusts (768px)
- **Mobile**: Single column, hamburger menu, adjusted font sizes (<480px)

### Session Management
- Uses localStorage for demo authentication
- No backend required
- Session expires after 30 minutes of inactivity
- Warning at 5 minutes before expiration

### Animation Effects
- Floating emoji on home page
- Fade-in-up on scroll for cards
- Hover elevation on interactive elements
- Gradient text for headings

## Notes
- All data is hardcoded (no database)
- No actual payment processing (demo buttons only)
- Admin panel is frontend-only (no backend validation)
- Designed as a portfolio/demo website
- Production version would need backend, payment integration, and real auth
