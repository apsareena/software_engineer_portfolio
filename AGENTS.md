# Software Engineer Portfolio Website - AGENTS.md

## Project Overview

A responsive, single-page software engineer portfolio website with smooth scrolling navigation and scroll-triggered animations. Built with Next.js, TypeScript, and Material-UI. Features a minimalist design with a white background and subtle geometric shapes.

**Application Name**: portfolio-website

## Core Functionality

### Portfolio Sections

#### 1. Hero/Introduction Section
- Greeting message: "Hi! I am [Name]!"
- Professional titles/roles (e.g., "Software Engineer, Full-Stack Developer, Problem Solver")
- Brief tagline about hobbies/interests (e.g., "I also love to [hobby]...")
- Call-to-action buttons (e.g., "View My Work", "Contact Me")
- Scroll-down indicator/arrow
- Background with subtle geometric shapes

#### 2. Skills/Technologies Section
- Display technical skills organized by categories:
  - Programming Languages
  - Frameworks & Libraries
  - Tools & Platforms
  - Other Skills
- Visual representation (chips/badges or cards)
- Icons for each technology (optional)
- Fade-in animation on scroll

#### 3. Experience Section
- Timeline or card-based layout
- For each experience:
  - Company name
  - Job title
  - Duration (start date - end date or "Present")
  - Location (optional)
  - Description/responsibilities (bullet points)
  - Technologies used
- Slide-in animation on scroll

#### 4. Projects Section
- Grid of project cards (responsive)
- Each project card shows:
  - Project image/screenshot
  - Project title
  - Brief description (2-3 sentences)
  - Technologies used (tags/chips)
  - Links to GitHub repository and/or live demo
- Hover effect with subtle elevation
- Click to expand/modal with detailed view:
  - Larger images/gallery
  - Full description
  - Key features
  - Challenges and solutions
  - All links (GitHub, live demo, etc.)
- Fade-in and scale animation on scroll

#### 5. Education Section
- Card or timeline layout
- For each education entry:
  - Institution name
  - Degree/certification
  - Field of study
  - Duration (start - end year)
  - GPA or honors (optional)
  - Relevant coursework or achievements (optional)
- Slide-in animation on scroll

#### 6. Contact Section
- Contact information display:
  - Email address (clickable mailto link)
  - Phone number (optional, clickable tel link)
  - LinkedIn profile link
  - GitHub profile link
  - Other social media (optional)
- Visual contact cards or simple list
- Copy-to-clipboard functionality for email
- Fade-in animation on scroll

### Navigation

#### Navbar/Header
- Fixed/sticky position at top
- Logo/Name on the left
- Navigation links on the right:
  - About
  - Skills
  - Experience
  - Projects
  - Education
  - Contact
- Smooth scroll to sections on click
- Active section highlighting in navbar
- Hamburger menu for mobile
- Subtle shadow on scroll

#### Smooth Scrolling
- Click navigation links to smoothly scroll to sections
- Scroll offset to account for fixed navbar height
- Scroll-to-top button (appears after scrolling down)

### Animations

All animations use Framer Motion:

#### Scroll-Triggered Animations
- **Fade-in**: Elements fade in with opacity transition
- **Slide-up**: Elements slide up from below while fading in
- **Slide-in (left/right)**: Elements slide in from sides
- **Scale**: Elements scale from 0.8 to 1.0
- Trigger when element enters viewport
- Stagger animations for lists/grids (items animate sequentially)

#### Interaction Animations
- Navbar links: Underline animation on hover
- Buttons: Scale slightly on hover, press effect on click
- Project cards: Elevation increase and subtle scale on hover
- Social icons: Color change and rotate/scale on hover

### Background Design

