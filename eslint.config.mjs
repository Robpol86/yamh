import autoImports from "./.wxt/eslint-auto-imports.mjs";
import eslint from "@eslint/js";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import svelte from "eslint-plugin-svelte";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    ...svelte.configs.recommended,
    ...svelte.configs.prettier,
    autoImports,
    {
        ignores: [".output/", ".wxt/", "coverage/"],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.webextensions,
            },
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["eslint.config.mjs", "svelte.config.js"],
                },
            },
        },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte", ".svelte.ts"],
                parser: tseslint.parser,
            },
        },
    },
    {
        rules: {
            "no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                },
            ],
            "prettier/prettier": [
                "error",
                {
                    printWidth: 120,
                    tabWidth: 4,
                },
            ],
            "sort-imports": ["error", {}],
        },
    },
    pluginJs.configs.recommended,
    pluginPrettier,
);
