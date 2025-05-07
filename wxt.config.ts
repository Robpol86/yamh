import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifestVersion: 3,
    modules: ["@wxt-dev/module-svelte"],
    srcDir: "src",
});
