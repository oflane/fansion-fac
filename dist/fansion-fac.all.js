!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fansion-base"),require("vue")):"function"==typeof define&&define.amd?define("fansion-fac",["fansion-base","vue"],t):"object"==typeof exports?exports["fansion-fac"]=t(require("fansion-base"),require("vue")):e["fansion-fac"]=t(e["fansion-base"],e.vue)}("undefined"!=typeof self?self:this,function(__WEBPACK_EXTERNAL_MODULE_0__,__WEBPACK_EXTERNAL_MODULE_18__){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=10)}([function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE_0__},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t){e.exports=require("babel-runtime/helpers/typeof")},function(e,t,o){"use strict";function n(e,t,o,r){var a="row"===t?m:"col"===t?b:"div",i="<"+a+" "+d(e,["isSlot","slot","rows","cols"])+">",s="";return Array.isArray(e.rows)&&e.rows.length>0?s=e.rows.map(function(e){return n(e,"row",o)}).join(""):Array.isArray(e.cols)&&e.cols.length>0?s=e.cols.map(function(e){return n(e,"col",o)}).join(""):e.slot&&(e.slot===o&&(r.slotCount>0&&(e.slot=o+r.slotCount),r.slotCount++),s='<slot name="'+e.slot+'"/>'),""+i+s+"</"+a+">"}function r(e,t,o,r){var a={};return"object"===(void 0===e?"undefined":_()(e))?i()(a,t,e):Array.isArray(e)&&e.length>0?e[0].cols?i()(a,t,{rows:e}):i()(a,t,{rows:[{cols:e}]}):(e="string"==typeof e&&e?e:o,i()(a,t,{slot:e})),n(a,null,o,r)}var a=o(1),i=o.n(a),s=o(2),_=o.n(s),l=o(0),u=o.n(l),c=o(4),f=u.a.render,p=f.toRender,d=f.toProps,m=c.a.fayout.rowTag||"el-row",b=c.a.fayout.colTag||"el-col",v={class:"layout-header"},h={class:"layout-body"},y={class:"layout-footer"};t.a={name:"FacLayout",template:"<div/>",props:{meta:{type:[String,Object],require:!0},layoutClass:String},data:function(){var e=this.meta;"string"==typeof e&&console.log("It is not implement，please wait!!！"),e.header||e.body||e.footer||(e={body:e});return{slotCount:0,header:e.header,body:e.body,footer:e.footer}},watch:{meta:function(e){e.header||e.body||e.footer||(e={body:e}),this.header=e.header,this.body=e.body,this.footer=e.footer,this.$mount()}},beforeMount:function(){var e="",t=this.layoutClass?" "+this.layoutClass:"";this.slotCount=0,this.header&&(e=r(this.header,v,"header",this)),this.slotCount=0;var o=r(this.body,h,"body",this);this.slotCount=0;var n="";this.footer&&(n=r(this.footer,y,"footer",this)),p(this,'<div class="page-layout'+t+'">'+e+o+n+"</div>")}}},function(e,t,o){"use strict";t.a={fayout:{rowTag:"el-row",colTag:"el-col"}}},function(e,t,o){"use strict";var n=o(3),r=o(12),a=(o.n(r),o(0)),i=o.n(a),s={default:n.a};t.a={fayout:n.a,layouts:s,getLayout:function(e){return e?s[e.toClassify()]||n.a:n.a},addLayout:i.a.builder.register(s)}},function(module,__webpack_exports__,__webpack_require__){"use strict";function propVal(e,t,o){for(var n=o,r=arguments.length,a=Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return a.every(function(o){var r=e[o];return isNotNull(r)?(n=r,!1):(r=t[o],isNotNull(r)?(n=r,!1):void 0)}),n}var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__),__WEBPACK_IMPORTED_MODULE_4_fansion_base__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_4_fansion_base___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fansion_base__),isNotNull=__WEBPACK_IMPORTED_MODULE_4_fansion_base___default.a.util.isNotNull,components={},load=function(e){return components[e]},getModel=function(e){if(!e)return"model";var t=void 0;return e.startsWith(".")?(t="page.rootModel",e=e.substr(1)):t="model",t+"['"+e.split(".").join("']['")+"']"},buildTagProp=function(e,t){var o=void 0,n=t.props||{},r=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({},n);if(e.props){var a=e.default||{};o=e.props.map(function(e){var o=e.split(":");e=o[0];var i=o.length>1?o[1]:"string",s=":"+e;if(delete r[e],delete r[s],"page"===e||"conf"===e){return":"+e+'="'+propVal(t,n,e,e,s)+'"'}if("vModel"===e||"v-model"===e){var _=propVal(t,n,null,e);if(isNotNull(_))return'v-model="'+_+'"';var l=t.field||n.field;if(isNotNull(l))return'v-model="'+getModel(l)+'"'}else if(e.startsWith("vModel.")||e.startsWith("v-model.")){var u=e.substring(e.indexOf(".")+1),c=propVal(t,n,null,e,"vModel","v-model");if(isNotNull(c))return"v-model."+u+'="'+c+'"';var f=t.field||n.field;if(isNotNull(f)){var p=getModel(f);return"v-model."+u+'="'+p+'"'}}else if("vText"===e||"v-text"===e){var d=t.field||n.field;if(isNotNull(d))return'v-text="'+getModel(d)+'"'}else if("vHtml"===e||"v-html"===e){var m=t.field||t.props.field;if(isNotNull(m))return'v-html="'+getModel(m)+'"'}else{if("model"===e){var b=propVal(t,n,null,e);return isNotNull(b)?e+'="'+b+'"':(b=propVal(t,n,"model",s),":"+e+'="'+b+'"')}if("showLabel.sync"===e||"show-label.sync"===e||"vLabel"===e||"v-label"===e){var v=propVal(t,n,null,e);if(isNotNull(v))return':show-label.sync="'+v+'"';var h=t.labelField||n.labelField;if(isNotNull(h))return':show-label.sync="'+getModel(h)+'"';var y=t.field||n.field;if(isNotNull(y))return':show-label.sync="'+getModel(h+"_label")+'"'}else{var g=propVal(t,n,null,e);if(isNotNull(g))return"string"===i?e+'="'+g+'"':e+"="+g;if(g=propVal(t,n,null,s),isNotNull(g)&&"string"!=typeof g&&(g="conf['"+s+"']"),isNotNull(g))return":"+e.toDash()+'="'+g+'"';if(g=a[e],isNotNull(g))return"string"===i||"string"==typeof g?e.toDash()+'="'+g+'"':e.toDash()+"="+g;if(g=a[s],isNotNull(g))return"string"===i||"string"==typeof g?":"+e.toDash()+'="'+g+'"':":"+e.toDash()+"="+g}}}).join(" "),o+=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(r).map(function(e){var t=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),o=t[0],n=t[1];return isNotNull(n)?o+'="'+n+'"':""}).join(" ")}else t.props?(o=':page="page" :conf="conf "',o+=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(t.props).map(function(e){var t=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),o=t[0],n=t[1];return isNotNull(n)?o+'="'+n+'"':""}).join(" ")):(o=':page="page" :conf="conf "',o+=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(t).map(function(e){var t=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),o=t[0],n=t[1];return isNotNull(n)?o+'="'+n+'"':""}).join(" "));return t.events&&(o+=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(t.events).map(function(e){var t=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),o=t[0],n=t[1];return isNotNull(n)?(o.startsWith("@")||(o="@"+o),n.indexOf(".")<0&&(n="page."+n),o+'="'+n+'"'):""}).join(" ")),o},compile=function compile(config){var type="string"==typeof config?config:config.type||"input",comp=load(type);if("function"==typeof comp)return comp(config);if("function"==typeof comp.component&&!comp.factory)return comp.component(config);var props=comp.props,attrs=comp.attrs,t=void 0===props?"undefined":__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(props),tagName=comp.tagName||type;props="function"===t?props(tagName,comp,config):"string"===t?eval(props):buildTagProp(comp,config);var attrsProps="";attrs&&(attrsProps=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(attrs).map(function(e){var t=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2);return t[0]+'="'+t[1]+'"'}).join(" "),attrsProps.length>0&&(attrsProps=" "+attrsProps));var components={};comp.component&&(components[tagName]=comp.component);var slot=config.pos?' slot="'+config.pos+'"':"";return{components:components,template:"<"+tagName+" "+props+attrsProps+slot+"/>"}},compileComps=function(e){var t={};return{components:t,template:e?Array.isArray(e)?e.map(function(e,o){if(e){e.conf||e.props&&e.props.conf||(e.conf="conf.components["+o+"]");var n=compile(e),r=n.components,a=n.template;return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(t,r),a}}).join(""):__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(e).map(function(e){var o=e.k,n=e.v;n.conf||n.props&&n.props.conf||(n.conf="conf.components['"+o+"']");var r=compile(n),a=r.components,i=r.template;return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(t,a),i}).join(""):""}},confs2Comps=function(e,t){return e?(null!==t&&void 0!==t||(t={}),Array.isArray(e)?e.forEach(function(e){if("string"==typeof e){var o=load(e);o.component&&(t[o.tagName||e]=o.component)}else"object"===(void 0===e?"undefined":__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(e))&&(e.name||e.componentName)&&(t[e.name||e.componentName]=e)}):"object"===(void 0===e?"undefined":__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(e))&&__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(e).forEach(function(e){var o=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),n=o[0],r=o[1];if("string"==typeof r){var a=load(r);a.component&&(t[n]=a.component)}else t[n]=r}),t):t};__webpack_exports__.a={components:components,load:load,addComp:__WEBPACK_IMPORTED_MODULE_4_fansion_base___default.a.builder.register(components),buildTagProp:buildTagProp,compile:compile,compileComps:compileComps,confs2Comps:confs2Comps}},function(e,t){e.exports=require("babel-runtime/helpers/slicedToArray")},function(e,t){e.exports=require("babel-runtime/core-js/object/entries")},function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=this,i={},s=[];t.a={metas:i,get:function(e){var t=i[e];return t||(s.every(function(o){if(t=o(e))return!1}),t)},addMeta:r.a.builder.register(i),addRule:r.a.builder.collection(s),init:function(e){e&&(a.addMeta(e.metas),a.addRule(e.rules))}}},function(e,t,o){e.exports=o(11)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o.n(n),a=o(3),i=o(5),s=o(6),_=o(17),l=o(9),u=o(4),c=function(e){r()(u.a,e),l.a.init(u.a.meta),i.a.addLayout(u.a.layouts),s.a.addComp(u.a.components)};t.default={init:c,fayout:a.a,layouts:i.a,comps:s.a,fac:_.a,meta:l.a,options:u.a}},function(e,t,o){var n=o(13);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;o(15)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(14)(!1),t.push([e.i,".page-layout .layout-header{padding:10px 30px;width:100%;border-bottom:1px solid rgba(0,0,0,.04);margin:0;position:relative;background:none 0 0 repeat scroll rgba(0,0,0,.02)}.page-layout .layout-rows{padding:0}.page-layout .layout-rows .el-row{padding:10px 30px}.page-layout .layout-rows .el-row+.el-row{border-top:1px solid rgba(0,0,0,.04)}.page-layout .layout-body{position:relative;margin:30px}.page-layout .layout-footer{position:relative;margin:0 30px 30px}",""])},function(e,t){function o(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var a=n(r);return[o].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),t.push(i))}},t}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(u(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(u(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function r(e,t){for(var o=[],n={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],s=a[1],_=a[2],l=a[3],u={css:s,media:_,sourceMap:l};n[i]?n[i].parts.push(u):o.push(n[i]={id:i,parts:[u]})}return o}function a(e,t){var o=v(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),g.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(e.insertInto+" "+e.insertAt.before);o.insertBefore(t,r)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),a(e,t),t}function _(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function u(e,t){var o,n,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=y++;o=h||(h=s(t)),n=c.bind(null,o,l,!1),r=c.bind(null,o,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=_(t),n=p.bind(null,o,t),r=function(){i(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(t),n=f.bind(null,o),r=function(){i(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function c(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=M(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t,o){var n=o.css,r=o.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(n=E(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var d={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var o=b.call(this,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),h=null,y=0,g=[],E=o(16);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=r(e,t);return n(o,t),function(e){for(var a=[],i=0;i<o.length;i++){var s=o[i],_=d[s.id];_.refs--,a.push(_)}if(e){n(r(e,t),t)}for(var i=0;i<a.length;i++){var _=a[i];if(0===_.refs){for(var l=0;l<_.parts.length;l++)_.parts[l]();delete d[_.id]}}}};var M=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,o){"use strict";function n(e){var t=e.layout,o=!!t;return o&&"string"!=typeof t?f()({exist:o},t):{exist:o,name:t}}function r(e){var t="string"==typeof e.meta?b.a.get(e.meta):e.meta;if("function"!=typeof t)return t;var o=t;if(o.resolved)return o.resolved;var n=P(function(t){if(t.__esModule&&(t=t.default),"string"==typeof t.uimeta)try{j(t.uimeta).then(function(e){t=f()(t,e)})}catch(e){console.log(e)}finally{t.uimeta=null,o.resolved=t,e.metaing=!1,e.$mount(),M(e,"mounted")}else o.resolved=t,e.metaing=!1,e.$mount(),M(e,"mounted")}),r=P(function(t){console.log(t),e.metaing=!1,o.error=!0});return e.metaing=!0,e._isMounted=!0,t=o(n,r),"object"!==(void 0===t?"undefined":u()(t))||"function"!=typeof t.then||o.resolved?(o.resolved=t,e.metaing=!1,t):void t.then(n,r)}var a=o(7),i=o.n(a),s=o(8),_=o.n(s),l=o(2),u=o.n(l),c=o(1),f=o.n(c),p=o(18),d=o.n(p),m=o(5),b=o(9),v=o(6),h=o(0),y=o.n(h),g=y.a.render,E=g.toRender,M=g.callHook,O=y.a.util,P=O.once,D=O.proxy,j=y.a.rest.getJson;t.a={name:"Fac",template:"<div/>",props:{meta:{type:[String,Object],required:!0},model:{type:[String,Object],default:{}},page:Object},data:function(){var e={},t={};return this.page||(this.page=this),{meta:t,layout:e,pageLoading:!0,pageState:"init"}},watch:{meta:function(){this.$mount(),M(this,"mounted")},pageState:function(e,t){e!==t&&this.$emit("stateChanged",e)}},beforeMount:function(){var e=this,t=r(e);if(t&&!e.metaing){e.meta=t;var o=n(t),a=t.noc?t:v.a.compileComps(t.components),s=a.components,l=a.template;f()(e,t.methods,{layout:o.meta},"function"==typeof t.member?t.member.call(this):t.member);var c="function"==typeof t.data?t.data.call(this):t.data;if(null!==c&&"object"===(void 0===c?"undefined":u()(c))){var p=e._data.__ob__.vmCount;e._data.__ob__.vmCount=0,_()(c).forEach(function(t){var o=i()(t,2),n=o[0],r=o[1];e.$set(e._data,n,r),D(e,"_data",n)}),e._data.__ob__.vmCount=p}if(o.exist){var d=m.a.get(o.name);E(this,'<layout :meta="layoutConf" v-loading="pageLoading">'+l+"</layout>",f()({layout:d},s))}else E(this,""+l,s)}},mounted:function(){"function"==typeof this.initPage&&this.initPage();var e=this;d.a.nextTick(function(){e.pageLoading=!1})}}},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE_18__}])});