const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,

  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bundled'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
