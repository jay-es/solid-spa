module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        // type first
        groups: ["type", "builtin", "external", "parent", "sibling", "index"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
  },
};
