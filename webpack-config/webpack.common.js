const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./webpack.paths')

module.exports = {
  entry: {
    //main: [paths.src + '/js/main.js', paths.src + '/scss/main.scss'],
    main: [paths.src + '/js/main.js'],
  },
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'images' },
    ],
  },
}
