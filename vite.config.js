import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/liquid-shader-ui/',
  server: {
    port: 3000,
    open: true
  }
});
