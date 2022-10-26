import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vueJsx(), vue()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      external: ["vue", "utils"],
      output: {
        exports: "named",
        // 全局变量名称，以替换外部引入
        globals: {
          vue: "Vue",
          "@console-ui/utils": "cutils",
        },
      },
    },
    lib: {
      entry: "../packages/ui/src/index.ts",
      formats: ["umd", "cjs", "es"],
      name: "consoleui",
    },
  },
});
