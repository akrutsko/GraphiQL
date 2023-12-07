/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    css: true,
    coverage: {
      enabled: true,
      all: true,
      include: ['src'],
      exclude: ['src/main.tsx', 'src/app', 'src/tests', '**/*.d.ts'],
      provider: 'v8',
      reporter: ['text'],
      thresholds: {
        statements: 80,
      },
    },
    watch: false,
  },
});
