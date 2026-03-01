# Muhammad Khamis Armaya'u - Portfolio

A modern, professional tech portfolio showcasing web development and cybersecurity expertise.

![Portfolio Preview](./public/profile-enhanced.jpg)

## 🚀 Live Demo

**[View Live Portfolio](https://elkayslense.github.io)**

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contact](#contact)

## 👤 About

This portfolio represents **Muhammad Khamis Armaya'u** as a serious, high-potential tech professional specializing in:

- **Full-Stack Web Development** - React, Node.js, MongoDB, PostgreSQL
- **Cybersecurity** - OWASP, penetration testing, secure coding practices
- **Creative Technology** - Photography, UI/UX design awareness

### Contact Information

- **Email:** elkhamis1234@gmail.com
- **Phone:** +234 812 024 8809
- **GitHub:** [github.com/elkayslense](https://github.com/elkayslense)
- **Twitter/X:** [x.com/elkayslense](https://x.com/elkayslense)
- **Instagram:** [instagram.com/elkayslense_](https://instagram.com/elkayslense_)

## 🛠 Tech Stack

### Core Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS 3.4, shadcn/ui |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Build Tool** | Vite |

### Why This Stack?

- **React + TypeScript**: Type-safe, component-based architecture for maintainable code
- **Vite**: Lightning-fast development and optimized production builds
- **Tailwind CSS**: Utility-first styling for rapid, consistent UI development
- **shadcn/ui**: High-quality, accessible UI components
- **Framer Motion**: Smooth, performant animations

## ✨ Features

### Design

- 🌙 **Dark-mode first** - Premium, modern dark theme
- 📱 **Fully responsive** - Optimized for all devices
- 🎨 **Smooth animations** - Fade, slide, stagger effects with Framer Motion
- ♿ **Accessibility** - ARIA labels, keyboard navigation, focus management
- 🎯 **Clean typography** - Inter font family with excellent readability

### Sections

1. **Hero** - Eye-catching introduction with animated elements
2. **About Me** - Professional narrative highlighting skills and passion
3. **Skills & Tech Stack** - Interactive skill visualization with filtering
4. **Projects** - Detailed case studies with problem/solution/outcome format
5. **Experience & Education** - Professional journey and academic background
6. **Certifications** - Professional credentials and achievements
7. **Contact** - Functional contact form with social links

### Performance

- ⚡ Optimized builds with tree-shaking
- 🖼️ Lazy loading for images
- 📦 Code splitting
- 🎯 90+ Lighthouse score

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-enhanced.jpg    # Enhanced profile image
│   └── resume.pdf              # Downloadable resume
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   └── Navigation.tsx      # Fixed navigation header
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills & tech stack
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Experience.tsx      # Work experience & education
│   │   ├── Certifications.tsx  # Certifications & achievements
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   ├── data/
│   │   └── portfolio.ts        # All portfolio data
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App-specific styles
│   ├── index.css               # Global styles & Tailwind
│   └── main.tsx                # Entry point
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/elkayslense/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📦 Deployment

### GitHub Pages (Recommended)

1. **Update `vite.config.ts`**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

2. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

3. **Add scripts to `package.json`**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

Your portfolio will be live at `https://elkayslense.github.io/portfolio/`

### Vercel

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

### Netlify

1. **Build the project**

```bash
npm run build
```

2. **Drag and drop** the `dist/` folder to Netlify, or use the Netlify CLI.

## 🎨 Customization

### Updating Personal Information

Edit `src/data/portfolio.ts` to update:

- Personal details (name, email, phone, social links)
- About me content
- Projects
- Skills
- Experience
- Education
- Certifications

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  cyan: {
    DEFAULT: "#22d3ee",
    // ... shades
  },
  purple: {
    DEFAULT: "#8b5cf6",
    // ... shades
  },
}
```

### Adding New Projects

Add to the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  summary: "Brief description",
  problemStatement: "The problem...",
  solutionApproach: "The solution...",
  technologies: ["React", "Node.js"],
  outcome: "The results...",
  githubUrl: "https://github.com/...",
  liveUrl: "https://demo.com"
}
```

### Updating Profile Image

1. Replace `public/profile-enhanced.jpg` with your new image
2. Keep the same filename or update references in `src/sections/Hero.tsx`

## 🔧 Environment Variables

Create a `.env` file for environment-specific settings:

```env
# Contact form endpoint (optional)
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For any inquiries or feedback, please reach out:

- **Email:** elkhamis1234@gmail.com
- **Twitter:** [@elkayslense](https://x.com/elkayslense)

---

**Built with ❤️ by Muhammad Khamis Armaya'u**

*Last updated: March 2026*
