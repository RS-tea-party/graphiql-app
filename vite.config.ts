/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: ['./setupTests.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        'src/dto/types.ts',
        'src/vite-env.d.ts',
        'src/main.tsx',
        '.eslintrc.cjs',
        '.prettierrc.cjs',
        'postcss.config.js',
        'tailwind.config.js',
        'src/components/ErrorBoundary/ErrorBoundary.tsx',
      ],
    },
  },
});