#### White Background with Geometric Shapes
- Main background: Pure white (#FFFFFF)
- Decorative geometric shapes:
  - Circles, triangles, squares, hexagons
  - Soft pastel colors with low opacity (10-20%)
  - Positioned absolutely, behind all content
  - Different shapes in different sections
  - No animation (static shapes for performance)
  - Shapes should not interfere with readability
- Example shape colors:
  - Soft blue: rgba(100, 150, 255, 0.1)
  - Soft purple: rgba(150, 100, 255, 0.1)
  - Soft teal: rgba(100, 200, 200, 0.1)
  - Soft pink: rgba(255, 150, 180, 0.1)

## Technical Specifications

### Technology Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI)
- **Animation**: Framer Motion
- **Linting**: eslint-config-prettier
- **Validation**: Zod for data validation
- **Security**: Next.js defaults
- **Authentication**: None
- **Database**: JSON files in `/data/` directory

### Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx              # Main portfolio page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx               # Fixed navbar with smooth scroll links
│   │   │   ├── mobile-menu.tsx          # Hamburger menu for mobile
│   │   │   ├── scroll-to-top.tsx        # Scroll to top button
│   │   │   └── background-shapes.tsx    # Decorative geometric shapes
│   │   ├── sections/
│   │   │   ├── hero-section.tsx         # Introduction/hero section
│   │   │   ├── skills-section.tsx       # Skills/technologies display
│   │   │   ├── experience-section.tsx   # Work experience timeline/cards
│   │   │   ├── projects-section.tsx     # Projects grid
│   │   │   ├── education-section.tsx    # Education timeline/cards
│   │   │   └── contact-section.tsx      # Contact information
│   │   ├── projects/
│   │   │   ├── project-card.tsx         # Individual project card
│   │   │   ├── project-modal.tsx        # Detailed project view modal
│   │   │   └── project-grid.tsx         # Responsive grid container
│   │   ├── experience/
│   │   │   ├── experience-card.tsx      # Individual experience card
│   │   │   └── experience-timeline.tsx  # Timeline layout (optional)
│   │   ├── education/
│   │   │   ├── education-card.tsx       # Individual education card
│   │   │   └── education-list.tsx       # List/grid container
│   │   ├── skills/
│   │   │   ├── skill-category.tsx       # Skill category grouping
│   │   │   ├── skill-chip.tsx           # Individual skill badge
│   │   │   └── skills-grid.tsx          # Grid layout for skills
│   │   ├── contact/
│   │   │   ├── contact-card.tsx         # Contact info card
│   │   │   ├── social-links.tsx         # Social media links
│   │   │   └── copy-button.tsx          # Copy-to-clipboard button
│   │   └── animations/
│   │       ├── fade-in.tsx              # Fade-in animation wrapper
│   │       ├── slide-in.tsx             # Slide-in animation wrapper
│   │       └── stagger-container.tsx    # Stagger animation container
│   ├── lib/
│   │   └── utils/
│   │       ├── scroll-utils.ts          # Smooth scroll utilities
│   │       ├── animation-variants.ts    # Framer Motion variants
│   │       └── format-utils.ts          # Date formatting, etc.
│   ├── services/
│   │   └── data-service.ts              # Load data from JSON files
│   ├── types/
│   │   ├── portfolio.ts                 # All TypeScript interfaces
│   │   ├── project.ts                   # Project-specific types
│   │   ├── experience.ts                # Experience-specific types
│   │   └── education.ts                 # Education-specific types
│   ├── constants/
│   │   └── app-constants.ts             # All constants
│   └── theme/
│       └── theme-config.ts              # MUI theme configuration
├── data/
│   ├── profile.json                     # Personal info for hero section
│   ├── skills.json                      # Skills organized by category
│   ├── experience.json                  # Work experience data
│   ├── projects.json                    # Projects data
│   ├── education.json                   # Education data
│   └── contact.json                     # Contact information
├── public/
│   ├── images/
│   │   ├── projects/                    # Project screenshots
│   │   └── profile.jpg                  # Profile photo (optional)
│   └── (other static assets)
├── .eslintrc.json
├── next.config.js
├── tsconfig.json
├── package.json
└── BUILD_LOG.md                         # Build process documentation
```

### Data Structure

#### Profile Interface (`profile.json`)
```typescript
interface Profile {
  name: string;
  titles: string[];          // ["Software Engineer", "Full-Stack Developer"]
  tagline: string;           // About hobbies/interests
  profileImage?: string;     // Path to profile image (optional)
  ctaButtons: {
    text: string;
    link: string;            // Section ID to scroll to (e.g., "#projects")
  }[];
}
```

**JSON Example**:
```json
{
  "name": "John Doe",
  "titles": [
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver"
  ],
  "tagline": "I also love to hike, play guitar, and explore new technologies.",
  "profileImage": "/images/profile.jpg",
  "ctaButtons": [
    {
      "text": "View My Work",
      "link": "#projects"
    },
    {
      "text": "Contact Me",
      "link": "#contact"
    }
  ]
}
```

#### Skills Interface (`skills.json`)
```typescript
interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsData {
  categories: SkillCategory[];
}
```

**JSON Example**:
```json
{
  "categories": [
    {
      "category": "Programming Languages",
      "skills": ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      "category": "Frameworks & Libraries",
      "skills": ["React", "Next.js", "Node.js", "Express", "Django"]
    },
    {
      "category": "Tools & Platforms",
      "skills": ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"]
    },
    {
      "category": "Other Skills",
      "skills": ["RESTful APIs", "GraphQL", "CI/CD", "Agile", "TDD"]
    }
  ]
}
```

#### Experience Interface (`experience.json`)
```typescript
interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;        // "YYYY-MM" format
  endDate: string | null;   // "YYYY-MM" or null for "Present"
  description: string[];    // Array of bullet points
  technologies: string[];   // Technologies used in this role
}

