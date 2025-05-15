
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  assetsInclude: ['**/*.lottie'], // ✅ This line allows Vite to treat .lottie files as assets
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PawClix",
        short_name: "PawClix",
        description: "Palīdzam apvienot pazudušos un atrastos mājdzīvniekus Latvijā. Atrodi savu mīluli, sazinies ar patversmēm un saņem padomus, kā rīkoties.",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "logo192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "logo512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Fix: increase file size limit to 5MB
      },
    })
  ]
});

