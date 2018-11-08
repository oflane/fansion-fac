/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

import fayout from './fayout'
import './style.less'
import fase from 'fansion-base'

/**
 * 容器注册信息
 * @type {{}}
 */
let layouts = {
  default: fayout
}
/**
 * fac布局管理
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2010/19/18
 */
export default {
  /**
   * 可配置不具对象
   */
  fayout,
  /**
   * 布局集合
   */
  data: layouts,
  /**
   * 根据名称取得布局组件
   * @param name 布局名称
   * @returns {*} 布局组件
   */
  getLayout: (name) => name ? layouts[name.toClassify()] || fayout : fayout,
  /**
   * 注册容器数据
   * @param data 容器数据
   * @return {any}
   */
  addLayout: fase.builder.register(layouts)
}
