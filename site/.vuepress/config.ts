import { defineUserConfig,defaultTheme ,viteBundler} from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block"
import { resolve } from "path";
export default defineUserConfig({
    title:"前端组件库",
    base: process.env.NODE_ENV === "production" ? "/console-ui/" : "/",
    plugins: [
        codeBlockPlugin()
    ],
    locales:{
        "/":{
            lang:"zh-CN",
            title:"console-ui",
        }
    },
    lang: "zh-CN",
    theme: defaultTheme({
        locales: {
            "/": {
                navbar: navbar.zh,
                sidebar: sidebar.zh
            }
        }
    }),
    bundler:viteBundler({
        viteOptions:{
            plugins:[vueJsx()],
            resolve:{
                alias:{
                    "console-ui/style":resolve(__dirname,"../../packages/ui/src/style.ts"),
                    "console-ui":resolve(__dirname,"../../packages/ui/src/index.ts"),
                }
            },
            css:{
                preprocessorOptions:{
                    less:{
                     modifyVars:{
                         "html-dark-selector": "~'html.dark'"
                     }
                    }
                }
            }
        },
    })
})
