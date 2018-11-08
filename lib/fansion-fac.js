(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fansion-base"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("fansion-fac", ["fansion-base", "vue"], factory);
	else if(typeof exports === 'object')
		exports["fansion-fac"] = factory(require("fansion-base"), require("vue"));
	else
		root["fansion-fac"] = factory(root["fansion-base"], root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/fansion-fac/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fansion_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options__ = __webpack_require__(4);







var _fase$render = __WEBPACK_IMPORTED_MODULE_2_fansion_base___default.a.render,
    toRender = _fase$render.toRender,
    toProps = _fase$render.toProps;

var rowTag = __WEBPACK_IMPORTED_MODULE_3__options__["a" /* default */].fayout.rowTag || 'el-row';

var colTag = __WEBPACK_IMPORTED_MODULE_3__options__["a" /* default */].fayout.colTag || 'el-col';

var defaultHeader = {
  'class': 'layout-header'
};

var defaultBody = {
  'class': 'layout-body'
};

var defaultFooter = {
  'class': 'layout-footer'
};

function createLayout(meta, type, slot, layout) {
  var tagName = type === 'row' ? rowTag : type === 'col' ? colTag : 'div';
  var h = '<' + tagName + ' ' + toProps(meta, ['isSlot', 'slot', 'rows', 'cols']) + '>';
  var b = '';
  if (Array.isArray(meta.rows) && meta.rows.length > 0) {
    b = meta.rows.map(function (row) {
      return createLayout(row, 'row', slot);
    }).join('');
  } else if (Array.isArray(meta.cols) && meta.cols.length > 0) {
    b = meta.cols.map(function (col) {
      return createLayout(col, 'col', slot);
    }).join('');
  } else if (meta.slot) {
    if (meta.slot === slot) {
      if (layout.slotCount > 0) {
        meta.slot = slot + layout.slotCount;
      }
      layout.slotCount++;
    }
    b = '<slot name="' + meta.slot + '"/>';
  }
  var f = '</' + tagName + '>';
  return '' + h + b + f;
}

function creatTemplate(pos, defaultOption, slot, layout) {
  var p = {};
  if ((typeof pos === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(pos)) === 'object') {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(p, defaultOption, pos);
  } else if (Array.isArray(pos) && pos.length > 0) {
    if (pos[0].cols) {
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(p, defaultOption, { rows: pos });
    } else {
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(p, defaultOption, { rows: [{ cols: pos }] });
    }
  } else {
    pos = typeof pos === 'string' && pos ? pos : slot;
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(p, defaultOption, { slot: pos });
  }
  return createLayout(p, null, slot, layout);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FacLayout',
  template: '<div/>',
  props: {
    conf: {
      type: [String, Object],
      require: true
    },
    layoutClass: String
  },
  data: function data() {
    var conf = this.conf;
    if (typeof conf === 'string') {
      console.log('It is not implement，please wait!!！');
    }
    if (!conf.header && !conf.body && !conf.footer) {
      conf = { body: conf };
    }

    var slotCount = 0;
    return {
      slotCount: slotCount,
      header: conf.header,
      body: conf.body,
      footer: conf.footer
    };
  },

  watch: {
    meta: function meta(val) {
      if (!val.header && !val.body && !val.footer) {
        val = { body: val };
      }
      this.header = val.header;
      this.body = val.body;
      this.footer = val.footer;
      this.$mount();
    }
  },
  beforeMount: function beforeMount() {
    var h = '';
    var lclass = this.layoutClass ? ' ' + this.layoutClass : '';
    this.slotCount = 0;
    if (this.header) {
      h = creatTemplate(this.header, defaultHeader, 'header', this);
    }
    this.slotCount = 0;
    var b = creatTemplate(this.body, defaultBody, 'body', this);
    this.slotCount = 0;
    var f = '';
    if (this.footer) {
      f = creatTemplate(this.footer, defaultFooter, 'footer', this);
    }
    toRender(this, '<div class="page-layout' + lclass + '">' + h + b + f + '</div>');
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  fayout: {
    rowTag: 'el-row',
    colTag: 'el-col'
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fayout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_less__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fansion_base__);






var layouts = {
  default: __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = ({
  fayout: __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */],

  data: layouts,

  getLayout: function getLayout(name) {
    return name ? layouts[name.toClassify()] || __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */];
  },

  addLayout: __WEBPACK_IMPORTED_MODULE_2_fansion_base___default.a.builder.register(layouts)
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fansion_base__);







var isNotNull = __WEBPACK_IMPORTED_MODULE_4_fansion_base___default.a.util.isNotNull;

var components = {};

var load = function load(type) {
  return components[type];
};

var addComp = __WEBPACK_IMPORTED_MODULE_4_fansion_base___default.a.builder.register(components);

var getModel = function getModel(field) {
  if (!field) {
    return 'model';
  }
  var model = void 0;
  if (field.startsWith('.')) {
    model = 'page.rootModel';
    field = field.substr(1);
  } else {
    model = 'model';
  }
  return model + '[\'' + field.split('.').join('\'][\'') + '\']';
};

function propVal(obj1, obj2, dv) {
  var r = dv;

  for (var _len = arguments.length, prop = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    prop[_key - 3] = arguments[_key];
  }

  prop.every(function (p) {
    var v = obj1[p];
    if (isNotNull(v)) {
      r = v;
      return false;
    }
    v = obj2[p];
    if (isNotNull(v)) {
      r = v;
      return false;
    }
  });
  return r;
}

var buildTagProp = function buildTagProp(reg, conf) {
  var propStr = void 0;
  var props = conf.props || {};
  var otherProps = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, props);
  if (reg.props) {
    var dvs = reg.default || {};
    propStr = reg.props.map(function (p) {
      var pt = p.split(':');
      p = pt[0];
      var t = pt.length > 1 ? pt[1] : 'string';
      var dp = ':' + p;
      delete otherProps[p];
      delete otherProps[dp];
      if (p === 'page' || p === 'conf') {
        var m = propVal(conf, props, p, p, dp);
        return ':' + p + '="' + m + '"';
      } else if (p === 'vModel' || p === 'v-model') {
        var _m = propVal(conf, props, null, p);
        if (isNotNull(_m)) {
          return 'v-model="' + _m + '"';
        }
        var fd = conf['field'] || props['field'];
        if (isNotNull(fd)) {
          return 'v-model="' + getModel(fd) + '"';
        }
      } else if (p.startsWith('vModel.') || p.startsWith('v-model.')) {
        var suf = p.substring(p.indexOf('.') + 1);
        var _m2 = propVal(conf, props, null, p, 'vModel', 'v-model');
        if (isNotNull(_m2)) {
          return 'v-model.' + suf + '="' + _m2 + '"';
        }
        var _fd = conf['field'] || props['field'];
        if (isNotNull(_fd)) {
          var _m3 = getModel(_fd);
          return 'v-model.' + suf + '="' + _m3 + '"';
        }
      } else if (p === 'vText' || p === 'v-text') {
        var _fd2 = conf['field'] || props['field'];
        if (isNotNull(_fd2)) {
          return 'v-text="' + getModel(_fd2) + '"';
        }
      } else if (p === 'vHtml' || p === 'v-html') {
        var _fd3 = conf.field || conf.props.field;
        if (isNotNull(_fd3)) {
          return 'v-html="' + getModel(_fd3) + '"';
        }
      } else if (p === 'model') {
        var _m4 = propVal(conf, props, null, p);
        if (isNotNull(_m4)) {
          return p + '="' + _m4 + '"';
        }
        _m4 = propVal(conf, props, 'model', dp);
        return ':' + p + '="' + _m4 + '"';
      } else if (p === 'showLabel.sync' || p === 'show-label.sync' || p === 'vLabel' || p === 'v-label') {
        var _m5 = propVal(conf, props, null, p);
        if (isNotNull(_m5)) {
          return ':show-label.sync="' + _m5 + '"';
        }
        var _fd4 = conf['labelField'] || props['labelField'];
        if (isNotNull(_fd4)) {
          return ':show-label.sync="' + getModel(_fd4) + '"';
        }
        var bfd = conf['field'] || props['field'];
        if (isNotNull(bfd)) {
          return ':show-label.sync="' + getModel(_fd4 + '_label') + '"';
        }
      } else {
        var _m6 = propVal(conf, props, null, p);
        if (isNotNull(_m6)) {
          return t === 'string' ? p + '="' + _m6 + '"' : p + '=' + _m6;
        }
        _m6 = propVal(conf, props, null, dp);
        if (isNotNull(_m6) && typeof _m6 !== 'string') {
          _m6 = 'conf[\'' + dp + '\']';
        }
        if (isNotNull(_m6)) {
          return ':' + p.toDash() + '="' + _m6 + '"';
        }
        _m6 = dvs[p];
        if (isNotNull(_m6)) {
          return t === 'string' || typeof _m6 === 'string' ? p.toDash() + '="' + _m6 + '"' : p.toDash() + '=' + _m6;
        }
        _m6 = dvs[dp];
        if (isNotNull(_m6)) {
          return t === 'string' || typeof _m6 === 'string' ? ':' + p.toDash() + '="' + _m6 + '"' : ':' + p.toDash() + '=' + _m6;
        }
      }
    }).join(' ');
    propStr += __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(otherProps).map(function (_ref) {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
          k = _ref2[0],
          y = _ref2[1];

      if (isNotNull(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  } else if (conf.props) {
    propStr = ':page="page" :conf="conf "';
    propStr += __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(conf.props).map(function (_ref3) {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
          k = _ref4[0],
          y = _ref4[1];

      if (isNotNull(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  } else {
    propStr = ':page="page" :conf="conf "';
    propStr += __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(conf).map(function (_ref5) {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
          k = _ref6[0],
          y = _ref6[1];

      if (isNotNull(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  }
  if (conf.events) {
    propStr += __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(conf.events).map(function (_ref7) {
      var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
          k = _ref8[0],
          y = _ref8[1];

      if (isNotNull(y)) {
        if (!k.startsWith('@')) {
          k = '@' + k;
        }
        if (y.indexOf('.') < 0) {
          y = 'page.' + y;
        }
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  }
  return propStr;
};

var compile = function compile(config) {
  var type = typeof config === 'string' ? config : config.type || 'input';
  var comp = load(type);
  if (typeof comp === 'function') {
    return comp(config);
  }
  if (typeof comp.component === 'function' && !comp.factory) {
    return comp.component(config);
  }
  var props = comp.props,
      attrs = comp.attrs;

  var t = typeof props === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(props);
  var tagName = comp.tagName || type;
  if (t === 'function') {
    props = props(tagName, comp, config);
  } else if (t === 'string') {
    props = eval(props);
  } else {
    props = buildTagProp(comp, config);
  }
  var attrsProps = '';
  if (attrs) {
    attrsProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(attrs).map(function (_ref9) {
      var _ref10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref9, 2),
          k = _ref10[0],
          v = _ref10[1];

      return k + '="' + v + '"';
    }).join(' ');
    if (attrsProps.length > 0) {
      attrsProps = ' ' + attrsProps;
    }
  }
  var components = {};
  if (comp.component) {
    components[tagName] = comp.component;
  }
  var slot = config.pos ? ' slot="' + config.pos + '"' : '';
  return {
    components: components,
    template: '<' + tagName + ' ' + props + attrsProps + slot + '/>'
  };
};

var compileComps = function compileComps(conf) {
  var cs = {};
  return {
    components: cs,
    template: !conf ? '' : Array.isArray(conf) ? conf.map(function (v, i) {
      if (!v) {
        return;
      }
      if (!v.conf && (!v.props || !v.props.conf)) {
        v.conf = 'conf.components[' + i + ']';
      }

      var _compile = compile(v),
          components = _compile.components,
          template = _compile.template;

      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(cs, components);
      return template;
    }).join('') : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(conf).map(function (_ref11) {
      var k = _ref11.k,
          v = _ref11.v;

      if (!v.conf && (!v.props || !v.props.conf)) {
        v.conf = 'conf.components[\'' + k + '\']';
      }

      var _compile2 = compile(v),
          components = _compile2.components,
          template = _compile2.template;

      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(cs, components);
      return template;
    }).join('')
  };
};

var confs2Comps = function confs2Comps(comps, components) {
  if (!comps) {
    return components;
  }
  if (components === null || components === undefined) {
    components = {};
  }
  if (Array.isArray(comps)) {
    comps.forEach(function (item) {
      if (typeof item === 'string') {
        var compMeta = load(item);
        if (compMeta.component) {
          components[compMeta.tagName || item] = compMeta.component;
        }
      } else if ((typeof item === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(item)) === 'object' && (item.name || item.componentName)) {
        components[item.name || item.componentName] = item;
      }
    });
  } else if ((typeof comps === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(comps)) === 'object') {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(comps).forEach(function (_ref12) {
      var _ref13 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref12, 2),
          k = _ref13[0],
          v = _ref13[1];

      if (typeof v === 'string') {
        var compMeta = load(v);
        if (compMeta.component) {
          components[k] = compMeta.component;
        }
      } else {
        components[k] = v;
      }
    });
  }
  return components;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: components,

  load: load,

  addComp: addComp,

  buildTagProp: buildTagProp,

  compile: compile,

  compileComps: compileComps,

  confs2Comps: confs2Comps
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fansion_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates__ = __webpack_require__(10);
var _this = this;




var metas = {};

var rules = [__WEBPACK_IMPORTED_MODULE_1__templates__["a" /* default */].rule];

var getMeta = function getMeta(name) {
  var meta = metas[name];
  if (meta) {
    return meta;
  }
  rules.every(function (r) {
    meta = r(name, _this);
    if (meta) {
      return false;
    }
  });
  return meta;
};

var addMeta = __WEBPACK_IMPORTED_MODULE_0_fansion_base___default.a.builder.register(metas, 'fac-name');

var addRule = __WEBPACK_IMPORTED_MODULE_0_fansion_base___default.a.builder.collection(rules);

/* harmony default export */ __webpack_exports__["a"] = ({
  data: metas,

  getMeta: getMeta,

  addMeta: addMeta,

  addRule: addRule,

  init: function init(options) {
    if (!options) {
      return;
    }
    addMeta(options.metas);
    addRule(options.rules);
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fansion_base__);




var getJson = __WEBPACK_IMPORTED_MODULE_1_fansion_base___default.a.rest.getJson,
    depend = __WEBPACK_IMPORTED_MODULE_1_fansion_base___default.a.mod.depend;

var templates = {};

var getMeta = function getMeta(path, metas) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
    getJson(path).then(function (meta) {
      var mp = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        resolve(meta);
      });

      if (metas && meta.base) {
        depend(mp, metas.get(meta.base))().then(function (data) {
          data['facName'] = path;
          metas.addMeta(data);
          resolve(data);
        });
      } else if (meta.template) {
        depend(mp, [templates.get(meta.template)])().then(function (data) {
          data['facName'] = path;
          metas.addMeta(data);
          resolve(data);
        });
      } else {
        resolve(meta);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: templates,

  get: function get(name) {
    return templates[name];
  },

  addTemplate: __WEBPACK_IMPORTED_MODULE_1_fansion_base___default.a.builder.register(templates),

  rule: function rule(path, metas) {
    return path ? function (_) {
      return getMeta(path, metas);
    } : null;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fayout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fac__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__metas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__options__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fansion_base__);











var version = '1.0.0';

var pageMetaRule = function pageMetaRule(path, pageMetas) {
  if (path.startsWith('$')) {
    var meta = { props: { config: path.substring(1) }, component: __WEBPACK_IMPORTED_MODULE_3__fac__["a" /* default */] };
    pageMetas.addPageMeta(path, meta);
    return meta;
  }
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.component(__WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__fac__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__fac__["a" /* default */]);
  __WEBPACK_IMPORTED_MODULE_7_fansion_base___default.a.init({ page: { rules: pageMetaRule } });
  init(__WEBPACK_IMPORTED_MODULE_6__options__["a" /* default */]);
  init(opts);
};

var init = function init() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  opts.meta && __WEBPACK_IMPORTED_MODULE_4__metas__["a" /* default */].init(opts.meta);
  opts.layouts && __WEBPACK_IMPORTED_MODULE_1__layouts__["a" /* default */].addLayout(opts.layouts);
  opts.cometas && __WEBPACK_IMPORTED_MODULE_2__comps__["a" /* default */].addComp(opts.cometas);
  opts.templates && __WEBPACK_IMPORTED_MODULE_5__templates__["a" /* default */].addTemplate(opts.templates);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  version: version,
  install: install,
  init: init,
  fayout: __WEBPACK_IMPORTED_MODULE_0__fayout__["a" /* default */],
  layouts: __WEBPACK_IMPORTED_MODULE_1__layouts__["a" /* default */],
  comps: __WEBPACK_IMPORTED_MODULE_2__comps__["a" /* default */],
  fac: __WEBPACK_IMPORTED_MODULE_3__fac__["a" /* default */],
  metas: __WEBPACK_IMPORTED_MODULE_4__metas__["a" /* default */],
  templates: __WEBPACK_IMPORTED_MODULE_5__templates__["a" /* default */],
  options: __WEBPACK_IMPORTED_MODULE_6__options__["a" /* default */]
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./style.less", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./style.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/*\n * Copyright(c) Oflane Software 2017. All Rights Reserved.\n */\n.page-layout .layout-header {\n  padding: 10px 30px;\n  width: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  margin: 0px;\n  position: relative;\n  background: none 0px 0px repeat scroll rgba(0, 0, 0, 0.02);\n}\n.page-layout .layout-rows {\n  padding: 0;\n}\n.page-layout .layout-rows .el-row {\n  padding: 10px 30px;\n}\n.page-layout .layout-rows .el-row + .el-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n}\n.page-layout .layout-body {\n  position: relative;\n  margin: 30px;\n}\n.page-layout .layout-footer {\n  position: relative;\n  margin: 0 30px 30px 30px;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comps__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fansion_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fansion_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fansion_base__);












var _fase$render = __WEBPACK_IMPORTED_MODULE_8_fansion_base___default.a.render,
    toRender = _fase$render.toRender,
    callHook = _fase$render.callHook,
    _fase$util = __WEBPACK_IMPORTED_MODULE_8_fansion_base___default.a.util,
    once = _fase$util.once,
    proxy = _fase$util.proxy,
    getJson = __WEBPACK_IMPORTED_MODULE_8_fansion_base___default.a.rest.getJson;

function getLayout(meta) {
  var name = meta.layout;
  var exist = !!name;
  if (exist && typeof name !== 'string') {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({ exist: exist }, name);
  }
  return { exist: exist, name: name };
}

function getMeta(vm) {
  var meta = typeof vm.meta === 'string' ? __WEBPACK_IMPORTED_MODULE_6__metas__["a" /* default */].getMeta(vm.meta) : vm.meta;
  if (typeof meta !== 'function') {
    return meta;
  }

  var factory = meta;
  if (factory.resolved) {
    return factory.resolved;
  }

  var resolve = once(function (res) {
    if (res.__esModule) {
      res = res.default;
    }
    if (typeof res.uimeta === 'string') {
      try {
        getJson(res.uimeta).then(function (meta) {
          res = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(res, meta);
        });
      } catch (e) {
        console.log(e);
      } finally {
        res.uimeta = null;
        factory.resolved = res;
        vm.metaing = false;
        vm.$mount();
        callHook(vm, 'mounted');
      }
    } else {
      factory.resolved = res;
      vm.metaing = false;
      vm.$mount();
      callHook(vm, 'mounted');
    }
  });
  var reject = once(function (reason) {
    console.log(reason);
    vm.metaing = false;
    factory.error = true;
  });
  vm.metaing = true;
  vm._isMounted = true;
  meta = factory(resolve, reject);
  if ((typeof meta === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(meta)) === 'object' && typeof meta.then === 'function' && !factory.resolved) {
    meta.then(resolve, reject);
    return;
  }
  factory.resolved = meta;
  vm.metaing = false;
  return meta;
}
/* harmony default export */ __webpack_exports__["a"] = ({
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

  data: function data() {
    var layout = {};
    var meta = {};
    if (!this.page) {
      this.page = this;
    }
    return {
      meta: meta,
      layout: layout,
      pageLoading: true,
      pageState: 'init'
    };
  },

  watch: {
    meta: function meta() {
      this.$mount();
      callHook(this, 'mounted');
    },
    pageState: function pageState(val, oldVal) {
      val !== oldVal && this.$emit('stateChanged', val);
    }
  },
  beforeMount: function beforeMount() {
    var _self = this;
    var meta = getMeta(_self);
    if (!meta || _self.metaing) {
      return;
    }
    _self.meta = meta;

    var layout = getLayout(meta);

    var _ref = meta.noc ? meta : __WEBPACK_IMPORTED_MODULE_7__comps__["a" /* default */].compileComps(meta.components),
        components = _ref.components,
        template = _ref.template;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(_self, meta.methods, { layout: layout.meta }, typeof meta.member === 'function' ? meta.member.call(this) : meta.member);

    var metaData = typeof meta.data === 'function' ? meta.data.call(this) : meta.data;

    if (metaData !== null && (typeof metaData === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(metaData)) === 'object') {
      var old = _self._data.__ob__.vmCount;
      _self._data.__ob__.vmCount = 0;
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(metaData).forEach(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        _self.$set(_self._data, k, v);
        proxy(_self, '_data', k);
      });
      _self._data.__ob__.vmCount = old;
    }

    if (layout.exist) {
      var layoutComp = __WEBPACK_IMPORTED_MODULE_5__layouts__["a" /* default */].get(layout.name);
      toRender(this, '<layout :conf="layoutConf" v-loading="pageLoading">' + template + '</layout>', __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({ layout: layoutComp }, components));
    } else {
      toRender(this, '' + template, components);
    }
  },
  mounted: function mounted() {
    if (typeof this.initPage === 'function') {
      this.initPage();
    }
    var vm = this;
    __WEBPACK_IMPORTED_MODULE_4_vue___default.a.nextTick(function () {
      vm.pageLoading = false;
    });
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ })
/******/ ]);
});