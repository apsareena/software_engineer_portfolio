<div align="center">

# ✨ Dev Portfolio — Free & Open Source

**A beautiful, animated, fully responsive software engineer portfolio — built with Next.js 16, Material-UI, and Framer Motion.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![MUI](https://img.shields.io/badge/MUI-v9-007FFF?logo=mui&logoColor=white)](https://mui.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> 🎁 **100% free to use.** Fork it, customise it, make it yours.
> No paid templates. No subscriptions. No watermarks.

---

## 📺 Demo

<!-- ================================================================ -->
<!--  REPLACE the block below with your own video / GIF / screenshot  -->
<!--                                                                  -->
<!--  Option A — YouTube thumbnail that links to your video:          -->
<!--  [![Demo](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID) -->
<!--                                                                  -->
<!--  Option B — Drop a screen-recording GIF into /public/ and link:  -->
<!--  ![Demo](./public/demo.gif)                                      -->
<!-- ================================================================ -->

> 🎬 **Video coming soon** — a full walkthrough will be added here.
> In the meantime, clone the repo and run it locally to see it in action!

</div>

---

## 🌟 Features

- **6 complete sections** — Hero, Skills, Experience, Projects, Education, Contact
- **Smooth scroll navigation** with active-link highlighting
- **Scroll-triggered animations** powered by Framer Motion (fade-in, slide-in, stagger)
- **Responsive layout** — looks great on mobile, tablet, and desktop
- **Project modal** — click any project card for a detailed full-screen view
- **Copy-to-clipboard** email button with toast notification
- **Mobile hamburger menu** with smooth drawer
- **Geometric background shapes** for visual depth
- **Data-driven** — edit 6 JSON files and your entire site updates instantly
- **Zero hardcoded values** — everything lives in constants and data files
- **TypeScript strict mode** + **Zod validation** on all data

---

## 🖼️ Screenshots

<!-- ================================================================ -->
<!--  Add your own screenshots below after filling in your data:      -->
<!--  ![Hero](./public/screenshots/hero.png)                          -->
<!--  ![Projects](./public/screenshots/projects.png)                  -->
<!-- ================================================================ -->

> 📸 Add screenshots to `public/screenshots/` and link them here.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) | 16 |
| Language | [TypeScript](https://www.typescriptlang.org) | 5 |
| UI Library | [Material-UI (MUI)](https://mui.com) | 9 |
| Animations | [Framer Motion](https://www.framer.com/motion/) | 12 |
| Validation | [Zod](https://zod.dev) | 3 |
| Scroll Triggers | [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | 9 |
| Styling | Emotion (via MUI) | 11 |
| Linting | ESLint + Prettier | — |

---

## ⚙️ Prerequisites

Before running the project, make sure you have the following installed.

### 1. Node.js & npm

Node.js is the JavaScript runtime — npm is the package manager that comes bundled with it.

**Check if already installed:**
```bash
node --version   # should print v18.x or higher
npm --version    # should print 9.x or higher
```

**Install Node.js:**

| OS | How to install |
|---|---|
| **Windows** | Download the **LTS** installer from [nodejs.org](https://nodejs.org) and run it |
| **macOS** | `brew install node` (requires [Homebrew](https://brew.sh)) or download from [nodejs.org](https://nodejs.org) |
| **Linux (Ubuntu/Debian)** | `sudo apt update && sudo apt install nodejs npm` |
| **Any OS** | Use [nvm](https://github.com/nvm-sh/nvm) — the Node Version Manager *(recommended)* |

> ✅ Recommended: **Node.js 18 LTS** or higher.

---

### 2. Git

Git is used to clone (download) the repository.

**Check if already installed:**
```bash
git --version
```

**Install Git:**

| OS | How to install |
|---|---|
| **Windows** | Download from [git-scm.com](https://git-scm.com/download/win) |
| **macOS** | `brew install git` or it comes pre-installed with Xcode Command Line Tools |
| **Linux** | `sudo apt install git` |

---

## 🚀 Quick Start

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website
```

> Replace `YOUR_USERNAME/portfolio-website` with your actual GitHub repo URL.

---

### Step 2 — Install dependencies

```bash
npm install
```

This downloads all required packages (Next.js, MUI, Framer Motion, Zod, etc.) from npm.
It may take 1–2 minutes on the first run.

---

### Step 3 — Personalise your data

All content is driven by **6 JSON files** inside the `/data/` folder.
**You only need to edit these files** — no digging through components required.

```
data/
├── profile.json      ← Your name, titles, tagline, CTA button labels
├── skills.json       ← Your technical skills grouped by category
├── experience.json   ← Your work history (company, role, dates, bullets)
├── projects.json     ← Your projects (title, description, tech, links, image)
├── education.json    ← Your degrees, GPA, coursework
└── contact.json      ← Your email, GitHub, LinkedIn, Twitter, location
```

Each file contains placeholder data — open it in any text editor and swap in your details.

**Adding project images:**
1. Drop your screenshots into `public/images/projects/` (`.png`, `.jpg`, or `.webp`)
2. Reference them in `data/projects.json` as `"/images/projects/your-image.png"`

**Adding a profile photo (optional):**
Place your photo at `public/images/profile.jpg` and set `"profileImage": "/images/profile.jpg"` in `data/profile.json`.

---

### Step 4 — Start the dev server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.
The site hot-reloads on every file save — no restart needed.

---

## 📦 Available Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server at `localhost:3000` |
| `npm run build` | Build an optimised production bundle |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 📁 Project Structure

```
portfolio-website/
├── data/                        ← ✏️  Edit these JSON files with your info
│   ├── profile.json
│   ├── skills.json
│   ├── experience.json
│   ├── projects.json
│   ├── education.json
│   └── contact.json
├── public/
│   └── images/
│       ├── projects/            ← Add your project screenshots here
│       └── profile.jpg          ← Optional profile photo
├── src/
│   ├── app/                     ← Next.js App Router (layout, page)
│   ├── components/
│   │   ├── animations/          ← Fade-in, slide-in, stagger wrappers
│   │   ├── contact/             ← Contact cards, social links, copy button
│   │   ├── education/           ← Education cards
│   │   ├── experience/          ← Experience cards
│   │   ├── layout/              ← Navbar, mobile menu, background shapes, scroll-to-top
│   │   ├── projects/            ← Project cards, grid, and detail modal
│   │   ├── sections/            ← Full-page sections (Hero, Skills, Experience …)
│   │   └── skills/              ← Skill chips and category grid
│   ├── constants/               ← All app constants (colours, sizes, IDs)
│   ├── lib/utils/               ← Scroll, animation, and formatting utilities
│   ├── services/                ← JSON data loader with Zod validation
│   ├── theme/                   ← MUI theme (colours, typography, breakpoints)
│   └── types/                   ← TypeScript interfaces for all data
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Customising the Theme

Open `src/theme/theme-config.ts` to adjust:

| Setting | Default value |
|---|---|
| Primary colour | `#2C3E50` (dark blue-grey) |
| Accent / CTA colour | `#1ABC9C` (teal) |
| Secondary colour | `#3498DB` (blue) |
| Body font | Inter |
| Heading font | Roboto Slab |

All colour tokens are also exported from `src/constants/app-constants.ts` so you only need to change them in one place.

---

## 🌐 Deploying for Free

### ▲ Vercel *(recommended — zero config)*

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Click **Deploy** — Vercel auto-detects Next.js and does everything else

### Netlify

1. Push your repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → Import from Git
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `.next`
5. Click **Deploy site**

### Other platforms

Any platform supporting Node.js 18+ works. Run `npm run build` then `npm start`.

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. **Fork** the repo
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push**: `git push origin feature/my-feature`
5. **Open a Pull Request**

---

## 📄 License

Released under the **MIT License** — use it for anything, including commercial projects.
See [LICENSE](./LICENSE) for the full text.

---

<div align="center">

If this helped you, drop a ⭐ on the repo — it means a lot!

Made with ❤️ and way too much ☕

</div>