interface ExperienceData {
  experiences: Experience[];
}
```

**JSON Example**:
```json
{
  "experiences": [
    {
      "id": "exp-1",
      "company": "Tech Company Inc.",
      "position": "Senior Software Engineer",
      "location": "San Francisco, CA",
      "startDate": "2022-01",
      "endDate": null,
      "description": [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored team of 5 junior developers",
        "Reduced API response time by 40% through optimization"
      ],
      "technologies": ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      "id": "exp-2",
      "company": "Startup XYZ",
      "position": "Full-Stack Developer",
      "location": "Remote",
      "startDate": "2020-06",
      "endDate": "2021-12",
      "description": [
        "Built and deployed 3 client-facing web applications",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      "technologies": ["Vue.js", "Express", "MongoDB", "Heroku"]
    }
  ]
}
```

#### Projects Interface (`projects.json`)
```typescript
interface Project {
  id: string;
  title: string;
  shortDescription: string;   // For card display (2-3 sentences)
  fullDescription: string;    // For modal (detailed)
  image: string;              // Path to project screenshot
  technologies: string[];     // Tech stack
  features?: string[];        // Key features (for modal)
  challenges?: string;        // Challenges faced (for modal)
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;          // Show first in grid
}

interface ProjectsData {
  projects: Project[];
}
```

**JSON Example**:
```json
{
  "projects": [
    {
      "id": "proj-1",
      "title": "E-Commerce Platform",
      "shortDescription": "A full-featured e-commerce platform with real-time inventory management and payment processing.",
      "fullDescription": "Built a comprehensive e-commerce solution from scratch, handling thousands of products and processing secure payments. Implemented real-time inventory tracking, user authentication, and an admin dashboard.",
      "image": "/images/projects/ecommerce.png",
      "technologies": ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      "features": [
        "Real-time inventory management",
        "Secure payment processing with Stripe",
        "Admin dashboard with analytics",
        "Responsive design for all devices"
      ],
      "challenges": "Optimizing database queries for large product catalogs while maintaining sub-second page loads.",
      "githubUrl": "https://github.com/username/ecommerce",
      "liveUrl": "https://ecommerce-demo.com",
      "featured": true
    }
  ]
}
```

#### Education Interface (`education.json`)
```typescript
interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  honors?: string;
  relevantCoursework?: string[];
}

interface EducationData {
  education: Education[];
}
```

**JSON Example**:
```json
{
  "education": [
    {
      "id": "edu-1",
      "institution": "University of Technology",
      "degree": "Bachelor of Science",
      "fieldOfStudy": "Computer Science",
      "startYear": 2016,
      "endYear": 2020,
      "gpa": "3.8/4.0",
      "honors": "Magna Cum Laude",
      "relevantCoursework": [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Machine Learning"
      ]
    }
  ]
}
```

#### Contact Interface (`contact.json`)
```typescript
interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
  location?: string;
}
```

**JSON Example**:
```json
{
  "email": "john.doe@example.com",
  "phone": "+1 (555) 123-4567",
  "linkedin": "https://linkedin.com/in/johndoe",
  "github": "https://github.com/johndoe",
  "twitter": "https://twitter.com/johndoe",
  "location": "San Francisco, CA"
}
```

## Code Quality Standards

### Naming Conventions
- **Files and folders**: kebab-case (e.g., `project-card.tsx`, `scroll-utils.ts`)
- **Functions and variables**: camelCase (e.g., `smoothScrollTo`, `projectList`)
- **Constants and URLs**: UPPER_SNAKE_CASE (e.g., `NAVBAR_HEIGHT`, `SCROLL_OFFSET`)
- **TypeScript interfaces/types**: PascalCase (e.g., `Project`, `Experience`)

### Code Organization
- **No monolithic files**: Keep files as short as possible and focused
- **Small, focused functions**: Each function should do one thing well
- **No hardcoded values**: Use constants from `app-constants.ts`
- **Separation of concerns**: UI components, business logic, and data access are separate

### Code Documentation
- **Every file** must have a header comment explaining its purpose
- **Every function** must have a JSDoc comment explaining:
    - What it does
    - Parameters (with types)
    - Return value
    - Example usage if not obvious
- **Complex logic** must have inline comments explaining the "why"
- **Components** must have comments for props and main sections

Example:
```typescript
/**
 * Smoothly scrolls to a target element on the page.
 * Accounts for fixed navbar height offset.
 * 
 * @param targetId - The ID of the element to scroll to (without #)
 * @param offset - Additional offset in pixels (default: navbar height)
 * @returns void
 */
