module.exports = {
  '*.(js|ts|tsx)': ['npm run format:fix', 'npm run lint:fix'],
  '*.(css|json)': 'npm run format:fix',
};
