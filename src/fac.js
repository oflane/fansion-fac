/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import Vue from 'vue'
import layouts from './layouts'
import metas from './metas'
import comps from './comps'
import fase from 'fansion-base'

// 获取工具方法
const {render: {toRender, resetRender, callHook}, util: {once, proxy, isPromise, isNotEmptyObject, sure, isReserved, bind}, rest: {gson}} = fase

/**
 * 从配置中获取不具配置
 * @param meta 元数据
 * @returns {*}
 */
function getLayout (conf) {
  const name = conf.layout
  const exist = !!name
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
  const factory = conf
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
        gson(res.uimeta).then(function (uimeta) {
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
/**
 * 释放资源
 * @param meta 元数据
 * @returns {*}
 */
function release (vm) {
  const r = vm.__rls
  if (!r) {
    return
  }
  r.props && r.props.forEach(k => sure(vm[k] = null) && delete vm[k])
  const old = vm._data.__ob__.vmCount
  vm._data.__ob__.vmCount = 0
  r.setss && r.setss.forEach(k => sure(vm.$delete(vm._data, k)) && delete vm._data[k])
  vm._data.__ob__.vmCount = old
  r.watch.forEach(k => k())
  !vm.data && sure(vm.model = {})
  vm.layout = {}
  vm.pageLoading = true
  vm.pageState = 'init'
}
function initMembers (vm, methods) {
  const props = vm.$options.props
  for (const key in methods) {
    if (props && props.key) {
      Vue.util.warn(
        'Method "' + key + '" has already been defined as a prop.',
        vm
      )
    }
    if ((key in vm) && isReserved(key)) {
      Vue.util.warn(
        'Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'
      )
    }
    vm[key] = typeof methods[key] !== 'function' ? methods[key] : bind(methods[key], vm)
  }
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
    const layout = {}
    const conf = this.meta
    const page = this.owner ? this.owner : this
    const fac = this
    const model = this.data
    return {
      fac,
      model,
      conf,
      page,
      layout,
      pageLoading: true,
      pageState: 'init'
    }
  },
  watch: {
    meta () {
      const vm = this
      resetRender(vm)
      vm._update(vm._render(), false)
      vm.$mount()
      if (vm.$vnode) {
        callHook(vm, 'mounted')
      }
    },
    data (v) {
      this.model = v
    },
    model (v) {
      console.log(v)
    },
    pageState (val, oldVal) {
      val !== oldVal && this.$emit('stateChanged', val)
    }
  },
  beforeMount: function () {
    const vm = this
    const conf = getConf(vm)
    if (!conf || vm.confing) {
      return
    }
    release(vm)
    vm.conf = conf
    // 获取布局信息
    const layout = getLayout(conf)
    // noc标志为使用vue组件进行显示，而不是通过配置加载
    const {components, template} = conf.noc ? conf : comps.compileComps(conf.components)
    // 使用配置数据覆盖默认数据
    const ms = Object.assign({}, conf.methods, {layout: layout.conf}, typeof conf.member === 'function' ? conf.member.call(this) : conf.member)
    const rlsProp = {props: Object.keys(ms)}
    // Object.assign(vm, ms)
    initMembers(vm, ms)

    // 执行配置中的data方法
    const confData = typeof conf.data === 'function' ? conf.data.call(this) : conf.data
    // 监测新的data对象
    if (isNotEmptyObject(confData)) {
      rlsProp.setss = Object.keys(confData)
      // hack handle see vue.js, Observer and Vue.prototype.$set
      const old = vm._data.__ob__.vmCount
      vm._data.__ob__.vmCount = 0
      Object.entries(confData).forEach(([k, v]) => {
        vm.$set(vm._data, k, v)
        proxy(vm, '_data', k)
      })
      vm._data.__ob__.vmCount = old
    }
    conf.model && (vm.model = conf.model)
    rlsProp.watch = []
    // 处理观察者
    conf.watch && Object.entries(conf.watch).forEach(([k, v]) => {
      if (!v) {
        return
      }
      if (typeof v === 'function') {
        rlsProp.watch.push(vm.$watch(k, v))
      } else if (typeof v.handler === 'function') {
        const {immediate, deep} = v
        rlsProp.watch.push(vm.$watch(k, v.handler, {immediate, deep}))
      }
    })
    vm.__rls = rlsProp
    if (layout.exist) {
      const layoutComp = layouts.getLayout(layout.name)
      toRender(this, `<layout :conf="layout" v-loading="pageLoading">${template}</layout>`, Object.assign({layout: layoutComp}, components))
    } else {
      toRender(this, `${template}`, components)
    }
    // callHook(vm, 'mounted')
  },
  mounted () {
    const vm = this
    if (vm.confing === true) {
      return
    }
    typeof vm.initPage === 'function' && vm.initPage()
    Vue.nextTick(() => (vm.pageLoading = false))
  }
}
