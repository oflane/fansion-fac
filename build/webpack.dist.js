/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
var path = require('path');
var webpackBase = require('./webpack.lib');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var merge = require('webpack-merge');

module.exports = merge(webpackBase, {
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
    filename: 'fansion-fac.all.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'fansion-fac',
    umdNamedDefine: true
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
