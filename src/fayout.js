/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import fase from 'fansion-base'
import options from './options'

// 获取工具方法
const {toRender, toProps} = fase.render
/**
 * 布局行标签名称
 * @type {*|string}
 */
const rowTag = options.fayout.rowTag || 'el-row'
/**
 * 不具列表前名称
 * @type {*|string}
 */
const colTag = options.fayout.colTag || 'el-col'

// 默认的布局头部配置
const defaultHeader = {
  'class': 'layout-header'
}
// 默认的布局中部配置
const defaultBody = {
  'class': 'layout-body'
}
// 默认的布局下部配置
const defaultFooter = {
  'class': 'layout-footer'
}

/**
 * 内部方法递归生成布局组件
 * @param conf 配置对象
 * @param type 布局类型
 * @param slot 内部名称
 * @param layout 布局对象
 * @returns {string} 布局模板
 */
function createLayout (conf, type, slot, layout) {
  let tagName = type === 'row' ? rowTag : type === 'col' ? colTag : 'div'
  let h = '<' + tagName + ' ' + toProps(conf, ['isSlot', 'slot', 'rows', 'cols', 'children']) + '>'
  let b = ''
  if (Array.isArray(conf.rows) && conf.rows.length > 0) {
    b = conf.rows.map((row) => {
      return createLayout(row, 'row', slot)
    }).join('')
  } else if (Array.isArray(conf.cols) && conf.cols.length > 0) {
    b = conf.cols.map((col) => {
      return createLayout(col, 'col', slot)
    }).join('')
  } else if (conf.children) {
    b = conf.children.map((child) => {
      return createLayout(child, 'child', slot)
    }).join('')
  } else if (conf.slot) {
    if (conf.slot === slot) {
      if (layout.slotCount > 0) {
        conf.slot = slot + layout.slotCount
      }
      layout.slotCount++
    }
    b = `<slot name="${conf.slot}"/>`
  }
  let f = `</${tagName}>`
  return `${h}${b}${f}`
}

/**
 * 内部方法根据配置生成布局模板
 * @param pos 配置信息
 * @param defaultOption 默认配置
 * @param slot 内部
 * @param layout 布局对象
 * @returns {string}
 */
function creatTemplate (pos, defaultOption, slot, layout) {
  let p = {}
  if (typeof pos === 'object') {
    Object.assign(p, defaultOption, pos)
  } else if (Array.isArray(pos) && pos.length > 0) {
    if (pos[0].cols) {
      Object.assign(p, defaultOption, {rows: pos})
    } else {
      Object.assign(p, defaultOption, {rows: [{cols: pos}]})
    }
  } else {
    pos = typeof pos === 'string' && pos ? pos : slot
    Object.assign(p, defaultOption, {slot: pos})
  }
  return createLayout(p, null, slot, layout)
}

/**
 * 默认的可配置布局
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2010/19/18
 */
export default {
  name: 'FacLayout',
  template: '<div/>',
  props: {
    conf: {
      type: [String, Object],
      require: true
    },
    layoutClass: String
  },
  data () {
    let conf = this.conf
    if (typeof conf === 'string') {
      console.log('It is not implement，please wait!!！')
    }
    if (!conf.header && !conf.body && !conf.footer) {
      conf = {body: conf}
    }
    // 计数器
    let slotCount = 0
    return {
      slotCount,
      header: conf.header,
      body: conf.body,
      footer: conf.footer
    }
  },
  watch: {
    conf (val) {
      if (!val.header && !val.body && !val.footer) {
        val = {body: val}
      }
      this.header = val.header
      this.body = val.body
      this.footer = val.footer
      this.$mount()
    }
  },
  beforeMount () {
    let h = ''
    let lclass = this.layoutClass ? ' ' + this.layoutClass : ''
    this.slotCount = 0
    if (this.header) {
      h = creatTemplate(this.header, defaultHeader, 'header', this)
    }
    this.slotCount = 0
    let b = creatTemplate(this.body, defaultBody, 'body', this)
    this.slotCount = 0
    let f = ''
    if (this.footer) {
      f = creatTemplate(this.footer, defaultFooter, 'footer', this)
    }
    toRender(this, `<div class="page-layout${lclass}">${h}${b}${f}</div>`)
  }
}
