'use strict';
// webpack -p
// aws s3 sync dist/ s3://haikanlava.fi
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true
  },
  mode: 'development',
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      publicPath: "./"
    }),
    HTMLWebpackPluginConfig
  ]

}



/*

 var config = {



 devServer: {
 inline: true,
 port: 8080
 },

 module: {
 loaders: [
 {
 test: /\.jsx?$/,
 exclude: /node_modules/,
 loader: 'babel',

 query: {
 presets: ['es2015', 'react']
 }
 },
 {
 test: /\.scss$/,
 loader: ExtractTextPlugin.extract('css!sass')
 }
 ]
 }
 }

 module.exports = config;

 */













