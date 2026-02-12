module.exports = {
  '**/*.{ts,tsx}': 'eslint --fix',
  '**/*.{scss,css}': [
    'postcss --config postcss.config.js --replace', // اضافه کردن autoprefixer
    'stylelint --fix', // بعد lint
  ],
  '**/*.html': 'prettier --write',
  '**/*.{json,md,yml}': 'prettier --write',
};
