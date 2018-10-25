/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import Vue from 'vue'
import layouts from './layouts'
import metaLoader from './meta'
import comps from './comps'
import fase from 'fansion-base'

// 获取工具方法
const {render: {toRender, callHook}, util: {once, proxy}, rest: {getJson}} = fase

/**
 * 从配置中获取不具配置
 * @param meta 元数据
 * @returns {*}
 */
function getLayout (meta) {
  let name = meta.layout
  let exist = !!name
  if (exist && typeof name !== 'string') {
    return Object.assign({exist}, name)
  }
  return {exist, name}
}
/**
 * 取得界面的配置文件
 * @param vm {VueComponent} 页面组件
 * @returns {*} 配置对象
 */
function getMeta (vm) {
  let meta = typeof vm.meta === 'string' ? metaLoader.getMeta(vm.meta) : vm.meta
  if (typeof meta !== 'function') {
    return meta
  }
  // 配置信息为方法时的处理
  let factory = meta
  if (factory.resolved) {
    return factory.resolved
  }
  // 仿照vue的vue方法
  const resolve = once((res) => {
    if (res.__esModule) {
      res = res.default
    }
    if (typeof res.uimeta === 'string') {
      try {
        /* Get Server Config */
        getJson(res.uimeta).then(function (meta) {
          res = Object.assign(res, meta)
        })
      } catch (e) {
        console.log(e)
      } finally {
        res.uimeta = null
        factory.resolved = res
        vm.metaing = false
        vm.$mount()
        callHook(vm, 'mounted')
      }
    } else {
      factory.resolved = res
      vm.metaing = false
      vm.$mount()
      callHook(vm, 'mounted')
    }
  })
  const reject = once(reason => {
    console.log(reason)
    vm.metaing = false
    factory.error = true
  })
  vm.metaing = true
  vm._isMounted = true
  meta = factory(resolve, reject)
  if (typeof meta === 'object' && typeof meta.then === 'function' && !factory.resolved) {
    meta.then(resolve, reject)
    return
  }
  factory.resolved = meta
  vm.metaing = false
  return meta
}
export default {
  name: 'Fac',
  template: '<div/>',
  props: {
    meta: {
      type: [String, Object],
      required: true
    },
    model: {
      type: [String, Object],
      default: {}
    },
    page: Object
  },

  data () {
    let layout = {}
    let meta = {}
    if (!this.page) {
      this.page = this
    }
    return {
      meta,
      layout,
      pageLoading: true,
      pageState: 'init'
    }
  },
  watch: {
    meta () {
      this.$mount()
      callHook(this, 'mounted')
    },
    pageState (val, oldVal) {
      val !== oldVal && this.$emit('stateChanged', val)
    }
  },
  beforeMount: function () {
    let _self = this
    let meta = getMeta(_self)
    if (!meta || _self.metaing) {
      return
    }
    _self.meta = meta
    // 获取布局信息
    let layout = getLayout(meta)
    // noc标志为使用vue组件进行显示，而不是通过配置加载
    let {components, template} = meta.noc ? meta : comps.compileComps(meta.components)
    // 使用配置数据覆盖默认数据
    Object.assign(_self, meta.methods, {layout: layout.meta}, typeof meta.member === 'function' ? meta.member.call(this) : meta.member)
    // 执行配置中的data方法
    let metaData = typeof meta.data === 'function' ? meta.data.call(this) : meta.data
    // 监测新的data对象
    if (metaData !== null && typeof metaData === 'object') {
      // hack handle see vue.js, Observer and Vue.prototype.$set
      let old = _self._data.__ob__.vmCount
      _self._data.__ob__.vmCount = 0
      Object.entries(metaData).forEach(([k, v]) => {
        _self.$set(_self._data, k, v)
        proxy(_self, '_data', k)
      })
      _self._data.__ob__.vmCount = old
    }

    if (layout.exist) {
      let layoutComp = layouts.get(layout.name)
      toRender(this, `<layout :meta="layoutConf" v-loading="pageLoading">${template}</layout>`, Object.assign({layout: layoutComp}, components))
    } else {
      toRender(this, `${template}`, components)
    }
  },
  mounted () {
    if (typeof this.initPage === 'function') {
      this.initPage()
    }
    let vm = this
    Vue.nextTick(() => {
      vm.pageLoading = false
    })
  }
}
