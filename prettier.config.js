module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  importOrder: ['^@src/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.ts',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
}
