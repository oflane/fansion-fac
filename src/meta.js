/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import fase from 'fansion-base'
import template from './template'
/**
 * fac配置集合
 * @type {{}}
 */
let metas = {}

/**
 * 元数据加载规则集合
 * @type {Array}
 */
let rules = [template.rule]

/**
 * 根据元数据获取元数据名称
 * @param name
 * @returns {*}
 */
const getMeta =  (name) => {
  let meta = metas[name]
  if (meta) {
    return meta
  }
  rules.every(r => {
    meta = r(name, this)
    if (meta) {
      return false
    }
  })
  return meta
}
/**
 * fac元数据加载器
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2010/20/18
 */
export default {
  /**
   * 元数据集合
   */
  metas,

  /**
   * 根据元数据获取元数据名称
   * @param name
   * @returns {*}
   */
  getMeta,
  /**
   * 添加元数据信息
   * @param data 需要添加的元数据对象
   */
  addMeta: fase.builder.register(metas, 'fac-name'),
  /**
   * 添加规则信息
   * @param data 规则数据
   */
  addRule: fase.builder.collection(rules),

  /**
   * 初始化数据
   * @param options
   * @returns {*|{name}|Object}
   */
  init: (options) => {
    if (!options) {
      return
    }
    this.addMeta(options.metas)
    this.addRule(options.rules)
  }
}