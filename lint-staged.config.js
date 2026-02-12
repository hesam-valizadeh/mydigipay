module.exports = {
  '**/*.{ts,tsx}': 'eslint --fix',
  '**/*.{scss,css}': [
    'stylelint --fix',  
    'postcss --config postcss.config.js --replace', 
  ],
  '**/*.html': 'prettier --write',
  '**/*.{json,md,yml}': 'prettier --write',
};
