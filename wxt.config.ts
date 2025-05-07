import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        default_locale: "en",
    },
    manifestVersion: 3,
    modules: ["@wxt-dev/i18n/module", "@wxt-dev/module-svelte"],
    srcDir: "src",
});