export function smoothScrollTo(
  targetId: string,
  offset: number = NAVBAR_HEIGHT
): void {
  // Implementation with detailed inline comments
}
```

### Input Validation
- Use **Zod schemas** for data loaded from JSON files
- Validate all JSON data structure on load
- Handle missing or malformed data gracefully
- Show error states in UI if data fails to load

### Security
- Rely on Next.js security defaults
- Sanitize all user inputs (if contact form added in future)
- Validate data before rendering
- Use TypeScript strict mode

## Design System

### Typography
- **Headings/Titles**: Roboto Slab or Playfair Display (serif for elegance)
    - Hero name
    - Section headings
- **Body Text**: Inter or Open Sans (sans-serif for readability)
    - All body text
    - Descriptions
    - Navigation
- **Monospace**: Fira Code or Source Code Pro (for code snippets if needed)

### Color Palette

**Professional Neutral Palette**

```typescript
{
  // Primary colors
  primary: '#2C3E50',         // Dark blue-grey (headings, navbar)
  secondary: '#3498DB',       // Professional blue (links, accents)
  accent: '#1ABC9C',          // Teal (CTAs, highlights)
  
  // Neutral colors
  background: '#FFFFFF',      // Pure white background
  surface: '#F8F9FA',         // Light grey (card backgrounds)
  border: '#E0E0E0',          // Border color
  
  // Text colors
  textPrimary: '#212529',     // Almost black (primary text)
  textSecondary: '#6C757D',   // Grey (secondary text, descriptions)
  textMuted: '#ADB5BD',       // Light grey (muted text)
  
  // Decorative shape colors (low opacity)
  shapeBlue: 'rgba(52, 152, 219, 0.1)',      // Soft blue
  shapeTeal: 'rgba(26, 188, 156, 0.1)',      // Soft teal
  shapePurple: 'rgba(155, 89, 182, 0.1)',    // Soft purple
  shapePink: 'rgba(231, 76, 60, 0.08)',      // Soft pink/red
  
  // State colors
  hover: '#34495E',           // Darker blue-grey for hover
  active: '#1ABC9C',          // Accent color for active states
  success: '#27AE60',         // Green for success
  error: '#E74C3C',           // Red for errors
}
```

**Color Usage Guidelines**:
- **Background**: Always pure white (#FFFFFF)
- **Cards/Surface**: Very light grey (#F8F9FA) with subtle shadow
- **Navbar**: Primary color (#2C3E50) with white text
- **Headings**: Primary color (#2C3E50)
- **Body text**: Text primary (#212529)
- **Links**: Secondary color (#3498DB), accent on hover
- **Buttons (CTA)**: Accent color (#1ABC9C)
- **Decorative shapes**: Low opacity pastels (10-15%)

### Component Styling

#### Navbar
- **Height**: 64px on desktop, 56px on mobile
- **Background**: Primary color (#2C3E50)
- **Text**: White
- **Shadow**: `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)` on scroll
- **Fixed position**: Stays at top on scroll
- **Active link**: Underline with accent color

#### Sections
- **Padding**: 80px vertical on desktop, 48px on mobile
- **Max width**: 1200px, centered
- **Spacing**: 64px between sections

#### Cards (Projects, Experience, Education)
- **Background**: Surface color (#F8F9FA)
- **Border radius**: 8px
- **Shadow**: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`
- **Hover shadow**: `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)`
- **Padding**: 24px
- **Transition**: 0.3s ease for all hover effects

#### Project Cards (specific)
- **Image**: 16:9 aspect ratio, cover fit
- **Image border radius**: 8px 8px 0 0 (top corners only)
- **Tech tags**: Chips with secondary color background
- **Hover**: Slight scale (1.02) and shadow increase

#### Buttons
- **CTA buttons**: Accent color, white text, 8px border radius
- **Padding**: 12px 24px
- **Hover**: Darken by 10%, scale 1.05
- **Active**: Scale 0.98

#### Skill Chips
- **Background**: Surface color with secondary border
- **Padding**: 8px 16px
- **Border radius**: 16px (pill shape)
- **Font size**: 14px

#### Geometric Shapes (Background)
- **Opacity**: 0.1 to 0.15
- **Sizes**: Vary from 100px to 400px
- **Shapes**: Circles, triangles, squares, hexagons
- **Placement**: Absolute positioning, behind content (z-index: -1)
- **Distribution**: Spread across sections, avoid clustering
- **Colors**: Use shape colors from palette
- **No animation**: Static for performance

### Responsive Breakpoints
```typescript
{
  mobile: '0-599px',      // 1 column
  tablet: '600-959px',    // 2 columns
  desktop: '960px+',      // 3 columns
}
```

**Responsive Behavior**:
- **Projects grid**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Skills grid**: 4 columns (desktop), 3 columns (tablet), 2 columns (mobile)
- **Navbar**: Full menu (desktop/tablet), hamburger menu (mobile)
- **Section padding**: Reduce on smaller screens
- **Font sizes**: Scale down on mobile (e.g., h1: 48px → 32px)

## Functional Requirements

### Data Loading
1. All data loaded from JSON files on server-side
2. Use Next.js App Router for SSR (Server-Side Rendering)
3. Validate JSON data with Zod schemas
4. Handle missing data gracefully with default values or error states
5. Display loading states if needed

### Smooth Scrolling
1. Click navbar link → smooth scroll to section
2. Account for navbar height (offset)
3. Update active link in navbar based on scroll position
4. Scroll-to-top button appears after scrolling down 300px
5. Clicking scroll-to-top smoothly scrolls to page top

### Scroll Animations
1. Use Framer Motion for all animations
2. Trigger animations when element enters viewport
3. Animation types:
    - **Fade-in**: Opacity 0 → 1 (duration: 0.6s)
    - **Slide-up**: Translate Y 50px → 0 + fade-in (duration: 0.6s)
    - **Slide-in**: Translate X ±50px → 0 + fade-in (duration: 0.6s)
    - **Scale**: Scale 0.9 → 1 + fade-in (duration: 0.6s)
