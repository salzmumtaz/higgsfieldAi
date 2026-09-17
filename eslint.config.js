import js from "@eslint/js";
import globals from "globals";
import path from "node:path";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const HOME_ROOT = path.resolve("src/features/home");
const HOME_SHARED_MODULES = new Set(["gallery", "models"]);

const homeBoundaries = {
  rules: {
    "no-sibling-module-imports": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Prevent Home modules from reaching into sibling modules",
        },
        messages: {
          sibling:
            "Do not import from sibling Home module '{{target}}'. Lift shared code into home/models or home/gallery.",
        },
        schema: [],
      },
      create(context) {
        const filename = path.resolve(context.filename);
        const sourceRelative = path.relative(HOME_ROOT, filename);
        const [sourceModule, sourceRemainder] = sourceRelative.split(path.sep);

        if (
          !sourceRemainder ||
          sourceRelative.startsWith(`..${path.sep}`) ||
          path.isAbsolute(sourceRelative)
        ) {
          return {};
        }

        return {
          ImportDeclaration(node) {
            const specifier = node.source.value;
            if (typeof specifier !== "string") return;

            let importedFile;
            if (specifier.startsWith("@/features/home/")) {
              importedFile = path.join(
                HOME_ROOT,
                specifier.slice("@/features/home/".length),
              );
            } else if (specifier.startsWith(".")) {
              importedFile = path.resolve(path.dirname(filename), specifier);
            } else {
              return;
            }

            const targetRelative = path.relative(HOME_ROOT, importedFile);
            const [targetModule, targetRemainder] = targetRelative.split(path.sep);

            if (
              !targetRemainder ||
              targetModule === sourceModule ||
              HOME_SHARED_MODULES.has(targetModule)
            ) {
              return;
            }

            context.report({
              node,
              messageId: "sibling",
              data: { target: targetModule },
            });
          },
        };
      },
    },
  },
};

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "src/routeTree.gen.ts",
      "research/**",
      ".agent-logs/**",
      ".cursor/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat["recommended-latest"],
  reactRefresh.configs.vite,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "home-boundaries": homeBoundaries,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "home-boundaries/no-sibling-module-imports": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["src/routes/**/*.{ts,tsx}", "src/assets/icons/megaMenuIcons.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["vite.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
