import autoImports from "./.wxt/eslint-auto-imports.mjs";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config[]} */
export default [
    globalIgnores([".output/", ".wxt/"]),
    autoImports,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.webextensions,
            },
        },
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
    {
        files: ["**/*.spec.js", "**/*.test.js"],
    },
];
