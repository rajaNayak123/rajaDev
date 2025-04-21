import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unescaped entities errors
      "react/no-unescaped-entities": "off",

      // Either disable or set to warning for image elements
      "@next/next/no-img-element": "warn",

      // Set unused variables to warning instead of error
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
