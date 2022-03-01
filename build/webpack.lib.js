/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
const path = require('path')
const webpack = require('webpack')
const mode = process.env.NODE_ENV
const options = require('./options').getOptions(mode)
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

console.log(options.modules)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function externals () {
  const exts = {
    vue: 'Vue',
    'element-ui': 'ELEMENT',
    'vue-router': 'VueRouter'
  }
  options.modules.forEach(function(e){
    exts[e] = e
  })
  return exts
}
const moduleName = process.env.npm_package_name
const entry = {}
entry[moduleName] = './src/index.js'
module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: 'web/'+moduleName+'/',
    filename: moduleName+'.js',
    chunkFilename: moduleName + '.[id].js',
    libraryTarget: 'umd',
    library: moduleName,
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
    externals(), nodeExternals()
  ],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      // js mini
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      // css mini
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          map: {
            // 不生成内联映射,这样配置就会生成一个source-map文件
            inline: false,
            // 向css文件添加source-map路径注释
            // 如果没有此项压缩后的css会去除source-map路径注释
            annotation: true
          }
        }
      })
    ]
  },
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
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash:12].css'  // use contenthash *
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: resolve(options.assertPath+"/**"),
        ignore:[]
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
