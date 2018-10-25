/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import fase from 'fansion-base'

// 初始化工具方法
const isNotNull = fase.util.isNotNull
/**
 * 组件中心
 * @type {{}}
 */
const components = {}

/**
 * 根据组件类型加载组件注册信息
 * @param type 组件类型
 * @returns {object} 组件注册信息
 */
const load = (type) => components[type]
/**
 * 根据字段生成模型串
 * @param field {string} 字段名
 * @returns {string} 模型串
 */
const getModel = (field) => {
  if (!field) {
    return 'model'
  }
  let model
  if (field.startsWith('.')) {
    model = 'page.rootModel'
    field = field.substr(1)
  } else {
    model = 'model'
  }
  return model + '[\'' + field.split('.').join('\'][\'') + '\']'
}

/**
 * 获取对象属性值,取值顺序为obj1.prop1->obj2.prop1->obj1.prop2->obj2.prop2->defaultValue
 * @param obj1 对像1
 * @param obj2 对像2
 * @param dv 默认值
 * @param prop 属性数组
 * @returns {*}
 */
function propVal (obj1, obj2, dv, ...prop) {
  let r = dv
  prop.every(p => {
    let v = obj1[p]
    if (isNotNull(v)) {
      r = v
      return false
    }
    v = obj2[p]
    if (isNotNull(v)) {
      r = v
      return false
    }
  })
  return r
}

/**
 * 构建组件tag的属性列表串
 * @param reg 组件注册信息
 * @param conf 组件配置信息
 * @returns {string} 属性串
 */
const buildTagProp = (reg, conf) => {
  let propStr
  let props = conf.props || {}
  let otherProps = Object.assign({}, props)
  if (reg.props) {
    let dvs = reg.default || {}
    propStr = reg.props.map((p) => {
      let pt = p.split(':')
      p = pt[0]
      let t = pt.length > 1 ? pt[1] : 'string'
      let dp = ':' + p
      delete otherProps[p]
      delete otherProps[dp]
      if (p === 'page' || p === 'conf') {
        let m = propVal(conf, props, p, p, dp)
        return `:${p}="${m}"`
      } else if (p === 'vModel' || p === 'v-model') {
        let m = propVal(conf, props, null, p)
        if (isNotNull(m)) {
          return 'v-model="' + m + '"'
        }
        let fd = conf['field'] || props['field']
        if (isNotNull(fd)) {
          return 'v-model="' + getModel(fd) + '"'
        }
      } else if (p.startsWith('vModel.') || p.startsWith('v-model.')) {
        let suf = p.substring(p.indexOf('.') + 1)
        let m = propVal(conf, props, null, p, 'vModel', 'v-model')
        if (isNotNull(m)) {
          return `v-model.${suf}="${m}"`
        }
        let fd = conf['field'] || props['field']
        if (isNotNull(fd)) {
          let m = getModel(fd)
          return `v-model.${suf}="${m}"`
        }
      } else if (p === 'vText' || p === 'v-text') {
        let fd = conf['field'] || props['field']
        if (isNotNull(fd)) {
          return 'v-text="' + getModel(fd) + '"'
        }
      } else if (p === 'vHtml' || p === 'v-html') {
        let fd = conf.field || conf.props.field
        if (isNotNull(fd)) {
          return 'v-html="' + getModel(fd) + '"'
        }
      } else if (p === 'model') {
        let m = propVal(conf, props, null, p)
        if (isNotNull(m)) {
          return `${p}="${m}"`
        }
        m = propVal(conf, props, 'model', dp)
        return `:${p}="${m}"`
      } else if (p === 'showLabel.sync' || p === 'show-label.sync' || p === 'vLabel' || p === 'v-label') {
        let m = propVal(conf, props, null, p)
        if (isNotNull(m)) {
          return ':show-label.sync="' + m + '"'
        }
        let fd = conf['labelField'] || props['labelField']
        if (isNotNull(fd)) {
          return ':show-label.sync="' + getModel(fd) + '"'
        }
        let bfd = conf['field'] || props['field']
        if (isNotNull(bfd)) {
          return ':show-label.sync="' + getModel(fd + '_label') + '"'
        }
      } else {
        let m = propVal(conf, props, null, p)
        if (isNotNull(m)) {
          return t === 'string' ? `${p}="${m}"` : `${p}=${m}`
        }
        m = propVal(conf, props, null, dp)
        if (isNotNull(m) && typeof m !== 'string') {
          m = `conf['${dp}']`
        }
        if (isNotNull(m)) {
          return `:${p.toDash()}="${m}"`
        }
        m = dvs[p]
        if (isNotNull(m)) {
          return t === 'string' || typeof m === 'string' ? `${p.toDash()}="${m}"` : `${p.toDash()}=${m}`
        }
        m = dvs[dp]
        if (isNotNull(m)) {
          return t === 'string' || typeof m === 'string' ? `:${p.toDash()}="${m}"` : `:${p.toDash()}=${m}`
        }
      }
    }).join(' ')
    propStr += Object.entries(otherProps).map(([k, y]) => {
      if (isNotNull(y)) {
        return k + '="' + y + '"'
      }
      return ''
    }).join(' ')
  } else if (conf.props) {
    propStr = ':page="page" :conf="conf "'
    propStr += Object.entries(conf.props).map(([k, y]) => {
      if (isNotNull(y)) {
        return k + '="' + y + '"'
      }
      return ''
    }).join(' ')
  } else {
    propStr = ':page="page" :conf="conf "'
    propStr += Object.entries(conf).map(([k, y]) => {
      if (isNotNull(y)) {
        return k + '="' + y + '"'
      }
      return ''
    }).join(' ')
  }
  if (conf.events) {
    propStr += Object.entries(conf.events).map(([k, y]) => {
      if (isNotNull(y)) {
        if (!k.startsWith('@')) {
          k = '@' + k
        }
        if (y.indexOf('.') < 0) {
          y = 'page.' + y
        }
        return `${k}="${y}"`
      }
      return ''
    }).join(' ')
  }
  return propStr
}

