module.exports = {
  '**/*.{ts,tsx}': 'eslint --fix',
  '**/*.{scss,css}': [
    'stylelint --fix', // بعد lint 
    'postcss --config postcss.config.js ', // اضافه کردن autoprefixer
  ],
  '**/*.html': 'prettier --write',
  '**/*.{json,md,yml}': 'prettier --write',
};
