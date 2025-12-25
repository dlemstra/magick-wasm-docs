import js from "@eslint/js";
import path from "node:path";
import pluginTypescriptEslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "*.mjs",
    ],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        "@eslint-plugin-vue": pluginVue,
        "@typescript-eslint": pluginTypescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: [
                "./tsconfig.app.json",
                "./tsconfig.node.json",
            ],
        },
    },
}];