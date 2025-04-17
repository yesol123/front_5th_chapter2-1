import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        basic: path.resolve(__dirname, 'index.html'),
        advanced: path.resolve(__dirname, 'index.advanced.html'),
      },
    },
  },
  server: {
    // 기본 열리는 페이지는 원하는 걸로 지정
    open: '/index.html',
  },
});
