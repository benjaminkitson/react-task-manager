const path = require('path');

function buildPath(relative) {
  return path.join(__dirname, relative);
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: buildPath('public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: buildPath('public')
    }
  }
};
