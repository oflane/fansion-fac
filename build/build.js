/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

require('./check-versions')()

process.env.NODE_ENV = 'production'
var target = process.env.MODE
var path = require('path')
var ora = require('ora')
var rm = require('rimraf')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig = require('./webpack.' + target)

var spinner = ora('building all lib for production...')
spinner.start()
rm(path.join(__dirname, '..', target), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
  })
})

