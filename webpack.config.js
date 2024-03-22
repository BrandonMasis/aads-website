const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js', // Using [contenthash] for hashing
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource', // Process images as assets
        generator: {
          filename: 'images/[name].[contenthash][ext]', // Using [contenthash] for hashing
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/robots.txt',
          to: 'robots.txt',
        },
        {
          from: './src/sitemap_index.xml',
          to: 'sitemap_index.xml',
        },
        {
          from: './src/favicon',
          to: 'favicon',
        },
        {
          from: './src/assets',
          to: 'assets',
        },

        {
          from: './src/*.json',
          to: 'json/[name].[contenthash].json', // Using [contenthash] for hashing
        },
      ],
    }),
    new webpack.DefinePlugin({
      __HASHED_FILENAME__: JSON.stringify(fs.readdirSync('./dist/json/')[0]), // Get the first filename in the 'dist/json' directory
    }),
  ],
};
