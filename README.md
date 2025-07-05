# PWA practice project

📦 Step 1: Install Plugin
npm install vite-plugin-pwa --save-dev

⚙️ Step 2: Configure the Plugin in vite.config.ts or vite.config.js

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate', // optional: auto update service worker
includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'], // optional
manifest: {
name: 'My Vite PWA',
short_name: 'VitePWA',
description: 'My Progressive Web App built with Vite and React',
theme_color: '#ffffff',
background_color: '#ffffff',
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

🧾 Step 3: Add Manifest Icons
Put these icon images in the public/ folder:

public/pwa-192x192.png

public/pwa-512x512.png

Also, add a robots.txt or favicon.svg if you want (not mandatory).

🧪 Step 4: Build & Preview
To test your PWA:

npm run build
npx serve dist
