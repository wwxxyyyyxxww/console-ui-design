import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        'utils',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          'utils': 'yanyuUtils',
        },
      },
    },
    lib: {
      entry: 'src/style.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'uiDesign',
    },
  },
})
