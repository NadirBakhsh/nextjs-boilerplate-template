module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports"
  ],
  tailwindConfig: './styles/tailwind.config.js',
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  importOrder: ["^@src/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