4. Stagger animations for grids:
    - Delay each item by 0.1s
    - Creates cascading effect
5. Animations only trigger once (not on every scroll)

### Project Modal
1. Click project card → modal opens with detailed view
2. Modal shows:
    - Larger image(s) or image gallery
    - Full description
    - Key features list
    - Challenges and solutions
    - Technologies used
    - Links to GitHub and live demo
3. Close modal: X button, ESC key, or click outside
4. Modal content scrollable if needed
5. Prevent body scroll when modal open

### Contact Section
1. Display contact info as cards or list
2. Email: Clickable mailto link
3. Phone: Clickable tel link (if provided)
4. Social links: Open in new tab
5. Copy-to-clipboard button for email:
    - Click → copy email to clipboard
    - Show "Copied!" message for 2 seconds
    - Use Material-UI Snackbar for feedback

### Mobile Menu
1. Hamburger icon on mobile screens
2. Click → drawer/menu slides in from side
3. Show all navigation links vertically
4. Click link → close menu, smooth scroll to section
5. Click outside or close icon → close menu

## Implementation Details

### Next.js Configuration
- **App Router**: Use app directory structure
- **TypeScript**: Strict mode enabled
- **Import alias**: @/* for src directory imports
- **ESLint**: Enabled with prettier integration
- **Image optimization**: Use next/image for all images

### Key npm Packages
```json
{
  "@mui/material": "^5.x.x",
  "@mui/icons-material": "^5.x.x",
  "next": "^14.x.x",
  "react": "^18.x.x",
  "framer-motion": "^10.x.x",
  "zod": "^3.x.x",
  "react-intersection-observer": "^9.x.x"
}
```

### Environment and Constants File

**File**: `src/constants/app-constants.ts`

```typescript
// Application metadata
export const APP_NAME = 'Portfolio';
export const APP_DESCRIPTION = 'Software Engineer Portfolio';

// File paths
export const DATA_DIR = '/data';
export const PROFILE_JSON = `${DATA_DIR}/profile.json`;
export const SKILLS_JSON = `${DATA_DIR}/skills.json`;
export const EXPERIENCE_JSON = `${DATA_DIR}/experience.json`;
export const PROJECTS_JSON = `${DATA_DIR}/projects.json`;
export const EDUCATION_JSON = `${DATA_DIR}/education.json`;
export const CONTACT_JSON = `${DATA_DIR}/contact.json`;

// Section IDs (for navigation)
export const SECTION_HERO = 'hero';
export const SECTION_SKILLS = 'skills';
export const SECTION_EXPERIENCE = 'experience';
export const SECTION_PROJECTS = 'projects';
export const SECTION_EDUCATION = 'education';
export const SECTION_CONTACT = 'contact';

// UI configuration
export const NAVBAR_HEIGHT = 64;
export const NAVBAR_HEIGHT_MOBILE = 56;
export const SECTION_PADDING_DESKTOP = 80;
export const SECTION_PADDING_MOBILE = 48;
export const MAX_CONTENT_WIDTH = 1200;
export const CARD_BORDER_RADIUS = 8;
export const SCROLL_TO_TOP_THRESHOLD = 300;

// Animation durations (ms)
export const ANIMATION_DURATION = 600;
export const STAGGER_DELAY = 100;
export const HOVER_TRANSITION = 300;

// Breakpoints (must match MUI theme)
export const BREAKPOINT_MOBILE = 600;
export const BREAKPOINT_TABLET = 960;

// Grid columns
export const GRID_COLUMNS_DESKTOP = 3;
export const GRID_COLUMNS_TABLET = 2;
export const GRID_COLUMNS_MOBILE = 1;

// Copy notification
export const COPY_SUCCESS_MESSAGE = 'Copied to clipboard!';
export const COPY_SUCCESS_DURATION = 2000;
```

### State Management
- Use React state (useState) for component-level state
- React Context for scroll position tracking (for active navbar link)
- No global state management library needed

### Data Loading and Validation
- Load JSON files server-side in Next.js page/layout
- Use Zod schemas to validate JSON structure
- Pass validated data as props to components
- Handle errors gracefully with try-catch

### Error Handling
- Wrap JSON file reading in try-catch blocks
- Show user-friendly error messages if data fails to load
- Provide default/fallback content if specific sections fail
- Log detailed errors to console for debugging

## Development Guidelines

### Component Structure

Every component should follow this pattern:

```typescript
/**
 * Brief description of what this component does.
 * Explain its role in the application.
 */

import React from 'react';
// Other imports...

// Props interface with JSDoc comments
interface ComponentNameProps {
  /** Description of prop */
  propName: string;
}

/**
 * Component implementation.
 * More detailed description if needed.
 */
export default function ComponentName({ propName }: ComponentNameProps) {
  // Component logic with comments

  return (
    // JSX with section comments
  );
}
```

### Utility Function Structure

```typescript
/**
 * File description: What utilities are in this file
 */

