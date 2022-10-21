import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    // 支持原生 ES 模块、原生 ESM 动态导入 和 import.meta 的浏览器。
    target: "modules",
    // 指定输出路径
    outDir: "es",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      external: ["vue", "@yanyu-fe/utils"],
      input: ["src/index.ts"],
      output: [
        // esm
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
        // cjs
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
      ],
    },
    // 这一块是不会被使用的
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
  },
  plugins: [vue(), vueJsx(), dts()],
});
