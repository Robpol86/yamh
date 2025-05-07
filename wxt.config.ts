import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        browser_specific_settings: { gecko: { id: "yamh@robpol86.com" } },
        default_locale: "en",
        permissions: ["storage"],
    },
    manifestVersion: 3,
    modules: ["@wxt-dev/i18n/module", "@wxt-dev/module-svelte"],
    srcDir: "src",
});