/**
 * Function description.
 * 
 * @param param1 - Description
 * @param param2 - Description
 * @returns Description of return value
 * 
 * @example
 * exampleFunction('input') // => 'output'
 */
export function exampleFunction(param1: string, param2: number): string {
  // Implementation with inline comments for complex logic
}
```

### File Header Comments

Every file must start with:

```typescript
/**
 * [Filename]: [Purpose]
 * 
 * [Detailed description of what this file does and how it fits
 * into the application architecture. Explain key responsibilities.]
 * 
 * Dependencies: [List major dependencies if any]
 * Used by: [Which components/files use this]
 */
```

## Build Process Documentation

### BUILD_LOG.md Requirements

**CRITICAL**: You MUST create and maintain a BUILD_LOG.md file in the root directory that documents the entire build process.

**File Location**: `/BUILD_LOG.md`

**Format**: The BUILD_LOG.md must include:

```markdown
# Build Log - Portfolio Website

## Build Information
- **Started**: [ISO 8601 timestamp with timezone - e.g., 2026-04-22T10:30:00-07:00]
- **Completed**: [ISO 8601 timestamp with timezone]
- **Total Duration**: [X minutes Y seconds]
- **Agent**: [AI Agent Name/Version]
- **Timezone**: [Timezone used - e.g., America/Los_Angeles (PST/PDT)]

## Build Timeline

