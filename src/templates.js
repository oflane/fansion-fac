/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import fase from 'fansion-base'

/**
 * 工具方法
 */
const {rest: {getJson}, mod: {depend}} = fase

/**
 * 模板注册中心
 * @type {{}}
 */
let templates = {}

/**
 * 根据路径加载fac元数据
 * @param path 元数据路径
 * @param metas 元数据中心
 * @returns {Promise}
 */
const getMeta = (path, metas) => new Promise((resolve) => {
  getJson(path).then(function (meta) {
    let mp = new Promise((resolve) => {
      resolve(meta)
    })
    // 支持fac配置继承
    if (metas && meta.base) {
      depend(mp, metas.get(meta.base))().then(function (data) {
        data['facName'] = path
        metas.addMeta(data)
        resolve(data)
      })
    } else if (meta.template) {
      depend(mp, [templates.get(meta.template)])().then(function (data) {
        data['facName'] = path
        metas.addMeta(data)
        resolve(data)
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
  get: (name) => templates[name],
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
  rule: (path, metas) => path ? _ => getMeta(path, metas) : null
}