/**
 * 生成成组件元数据(模板和组件列表)
 * @param config 组件配置
 * @returns {{components: {}, template: string}} 组件元数据
 */
const compile = (config) => {
  let type = typeof config === 'string' ? config : config.type || 'input'
  let comp = load(type)
  if (typeof comp === 'function') {
    return comp(config)
  }
  if (typeof comp.component === 'function' && !comp.factory) {
    return comp.component(config)
  }
  let {props, attrs} = comp
  let t = typeof props
  let tagName = comp.tagName || type
  if (t === 'function') {
    props = props(tagName, comp, config)
  } else if (t === 'string') {
    /* eslint-disable no-eval */
    props = eval(props)
  } else {
    props = buildTagProp(comp, config)
  }
  let attrsProps = ''
  if (attrs) {
    attrsProps = Object.entries(attrs).map(([k, v]) => {
      return k + '="' + v + '"'
    }).join(' ')
    if (attrsProps.length > 0) {
      attrsProps = ' ' + attrsProps
    }
  }
  let components = {}
  if (comp.component) {
    components[tagName] = comp.component
  }
  let slot = config.pos ? ` slot="${config.pos}"` : ''
  return {
    components,
    template: `<${tagName} ${props}${attrsProps}${slot}/>`
  }
}

/**
 * 根据多个组件配置对象生成组件元数据(模板和组件列表)
 * @param conf 多组件配置
 * @returns {{components: {}, template}} 组件元数据(模板和组件列表)
 */
const compileComps = (conf) => {
  let cs = {}
  return {
    components: cs,
    template: !conf ? '' : Array.isArray(conf) ? conf.map((v, i) => {
      if (!v) {
        return
      }
      if (!v.conf && (!v.props || !v.props.conf)) {
        v.conf = `conf.components[${i}]`
      }
      let {components, template} = compile(v)
      Object.assign(cs, components)
      return template
    }).join('') : Object.entries(conf).map(({k, v}) => {
      if (!v.conf && (!v.props || !v.props.conf)) {
        v.conf = `conf.components['${k}']`
      }
      let {components, template} = compile(v)
      Object.assign(cs, components)
      return template
    }).join('')
  }
}

/**
 * 通过组件配置加载组件
 * @param comps 组件列表
 * @param components 组件目标对象
 * @return {*} 组件目标对象
 */
const confs2Comps = (comps, components) => {
  if (!comps) {
    return components
  }
  if (components === null || components === undefined) {
    components = {}
  }
  if (Array.isArray(comps)) {
    comps.forEach((item) => {
      if (typeof item === 'string') {
        let compMeta = load(item)
        if (compMeta.component) {
          components[compMeta.tagName || item] = compMeta.component
        }
      } else if (typeof item === 'object' && (item.name || item.componentName)) {
        components[item.name || item.componentName] = item
      }
    })
  } else if (typeof comps === 'object') {
    Object.entries(comps).forEach(([k, v]) => {
      if (typeof v === 'string') {
        let compMeta = load(v)
        if (compMeta.component) {
          components[k] = compMeta.component
        }
      } else {
        components[k] = v
      }
    })
  }
  return components
}
/**
 * 组件中心，包括组件的注册及组件在fac中的构建方法
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-7-13
 */
export default {
  /**
   * 组件集合
   */
  components,
  /**
   * 根据类型加载组件
   * @type {function(*): *}
   */
  load,
  /**
   * 添加组件
   */
  addComp: fase.builder.register(components),

  /**
   * 根据组件注册信息生成组件模板属性串
   */
  buildTagProp,
  /**
   * 根据配置生成组件模板信息{{components: {}, template: string}}
   */
  compile,
  /**
   * 将配置转换成为组件＋模板信息{{components: {}, template: string}}
   */
  compileComps,
  /**
   * 组件配置集合转换为组件集合
   */
  confs2Comps
}