### [HH:MM:SS] - Project Initialization
- Created Next.js project structure
- Configured TypeScript with strict mode
- Set up ESLint with Prettier integration
- Configured import aliases (@/*)

### [HH:MM:SS] - Dependencies Installation
- Installed @mui/material v[X.X.X]
- Installed @mui/icons-material v[X.X.X]
- Installed framer-motion v[X.X.X]
- Installed Zod v[X.X.X]
- Installed react-intersection-observer v[X.X.X]
- [List all other packages]

### [HH:MM:SS] - Constants and Types Setup
- Created app-constants.ts with all configuration constants
- Created portfolio.ts with TypeScript interfaces
- Created project.ts, experience.ts, education.ts types
- Defined color palette and design tokens

### [HH:MM:SS] - Theme Configuration
- Implemented theme-config.ts with MUI theme
- Configured Inter and Roboto Slab fonts
- Set up professional neutral color palette
- Configured responsive breakpoints

### [HH:MM:SS] - Data Structure Setup
- Created /data directory
- Created profile.json with placeholder data
- Created skills.json with placeholder data
- Created experience.json with placeholder data
- Created projects.json with placeholder data
- Created education.json with placeholder data
- Created contact.json with placeholder data

### [HH:MM:SS] - Utility Functions
- Created scroll-utils.ts for smooth scroll functionality
- Created animation-variants.ts for Framer Motion variants
- Created format-utils.ts for date/time formatting
- Added comprehensive JSDoc comments

### [HH:MM:SS] - Services Layer
- Created data-service.ts for JSON file loading
- Implemented Zod validation schemas
- Added error handling for file operations

### [HH:MM:SS] - Animation Components
- Created fade-in.tsx wrapper component
- Created slide-in.tsx wrapper component
- Created stagger-container.tsx for list animations
- Configured intersection observer triggers

### [HH:MM:SS] - Layout Components
- Created navbar.tsx with smooth scroll links
- Created mobile-menu.tsx with hamburger icon
- Created scroll-to-top.tsx button component
- Created background-shapes.tsx for decorative elements

### [HH:MM:SS] - Section Components
- Created hero-section.tsx with introduction
- Created skills-section.tsx with category grid
- Created experience-section.tsx with timeline/cards
- Created projects-section.tsx with grid layout
- Created education-section.tsx with cards
- Created contact-section.tsx with info display

### [HH:MM:SS] - Project Components
- Created project-card.tsx with image and description
- Created project-modal.tsx for detailed view
- Created project-grid.tsx with responsive layout
- Implemented hover effects and animations

### [HH:MM:SS] - Experience Components
- Created experience-card.tsx with timeline style
- Implemented date formatting (Present for current)
- Added technology tags display

### [HH:MM:SS] - Education Components
- Created education-card.tsx with degree info
- Implemented GPA and honors display
- Added relevant coursework section

### [HH:MM:SS] - Skills Components
- Created skill-category.tsx for grouping
- Created skill-chip.tsx for individual skills
- Created skills-grid.tsx with responsive columns

### [HH:MM:SS] - Contact Components
- Created contact-card.tsx for info display
- Created social-links.tsx with icons
- Created copy-button.tsx for email copying
- Implemented clipboard API with Snackbar feedback

### [HH:MM:SS] - Page Implementation
- Created layout.tsx with theme provider
- Created page.tsx with all sections
- Integrated smooth scroll navigation
- Added scroll position tracking for active navbar link

### [HH:MM:SS] - Styling
- Created globals.css with base styles
- Applied Material-UI styling to all components
- Implemented responsive breakpoints
- Added geometric background shapes with low opacity
- Styled all cards with shadows and hover effects

### [HH:MM:SS] - Animations Implementation
- Added fade-in animations to all sections
- Implemented slide-in animations for cards
- Added stagger animations to grids
- Configured scroll triggers with intersection observer
- Added hover animations to cards and buttons

### [HH:MM:SS] - Validation
- Created Zod schemas for all JSON data
- Validated profile data structure
- Validated skills, experience, projects data
- Validated education and contact data
- Added error handling for invalid data

### [HH:MM:SS] - Responsive Design
- Tested layout on mobile (320px - 599px)
- Tested layout on tablet (600px - 959px)
- Tested layout on desktop (960px+)
- Verified hamburger menu on mobile
- Verified grid column changes at breakpoints
- Verified font size scaling

### [HH:MM:SS] - Testing and Refinement
- Tested smooth scrolling to all sections
- Verified navbar active link highlighting
- Tested project modal open/close
- Verified email copy-to-clipboard functionality
- Tested scroll-to-top button appearance and function
- Verified all animations trigger on scroll
- Tested mobile menu open/close
- Verified geometric shapes don't interfere with content

### [HH:MM:SS] - Final Checks
- Verified all files follow kebab-case naming
- Confirmed all functions use camelCase
- Checked all constants use UPPER_SNAKE_CASE
- Verified no hardcoded values
- Confirmed all files have header comments
- Verified all functions have JSDoc comments
- Checked code is properly segregated (files as short as possible)

## File Structure Created
[List all files and directories created with their purposes]

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx - Root layout with theme provider
│   │   ├── page.tsx - Main portfolio page with all sections
│   │   └── globals.css - Global styles and base CSS
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx - Fixed navbar with smooth scroll
│   │   │   ├── mobile-menu.tsx - Hamburger menu for mobile
│   │   │   ├── scroll-to-top.tsx - Scroll to top button
│   │   │   └── background-shapes.tsx - Geometric shapes
│   │   ├── sections/
│   │   │   ├── hero-section.tsx - Introduction section
│   │   │   ├── skills-section.tsx - Skills grid
│   │   │   ├── experience-section.tsx - Work experience
│   │   │   ├── projects-section.tsx - Projects grid
│   │   │   ├── education-section.tsx - Education cards
│   │   │   └── contact-section.tsx - Contact info
│   │   ├── projects/
│   │   │   ├── project-card.tsx - Project card component
│   │   │   ├── project-modal.tsx - Detailed project modal
│   │   │   └── project-grid.tsx - Responsive grid
│   │   ├── experience/
│   │   │   └── experience-card.tsx - Experience card
│   │   ├── education/
│   │   │   └── education-card.tsx - Education card
│   │   ├── skills/
│   │   │   ├── skill-category.tsx - Skill grouping
│   │   │   ├── skill-chip.tsx - Individual skill badge
│   │   │   └── skills-grid.tsx - Grid layout
│   │   ├── contact/
│   │   │   ├── contact-card.tsx - Contact info card
│   │   │   ├── social-links.tsx - Social media links
│   │   │   └── copy-button.tsx - Copy to clipboard
│   │   └── animations/
│   │       ├── fade-in.tsx - Fade-in wrapper
│   │       ├── slide-in.tsx - Slide-in wrapper
│   │       └── stagger-container.tsx - Stagger wrapper
│   ├── lib/
│   │   └── utils/
│   │       ├── scroll-utils.ts - Smooth scroll functions
│   │       ├── animation-variants.ts - Framer Motion variants
│   │       └── format-utils.ts - Formatting utilities
│   ├── services/
│   │   └── data-service.ts - JSON data loading
│   ├── types/
│   │   ├── portfolio.ts - Main interfaces
│   │   ├── project.ts - Project types
│   │   ├── experience.ts - Experience types
│   │   └── education.ts - Education types
│   ├── constants/
│   │   └── app-constants.ts - All constants
│   └── theme/
│       └── theme-config.ts - MUI theme config
├── data/
│   ├── profile.json - Personal info
│   ├── skills.json - Skills data
│   ├── experience.json - Experience data
│   ├── projects.json - Projects data
│   ├── education.json - Education data
│   └── contact.json - Contact info
├── public/
│   └── images/
│       ├── projects/ - Project screenshots
│       └── profile.jpg - Profile photo (optional)
├── package.json - Dependencies and scripts
├── tsconfig.json - TypeScript config
├── next.config.js - Next.js config
├── .eslintrc.json - ESLint config
└── BUILD_LOG.md - This file
```

## Configuration Files
- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript strict mode, path aliases
- **next.config.js** - Next.js configuration, image domains
- **.eslintrc.json** - ESLint rules with Prettier

## Issues Encountered and Resolutions
[Document any issues that came up during the build and how they were resolved]

Example:
- **Issue**: Smooth scrolling not accounting for navbar height
  - **Resolution**: Added offset constant and scroll calculation in scroll-utils.ts

## Final Status
- ✅ All components created and working
- ✅ Smooth scrolling navigation functional
- ✅ Scroll-triggered animations working with Framer Motion
- ✅ Responsive layout tested (mobile, tablet, desktop)
- ✅ Project modal open/close working
- ✅ Copy-to-clipboard for email functional
- ✅ Data loaded from JSON files with validation
- ✅ Geometric background shapes implemented
- ✅ All code quality standards met
- ✅ Comments and documentation complete
- ✅ Files properly segregated and as short as possible

## Next Steps for User
1. Navigate to the project directory: `cd portfolio-website`
2. Install dependencies: `npm install`
3. **IMPORTANT**: Update JSON files in `/data/` directory with your personal information:
   - `profile.json` - Your name, titles, tagline
   - `skills.json` - Your technical skills
   - `experience.json` - Your work experience
   - `projects.json` - Your projects (add images to `/public/images/projects/`)
   - `education.json` - Your education
   - `contact.json` - Your contact information
4. (Optional) Add your profile photo to `/public/images/profile.jpg`
5. Run development server: `npm run dev`
6. Open browser to: http://localhost:3000
7. Test all sections and interactions
8. Customize colors in `theme-config.ts` if desired
9. Build for production: `npm run build`
10. Deploy (e.g., Vercel, Netlify)

## Notes
- All JSON files contain placeholder data - user must update with real information
- Project images should be added to `/public/images/projects/` and referenced in projects.json
- Colors can be customized in `src/theme/theme-config.ts`
- Geometric shapes can be adjusted in `background-shapes.tsx`
- Animation timing can be adjusted in `app-constants.ts`

## Performance Considerations
- Used Next.js Image component for optimized images
- Animations trigger once per element (not on every scroll)
- Geometric shapes are static (no animation) for performance
- Server-side rendering for fast initial load
- No heavy external dependencies

## Accessibility Considerations
- Semantic HTML elements used throughout
- ARIA labels added to navigation and buttons
- Keyboard navigation supported
- Sufficient color contrast ratios
- Focus states visible on all interactive elements
```

**Requirements for BUILD_LOG.md**:
- Use ISO 8601 timestamps with timezone (e.g., "2026-04-22T14:30:00-07:00")
- Include timezone information in Build Information section
- Include timestamps for each major step in HH:MM:SS format
- Document every file created with its purpose
- List all dependencies with version numbers
- Document any issues encountered and how they were resolved
- Provide clear next steps for the user
- Update in real-time as the build progresses
- Must be human-readable and informative

## Testing the Application

### Manual Testing Checklist
1. **Hero section**: Verify name, titles, tagline display correctly
2. **Smooth scroll**: Click navbar links and verify smooth scroll to sections
3. **Active navbar**: Scroll manually and verify active link changes
4. **Skills grid**: Verify responsive columns (4, 3, 2 based on screen size)
5. **Experience cards**: Verify dates format correctly, "Present" for current jobs
6. **Projects grid**: Verify responsive columns (3, 2, 1 based on screen size)
7. **Project modal**: Click card, verify modal opens with full details
8. **Education cards**: Verify all education info displays
9. **Contact section**: Verify all contact info and social links
10. **Copy email**: Click copy button, verify "Copied!" message appears
11. **Scroll-to-top**: Scroll down, verify button appears and works
12. **Mobile menu**: On mobile, verify hamburger menu opens/closes
13. **Animations**: Scroll page and verify all sections animate in
14. **Background shapes**: Verify shapes appear and don't block content
15. **Responsive**: Test on mobile, tablet, desktop sizes
16. **Data loading**: Verify all JSON data loads and displays

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Success Criteria

The application is complete when:
- ✅ All sections display with correct data from JSON files
- ✅ Smooth scrolling works for all navigation links
- ✅ Active navbar link updates based on scroll position
- ✅ Scroll-triggered animations work for all sections
- ✅ Project modal opens and closes correctly
- ✅ Copy-to-clipboard works for email
- ✅ Responsive layout works on all screen sizes (mobile, tablet, desktop)
- ✅ Mobile hamburger menu works
- ✅ Scroll-to-top button appears and works
- ✅ Geometric background shapes display correctly
- ✅ UI matches design specifications (colors, typography, spacing)
- ✅ All code follows naming conventions and quality standards
- ✅ Every file and function has detailed comments
- ✅ Files are as short as possible and properly segregated
- ✅ No hardcoded values (all in constants file)
- ✅ Data validation works with Zod
- ✅ Material-UI components used throughout
- ✅ Framer Motion animations smooth and performant
- ✅ Folder structure is clean and organized
- ✅ BUILD_LOG.md is complete and accurate with timezone

## Additional Notes

- **Development environment**: Local development (deployment instructions provided for Vercel/Netlify)
- **Browser compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Optimized for smooth animations and fast load times
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **File size**: Keep component files as short as possible and properly segregated
- **Comments**: Aim for 20-30% comment density in code
- **Build documentation**: BUILD_LOG.md must be created and updated throughout the build process with timezone information
- **Customization**: User must update JSON files with personal data before deployment
- **Images**: User must add project screenshots and optional profile photo

---

