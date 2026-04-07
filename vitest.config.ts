import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['default', 'html'],
    outputFile: {
      html: './test-report/index.html'
    },
    setupFiles: ['./src/test-setup.ts'],
    coverage: {

      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage'
    }
  }
});