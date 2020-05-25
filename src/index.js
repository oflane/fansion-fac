/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import fayout from './fayout'
import layouts from './layouts'
import comps from './comps'
import fac from './fac'
import metas from './metas'
import templates from './templates'
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
const pageMetaRule = (path, addPageMeta, pageMetas) => {
  if (path.startsWith('$')) {
    path = path.substring(1)
    const meta = path
    path = path.prefix('/')
    let pageMeta = pageMetas[path]
    if (pageMeta) {
      return pageMeta
    }
    pageMeta = {path, props: {meta}, component: fac}
    addPageMeta(path, pageMeta)
    return pageMeta
  }
}
/**
 * 初始化方法
 * @param Vue vue对象
 * @param opts 选项
 * @returns {*}
 */
const install = (Vue, opts = {}) => {
  Vue.component(fayout.name, fayout)
  Vue.component(fac.name, fac)
  fase.init({pages: {rules: pageMetaRule}})
  init(options)
  init(opts)
}
/**
 * 初始化方法
 * @param opts 选项
 */
const init = function (opts = {}) {
  opts.meta && metas.init(opts.meta)
  opts.layouts && layouts.addLayout(opts.layouts)
  opts.cometas && comps.addComp(opts.cometas)
  opts.templates && templates.addTemplate(opts.templates)
  opts.loadMetaUrl && templates.setLoadMetaUrl(opts.loadMetaUrl)
}
/**
 * fac组件模块
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-15
 */
export default {
  version,
  install,
  init,
  fayout,
  layouts,
  comps,
  fac,
  metas,
  templates,
  options
}
