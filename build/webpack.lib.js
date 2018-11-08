/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
var path = require('path')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var nodeExternals = require('webpack-node-externals')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {app: './src/index.js'},
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/fansion-fac/lib/',
    filename: 'fansion-fac.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'fansion-fac',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve('src'),
      '@': resolve('src'),
      '@static': resolve('static')
    },
    modules: ['node_modules']
  },
  externals: [
    {
      vue: 'vue',
      'element-ui': 'ELEMENT',
      'fansion-base': 'fansion-base'
    }, nodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: path.resolve(process.cwd(), './src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
