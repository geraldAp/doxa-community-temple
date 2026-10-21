module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "security", "xss"],
  env: { browser: true, node: true, es2022: true },
  ignorePatterns: [".next/", "node_modules/", ".superdesign/"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "security/detect-object-injection": "error",
        "xss/no-mixed-html": "error",
      },
    },
  ],
};
