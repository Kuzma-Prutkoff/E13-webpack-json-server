const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {filename: 'main.js'},
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: 'index.html',		//как будет наз-ся файл в папке dist/index.html
    }),

  ],
  module: {
    rules: [
          {
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {esModule: true}
            }, 'css-loader'],
          test: /\.css$/
          },
          {
          loader: 'pug-loader',
          test: /\.pug$/,
          }
    ]
  }
};
