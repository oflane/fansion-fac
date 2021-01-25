(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fansion-base"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("fansion-fac", ["fansion-base", "vue"], factory);
	else if(typeof exports === 'object')
		exports["fansion-fac"] = factory(require("fansion-base"), require("vue"));
	else
		root["fansion-fac"] = factory(root["fansion-base"], root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fansion_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var fansion_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fansion_base__WEBPACK_IMPORTED_MODULE_4__);







var isNotEmpty = fansion_base__WEBPACK_IMPORTED_MODULE_4___default.a.util.isNotEmpty;

var CONTENT_KEY = '#content';

var components = {};

var load = function load(type) {
  return components[type.toDash()] || components[type.toClassify()];
};

var addComp = fansion_base__WEBPACK_IMPORTED_MODULE_4___default.a.builder.register(components);

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
    if (isNotEmpty(v)) {
      r = v;
      return false;
    }
    v = obj2[p];
    if (isNotEmpty(v)) {
      r = v;
      return false;
    }
    return true;
  });
  return r;
}

var isNullOfConf = function isNullOfConf(comp) {
  return !comp.conf && !comp[':conf'] && (!comp.props || !comp.props.conf && !comp.props[':conf']);
};

var buildTagProp = function buildTagProp(reg, conf) {
  var propStr = void 0;
  var props = conf.props || {};
  var otherProps = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, props);
  if (reg.props) {
    var dvs = reg.default || {};
    propStr = reg.props.map(function (p) {
      var pt = p.split(':');
      p = pt[0];
      var t = pt.length > 1 ? pt[1] : 'string';
      var dp = ':' + p;
      delete otherProps[p];
      delete otherProps[dp];
      if (p === CONTENT_KEY) {
        return '';
      } else if (p === 'page' || p === 'conf' || p === 'fac') {
        var m = propVal(conf, props, p, p, dp);
        return ':' + p + '="' + m + '"';
      } else if (p === 'vModel' || p === 'v-model') {
        var _m = propVal(conf, props, null, p);
        if (isNotEmpty(_m)) {
          return 'v-model="' + _m + '"';
        }
        var fd = conf.field || props.field;
        if (isNotEmpty(fd)) {
          return 'v-model="' + getModel(fd) + '"';
        }
      } else if (p.startsWith('vModel.') || p.startsWith('v-model.')) {
        var suf = p.substring(p.indexOf('.') + 1);
        var _m2 = propVal(conf, props, null, p, 'vModel', 'v-model');
        if (isNotEmpty(_m2)) {
          return 'v-model.' + suf + '="' + _m2 + '"';
        }
        var _fd = conf.field || props.field;
        if (isNotEmpty(_fd)) {
          var _m3 = getModel(_fd);
          return 'v-model.' + suf + '="' + _m3 + '"';
        }
      } else if (p === 'vText' || p === 'v-text') {
        var _fd2 = conf.field || props.field;
        if (isNotEmpty(_fd2)) {
          return 'v-text="' + getModel(_fd2) + '"';
        }
      } else if (p === 'vHtml' || p === 'v-html') {
        var _fd3 = conf.field || conf.props.field;
        if (isNotEmpty(_fd3)) {
          return 'v-html="' + getModel(_fd3) + '"';
        }
      } else if (p === 'model') {
        var _m4 = propVal(conf, props, null, p);
        if (isNotEmpty(_m4)) {
          return p + '="' + _m4 + '"';
        }
        _m4 = propVal(conf, props, 'model', dp);
        return ':' + p + '="' + _m4 + '"';
      } else if (p === 'showLabel.sync' || p === 'show-label.sync' || p === 'vLabel' || p === 'v-label') {
        var _m5 = propVal(conf, props, null, p);
        if (isNotEmpty(_m5)) {
          return ':show-label.sync="' + _m5 + '"';
        }
        var _fd4 = conf.labelField || props.labelField;
        if (isNotEmpty(_fd4)) {
          return ':show-label.sync="' + getModel(_fd4) + '"';
        }
        var bfd = conf.field || props.field;
        if (isNotEmpty(bfd)) {
          return ':show-label.sync="' + getModel(bfd + '_label') + '"';
        }
      } else {
        var _m6 = propVal(conf, props, null, p);
        if (isNotEmpty(_m6)) {
          return typeof _m6 === 'boolean' ? _m6 ? p.toDash() : '' : t === 'string' ? p.toDash() + '="' + _m6 + '"' : t === 'boolean' ? _m6 ? p.toDash() : '' : p.toDash() + '=' + _m6;
        }
        _m6 = propVal(conf, props, null, dp);
        if (isNotEmpty(_m6) && typeof _m6 !== 'string') {
          _m6 = 'conf[\'' + dp + '\']';
        }
        if (isNotEmpty(_m6)) {
          return ':' + p.toDash() + '="' + _m6 + '"';
        }
        _m6 = dvs[p];
        if (isNotEmpty(_m6)) {
          return typeof _m6 === 'boolean' ? _m6 ? p.toDash() : '' : t === 'string' ? p.toDash() + '="' + _m6 + '"' : t === 'boolean' ? _m6 ? p.toDash() : '' : p.toDash() + '=' + _m6;
        }
        _m6 = dvs[dp];
        if (isNotEmpty(_m6)) {
          return typeof _m6 === 'boolean' ? _m6 ? p.toDash() : '' : t === 'string' || typeof _m6 === 'string' ? ':' + p.toDash() + '="' + _m6 + '"' : ':' + p.toDash() + '=' + _m6;
        }
      }
    }).join(' ');
    propStr += babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(otherProps).map(function (_ref) {
      var _ref2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
          k = _ref2[0],
          y = _ref2[1];

      if (isNotEmpty(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  } else if (conf.props) {
    propStr = ':page="page" :fac="fac" :conf="conf"';
    propStr += babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(conf.props).map(function (_ref3) {
      var _ref4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
          k = _ref4[0],
          y = _ref4[1];

      if (isNotEmpty(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  } else {
    propStr = ':page="page" :fac="fac" :conf="conf"';
    propStr += babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(conf).map(function (_ref5) {
      var _ref6 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 2),
          k = _ref6[0],
          y = _ref6[1];

      if (isNotEmpty(y)) {
        return k + '="' + y + '"';
      }
      return '';
    }).join(' ');
  }
  if (conf.events) {
    propStr += babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(conf.events).map(function (_ref7) {
      var _ref8 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),
          k = _ref8[0],
          y = _ref8[1];

      if (isNotEmpty(y)) {
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

  var t = typeof props === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props);
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
    attrsProps = babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(attrs).map(function (_ref9) {
      var _ref10 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 2),
          k = _ref10[0],
          v = _ref10[1];

      return typeof v === 'boolean' ? v ? k.toDash() : '' : k + '="' + v + '"';
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
  var content = config[CONTENT_KEY];
  return {
    components: components,
    template: content ? '<' + tagName + ' ' + props + attrsProps + slot + '>' + content + '</' + tagName + '>' : '<' + tagName + ' ' + props + attrsProps + slot + '/>'
  };
};

var compileComp = function compileComp(cs, v, i) {
  if (!v) {
    return '';
  }
  isNullOfConf(v) && (v.conf = 'conf.components[' + i + ']');

  var _compile = compile(v),
      components = _compile.components,
      template = _compile.template;

  babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(cs, components);
  return template;
};

var compileComps = function compileComps(conf) {
  var cs = {};
  return {
    components: cs,
    template: !conf ? '' : (Array.isArray(conf) ? conf.map(function (v, i) {
      return compileComp(cs, v, i);
    }) : babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(conf).map(function (_ref11) {
      var _ref12 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref11, 2),
          i = _ref12[0],
          v = _ref12[1];

      return compileComp(cs, v, i);
    })).join('')
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
      } else if ((typeof item === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item)) === 'object' && (item.name || item.componentName)) {
        components[item.name || item.componentName] = item;
      }
    });
  } else if ((typeof comps === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(comps)) === 'object') {
    babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(comps).forEach(function (_ref13) {
      var _ref14 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref13, 2),
          k = _ref14[0],
          v = _ref14[1];

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
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n * Copyright(c) Oflane Software 2017. All Rights Reserved.\n */\n.page-layout .layout-header {\n  padding: 10px 30px;\n  width: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  margin: 0px;\n  position: relative;\n  background: none 0px 0px repeat scroll rgba(0, 0, 0, 0.02);\n}\n.page-layout .layout-rows {\n  padding: 0;\n}\n.page-layout .layout-rows .el-row {\n  padding: 10px 30px;\n}\n.page-layout .layout-rows .el-row + .el-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n}\n.page-layout .layout-body {\n  position: relative;\n  margin: 30px;\n}\n.page-layout .layout-footer {\n  position: relative;\n  margin: 0 30px 30px 30px;\n}\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.clearfix:after {\n  content: \" \";\n  display: block;\n  clear: both;\n  height: 0;\n}\n.clearfix {\n  zoom: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/assign"
var assign_ = __webpack_require__(1);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: external "babel-runtime/helpers/typeof"
var typeof_ = __webpack_require__(4);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "fansion-base"
var external_fansion_base_ = __webpack_require__(0);
var external_fansion_base_default = /*#__PURE__*/__webpack_require__.n(external_fansion_base_);

// CONCATENATED MODULE: ./src/options.js

/* harmony default export */ var options = ({
  fayout: {
    rowTag: 'el-row',
    colTag: 'el-col'
  }
});
// CONCATENATED MODULE: ./src/fayout.js







var _fase$render = external_fansion_base_default.a.render,
    toRender = _fase$render.toRender,
    toProps = _fase$render.toProps;

var rowTag = options.fayout.rowTag || 'el-row';

var colTag = options.fayout.colTag || 'el-col';

var defaultHeader = {
  class: 'layout-header'
};

var defaultBody = {
  class: 'layout-body'
};

var defaultFooter = {
  class: 'layout-footer'
};

function createLayout(conf, type, slot, layout) {
  var tagName = type === 'row' ? rowTag : type === 'col' ? colTag : 'div';
  var h = '<' + tagName + ' ' + toProps(conf, ['isSlot', 'slot', 'rows', 'cols', 'children']) + '>';
  var b = '';
  if (Array.isArray(conf.rows) && conf.rows.length > 0) {
    b = conf.rows.map(function (row) {
      return createLayout(row, 'row', slot);
    }).join('');
  } else if (Array.isArray(conf.cols) && conf.cols.length > 0) {
    b = conf.cols.map(function (col) {
      return createLayout(col, 'col', slot);
    }).join('');
  } else if (conf.children) {
    b = conf.children.map(function (child) {
      return createLayout(child, 'child', slot);
    }).join('');
  } else if (conf.slot) {
    if (conf.slot === slot) {
      if (layout.slotCount > 0) {
        conf.slot = slot + layout.slotCount;
      }
      layout.slotCount++;
    }
    b = '<slot name="' + conf.slot + '"/>';
  }
  var f = '</' + tagName + '>';
  return '' + h + b + f;
}

function creatTemplate(pos, defaultOption, slot, layout) {
  var p = {};
  if ((typeof pos === 'undefined' ? 'undefined' : typeof_default()(pos)) === 'object') {
    assign_default()(p, defaultOption, pos);
  } else if (Array.isArray(pos) && pos.length > 0) {
    if (pos[0].cols) {
      assign_default()(p, defaultOption, { rows: pos });
    } else {
      assign_default()(p, defaultOption, { rows: [{ cols: pos }] });
    }
  } else {
    pos = typeof pos === 'string' && pos ? pos : slot;
    assign_default()(p, defaultOption, { slot: pos });
  }
  return createLayout(p, null, slot, layout);
}

/* harmony default export */ var fayout = ({
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

    return {
      slotCount: 0,
      header: conf.header,
      body: conf.body,
      footer: conf.footer
    };
  },

  watch: {
    conf: function conf(val) {
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
// EXTERNAL MODULE: ./src/style.less
var style = __webpack_require__(9);

// CONCATENATED MODULE: ./src/layouts.js






var layouts = {
  default: fayout
};

/* harmony default export */ var src_layouts = ({
  fayout: fayout,

  data: layouts,

  getLayout: function getLayout(name) {
    return name ? layouts[name.toClassify()] || fayout : fayout;
  },

  addLayout: external_fansion_base_default.a.builder.register(layouts)
});
// EXTERNAL MODULE: ./src/comps.js
var comps = __webpack_require__(5);

// EXTERNAL MODULE: external "babel-runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/entries"
var entries_ = __webpack_require__(3);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/keys"
var keys_ = __webpack_require__(7);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(6);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "babel-runtime/core-js/promise"
var promise_ = __webpack_require__(8);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_);

// CONCATENATED MODULE: ./src/templates.js




var _fase$rest = external_fansion_base_default.a.rest,
    gson = _fase$rest.gson,
    furl = _fase$rest.furl,
    depend = external_fansion_base_default.a.mod.depend,
    isFunction = external_fansion_base_default.a.util.isFunction;

var templates = {};

var getTemplate = function getTemplate(name) {
  return templates[name];
};

var loadMetaUrl = '/fac/meta/:path';

var setLoadMetaUrl = function setLoadMetaUrl(url) {
  return loadMetaUrl = url;
};

var templates_getMeta = function getMeta(path, addMeta, metas) {
  return new promise_default.a(function (resolve) {
    gson(furl(loadMetaUrl, { path: path }), null, function (meta) {
      var mp = new promise_default.a(function (resolve) {
        resolve(meta);
      });

      if (meta && meta.base) {
        depend(mp, metas[meta.base]).then(function (data) {
          addMeta(path, data);
          resolve(data);
        });
      } else if (meta.template) {
        depend(mp, [getTemplate(meta.template)]).then(function (data) {
          var facMeta = isFunction(data) ? data(meta) : data;
          addMeta(path, facMeta);
          resolve(facMeta);
        });
      } else {
        resolve(meta);
      }
    });
  });
};

/* harmony default export */ var src_templates = ({
  data: templates,

  getTemplate: getTemplate,

  addTemplate: external_fansion_base_default.a.builder.register(templates),

  rule: function rule(path, addMeta, metas) {
    return path ? templates_getMeta(path, addMeta, metas) : null;
  },

  setLoadMetaUrl: setLoadMetaUrl
});
// CONCATENATED MODULE: ./src/metas.js





var metas_metas = {};

var rules = [src_templates.rule];

var metas_getMeta = function getMeta(name) {
  var meta = metas_metas[name];
  if (meta) {
    return meta;
  }
  rules.every(function (r) {
    meta = r(name, metas_addMeta, metas_metas);
    if (meta) {
      return false;
    }
  });
  return meta;
};

var metas_addMeta = external_fansion_base_default.a.builder.register(metas_metas, 'fac-name');

var addRule = external_fansion_base_default.a.builder.collection(rules);

/* harmony default export */ var src_metas = ({
  data: metas_metas,

  getMeta: metas_getMeta,

  addMeta: metas_addMeta,

  addRule: addRule,

  init: function init(options) {
    if (!options) {
      return;
    }
    metas_addMeta(options.metas);
    addRule(options.rules);
  }
});
// CONCATENATED MODULE: ./src/fac.js













var fac_fase$render = external_fansion_base_default.a.render,
    fac_toRender = fac_fase$render.toRender,
    resetRender = fac_fase$render.resetRender,
    callHook = fac_fase$render.callHook,
    _fase$util = external_fansion_base_default.a.util,
    once = _fase$util.once,
    proxy = _fase$util.proxy,
    isPromise = _fase$util.isPromise,
    isNotEmptyObject = _fase$util.isNotEmptyObject,
    sure = _fase$util.sure,
    isReserved = _fase$util.isReserved,
    bind = _fase$util.bind,
    fac_gson = external_fansion_base_default.a.rest.gson;

function fac_getLayout(conf) {
  var name = conf.layout;
  var exist = !!name;
  if (exist && typeof name !== 'string') {
    return name.conf ? assign_default()({ exist: exist }, name) : { exist: exist, conf: name };
  }
  return { exist: exist, name: name };
}

function getConf(vm) {
  var conf = typeof vm.meta === 'string' ? src_metas.getMeta(vm.meta) : vm.meta;
  if (typeof conf !== 'function' && !isPromise(conf)) {
    return conf;
  }

  var factory = conf;

  if (factory.resolved) {
    return factory.resolved;
  }

  var resolve = once(function (res) {
    if (res.__esModule) {
      res = res.default;
    }
    if (typeof res.uimeta === 'string') {
      try {
        fac_gson(res.uimeta).then(function (uimeta) {
          res = assign_default()(res, uimeta);
        });
      } catch (e) {
        console.log(e);
      } finally {
        res.uimeta = null;
        factory.resolved = res;
        vm.confing = false;
        vm.$mount();
        callHook(vm, 'mounted');
      }
    } else {
      factory.resolved = res;
      vm.confing = false;
      vm.$mount();
      callHook(vm, 'mounted');
    }
  });
  var reject = once(function (reason) {
    console.log(reason);
    vm.confing = false;
    factory.error = true;
  });
  vm.confing = true;
  vm._isMounted = true;
  conf = typeof factory === 'function' ? factory(resolve, reject) : conf;
  if ((typeof conf === 'undefined' ? 'undefined' : typeof_default()(conf)) === 'object' && isPromise(conf) && !factory.resolved) {
    conf.then(resolve, reject);
    return;
  }
  factory.resolved = conf;
  vm.confing = false;
  return conf;
}

function release(vm) {
  var r = vm.__rls;
  if (!r) {
    return;
  }
  r.props && r.props.forEach(function (k) {
    return sure(vm[k] = null) && delete vm[k];
  });
  var old = vm._data.__ob__.vmCount;
  vm._data.__ob__.vmCount = 0;
  r.setss && r.setss.forEach(function (k) {
    return sure(vm.$delete(vm._data, k)) && delete vm._data[k];
  });
  vm._data.__ob__.vmCount = old;
  r.watch.forEach(function (k) {
    return k();
  });
  !vm.data && sure(vm.model = {});
  vm.layout = {};
  vm.pageLoading = true;
  vm.pageState = 'init';
}
function initMembers(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (props && props.key) {
      external_vue_default.a.util.warn('Method "' + key + '" has already been defined as a prop.', vm);
    }
    if (key in vm && isReserved(key)) {
      external_vue_default.a.util.warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
    }
    vm[key] = typeof methods[key] !== 'function' ? methods[key] : bind(methods[key], vm);
  }
}
/* harmony default export */ var fac = ({
  name: 'Fac',
  template: '<div/>',
  props: {
    meta: {
      type: [String, Object],
      required: true
    },
    data: {
      type: [String, Object],
      default: function _default() {
        return {};
      }
    },
    owner: Object
  },

  data: function data() {
    var layout = {};
    var conf = this.meta;
    var page = this.owner ? this.owner : this;
    var fac = this;
    var model = this.data;
    return {
      fac: fac,
      model: model,
      conf: conf,
      page: page,
      layout: layout,
      pageLoading: true,
      pageState: 'init'
    };
  },

  watch: {
    meta: function meta() {
      resetRender(this);
      this._update(this._render(), false);
      this.$mount();
    },
    data: function data(v) {
      this.model = v;
    },
    model: function model(v) {
      console.log(v);
    },
    pageState: function pageState(val, oldVal) {
      val !== oldVal && this.$emit('stateChanged', val);
    }
  },
  beforeMount: function beforeMount() {
    var vm = this;
    var conf = getConf(vm);
    if (!conf || vm.confing) {
      return;
    }
    release(vm);
    vm.conf = conf;

    var layout = fac_getLayout(conf);

    var _ref = conf.noc ? conf : comps["a" /* default */].compileComps(conf.components),
        components = _ref.components,
        template = _ref.template;

    var ms = assign_default()({}, conf.methods, { layout: layout.conf }, typeof conf.member === 'function' ? conf.member.call(this) : conf.member);
    var rlsProp = { props: keys_default()(ms) };

    initMembers(vm, ms);

    var confData = typeof conf.data === 'function' ? conf.data.call(this) : conf.data;

    if (isNotEmptyObject(confData)) {
      rlsProp.setss = keys_default()(confData);

      var old = vm._data.__ob__.vmCount;
      vm._data.__ob__.vmCount = 0;
      entries_default()(confData).forEach(function (_ref2) {
        var _ref3 = slicedToArray_default()(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        vm.$set(vm._data, k, v);
        proxy(vm, '_data', k);
      });
      vm._data.__ob__.vmCount = old;
    }
    conf.model && (vm.model = conf.model);
    rlsProp.watch = [];

    conf.watch && entries_default()(conf.watch).forEach(function (_ref4) {
      var _ref5 = slicedToArray_default()(_ref4, 2),
          k = _ref5[0],
          v = _ref5[1];

      if (!v) {
        return;
      }
      if (typeof v === 'function') {
        rlsProp.watch.push(vm.$watch(k, v));
      } else if (typeof v.handler === 'function') {
        var immediate = v.immediate,
            deep = v.deep;

        rlsProp.watch.push(vm.$watch(k, v.handler, { immediate: immediate, deep: deep }));
      }
    });
    vm.__rls = rlsProp;
    if (layout.exist) {
      var layoutComp = src_layouts.getLayout(layout.name);
      fac_toRender(this, '<layout :conf="layout" v-loading="pageLoading">' + template + '</layout>', assign_default()({ layout: layoutComp }, components));
    } else {
      fac_toRender(this, '' + template, components);
    }
  },
  mounted: function mounted() {
    var vm = this;
    if (vm.confing === true) {
      return;
    }
    typeof vm.initPage === 'function' && vm.initPage();
    external_vue_default.a.nextTick(function () {
      return vm.pageLoading = false;
    });
  }
});
// CONCATENATED MODULE: ./src/index.js











var version = '1.0.0';

var src_pageMetaRule = function pageMetaRule(path, addPageMeta, pageMetas) {
  if (path.startsWith('$')) {
    path = path.substring(1);
    var meta = path;
    path = path.prefix('/');
    var pageMeta = pageMetas[path];
    if (pageMeta) {
      return pageMeta;
    }
    pageMeta = { path: path, props: { meta: meta }, component: fac };
    addPageMeta(path, pageMeta);
    return pageMeta;
  }
};

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.component(fayout.name, fayout);
  Vue.component(fac.name, fac);
  external_fansion_base_default.a.init({ pages: { rules: src_pageMetaRule } });
  src_init(options);
  src_init(opts);
};

var src_init = function init() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  opts.meta && src_metas.init(opts.meta);
  opts.layouts && src_layouts.addLayout(opts.layouts);
  opts.cometas && comps["a" /* default */].addComp(opts.cometas);
  opts.templates && src_templates.addTemplate(opts.templates);
  opts.loadMetaUrl && src_templates.setLoadMetaUrl(opts.loadMetaUrl);
};

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: version,
  install: src_install,
  init: src_init,
  fayout: fayout,
  layouts: src_layouts,
  comps: comps["a" /* default */],
  fac: fac,
  metas: src_metas,
  templates: src_templates,
  options: options
});

/***/ })
/******/ ]);
});