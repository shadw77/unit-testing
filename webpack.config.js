const path = require('path');

module.exports = {
  entry: './test/index.test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
