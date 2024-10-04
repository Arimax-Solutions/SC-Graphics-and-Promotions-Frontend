import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Automatically split vendor libraries into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Create a separate chunk for each library in node_modules
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    // Optional: Adjust the chunk size warning limit to avoid warnings
    chunkSizeWarningLimit: 1000, // Increase this limit if you still see warnings for large chunks
  },
});
