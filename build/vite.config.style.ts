import { defineConfig } from "vite";
import fg from "fast-glob";
// 处理组件内的index.ts
const files = fg.sync("../packages/ui/**/style/index.ts", {
  cwd: process.cwd(),
  onlyFiles: true,
});
console.log(files,'files')
export default defineConfig({
  build: {
    target: "modules",
    outDir: "es",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      external: /\.less$/,
      input: files,
      output: [
        // esm
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "../packages/ui/src",
        },
        // cjs
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "../packages/ui/src",
        },
      ],
    },
    // 这一块是不会被使用的
    lib: {
      entry: "",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    {
      name: "vite-plugin-style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler: any = bundle[key];
          // 输出新文件 css.js，文件内容在index.js基础上将less后缀变为css后缀
          this.emitFile({
            type: "asset",
            fileName: key.replace("index.js", "css.js"),
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
