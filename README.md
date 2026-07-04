# Gaurav's Portfolio Website

A modern, high-fidelity, and premium portfolio website custom-engineered for **Gaurav**, a Computer Science Engineering student at Chitkara University specializing in **Native iOS Development (Swift/UIKit)** and **Backend Engineering**.

This project is built from scratch utilizing standard React 19, TypeScript, and Tailwind CSS v4. It features smooth scrolling, bento-grid layouts, responsive components, custom magnetic tracking physics, and an interactive digital resume sheet.

---

## 🚀 Key Features

*   **Premium Visual Layout**: Minimalist dark visual palette (deep slate and carbon accents) inspired by the design languages of Apple, Linear, and Vercel.
*   **Highly Interactive Components**:
    *   **Custom Follower Cursor**: Smooth spring-animated tracking physics with dynamic size variations on button and link hovers.
    *   **Atmospheric Ambient Glowing Backdrops**: Organic, floating gradient blurs that add soft depth without hurting rendering performance.
    *   **Magnetic Quick-Actions**: Interactive buttons that pull subtly towards the cursor on hover proximity.
    *   **Startup Loading Sequence**: A technical, organic percent loader matching core modules sequentially before launching the site.
*   **Fully Component-Driven Pages**: Separate files for clean organization, avoiding duplicate code and maintaining full TypeScript type safety.
*   **Responsive Fluid Grid**: Adapts smoothly to mobile, tablet, laptop, and ultra-wide screens with touch-safe tap targets.
*   **Digital Resume Sheet**: Built-in responsive curriculum vitae allowing recruiters to print, view, or export to PDF directly within the applet.

---

## 📁 Complete Folder Structure

```text
/
├── .env.example            # Environment variables placeholder
├── .gitignore              # Files ignored by git tracker
├── index.html              # HTML master entry point
├── metadata.json           # Application title & permissions
├── package.json            # Installed npm packages and script keys
├── tsconfig.json           # TypeScript compilation configuration
├── vite.config.ts          # Vite asset server settings
└── src/
    ├── main.tsx            # Main react mounting hub
    ├── index.css           # Global typography, scrollbars, and Tailwind v4 theme
    ├── App.tsx             # Master layout, state triggers, and routing wrapper
    ├── data/
    │   └── portfolioData.ts # Data-driven portfolio content (Bio, Skills, Projects, etc.)
    └── components/
    │   ├── CustomCursor.tsx # Spring-animated follower cursor
    │   ├── GlowBg.tsx       # Shifting organic fluid gradient blurs
    │   ├── MagneticButton.tsx # Proximity interactive magnetic effect wrapper
    │   ├── ScrollProgress.tsx # Horizontal page-scroll tracking progress indicator
    │   ├── LoadingScreen.tsx # Interactive technical percentage loader
    │   ├── ResumeModal.tsx  # Interactive print-friendly digital curriculum vitae modal
    │   ├── Navbar.tsx       # Glassmorphic sticky header with active scroll indices
    │   └── Footer.tsx       # Elegant minimal footer with direct scroll-to-top index
    └── sections/
        ├── Hero.tsx         # Headline, custom typewriter animation, and monograph avatar
        ├── About.tsx        # Bento-grid personal statement, focus list, and education summary
        ├── Skills.tsx       # Categorized capability matrix with hover-glow highlights
        ├── Projects.tsx     # Ongoing GyanSetu build, Foodly showcase, and specialized "Coming Soon" iOS card
        ├── Achievements.tsx # Milestones, competitive stats, and certifications
        ├── EducationSection.tsx # Detailed Chitkara timeline with course checklists
        └── Contact.tsx      # Contact detail block, copy tools, and active form validation with success state
```

---

## 🛠️ Local Development Guide

### 1. Installation Commands

Clone your repository, navigate to the root directory, and install dependencies using your preferred package manager (npm or pnpm):

```bash
# Using standard npm
npm install

# Or using pnpm
pnpm install
```

### 2. Run Dev Server

Boot the local development server on the default portfolio port (3000):

```bash
# Using standard npm
npm run dev

# Or using pnpm
pnpm run dev
```

*Your application will immediately be accessible at [http://localhost:3000](http://localhost:3000).*

### 3. Build & Compile

Validate type-safety and bundle the application into highly optimized static production files inside the `/dist` directory:

```bash
# Using standard npm
npm run build

# Or using pnpm
pnpm run build
```

---

## ☁️ Vercel Deployment Instructions

Since this is a client-side Single Page Application (SPA), deploying it to Vercel is instantaneous and completely free:

### Option A: Using the Vercel Dashboard (Easiest)

1. Push your code repository to your GitHub account (e.g., `https://github.com/gauravu82274927/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New"** ➜ **"Project"**.
3. Import your portfolio repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Leave the default configurations as they are:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
6. Click **"Deploy"**. Your site is live on a custom `.vercel.app` subdomain in under a minute!

### Option B: Using Vercel CLI (Quick Terminal Deploy)

1. Install the global Vercel CLI tool:
   ```bash
   npm install -g vercel
   ```
2. Log in and initialize the project:
   ```bash
   vercel login
   vercel
   ```
3. Follow the terminal prompts to link the project, keeping default parameters.
4. To release a final production build:
   ```bash
   vercel --prod
   ```

---

## 💎 Design Concept Notes

The portfolio leverages design techniques that align with high-end designer portfolios:
*   **Typography Rhythm**: Set using a balanced pairing of **Plus Jakarta Sans** for readable content, **Space Grotesk** for display headlines, and **JetBrains Mono** for numerical statistics and technical metadata.
*   **Tactile Feedback**: Every interactive card, button, and text field responds dynamically to user touch or hover inputs with custom transitions, spring physics, and organic backglows.
