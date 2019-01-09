/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import Vue from 'vue'
import layouts from './layouts'
import metas from './metas'
import comps from './comps'
import fase from 'fansion-base'

// 获取工具方法
const {render: {toRender, callHook}, util: {once, proxy, isPromise}, rest: {getJson}} = fase

/**
 * 从配置中获取不具配置
 * @param meta 元数据
 * @returns {*}
 */
function getLayout (conf) {
  let name = conf.layout
  let exist = !!name
  if (exist && typeof name !== 'string') {
    return name.conf ? Object.assign({exist}, name) : {exist, conf: name}
  }
  return {exist, name}
}
/**
 * 取得界面的配置文件
 * @param vm {VueComponent} 页面组件
 * @returns {*} 配置对象
 */
function getConf (vm) {
  let conf = typeof vm.meta === 'string' ? metas.getMeta(vm.meta) : vm.meta
  if (typeof conf !== 'function' && !isPromise(conf)) {
    return conf
  }
  // 配置信息为方法时的处理
  let factory = conf
  // 此时要求factory是一个固定对象，如果每次构建一个方法对象则此处取不到值
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
        getJson(res.uimeta).then(function (uimeta) {
          res = Object.assign(res, uimeta)
        })
      } catch (e) {
        console.log(e)
      } finally {
        res.uimeta = null
        factory.resolved = res
        vm.confing = false
        vm.$mount()
        callHook(vm, 'mounted')
      }
    } else {
      factory.resolved = res
      vm.confing = false
      vm.$mount()
      callHook(vm, 'mounted')
    }
  })
  const reject = once(reason => {
    console.log(reason)
    vm.confing = false
    factory.error = true
  })
  vm.confing = true
  vm._isMounted = true
  conf = typeof factory === 'function' ? factory(resolve, reject) : conf
  if (typeof conf === 'object' && isPromise(conf) && !factory.resolved) {
    conf.then(resolve, reject)
    return
  }
  factory.resolved = conf
  vm.confing = false
  return conf
}
export default {
  name: 'Fac',
  template: '<div/>',
  props: {
    meta: {
      type: [String, Object],
      required: true
    },
    data: {
      type: [String, Object],
      default () {
        return {}
      }
    },
    owner: Object
  },

  data () {
    let layout = {}
    let conf = this.meta
    let page = this.owner ? this.owner : this
    let model = this.data
    return {
      conf,
      model,
      page,
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
    data (v) {
      this.model = v
    },
    pageState (val, oldVal) {
      val !== oldVal && this.$emit('stateChanged', val)
    }
  },
  beforeMount: function () {
    let _self = this
    let conf = getConf(_self)
    if (!conf || _self.confing) {
      return
    }
    _self.conf = conf
    // 获取布局信息
    let layout = getLayout(conf)
    // noc标志为使用vue组件进行显示，而不是通过配置加载
    let {components, template} = conf.noc ? conf : comps.compileComps(conf.components)
    // 使用配置数据覆盖默认数据
    Object.assign(_self, conf.methods, {layout: layout.conf}, typeof conf.member === 'function' ? conf.member.call(this) : conf.member)
    // 处理观察者
    if (conf.watch) {
      Object.entries((k, v) => {
        if (!v) {
          return
        }
        if (typeof v === 'function') {
          _self.$watch(k, v)
        } else if (typeof v.handler === 'function') {
          let {immediate, deep} = v
          _self.$watch(k, v.handler, {immediate, deep})
        }
      })
    }
    // 执行配置中的data方法
    let confData = typeof conf.data === 'function' ? conf.data.call(this) : conf.data
    // 监测新的data对象
    if (confData !== null && typeof confData === 'object') {
      // hack handle see vue.js, Observer and Vue.prototype.$set
      let old = _self._data.__ob__.vmCount
      _self._data.__ob__.vmCount = 0
      Object.entries(confData).forEach(([k, v]) => {
        _self.$set(_self._data, k, v)
        proxy(_self, '_data', k)
      })
      _self._data.__ob__.vmCount = old
    }

    if (layout.exist) {
      let layoutComp = layouts.getLayout(layout.name)
      toRender(this, `<layout :conf="layout" v-loading="pageLoading">${template}</layout>`, Object.assign({layout: layoutComp}, components))
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
