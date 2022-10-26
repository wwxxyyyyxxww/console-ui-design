import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        '@console-ui/utils',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          "@console-ui/utils": "cutils",
        },
      },
    },
    lib: {
      entry: '../packages/ui/src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'consoleui',
    },
  },
})
