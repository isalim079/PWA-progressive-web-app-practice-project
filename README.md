# 🚀 PWA Practice Project

> A modern Progressive Web Application built with React, Vite, and Tailwind CSS featuring responsive design, routing, and API integration.

## ✨ Features

- 📱 **Progressive Web App** - Works offline and can be installed
- ⚡ **Fast Development** - Powered by Vite with hot reload
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 🧭 **Client-side Routing** - React Router with Home, About, and Users pages
- 🌐 **API Integration** - Fetches data from JSONPlaceholder API with pagination
- 📱 **Mobile Responsive** - Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **PWA**: Vite PWA Plugin
- **API**: JSONPlaceholder (fake REST API)
- **Styling**: Tailwind CSS with responsive utilities

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo-url>
   cd pwa-practice-project
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## � PWA Setup Guide

### �📦 Step 1: Install PWA Plugin

```bash
npm install vite-plugin-pwa --save-dev
```

### ⚙️ Step 2: Configure Vite PWA Plugin

Create or update your `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'PWA Practice Project',
        short_name: 'PWAPractice',
        description: 'A modern PWA built with React, Vite, and Tailwind CSS',
        theme_color: '#3B82F6',
        background_color: '#F9FAFB',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

### 🖼️ Step 3: Add PWA Icons

Create the following icon files in the `public/` folder:

```
public/
├── pwa-192x192.png    # 192x192 pixels
├── pwa-512x512.png    # 512x512 pixels
├── favicon.svg        # (optional)
└── robots.txt         # (optional)
```

> **Tip**: Use tools like [PWA Asset Generator](https://github.com/pwa-builder/pwa-starter/tree/main/docs) to create all required icon sizes.

### 🧪 Step 4: Build & Test PWA

```bash
# Build for production
npm run build

# Preview the build locally
npx serve dist
```

## 📄 Pages Overview

### 🏠 Home Page
- Welcome message and navigation
- Feature overview cards
- Quick navigation links

### 📋 About Page  
- Project information
- Technology stack details
- Contact information

### 👥 Users Page
- Fetches users from JSONPlaceholder API
- Pagination support (10 users per page)
- Filter by active/inactive status
- Responsive table design

## 🎨 Styling Guide

The project uses **Tailwind CSS** with responsive design patterns:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+) 
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

## 🔧 Development Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📱 Mobile Features

- Responsive navigation with mobile hamburger menu
- Touch-friendly buttons and cards
- Optimized layouts for all screen sizes
- PWA installation prompt on mobile devices

## 🌐 API Integration

The Users page demonstrates API integration with:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Features**: Pagination, loading states, error handling
- **Data**: User profiles with names, emails, and contact info

## 📈 Performance

- ⚡ Fast loading with Vite's optimized bundling
- 📱 Mobile-first responsive design
- 🔄 Efficient API calls with pagination
- 💾 Service worker caching for offline support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  
**Built with ❤️ using React + Vite + Tailwind CSS**

[🚀 Live Demo](#) | [📖 Documentation](#) | [🐛 Report Bug](#)

</div>
