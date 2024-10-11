import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Correct import for static copy

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*.png', // Source path for assets
          dest: 'assets' // Destination folder where assets will be copied
        }
      ]
    })
  ],
  assetsInclude: ['**/*.png'], // Ensure PNG files are included as assets
});
