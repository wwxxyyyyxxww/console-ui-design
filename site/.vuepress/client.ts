import {  defineClientConfig } from "@vuepress/client";
// @ts-ignore
import consoleUI from "console-ui";
import "console-ui/style";

export default defineClientConfig({
    enhance({app}){
        app.use(consoleUI);
    }
})
