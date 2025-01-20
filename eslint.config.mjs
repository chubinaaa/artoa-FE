import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";
import reactCompiler from "eslint-plugin-react-compiler";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...tailwind.configs["flat/recommended"],
  {
    plugins: {
      "react-compiler": reactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": true,
          "allowTernary": true,
          "allowTaggedTemplates": true
        }
      ]
    },
  },
];

export default eslintConfig;
