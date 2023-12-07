module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  singleAttributePerLine: false,
  bracketSameLine: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 130,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
  ],
};
