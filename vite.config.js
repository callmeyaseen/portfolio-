import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(), // Make sure React plugin is included if you're using React
    staticCopy({
      targets: [
        {
          src: 'src/assets/*.png',
          dest: 'assets' // Destination folder
        }
      ]
    })
  ],
  assetsInclude: ['**/*.png'], // This ensures that PNG files are included
});
