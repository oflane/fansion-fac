/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import fayout from './fayout'
import layouts from './layouts'
import comps from './comps'
import fac from './fac'
import meta from './meta'
import options from './options'
import fase from 'fansion-base'

/**
 * 版本号
 * @type {string}
 */
const version = '1.0.0'

/**
 * pageMeta加载fac的加载规则
 * @param path 加载路径
 */
const pageMetaRule = (path, pageMetas) => {
  if (path.startsWith('$')) {
    let meta = {props: {config: path.substring(1)}, component: fac}
    pageMetas.addPageMeta(path, meta)
    return meta
  }
}
/**
 * 初始化方法
 * @param option
 * @returns {*}
 */
const init = (option) => {
  fase.init({page: {rules: pageMetaRule}})
  Object.assign(options, option)
  meta.init(options.meta)
  layouts.addLayout(options.layouts)
  comps.addComp(options.components)
}

/**
 * fac组件模块
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-15
 */
export default {
  version,
  init,
  fayout,
  layouts,
  comps,
  fac,
  meta,
  options
}
