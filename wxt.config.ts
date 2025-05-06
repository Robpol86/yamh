import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    manifest: {
        default_locale: "en",
        permissions: ["storage", "tabs"],
    },
    manifestVersion: 3,
    modules: ["@wxt-dev/i18n/module", "@wxt-dev/module-svelte"],
});
