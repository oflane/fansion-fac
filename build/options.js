/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
//获取module模块
const fs = require("fs")
const packageData = JSON.parse(fs.readFileSync(process.env.npm_package_json))
//默认模块模式定义
//与默认的不一样时，需要在package.json中配置  "modulePatterns": ["fansion-(.*)", "fasm-(.*)"],
let patterns = [/fansion-(.*)/i,/fasm-(.*)/ig]
if(Array.isArray(packageData.modulePatterns)) {
  patterns = packageData.modulePatterns.map(v => new RegExp(v, "i")).concat(patterns)
}
const modules = Object.keys(packageData.devDependencies).filter(v => patterns.findIndex(p => p && p.test(v)) !== -1)

module.exports.getOptions = function(env) {
  return {
    jsFolder: 'web',
    assertPath: 'static',
    modules
  }
}
module.exports.server = {
  port: 9999,
  autoOpenBrowser: false
}
module.exports.mock = {
  isMock: false,
  path: '/oflane/',
  url: 'http://localhost:8080',
  proxy: {
    loginUrl: '',
    url: 'http://localhost:8080',
    username: 'hrtest88',
    password: '97bbc79679fe1cfd9afb52fd6f01d033b479555d'
  }
}
