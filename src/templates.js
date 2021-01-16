/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import fase from 'fansion-base'

/**
 * 工具方法
 */
const { rest: {gson, furl}, mod: { depend }, util: { isFunction } } = fase

/**
 * 模板注册中心
 * @type {{}}
 */
const templates = {}

/**
 * 根据模板名称获取模板对象
 * @param name
 * @returns {*}
 */
const getTemplate = (name) => templates[name]
/**
 * 加载元数据的url
 * @type {string}
 */
let loadMetaUrl = '/fac/meta/:path'

/**
 * 设置按路径加载元数据的ur
 * @param url 加载元数据的url
 * @returns {*}
 */
const setLoadMetaUrl = (url) => (loadMetaUrl = url)
/**
 * 根据路径加载fac元数据
 * @param path 元数据路径
 * @param metas 元数据中心
 * @returns {Promise}
 */
const getMeta = (path, addMeta, metas) => new Promise((resolve) => {
  gson(furl(loadMetaUrl, { path }), null, (meta) => {
    const mp = new Promise((resolve) => {
      resolve(meta)
    })
    // 支持fac配置继承
    if (meta && meta.base) {
      depend(mp, metas[meta.base]).then(function (data) {
        addMeta(path, data)
        resolve(data)
      })
    } else if (meta.template) {
      depend(mp, [getTemplate(meta.template)]).then(function (data) {
        const facMeta = isFunction(data) ? data(meta) : data
        addMeta(path, facMeta)
        resolve(facMeta)
      })
    } else {
      resolve(meta)
    }
  })
})

/**
 * 页面加载规则
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2010/23/18
 */
export default {
  /**
   * 模板中心
   */
  data: templates,
  /**
   * 根据模板名称获取模板对象
   * @param name
   * @returns {*}
   */
  getTemplate,
  /**
   * 添加模板数据
   * @param {Object|Array} 模板注册数据可以时数组，单个模板对象，多个对象map
   */
  addTemplate: fase.builder.register(templates),
  /**
   * 默认fac元数据加载规则
   * @param path 元数据路径
   * @param metas 元数据句中心
   * @returns {*}
   */
  rule: (path, addMeta, metas) => path ? getMeta(path, addMeta, metas) : null,
  /**
   * 设置按路径加载元数据的ur
   * @param url 加载元数据的url
   * @returns {*}
   */
  setLoadMetaUrl
}
