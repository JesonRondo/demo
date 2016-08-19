/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _xcoreVue = __webpack_require__(1);

  var _xcoreVue2 = _interopRequireDefault(_xcoreVue);

  var _logger = __webpack_require__(3);

  var _logger2 = _interopRequireDefault(_logger);

  var _xcoreLink = __webpack_require__(4);

  var _xcoreLink2 = _interopRequireDefault(_xcoreLink);

  var _app = __webpack_require__(7);

  var _app2 = _interopRequireDefault(_app);

  var _index = __webpack_require__(55);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // 引入打点 ！如果去掉这个将不会带上打点功能
  window.__logger = _logger2.default;
  // register
  _xcoreVue2.default.component('link', _xcoreLink2.default);

  new _xcoreVue2.default({
    el: '#app',
    template: '<app></app>',
    components: {
      App: _app2.default
    }
  });

  //分享
  (0, _index2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{var a=factory();for(var i in a){((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object'?exports:root)[i]=a[i];}}})(undefined,function(){return(/******/function(modules){// webpackBootstrap
  /******/// The module cache
  /******/var installedModules={};/******//******/// The require function
  /******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
  /******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******//******/// Create a new module (and put it into the cache)
  /******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******//******/// Execute the module function
  /******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
  /******/module.loaded=true;/******//******/// Return the exports of the module
  /******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m=modules;/******//******/// expose the module cache
  /******/__webpack_require__.c=installedModules;/******//******/// __webpack_public_path__
  /******/__webpack_require__.p="";/******//******/// Load entry module and return exports
  /******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';module.exports=__webpack_require__(1)['default'];/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _xcoreRuntime=__webpack_require__(2);var _xcoreRuntime2=_interopRequireDefault(_xcoreRuntime);var _index=__webpack_require__(7);var _index2=__webpack_require__(41);var _index3=__webpack_require__(64);var _styleUtil=__webpack_require__(56);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var idToTemplate=(0,_index.cached)(function(id){var el=(0,_index2.query)(id);return el&&el.innerHTML;});var mount=_xcoreRuntime2.default.prototype.$mount;_xcoreRuntime2.default.prototype.$mount=function(el,hydrating){// start dom
  if(el==='#app'){el=document.createElement( true?'view':'div');(0,_styleUtil.setStyle)(document.body,'flexDirection','column');document.body.appendChild(el);}var options=this.$options;// resolve template/el and convert to render function
  if(!options.render){var template=options.template;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){template=idToTemplate(template);}}else if(template.nodeType){template=template.innerHTML;}else{if(true){(0,_index.warn)('invalid template option:'+template,this);}return this;}}else{if(true){(0,_index.warn)('if el is not #app there must have a template in options',this);}}if(template){var _compileToFunctions=(0,_index3.compileToFunctions)(template,{delimiters:options.delimiters,warn:_index.warn},this);var render=_compileToFunctions.render;var staticRenderFns=_compileToFunctions.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;}}return mount.call(this,el,hydrating);};/**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */// function getOuterHTML (el: Element): string {
  //   if (el.outerHTML) {
  //     return el.outerHTML
  //   } else {
  //     const container = document.createElement('div')
  //     container.appendChild(el.cloneNode(true))
  //     return container.innerHTML
  //   }
  // }
  _xcoreRuntime2.default.compile=_index3.compileToFunctions;exports.default=_xcoreRuntime2.default;/***/},/* 2 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _index=__webpack_require__(3);var _index2=_interopRequireDefault(_index);var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _util=__webpack_require__(5);var _patch=__webpack_require__(39);var _index3=__webpack_require__(57);var _index4=_interopRequireDefault(_index3);var _index5=__webpack_require__(62);var _index6=_interopRequireDefault(_index5);var _index7=__webpack_require__(41);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// install platform specific utils
  _index2.default.config.isUnknownElement=_index7.isUnknownElement;_index2.default.config.isReservedTag=_index7.isReservedTag;_index2.default.config.mustUseProp=_index7.mustUseProp;// install platform runtime directives & components
  (0,_util.extend)(_index2.default.options.directives,_index4.default);(0,_util.extend)(_index2.default.options.components,_index6.default);// install platform patch function
  _index2.default.prototype.__patch__=_config2.default._isServer?_util.noop:_patch.patch;// wrap mount
  _index2.default.prototype.$mount=function(el,hydrating){return this._mount(el&&(0,_index7.query)(el),hydrating);};exports.default=_index2.default;/***/},/* 3 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(6);var _index2=__webpack_require__(12);var _index3=_interopRequireDefault(_index2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_index.initGlobalAPI)(_index3.default);Object.defineProperty(_index3.default.prototype,'$isServer',{get:function get(){return _config2.default._isServer;}});_index3.default.version='2.0.0-alpha.2';exports.default=_index3.default;/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _util=__webpack_require__(5);var config={/**
       * Option merge strategies (used in core/util/options)
       */optionMergeStrategies:Object.create(null),/**
       * Whether to suppress warnings.
       */silent:false,/**
       * Error handler for watcher errors
       */errorHandler:null,/**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */isReservedTag:_util.no,/**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */isUnknownElement:_util.no,/**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */mustUseProp:_util.no,/**
       * List of asset types that a component can own.
       */_assetTypes:['component','directive','transition','filter'],/**
       * List of lifecycle hooks.
       */_lifecycleHooks:['init','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated'],/**
       * Max circular updates allowed in a scheduler flush cycle.
       */_maxUpdateCount:100,/**
       * Server rendering?
       */_isServer:{"NODE_ENV":"development"}.VUE_ENV==='server',/**
       * Keeping track of all extended Component constructors
       * so that we can update them in the case of global mixins being applied
       * after their creation.
       */_ctors:[]};exports.default=config;/***/},/* 5 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.renderString=renderString;exports.makeMap=makeMap;exports.remove=remove;exports.hasOwn=hasOwn;exports.isPrimitive=isPrimitive;exports.cached=cached;exports.bind=bind;exports.toArray=toArray;exports.extend=extend;exports.isObject=isObject;exports.isPlainObject=isPlainObject;exports.toObject=toObject;exports.isEmptyObject=isEmptyObject;exports.noop=noop;exports.genStaticKeys=genStaticKeys;/**
     * Convert a value to a string that is actually rendered.
     */function renderString(val){return val==null?'':(typeof val==='undefined'?'undefined':_typeof(val))==='object'?JSON.stringify(val,null,2):String(val);}/**
     * Make a map and return a function for checking if a key
     * is in that map.
     */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
     * Check if a tag is a built-in tag.
     */var isBuiltInTag=exports.isBuiltInTag=makeMap('slot,component,render,transition',true);/**
     * Remove an item from an array
     */function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
     * Check whether the object has the property.
     */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
     * Check if value is primitive
     */function isPrimitive(value){return typeof value==='string'||typeof value==='number';}/**
     * Create a cached version of a pure function.
     */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
     * Camelize a hyphen-delmited string.
     */var camelizeRE=/-(\w)/g;var camelize=exports.camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
     * Capitalize a string.
     */var capitalize=exports.capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
     * Hyphenate a camelCase string.
     */var hyphenateRE=/([a-z\d])([A-Z])/g;var hyphenate=exports.hyphenate=cached(function(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();});/**
     * Simple bind, faster than native
     */function bind(fn,ctx){return function(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};}/**
     * Convert an Array-like object to a real Array.
     */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
     * Mix properties into target object.
     */function extend(to,_from){for(var _key in _from){to[_key]=_from[_key];}return to;}/**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}/**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}/**
     * Merge an Array of Objects into a single Object.
     */function toObject(arr){var res=arr[0]||{};for(var i=1;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}function isEmptyObject(obj){if(!obj||(typeof obj==='undefined'?'undefined':_typeof(obj))!=='object')return true;for(var k in obj){return false;}return true;}/**
     * Perform no operation.
     */function noop(){}/**
     * Always return false.
     */var no=exports.no=function no(){return false;};/**
     * Generate a static keys string from compiler modules.
     */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}/***/},/* 6 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initGlobalAPI=initGlobalAPI;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(7);var util=_interopRequireWildcard(_index);var _use=__webpack_require__(33);var _mixin=__webpack_require__(34);var _extend=__webpack_require__(35);var _assets=__webpack_require__(36);var _index2=__webpack_require__(19);var _index3=__webpack_require__(37);var _index4=_interopRequireDefault(_index3);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initGlobalAPI(Vue){Vue.config=_config2.default;Vue.util=util;Vue.set=_index2.set;Vue.delete=_index2.del;Vue.nextTick=util.nextTick;Vue.options=Object.create(null);_config2.default._assetTypes.forEach(function(type){Vue.options[type+'s']=Object.create(null);});util.extend(Vue.options.components,_index4.default);(0,_use.initUse)(Vue);(0,_mixin.initMixin)(Vue);(0,_extend.initExtend)(Vue);(0,_assets.initAssetRegisters)(Vue);}/***/},/* 7 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _util=__webpack_require__(5);Object.keys(_util).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _util[key];}});});var _lang=__webpack_require__(8);Object.keys(_lang).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _lang[key];}});});var _dom=__webpack_require__(9);Object.keys(_dom).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _dom[key];}});});var _env=__webpack_require__(10);Object.keys(_env).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _env[key];}});});var _options=__webpack_require__(11);Object.keys(_options).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _options[key];}});});var _debug=__webpack_require__(28);Object.keys(_debug).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _debug[key];}});});var _props=__webpack_require__(29);Object.keys(_props).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _props[key];}});});var _render=__webpack_require__(30);Object.keys(_render).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _render[key];}});});var _ajax=__webpack_require__(31);Object.keys(_ajax).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _ajax[key];}});});var _index=__webpack_require__(19);Object.defineProperty(exports,'defineReactive',{enumerable:true,get:function get(){return _index.defineReactive;}});/***/},/* 8 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.isReserved=isReserved;exports.def=def;exports.parsePath=parsePath;exports.updateQueryStringParameter=updateQueryStringParameter;/**
     * Check if a string starts with $ or _
     */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
     * Define a property.
     */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
     * Parse simple path.
     */var bailRE=/[^\w\.]/;function parsePath(path){if(bailRE.test(path)){return;}else{var _ret=function(){var segments=path.split('.');return{v:function v(obj){for(var i=0;i<segments.length;i++){if(!obj)return;obj=obj[segments[i]];}return obj;}};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}}/**
     * update query string parameter
     */function updateQueryStringParameter(uri,key,value){var re=new RegExp("([?&])"+key+"=.*?(&|$)","i");var separator=uri.indexOf('?')!==-1?"&":"?";if(uri.match(re)){return uri.replace(re,'$1'+key+"="+encodeURIComponent(value)+'$2');}else{return uri+separator+key+"="+encodeURIComponent(value);}}/***/},/* 9 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.signChildren=signChildren;/**
     * sign children with key value
     * @param {Array<VNode>} children 需要设置children
     * @param {String} key 需要设置的键
     * @param {String} value 需要设置的值
     */function signChildren(children,key,value){for(var i=0,len=children.length;i<len;i++){var child=children[i];child[key]=value;if(child.children){signChildren(child.children,key,value);}}}/***/},/* 10 *//***/function(module,exports){/* WEBPACK VAR INJECTION */(function(global){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/* global MutationObserver */// can we use __proto__?
  var hasProto=exports.hasProto='__proto__'in{};// Browser environment sniffing
  var inBrowser=exports.inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]';// detect devtools
  var devtools=exports.devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;// UA sniffing for working around browser-specific quirks
  var UA=exports.UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIos=UA&&/(iphone|ipad|ipod|ios)/i.test(UA);var iosVersionMatch=UA&&isIos&&UA.match(/os ([\d_]+)/);var iosVersion=iosVersionMatch&&iosVersionMatch[1].split('_');// MutationObserver is unreliable in iOS 9.3 UIWebView
  // detecting it by checking presence of IndexedDB
  // ref #3027
  var hasMutationObserverBug=iosVersion&&Number(iosVersion[0])>=9&&Number(iosVersion[1])>=3&&!window.indexedDB;/**
     * Defer a task to execute it asynchronously. Ideally this
     * should be executed as a microtask, so we leverage
     * MutationObserver if it's available, and fallback to
     * setTimeout(0).
     *
     * @param {Function} cb
     * @param {Object} ctx
     */var nextTick=exports.nextTick=function(){var callbacks=[];var pending=false;var timerFunc=void 0;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks=[];for(var i=0;i<copies.length;i++){copies[i]();}}/* istanbul ignore else */if(typeof MutationObserver!=='undefined'&&!hasMutationObserverBug){(function(){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=String(counter);};})();}else{// webpack attempts to inject a shim for setImmediate
  // if it is used as a global, so we have to work around that to
  // avoid bundling unnecessary code.
  var context=inBrowser?window:typeof global!=='undefined'?global:{};timerFunc=context.setImmediate||setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending=true;timerFunc(nextTickHandler,0);};}();var _Set=void 0;/* istanbul ignore if */if(typeof Set!=='undefined'&&/native code/.test(Set.toString())){// use native Set when available.
  exports._Set=_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
  exports._Set=_Set=function(){function Set(){_classCallCheck(this,Set);this.set=Object.create(null);}_createClass(Set,[{key:'has',value:function has(key){return this.set[key]!==undefined;}},{key:'add',value:function add(key){this.set[key]=1;}},{key:'clear',value:function clear(){this.set=Object.create(null);}}]);return Set;}();}exports._Set=_Set;/* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}());/***/},/* 11 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.mergeOptions=mergeOptions;exports.resolveAsset=resolveAsset;var _index=__webpack_require__(12);var _index2=_interopRequireDefault(_index);var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _debug=__webpack_require__(28);var _index3=__webpack_require__(19);var _util=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */var strats=_config2.default.optionMergeStrategies;/**
     * Options with restrictions
     */if(true){strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){(0,_debug.warn)('option "'+key+'" can only be used during instance '+'creation with the `new` keyword.');}return defaultStrat(parent,child);};strats.name=function(parent,child,vm){if(vm){(0,_debug.warn)('options "name" can only be used as a component definition option, '+'not during instance creation.');}return defaultStrat(parent,child);};}/**
     * Helper that recursively merges two data objects together.
     */function mergeData(to,from){var key=void 0,toVal=void 0,fromVal=void 0;for(key in from){toVal=to[key];fromVal=from[key];if(!(0,_util.hasOwn)(to,key)){(0,_index3.set)(to,key,fromVal);}else if((0,_util.isObject)(toVal)&&(0,_util.isObject)(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
     * Data
     */strats.data=function(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
  if(!childVal){return parentVal;}if(typeof childVal!=='function'){"development"!=='production'&&(0,_debug.warn)('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
  // we need to return a function that returns the
  // merged result of both functions... no need to
  // check if parentVal is a function here because
  // it has to be a function to pass previous merges.
  return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
  var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};/**
     * Hooks and param attributes are merged as arrays.
     */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}_config2.default._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook;});/**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?(0,_util.extend)(res,childVal):res;}_config2.default._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});/**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */strats.watch=function(parentVal,childVal){/* istanbul ignore if */if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};(0,_util.extend)(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};/**
     * Other object hashes.
     */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);(0,_util.extend)(ret,parentVal);(0,_util.extend)(ret,childVal);return ret;};/**
     * Default strategy.
     */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
     * Make sure component options get converted to actual
     * constructors.
     */function normalizeComponents(options){if(options.components){var components=options.components;var def=void 0;for(var key in components){if((0,_util.isBuiltInTag)(key)||_config2.default.isReservedTag(key)){"development"!=='production'&&(0,_debug.warn)('Do not use built-in or reserved HTML elements as component '+'id: '+key);continue;}def=components[key];if((0,_util.isPlainObject)(def)){components[key]=_index2.default.extend(def);}}}}/**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */function normalizeProps(options){var props=options.props;if(!props)return;var res={};var i=void 0,val=void 0,name=void 0;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=(0,_util.camelize)(val);res[name]={type:null};}else if(true){(0,_debug.warn)('props must be strings when using array syntax.');}}}else if((0,_util.isPlainObject)(props)){for(var key in props){val=props[key];name=(0,_util.camelize)(key);res[name]=(0,_util.isPlainObject)(val)?val:{type:val};}}options.props=res;}/**
     * Normalize raw function directives into object format.
     */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}/**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */function mergeOptions(parent,child,vm){normalizeComponents(child);normalizeProps(child);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=typeof extendsFrom==='function'?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];if(mixin.prototype instanceof _index2.default){mixin=mixin.options;}parent=mergeOptions(parent,mixin,vm);}}var options={};var key=void 0;for(key in parent){mergeField(key);}for(key in child){if(!(0,_util.hasOwn)(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];var res=assets[id]||// camelCase ID
  assets[(0,_util.camelize)(id)]||// Pascal Case ID
  assets[(0,_util.capitalize)((0,_util.camelize)(id))];if("development"!=='production'&&warnMissing&&!res){(0,_debug.warn)('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/***/},/* 12 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _init=__webpack_require__(13);var _state=__webpack_require__(15);var _render=__webpack_require__(21);var _events=__webpack_require__(27);var _lifecycle=__webpack_require__(26);function Vue(options){this._init(options);}(0,_init.initMixin)(Vue);(0,_state.stateMixin)(Vue);(0,_events.eventsMixin)(Vue);(0,_lifecycle.lifecycleMixin)(Vue);(0,_render.renderMixin)(Vue);exports.default=Vue;/***/},/* 13 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initMixin=initMixin;var _proxy=__webpack_require__(14);var _state=__webpack_require__(15);var _render=__webpack_require__(21);var _events=__webpack_require__(27);var _lifecycle=__webpack_require__(26);var _index=__webpack_require__(7);var uid=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
  vm._uid=uid++;// a flag to avoid this being observed
  vm._isVue=true;// a fastway to call global fn in vm instance
  vm.$Vue=Vue;// merge options
  if(options&&options._isComponent){// optimize internal component instantiation
  // since dynamic options merging is pretty slow, and none of the
  // internal component options needs special treatment.
  initInternalComponent(vm,options);}else{vm.$options=(0,_index.mergeOptions)(vm.constructor.options,options||{},vm);}/* istanbul ignore else */if(true){(0,_proxy.initProxy)(vm);}else{vm._renderProxy=vm;}// expose real self
  vm._self=vm;(0,_lifecycle.initLifecycle)(vm);(0,_events.initEvents)(vm);(0,_lifecycle.callHook)(vm,'init');(0,_state.initState)(vm);(0,_lifecycle.callHook)(vm,'created');(0,_render.initRender)(vm);};}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);// doing this because it's faster than dynamic enumeration.
  opts.parent=options.parent;if(false){vm.$underListview=opts.parent.$underListview;}opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}/***/},/* 14 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initProxy=undefined;var _index=__webpack_require__(7);var hasProxy=void 0,proxyHandlers=void 0,initProxy=void 0;/* not type checking this file because flow doesn't play well with Proxy */if(true){(function(){var allowedGlobals=(0,_index.makeMap)('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require,__webpack_require__'// for Webpack/Browserify
  );hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);proxyHandlers={has:function has(target,key){var has=key in target;var isAllowedGlobal=allowedGlobals(key);if(!has&&!isAllowedGlobal){(0,_index.warn)('Trying to access non-existent property "'+key+'" while rendering. '+'Make sure to declare reactive data properties in the data option.',target);}return!isAllowedGlobal;}};exports.initProxy=initProxy=function initProxy(vm){if(hasProxy){vm._renderProxy=new Proxy(vm,proxyHandlers);}else{vm._renderProxy=vm;}};})();}exports.initProxy=initProxy;/***/},/* 15 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initState=initState;exports.stateMixin=stateMixin;var _watcher=__webpack_require__(16);var _watcher2=_interopRequireDefault(_watcher);var _dep=__webpack_require__(17);var _dep2=_interopRequireDefault(_dep);var _index=__webpack_require__(19);var _index2=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initState(vm){vm._watchers=[];initProps(vm);initData(vm);initComputed(vm);initMethods(vm);initWatch(vm);}function initProps(vm){var props=vm.$options.props;var propsData=vm.$options.propsData;if(props){var keys=vm.$options._propKeys=Object.keys(props);var isRoot=!vm.$parent;// root instance props should be converted
  _index.observerState.shouldConvert=isRoot;var _loop=function _loop(i){var key=keys[i];/* istanbul ignore else */if(true){(0,_index.defineReactive)(vm,key,(0,_index2.validateProp)(vm,key,propsData),function(){if(vm.$parent&&!_index.observerState.isSettingProps){(0,_index2.warn)('Avoid mutating a prop directly since the value will be '+'overwritten whenever the parent component re-renders. '+'Instead, use a data or computed property based on the prop\'s '+('value. Prop being mutated: "'+key+'"'),vm);}});}else{(0,_index.defineReactive)(vm,key,(0,_index2.validateProp)(vm,key,propsData));}};for(var i=0;i<keys.length;i++){_loop(i);}_index.observerState.shouldConvert=true;}}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?data.call(vm):data||{};if(!(0,_index2.isPlainObject)(data)){data={};"development"!=='production'&&(0,_index2.warn)('data functions should return an object.',vm);}// proxy data on instance
  var keys=Object.keys(data);var props=vm.$options.props;var i=keys.length;while(i--){if(props&&(0,_index2.hasOwn)(props,keys[i])){"development"!=='production'&&(0,_index2.warn)('The data property "'+keys[i]+'" is already declared as a prop. '+'Use prop default value instead.',vm);}else{(0,_index.proxy)(vm,keys[i]);}}// observe data
  (0,_index.observe)(data);data.__ob__&&data.__ob__.vmCount++;}var computedSharedDefinition={enumerable:true,configurable:true,get:_index2.noop,set:_index2.noop};function initComputed(vm){var computed=vm.$options.computed;if(computed){for(var _key in computed){var userDef=computed[_key];if(typeof userDef==='function'){computedSharedDefinition.get=makeComputedGetter(userDef,vm);computedSharedDefinition.set=_index2.noop;}else{computedSharedDefinition.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,vm):(0,_index2.bind)(userDef.get,vm):_index2.noop;computedSharedDefinition.set=userDef.set?(0,_index2.bind)(userDef.set,vm):_index2.noop;}Object.defineProperty(vm,_key,computedSharedDefinition);}}}function makeComputedGetter(getter,owner){var watcher=new _watcher2.default(owner,getter,_index2.noop,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(_dep2.default.target){watcher.depend();}return watcher.value;};}function initMethods(vm){var methods=vm.$options.methods;if(methods){for(var _key2 in methods){vm[_key2]=(0,_index2.bind)(methods[_key2],vm);}}}function initWatch(vm){var watch=vm.$options.watch;if(watch){for(var _key3 in watch){var handler=watch[_key3];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,_key3,handler[i]);}}else{createWatcher(vm,_key3,handler);}}}}function createWatcher(vm,key,handler){var options=void 0;if((0,_index2.isPlainObject)(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}vm.$watch(key,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef={};dataDef.get=function(){return this._data;};dataDef.set=function(newData){if(newData!==this._data){setData(this,newData);}};Object.defineProperty(Vue.prototype,'$data',dataDef);Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{};options.user=true;var watcher=new _watcher2.default(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}function setData(vm,newData){newData=newData||{};var oldData=vm._data;vm._data=newData;var keys=void 0,key=void 0,i=void 0;// unproxy keys not present in new data
  keys=Object.keys(oldData);i=keys.length;while(i--){key=keys[i];if(!(key in newData)){(0,_index.unproxy)(vm,key);}}// proxy keys not already proxied,
  // and trigger change for changed values
  keys=Object.keys(newData);i=keys.length;while(i--){key=keys[i];if(!(0,_index2.hasOwn)(vm,key)){// new property
  (0,_index.proxy)(vm,key);}}oldData.__ob__&&oldData.__ob__.vmCount--;(0,_index.observe)(newData);newData.__ob__&&newData.__ob__.vmCount++;vm.$forceUpdate();}/***/},/* 16 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _dep=__webpack_require__(17);var _dep2=_interopRequireDefault(_dep);var _scheduler=__webpack_require__(18);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var uid=0;var prevTarget=void 0;/**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */var Watcher=function(){function Watcher(vm,expOrFn,cb){var options=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];_classCallCheck(this,Watcher);this.vm=vm;vm._watchers.push(this);// options
  this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.expression=expOrFn.toString();this.cb=cb;this.id=++uid;// uid for batching
  this.active=true;this.dirty=this.lazy;// for lazy watchers
  this.deps=[];this.newDeps=[];this.depIds=new _index._Set();this.newDepIds=new _index._Set();// parse expression for getter
  if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=(0,_index.parsePath)(expOrFn);if(!this.getter){this.getter=function(){};"development"!=='production'&&(0,_index.warn)('Failed watching path: '+expOrFn+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();}/**
       * Evaluate the getter, and re-collect dependencies.
       */_createClass(Watcher,[{key:'get',value:function get(){this.beforeGet();var value=void 0;try{value=this.getter.call(this.vm,this.vm);}catch(e){if(true){if(this.user){(0,_index.warn)('Error when evaluating watcher with getter: '+this.expression,this.vm);}else{(0,_index.warn)('Error during component render',this.vm);}/* istanbul ignore else */if(_config2.default.errorHandler){_config2.default.errorHandler.call(null,e,this.vm);}else{throw e;}}// return old value when evaluation fails so the current UI is preserved
  // if the error was somehow handled by user
  value=this.value;}// "touch" every property so they are all tracked as
  // dependencies for deep watching
  if(this.deep){traverse(value);}this.afterGet();return value;}/**
         * Prepare for dependency collection.
         */},{key:'beforeGet',value:function beforeGet(){prevTarget=_dep2.default.target;_dep2.default.target=this;}/**
         * Add a dependency to this directive.
         */},{key:'addDep',value:function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}}/**
         * Clean up for dependency collection.
         */},{key:'afterGet',value:function afterGet(){_dep2.default.target=prevTarget;var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;}/**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */},{key:'update',value:function update(){if(this.lazy){this.dirty=true;}else{(0,_scheduler.queueWatcher)(this);}}/**
         * Scheduler job interface.
         * Will be called by the scheduler.
         */},{key:'run',value:function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
  // when the value is the same, because the value may
  // have mutated.
  (0,_index.isObject)(value)||this.deep){// set new value
  var oldValue=this.value;this.value=value;this.cb.call(this.vm,value,oldValue);}}}/**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */},{key:'evaluate',value:function evaluate(){// avoid overwriting another watcher that is being
  // collected.
  var current=_dep2.default.target;this.value=this.get();this.dirty=false;_dep2.default.target=current;}/**
         * Depend on all deps collected by this watcher.
         */},{key:'depend',value:function depend(){var i=this.deps.length;while(i--){this.deps[i].depend();}}/**
         * Remove self from all dependencies' subcriber list.
         */},{key:'teardown',value:function teardown(){if(this.active){// remove self from vm's watcher list
  // this is a somewhat expensive operation so we skip it
  // if the vm is being destroyed or is performing a v-for
  // re-render (the watcher list is then filtered by v-for).
  if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){(0,_index.remove)(this.vm._watchers,this);}var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}this.active=false;}}}]);return Watcher;}();/**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */exports.default=Watcher;var seenObjects=new _index._Set();function traverse(val,seen){var i=void 0,keys=void 0;if(!seen){seen=seenObjects;seen.clear();}var isA=Array.isArray(val);var isO=(0,_index.isObject)(val);if(isA||isO){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}else{seen.add(depId);}}if(isA){i=val.length;while(i--){traverse(val[i],seen);}}else if(isO){keys=Object.keys(val);i=keys.length;while(i--){traverse(val[keys[i]],seen);}}}}/***/},/* 17 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var uid=0;/**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */var Dep=function(){function Dep(){_classCallCheck(this,Dep);this.id=uid++;this.subs=[];}_createClass(Dep,[{key:'addSub',value:function addSub(sub){this.subs.push(sub);}},{key:'removeSub',value:function removeSub(sub){(0,_index.remove)(this.subs,sub);}},{key:'depend',value:function depend(){if(Dep.target){Dep.target.addDep(this);}}},{key:'notify',value:function notify(){// stablize the subscriber list first
  var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}}}]);return Dep;}();// the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  exports.default=Dep;Dep.target=null;/***/},/* 18 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.queueWatcher=queueWatcher;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// we have two separate queues: one for directive updates
  // and one for user watcher registered via $watch().
  // we want to guarantee directive updates to be called
  // before user watchers so that when user watchers are
  // triggered, the DOM would have already been in updated
  // state.
  var queue=[];var userQueue=[];var has={};var circular={};var waiting=false;/**
     * Reset the scheduler's state.
     */function resetSchedulerState(){queue.length=0;userQueue.length=0;has={};if(true){circular={};}waiting=false;}/**
     * Flush both queues and run the watchers.
     */function flushSchedulerQueue(){runSchedulerQueue(queue.sort(queueSorter));runSchedulerQueue(userQueue);// user watchers triggered more watchers,
  // keep flushing until it depletes
  if(queue.length){return flushSchedulerQueue();}resetSchedulerState();}/**
     * Sort queue before flush.
     * This ensures components are updated from parent to child
     * so there will be no duplicate updates, e.g. a child was
     * pushed into the queue first and then its parent's props
     * changed.
     */function queueSorter(a,b){return a.id-b.id;}/**
     * Run the watchers in a single queue.
     */function runSchedulerQueue(queue){// do not cache length because more watchers might be pushed
  // as we run existing watchers
  for(var i=0;i<queue.length;i++){var watcher=queue[i];var id=watcher.id;has[id]=null;watcher.run();// in dev build, check and stop circular updates.
  if("development"!=='production'&&has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>_config2.default._maxUpdateCount){(0,_index.warn)('You may have an infinite update loop for watcher '+'with expression "'+watcher.expression+'"',watcher.vm);break;}}}queue.length=0;}/**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){// push watcher into appropriate queue
  var q=watcher.user?userQueue:queue;has[id]=true;q.push(watcher);// queue the flush
  if(!waiting){waiting=true;(0,_index.nextTick)(flushSchedulerQueue);}}}/***/},/* 19 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Observer=exports.observerState=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.observe=observe;exports.defineReactive=defineReactive;exports.set=set;exports.del=del;exports.proxy=proxy;exports.unproxy=unproxy;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _dep=__webpack_require__(17);var _dep2=_interopRequireDefault(_dep);var _array=__webpack_require__(20);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var arrayKeys=Object.getOwnPropertyNames(_array.arrayMethods);/**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */var observerState=exports.observerState={shouldConvert:true,isSettingProps:false};/**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */var Observer=exports.Observer=function(){// number of vms that has this object as root $data
  function Observer(value){_classCallCheck(this,Observer);this.value=value;this.dep=new _dep2.default();this.vmCount=0;(0,_index.def)(value,'__ob__',this);if(Array.isArray(value)){var augment=_index.hasProto?protoAugment:copyAugment;augment(value,_array.arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}}/**
       * Walk through each property and convert them into
       * getter/setters. This method should only be called when
       * value type is Object.
       */_createClass(Observer,[{key:'walk',value:function walk(obj){var val=this.value;for(var key in obj){defineReactive(val,key,obj[key]);}}/**
         * Observe a list of Array items.
         */},{key:'observeArray',value:function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}}}]);return Observer;}();// helpers
  /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
     * Augment an target Object or Array by defining
     * hidden properties.
     *
     * istanbul ignore next
     */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];(0,_index.def)(target,key,src[key]);}}/**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */function observe(value){if(!(0,_index.isObject)(value)){return;}var ob=void 0;if((0,_index.hasOwn)(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!_config2.default._isServer&&(Array.isArray(value)||(0,_index.isPlainObject)(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}return ob;}/**
     * Define a reactive property on an Object.
     */function defineReactive(obj,key,val,customSetter){var dep=new _dep2.default();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
  var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(_dep2.default.target){dep.depend();if(childOb){childOb.dep.depend();}if(Array.isArray(value)){for(var e,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if("development"!=='production'&&customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}/**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */function set(obj,key,val){if(Array.isArray(obj)){obj.splice(key,1,val);return val;}if((0,_index.hasOwn)(obj,key)){obj[key]=val;return;}var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&(0,_index.warn)('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - delcare it upfront in the data option.');return;}if(!ob){obj[key]=val;return;}defineReactive(ob.value,key,val);ob.dep.notify();return val;}/**
     * Delete a property and trigger change if necessary.
     */function del(obj,key){var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&(0,_index.warn)('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!(0,_index.hasOwn)(obj,key)){return;}delete obj[key];if(!ob){return;}ob.dep.notify();}function proxy(vm,key){if(!(0,_index.isReserved)(key)){Object.defineProperty(vm,key,{configurable:true,enumerable:true,get:function proxyGetter(){return vm._data[key];},set:function proxySetter(val){vm._data[key]=val;}});}}// using Object type to avoid flow complaining
  function unproxy(vm,key){if(!(0,_index.isReserved)(key)){delete vm[key];}}/***/},/* 20 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.arrayMethods=undefined;var _index=__webpack_require__(7);var arrayProto=Array.prototype;/*
                                       * not type checking this file because flow doesn't play well with
                                       * dynamically accessing methods on Array prototype
                                       */var arrayMethods=exports.arrayMethods=Object.create(arrayProto)/**
     * Intercept mutating methods and emit events
     */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
  var original=arrayProto[method];(0,_index.def)(arrayMethods,method,function mutator(){// avoid leaking arguments:
  // http://jsperf.com/closure-with-arguments
  var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted=void 0;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted)ob.observeArray(inserted);// notify change
  ob.dep.notify();return result;});});/***/},/* 21 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.renderState=undefined;exports.initRender=initRender;exports.renderMixin=renderMixin;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _vnode=__webpack_require__(22);var _vnode2=_interopRequireDefault(_vnode);var _helpers=__webpack_require__(23);var _index=__webpack_require__(7);var _createElement=__webpack_require__(24);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var renderState=exports.renderState={activeInstance:null};function initRender(vm){vm._vnode=null;vm._staticTrees=null;vm.$slots={};// bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement=(0,_index.bind)(function(tag,data,children,namespace){return this._h(this._e(tag,data,namespace),children);},vm);if(vm.$options.el){vm.$mount(vm.$options.el);}}function renderMixin(Vue){Vue.prototype.$nextTick=function(fn){(0,_index.nextTick)(fn,this);};Vue.prototype._render=function(){var vm=this;// set current active instance
  var prev=renderState.activeInstance;renderState.activeInstance=vm;var _vm$$options=vm.$options;var render=_vm$$options.render;var staticRenderFns=_vm$$options.staticRenderFns;var _renderChildren=_vm$$options._renderChildren;var _parentVnode=_vm$$options._parentVnode;if(staticRenderFns&&!vm._staticTrees){// render static sub-trees for once on initial render
  renderStaticTrees(vm,staticRenderFns);}// resolve slots. becaues slots are rendered in parent scope,
  // we set the activeInstance to parent.
  if(_renderChildren){resolveSlots(vm,_renderChildren);}// render self
  var vnode=render.call(vm._renderProxy);// return empty vnode in case the render function errored out
  if(!(vnode instanceof _vnode2.default)){if("development"!=='production'&&Array.isArray(vnode)){(0,_index.warn)('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=(0,_vnode.emptyVNode)();}// set parent
  vnode.parent=_parentVnode;// restore render state
  renderState.activeInstance=prev;return vnode;};// shorthands used in render functions
  Vue.prototype._h=_createElement.renderElementWithChildren;Vue.prototype._e=_createElement.renderElement;Vue.prototype._t=_createElement.renderText;Vue.prototype._m=_createElement.renderStatic;// toString for mustaches
  Vue.prototype._s=_index.renderString;// filter resolution helper
  var identity=function identity(_){return _;};Vue.prototype._f=function(id){return(0,_index.resolveAsset)(this.$options,'filters',id,true)||identity;};// render v-for
  Vue.prototype._l=function(val,render){var ret=void 0,i=void 0,l=void 0,keys=void 0,key=void 0;if(Array.isArray(val)){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if((0,_index.isObject)(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}return ret;};// apply v-bind object
  Vue.prototype._b=function(vnode,value){if(value){if(!(0,_index.isObject)(value)){"development"!=='production'&&(0,_index.warn)('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=(0,_index.toObject)(value);}var data=vnode.data;for(var key in value){var hash=_config2.default.mustUseProp(key)?data.props||(data.props={}):data.attrs||(data.attrs={});hash[key]=value[key];}}}};}function renderStaticTrees(vm,fns){var trees=vm._staticTrees=new Array(fns.length);for(var i=0;i<fns.length;i++){trees[i]=fns[i].call(vm._renderProxy);}}function resolveSlots(vm,renderChildren){if(renderChildren){var children=(0,_helpers.normalizeChildren)(renderChildren);var slots={};var defaultSlot=[];var name=void 0,child=void 0;for(var i=0,l=children.length;i<l;i++){child=children[i];if(name=child.data&&child.data.slot){var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}if(defaultSlot.length&&!(defaultSlot.length===1&&defaultSlot[0].text===' ')){slots['default']=defaultSlot;}vm.$slots=slots;}}/***/},/* 22 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var VNode=function(){function VNode(tag,data,children,text,elm,ns,context,componentOptions){_classCallCheck(this,VNode);this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=ns;this.context=context;this.key=data&&data.key;this.componentOptions=componentOptions;this.child=undefined;this.parent=undefined;// apply construct hook.
  // this is applied during render, before patch happens.
  // unlike other hooks, this is applied on both client and server.
  var constructHook=data&&data.hook&&data.hook.construct;if(constructHook){constructHook(this);}}_createClass(VNode,[{key:'setChildren',value:function setChildren(children){this.children=children;}}]);return VNode;}();exports.default=VNode;var emptyVNode=exports.emptyVNode=function emptyVNode(){return new VNode(undefined,undefined,undefined,'');};/***/},/* 23 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.normalizeChildren=normalizeChildren;exports.updateListeners=updateListeners;var _index=__webpack_require__(7);var _vnode=__webpack_require__(22);var _vnode2=_interopRequireDefault(_vnode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function normalizeChildren(children){// invoke children thunks.
  // components always receive their children as thunks so that they
  // can perform the actual render inside their own dependency collection cycle.
  if(typeof children==='function'){children=children();}if(typeof children==='string'){return[new _vnode2.default(undefined,undefined,undefined,children)];}if(Array.isArray(children)){var res=[];for(var i=0,l=children.length;i<l;i++){var c=children[i];//  nested
  if(Array.isArray(c)){res.push.apply(res,normalizeChildren(c));}else if((0,_index.isPrimitive)(c)){// convert primitive to vnode
  res.push(new _vnode2.default(undefined,undefined,undefined,c));}else if(c instanceof _vnode2.default){res.push(c);}}return res;}return[];}function updateListeners(on,oldOn,add,remove){var name=void 0,cur=void 0,old=void 0,fn=void 0,event=void 0,capture=void 0;for(name in on){cur=on[name];old=oldOn[name];if(!old){capture=name.charAt(0)==='!';event=capture?name.slice(1):name;if(Array.isArray(cur)){add(event,cur.invoker=arrInvoker(cur),capture);}else{fn=cur;cur=on[name]={};cur.fn=fn;add(event,cur.invoker=fnInvoker(cur),capture);}}else if(Array.isArray(old)){old.length=cur.length;for(var i=0;i<old.length;i++){old[i]=cur[i];}on[name]=old;}else{old.fn=cur;on[name]=old;}}for(name in oldOn){if(!on[name]){event=name.charAt(0)==='!'?name.slice(1):name;remove(event,oldOn[name].invoker);}}}function arrInvoker(arr){return function(ev){var single=arguments.length===1;for(var i=0;i<arr.length;i++){single?arr[i](ev):arr[i].apply(null,arguments);}};}function fnInvoker(o){return function(ev){var single=arguments.length===1;single?o.fn(ev):o.fn.apply(null,arguments);};}/***/},/* 24 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.renderElementWithChildren=renderElementWithChildren;exports.renderElement=renderElement;exports.renderText=renderText;exports.renderStatic=renderStatic;var _vnode=__webpack_require__(22);var _vnode2=_interopRequireDefault(_vnode);var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _createComponent=__webpack_require__(25);var _helpers=__webpack_require__(23);var _render=__webpack_require__(21);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function renderElementWithChildren(vnode,children){if(vnode){if(vnode.componentOptions){if("development"!=='production'&&children&&typeof children!=='function'){(0,_index.warn)('A component\'s children should be a function that returns the '+'children array. This allows the component to track the children '+'dependencies and optimizes re-rendering.');}vnode.componentOptions.children=children;}else{children=(0,_helpers.normalizeChildren)(children);vnode.setChildren(children);if(false){if(vnode.tag==='listview'){(0,_index.signChildren)(children,'$underListview',true);}else if(vnode.$underListview){(0,_index.signChildren)(children,'$underListview',vnode.$underListview);}}}}return vnode;}function renderElement(tag,data,namespace){// make sure to expose real self instead of proxy
  var context=this._self;var parent=_render.renderState.activeInstance;if(!parent){"development"!=='production'&&(0,_index.warn)('createElement cannot be called outside of component '+'render functions.');return;}if(!tag){// in case of component :is set to falsy value
  return(0,_vnode.emptyVNode)();}if(typeof tag==='string'){var Ctor=void 0;if(_config2.default.isReservedTag(tag)){return new _vnode2.default(tag,data,undefined,undefined,undefined,namespace,context);}else if(Ctor=(0,_index.resolveAsset)(context.$options,'components',tag)){return(0,_createComponent.createComponent)(Ctor,data,parent,context,tag);}else{if(true){if(!namespace&&_config2.default.isUnknownElement(tag)){(0,_index.warn)('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.');}}return new _vnode2.default(tag,data,undefined,undefined,undefined,namespace,context);}}else{return(0,_createComponent.createComponent)(tag,data,parent,context);}}function renderText(str){return str||'';}function renderStatic(index){return this._staticTrees[index];}/***/},/* 25 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.createComponent=createComponent;exports.createComponentInstanceForVnode=createComponentInstanceForVnode;var _index=__webpack_require__(12);var _index2=_interopRequireDefault(_index);var _vnode=__webpack_require__(22);var _vnode2=_interopRequireDefault(_vnode);var _lifecycle=__webpack_require__(26);var _index3=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy};var hooksToMerge=Object.keys(hooks);function createComponent(Ctor,data,parent,context,tag){if(!Ctor){return;}if((0,_index3.isObject)(Ctor)){Ctor=_index2.default.extend(Ctor);}if(typeof Ctor!=='function'){if(true){(0,_index3.warn)('Invalid Component definition: '+Ctor,parent);}return;}// async component
  if(!Ctor.cid){if(Ctor.resolved){Ctor=Ctor.resolved;}else{Ctor=resolveAsyncComponent(Ctor,function(){// it's ok to queue this on every render because
  // $forceUpdate is buffered. this is only called
  // if the
  parent.$forceUpdate();});if(!Ctor){// return nothing if this is indeed an async component
  // wait for the callback to trigger parent update.
  return;}}}data=data||{};// merge component management hooks onto the placeholder node
  mergeHooks(data);// extract props
  var propsData=extractProps(data,Ctor);// extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners=data.on;if(listeners){delete data.on;}// return a placeholder vnode
  var name=Ctor.options.name||tag;var vnode=new _vnode2.default('vue-component-'+Ctor.cid+(name?'-'+name:''),data,undefined,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,parent:parent,tag:tag,children:undefined}// children to be set later by renderElementWithChildren,
  // but before the init hook
  );return vnode;}function createComponentInstanceForVnode(vnode// we know it's MountedComponentVNode but flow doesn't
  ){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:vnodeComponentOptions.parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children};// check inline-template render functions
  var inlineTemplate=vnode.data.inlineTemplate;if(inlineTemplate){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function init(vnode,hydrating){if(!vnode.child){var child=vnode.child=createComponentInstanceForVnode(vnode);// sign child
  if(false){(0,_index3.signChildren)([child],'$underListview',vnode.$underListview);}child.$mount(hydrating?vnode.elm:undefined,hydrating);}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions;vnode.child=oldVnode.child;vnode.child._updateFromParent(options.propsData,// updated props
  options.listeners,// updated listeners
  vnode,// new parent vnode
  options.children// new children
  );}function insert(vnode){if(!vnode.child._isMounted){vnode.child._isMounted=true;(0,_lifecycle.callHook)(vnode.child,'mounted');}if(vnode.data.keepAlive){(0,_lifecycle.callHook)(vnode.child,'activated');}}function destroy(vnode){if(!vnode.child._isDestroyed){if(!vnode.data.keepAlive){vnode.child.$destroy();}else{(0,_lifecycle.callHook)(vnode.child,'deactivated');}}}function resolveAsyncComponent(factory,cb){if(factory.requested){// pool callbacks
  factory.pendingCallbacks.push(cb);}else{var _ret=function(){factory.requested=true;var cbs=factory.pendingCallbacks=[cb];var sync=true;factory(// resolve
  function(res){if((0,_index3.isObject)(res)){res=_index2.default.extend(res);}// cache resolved
  factory.resolved=res;// invoke callbacks only if this is not a synchronous resolve
  // (async resolves are shimmed as synchronous during SSR)
  if(!sync){for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}}},// reject
  function(reason){"development"!=='production'&&(0,_index3.warn)('Failed to resolve async component: '+factory+(reason?'\nReason: '+reason:''));});sync=false;// return in case resolved synchronously
  return{v:factory.resolved};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}}function extractProps(data,Ctor){// we are only extrating raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions=Ctor.options.props;if(!propOptions){return;}var res={};var attrs=data.attrs;var props=data.props;var staticAttrs=data.staticAttrs;if(!attrs&&!props&&!staticAttrs){return res;}for(var key in propOptions){var altKey=(0,_index3.hyphenate)(key);checkProp(res,attrs,key,altKey)||checkProp(res,props,key,altKey)||checkProp(res,staticAttrs,key,altKey);}return res;}function checkProp(res,hash,key,altKey){if(hash){if((0,_index3.hasOwn)(hash,key)){res[key]=hash[key];delete hash[key];return true;}else if((0,_index3.hasOwn)(hash,altKey)){res[key]=hash[altKey];delete hash[altKey];return true;}}return false;}function mergeHooks(data){if(data.hook){for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=hooks[key];data.hook[key]=fromParent?mergeHook(ours,fromParent):ours;}}else{data.hook=hooks;}}function mergeHook(a,b){// since all hooks have at most two args, use fixed args
  // to avoid having to use fn.apply().
  return function(_,__){a(_,__);b(_,__);};}/***/},/* 26 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initLifecycle=initLifecycle;exports.lifecycleMixin=lifecycleMixin;exports.callHook=callHook;var _watcher=__webpack_require__(16);var _watcher2=_interopRequireDefault(_watcher);var _vnode=__webpack_require__(22);var _index=__webpack_require__(19);var _index2=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initLifecycle(vm){var options=vm.$options;vm.$parent=options.parent;vm.$root=vm.$parent?vm.$parent.$root:vm;if(vm.$parent&&!options._abstract){vm.$parent.$children.push(vm);}vm.$children=[];vm.$refs={};vm._watcher=null;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;vm.$el=el;if(!vm.$options.render){vm.$options.render=_vnode.emptyVNode;if(true){/* istanbul ignore if */if(vm.$options.template){(0,_index2.warn)('You are using the runtime-only build of Vue where the template '+'option is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{(0,_index2.warn)('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');vm._watcher=new _watcher2.default(vm,function(){vm._update(vm._render(),hydrating);},_index2.noop);hydrating=false;// root instance, call mounted on self
  // mounted is called for child components in its inserted hook
  if(vm.$root===vm){vm._isMounted=true;callHook(vm,'mounted');}return vm;};Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}if(false){(0,_index2.signChildren)([vnode],'$underListview',vm.$underListview);}if(!vm._vnode){// Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  vm.$el=vm.__patch__(vm.$el,vnode,hydrating);}else{vm.$el=vm.__patch__(vm._vnode,vnode);}vm._vnode=vnode;// update parent vnode element after patch
  var parentNode=vm.$options._parentVnode;if(parentNode){parentNode.elm=vm.$el;// update parent $el if the parent is HOC
  // this is necessary because child is updated after parent
  if(vm.$parent&&parentNode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}}if(vm._isMounted){callHook(vm,'updated');}};Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this;vm.$options._parentVnode=parentVnode;vm.$options._renderChildren=renderChildren;// update props
  if(propsData&&vm.$options.props){_index.observerState.shouldConvert=false;if(true){_index.observerState.isSettingProps=true;}var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=(0,_index2.validateProp)(vm,key,propsData);}_index.observerState.shouldConvert=true;if(true){_index.observerState.isSettingProps=false;}}// update listeners
  if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;vm._updateListeners(listeners,oldListeners);}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}if(vm._watchers.length){for(var i=0;i<vm._watchers.length;i++){vm._watchers[i].update(true/* shallow */);}}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
  var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options._abstract){(0,_index2.remove)(parent.$children,vm);}// teardown watchers
  if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
  // frozen object may not have observer.
  if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
  vm._isDestroyed=true;callHook(vm,'destroyed');// turn off all instance listeners.
  vm.$off();};}function callHook(vm,hook){vm.$emit('pre-hook:'+hook);var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(vm);}}vm.$emit('hook:'+hook);}/***/},/* 27 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initEvents=initEvents;exports.eventsMixin=eventsMixin;var _index=__webpack_require__(7);var _helpers=__webpack_require__(23);function initEvents(vm){vm._events=Object.create(null);// init parent attached events
  var listeners=vm.$options._parentListeners;var on=(0,_index.bind)(vm.$on,vm);var off=(0,_index.bind)(vm.$off,vm);vm._updateListeners=function(listeners,oldListeners){(0,_helpers.updateListeners)(listeners,oldListeners||{},on,off);};if(listeners){vm._updateListeners(listeners);}}function eventsMixin(Vue){Vue.prototype.$on=function(event,fn){var vm=this;(vm._events[event]||(vm._events[event]=[])).push(fn);return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;// all
  if(!arguments.length){vm._events=Object.create(null);return vm;}// specific event
  var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}// specific handler
  var cb=void 0;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?(0,_index.toArray)(cbs):cbs;var args=(0,_index.toArray)(arguments,1);for(var i=0,l=cbs.length;i<l;i++){cbs[i].apply(vm,args);}}return vm;};}/***/},/* 28 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.warn=undefined;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _util=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var warn=void 0;var formatComponentName=void 0;if(true){(function(){var hasConsole=typeof console!=='undefined';exports.warn=warn=function warn(msg,vm){if(hasConsole&&!_config2.default.silent){console.error('[Vue warn]: '+msg+(vm?formatComponentName(vm):''));}};formatComponentName=function formatComponentName(vm){if(vm.$root===vm){return' (found in root instance)';}var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return name?' (found in component: <'+(0,_util.hyphenate)(name)+'>)':' (found in anonymous component. Use the "name" option for better debugging messages)';};})();}exports.warn=warn;/***/},/* 29 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.validateProp=validateProp;var _util=__webpack_require__(5);var _index=__webpack_require__(19);var _debug=__webpack_require__(28);function validateProp(vm,key,propsData){/* istanbul ignore if */if(!vm.$options.props||!propsData)return;var prop=vm.$options.props[key];var absent=!(0,_util.hasOwn)(propsData,key);var value=propsData[key];// handle boolean props
  if(prop.type===Boolean){if(absent&&!(0,_util.hasOwn)(prop,'default')){value=false;}else if(value===''||value===(0,_util.hyphenate)(key)){value=true;}}// check default value
  if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
  // make sure to observe it.
  _index.observerState.shouldConvert=true;(0,_index.observe)(value);_index.observerState.shouldConvert=false;}if(true){assertProp(prop,key,value,vm,absent);}return value;}/**
     * Get the default value of a prop.
     */function getPropDefaultValue(vm,prop,name){// no default, return undefined
  if(!(0,_util.hasOwn)(prop,'default')){return undefined;}var def=prop.default;// warn against non-factory defaults for Object & Array
  if((0,_util.isObject)(def)){"development"!=='production'&&(0,_debug.warn)('Invalid default value for prop "'+name+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// call factory function for non-Function types
  return typeof def==='function'&&prop.type!==Function?def.call(vm):def;}/**
     * Assert whether a prop is valid.
     */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){(0,_debug.warn)('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){(0,_debug.warn)('Invalid prop: type check failed for prop "'+name+'".'+' Expected '+expectedTypes.map(_util.capitalize).join(', ')+', got '+Object.prototype.toString.call(value).slice(8,-1)+'.',vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){(0,_debug.warn)('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}/**
     * Assert the type of a value
     */function assertType(value,type){var valid=void 0;var expectedType=void 0;if(type===String){expectedType='string';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Number){expectedType='number';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Boolean){expectedType='boolean';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Function){expectedType='function';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Object){expectedType='Object';valid=(0,_util.isPlainObject)(value);}else if(type===Array){expectedType='Array';valid=Array.isArray(value);}else{expectedType=type.name||type.toString();valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/***/},/* 30 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.stopRAF=exports.rAF=undefined;exports.Ruler=Ruler;exports.offsetTop=offsetTop;exports.offsetLeft=offsetLeft;exports.imageLazyer=imageLazyer;var _env=__webpack_require__(10);var winWidth=document.body.clientWidth;var ua=navigator.userAgent.toLowerCase();if(false){var ScreenWidthResolutionReg=/screenwidthresolution\=(\d*)/;var ScreenDensityReg=/screendensity\=([\d|\.]*)/;var ScreenWidthResolution=0;var ScreenDensity=1;var ScreenWidthResolutionMatch=ua.match(ScreenWidthResolutionReg);if(ScreenWidthResolutionMatch&&ScreenWidthResolutionMatch[1]&&!isNaN(ScreenWidthResolutionMatch[1])){ScreenWidthResolution=+ScreenWidthResolutionMatch[1];}var ScreenDensityMatch=ua.match(ScreenDensityReg);if(ScreenDensityMatch&&ScreenDensityMatch[1]&&!isNaN(ScreenDensityMatch[1])){ScreenDensity=+ScreenDensityMatch[1];}if(ScreenWidthResolution!==0){winWidth=Math.round(ScreenWidthResolution/ScreenDensity);}}/**
     * animate frame
     * @param {function} 帧函数
     * @return {int} 帧函数timer
     */var rAF=exports.rAF=window.requestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};/**
     * 停止 animate frame
     * @param {int} 帧函数timer
     */var stopRAF=exports.stopRAF=window.cancelAnimationFrame||window.clearTimeout;/**
     * 按照比例缩放尺寸，并且取整
     * @param {int} value 原始尺寸
     * @param {int} designWidth 设计稿宽度，默认为750
     */function Ruler(value){var designWidth=arguments.length<=1||arguments[1]===undefined?750:arguments[1];return Math.round(value*winWidth/designWidth);}/**
     * 获取元素距离父亲的offsetLeft
     * @param {element} el 待计算的元素
     * @param {element} parent el 相对的元素，可选，不传则指向上层listview
     * @return {int} offsetTop
     */function offsetTop(el,parentEl){if(!el)return null;var curEl=el;var offsetTop=curEl.offsetTop;var flag=false;var toListview=parentEl?false:true;while(curEl=curEl.parentNode){if(toListview){if(curEl.tagName==='listview'){flag=true;break;}}else{if(curEl===parentEl){flag=true;break;}}offsetTop+=curEl.offsetTop;}return flag?offsetTop:null;}/**
     * 获取元素距离父亲的offsetLeft
     * @param {element} el 待计算的元素
     * @param {element} parent el 相对的元素，可选，不传则指向上层listview
     * @return {int} offsetLeft
     */function offsetLeft(el,parentEl){if(!el)return null;var curEl=el;var offsetLeft=curEl.offsetLeft;var flag=false;var toListview=parentEl?false:true;while(curEl=curEl.parentNode){if(toListview){if(curEl.tagName==='listview'){flag=true;break;}}else{if(curEl===parentEl){flag=true;break;}}offsetLeft+=curEl.offsetLeft;}return flag?offsetLeft:null;}var listviewLazyInfos={};function effectImageLazyerListener(el,src,placeholder){if(el.__lazyTimes===undefined){el.__lazyTimes=0;}// max 10 times
  if(el.__lazyTimes>=10)return;var listviewNode=null;var parentNode=el.parentNode;while(parentNode){if(parentNode.tagName==='listview'){listviewNode=parentNode;break;}parentNode=parentNode.parentNode;}// 还没有在listview中
  if(!listviewNode){// push to nextTick
  (0,_env.nextTick)(function(){el.__lazyTimes++;effectImageLazyerListener(el,src,placeholder);},this);return;}// 获取元素距离listview上方位置
  var elOffsetTop=offsetTop(el);var listviewId=listviewNode.createId;// listview 滚动事件监听
  if(!listviewLazyInfos[listviewId]){listviewLazyInfos[listviewId]={images:{},handle:function handle(e){var scrollView=e.target;if(!listviewLazyInfos[scrollView.createId])return;var scrollClientTopPos=scrollView.scrollTop;var scrollClientHeight=scrollView.offsetHeight;var scrollClientBottomPos=scrollClientTopPos+scrollClientHeight;var images=listviewLazyInfos[scrollView.createId].images;for(var k in images){var image=images[k];if(scrollClientBottomPos+scrollClientHeight>=image.offsetTop&&scrollClientTopPos<=image.offsetBottom+scrollClientHeight){// 预加载一屏，多保留一屏
  // 可视区域
  if(!image.show){image.elm.setAttribute('src',image.src);image.show=true;}}else{// 非可视区域
  if(image.show){image.elm.setAttribute('src',image.placeholder);image.show=false;}}}}};listviewNode.addEventListener('scroll',listviewLazyInfos[listviewId].handle);}listviewLazyInfos[listviewId].images[el.createId]={elm:el,src:src,show:false,placeholder:placeholder,offsetTop:elOffsetTop,offsetBottom:elOffsetTop+el.offsetHeight};(0,_env.nextTick)(function(){var event=new Event('scroll');listviewNode.dispatchEvent(event);},this);}// get parent scrollview or listview
  function getParentScrollView(el){var listviewNode=null;var parentNode=el.parentNode;while(parentNode){if(parentNode.tagName==='listview'){listviewNode=parentNode;break;}parentNode=parentNode.parentNode;}return listviewNode?listviewNode:null;}// get lazyInfos
  function getImageLazyInfos(el,scroller){var listviewId=scroller.createId;if(!listviewLazyInfos[listviewId])return null;var infos=listviewLazyInfos[listviewId].images[el.createId];return infos?infos:null;}// set recently
  function updateInfos(el,src,placeholder){var scroller=getParentScrollView(el);if(!scroller)return;var image=getImageLazyInfos(el,scroller);if(image){if(image.src!==src||image.placeholder!==placeholder){var elOffsetTop=offsetTop(el);image.src=src;image.placeholder=placeholder;image.offsetTop=elOffsetTop;image.offsetBottom=elOffsetTop+el.offsetHeight;var scrollClientTopPos=scroller.scrollTop;var scrollClientHeight=scroller.offsetHeight;var scrollClientBottomPos=scrollClientTopPos+scrollClientHeight;if(scrollClientBottomPos+scrollClientHeight>=image.offsetTop&&scrollClientTopPos<=image.offsetBottom+scrollClientHeight){// 预加载一屏，多保留一屏
  // 可视区域
  image.elm.setAttribute('src',image.src);image.show=true;}else{// 非可视区域
  image.elm.setAttribute('src',image.placeholder);image.show=false;}}}}/**
     * 为image元素设置lazyload
     * @param {element} el 待设置的image元素
     * @param {string} src 图片地址
     * @param {string} placeholder placeholder图片地址
     */function imageLazyer(el,src,placeholder){if(el.__isLazyer){// update
  updateInfos(el,src,placeholder);}else{// init
  placeholder=placeholder||'http://s17.mogucdn.com/p1/160411/upload_ie4wmytcme3tay3eg4zdambqgqyde_1x1.gif';el.setAttribute('src',placeholder);effectImageLazyerListener(el,src,placeholder);el.__isLazyer=true;}}/***/},/* 31 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ajax=ajax;var _util=__webpack_require__(5);var _lang=__webpack_require__(8);var _jsonp=__webpack_require__(32);var _jsonp2=_interopRequireDefault(_jsonp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DATA_TYPE={XML:'xml',HTML:'html',TEXT:'text',JSON:'json',JSONP:'jsonp',SCRIPT:'script'};/**
        * Created by xinnian on 16/4/11.
        *
        * 依赖XHR 对象,和 LoadScript
        *
        */function ajax(options){var _opt=(0,_util.extend)({type:'GET',url:null,data:null,contentType:'application/x-www-form-urlencoded',mimeType:null,dataType:DATA_TYPE.TEXT,headers:{},success:function success(data,status,xhr){},error:function error(xhr,errorType,_error){},complete:function complete(xhr,status){}},options);//构建URL 参数
  if(_opt.type.toUpperCase()==='GET'){if(!_opt.url){throw new Error('url 不合法');}else{for(var k in _opt.data){_opt.url=(0,_lang.updateQueryStringParameter)(_opt.url,k,_opt.data[k]);}}}if(_opt.dataType.toLowerCase()===DATA_TYPE.JSONP){(0,_jsonp2.default)(_opt.url,function(error,data){if(error){if(_opt.error){_opt.error(error);}else{}}else{if(_opt.success){_opt.success(data);}}});}else{(function(){var xhr=new XMLHttpRequest();xhr.open(_opt.type.toUpperCase(),_opt.url);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(_opt.dataType.toLowerCase()===DATA_TYPE.JSON){try{_opt.success(JSON.parse(xhr.responseText));}catch(e){console.log(xhr.responseText);_opt.error(new Error("数据格式化错误"));}}else{_opt.success(xhr.responseText);}}};xhr.onerror=function(error){_opt.error(error);};xhr.send();})();}}/***/},/* 32 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=jsonp;var _lang=__webpack_require__(8);var jsonpcount=1;/**
                         * Created by xinnian on 16/4/12.
                         */function jsonp(url,cbFn){var cbFnName='jsonp'+jsonpcount++;url=(0,_lang.updateQueryStringParameter)(url,'callback',cbFnName);if(typeof global==='undefined'){global=window;}global[cbFnName]=function(data){if(cbFn){cbFn(null,data);}else{console.log(data);}};function errorHandle(error){if(cbFn){cbFn(error);}else{console.log(error);}}if(false){var elem=document.createElement('script');elem.src=url;elem.error=errorHandle;document.head.appendChild(elem);}else{loader.script(url,function(){},errorHandle);}}/* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}());/***/},/* 33 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initUse=initUse;var _index=__webpack_require__(7);function initUse(Vue){Vue.use=function(plugin){/* istanbul ignore if */if(plugin.installed){return;}// additional parameters
  var args=(0,_index.toArray)(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};}/***/},/* 34 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initMixin=initMixin;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initMixin(Vue){Vue.mixin=function(mixin){Vue.options=(0,_index.mergeOptions)(Vue.options,mixin);// update constructors that are already created
  _config2.default._ctors.forEach(function(Ctor){Ctor.options=(0,_index.mergeOptions)(Ctor['super'].options,Ctor.extendOptions);});};}/***/},/* 35 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initExtend=initExtend;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initExtend(Vue){/**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */Vue.cid=0;var cid=1;/**
       * Class inheritance
       */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var isFirstExtend=Super.cid===0;if(isFirstExtend&&extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name||Super.options.name;if(true){if(!/^[a-zA-Z][\w-]*$/.test(name)){(0,_index.warn)('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');name=null;}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=(0,_index.mergeOptions)(Super.options,extendOptions);Sub['super']=Super;// allow further extension
  Sub.extend=Super.extend;// create asset registers, so extended classes
  // can have their private assets too.
  _config2.default._assetTypes.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
  if(name){Sub.options.components[name]=Sub;}// book-keeping for global mixin edge cases. also expose a way to remove it
  Sub.extendOptions=extendOptions;_config2.default._ctors.push(Sub);Sub.release=function(){(0,_index.remove)(_config2.default._ctors,Sub);};// cache constructor
  if(isFirstExtend){extendOptions._Ctor=Sub;}return Sub;};}/***/},/* 36 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.initAssetRegisters=initAssetRegisters;var _config=__webpack_require__(4);var _config2=_interopRequireDefault(_config);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function initAssetRegisters(Vue){/**
       * Create asset registration methods.
       */_config2.default._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */if(true){if(type==='component'&&_config2.default.isReservedTag(id)){(0,_index.warn)('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&(0,_index.isPlainObject)(definition)){definition.name=definition.name||id;definition=Vue.extend(definition);}this.options[type+'s'][id]=definition;return definition;}};});}/***/},/* 37 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keepAlive=__webpack_require__(38);var _keepAlive2=_interopRequireDefault(_keepAlive);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={KeepAlive:_keepAlive2.default};/***/},/* 38 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _lifecycle=__webpack_require__(26);exports.default={name:'keep-alive',_abstract:true,props:{child:Object},created:function created(){this.cache=Object.create(null);},render:function render(){var rawChild=this.child;var realChild=getRealChild(this.child);var cid=realChild.componentOptions.Ctor.cid;if(this.cache[cid]){var child=realChild.child=this.cache[cid].child;realChild.elm=this.$el=child.$el;}else{this.cache[cid]=realChild;}realChild.data.keepAlive=true;return rawChild;},destroyed:function destroyed(){for(var key in this.cache){var vnode=this.cache[key];(0,_lifecycle.callHook)(vnode.child,'deactivated');vnode.child.$destroy();}}};// in case the child is also an abstract component, e.g. <transition-control>
  // we want to recrusively retrieve the real component to be rendered
  function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options._abstract){return getRealChild(compOptions.propsData.child);}else{return vnode;}}/***/},/* 39 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.patch=undefined;var _nodeOps=__webpack_require__(40);var nodeOps=_interopRequireWildcard(_nodeOps);var _patch=__webpack_require__(46);var _index=__webpack_require__(47);var _index2=_interopRequireDefault(_index);var _index3=__webpack_require__(50);var _index4=_interopRequireDefault(_index3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}// the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules=_index4.default.concat(_index2.default);var patch=exports.patch=(0,_patch.createPatchFunction)({nodeOps:nodeOps,modules:modules});/***/},/* 40 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.createElement=createElement;exports.createElementNS=createElementNS;exports.createTextNode=createTextNode;exports.insertBefore=insertBefore;exports.removeChild=removeChild;exports.appendChild=appendChild;exports.parentNode=parentNode;exports.nextSibling=nextSibling;exports.tagName=tagName;exports.setTextContent=setTextContent;exports.childNodes=childNodes;exports.setAttributes=setAttributes;exports.removeAttributes=removeAttributes;var _index=__webpack_require__(41);var _util=__webpack_require__(7);var _elemExtra=__webpack_require__(45);function setText(elem,text){text=text.trim();if(false){elem.innerHTML=text;}else{elem.setText(text);}}var elementIdCount=1;function createElement(tagName){var elem=void 0;if(true){elem=document.createElement(tagName);}else{elem=document.createElement(_index.webTagMap[tagName]||'div');elem.tag=tagName;elem.setAttribute('tag',tagName);elem.__defineGetter__('tagName',function(){return this.tag;});elem.createId=tagName+elementIdCount++;}(0,_elemExtra.elemExtra)(elem,'createElement');return elem;}function createElementNS(namespace,tagName){return document.createElementNS(_index.namespaceMap[namespace],tagName);}function createTextNode(text){return{text:text,nodeType:3};}function insertBefore(parentNode,newNode,referenceNode){if(newNode.nodeType===3){// 处理文本节点
  newNode.curParent=parentNode;newNode.__defineGetter__('parentNode',function(){return this.curParent;});if(parentNode.tagName==='label'){setText(parentNode,newNode.text);newNode.__defineSetter__('textContent',function(text){if(this.curParent){setText(this.curParent,text);}});}}else{parentNode.insertBefore(newNode,referenceNode);}}function removeChild(node,child){if(child.nodeType===3){// 处理文本节点
  if(node.tagName==='label'){if(false){node.innerHTML='';}else{node.setText('');}child.curParent=undefined;}}else{node.removeChild(child);}}function appendChild(node,child){// console.log(`appendChild node: ${node.tagName} child: ${child.tagName}`)
  if(child.nodeType===3){// 处理文本节点
  child.curParent=node;child.__defineGetter__('parentNode',function(){return this.curParent;});if(node.tagName==='label'){setText(node,child.text);child.__defineSetter__('textContent',function(text){if(this.curParent){setText(this.curParent,text);}});}}else{node.appendChild(child);}}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function childNodes(node){return node.childNodes;}// export function setAttribute (node: Element, key: string, val: string) {
  //   node.setAttribute(key, val)
  // }
  function setAttributes(node,attrs){if(!attrs||(0,_util.isEmptyObject)(attrs))return;var preAttrs={};for(var key in attrs){var value=attrs[key];if((0,_index.isBooleanAttr)(key)){// set attribute for blank value
  // e.g. <option disabled>Select one</option>
  if((0,_index.isFalsyAttrValue)(value)){if(false){node.removeAttribute(key);}else{preAttrs[key]=value;}}else{if(false){node.setAttribute(key,key);}else{preAttrs[key]=key;}}}else if((0,_index.isEnumeratedAttr)(key)){var v=(0,_index.isFalsyAttrValue)(value)||value==='false'?'false':'true';if(false){node.setAttribute(key,v);}else{preAttrs[key]=v;}}else{if((0,_index.isFalsyAttrValue)(value)){if(false){node.removeAttribute(key);}else{preAttrs[key]=value;}}else{if(false){node.setAttribute(key,value);}else{preAttrs[key]=value;}}}}if(true){node.setAttribution(preAttrs);}}function removeAttributes(node,attrs){if(!attrs||(0,_util.isEmptyObject)(attrs))return;var preAttrs={};for(var key in attrs){if(false){node.removeAttribute(key);}else{preAttrs[key]=null;}}if(true){node.setAttribution(preAttrs);}}/***/},/* 41 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isAndroid=exports.isIE9=exports.isIE=undefined;var _attrs=__webpack_require__(42);Object.keys(_attrs).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _attrs[key];}});});var _class=__webpack_require__(43);Object.keys(_class).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _class[key];}});});var _element=__webpack_require__(44);Object.keys(_element).forEach(function(key){if(key==="default")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _element[key];}});});exports.query=query;var _index=__webpack_require__(7);var UA=_index.inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=exports.isIE=UA&&/msie|trident/.test(UA);var isIE9=exports.isIE9=UA&&UA.indexOf('msie 9.0')>0;var isAndroid=exports.isAndroid=UA&&UA.indexOf('android')>0;/**
     * Query an element selector if it's not an element already.
     */function query(el){if(typeof el==='string'){if(true){return document.createElement('view');}else{var selector=el;el=document.querySelector(el);if(!el){"development"!=='production'&&(0,_index.warn)('Cannot find element: '+selector);return document.createElement('div');}}}return el;}/***/},/* 42 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isFalsyAttrValue=exports.getXlinkProp=exports.isXlink=exports.xlinkNS=exports.propsToAttrMap=exports.isBooleanAttr=exports.isEnumeratedAttr=exports.mustUseProp=undefined;var _util=__webpack_require__(5);// attributes that should be using props for binding
  var mustUseProp=exports.mustUseProp=(0,_util.makeMap)('');var isEnumeratedAttr=exports.isEnumeratedAttr=(0,_util.makeMap)('');var isBooleanAttr=exports.isBooleanAttr=(0,_util.makeMap)('');var propsToAttrMap=exports.propsToAttrMap={acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'};var xlinkNS=exports.xlinkNS='http://www.w3.org/1999/xlink';var isXlink=exports.isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=exports.getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=exports.isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};/***/},/* 43 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.genClassForVnode=genClassForVnode;exports.concat=concat;exports.stringifyClass=stringifyClass;var _util=__webpack_require__(5);function genClassForVnode(vnode){var data=vnode.data;// Important: check if this is a component container node
  // or a child component root node
  var i=void 0;if((i=vnode.child)&&(i=i._vnode.data)){data=mergeClassData(i,data);}if((i=vnode.parent)&&(i=i.data)){data=mergeClassData(data,i);}return genClassFromData(data);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class};}function genClassFromData(data){var dynamicClass=data.class;var staticClass=data.staticClass;if(staticClass||dynamicClass){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){var res='';if(!value){return res;}if(typeof value==='string'){return value;}if(Array.isArray(value)){var stringified=void 0;for(var i=0,l=value.length;i<l;i++){if(value[i]){if(stringified=stringifyClass(value[i])){res+=stringified+' ';}}}return res.slice(0,-1);}if((0,_util.isObject)(value)){for(var key in value){if(value[key])res+=key+' ';}return res.slice(0,-1);}/* istanbul ignore next */return res;}/***/},/* 44 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.canBeLeftOpenTag=exports.isUnaryTag=exports.tagStyleSupport=exports.isReservedTag=exports.webTagMap=exports.namespaceMap=undefined;exports.getTagNamespace=getTagNamespace;exports.isUnknownElement=isUnknownElement;var _env=__webpack_require__(10);var _util=__webpack_require__(5);var namespaceMap=exports.namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var webTagMap=exports.webTagMap={// default div
  image:'img'};var isReservedTag=exports.isReservedTag=(0,_util.makeMap)('view,label,image,listview,listview-shadow,scrollview,slider-image');var tagStyleSupport=exports.tagStyleSupport={'view':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'paddingLeft,paddingTop,paddingRight,paddingBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'flexDirection,flexWrap,justifyContent,alignItems,'+'alignSelf,flex'),'label':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'color,fontSize,textAlign,fontWeight,whiteSpace,textOverflow,textDecoration,'+'alignSelf,flex'),'listview':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'alignSelf,flex'),'listview-shadow':(0,_util.makeMap)(''),'slider-image':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'paddingLeft,paddingTop,paddingRight,paddingBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'flexDirection,flexWrap,justifyContent,alignItems,'+'alignSelf,flex'),'scrollview':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'paddingLeft,paddingTop,paddingRight,paddingBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'flexDirection,flexWrap,justifyContent,alignItems,'+'alignSelf,flex'),'image':(0,_util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'left,top,right,bottom,borderWidth,borderColor,borderRadius,'+'position,display,backgroundColor,opacity,'+'alignSelf,flex,objectFit')};var isUnaryTag=exports.isUnaryTag=(0,_util.makeMap)('image',true);// Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag=exports.canBeLeftOpenTag=(0,_util.makeMap)('',true);// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  // export const isNonPhrasingTag = makeMap(
  //   'view',
  //   true
  // )
  // this map covers namespace elements that can appear as template root nodes
  var isSVG=(0,_util.makeMap)('',true);function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!_env.inBrowser){return true;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
  return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}/***/},/* 45 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.elemExtra=elemExtra;var _util=__webpack_require__(7);function elemExtra(elem){switch(elem.tagName){case'scrollview':// 代理scroll方法
  elem.setScrollTop=function(val){var minTop=0;var maxTop=this.scrollHeight-this.offsetHeight;val=val<minTop?minTop:val;val=val>maxTop?maxTop:val;this.scrollTop=val;}.bind(elem);elem.setScrollLeft=function(val){var minLeft=0;var maxLeft=this.scrollWidth-this.offsetWidth;val=val<minLeft?minLeft:val;val=val>maxLeft?maxLeft:val;this.scrollLeft=val;}.bind(elem);if(false){// scrollview scroll
  // 模拟缓动
  // let startX = 0
  // let startY = 0
  // let startScrollLeft = 0
  // let startScrollTop = 0
  // let lastMoveTime = 0
  // let lastMoveStartX = 0
  // let lastMoveStartY = 0
  // let stopInertiaMove = false
  // let touchStartHandle = function(e) {
  //   // e.preventDefault()
  //   // e.stopPropagation()
  //   lastMoveStartX = startX = e.touches[0].pageX
  //   lastMoveStartY = startY = e.touches[0].pageY
  //   startScrollLeft = elem.scrollLeft
  //   startScrollTop = elem.scrollTop
  //   lastMoveTime = Date.now()
  //   stopInertiaMove = true
  //   elem.addEventListener('touchmove', touchMoveHandle)
  //   elem.addEventListener('touchend', touchEndHandle)
  // }
  // let touchMoveHandle = function(e) {
  //   // e.preventDefault()
  //   // e.stopPropagation()
  //   let nowX = e.touches[0].pageX
  //   let nowY = e.touches[0].pageY
  //   elem.scrollLeft =  startScrollLeft - (nowX - startX)
  //   elem.scrollTop =  startScrollTop - (nowY - startY)
  //   let nowTime = Date.now()
  //   stopInertiaMove = true
  //   if (nowTime - lastMoveTime > 300) { 
  //     lastMoveTime = nowTime
  //     lastMoveStartX = nowX
  //     lastMoveStartY = nowY
  //   }
  // }
  // let touchEndHandle = function(e) {
  //   // e.preventDefault()
  //   // e.stopPropagation()
  //   let nowX = e.changedTouches[0].pageX
  //   let nowY = e.changedTouches[0].pageY
  //   let nowTime = Date.now()
  //   let vX = (nowX - lastMoveStartX) / (nowTime - lastMoveTime)
  //   let vY = (nowY - lastMoveStartY) / (nowTime - lastMoveTime)
  //   if (Math.abs(vX) <= 0 && Math.abs(vY) <= 0) return
  //   stopInertiaMove = false;
  //   (function(vX, vY, lastMoveTime, contentX, contentY) {
  //     let dirX = vX > 0 ? -1 : 1
  //     let dirY = vY > 0 ? -1 : 1
  //     let decelerationX = dirX * 0.001
  //     let decelerationY = dirY * 0.001
  //     let durationX = vX / decelerationX
  //     let durationY = vY / decelerationY
  //     let distX = vX * durationX / 2;
  //     let distY = vY * durationY / 2;
  //     (function inertiaMove() {
  //       if (stopInertiaMove) return
  //       let nowTime = Date.now()
  //       let t = nowTime - lastMoveTime
  //       let nowVX = vX + t * decelerationX
  //       let nowVY = vY + t * decelerationY
  //       // 速度反向就结束
  //       if (vX * nowVX < 0 && vY * nowVY < 0) return
  //       if (vX * nowVX > 0) {
  //         let moveX = (vX + nowVX) / 2 * t
  //         elem.scrollLeft = contentX - moveX
  //       }
  //       if (vY * nowVY > 0) {
  //         let moveY = (vY + nowVY) / 2 * t
  //         elem.scrollTop = contentY - moveY
  //       }
  //       rAF(inertiaMove)
  //     }())
  //   }(vX, vY, lastMoveTime, elem.scrollLeft,elem.scrollTop))
  //   elem.removeEventListener('touchmove', touchMoveHandle)
  //   elem.removeEventListener('touchend', touchEndHandle)
  // }
  // elem.addEventListener('touchstart', touchStartHandle)
  }break;case'listview':// 代理scroll方法
  elem.setScrollTop=function(val){var minTop=0;var maxTop=this.scrollHeight-this.offsetHeight;val=val<minTop?minTop:val;val=val>maxTop?maxTop:val;this.scrollTop=val;}.bind(elem);elem.setScrollLeft=function(val){var minLeft=0;var maxLeft=this.scrollWidth-this.offsetWidth;val=val<minLeft?minLeft:val;val=val>maxLeft?maxLeft:val;this.scrollLeft=val;}.bind(elem);if(false){// listview scroll
  // 模拟缓动
  // let startY = 0
  // let startScrollTop = 0
  // let lastMoveTime = 0
  // let lastMoveStart = 0
  // let stopInertiaMove = false
  // let touchStartHandle = function(e) {
  //   e.preventDefault()
  //   lastMoveStart = startY = e.touches[0].pageY
  //   startScrollTop = elem.scrollTop
  //   lastMoveTime = Date.now()
  //   stopInertiaMove = true
  //   elem.addEventListener('touchmove', touchMoveHandle)
  //   elem.addEventListener('touchend', touchEndHandle)
  // }
  // let touchMoveHandle = function(e) {
  //   e.preventDefault()
  //   let nowY = e.touches[0].pageY
  //   elem.scrollTop =  startScrollTop - (nowY - startY)
  //   let nowTime = Date.now()
  //   stopInertiaMove = true
  //   if (nowTime - lastMoveTime > 300) { 
  //     lastMoveTime = nowTime
  //     lastMoveStart = nowY
  //   }
  //   const scrollEvent = new Event('scroll')
  //   e.target.dispatchEvent(scrollEvent)
  // }
  // let touchEndHandle = function(e) {
  //   e.preventDefault()
  //   let nowY = e.changedTouches[0].pageY
  //   let nowTime = Date.now()
  //   let v = (nowY - lastMoveStart) / (nowTime - lastMoveTime)
  //   if (Math.abs(v) <= 0) return
  //   stopInertiaMove = false;
  //   (function(v, lastMoveTime, contentY) {
  //     let dir = v > 0 ? -1 : 1
  //     let deceleration = dir * 0.001
  //     let duration = v / deceleration
  //     let dist = v * duration / 2;
  //     (function inertiaMove() {
  //       if (stopInertiaMove) return
  //       let nowTime = Date.now()
  //       let t = nowTime - lastMoveTime
  //       let nowV = v + t * deceleration
  //       // 速度反向就结束
  //       if (v * nowV < 0) return
  //       let moveY = (v + nowV) / 2 * t
  //       elem.scrollTop = contentY - moveY
  //       rAF(inertiaMove)
  //     }())
  //   }(v, lastMoveTime, elem.scrollTop))
  //   elem.removeEventListener('touchmove', touchMoveHandle)
  //   elem.removeEventListener('touchend', touchEndHandle)
  // }
  // elem.addEventListener('touchstart', touchStartHandle)
  }break;default:break;}}/***/},/* 46 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.createPatchFunction=createPatchFunction;var _vnode=__webpack_require__(22);var _vnode2=_interopRequireDefault(_vnode);var _index=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
     * Virtual DOM implementation based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * with custom modifications.
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */var emptyNode=new _vnode2.default('',{},[]);var hooks=['create','update','postpatch','remove','destroy'];function isUndef(s){return s==null;}function isDef(s){return s!=null;}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag;}function createKeyToOldIdx(children,beginIdx,endIdx){var i=void 0,key=void 0;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key))map[key]=i;}return map;}function createPatchFunction(backend){var i=void 0,j=void 0;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(modules[j][hooks[i]]!==undefined)cbs[hooks[i]].push(modules[j][hooks[i]]);}}function emptyNodeAt(elm){return new _vnode2.default(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove(){if(--remove.listeners===0){removeElement(childElm);}}remove.listeners=listeners;return remove;}function removeElement(el){var parent=nodeOps.parentNode(el);nodeOps.removeChild(parent,el);}function createElm(vnode,insertedVnodeQueue){var i=void 0,elm=void 0;var data=vnode.data=vnode.data||{};if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init))i(vnode);// after calling the init hook, if the vnode is a child component
  // it should've created a child instance and mounted it. the child
  // component also has set the placeholder vnode's elm.
  // in that case we can just return the element and be done.
  if(isDef(i=vnode.child)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);return vnode.elm;}}var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){elm=vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag);setScope(vnode);if(Array.isArray(children)){for(i=0;i<children.length;++i){nodeOps.appendChild(elm,createElm(children[i],insertedVnodeQueue));}}else if((0,_index.isPrimitive)(vnode.text)){nodeOps.appendChild(elm,nodeOps.createTextNode(vnode.text));}// if (isDef(data)) {
  invokeCreateHooks(vnode,insertedVnodeQueue);// }
  }else{elm=vnode.elm=nodeOps.createTextNode(vnode.text);}return vnode.elm;}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var _i=0;_i<cbs.create.length;++_i){cbs.create[_i](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
  if(isDef(i)){if(i.create)i.create(emptyNode,vnode);if(i.insert)insertedVnodeQueue.push(vnode);}}// set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode){var i=void 0;if(isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,before,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){nodeOps.insertBefore(parentElm,createElm(vnodes[startIdx],insertedVnodeQueue),before);}}function invokeDestroyHook(vnode){var i=void 0,j=void 0;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy))i(vnode);for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.child)){invokeDestroyHook(i._vnode);}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){invokeDestroyHook(ch);removeAndInvokeRemoveHook(ch);}else{// Text node
  nodeOps.removeChild(parentElm,ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;if(!rm){// directly removing
  rm=createRmCb(vnode.elm,listeners);}else{// we have a recursively passed down rm callback
  // increase the listeners count
  rm.listeners+=listeners;}// recursively invoke hooks on child component root node
  if(isDef(i=vnode.child)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeElement(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx=void 0,idxInOld=void 0,elmToMove=void 0,before=void 0;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
  }else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
  patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
  patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx))oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);idxInOld=oldKeyToIdx[newStartVnode.key];if(isUndef(idxInOld)){// New element
  nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];/* istanbul ignore if */if("development"!=='production'&&!elmToMove){(0,_index.warn)('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(elmToMove.tag!==newStartVnode.tag){// same key but different element. treat as new element
  nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}}}}if(oldStartIdx>oldEndIdx){before=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,before,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function patchVnode(oldVnode,vnode,insertedVnodeQueue){if(oldVnode===vnode)return;var i=void 0,hook=void 0;if(isDef(i=vnode.data)&&isDef(hook=i.hook)&&isDef(i=hook.prepatch)){i(oldVnode,vnode);}var elm=vnode.elm=oldVnode.elm;var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(vnode.data)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.update))i(oldVnode,vnode);}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch)updateChildren(elm,oldCh,ch,insertedVnodeQueue);}else if(isDef(ch)){if(isDef(oldVnode.text))nodeOps.setTextContent(elm,'');addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(isDef(vnode.data)){for(i=0;i<cbs.postpatch.length;++i){cbs.postpatch[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.postpatch))i(oldVnode,vnode);}}function invokeInsertHook(queue){for(var _i2=0;_i2<queue.length;++_i2){queue[_i2].data.hook.insert(queue[_i2]);}}function hydrate(elm,vnode,insertedVnodeQueue){if(true){if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init))i(vnode,true/* hydrating */);if(isDef(i=vnode.child)){// child component. it should have hydrated its own tree.
  invokeCreateHooks(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){var childNodes=nodeOps.childNodes(elm);for(var _i3=0;_i3<children.length;_i3++){var success=hydrate(childNodes[_i3],children[_i3],insertedVnodeQueue);if(!success){return false;}}}if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}return true;}function assertNodeMatch(node,vnode){if(vnode.tag){if(vnode.tag.indexOf('vue-component')===0){return true;}else{var childNodes=nodeOps.childNodes(node);return vnode.tag===nodeOps.tagName(node).toLowerCase()&&(vnode.children?vnode.children.length===childNodes.length:childNodes.length===0);}}else{return(0,_index.renderString)(vnode.text)===node.data;}}return function patch(oldVnode,vnode,hydrating){var elm=void 0,parent=void 0;var insertedVnodeQueue=[];if(!oldVnode){// empty mount, create new root element
  createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue);}else{if(isRealElement){// mounting to a real element
  // check if this is server-rendered content and if we can perform
  // a successful hydration.
  // if (oldVnode.hasAttribute('server-rendered')) {
  // oldVnode.removeAttribute('server-rendered')
  // hydrating = true
  // }
  if(hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(insertedVnodeQueue);return oldVnode;}else if(true){(0,_index.warn)('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
  // create an empty node and replace it
  oldVnode=emptyNodeAt(oldVnode);}elm=oldVnode.elm;parent=nodeOps.parentNode(elm);createElm(vnode,insertedVnodeQueue);if(parent!==null){nodeOps.insertBefore(parent,vnode.elm,nodeOps.nextSibling(elm));removeVnodes(parent,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(insertedVnodeQueue);return vnode.elm;};}/***/},/* 47 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _directives=__webpack_require__(48);var _directives2=_interopRequireDefault(_directives);var _ref=__webpack_require__(49);var _ref2=_interopRequireDefault(_ref);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=[_ref2.default,_directives2.default];/***/},/* 48 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _options=__webpack_require__(11);exports.default={create:function bindDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'bind');},update:function updateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'update');},postpatch:function postupdateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'postupdate');},destroy:function unbindDirectives(vnode){applyDirectives(vnode,vnode,'unbind');}};function applyDirectives(oldVnode,vnode,hook){var dirs=vnode.data.directives;if(dirs){var oldDirs=oldVnode.data.directives;var isUpdate=hook==='update';for(var i=0;i<dirs.length;i++){var dir=dirs[i];var def=(0,_options.resolveAsset)(vnode.context.$options,'directives',dir.name,true);var fn=def&&def[hook];if(fn){// only call update if value has changed
  if(isUpdate&&oldDirs){var oldValue=dir.oldValue=oldDirs[i].value;if(oldValue===dir.value){continue;}}fn(vnode.elm,dir,vnode,oldVnode);}}}}/***/},/* 49 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _util=__webpack_require__(5);exports.default={create:function create(_,vnode){registerRef(vnode,false);},destroy:function destroy(vnode){registerRef(vnode,true);}};/* flow */function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key)return;var vm=vnode.context;var ref=vnode.child||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){(0,_util.remove)(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(Array.isArray(refs[key])){refs[key].push(ref);}else{refs[key]=[ref];}}else{refs[key]=ref;}}}/***/},/* 50 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _attrs=__webpack_require__(51);var _attrs2=_interopRequireDefault(_attrs);var _events=__webpack_require__(53);var _events2=_interopRequireDefault(_events);var _props=__webpack_require__(54);var _props2=_interopRequireDefault(_props);var _style=__webpack_require__(55);var _style2=_interopRequireDefault(_style);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}if(true){window.diffCount=function(){if(window.___diffcount===undefined){window.___diffcount=1;}else{clearTimeout(window.___diffcounttimer);window.___diffcount++;}window.___diffcounttimer=setTimeout(function(){console.log('diff count: '+window.___diffcount);window.___diffcount=0;},1000);};}// import klass from './class'
  // import transition from './transition'
  exports.default=[_attrs2.default,// klass,
  _events2.default,_props2.default,_style2.default];/***/},/* 51 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _index=__webpack_require__(41);var _nodeOps=__webpack_require__(40);var _attrExtra=__webpack_require__(52);var _util=__webpack_require__(7);function updateAttrs(oldVnode,vnode){if(true){diffCount();}if(!oldVnode.data.attrs&&!vnode.data.attrs){return;}var key=void 0,cur=void 0,old=void 0;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};var preAttrs={};for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){if((0,_attrExtra.attrExtra)(elm,key,cur,vnode,oldVnode)){preAttrs[key]=cur;}}}(0,_nodeOps.setAttributes)(elm,preAttrs);var preRmAttrs={};for(key in oldAttrs){if(attrs[key]==null){if(!(0,_index.isEnumeratedAttr)(key)){preRmAttrs[key]=null;}}}(0,_nodeOps.removeAttributes)(elm,preRmAttrs);}exports.default={create:function create(_,vnode){var attrs=vnode.data.staticAttrs;if(attrs){var preAttrs={};for(var key in attrs){if((0,_attrExtra.attrExtra)(vnode.elm,key,attrs[key],vnode)){preAttrs[key]=attrs[key];}}(0,_nodeOps.setAttributes)(vnode.elm,preAttrs);}updateAttrs(_,vnode);},update:updateAttrs};/***/},/* 52 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.attrExtra=attrExtra;var _util=__webpack_require__(7);/**
     * 处理attr额外信息
     * @param  {element} elm
     * @param  {string} key k
     * @param  {string} cur v
     * @param  {VNode} vnode new vnode
     * @param  {VNode} vnode old vnode
     * @return {bool} is continue set attr
     */function attrExtra(elm,key,cur,vnode,oldVnode){switch(elm.tagName){case'image':if(oldVnode&&oldVnode.$underListview===true){vnode.$underListview=true;}if(false){var staticAttrs=vnode.data.staticAttrs;// web image lazyload
  var lazyImage=staticAttrs&&staticAttrs['placeholder']?staticAttrs['placeholder']:undefined;(0,_util.imageLazyer)(elm,cur,lazyImage);return false;}else{return true;}case'scrollview':if(key==='force-scroll-animate'&&cur+""==='true'){if(false){elm._setScrollTop=elm.setScrollTop;elm._setScrollLeft=elm.setScrollLeft;elm.setScrollTop=function(val){(0,_util.stopRAF)(this._scrollTopTime);var minTop=0;var maxTop=this.scrollHeight-this.offsetHeight;val=val<minTop?minTop:val;val=val>maxTop?maxTop:val;// scroll animate
  var s0=this.scrollTop;var s1=val;var totalTime=0.2;// 0.2s滑动到指定位置
  var fps=60;var times=Math.ceil(totalTime*fps);var v=(s1-s0)/times;var maxTimes=times;function run(times){var _this=this;if(times<=0){this._setScrollTop(s1);return;}else{this._setScrollTop(s0+v*(maxTimes-times));}this._scrollTopTime=(0,_util.rAF)(function(){run.call(_this,--times);});}run.call(this,--times);}.bind(elm);elm.setScrollLeft=function(val){(0,_util.stopRAF)(this._scrollLeftTime);var minLeft=0;var maxLeft=this.scrollWidth-this.offsetWidth;val=val<minLeft?minLeft:val;val=val>maxLeft?maxLeft:val;// scroll animate
  var s0=this.scrollLeft;var s1=val;var totalTime=0.2;// 0.2s滑动到指定位置
  var fps=60;var times=Math.ceil(totalTime*fps);var v=(s1-s0)/times;var maxTimes=times;function run(times){var _this2=this;if(times<=0){this._setScrollLeft(s1);return;}else{this._setScrollLeft(s0+v*(maxTimes-times));}this._scrollLeftTime=(0,_util.rAF)(function(){run.call(_this2,--times);});}run.call(this,--times);}.bind(elm);}else{elm.forceScrollAnimate=true;}return false;}else{return true;}default:return true;}}/***/},/* 53 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _helpers=__webpack_require__(23);function updateDOMListeners(oldVnode,vnode){if(true){diffCount();}if(!oldVnode.data.on&&!vnode.data.on){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};var add=vnode.elm._v_add||(vnode.elm._v_add=function(event,handler,capture){vnode.elm.addEventListener(event,handler,capture);});var remove=vnode.elm._v_remove||(vnode.elm._v_remove=function(event,handler){vnode.elm.removeEventListener(event,handler);});(0,_helpers.updateListeners)(on,oldOn,add,remove);}// skip type checking this file because we need to attach private properties
  // to elements
  exports.default={create:updateDOMListeners,update:updateDOMListeners};/***/},/* 54 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});function updateProps(oldVnode,vnode){if(true){diffCount();}if(!oldVnode.data.props&&!vnode.data.props){return;}var key=void 0,cur=void 0;var elm=vnode.elm;var oldProps=oldVnode.data.props||{};var props=vnode.data.props||{};for(key in oldProps){if(props[key]==null){elm[key]=undefined;}}for(key in props){cur=props[key];if(key==='value'){// store value as _value as well since
  // non-string values will be stringified
  elm._value=cur;// avoid resetting cursor position when value is the same
  if(elm.value!=cur){// eslint-disable-line
  elm.value=cur;}}else{elm[key]=cur;}}}exports.default={create:updateProps,update:updateProps};/***/},/* 55 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _util=__webpack_require__(5);var _styleUtil=__webpack_require__(56);var _styleUtil2=__webpack_require__(56);var _index=__webpack_require__(7);// let testEl
  var normalize=(0,_util.cached)(function(prop){prop=(0,_util.camelize)(prop);if((0,_styleUtil.checkSupport)(prop)){return prop;}});// prop value to css map
  var styleValueToCssMap=function styleValueToCssMap(styleValue){var cssMap={};try{var cssRules=styleValue.split(';');cssRules.forEach(function(rule){var ruleMeans=rule.split(':');if(ruleMeans.length===2){var k=ruleMeans[0].trim();var v=ruleMeans[1].trim();cssMap[(0,_util.camelize)(k)]=isNaN(v)?v:+v;}});}catch(e){if(true){(0,_index.warn)('style invalid, '+'please check if it spell error.');}}return cssMap;};function createStyle(oldVnode,vnode){var style=void 0,name=void 0;var elm=vnode.elm;var vm$$data=vnode.context.$data;var styleSheet=vm$$data.style;// get default style
  style=(0,_styleUtil2.tagStylePack)(vnode.elm.tagName);// extend static class styles
  if(vnode.data.staticClass){var classNames=vnode.data.staticClass.split(' ');if(false){elm.setAttribute('_sclass',vnode.data.staticClass);}classNames.forEach(function(cls){if(cls==='')return;if(styleSheet[cls]){style=(0,_util.extend)(style,styleSheet[cls]);}});}// extend static style styles
  if(vnode.data.staticStyle){var cssMap=styleValueToCssMap(vnode.data.staticStyle);style=(0,_util.extend)(style,cssMap);}var preStyles={};for(name in style){preStyles[normalize(name)]=style[name];}(0,_styleUtil.setStyles)(elm,preStyles);// clone the style for future updates,
  // in case the user mutates the style object in-place.
  vnode.data.baseStyle=(0,_util.extend)({},style);// to data binding style
  updateStyle(oldVnode,vnode);}function updateStyle(oldVnode,vnode){if(true){diffCount();}var cur=void 0,name=void 0;var elm=vnode.elm;var oldStyle=oldVnode.data.style||{};var baseStyle=oldVnode.data.baseStyle||vnode.data.baseStyle||{};var vm$$data=vnode.context.$data;// get default tag styles
  var style={};var styleData=vm$$data.style;// extend class styles
  if(vnode.data.jstyles&&vnode.data.jstyles.class){var classNames=vnode.data.jstyles.class.split(' ');if(false){elm.setAttribute('_class',vnode.data.jstyles.class);}classNames.forEach(function(cls){if(cls==='')return;if(styleData[cls]){style=(0,_util.extend)(style,styleData[cls]);}});}// extend style prop styles
  if(vnode.data.jstyles&&vnode.data.jstyles.style){var cssMap=styleValueToCssMap(vnode.data.jstyles.style);style=(0,_util.extend)(style,cssMap);}var preStyles={};for(name in oldStyle){cur=style[name];// new style wait to del
  if(cur===undefined){// check if in base static style
  cur=baseStyle&&baseStyle[name]?baseStyle[name]:'';preStyles[normalize(name)]=cur;}}for(name in style){cur=style[name];if(cur!==oldStyle[name]){preStyles[normalize(name)]=cur;}}(0,_styleUtil.setStyles)(elm,preStyles);// clone the style for future updates,
  // in case the user mutates the style object in-place.
  vnode.data.style=(0,_util.extend)({},style);vnode.data.baseStyle=(0,_util.extend)({},baseStyle);}exports.default={create:createStyle,update:updateStyle};/***/},/* 56 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.checkSupport=checkSupport;exports.effectProp=effectProp;exports.extraProp=extraProp;exports.isStyleSupport=isStyleSupport;exports.setStyle=setStyle;exports.setStyles=setStyles;exports.tagStylePack=tagStylePack;var _debug=__webpack_require__(28);var _util=__webpack_require__(7);var _util2=__webpack_require__(5);var _util3=__webpack_require__(41);var hackWhileList=(0,_util2.makeMap)('display,wordBreak,overflowX,overflowY,WebkitOverflowScrolling,WebkitFlexDirection,zIndex,'+'transform,transition,transitionProperty,transitionDuration');// number or 'auto'
  var ruleStyles=(0,_util2.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,'+'marginLeft,marginTop,marginRight,marginBottom,'+'paddingLeft,paddingTop,paddingRight,paddingBottom,'+'left,top,right,bottom,borderWidth,borderRadius,'+'fontSize');// string or enum
  var stringStyles=(0,_util2.makeMap)('borderColor,flexDirection,flexWrap,justifyContent,alignItems,alignSelf,'+'position,display,backgroundColor,'+'color,textAlign,fontWeight,whiteSpace,textOverflow,textDecoration,'+'objectFit');// number
  var numberStyles=(0,_util2.makeMap)('flex,opacity');// web prefix style
  var webPrefixStyles=(0,_util2.makeMap)('flexDirection,flexWrap,justifyContent,alignItems,alignSelf,flex,boxOrient,'+'boxPack,boxAlign,boxFlex,transform,transitionDuration');// web older style
  var webExtraStyles={flexDirection:[{hack:'boxOrient',values:{'row':'horizontal','column':'vertical'}}],justifyContent:[{hack:'boxPack',values:{'flex-start':'start','flex-end':'end','space-between':'justify','space-around':'justify'}}],alignItems:[{hack:'boxAlign',values:{'flex-start':'start','flex-end':'end'}}],flex:[{hack:'boxFlex',values:{}}]};/**
     * 获取设备像素，web只能为1
     * @return {int} 设备1像素
     */var DevicePixel= false?1:+(1/window.devicePixelRatio).toFixed(2);/**
     * check is style support
     */function checkSupport(name,tagName){var isSupport=isStyleSupport(name);var tagMsg='';if(typeof tagName==='string'&&_util3.tagStyleSupport[tagName]){tagMsg='in '+tagName+' ';isSupport=_util3.tagStyleSupport[tagName](name)||hackWhileList(name);}if(true){if(!isSupport){(0,_debug.warn)('style '+name+' '+('is not support '+tagMsg+'now.'));}}return isSupport?true:false;}/**
     * replace style prop with finial effect prop
     */function effectProp(name){if(false){return(0,_util2.camelize)('-webkit-'+(0,_util2.hyphenate)(name));}else{return name;}}/**
     * append older style for web
     */function extraProp(name,value){if(false){var _ret=function(){var hackStyle=webExtraStyles[name];var hackMap={};hackStyle.forEach(function(item){var k=(0,_util2.camelize)(item.hack);var v=item.values[value];if(value===''){hackMap[k]=v;}else if(v){hackMap[k]=v;}else{hackMap[k]=value;}});return{v:hackMap};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}else{return null;}}/**
     * check is style name support
     */function isStyleSupport(name){return ruleStyles(name)||stringStyles(name)||numberStyles(name)||("native")==='web'&&hackWhileList(name)?true:false;}/**
     * set style
     */function setStyle(elm,name,value){if(!name)return;if(!checkSupport(name,elm.tagName))return;// reset to default
  if(value===''){if(false){elm.style[effectProp(name)]=value;// css hack
  var hackMap=extraProp(name,value);if(hackMap){for(var k in hackMap){elm.style[effectProp(k)]=value;}}}else{var sobj={};sobj[effectProp(name)]=value;elm.setStyle(sobj);}return;}if(ruleStyles(name)){if(typeof value==='number'){value=(0,_util.Ruler)(value);}else if(value==='pixel'){value=DevicePixel;}}if(false){if(ruleStyles(name)){value+='px';}elm.style[effectProp(name)]=value;// css hack
  var _hackMap=extraProp(name,value);if(_hackMap){for(var _k in _hackMap){elm.style[effectProp(_k)]=_hackMap[_k];}}}else{var _sobj={};_sobj[effectProp(name)]=value;elm.setStyle(_sobj);}}/**
     * set styles
     */function setStyles(elm,cssMap){if(!cssMap||(0,_util.isEmptyObject)(cssMap))return;var effectCssMap={};for(var name in cssMap){var value=cssMap[name];if(!name)continue;if(!checkSupport(name,elm.tagName))continue;// reset to default
  if(value===''){if(false){elm.style[effectProp(name)]=value;}else{effectCssMap[effectProp(name)]=value;}continue;}if(ruleStyles(name)){if(typeof value==='number'){value=(0,_util.Ruler)(value);}else if(value==='pixel'){value=DevicePixel;}}if(false){if(ruleStyles(name)){value+='px';}elm.style[effectProp(name)]=value;}else{effectCssMap[effectProp(name)]=value;}}if(("native")==='native'&&!(0,_util.isEmptyObject)(effectCssMap)){elm.setStyle(effectCssMap);}}/**
     * special tag style pack
     */function tagStylePack(tagName){var packCss={};return packCss;}/***/},/* 57 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _model=__webpack_require__(58);var _model2=_interopRequireDefault(_model);var _show=__webpack_require__(59);var _show2=_interopRequireDefault(_show);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={model:_model2.default,show:_show2.default};/***/},/* 58 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _index=__webpack_require__(7);var _index2=__webpack_require__(41);/* istanbul ignore if *//**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */if(_index2.isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}exports.default={bind:function bind(el,binding,vnode){if(true){if(!/input|select|textarea/.test(vnode.tag)){(0,_index.warn)('v-model is not supported on element type: <'+vnode.tag+'>. '+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',vnode.context);}}if(vnode.tag==='select'){setSelected(el,binding.value);}else{if(!_index2.isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}/* istanbul ignore if */if(_index2.isIE9){el.vmodel=true;}}},postupdate:function postupdate(el,binding,vnode){var val=binding.value;if(vnode.tag==='select'){setSelected(el,val);// in case the options rendered by v-for have changed,
  // it's possible that the value is out-of-sync with the rendered options.
  // detect such cases and filter out values that no longer has a matchig
  // option in the DOM.
  var needReset=el.multiple?val.some(function(v){return hasNoMatchingOption(v,el.options);}):hasNoMatchingOption(val,el.options);if(needReset){trigger(el,'change');}}}};function setSelected(el,value){var isMultiple=el.multiple;if(!isMultiple){el.selectedIndex=-1;}for(var i=0,l=el.options.length;i<l;i++){var option=el.options[i];if(isMultiple){option.selected=value.indexOf(getValue(option))>-1;}else{if(getValue(option)===value){el.selectedIndex=i;break;}}}}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++){if(getValue(options[i])===value){return false;}}return true;}function getValue(option){return'_value'in option?option._value:option.value||option.text;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/***/},/* 59 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _index=__webpack_require__(41);var _transition=__webpack_require__(60);var _styleUtil=__webpack_require__(56);exports.default={bind:function bind(el,_ref,vnode){var value=_ref.value;var transition=getTransition(vnode);if(value&&transition&&transition.appear&&!_index.isIE9){(0,_transition.enter)(vnode);}(0,_styleUtil.setStyle)(el,'display',value?'':'none');},update:function update(el,_ref2,vnode){var value=_ref2.value;var transition=getTransition(vnode);if(transition&&!_index.isIE9){if(value){(0,_transition.enter)(vnode);(0,_styleUtil.setStyle)(el,'display','');}else{(0,_transition.leave)(vnode,function(){(0,_styleUtil.setStyle)(el,'display','none');});}}else{(0,_styleUtil.setStyle)(el,'display',value?'':'none');}}};function getTransition(vnode){var parent=vnode.parent;return parent&&parent.data.transition!=null?parent.data.transition:vnode.data.transition;}/***/},/* 60 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.animationEndEvent=exports.animationProp=exports.transitionEndEvent=exports.transitionProp=undefined;var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.nextFrame=nextFrame;exports.enter=enter;exports.leave=leave;var _classUtil=__webpack_require__(61);var _index=__webpack_require__(7);var _util=__webpack_require__(5);var _index2=__webpack_require__(41);var hasTransition=_index.inBrowser&&!_index2.isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
  var transitionProp=exports.transitionProp='transition';var transitionEndEvent=exports.transitionEndEvent='transitionend';var animationProp=exports.animationProp='animation';var animationEndEvent=exports.animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){exports.transitionProp=transitionProp='WebkitTransition';exports.transitionEndEvent=transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){exports.animationProp=animationProp='WebkitAnimation';exports.animationEndEvent=animationEndEvent='webkitAnimationEnd';}}var raf=_index.inBrowser&&window.requestAnimationFrame||setTimeout;function nextFrame(fn){raf(function(){raf(fn);});}function enter(vnode){var el=vnode.elm;// call leave callback now
  if(el._leaveCb){el._leaveCb.cancelled=true;el._leaveCb();}var data=vnode.data.transition;if(!data){return;}var isAppear=!vnode.context.$root._isMounted;if(isAppear&&!data.appear&&data.appear!==''){return;}var _resolveTransition=resolveTransition(data,vnode.context);var css=_resolveTransition.css;var enterClass=_resolveTransition.enterClass;var enterActiveClass=_resolveTransition.enterActiveClass;var appearClass=_resolveTransition.appearClass;var appearActiveClass=_resolveTransition.appearActiveClass;var beforeEnter=_resolveTransition.beforeEnter;var onEnter=_resolveTransition.onEnter;var afterEnter=_resolveTransition.afterEnter;var enterCancelled=_resolveTransition.enterCancelled;var beforeAppear=_resolveTransition.beforeAppear;var onAppear=_resolveTransition.onAppear;var afterAppear=_resolveTransition.afterAppear;var appearCancelled=_resolveTransition.appearCancelled;var startClass=isAppear?appearClass:enterClass;var activeClass=isAppear?appearActiveClass:enterActiveClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?onAppear||onEnter:onEnter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var expectsCSS=css!==false;var userWantsControl=enterHook&&enterHook.length>1;var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled){addTransitionClass(el,activeClass);if(!userWantsControl){whenTransitionEnds(el,cb);}}});}enterHook&&enterHook(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
  if(el._enterCb){el._enterCb.cancelled=true;el._enterCb();}var data=vnode.data.transition;if(!data){return rm();}var _resolveTransition2=resolveTransition(data,vnode.context);var css=_resolveTransition2.css;var leaveClass=_resolveTransition2.leaveClass;var leaveActiveClass=_resolveTransition2.leaveActiveClass;var beforeLeave=_resolveTransition2.beforeLeave;var onLeave=_resolveTransition2.onLeave;var afterLeave=_resolveTransition2.afterLeave;var leaveCancelled=_resolveTransition2.leaveCancelled;var delayLeave=_resolveTransition2.delayLeave;var expectsCSS=css!==false;var userWantsControl=onLeave&&onLeave.length>1;var cb=el._leaveCb=once(function(){if(expectsCSS){removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled){addTransitionClass(el,leaveActiveClass);if(!userWantsControl){whenTransitionEnds(el,cb);}}});}onLeave&&onLeave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}function resolveTransition(id,context){var def=void 0;if(id&&typeof id==='string'){def=(0,_index.resolveAsset)(context.$options,'transitions',id);return def?ensureTransitionClasses(def.name||id,def):autoCssTransition(id);}else if((typeof id==='undefined'?'undefined':_typeof(id))==='object'){// inline transition object
  if(id.name){def=(0,_index.resolveAsset)(context.$options,'transitions',id.name);}def=def?(0,_util.extend)(ensureTransitionClasses(id.name,def),id):ensureTransitionClasses(id.name,id);// extra hooks to be merged
  // added by <transition-control>
  if(id.hooks){for(var key in id.hooks){mergeHook(def,key,id.hooks[key]);}}return def;}else{return autoCssTransition('v');}}function ensureTransitionClasses(name,def){name=name||'v';var res={};if(def.css!==false){(0,_util.extend)(res,autoCssTransition(name));}(0,_util.extend)(res,def);return res;}var autoCssTransition=(0,_util.cached)(function(name){return{enterClass:name+'-enter',leaveClass:name+'-leave',appearClass:name+'-enter',enterActiveClass:name+'-enter-active',leaveActiveClass:name+'-leave-active',appearActiveClass:name+'-enter-active'};});function mergeHook(def,key,hook){var oldHook=def[key];if(oldHook){def[key]=function(){oldHook.apply(this,arguments);hook();};}else{def[key]=hook;}}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls);(0,_classUtil.addClass)(el,cls);}function removeTransitionClass(el,cls){(0,_util.remove)(el._transitionClasses,cls);(0,_classUtil.removeClass)(el,cls);}function whenTransitionEnds(el,cb){var _getTransitionInfo=getTransitionInfo(el);var type=_getTransitionInfo.type;var timeout=_getTransitionInfo.timeout;var propCount=_getTransitionInfo.propCount;if(!type)return cb();var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(){if(++ended>=propCount){end();}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}function getTransitionInfo(el){var styles=window.getComputedStyle(el);// 1. determine the maximum duration (timeout)
  var transitioneDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitioneDelays,transitionDurations);var animationTimeout=getTimeout(animationDelays,animationDurations);var timeout=Math.max(transitionTimeout,animationTimeout);var type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;var propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;return{type:type,timeout:timeout,propCount:propCount};}function getTimeout(delays,durations){return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}function once(fn){var called=false;return function(){if(!called){called=true;fn();}};}function shouldSkipTransition(vnode){return!!(// if this is a component root node and the compoennt's
  // parent container node also has transition, skip.
  vnode.parent&&vnode.parent.data.transition||// if the element has v-show, let the runtime directive
  // call the hooks instead
  vnode.data.show);}exports.default=hasTransition?{create:function create(_,vnode){if(!shouldSkipTransition(vnode)){enter(vnode);}},remove:function remove(vnode,rm){if(!shouldSkipTransition(vnode)){leave(vnode,rm);}else{rm();}}}:{};/***/},/* 61 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.addClass=addClass;exports.removeClass=removeClass;/**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */function addClass(el,cls){/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=' '+el.getAttribute('class')+' ';if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */function removeClass(el,cls){/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}}else{var cur=' '+el.getAttribute('class')+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}}/***/},/* 62 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _transitionControl=__webpack_require__(63);var _transitionControl2=_interopRequireDefault(_transitionControl);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={TransitionControl:_transitionControl2.default};/***/},/* 63 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/* flow */var _index=__webpack_require__(7);exports.default={name:'transition-control',_abstract:true,props:{child:Object,mode:{validator:function validator(val){/* istanbul ignore if */if(val&&val!=='out-in'&&val!=='in-out'){(0,_index.warn)('transition-mode must be either "out-in" or "in-out".');return false;}return true;}}},render:function render(){var _this=this;var oldChild=this._vnode;var newChild=this.child;if(oldChild&&oldChild.data&&(oldChild.tag!==newChild.tag||oldChild.key!==newChild.key)){if(this.mode==='out-in'){// return empty node
  // and queue an update when the leave finishes
  return addHook(oldChild,{afterLeave:function afterLeave(){_this.$forceUpdate();}});}else if(this.mode==='in-out'){(function(){var delayedLeave=void 0;var performLeave=function performLeave(){delayedLeave();};addHook(newChild,{afterEnter:performLeave,enterCancelled:performLeave});addHook(oldChild,{delayLeave:function delayLeave(leave){delayedLeave=leave;}});})();}}return newChild;}};function addHook(vnode,hooks){/* istanbul ignore if */if(!vnode.data||!vnode.data.transition){return;}var trans=vnode.data.transition;/* istanbul ignore else */if(typeof trans==='string'){trans=vnode.data.transition={name:trans};}else if((typeof trans==='undefined'?'undefined':_typeof(trans))!=='object'){trans=vnode.data.transition={name:'v'};}trans.hooks=hooks;}/***/},/* 64 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.baseOptions=undefined;exports.compile=compile;exports.compileToFunctions=compileToFunctions;var _util=__webpack_require__(5);var _debug=__webpack_require__(28);var _index=__webpack_require__(65);var _errorDetector=__webpack_require__(78);var _index2=__webpack_require__(79);var _index3=_interopRequireDefault(_index2);var _index4=__webpack_require__(83);var _index5=_interopRequireDefault(_index4);var _index6=__webpack_require__(41);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cache=Object.create(null);var baseOptions=exports.baseOptions={isIE:_index6.isIE,expectHTML:true,modules:_index3.default,staticKeys:(0,_util.genStaticKeys)(_index3.default),directives:_index5.default,isReservedTag:_index6.isReservedTag,isUnaryTag:_index6.isUnaryTag,mustUseProp:_index6.mustUseProp,getTagNamespace:_index6.getTagNamespace};function compile(template,options){options=options?(0,_util.extend)((0,_util.extend)({},baseOptions),options):baseOptions;return(0,_index.compile)(template,options);}function compileToFunctions(template,options,vm){var _warn=options&&options.warn||_debug.warn;// detect possible CSP restriction
  /* istanbul ignore if */if(true){try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){_warn('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}var key=options&&options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key];}var res={};var compiled=compile(template,options);res.render=makeFunction(compiled.render);var l=compiled.staticRenderFns.length;res.staticRenderFns=new Array(l);for(var i=0;i<l;i++){res.staticRenderFns[i]=makeFunction(compiled.staticRenderFns[i]);}if(true){if(res.render===_util.noop||res.staticRenderFns.some(function(fn){return fn===_util.noop;})){_warn('failed to compile template:\n\n'+template+'\n\n'+(0,_errorDetector.detectErrors)(compiled.ast).join('\n')+'\n\n',vm);}}return cache[key]=res;}function makeFunction(code){try{return new Function(code);}catch(e){return _util.noop;}}/***/},/* 65 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.compile=compile;var _index=__webpack_require__(66);var _optimizer=__webpack_require__(72);var _codegen=__webpack_require__(73);/**
     * Compile a template.
     */function compile(template,options){var ast=(0,_index.parse)(template.trim(),options);(0,_optimizer.optimize)(ast,options);var code=(0,_codegen.generate)(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};}/***/},/* 66 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.dirRE=undefined;var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.parse=parse;var _entities=__webpack_require__(67);var _htmlParser=__webpack_require__(68);var _textParser=__webpack_require__(69);var _util=__webpack_require__(5);var _helpers=__webpack_require__(71);var dirRE=exports.dirRE=/^v-|^@|^:|^_class|^_style/;var bindRE=/^:|^v-bind:/;var onRE=/^@|^v-on:/;var vclassRE=/^_class/;var vstyleRE=/^_style/;var argRE=/:(.*)$/;var modifierRE=/\.[^\.]+/g;var forAliasRE=/(.*)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/;var camelRE=/[a-z\d][A-Z]/;var decodeHTMLCached=(0,_util.cached)(_entities.decodeHTML);// configurable state
  var warn=void 0;var platformGetTagNamespace=void 0;var platformMustUseProp=void 0;var preTransforms=void 0;var transforms=void 0;var postTransforms=void 0;var delimiters=void 0;/**
     * Convert HTML string to AST.
     */function parse(template,options){warn=options.warn||_helpers.baseWarn;platformGetTagNamespace=options.getTagNamespace||_util.no;platformMustUseProp=options.mustUseProp||_util.no;preTransforms=(0,_helpers.pluckModuleFunction)(options.modules,'preTransformNode');transforms=(0,_helpers.pluckModuleFunction)(options.modules,'transformNode');postTransforms=(0,_helpers.pluckModuleFunction)(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var root=void 0;var currentParent=void 0;var inPre=false;var warned=false;(0,_htmlParser.parseHTML)(template,{expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,start:function start(tag,attrs,unary){// check camelCase tag
  if(camelRE.test(tag)){"development"!=='production'&&warn('Found camelCase tag in template: <'+tag+'>. '+('I\'ve converted it to <'+(0,_util.hyphenate)(tag)+'> for you.'));tag=(0,_util.hyphenate)(tag);}tag=tag.toLowerCase();// check namespace.
  // inherit parent ns if there is one
  var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);// handle IE svg bug
  /* istanbul ignore if */if(options.isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}var element={type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:currentParent,children:[]};if(ns){element.ns=ns;}if(isForbiddenTag(element)){element.forbidden=true;"development"!=='production'&&warn('Templates should only be responsbile for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+('<'+tag+'>.'));}// apply pre-transforms
  for(var i=0;i<preTransforms.length;i++){preTransforms[i](element,options);}if(!inPre){processPre(element);if(element.pre){inPre=true;}}if(inPre){processRawAttrs(element);}else{processKey(element);processFor(element);processIf(element);processOnce(element);// determine whether this is a plain element after
  // removing if/for/once attributes
  element.plain=!element.key&&!attrs.length;processRender(element);processSlot(element);processComponent(element);for(var _i=0;_i<transforms.length;_i++){transforms[_i](element,options);}processAttrs(element);}// tree management
  if(!root){root=element;// check root element constraints
  if(true){if(tag==='slot'||tag==='template'){warn('Cannot use <'+tag+'> as component root element because it may '+'contain multiple nodes:\n'+template);}if(element.attrsMap.hasOwnProperty('v-for')){warn('Cannot use v-for on component root element because it renders '+'multiple elements:\n'+template);}}}else if("development"!=='production'&&!stack.length&&!warned){warned=true;warn('Component template should contain exactly one root element:\n\n'+template);}if(currentParent&&!element.forbidden){if(element.else){processElse(element,currentParent);}else{currentParent.children.push(element);element.parent=currentParent;}}if(!unary){currentParent=element;stack.push(element);}// apply post-transforms
  for(var _i2=0;_i2<postTransforms.length;_i2++){postTransforms[_i2](element,options);}},end:function end(){// remove trailing whitespace
  var element=stack[stack.length-1];var lastNode=element.children[element.children.length-1];if(lastNode&&lastNode.type===3&&lastNode.text===' '){element.children.pop();}// pop stack
  stack.length-=1;currentParent=stack[stack.length-1];// check pre state
  if(element.pre){inPre=false;}},chars:function chars(text){if(!currentParent){if("development"!=='production'&&!warned){warned=true;warn('Component template should contain exactly one root element:\n\n'+template);}return;}text=currentParent.tag==='pre'||text.trim()?decodeHTMLCached(text)// only preserve whitespace if its not right after a starting tag
  :currentParent.children.length?' ':'';if(text){var expression=void 0;if(!inPre&&text!==' '&&(expression=(0,_textParser.parseText)(text,delimiters))){currentParent.children.push({type:2,expression:expression,text:text});}else{currentParent.children.push({type:3,text:text});}}}});return root;}function processPre(el){if((0,_helpers.getAndRemoveAttr)(el,'v-pre')!=null){el.pre=true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.staticAttrs=new Array(l);for(var i=0;i<l;i++){attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){// non root node in pre blocks with no attributes
  el.plain=true;}}function processKey(el){var exp=(0,_helpers.getBindingAttr)(el,'key');if(exp){el.key=exp;}}function processFor(el){var exp=void 0;if(exp=(0,_helpers.getAndRemoveAttr)(el,'v-for')){var inMatch=exp.match(forAliasRE);if(!inMatch){"development"!=='production'&&warn('Invalid v-for expression: '+exp);return;}el.for=inMatch[2].trim();var alias=inMatch[1].trim();var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){el.alias=iteratorMatch[1].trim();el.iterator1=iteratorMatch[2].trim();if(iteratorMatch[3]){el.iterator2=iteratorMatch[3].trim();}}else{el.alias=alias;}}}function processIf(el){var exp=(0,_helpers.getAndRemoveAttr)(el,'v-if');if(exp){el.if=exp;}if((0,_helpers.getAndRemoveAttr)(el,'v-else')!=null){el.else=true;}}function processElse(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){prev.elseBlock=el;}else if(true){warn('v-else used on element <'+el.tag+'> without corresponding v-if.');}}function processOnce(el){var once=(0,_helpers.getAndRemoveAttr)(el,'v-once');if(once!=null){el.once=true;}}function processRender(el){if(el.tag==='render'){el.render=true;el.renderMethod=el.attrsMap[':method']||el.attrsMap['v-bind:method'];el.renderArgs=el.attrsMap[':args']||el.attrsMap['v-bind:args'];if(true){if(el.attrsMap.method){warn('<render> method should use a dynamic binding, e.g. `:method="..."`.');}else if(!el.renderMethod){warn('method attribute is required on <render>.');}if(el.attrsMap.args){warn('<render> args should use a dynamic binding, e.g. `:args="..."`.');}}}}function processSlot(el){if(el.tag==='slot'){el.slotName=(0,_helpers.getBindingAttr)(el,'name');}else{var slotTarget=(0,_helpers.getBindingAttr)(el,'slot');if(slotTarget){el.slotTarget=slotTarget;}}}function processComponent(el){var binding=void 0;if(binding=(0,_helpers.getBindingAttr)(el,'is')){el.component=binding;}if((0,_helpers.getAndRemoveAttr)(el,'keep-alive')!=null){el.keepAlive=true;}if((0,_helpers.getAndRemoveAttr)(el,'inline-template')!=null){el.inlineTemplate=true;}}function processAttrs(el){var list=el.attrsList;var i=void 0,l=void 0,name=void 0,value=void 0,arg=void 0,modifiers=void 0;for(i=0,l=list.length;i<l;i++){name=list[i].name;value=list[i].value;if(dirRE.test(name)){// modifiers
  modifiers=parseModifiers(name);if(modifiers){name=name.replace(modifierRE,'');}if(bindRE.test(name)){// v-bind
  name=name.replace(bindRE,'');if(platformMustUseProp(name)){(0,_helpers.addProp)(el,name,value);}else{(0,_helpers.addAttr)(el,name,value);}}else if(onRE.test(name)){// v-on
  name=name.replace(onRE,'');(0,_helpers.addHandler)(el,name,value,modifiers);}else if(vclassRE.test(name)){name=name.replace(vclassRE,'');// transfrom to jstyle class
  (0,_helpers.addStyle)(el,'class',value);}else if(vstyleRE.test(name)){name=name.replace(vstyleRE,'');// transfrom to jstyle style
  (0,_helpers.addStyle)(el,'style',value);}else{// normal directives
  name=name.replace(dirRE,'');// parse arg
  var argMatch=name.match(argRE);if(argMatch&&(arg=argMatch[1])){name=name.slice(0,-(arg.length+1));}(0,_helpers.addDirective)(el,name,value,arg,modifiers);}}else{// literal attribute
  if(true){var expression=(0,_textParser.parseText)(value,delimiters);if(expression){warn(name+'="'+value+'": '+'Interpolation inside attributes has been deprecated. '+'Use v-bind or the colon shorthand instead.');}}(0,_helpers.addStaticAttr)(el,name,JSON.stringify(value));}}}function parseModifiers(name){var match=name.match(modifierRE);if(match){var _ret=function(){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return{v:ret};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}}function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i<l;i++){if("development"!=='production'&&map[attrs[i].name]){warn('duplicate attribute: '+attrs[i].name);}map[attrs[i].name]=attrs[i].value;}return map;}function findPrevElement(children){var i=children.length;while(i--){if(children[i].tag)return children[i];}}function isForbiddenTag(el){return el.tag==='style'||el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;/* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}/***/},/* 67 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.decodeHTML=decodeHTML;// const decoder = document.createElement('div')
  function decodeHTML(html){// decoder.innerHTML = html
  // return decoder.textContent
  return html.length>0?html.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/&#39;/g,'\'').replace(/&quot;/g,'\"'):'';}/***/},/* 68 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parseHTML=parseHTML;var _entities=__webpack_require__(67);var _util=__webpack_require__(5);var _index=__webpack_require__(41);// Regular Expressions for parsing tags and attributes
  var singleAttrIdentifier=/([^\s"'<>\/=]+)/;/**
                                                   * Not type-checking this file because it's mostly vendor code.
                                                   *//*!
     * HTML Parser By John Resig (ejohn.org)
     * Modified by Juriy "kangax" Zaytsev
     * Original code by Erik Arvidsson, Mozilla Public License
     * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
     */var singleAttrAssign=/=/;var singleAttrAssigns=[singleAttrAssign];var singleAttrValues=[// attr value double quotes
  /"([^"]*)"+/.source,// attr value, single quotes
  /'([^']*)'+/.source,// attr value, no quotes
  /([^\s"'=<>`]+)/.source];// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture='((?:'+ncname+'\\:)?'+ncname+')';var startTagOpen=new RegExp('^<'+qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp('^<\\/'+qnameCapture+'[^>]*>');var doctype=/^<!DOCTYPE [^>]+>/i;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=g==='';});// Special Elements (can contain anything)
  var isSpecialTag=(0,_util.makeMap)('script,style',true);var reCache={};function attrForHandler(handler){var pattern=singleAttrIdentifier.source+'(?:\\s*('+joinSingleAttrAssigns(handler)+')'+'\\s*(?:'+singleAttrValues.join('|')+'))?';return new RegExp('^\\s*'+pattern);}function joinSingleAttrAssigns(handler){return singleAttrAssigns.map(function(assign){return'(?:'+assign.source+')';}).join('|');}function parseHTML(html,handler){var stack=[];var attribute=attrForHandler(handler);var expectHTML=handler.expectHTML;var isUnaryTag=handler.isUnaryTag||_util.no;var index=0;var last=void 0,lastTag=void 0;while(html){last=html;// Make sure we're not in a script or style element
  if(!lastTag||!isSpecialTag(lastTag)){var textEnd=html.indexOf('<');if(textEnd===0){// Comment:
  if(/^<!--/.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){advance(commentEnd+3);continue;}}// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
  if(/^<!\[/.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue;}}// Doctype:
  var doctypeMatch=html.match(doctype);if(doctypeMatch){if(handler.doctype){handler.doctype(doctypeMatch[0]);}advance(doctypeMatch[0].length);continue;}// End tag:
  var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[0],endTagMatch[1],curIndex,index);continue;}// Start tag:
  var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);continue;}}var text=void 0;if(textEnd>=0){text=html.substring(0,textEnd);advance(textEnd);}else{text=html;html='';}if(handler.chars){if(text.trim()!==''){handler.chars(text);}}}else{(function(){var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var endTagLength=0;var rest=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(stackedTag!=='script'&&stackedTag!=='style'&&stackedTag!=='noscript'){text=text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1');}if(handler.chars){handler.chars(text);}return'';});index+=html.length-rest.length;html=rest;parseEndTag('</'+stackedTag+'>',stackedTag,index-endTagLength,index);})();}if(html===last){throw new Error('Error parsing template:\n\n'+html);}}// Clean up any remaining tags
  parseEndTag();function advance(n){index+=n;html=html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end=void 0,attr=void 0;while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&(0,_index.isNonPhrasingTag)(tagName)){parseEndTag('',lastTag);}if((0,_index.canBeLeftOpenTag)(tagName)&&lastTag===tagName){parseEndTag('',tagName);}}var unary=isUnaryTag(tagName)||tagName==='html'&&lastTag==='head'||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
  if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){if(args[3]===''){delete args[3];}if(args[4]===''){delete args[4];}if(args[5]===''){delete args[5];}}attrs[i]={name:args[1],value:(0,_entities.decodeHTML)(args[3]||args[4]||args[5]||'')};}if(!unary){stack.push({tag:tagName,attrs:attrs});lastTag=tagName;unarySlash='';}if(handler.start){handler.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tag,tagName,start,end){var pos=void 0;if(start==null)start=index;if(end==null)end=index;// Find the closest opened tag of the same type
  if(tagName){var needle=tagName.toLowerCase();for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].tag.toLowerCase()===needle){break;}}}else{// If no tag name is provided, clean shop
  pos=0;}if(pos>=0){// Close all the open elements, up the stack
  for(var i=stack.length-1;i>=pos;i--){if(handler.end){handler.end(stack[i].tag,start,end);}}// Remove the open elements from the stack
  stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(tagName.toLowerCase()==='br'){if(handler.start){handler.start(tagName,[],true,start,end);}}else if(tagName.toLowerCase()==='p'){if(handler.start){handler.start(tagName,[],false,start,end);}if(handler.end){handler.end(tagName,start,end);}}}}/***/},/* 69 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parseText=parseText;var _util=__webpack_require__(5);var _filterParser=__webpack_require__(70);var defaultTagRE=/\{\{((?:.|\\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=(0,_util.cached)(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match=void 0,index=void 0;while(match=tagRE.exec(text)){index=match.index;// push text token
  if(index>lastIndex){tokens.push(JSON.stringify(text.slice(lastIndex,index)));}// tag token
  var exp=(0,_filterParser.parseFilters)(match[1].trim());tokens.push('_s('+exp+')');lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push(JSON.stringify(text.slice(lastIndex)));}return tokens.join('+');}/***/},/* 70 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parseFilters=parseFilters;function parseFilters(exp){var inSingle=false;var inDouble=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c=void 0,prev=void 0,i=void 0,expression=void 0,filters=void 0;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){// check single quote
  if(c===0x27&&prev!==0x5C)inSingle=!inSingle;}else if(inDouble){// check double quote
  if(c===0x22&&prev!==0x5C)inDouble=!inDouble;}else if(c===0x7C&&// pipe
  exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){// first filter, end of expression
  lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
  case 0x27:inSingle=true;break;// '
  case 0x28:paren++;break;// (
  case 0x29:paren--;break;// )
  case 0x5B:square++;break;// [
  case 0x5D:square--;break;// ]
  case 0x7B:curly++;break;// {
  case 0x7D:curly--;break;// }
  }}}if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){// _f: resolveFilter
  return'_f("'+filter+'")('+exp+')';}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return'_f("'+name+'")('+exp+','+args;}}/***/},/* 71 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.baseWarn=baseWarn;exports.pluckModuleFunction=pluckModuleFunction;exports.addProp=addProp;exports.addAttr=addAttr;exports.addStaticAttr=addStaticAttr;exports.addDirective=addDirective;exports.addStyle=addStyle;exports.addHook=addHook;exports.addHandler=addHandler;exports.getBindingAttr=getBindingAttr;exports.getAndRemoveAttr=getAndRemoveAttr;function baseWarn(msg){console.error('[Vue parser]: '+msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value});}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value});}function addStaticAttr(el,name,value){(el.staticAttrs||(el.staticAttrs=[])).push({name:name,value:value});}function addDirective(el,name,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,value:value,arg:arg,modifiers:modifiers});}function addStyle(el,type,value){(el.jstyles||(el.jstyles=[])).push({type:type,value:value});}function addHook(el,name,code){var hooks=el.hooks||(el.hooks={});var hook=hooks[name];/* istanbul ignore if */if(hook){hook.push(code);}else{hooks[name]=[code];}}function addHandler(el,name,value,modifiers){var events=el.events||(el.events={});// check capture modifier
  if(modifiers&&modifiers.capture){delete modifiers.capture;name='!'+name;// mark the event as captured
  }var newHandler={value:value,modifiers:modifiers};var handlers=events[name];/* istanbul ignore if */if(Array.isArray(handlers)){handlers.push(newHandler);}else if(handlers){events[name]=[handlers,newHandler];}else{events[name]=newHandler;}}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return dynamicValue;}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue);}}}function getAndRemoveAttr(el,name){var val=void 0;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break;}}}return val;}/***/},/* 72 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.optimize=optimize;var _util=__webpack_require__(5);var isStaticKey=void 0;var isPlatformReservedTag=void 0;var genStaticKeysCached=(0,_util.cached)(genStaticKeys);/**
     * Goal of the optimizier: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */function optimize(root,options){if(!root)return;isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||function(){return false;};// first pass: mark all non-static nodes.
  markStatic(root);// second pass: mark static roots.
  markStaticRoots(root);}function genStaticKeys(keys){return(0,_util.makeMap)('type,tag,attrsList,attrsMap,plain,parent,children,staticAttrs'+(keys?','+keys:''));}function markStatic(node){node.static=isStatic(node);if(node.type===1){for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic(child);if(!child.static){node.static=false;}}}}function markStaticRoots(node){if(node.type===1&&(node.once||node.static)){node.staticRoot=true;return;}if(node.children){for(var i=0,l=node.children.length;i<l;i++){markStaticRoots(node.children[i]);}}}function isStatic(node){if(node.type===2){// expression
  return false;}if(node.type===3){// text
  return true;}return!!(node.pre||!node.if&&!node.for&&// not v-if or v-for or v-else
  !(0,_util.isBuiltInTag)(node.tag)&&// not a built-in
  isPlatformReservedTag(node.tag)&&(// not a component
  node.plain||Object.keys(node).every(isStaticKey))// no dynamic bindings
  );}/***/},/* 73 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.generate=generate;var _events=__webpack_require__(74);var _helpers=__webpack_require__(71);var _index=__webpack_require__(75);var _index2=_interopRequireDefault(_index);var _util=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// configurable state
  var warn=void 0;var transforms=void 0;var dataGenFns=void 0;var platformDirectives=void 0;var isPlatformReservedTag=void 0;var staticRenderFns=void 0;var currentOptions=void 0;function generate(ast,options){// save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns=staticRenderFns;var currentStaticRenderFns=staticRenderFns=[];currentOptions=options;warn=options.warn||_helpers.baseWarn;transforms=(0,_helpers.pluckModuleFunction)(options.modules,'transformCode');dataGenFns=(0,_helpers.pluckModuleFunction)(options.modules,'genData');platformDirectives=options.directives||{};isPlatformReservedTag=options.isReservedTag||_util.no;var code=ast?genElement(ast):'_h(_e("div"))';staticRenderFns=prevStaticRenderFns;return{render:'with(this){return '+code+'}',staticRenderFns:currentStaticRenderFns};}function genElement(el){if(el.for){return genFor(el);}else if(el.if){return genIf(el);}else if(el.tag==='template'&&!el.slotTarget){return genChildren(el)||'void 0';}else if(el.tag==='render'){return genRender(el);}else if(el.tag==='slot'){return genSlot(el);}else{// component or element
  var code=void 0;if(el.component){code=genComponent(el);}else{var data=genData(el);// if the element is potentially a component,
  // wrap its children as a thunk.
  var children=!el.inlineTemplate?genChildren(el,!el.ns&&!isPlatformReservedTag(el.tag)/* asThunk */):null;code='_h(_e(\''+el.tag+'\''+(data?','+data:el.ns?',void 0':''// data
  )+(el.ns?',\''+el.ns+'\'':''// namespace
  )+')'+(children?','+children:''// children
  )+')';if(el.staticRoot){// hoist static sub-trees out
  staticRenderFns.push('with(this){return '+code+'}');code='_m('+(staticRenderFns.length-1)+')';}}// module transforms
  for(var i=0;i<transforms.length;i++){code=transforms[i](el,code);}// check keep-alive
  if(el.component&&el.keepAlive){code='_h(_e("KeepAlive",{props:{child:'+code+'}}))';}return code;}}function genIf(el){var exp=el.if;el.if=null;// avoid recursion
  return'('+exp+')?'+genElement(el)+':'+genElse(el);}function genElse(el){return el.elseBlock?genElement(el.elseBlock):'void 0';}function genFor(el){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?','+el.iterator1:'';var iterator2=el.iterator2?','+el.iterator2:'';el.for=null;// avoid recursion
  return'('+exp+')&&_l(('+exp+'),'+('function('+alias+iterator1+iterator2+'){')+('return '+genElement(el))+'})';}function genData(el){if(el.plain){return;}var data='{';// directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs=genDirectives(el);if(dirs)data+=dirs+',';// key
  if(el.key){data+='key:'+el.key+',';}// ref
  if(el.ref){data+='ref:"'+el.ref+'",';}if(el.refInFor){data+='refInFor:true,';}// record original tag name for components using "is" attribute
  if(el.component){data+='tag:"'+el.tag+'",';}// slot target
  if(el.slotTarget){data+='slot:'+el.slotTarget+',';}// module data generation functions
  for(var i=0;i<dataGenFns.length;i++){data+=dataGenFns[i](el);}// v-show, used to avoid transition being applied
  // since v-show takes it over
  if(el.attrsMap['v-show']){data+='show:true,';}// props
  if(el.props){data+='props:{'+genProps(el.props)+'},';}// attributes
  if(el.attrs){data+='attrs:{'+genProps(el.attrs)+'},';}// jstyle
  if(el.jstyles){data+='jstyles:{'+genJStyles(el.jstyles)+'},';}// static attributes
  if(el.staticAttrs){data+='staticAttrs:{'+genProps(el.staticAttrs)+'},';}// hooks
  if(el.hooks){data+='hook:{'+genHooks(el.hooks)+'},';}// event handlers
  if(el.events){data+=(0,_events.genHandlers)(el.events)+',';}// inline-template
  if(el.inlineTemplate){var ast=el.children[0];if("development"!=='production'&&(el.children.length>1||ast.type!==1)){warn('Inline-template components must have exactly one child element.');}if(ast.type===1){var inlineRenderFns=generate(ast,currentOptions);data+='inlineTemplate:{render:function(){'+inlineRenderFns.render+'},staticRenderFns:['+inlineRenderFns.staticRenderFns.map(function(code){return'function(){'+code+'}';}).join(',')+']}';}}return data.replace(/,$/,'')+'}';}function genDirectives(el){var dirs=el.directives;if(!dirs)return;var res='directives:[';var hasRuntime=false;var i=void 0,l=void 0,dir=void 0,needRuntime=void 0;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=platformDirectives[dir.name]||_index2.default[dir.name];if(gen){// compile-time directive that manipulates AST.
  // returns true if it also needs a runtime counterpart.
  needRuntime=!!gen(el,dir,warn);}if(needRuntime){hasRuntime=true;res+='{name:"'+dir.name+'"'+(dir.value?',value:('+dir.value+')':'')+(dir.arg?',arg:"'+dir.arg+'"':'')+(dir.modifiers?',modifiers:'+JSON.stringify(dir.modifiers):'')+'},';}}if(hasRuntime){return res.slice(0,-1)+']';}}function genChildren(el,asThunk){if(!el.children.length){return;}var code='['+el.children.map(genNode).join(',')+']';return asThunk?'function(){return '+code+'}':code;}function genNode(node){if(node.type===1){return genElement(node);}else{return genText(node);}}function genText(text){return text.type===2?'('+text.expression+')':'_t('+JSON.stringify(text.text)+')';}function genRender(el){if(!el.renderMethod){return'void 0';}var children=genChildren(el);return el.renderMethod+'('+(el.renderArgs||'')+(children?(el.renderArgs?',':'')+children:'')+')';}function genSlot(el){var slot='$slots['+(el.slotName||'"default"')+']';var children=genChildren(el);return children?'('+slot+'||'+children+')':slot;}function genComponent(el){var children=genChildren(el,true);return'_h(_e('+el.component+','+genData(el)+')'+(children?','+children:'')+')';}function genProps(props){var res='';for(var i=0;i<props.length;i++){var prop=props[i];res+='"'+prop.name+'":'+prop.value+',';}return res.slice(0,-1);}function genJStyles(jstyles){var res='';var varReg=/\{\{.*\}\}/;for(var i=0;i<jstyles.length;i++){var jstyle=jstyles[i];if(varReg.test(jstyle.value)){jstyle.value=jstyle.value.replace(/\{\{/g,'" + (').replace(/\}\}/g,') + "');}res+='"'+jstyle.type+'":"'+jstyle.value+'",';}return res.slice(0,-1);}function genHooks(hooks){var res='';for(var _key in hooks){res+='"'+_key+'":function(n1,n2){'+hooks[_key].join(';')+'},';}return res.slice(0,-1);}/***/},/* 74 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.genHandlers=genHandlers;var simplePathRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;// keyCode aliases
  var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:'if($event.target !== $event.currentTarget)return;'};function genHandlers(events){var res='on:{';for(var name in events){res+='"'+name+'":'+genHandler(events[name])+',';}return res.slice(0,-1)+'}';}function genHandler(handler){if(!handler){return'function(){}';}else if(Array.isArray(handler)){return'['+handler.map(genHandler).join(',')+']';}else if(!handler.modifiers){return simplePathRE.test(handler.value)?handler.value:'function($event){'+handler.value+'}';}else{var code='function($event){';for(var key in handler.modifiers){code+=modifierCode[key]||genKeyFilter(key);}var handlerCode=simplePathRE.test(handler.value)?handler.value+'($event)':handler.value;return code+handlerCode+'}';}}function genKeyFilter(key){var code=keyCodes[key];if(Array.isArray(code)){return'if('+code.map(function(c){return'$event.keyCode!=='+c;}).join('&&')+')return;';}else{return'if($event.keyCode!=='+code+')return;';}}/***/},/* 75 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ref=__webpack_require__(76);var _ref2=_interopRequireDefault(_ref);var _bind=__webpack_require__(77);var _bind2=_interopRequireDefault(_bind);var _util=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={ref:_ref2.default,bind:_bind2.default,cloak:_util.noop};/***/},/* 76 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=ref;function ref(el,dir){if(dir.arg){el.ref=dir.arg;// go up and check if this node is inside a v-for
  var parent=el;while(parent){if(parent.for!==undefined){el.refInFor=true;break;}parent=parent.parent;}}}/***/},/* 77 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=bind;var _helpers=__webpack_require__(71);function bind(el,dir){(0,_helpers.addHook)(el,'construct','_b(n1,'+dir.value+')');}/***/},/* 78 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.detectErrors=detectErrors;var _index=__webpack_require__(66);var keywordRE=new RegExp('\\b'+('do,if,in,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,typeof,default,'+'extends,finally,continue,debugger,function,arguments,instanceof').split(',').join('\\b|\\b')+'\\b');// detect problematic expressions in a template
  function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type===1){for(var name in node.attrsMap){if(_index.dirRE.test(name)){var value=node.attrsMap[name];if(value){checkExpression(value,name+'="'+value+'"',errors);}}}if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],errors);}}}else if(node.type===2){checkExpression(node.expression,node.text,errors);}}function checkExpression(exp,text,errors){exp=stripToString(exp);var keywordMatch=exp.match(keywordRE);if(keywordMatch){errors.push('- avoid using JavaScript keyword as property name: '+('"'+keywordMatch[0]+'" in expression '+text));}else{try{new Function(exp);}catch(e){errors.push('- invalid expression: '+text);}}}function stripToString(exp){return exp.replace(/^_s\((.*)\)$/,'$1');}/***/},/* 79 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _class=__webpack_require__(80);var _class2=_interopRequireDefault(_class);var _style=__webpack_require__(81);var _style2=_interopRequireDefault(_style);var _transition=__webpack_require__(82);var _transition2=_interopRequireDefault(_transition);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=[_class2.default,_style2.default,_transition2.default];/***/},/* 80 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _textParser=__webpack_require__(69);var _helpers=__webpack_require__(71);function transformNode(el,options){var warn=options.warn||_helpers.baseWarn;var staticClass=(0,_helpers.getAndRemoveAttr)(el,'class');if("development"!=='production'&&staticClass){var expression=(0,_textParser.parseText)(staticClass,options.delimiters);if(expression){warn('class="'+staticClass+'": '+'Interpolation inside attributes has been deprecated. '+'Use _class instead.');}}el.staticClass=JSON.stringify(staticClass);}function genData(el){var data='';if(el.staticClass){data+='staticClass:'+el.staticClass+',';}return data;}exports.default={staticKeys:['staticClass'],transformNode:transformNode,genData:genData};/***/},/* 81 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _textParser=__webpack_require__(69);var _helpers=__webpack_require__(71);function transformNode(el,options){var warn=options.warn||_helpers.baseWarn;var staticStyle=(0,_helpers.getAndRemoveAttr)(el,'style');if("development"!=='production'&&staticStyle){var expression=(0,_textParser.parseText)(staticStyle,options.delimiters);if(expression){warn('style="'+staticStyle+'": '+'Interpolation inside attributes has been deprecated. '+'Use _style instead.');}}el.staticStyle=JSON.stringify(staticStyle);}function genData(el){var data='';if(el.staticStyle){data+='staticStyle:'+el.staticStyle+',';}return data;}exports.default={staticKeys:['staticStyle'],transformNode:transformNode,genData:genData};/***/},/* 82 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _helpers=__webpack_require__(71);function transformNode(el){var transition=(0,_helpers.getBindingAttr)(el,'transition');if(transition==='""'){transition=true;}if(transition){el.transition=transition;}var mode=(0,_helpers.getBindingAttr)(el,'transition-mode');if(mode){el.transitionMode=mode;}}function genData(el){return el.transition?'transition:'+el.transition+',':'';}function transformCode(el,code){return el.transitionMode?'_h(_e(\'TransitionControl\',{props:{mode:'+el.transitionMode+',child:'+code+'}}))':code;}exports.default={transformNode:transformNode,genData:genData,transformCode:transformCode};/***/},/* 83 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _model=__webpack_require__(84);var _model2=_interopRequireDefault(_model);var _text=__webpack_require__(85);var _text2=_interopRequireDefault(_text);var _html=__webpack_require__(86);var _html2=_interopRequireDefault(_html);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={model:_model2.default,text:_text2.default,html:_html2.default};/***/},/* 84 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=model;var _helpers=__webpack_require__(71);var warn=void 0;function model(el,dir,_warn){warn=_warn;var value=dir.value;var modifiers=dir.modifiers;if(el.tag==='select'){return genSelect(el,value);}else{switch(el.attrsMap.type){case'checkbox':genCheckboxModel(el,value);break;case'radio':genRadioModel(el,value);break;default:return genDefaultModel(el,value,modifiers);}}}function genCheckboxModel(el,value){if("development"!=='production'&&el.attrsMap.checked!=null){warn('<'+el.tag+' v-model="'+value+'" checked>:\n'+'inline checked attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}var valueBinding=(0,_helpers.getBindingAttr)(el,'value');var trueValueBinding=(0,_helpers.getBindingAttr)(el,'true-value')||'true';var falseValueBinding=(0,_helpers.getBindingAttr)(el,'false-value')||'false';(0,_helpers.addProp)(el,'checked','Array.isArray('+value+')'+('?('+value+').indexOf('+valueBinding+')>-1')+(':('+value+')===('+trueValueBinding+')'));(0,_helpers.addHandler)(el,'change','var $$a='+value+','+'$$el=$event.target,'+('$$c=$$el.checked?('+trueValueBinding+'):('+falseValueBinding+');')+'if(Array.isArray($$a)){'+('var $$v='+valueBinding+',')+'$$i=$$a.indexOf($$v);'+'if($$c){$$i<0&&$$a.push($$v)}'+'else{$$i>-1&&$$a.splice($$i,1)}'+('}else{'+value+'=$$c}'));}function genRadioModel(el,value){if("development"!=='production'&&el.attrsMap.checked!=null){warn('<'+el.tag+' v-model="'+value+'" checked>:\n'+'inline checked attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}var valueBinding=(0,_helpers.getBindingAttr)(el,'value');(0,_helpers.addProp)(el,'checked','('+value+')===('+valueBinding+')');(0,_helpers.addHandler)(el,'change',value+'='+valueBinding);}function genDefaultModel(el,value,modifiers){if(true){if(el.tag==='input'&&el.attrsMap.value){warn('<'+el.tag+' v-model="'+value+'" value="'+el.attrsMap.value+'">:\n'+'inline value attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}if(el.tag==='textarea'&&el.children.length){warn('<textarea v-model="'+value+'">:\n'+'inline content inside <textarea> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}}var type=el.attrsMap.type;var _ref=modifiers||{};var lazy=_ref.lazy;var number=_ref.number;var trim=_ref.trim;var event=lazy?'change':'input';var needCompositionGuard=!lazy&&type!=='range';var valueExpression='$event.target.value'+(trim?'.trim()':'');var code=number||type==='number'?value+'=Number('+valueExpression+')':value+'='+valueExpression;if(needCompositionGuard){code='if($event.target.composing)return;'+code;}(0,_helpers.addProp)(el,'value','('+value+')');(0,_helpers.addHandler)(el,event,code);if(needCompositionGuard){// need runtime directive code to help with composition events
  return true;}}function genSelect(el,value){if(true){el.children.some(checkOptionWarning);}var code=value+'=Array.prototype.filter'+'.call($event.target.options,function(o){return o.selected})'+'.map(function(o){return "_value" in o ? o._value : o.value})'+(el.attrsMap.multiple==null?'[0]':'');(0,_helpers.addHandler)(el,'change',code);// need runtime to help with possible dynamically generated options
  return true;}function checkOptionWarning(option){if(option.type===1&&option.tag==='option'&&option.attrsMap.selected!=null){var parentModel=option.parent&&option.parent.type===1&&option.parent.attrsMap['v-model'];warn('<select v-model="'+parentModel+'">:\n'+'inline selected attributes on <option> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');return true;}}/***/},/* 85 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=text;var _helpers=__webpack_require__(71);function text(el,dir){if(dir.value){(0,_helpers.addProp)(el,'textContent','_s('+dir.value+')');}}/***/},/* 86 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=html;var _helpers=__webpack_require__(71);function html(el,dir){if(dir.value){(0,_helpers.addProp)(el,'innerHTML','_s('+dir.value+')');}}/***/}/******/]));});;//# sourceMappingURL=xcore-vue.js.map
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = function(module) {
    if(!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      // module.parent = undefined by default
      module.children = [];
      module.webpackPolyfill = 1;
    }
    return module;
  }


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  (function (global) {
    'use strict';

    var logger = global.logger = {};

    logger.version = '0.1.9';

    //兼容ie不报错
    if (typeof console === 'undefined') {
      window.console = {
        log: function log() {}
      };
    }
    var ERRMSG = '**logger.js---打点出错:';
    //工具类
    //暴露对象：logger.util
    var util = {
      /**
     * 对于非IE浏览器返回-1，对于IE浏览器返回版本号
     */
      getIEVersion: function getIEVersion() {
        var rv = -1,
            re;
        var ua = navigator.userAgent;
        if (navigator.appName == 'Microsoft Internet Explorer') {
          re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape') {
          re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1);
        }
        return rv;
      },
      stringify: function stringify(obj) {
        if (typeof JSON != 'undefined') {
          return JSON.stringify(obj);
        }
        var t = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
        if (t != "object" || obj === null) {
          // simple data type
          if (t == "string") obj = '"' + obj + '"';
          return String(obj);
        } else {
          // recurse array or object
          var n,
              v,
              json = [],
              arr = obj && obj.constructor == Array;

          for (n in obj) {
            v = obj[n];
            t = typeof v === 'undefined' ? 'undefined' : _typeof(v);
            if (obj.hasOwnProperty(n)) {
              if (t == "string") v = '"' + v + '"';else if (t == "object" && v !== null) v = util.stringify(v);
              json.push((arr ? "" : '"' + n + '":') + String(v));
            }
          }
          return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
      },
      isArray: function isArray(value) {
        return Object.prototype.toString.call(value) == '[object Array]';
      },
      getCookieInArray: function getCookieInArray(array) {
        for (var i = 0, l = array.length; i < l; i++) {
          var value = util.getCookie(array[i]);
          if (value) {
            return value;
          }
        }
        return '';
      },
      getCookieOrFunc: function getCookieOrFunc(keyOrFunc) {
        if (typeof keyOrFunc == 'function') {
          return util.getValue(keyOrFunc);
        } else {
          return util.getCookie(keyOrFunc);
        }
      },
      getCookie: function getCookie(c_name) {
        if (util.isArray(c_name)) {
          return util.getCookieInArray(c_name);
        }
        var arr = document.cookie.match(new RegExp("(^| )" + c_name + "=([^;]*)(;|$)"));
        if (arr !== null) return decodeURIComponent(arr[2]);
        return '';
      },
      getQuery: function getQuery(name, url) {
        if (url === undefined) {
          url = location.href;
        }
        var str = "(^|&|" + "\\?" + ")" + name + "=([^&]*)(&|$)";
        var reg = new RegExp(str, 'i');
        var r = url.substr(1).match(reg);
        if (r !== null) {
          return decodeURIComponent(r[2]);
        }
        return '';
      },
      getTime: function getTime() {
        return parseInt(new Date().getTime() / 1000);
      },
      registerEvent: function registerEvent(elem, event, func) {
        if (window.attachEvent) {
          elem.attachEvent('on' + event, func);
        } else {
          elem.addEventListener(event, func, false);
        }
      },
      extend: function extend() {
        var args = arguments;
        var target = arguments[0];

        for (var i = 1; i < args.length; i++) {
          var source = args[i];
          for (var p in source) {
            if (source.hasOwnProperty(p)) {
              target[p] = source[p];
            }
          }
        }
        return target;
      },
      getValue: function getValue(valueOrFunc) {
        if (!valueOrFunc) return;
        if (typeof valueOrFunc == 'function') {
          try {
            //后面跟着的arguments
            var args = Array.prototype.slice.call(arguments, 1);
            return valueOrFunc.apply(null, args);
          } catch (err) {
            //调用配置文件的函数时作一个保护
            console.log(ERRMSG + err);
            return '';
          }
        }
        return valueOrFunc;
      }
    };
    logger.util = util;
    // 配置文件
    // 暴露对象：logger.config
    var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
    logger.config = {
      //开启mogu.js打点, 正常情况下只向log.php打点，但要兼容之前的数据，所以暂时要打点到mogu.js
      EnableLogMoGuJs: true,

      //打点地址
      LogUrl: protocol + '//log.juangua.com/log.php',
      LogMoGuJsUrl: protocol + '//log.juangua.com/mogu.js',

      /*
     * cookie中获取uuid、uid、sfrom的key，由业务方配置
     * 当值为数组时，按顺序尝试获取，返回第一个成功获取的值
     */
      uuid: ['__mgjuuid', '__xduuid'],
      uid: '__ud_',
      sfrom: 'from_site',
      cpsinfo: '__cpsinfo',

      //指定ptp_cnt的a字段的生成逻辑(value/function)
      ptp_cnt_a: '',

      //指定ptp_cnt的b字段的生成逻辑(value/function)
      ptp_cnt_b: '',

      //指定ptp_cnt某个元素的c、d字段生成逻辑(value/function)
      ptp_cnt_c_d: '',

      //指定页面的平台字段，区分PC和H5，可由业务方继续细分
      platform: '',

      //指定p事件的eventId， 注意在native插件打点下，由插件决定eventId
      pEventId: '1001',

      //判断是否为移动端的正则主要做ios以及安卓判断
      isMobileRe: /iphone|android|ipad/i,

      //ptp验证
      ptpRe: /[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+/i,

      /**
     * url匹配,匹配成功的url跳转才会添加ptp信息, 由业务方配置
     * 如果hrefRe、mgjRe都匹配不了,则不添加ptp信息
     */
      hrefRe: /http[s]?:\/\/\w+\.(mogujie|xiaodian|uniny)\.com([\/]|\/.*|)$/,
      mgjRe: /mgj:\/\//,

      //判断是否存在mt参数
      mtRe: /\?.*[&]?mt=([^\.]+)\.([^\.]+)\.([^\.&#]+)/,

      //追踪url指定参数，在a标签跳转前添加参数，通过接口生成带ptp信息的url时，也会带上
      //支持数组，追踪多个参数
      chasing: ['f', 'f2'],

      //跳转链接时附带扩展参数，可由业务方配置，支持数组，扩展多个参数
      //当指定了'acm'时，A标签元素拼接PTP参数的同时，会找到当前元素的data-ext-acm属性的值，并以"&acm=value"的形式拼接到url里
      //如果当前元素没有data-ext-acm，则不会拼接相关参数
      //@note: 属性名“data-ext-”头是为了防止与其他业务命名冲突而添加的
      //@note: 请注意IE低版本号url长度的限制
      urlExtend: ['acm'],

      /**
     * 页面的P事件可以指定更多的自定义信息
     * 以key-value的形式，由业务方自定义
     * 注意：不能与正常的ptp打点信息冲突，否则会覆盖掉
     */
      extra: {
        // key1: function(){
        //     return 'value1';
        // },
        // key2: function(){
        //     return 'value2';
        // }
      },

      //判断是否为native, 如果在native下，会调用native.logE、native.logP来打E\P事件
      isNativeRe: /(mogujie|xcore)/i,
      /**
     * 调用native插件打点，由于不同的客户端的打点插件不一样，所以提供接口扩展，由业务方指定native打点代码
     * 需要与上面的‘isNativeRe’参数配合使用
     * 如果没有指定，会默认调用native.mgj.tracer.sendEvent和mgj.pevnet来进来打点（mogujie主客)
     */
      nativeLog: {
        //调用native插件发送E事件请求
        // logE: function(eventid, json){

        // },
        //调用native插件发送P事件请求
        // logP: function(ptp_cnt){

        // }
      }
    };

    //从PTP_PARAMS获取自定义逻辑
    if (window.PTP_PARAMS) {
      util.extend(logger.config, PTP_PARAMS);
    }
    //此文件提供日志项目hash工作

    function Hash() {
      this.arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      this.arrLen = this.arr.length;
    }

    Hash.prototype = {
      rand: function rand(a) {
        var c,
            b = "";
        for (c = 0; a > c; c++) {
          b += this.arr.charAt(Math.random() * this.arrLen);
        }return b;
      },
      pageHash: function pageHash(input) {
        var hash = 5381;
        var i = input.length - 1;

        if (typeof input == 'string') {
          for (; i > -1; i--) {
            hash += (hash << 5) + input.charCodeAt(i);
          }
        } else {
          for (; i > -1; i--) {
            hash += (hash << 5) + input[i];
          }
        }
        var value = hash & 0x7FFFFFFF;

        var retValue = '';
        do {
          retValue += this.arr.charAt(value & 0x3D);
        } while (value >>= 6);

        return retValue;
      }
    };
    // deviceInfo.js获取设备相关信息
    // 暴露对象：logger.info，
    ;(function () {
      var config = logger.config,
          ua = navigator.userAgent.toLocaleLowerCase();

      //暴露对象
      logger.info = {
        isApp: config.isNativeRe.test(ua),
        isNative: config.isNativeRe.test(ua),
        isMobile: config.isMobileRe.test(ua),
        isIos: ua.indexOf('iphone') > -1,
        isAndroid: ua.indexOf('android') > -1,
        isXd: location.href.indexOf('.xiaodian.') > -1
      };
    })()
    //ptp相关信息的收集
    //暴露logger.ptp

    ;
    (function () {
      var config = logger.config;
      var info = logger.info;
      var hash = new Hash();
      var ptp;
      /**
     * 获取平台字段
     * @returns {string}
     */
      function getCntA() {
        var custome = util.getValue(config.ptp_cnt_a);
        if (custome) {
          return custome;
        }
        var _ptp_cnt_a = '1';

        if (info.isXd) {
          _ptp_cnt_a = 'xd1';
        }
        if (info.isMobile) {
          _ptp_cnt_a = 'm1';
        }
        if (info.isIos && info.isNative) {
          _ptp_cnt_a = 'am0';
        } else if (info.isAndroid && info.isNative) {
          _ptp_cnt_a = 'am1';
        }
        return _ptp_cnt_a;
      }

      /**
     * url hash B  字段的方式
     * @returns {string}
     */
      function getCntB() {
        var custome = util.getValue(config.ptp_cnt_b);
        if (custome) {
          return custome;
        }
        var _ptp_cnt_b = '';
        var _url = location.href.replace(':', '');
        _url = _url.replace(/[\/\.]/, '_');
        _ptp_cnt_b = hash.pageHash(_url);
        return _ptp_cnt_b;
      }

      function getCpsInfo() {
        var _cpsinfo = util.getCookieOrFunc(config.cpsinfo);
        if (!_cpsinfo) return;
        _cpsinfo = _cpsinfo.replace('-', ',');
        return _cpsinfo;
      }

      //获取平台字段
      function getPlatform() {
        var custome = util.getValue(config.platform);
        if (custome) {
          return custome;
        }
        if (info.isMobile) {
          return 32;
        } else {
          return 31;
        }
      }
      /**
     * 用于业务方指定元素的C字段
     */
      function getCustomC(node) {
        if (!node) return;
        var custome = util.getValue(config.ptp_cnt_c_d, node);
        if (custome) {
          return custome;
        }
        var _attr = node.getAttribute('data-ptp-customc');
        if (_attr) {
          return {
            c: _attr,
            d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
          };
        }
        node = $(node).parents('[data-ptp-customc]')[0];
        if (!node) return;
        _attr = node.getAttribute('data-ptp-customc');
        if (_attr) {
          return {
            c: _attr,
            d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
          };
        }
      }
      // 获取容器离线化下的url
      function getOfflineUrl() {
        if (location.protocol.indexOf('file:') != -1) {
          //离线化下url需要通过插件获取
          document.addEventListener("deviceready", function () {
            if (window.hybrid && hybrid.bundle && hybrid.bundle.getUrl) {
              hybrid.bundle.getUrl(function (url) {
                if (ptpInfo) {
                  ptpInfo.refer = url;
                }
              });
            }
          }, false);
        }
      }
      function refreshPtpInfo() {
        getOfflineUrl();
        return {
          time: util.getTime(),
          sfrom: util.getCookieOrFunc(config.sfrom),
          uuid: util.getCookieOrFunc(config.uuid),
          uid: util.getCookieOrFunc(config.uid),
          cpsinfo: getCpsInfo() || '',
          refer: location.href,
          rerefer: document.referrer,
          ptp_url: util.getQuery('ptp', location.href),
          ptp_ref: ''
        };
      }
      function refreshAbcde() {
        return {
          a: getCntA(),
          b: getCntB(),
          c: 0,
          d: 0,
          e: hash.rand(5)
        };
      }
      var ptpInfo = refreshPtpInfo(),
          abcde = refreshAbcde();

      logger.ptp = ptp = {
        //获取每个打点日志的头部格式
        getPtpByType: function getPtpByType(type, eventId) {
          var platform = getPlatform();
          var result = [ptpInfo.time, 0, 'p/e', platform, logger.version, '1001', ptpInfo.uuid, ptpInfo.uid, ptpInfo.refer, ptpInfo.rerefer];
          if (type == 'p') {
            eventId = eventId || '1001';
            result[2] = 'p';
            result[5] = eventId;
            return result;
          } else if (type == 'e') {
            eventId = eventId || '50001';
            result[2] = 'e';
            result[5] = eventId;
            return result;
          }
        },
        //获取abcde字段
        getPtpCnt: function getPtpCnt(c, d) {
          if (!c) c = abcde.c;
          if (!d) d = abcde.d;
          return [abcde.a, abcde.b, c, d, abcde.e].join('.');
        },
        //获取打点ptpinfo
        getPtpInfo: function getPtpInfo() {
          var result = {};
          return util.extend(result, ptpInfo, {
            ptp_cnt: ptp.getPtpCnt()
          });
        },
        //获取打点ptpinfo和用户自定义的数据
        getPtpInfoAndExtra: function getPtpInfoAndExtra() {
          var result = ptp.getPtpInfo();
          var extra = {};
          if (config.extra) {
            for (var key in config.extra) {
              if (config.extra.hasOwnProperty(key)) {
                extra[key] = util.getValue(config.extra[key]);
              }
            }
          }
          return util.extend(result, extra);
        },
        //通过结点，创建一个ptpCnt信息
        //获取C字段逻辑:
        //1.如果指定了data-ptp-customc,则为data-ptp-customc
        //2.如果url有mt参数，则mt参数中提取C字段
        //3.从data-ptp中获取指定C字段，通过data-ptp-item获取当前元素的位置为D字段
        //4.C、D字段为0
        createPtpCnt: function createPtpCnt(node) {
          var customC = getCustomC(node);
          var mt = '',
              mtC = '',
              //麦田下提取的C字段
          keyC = 0,
              //C字段
          keyD = 0; //D字段
          if (customC) {
            return ptp.getPtpCnt(customC.c, customC.d);
          }
          if (node && node.href) {
            mt = node.href.match(config.mtRe);
          }
          //麦田参数里拿C字段
          if (mt) {
            mtC = '_mt-' + mt[2] + '-' + mt[3];
          }
          if (!mtC) {
            var $parent = $(node).parents('[data-ptp]');
            if ($parent.length) {
              keyC = $parent.attr('data-ptp');
              //获取当前元素在父级元素中的index
              var $borders = $parent.find('.data-ptp-item');
              if ($borders.length) {
                //通过data-ptp-item来划分index
                keyD = $borders.index($(node).parents('.data-ptp-item')) + 1;
              } else {
                //通过a标签的顺序获取
                keyD = $parent.find('a').index($(node)) + 1;
              }
            }
          } else {
            keyC = mtC;
          }
          if (!keyD) keyD = 0;
          return ptp.getPtpCnt(keyC, keyD);
        },
        /**
      * 将传入href拼接生成新的href
      */
        makeUrl: function makeUrl(href, ptpCnt, node) {
          var anchor = href.match(/(#.+)$/);
          href = href.replace(/(#.+)$/, '');
          href = href.replace(/ptp=[^&#]*/, '');
          if (href.indexOf('?') > -1) {
            href += '&' + ptpCnt;
          } else {
            href += '?' + ptpCnt;
          }
          href = href.replace(/[&]{2,}/g, '&').replace(/&$/, '');
          href = href.replace(/\?&/g, '?');
          var chasing = ptp.getChasingParams(href);
          var extend = ptp.getExtendParams(node);
          if (chasing) {
            href += '&' + chasing;
          }
          if (extend) {
            href += '&' + extend;
          }
          if (anchor) href += anchor[1];
          return href;
        },
        /*
      * 从url中获取需要跟踪的参数
      */
        getChasingParams: function getChasingParams(url) {
          if (url === undefined) url = '';
          if (!config.chasing) return '';
          //变成数组
          if (!config.chasing.length) {
            config.chasing = [config.chasing];
          }
          var result = [],
              key,
              value,
              hasVal;
          for (var i = 0, l = config.chasing.length; i < l; i++) {
            key = config.chasing[i];
            hasVal = util.getQuery(key, url); //url里面有没有这个值
            value = util.getQuery(key);
            if (value && !hasVal) {
              result.push(key + '=' + value);
            }
          }
          return result.join('&');
        },
        getExtendParams: function getExtendParams(node) {
          if (!node || !$(node).is('a')) {
            return '';
          }
          var result = [];
          var extend = config.urlExtend || [];
          for (var i = 0, l = extend.length; i < l; i++) {
            var key = extend[i];
            var value = $(node).attr('data-ext-' + key);
            if (value) {
              result.push(key + '=' + encodeURIComponent(value));
            }
          }
          return result.join('&');
        },
        /*
      * 刷新Ptp信息，当单页面url变化但页面无刷新时(pushState)，可以刷新ptp信息，以便重新打一个P事件
      */
        refreshPtp: function refreshPtp() {
          ptpInfo = refreshPtpInfo();
          abcde = refreshAbcde();
        }
      };
    })()
    //所有日志发送逻辑
    //暴露对象：logger.send
    ;(function () {
      var info = logger.info;
      var ptp = logger.ptp;
      var config = logger.config;
      var count = 0;
      //image提交打点数据 for:!ie
      var sendLogByImage = function sendLogByImage(url, data) {
        data = data || {};
        var params = [];
        for (var key in data) {
          var value = data[key];
          if (!value) {
            value = '';
          }
          value = encodeURIComponent(value);
          params.push(key + '=' + value);
        }
        params = params.join('&');
        if (url.indexOf('?') > -1) {
          url = url + '&' + params;
        } else {
          url = url + '?' + params;
        }
        var _imgObject = new Image();
        _imgObject.src = url;
      },

      //表彰post提交打点数据 for:ie
      sendLogByIframe = function sendLogByIframe(url, data) {
        data = data || {};
        var id = count++;
        var iframe;
        try {
          iframe = document.createElement('<iframe name="' + id + '">');
        } catch (ex) {
          iframe = document.createElement('iframe');
          iframe.setAttribute('name', id);
        }
        try {
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          iframe.contentWindow.name = id;

          var form = document.createElement('form');
          form.setAttribute('method', 'POST');
          form.setAttribute('action', url);
          form.setAttribute('target', id);

          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              var input = document.createElement('input');
              input.setAttribute('type', 'hidden');
              input.setAttribute('name', key);
              input.setAttribute('value', data[key]);

              form.appendChild(input);
            }
          }

          document.body.appendChild(form);
          form.submit();
          util.registerEvent(iframe, 'load', function () {
            try {
              document.body.removeChild(form);
              document.body.removeChild(iframe);
            } catch (ex) {}
          });
        } catch (ex) {
          console.log(ERRMSG + ex);
        }
      };

      var send = {
        //前端发送打点数据接口, ie下表单post，其他img请求
        sendLog: function sendLog(url, data) {
          var isIE = util.getIEVersion() != -1;
          if (isIE) {
            sendLogByIframe(url, data);
          } else {
            sendLogByImage(url, data);
          }
        },
        //在app里用tracer事件打点
        sendAppLog: function sendAppLog(eventId, params) {
          eventId = eventId + '';
          if (config.nativeLog && config.nativeLog.logE) {
            return config.nativeLog.logE(eventId, params);
          }
          if (window.hdp && window.hdp['do']) {
            hdp['do']('mgj.tracker.sendEvent', eventId, params);
          } else {
            document.addEventListener("deviceready", function () {
              if (window.mgj && mgj.tracker && mgj.tracker.sendEvent) {
                mgj.tracker.sendEvent(eventId, params);
              }
            }, false);
          }
        },
        //app的pevent插件打页面的p事件
        logAppPevent: function logAppPevent(ptp_cnt) {
          if (config.nativeLog && config.nativeLog.logP) {
            return config.nativeLog.logP(ptp_cnt);
          }
          if (window.hdp && window.hdp['do']) {
            hdp['do']('mgj.pevent', ptp_cnt).then(function () {}, function (err) {
              //pevent插件800前都有一个bug，成功调用也会报错!
              console.log('pevent:' + err);
            });
          } else {
            document.addEventListener("deviceready", function () {
              if (window.mgj && mgj.pevent) {
                mgj.pevent(function () {}, null, ptp_cnt);
              }
            }, false);
          }
        },
        logData: function logData(type, eventId, json) {
          var _params = ptp.getPtpByType(type, eventId);
          _params.push(util.stringify(json));
          if (!info.isNative) {
            //mogujie主客里
            send.sendLog(config.LogUrl, {
              v: 1,
              data: _params.join('\t')
            });
          } else {
            send.sendAppLog(eventId, json);
          }
        }

      };
      logger.send = send;
    })()
    //打点核心逻辑：
    //1.绑定a标签点击事件
    //2.点击事件处理，添加ptp参数到url
    //3.跳转url
    ;(function () {
      var config = logger.config;
      var ptp = logger.ptp;

      //给标签url跳转前插入ptp信息
      function insertPtpInfo(node) {
        var href = node.href;
        //mtalk/下不打点
        if (href.indexOf('mogujie.com/mtalk/') > -1) return;
        //不在打点域名下
        if (!config.hrefRe.test(href) && !config.mgjRe.test(href)) return;

        var id = node.getAttribute('data-ptp-cache-id');
        href = node.getAttribute('href');

        if (!id || !config.ptpRe.test(id)) {
          id = ptp.createPtpCnt(node);
          node.setAttribute('data-ptp-cache-id', id);
        }
        node.href = ptp.makeUrl(href, 'ptp=' + id, node);
      }

      //点击事件处理
      function handleClickEvent(event) {
        /*jshint scripturl:true*/
        var _event = event || window.event,
            target = _event.target || _event.srcElement,
            aLink = target.nodeName === 'A' ? target : $(target).parents('a')[0],
            areaLink = target.nodeName === 'AREA' ? target : null;
        if (areaLink) {
          aLink = areaLink;
        }
        //没有连接
        if (!aLink) return;
        if (aLink.href && aLink.href.indexOf('javascript:') > -1) return;
        insertPtpInfo(aLink);
      }

      //bind事件
      // var mouseDown = 'tap' in document.createElement('div') ? 'tap' : 'mousedown';
      // util.registerEvent(document, mouseDown, handleClickEvent);
      //@note:绑定touchstart，部分页面添加了fastclick，所以要绑定touchstart
      // util.registerEvent(document, 'touchstart', handleClickEvent);
    })();
    //打点初始化函数:
    //1.页面自动打点P事件
    //2.暴露接口函数
    var ptp = logger.ptp;
    var loggerInfo = ptp.getPtpInfoAndExtra();
    var config = logger.config;
    var send = logger.send;

    function logPEvent() {
      if (!logger.info.isNative) {
        //打到log.php
        var pEventId = util.getValue(config.pEventId);
        send.logData('p', pEventId, loggerInfo);
        if (config.EnableLogMoGuJs) {
          //打到mogu.js
          send.sendLog(config.LogMoGuJsUrl, loggerInfo);
        }
      } else {
        //在主客下通过插件来打p事件
        var cnt = ptp.getPtpCnt();
        send.logAppPevent(cnt);
      }
    }

    //框架自动打一个P事件
    logPEvent();

    /*
    * 刷新页面Ptp信息并打一个P事件
    * 主要用于单页面应用通过pushState切换页面（浏览器无刷新）时进行P事件打点
    * 其他情况下请不要主动调用这个方法
    */
    logger.refreshPevent = function () {
      logger.ptp.refreshPtp();
      loggerInfo = logger.ptp.getPtpInfoAndExtra();
      logPEvent();
    };
    /*
    * 自定义打点 指定事件id和打点数据
    * eventId: number 事件ID,每个事件id都需要先注册后使用，请与业务方、BI确认
    * json: object 自定义打点数据
    */
    logger.log = function (eventId, json) {
      if (eventId === undefined) {
        return;
      }
      json = json || {};
      logger.send.logData('e', eventId, util.extend({}, loggerInfo, json));
    };

    /*
    * 为指定url构造一个带ptp参数的url, 用于js代码跳转页面时，添加ptp信息
    * url: string 需要构造的url地址，如果地址中包含ptp参数，则直接返回
    * node: DOM元素，如果是页面上的A标签元素，会通过传入的node来获取自定义的C、D字段，否则C、D字段为0
    */
    logger.generatePtpParams = function (url, node) {
      if (url === undefined) {
        return;
      }
      var ptpCnt = '';
      if (node) {
        //通过结点获取ptp信息
        ptpCnt = ptp.createPtpCnt(node);
      } else {
        //获取ptp信息C、D字段为0
        ptpCnt = ptp.getPtpCnt();
      }
      return ptp.makeUrl(url, 'ptp=' + ptpCnt, node);
    };
    //兼容amd|cmd代码
    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
      module.exports = logger;
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return logger;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  })(window);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(5)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-link/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(6)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-7824dc8e/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 5 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      href: String,
      acm: {
        type: String,
        default: ''
      },
      c: {
        type: String,
        default: '0'
      },
      d: {
        type: String,
        default: '0'
      }
    },
    methods: {
      jump: function jump() {
        var href = this.href;

        var logger = window.__logger;
        if (logger) {
          var ptpCnt = logger.ptp.getPtpCnt().replace('.0.0.', '.' + this.c + '.' + this.d + '.');
          href = this.$Vue.util.updateQueryStringParameter(href, 'ptp', ptpCnt);
          if (this.acm && href.indexOf('&acm=') < 0) {
            href += '&acm=' + encodeURIComponent(acm);
          }
        }
        window.open(href);
      }
    }
  };

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = "\n<view :href=\"href\" @click=\"jump\">\n  <slot></slot>\n</view>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(8)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/app.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(54)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-6c7cff27/app.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(9);

  var _style2 = _interopRequireDefault(_style);

  var _swipper = __webpack_require__(10);

  var _swipper2 = _interopRequireDefault(_swipper);

  var _brandHotList = __webpack_require__(22);

  var _brandHotList2 = _interopRequireDefault(_brandHotList);

  var _horizontalScroll = __webpack_require__(30);

  var _horizontalScroll2 = _interopRequireDefault(_horizontalScroll);

  var _keyWord = __webpack_require__(34);

  var _keyWord2 = _interopRequireDefault(_keyWord);

  var _scrollWallTab = __webpack_require__(38);

  var _scrollWallTab2 = _interopRequireDefault(_scrollWallTab);

  var _newTypeGoodsWall = __webpack_require__(45);

  var _newTypeGoodsWall2 = _interopRequireDefault(_newTypeGoodsWall);

  var _pubsub = __webpack_require__(42);

  var _pubsub2 = _interopRequireDefault(_pubsub);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    components: {
      Swipper: _swipper2.default,
      BrandHotList: _brandHotList2.default,
      HorizontalScroll: _horizontalScroll2.default,
      KeyWord: _keyWord2.default,
      ScrollWallTab: _scrollWallTab2.default,
      GoodsWall: _newTypeGoodsWall2.default
    },

    data: function data() {
      return {
        style: _style2.default,
        swipperData: [],
        brandHotListData: [],
        horizontalScrollData: [],
        keyWordData: [],
        goodsWallCid: ''
      };
    },
    created: function created() {
      var _this = this;

      this.$Vue.util.ajax({
        url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=6165%2C5465%2C6064%2C11283',
        dataType: 'jsonp',
        success: function success(data) {
          if (data.success) {
            var d = data.data;
            console.log(d);
            _this.swipperData = d['6165'].list;
            _this.brandHotListData = d['5465'].list;
            _this.horizontalScrollData = d['6064'].list;
            _this.keyWordData = d['11283'].list;
          }
        }
      });
    },


    methods: {
      changeCid: function changeCid(cid) {
        console.log('====> ', cid);
        this.goodsWallCid = cid;
      },
      scrollHandler: function scrollHandler(e) {
        _pubsub2.default.emit('h-scroll', e);
      }
    }
  };

/***/ },
/* 9 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6'
    }
  };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(11)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/swipper/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(21)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-5785e233/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(12);

  var _style2 = _interopRequireDefault(_style);

  var _xcoreSliderImage = __webpack_require__(13);

  var _xcoreSliderImage2 = _interopRequireDefault(_xcoreSliderImage);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    components: {
      Slider: _xcoreSliderImage2.default
    },
    props: {
      items: Array,
      sourcekey: Number
    },
    data: function data() {
      return {
        style: _style2.default,
        activeIndex: 0,
        sliderData: []
      };
    },

    computed: {
      sliderData: function sliderData() {
        var _this = this;

        return this.items.map(function (item, index) {
          item.img = item.image;
          item.c = '_rmc_' + _this.sourcekey;
          item.d = index;
          return item;
        });
      }
    },
    methods: {
      onSliderChange: function onSliderChange(event) {
        this.activeIndex = event.index;
      }
    }
  };

/***/ },
/* 12 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    indicatorWrap: {
      width: 750,
      position: 'absolute',
      bottom: 10,
      justifyContent: 'center'
    },
    triggerInner: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 18,
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.7)'
    },
    indicator: {
      backgroundColor: '#8c8c8c',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 10,
      marginRight: 10
    },
    active: {
      backgroundColor: '#fe6c9c'
    }
  };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(14)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-slider-image/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(20)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-43c18e24/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _web = __webpack_require__(15);

  var _web2 = _interopRequireDefault(_web);

  var _style = __webpack_require__(19);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    components: {
      SliderWeb: _web2.default
    },

    props: {
      width: {
        type: Number,
        default: 750
      },
      height: {
        type: Number,
        default: 360
      },
      data: Array,
      change: Function
    },

    data: function data() {
      return {
        style: _style2.default,
        activeIndex: 0,
        isNative: ("native") === 'native'
      };
    },


    computed: {
      images: function images() {
        return this.data ? this.data.map(function (item) {
          return item.img;
        }) : [];
      }
    },

    methods: {
      onChange: function onChange(event) {
        this.activeIndex = event.index;
        if (this.change) {
          this.change(event);
        }
      },
      onClick: function onClick(event) {
        var data = this.data[this.activeIndex];
        if (data.link) {
          var href = data.link;
          var logger = window.__logger;
          if (logger) {
            var link = data.link;
            var _data$acm = data.acm;
            var acm = _data$acm === undefined ? '' : _data$acm;
            var _data$c = data.c;
            var c = _data$c === undefined ? '0' : _data$c;
            var _data$d = data.d;
            var d = _data$d === undefined ? '0' : _data$d;

            var ptpCnt = logger.ptp.getPtpCnt().replace('.0.0.', '.' + c + '.' + d + '.');
            href = this.$Vue.util.updateQueryStringParameter(link, 'ptp', ptpCnt);
            if (acm && href.indexOf('&acm=') < 0) {
              href += '&acm=' + encodeURIComponent(acm);
            }
          }
          window.open(href);
        }
      }
    }
  };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(16)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-slider-image/web/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(18)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-636ecdf3/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(17);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var startX = 0;

  var moveX = 0;

  exports.default = {
    props: {
      width: Number,
      height: Number,
      images: Array,
      onChange: Function
    },

    data: function data() {
      return {
        style: _style2.default,
        currentIndex: 0,
        loopTimer: 0
      };
    },


    computed: {
      leftIndex: function leftIndex() {
        var index = this.currentIndex - 1;
        if (index < 0) {
          index = this.images.length - 1;
        }
        return index;
      },
      rightIndex: function rightIndex() {
        var index = this.currentIndex + 1;
        if (index === this.images.length) {
          index = 0;
        }
        return index;
      }
    },

    mounted: function mounted() {
      var _this = this;

      this.startLoop();

      this.$watch('images', function (val, oldVal) {
        _this.startLoop();
      });
    },


    methods: {
      imgClass: function imgClass(index) {
        return index === this.currentIndex ? 'current' : index === this.leftIndex ? 'left' : 'right';
      },
      enableTransition: function enableTransition(index) {
        this.$refs.img[index].style.WebkitTransitionProperty = '-webkit-transform';
      },
      disableTransition: function disableTransition(index) {
        this.$refs.img[index].style.WebkitTransitionProperty = 'none';
      },
      translate3d: function translate3d(index) {
        var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
        var z = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

        this.$refs.img[index].style.WebkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
      },
      goRight: function goRight() {
        this.enableTransition(this.currentIndex);
        this.enableTransition(this.rightIndex);

        this.disableTransition(this.leftIndex);
        var index = this.rightIndex;
        this.currentIndex = index;
        this.onChange({ index: index });
      },
      goLeft: function goLeft() {
        this.enableTransition(this.currentIndex);
        this.enableTransition(this.leftIndex);

        this.disableTransition(this.rightIndex);
        var index = this.leftIndex;
        this.currentIndex = index;
        this.onChange({ index: index });
      },
      startLoop: function startLoop() {
        var _this2 = this;

        if (this.loopTimer) {
          this.stopLoop();
        }
        if (this.images.length) {
          this.loopTimer = setInterval(function () {
            _this2.goRight();
          }, 4000);
        }
      },
      stopLoop: function stopLoop() {
        clearInterval(this.loopTimer);
      },
      onTouchstart: function onTouchstart(event) {
        if (event.changedTouches && event.changedTouches[0]) {
          this.stopLoop();
          startX = event.changedTouches[0].clientX;
        }
      },
      onTouchmove: function onTouchmove(event) {
        if (event.changedTouches && event.changedTouches[0]) {
          moveX = event.changedTouches[0].clientX - startX;
          var sliderWidth = this.$refs.wrap.clientWidth;
          this.disableTransition(this.currentIndex);
          this.disableTransition(this.leftIndex);
          this.disableTransition(this.rightIndex);
          this.translate3d(this.currentIndex, moveX);
          this.translate3d(this.leftIndex, -sliderWidth + moveX);
          this.translate3d(this.rightIndex, sliderWidth + moveX);
        }
      },
      onTouchend: function onTouchend(event) {
        if (event.changedTouches && event.changedTouches[0]) {
          if (Math.abs(moveX) > 30) {
            moveX < 0 ? this.goRight() : this.goLeft();
          } else {
            var sliderWidth = this.$refs.wrap.clientWidth;
            this.enableTransition(this.currentIndex);
            this.enableTransition(this.leftIndex);
            this.enableTransition(this.rightIndex);
            this.translate3d(this.currentIndex, 0);
            this.translate3d(this.leftIndex, -sliderWidth);
            this.translate3d(this.rightIndex, sliderWidth);
          }
          moveX = 0;
          this.startLoop();
        }
      }
    }
  };

/***/ },
/* 17 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    imgWrap: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transitionDuration: '0.3s'
    },

    left: {
      transform: 'translate3d(-100%, 0, 0)'
    },

    current: {
      transform: 'translate3d(0, 0, 0)'
    },

    right: {
      transform: 'translate3d(100%, 0, 0)'
    }
  };

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = "\n<view v-ref:wrap _style=\"height: {{height}}; width: {{width}}\" @touchstart=\"onTouchstart\"\n  @touchmove=\"onTouchmove\" @touchend=\"onTouchend\">\n  <view v-for=\"image,index in images\" v-ref:img class=\"imgWrap\"\n     _class=\"{{imgClass(index)}}\">\n    <image :src=\"image\" _style=\"height: {{height}}; width: {{width}}\"/>\n  </view>\n</view>\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    wrap: {
      position: 'relative'
    },

    indicatorWrap: {
      position: 'absolute',
      left: 20,
      bottom: 10
    },

    indicator: {
      width: 14,
      height: 14,
      borderRadius: 7,
      marginRight: 18,
      backgroundColor: '#fdfcfc'
    },

    active: {
      backgroundColor: '#fc5475'
    }
  };

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = "\n<view class=\"wrap\">\n  <slider-image :images=\"images\" _style=\"height: {{height}}; width: {{width}}\"\n    v-if=\"isNative\" @change=\"onChange\" @click=\"onClick\"></slider-image>\n  <view v-else>\n    <view @click=\"onClick\">\n      <slider-web :images=\"images\" :width=\"width\" :height=\"height\" :on-change=\"onChange\"></slider-web>\n    </view>\n  </view>\n  <slot>\n    <view class=\"indicatorWrap\">\n      <view class=\"indicator\" v-for=\"item, index in data\"\n        _class=\"{{ index === activeIndex ? 'active' : '' }}\"></view>\n    </view>\n  </slot>\n</view>\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <slider :data=\"sliderData\" :change=\"onSliderChange\">\n    <view class=\"indicatorWrap\">\n      <view class=\"triggerInner\">\n        <view class=\"indicator\" v-for=\"item, index in sliderData\"\n          _class=\"{{ index === activeIndex ? 'active' : '' }}\"></view>\n      </view>\n    </view>\n  </slider>\n</view>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(23)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/brandHotList/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(29)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-7a490ff9/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(24);

  var _style2 = _interopRequireDefault(_style);

  var _xcoreTips = __webpack_require__(25);

  var _xcoreTips2 = _interopRequireDefault(_xcoreTips);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    components: {
      Tips: _xcoreTips2.default
    },
    props: {
      items: Array,
      sourcekey: Number
    },
    data: function data() {
      return {
        style: _style2.default,
        shopId: 1300552288,
        couponId: '1hv5hw242' };
    },

    computed: {
      firstItem: function firstItem() {
        return this.items[0] || {};
      },
      ptpc: function ptpc() {
        return '_rmc_' + this.sourcekey;
      }
    },
    methods: {
      idToUrl: function idToUrl(id) {
        return 1 + (id * 2 + 56).toString(36);
      },
      getCoupon: function getCoupon() {
        var _this = this;

        this.$Vue.util.ajax({
          url: 'http://promotion.mogujie.com/jsonp/getPlatformCoupon/1',
          dataType: 'jsonp',
          data: {
            campId: this.couponId,
            shopId: this.idToUrl(this.shopId)
          },
          success: function success(data) {
            var msg = '';
            if (data && data.success && data.returnCode === 'SUCCESS' && data.data) {
              msg = '成功领取';
            } else if (data && data.returnCode === 'SESSION_INVALID') {
              if (/(mogujie|xcore)/i.test(navigator.userAgent)) {
                window.open('mgj://login');
              } else {
                var url = 'http://portal.mogujie.com/login?refer=' + encodeURIComponent(location.href);
                window.open(window.__logger ? __logger.generatePtpParams(url) : url);
              }
            } else {
              msg = data.message;
            }

            if (msg) {
              _this.$refs.tips.show(msg);
            }
          }
        });
      }
    }
  };

/***/ },
/* 24 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      width: 750,
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    head: {
      width: 750,
      height: 86,
      paddingLeft: 44,
      paddingRight: 44,
      backgroundColor: '#f6f6f6',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontSize: 30
    },
    more: {
      fontSize: 24
    },
    body: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      backgroundColor: '#E5E5E5'
    },
    left: {
      position: 'relative',
      height: 442,
      width: 306,
      backgroundColor: '#fff'
    },
    leftImage: {
      width: 306,
      height: 402
    },
    coupon: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 88,
      top: 332,
      width: 130,
      height: 42,
      borderWidth: 'pixel',
      borderColor: '#999',
      borderRadius: 3
    },
    couponInner: {
      fontSize: 22,
      color: '#333',
      backgroundColor: '#fff'
    },
    right: {
      width: 442,
      height: 442,
      marginLeft: 'pixel',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    rightItem: {
      width: 220,
      height: 220,
      marginBottom: 'pixel'
    },
    itemImage: {
      width: 220,
      height: 220
    }
  };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(26)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-tips/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(28)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-ed368112/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(27);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var timer = -1;

  exports.default = {
    props: {
      delayTime: {
        type: String,
        default: '2000'
      },
      borderRadius: {
        type: String,
        default: '4'
      },
      backgroundColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.6)'
      },
      foregroundColor: {
        type: String,
        default: '#fff'
      }
    },
    data: function data() {
      return {
        wrapKey: 'tips-key-' + (Math.random() * 10000 >>> 0) + (+new Date() % 10000 >>> 0),
        delayTimeArrive: true,
        msg: '',
        style: _style2.default
      };
    },

    computed: {
      on: function on() {
        if (this.msg !== '' && !this.delayTimeArrive) {
          return true;
        }
        return false;
      }
    },
    methods: {
      resetTimer: function resetTimer() {
        var _this = this;

        clearTimeout(timer);

        if (this.msg === '') {
          this.delayTimeArrive = true;
        } else {
          this.delayTimeArrive = false;
          timer = setTimeout(function () {
            _this.delayTimeArrive = true;
          }, +this.delayTime);
        }
      },
      updateHook: function updateHook() {
        if (false) {
          if (this.$refs.wrap && this.$refs.wrap.parentNode !== document.body) {
            document.body.appendChild(this.$refs.wrap);
          }
        }
      },
      show: function show(message) {
        this.msg = message;
        this.resetTimer();
      }
    },
    updated: function updated() {
      this.updateHook();
    },
    mounted: function mounted() {
      this.updateHook();
      this.resetTimer();
    }
  };

/***/ },
/* 27 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    wrap: {
      position: 'fixed',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 100
    },
    tipsWrap: {
      flexDirection: 'column',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 24,
      paddingRight: 24,
      maxWidth: 600
    }
  };

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = "\n<view :key=\"wrapKey\" _vdom=\"tips\">\n  <view v-if=\"on\" v-ref:wrap class=\"wrap\">\n    <view\n      class=\"tipsWrap\"\n      _style=\"background-color:{{backgroundColor}};border-radius:{{borderRadius}}\">\n      <label _style=\"color:{{foregroundColor}}\">{{msg}}</label>\n    </view>\n  </view>\n</view>\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <view class=\"head\">\n    <label class=\"title\">品牌热榜</label>\n    <link href=\"http://act.mogujie.com/brandstationlogo?ismobile=1\" :c=\"ptpc\">\n      <label class=\"more\">查看更多></label>\n    </link>\n  </view>\n  <view class=\"body\">\n    <link class=\"left\" :href=\"firstItem.link\" :c=\"ptpc\" :acm=\"firstItem.acm\">\n      <image class=\"leftImage\" :src=\"firstItem.image\" />\n      <view class=\"coupon\">\n        <label class=\"couponInner\" @click.stop.prevent=\"getCoupon\">收藏领卷</label>\n      </view>\n    </link>\n    <view class=\"right\">\n      <template v-for=\"item,index of items.slice(1)\">\n        <link class=\"rightItem\" :href=\"item.link\" :c=\"ptpc\" :acm=\"item.acm\" :d=\"String(index)\">\n          <image class=\"itemImage\" :src=\"item.image\" />\n        </link>\n      </template>\n    </view>\n  </view>\n  <tips v-ref:tips delay-time=\"2000\" border-radius=\"10\" foreground-color=\"#fff\" background-color=\"#F5476C\"></tips>\n</view>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(31)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/horizontalScroll/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(33)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-e7ae8c74/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(32);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    props: {
      items: Array,
      sourcekey: Number
    },
    data: function data() {
      return {
        style: _style2.default
      };
    },

    computed: {
      ptpc: function ptpc() {
        return '_rmc_' + this.sourcekey;
      }
    }
  };

/***/ },
/* 32 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      marginTop: 30,
      paddingBottom: 20,
      flexDirection: 'column',
      backgroundColor: '#fff'
    },
    head: {
      height: 92,
      alignItems: 'center',
      paddingLeft: 44
    },
    title: {
      fontSize: 30
    },
    scrollView: {
      height: 422
    },
    scrollItem: {
      width: 290,
      height: 422,
      marginRight: 20
    },
    itemImage: {
      width: 290,
      height: 422
    }
  };

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = "\n<View class=\"container\">\n  <View class=\"head\">\n    <label class=\"title\">店铺焕新</label>\n  </View>\n  <scrollview class=\"scrollView\">\n    <template v-for=\"item,index of items\">\n      <link class=\"scrollItem\" :href=\"item.link\" :c=\"ptpc\" :d=\"String(index)\" :acm=\"item.acm\">\n        <image class=\"itemImage\" :src=\"item.image\" />\n      </link>\n    </template>\n  </scrollview>\n</View>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(35)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/keyWord/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(37)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-53f8366c/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(36);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    props: {
      items: Array
    },
    data: function data() {
      return {
        style: _style2.default
      };
    },

    computed: {
      ptpc: function ptpc() {
        return '_rmc_' + this.sourcekey;
      }
    }
  };

/***/ },
/* 36 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      marginTop: 30,
      flexDirection: 'column',
      backgroundColor: '#fff'
    },
    head: {
      position: 'relative',
      paddingTop: 30,
      paddingBottom: 20,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headImage: {
      width: 256.6,
      height: 8.2
    },
    title: {
      position: 'absolute'
    },
    body: {
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    item: {
      width: 186,
      marginBottom: 20,
      flexDirection: 'column',
      alignItems: 'center'
    },
    itemImage: {
      width: 120,
      height: 120
    },
    itemName: {
      height: 37,
      color: '#333',
      marginTop: 10,
      fontSize: 26
    }
  };

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <view class=\"head\">\n    <image class=\"headImage\" src=\"http://s17.mogucdn.com/p1/160415/upload_ifqteobymy4wkmdgg4zdambqgyyde_313x10.png\" />\n    <label class=\"title\">品牌精选</label>\n  </view>\n  <view class=\"body\">\n    <template v-for=\"item,index of items\">\n      <link class=\"item\" :href=\"item.link\" :c=\"ptpc\" :d=\"String(index)\" :acm=\"item.acm\">\n        <image class=\"itemImage\" :src=\"item.image\" />\n        <label class=\"itemName\">{{item.title}}</label>\n      </link>\n    </template>\n  </view>\n</view>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(39)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/scrollWallTab/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(44)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-1bac5c42/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(40);

  var _style2 = _interopRequireDefault(_style);

  var _data2 = __webpack_require__(41);

  var _data3 = _interopRequireDefault(_data2);

  var _pubsub = __webpack_require__(42);

  var _pubsub2 = _interopRequireDefault(_pubsub);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    data: function data() {
      return {
        style: _style2.default,
        items: _data3.default,
        activeIndex: 0,
        currentId: '',
        fixed: false
      };
    },
    created: function created() {
      var _this = this;

      this.select(this.items[0].id, 0);

      _pubsub2.default.on('h-scroll', function (e) {
        var wrap = _this.$refs.wrap;
        var container = _this.$refs.container;
        if (e.target.scrollTop >= wrap.offsetTop) {
          if (_this.fixed) return;
          _this.fixed = true;
          document.body.appendChild(container);
        } else {
          if (!_this.fixed) return;
          _this.fixed = false;
          wrap.appendChild(container);
        }
      });
    },

    computed: {
      position: function position() {
        return this.fixed ? 'absolute' : 'relative';
      }
    },
    methods: {
      select: function select(id, index, event) {
        id = String(id);
        this.currentId = id;
        this.$parent.changeCid(id);
        this.activeIndex = index;
        if (event) {
          var container = this.$refs.container;
          var scrollLeft = container.scrollLeft;
          var offsetLeft = event.currentTarget.offsetLeft;
          var offsetWidth = event.currentTarget.offsetWidth;

          var left = offsetLeft - scrollLeft + offsetWidth / 2;

          var toMove = left - container.offsetWidth / 2;
          container.setScrollLeft(scrollLeft + toMove);
        }

        if (this.fixed && this.$refs.wrap) {
          this.$root.$el.scrollTop = this.$refs.wrap.offsetTop;
        }
      }
    }
  };

/***/ },
/* 40 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    wrap: {
      position: 'relative',
      marginTop: 30,
      marginBottom: 16,
      height: 95
    },
    container: {
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      width: 750,
      height: 95,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff'
    },
    item: {
      position: 'relative',
      height: 95,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemName: {
      fontSize: 32,
      color: '#666'
    },
    active: {
      fontSize: 32,
      color: '#F44B6E'
    },
    bgLine: {
      position: 'absolute',
      height: 1,
      width: 750,
      left: 0,
      bottom: 0,
      backgroundColor: '#ECECEC'
    },
    feLine: {
      position: 'absolute',
      height: 1,
      left: 0,
      right: 0,
      bottom: 1,
      backgroundColor: '#F44B6E'
    }
  };

/***/ },
/* 41 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    title: 'T恤',
    id: 10058813
  }, {
    title: '连衣裙',
    id: 10058811
  }, {
    title: '凉鞋',
    id: 10058709
  }, {
    title: '单鞋',
    id: 10058711
  }, {
    title: '单肩包',
    id: 10058724
  }, {
    title: '双肩包',
    id: 10058725
  }, {
    title: '内衣',
    id: 10058342
  }, {
    title: '泳衣',
    id: 10058716
  }, {
    title: '面膜',
    id: 10058079
  }, {
    title: '防晒',
    id: 10058400
  }, {
    title: '运动鞋',
    id: 10058715
  }, {
    title: '男友',
    id: 10058034
  }, {
    title: '家居',
    id: 10058053
  }, {
    title: '食品',
    id: 10058054
  }, {
    title: '母婴',
    id: 10058055
  }];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _eventEmitter = __webpack_require__(43);

  exports.default = new _eventEmitter.EventEmitter(); //返回一个全局的消息控制器实例

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  (function(exports) {
    var process = { EventEmitter: function() {} };
    
    if (typeof Array.isArray !== "function"){
      Array.isArray = function(obj){ return Object.prototype.toString.call(obj) === "[object Array]" };
    }
    
    if (!Array.prototype.indexOf){
      Array.prototype.indexOf = function(item){
          for ( var i = 0, length = this.length; i < length; i++ ) {
              if ( this[ i ] === item ) {
                  return i;
              }
          }

          return -1;
      };
    }
    
    // Begin wrap of nodejs implementation of EventEmitter

    var EventEmitter = exports.EventEmitter = process.EventEmitter;

    var isArray = Array.isArray;

    EventEmitter.prototype.emit = function(type) {
      // If there is no 'error' event listener then throw.
      if (type === 'error') {
        if (!this._events || !this._events.error ||
            (isArray(this._events.error) && !this._events.error.length))
        {
          if (arguments[1] instanceof Error) {
            throw arguments[1]; // Unhandled 'error' event
          } else {
            throw new Error("Uncaught, unspecified 'error' event.");
          }
          return false;
        }
      }

      if (!this._events) return false;
      var handler = this._events[type];
      if (!handler) return false;

      if (typeof handler == 'function') {
        switch (arguments.length) {
          // fast cases
          case 1:
            handler.call(this);
            break;
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
        }
        return true;

      } else if (isArray(handler)) {
        var args = Array.prototype.slice.call(arguments, 1);

        var listeners = handler.slice();
        for (var i = 0, l = listeners.length; i < l; i++) {
          listeners[i].apply(this, args);
        }
        return true;

      } else {
        return false;
      }
    };

    // EventEmitter is defined in src/node_events.cc
    // EventEmitter.prototype.emit() is also defined there.
    EventEmitter.prototype.addListener = function(type, listener) {
      if ('function' !== typeof listener) {
        throw new Error('addListener only takes instances of Function');
      }

      if (!this._events) this._events = {};

      // To avoid recursion in the case that type == "newListeners"! Before
      // adding it to the listeners, first emit "newListeners".
      this.emit('newListener', type, listener);

      if (!this._events[type]) {
        // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
      } else if (isArray(this._events[type])) {
        // If we've already got an array, just append.
        this._events[type].push(listener);
      } else {
        // Adding the second element, need to change to array.
        this._events[type] = [this._events[type], listener];
      }

      return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
      var self = this;
      self.on(type, function g() {
        self.removeListener(type, g);
        listener.apply(this, arguments);
      });
    };

    EventEmitter.prototype.removeListener = function(type, listener) {
      if ('function' !== typeof listener) {
        throw new Error('removeListener only takes instances of Function');
      }

      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events || !this._events[type]) return this;

      var list = this._events[type];

      if (isArray(list)) {
        var i = list.indexOf(listener);
        if (i < 0) return this;
        list.splice(i, 1);
        if (list.length == 0)
          delete this._events[type];
      } else if (this._events[type] === listener) {
        delete this._events[type];
      }

      return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
      // does not use listeners(), so no side effect of creating _events[type]
      if (type && this._events && this._events[type]) this._events[type] = null;
      return this;
    };

    EventEmitter.prototype.listeners = function(type) {
      if (!this._events) this._events = {};
      if (!this._events[type]) this._events[type] = [];
      if (!isArray(this._events[type])) {
        this._events[type] = [this._events[type]];
      }
      return this._events[type];
    };

    // End nodejs implementation
  }(( false) ? window : exports));

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = "\n  <view v-ref:wrap class=\"wrap\">\n    <scrollview v-ref:container class=\"container\" _style=\"position: {{position}}\">\n      <template v-for=\"item, index of items\">\n        <view class=\"item\" @click=\"select(item.id, index, $event)\">\n          <label class=\"itemName\" _class=\"{{ index === activeIndex ? 'active' : '' }}\">{{item.title}}</label>\n          <view v-if=\"currentId == item.id\" class=\"feLine\"></view>\n        </view>\n      </template>\n      <view class=\"bgLine\"></view>\n    </scrollview>\n  </vie>\n</template>";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(46)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/newTypeGoodsWall/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(53)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-2ad9c44a/index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(47);

  var _style2 = _interopRequireDefault(_style);

  var _cookie = __webpack_require__(48);

  var _cookie2 = _interopRequireDefault(_cookie);

  var _good = __webpack_require__(49);

  var _good2 = _interopRequireDefault(_good);

  var _hdp = __webpack_require__(52);

  var _hdp2 = _interopRequireDefault(_hdp);

  var _pubsub = __webpack_require__(42);

  var _pubsub2 = _interopRequireDefault(_pubsub);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var DEVICE_ID = 'test';
  var IS_NATIVE = /mogujie|xcore/.test(navigator.userAgent);

  exports.default = {
    components: {
      Good: _good2.default
    },
    props: {
      cid: String,
      maxprice: Number,
      minprice: Number,
      imgsize: String,
      customp: String,
      sort: String,
      tag: String
    },
    data: function data() {
      return {
        style: _style2.default,
        dataCache: {},
        isLoading: false,
        items: []
      };
    },

    watch: {
      cid: function cid(val, oldVal) {
        var _this = this;

        this.cid = val;
        this.getDeviceId(function (did) {
          DEVICE_ID = did;
          _this.switchDataSource();
        });
      }
    },
    created: function created() {
      var _this2 = this;

      _pubsub2.default.on('h-scroll', function (e) {
        var el = e.target;
        if (el.scrollHeight <= el.offsetHeight + el.scrollTop) {
          console.log('到底了');
          _this2.loadNextPage();
        }
      });
    },

    computed: {
      doubleItems: function doubleItems() {
        var dbItems = [];
        this.items.forEach(function (item, index) {
          if (index % 2 === 0) {
            dbItems.push({
              id: item.tradeItemId,
              list: []
            });
          }
          dbItems[dbItems.length - 1].list.push(item);
        });
        return dbItems.slice(0);
      }
    },
    methods: {
      render: function render(data) {
        this.items = data.list.slice(0);
      },
      switchDataSource: function switchDataSource() {
        var _this3 = this;

        var cache = this.dataCache[this.cid];

        if (cache) {
          this.render(cache);
          return false;
        } else {
          this.fetchData(1, function (data) {
            _this3.dataCache[_this3.cid] = {
              list: data.result.wall.docs,
              isEnd: data.result.wall.isEnd,
              page: 1
            };
            _this3.render(_this3.dataCache[_this3.cid]);
          });
        }
      },
      loadNextPage: function loadNextPage() {
        var _this4 = this;

        var cid = this.cid;
        var cache = this.dataCache[cid];

        if (cache) {
          if (cache.isEnd) {
            console.log('已经没有更多数据了');
            return false;
          } else {
            (function () {
              var page = cache.page + 1;
              _this4.fetchData(page, function (data) {
                if (cid !== _this4.cid) return false;
                var list = cache ? cache.list.concat(data.result.wall.docs) : data.result.wall.docs;
                _this4.dataCache[_this4.cid] = {
                  list: list,
                  isEnd: data.result.wall.isEnd,
                  page: page
                };
                _this4.render(_this4.dataCache[_this4.cid]);
              });
            })();
          }
        }
      },
      fetchData: function fetchData(page, cb) {
        var _this5 = this;

        var uuid = _cookie2.default.getCookie('__mgjuuid');
        var uid = _cookie2.default.getCookie('__ud_');

        if (this.isLoading) {
          return false;
        }
        this.showLoading();
        this.$Vue.util.ajax({
          url: "http://list.mogujie.com/search" + (this.customp || ''),
          dataType: 'jsonp',
          data: {
            action: '',
            cKey: 'h5-cube-default-v1',
            cpc_offset: '',
            fcid: this.cid,
            imageSize: this.imgsize || '',
            maxPrice: this.maxprice || '',
            minPrice: this.minprice || '',
            page: page,
            tag: this.tag || '',
            ptptPartC: '_book_shopping_' + this.cid + '_h5-cube-default-v1_noab-noab',
            stitle: '',
            title: '',
            _did: DEVICE_ID,
            userId: uid,
            _mgjuuid: uuid
          },
          success: function success(data) {
            _this5.hideLoading();
            if (data.status && data.status.code == 1001) {
              cb(data);
            }
          },
          error: function error(e) {
            _this5.hideLoading();
          }
        });
      },
      showLoading: function showLoading() {
        if (IS_NATIVE) {
          _hdp2.default.do('mgj.progress.show');
        }
        this.isLoading = true;
      },
      hideLoading: function hideLoading() {
        if (IS_NATIVE) {
          _hdp2.default.do('mgj.progress.hide');
        }
        this.isLoading = false;
      },
      getDeviceId: function getDeviceId(cb) {
        if (DEVICE_ID) {
          cb(DEVICE_ID);
        } else if (IS_NATIVE) {
          _hdp2.default.do('mgj.device.signParams', {}).then(function (info) {
            if (typeof info === 'string') {
              info = JSON.parse(info);
            }
            cb(info._did);
          });
        } else {
          cb('');
        }
      }
    }
  };

/***/ },
/* 47 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PINK = '#F44B6E';
  var GREEN = '#93bb21';

  exports.default = {
    line: {
      flexDirection: "row",
      paddingLeft: 8,
      paddingRight: 8,
      flexWrap: 'nowrap',
      justifyContent: "space-between",
      marginBottom: 16
    },
    item: {
      position: 'relative',
      width: 360,
      height: 650,
      flexDirection: 'column',
      borderColor: '#DFDFDF',
      borderWidth: 1,
      backgroundColor: '#fff'
    },
    thumb: {
      width: 178 * 2,
      height: 267 * 2
    },
    image: {
      width: 178 * 2,
      height: 267 * 2,
      objectFit: 'contain'
    },
    bottom: {
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    title: {
      paddingTop: 15,
      justifyContent: 'center'
    },
    titleText: {
      fontSize: 24,
      width: 155 * 2,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: '#666'
    },
    extInfo: {
      position: 'relative',
      flexDirection: 'row',
      height: 40,
      marginTop: 20
      // justifyContent: 'space-between',
    },
    price: {
      color: PINK,
      fontSize: 24,
      marginLeft: 20,
      marginRight: 25
    },
    moreInfo: {
      position: 'absolute',
      right: 25,
      top: -20,
      color: PINK,
      fontSize: 40,
      backgroundColor: '#000',
      fontWeight: 'bold'
    },
    starImage: {
      width: 26,
      height: 23,
      marginRight: 5
    },
    starNumber: {
      fontSize: 24,
      color: '#999'
    },
    similar: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    find: {
      height: 55,
      backgroundColor: PINK,
      justifyContent: 'center',
      alignItems: 'center'
    },
    findText: {
      color: '#fff',
      fontSize: 28
    },
    shopInfo: {
      backgroundColor: '#fff',
      opacity: '0.9',
      flexDirection: 'column',
      alignItems: 'center'
    },
    shopName: {
      marginTop: 10,
      fontSize: 30,
      color: '#666',
      textAlign: 'center'
    },
    rank: {
      width: 158 * 2,
      paddingBottom: 18,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    rankItem: {
      marginTop: 12
    },
    rankItemText: {
      color: '#888',
      fontSize: 20
    },
    rankItemScore: {
      color: PINK,
      // color: GREEN,
      fontSize: 20,
      marginLeft: 15
    },
    rankItemImage: {
      width: 19,
      height: 19,
      marginLeft: 8
    }

  };

/***/ },
/* 48 */
/***/ function(module, exports) {

  'use strict';
  /**
   * Created by neo on 9/5/2016.
   */

  module.exports = {
      /**
       * 设置 cookie
       * @param {string} name - cookie name
       * @param {?string} value - cookie value
       * @param {object} [options]
       * @param {number} [options.expire] - 过期时间，单位为天
       * @param {string} [options.path] - cookie 存放路径
       * @param {string} [options.domain] - cookie 存放Domain
       * @param {boolean} [options.secure] - 是否 secure
       */
      setCookie: function setCookie(name, value, options) {
          options = options || {};
          if (value === null) {
              value = '';
              options.expires = -1;
          }
          var expires = '';
          if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {
              var date;
              if (typeof options.expires === 'number') {
                  date = new Date();
                  date.setTime(date.getTime() + options.expires * 86400000);
              } else {
                  date = options.expires;
              }
              expires = '; expires=' + date.toUTCString();
          }
          var path = options.path ? '; path=' + options.path : '';
          var secure = options.secure ? '; secure' : '';
          var domain = '';
          if (options.domain) {
              domain = '; domain=' + options.domain;
          } else {
              domain = document.domain.toString().split('.');
              domain = '; domain=.' + domain[1] + '.' + domain[2];
          }
          document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
      },

      /**
       * 获取 cookie 值, 如果 cookie 取不到，返回 '';
       * @param  {string} name - cookie name
       * @return {string}
       */
      getCookie: function getCookie(name) {
          var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
          if (arr !== null) {
              return decodeURIComponent(arr[2]);
          }
          return '';
      },

      /**
       * 删除 cookie
       * @param {string} name - cookie name
       */
      removeCookie: function removeCookie(name) {
          this.setCookie(name, null, { expires: -1 });
      }
  };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(50)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/newTypeGoodsWall/good.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(51)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "_v-1c32df44/good.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style = __webpack_require__(47);

  var _style2 = _interopRequireDefault(_style);

  var _pubsub = __webpack_require__(42);

  var _pubsub2 = _interopRequireDefault(_pubsub);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var upImage = 'http://s17.mogucdn.com/p1/160329/upload_ifrteytfmrsggnzzg4zdambqhayde_19x19.png';
  var downImage = 'http://s17.mogucdn.com/p1/160329/upload_ifqtsmtemnsggnzzg4zdambqgyyde_19x20.png';

  exports.default = {
    props: {
      item: Object
    },
    created: function created() {
      var _this = this;

      _pubsub2.default.on('h-scroll', function () {
        _this.isSimilarShow = false;
      });
    },
    data: function data() {
      return {
        style: _style2.default,
        isSimilarShow: false
      };
    },

    computed: {
      descDsrImage: function descDsrImage() {
        return Number(this.item.shopDsr.descDsr) >= Number(this.item.shopDsr.tagDescDsr) ? upImage : downImage;
      },
      qualityDsrImage: function qualityDsrImage() {
        return Number(this.item.shopDsr.qualityDsr) >= Number(this.item.shopDsr.tagQualityDsr) ? upImage : downImage;
      },
      serviceDsrImage: function serviceDsrImage() {
        return Number(this.item.shopDsr.serviceDsr) >= Number(this.item.shopDsr.tagServiceDsr) ? upImage : downImage;
      },
      priceDsrImage: function priceDsrImage() {
        return Number(this.item.shopDsr.priceDsr) >= Number(this.item.shopDsr.tagPriceDsr) ? upImage : downImage;
      }
    },
    methods: {
      toggleSimilar: function toggleSimilar() {
        console.log(1213);
        this.isSimilarShow = !this.isSimilarShow;
      }
    }
  };

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = "\n<view class=\"item\">\n  <link class=\"thumb\" :href=\"item.link\">\n    <image class=\"image\" :src=\"item.img.img\" />\n  </link>\n  <view class=\"bottom\">\n    <link class=\"title\" :href=\"item.link\">\n      <label class=\"titleText\">{{item.title}}</label>\n    </link>\n    <view class=\"extInfo\">\n      <label class=\"price\">￥{{item.price}}</label>\n      <view class=\"star\">\n        <image class=\"starImage\" src=\"http://s18.mogucdn.com/p1/160329/upload_ifqtazjumnsggnzzg4zdambqgyyde_26x23.png\" />\n        <label class=\"starNumber\">{{item.cfav}}</label>\n      </view>\n      <label class=\"moreInfo\" @click=\"toggleSimilar\">...</label>\n    </view>\n  </view>\n  \n  <view v-show=\"isSimilarShow\" class=\"similar\">\n    <template v-if=\"item.hasSimilarity\">\n      <link class=\"find\" :href=\"item.similarityUrl\">\n        <label class=\"findText\">找相似>></label>\n      </link>\n    </template>\n    <template v-if=\"!item.hasSimilarity\">\n      <View class=\"find\">\n        <label class=\"findText\">无相似</label>\n      </View>\n    </template>\n    <view class=\"shopInfo\" @click=\"toggleSimilar\">\n      <!--TODO 上升和下降判断 -->\n      <label class=\"shopName\">{{item.shopSeller || ''}}</label>\n      <view class=\"rank\">\n        <view class=\"rankItem\">\n          <label class=\"rankItemText\">描述</label>\n          <label class=\"rankItemScore\">{{item.shopDsr.descDsr || '暂无'}}</label>\n          <image class=\"rankItemImage\" :src=\"descDsrImage\" />\n        </view>\n        \n        <view class=\"rankItem\">\n          <label class=\"rankItemText\">质量</label>\n          <label class=\"rankItemScore\">{{item.shopDsr.qualityDsr || '暂无'}}</label>\n          <image class=\"rankItemImage\" :src=\"qualityDsrImage\" />\n        </view>\n        \n        <view class=\"rankItem\">\n          <label class=\"rankItemText\">服务</label>\n          <label class=\"rankItemScore\">{{item.shopDsr.serviceDsr || '暂无'}}</label>\n          <image class=\"rankItemImage\" :src=\"serviceDsrImage\" />\n        </view>\n        \n        <view class=\"rankItem\">\n          <label class=\"rankItemText\">价格</label>\n          <label class=\"rankItemScore\">{{item.shopDsr.priceDsr || '暂无'}}</label>\n          <image class=\"rankItemImage\" :src=\"priceDsrImage\" />\n        </view>\n      </view>\n    </view>\n  </view>\n  \n</view>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  (function (global) {
    'use strict';

    if (!global.hdp) {
      global.hdp = {};
    }
    var hdp = global.hdp;
    hdp.version = '0.0.7';
    var _ua = navigator.userAgent.toLowerCase();
    var _rejectMsg = '**hdp:环境不是容器';
    var _rejectNotFount = '**hdp:没有对应的接口:';

    //由cordova生成并注入，唯一标识当前cordova环境兼容hdp.js调用
    var _secret = '';
    //deviceready是否触发
    var _isReady = false;

    //兼容Android某些接口native返回string结构
    var toBeJson = function toBeJson(data) {
      try {
        return data && typeof data == 'string' ? JSON.parse(data) : data;
      } catch (error) {
        return data;
      }
    };

    var isApp = function isApp(_key) {
      if (!_key) {
        //mogujie主客，tt，uni, 番茄炒蛋，小店，淘世界, 美丽说
        var allUAKey = ['mogujie', 'tt', 'uni', 'go', 'xiaodian', 'ambuyer', 'amcustomer', 'meilishuo', "xcore"];
        for (var i = 0, len = allUAKey.length; i < len; i++) {
          if (_ua.indexOf(allUAKey[i]) > -1) {
            return true;
          }
        }
        return false;
      } else {
        return _ua.indexOf(_key) > -1;
      }
    };
    /**
    * 部分接口向后兼容的逻辑，按cordovajs是否传入secret作为依据
    * 此部分代码会随便容器接口升级而废弃
    */
    //旧版本cordovajs无需传入回调的几个接口
    var whiteList = ['', 'setTitle', 'setIcon', 'pushWindow', 'popWindow', 'popToRoot', 'sendNotification', 'registerNotification', 'sendEvent', 'tips', 'setNavgationBackground', 'setStatusBarLight', 'postResult', ''].join('-');
    //兼容旧的参数构建方法
    var generateFallbackParams = function generateFallbackParams(pluginName, args, resolve, reject) {
      var name = pluginName.split('.');
      name = name[name.length - 1];
      if (whiteList.indexOf('-' + name + '-') > -1) {
        //白名单下,无需回调
        return args;
      }
      //个别兼容
      switch (pluginName) {
        //回调参数在后面的
        case 'mgj.sms.send':
        case 'mgj.device.signParams':
          args.push(function (data) {
            data = toBeJson(data);
            resolve(data);
          }, function (error) {
            reject(error);
          });
          break;
        //第一个参数是suc回调
        case 'mgj.location.pickLocationInfo':
        case 'mgj.app.isInstalled':
          args.unshift(function (data) {
            data = toBeJson(data);
            resolve(data);
          });
          break;
        //第二个参数是suc回调
        case 'navigator.notification.alert':
        case 'navigator.notification.confirm':
          args.splice(1, 0, function (data) {
            resolve(data);
          });
          break;
        //ajax兼容promise方式
        case 'mgj.ajax.ajax':
        case 'mgj.ajax.ajaxOrigin':
          var options = args[0];
          //补全callback,绑定promise
          if (!options.success) {
            options.success = function (data) {
              resolve(data);
            };
          } else {
            var suc = options.success;
            options.success = function (data) {
              suc.apply(null, arguments);
              resolve(data);
            };
          }
          if (!options.error) {
            options.error = function (error) {
              reject(error);
            };
          }
          break;
        default:
          //默认两个回调放前面
          args.unshift(function (data) {
            data = toBeJson(data);
            if (pluginName == 'mgj.user.getUserInfo' && data.result) {
              //android下user.getInfo接口多了一层
              resolve(data.result);
            } else if (pluginName == 'mgj.device.getInfo' && data.deviceId) {
              //ios下deviceInfo的ID不对
              data.deviceID = data.deviceId;
              resolve(data);
            } else {
              resolve(data);
            }
          }, function (error) {
            reject(error);
          });
      }
      return args;
    };
    //Promise构造器
    var MyPromise = global.Promise;
    if (!MyPromise || _ua.indexOf('xcore') > 0) {
      //xcore下直接使用内部Promise
      var Promise_ = function Promise_(fn) {
        //Promise状态
        this.state = 'pending';
        //resolve时的返回值，传给then中的success函数
        this.value = null;
        //reject时的返回值，传给then中的error函数
        this.reason = null;
        //当前Promise对应的一个classbacks,这里记录then中的success,error回调和连接下一个
        this.callback = {
          isDispatch: false
        };
        //调用业务函数，传入resolve和reject方法实现异步变更Promise状态
        if (typeof fn == 'function') {
          fn.call(null, this.resolve.bind(this), this.reject.bind(this));
        }
      };
      Promise_.prototype.resolve = function (value) {
        if (this.state != 'pending') {
          return;
        }
        this.state = 'fulfilled';
        this.value = value;
        //事件分发
        this._dispatch();
        return;
      };
      //将Promise状态变为rejected，传入原因（错误信息），并触发对应的回调函数
      Promise_.prototype.reject = function (reason) {
        if (this.state != 'pending') {
          return;
        }
        this.state = 'rejected';
        this.reason = reason;
        //事件分发
        this._dispatch();
        return;
      };
      //Promise主要接口，用于注册Promise状态改动后的回调函数
      //@params onFulfilled(value) 成功回调
      //@params onRejected(reson) 失败回调
      //@return Promise then操作后立即返回一个新的promise对象,实现Promise的链式操作
      Promise_.prototype.then = function (onFulfilled, onRejectd) {
        if (typeof onFulfilled == 'function') {
          this.callback.fulfill = onFulfilled;
        }
        if (typeof onRejectd == 'function') {
          this.callback.reject = onRejectd;
        }
        //如果当前Promsie处于结束状态，then操作后立即执行一次事件分开，让回调执行
        if (this.state != 'pending') {
          setTimeout(function () {
            this._dispatch();
          }.bind(this), 10);
        }
        //创建一个新的Promise，通过callback对象记录的下一个Promise引用
        this.callback.promise = new Promise_();
        //返回新的Promise
        return this.callback.promise;
      };
      //Promise主要接口，用于注册Promise失败后的回调函数
      Promise_.prototype.catch = function (onRejectd) {
        //@notice 这里同样要返回一个新的Promise对象
        return this.then(null, onRejectd);
      };

      //Promise内部事件分析，按照Promise状态调用callback
      //根据callback返回值，触发下一个Promise
      Promise_.prototype._dispatch = function () {
        if (this.state == 'pending') {
          return;
        }
        if (!this.callback.isDispatch) {
          //回调未触发
          var callback = this.callback;
          var nextPromise = callback.promise;
          var returnVal = null;
          try {
            switch (this.state) {
              case 'fulfilled':
                if (callback.fulfill) {
                  //当前Promise有成功回调
                  returnVal = callback.fulfill(this.value);
                  callback.isDispatch = true;
                } else {
                  //当前Promise无成功回调，触发Promise链中的下一个
                  return nextPromise && nextPromise.resolve(this.value);
                }
                break;
              case 'rejected':
                if (callback.reject) {
                  //当前Promise有失败回调
                  returnVal = callback.reject(this.reason);
                  callback.isDispatch = true;
                } else {
                  //当前Promise无失败回调，触发Promise链中的下一个
                  return nextPromise && nextPromise.reject(this.reason);
                }
                break;
            }
            //当前Promise的回调调用后，根据其返回值触发Promise链中的下一个
            if (returnVal === null || returnVal === undefined) {
              //回调无返回，直接触发下一个Promise的fulfilled状态
              nextPromise.resolve(returnVal);
            } else if (returnVal instanceof Promise_ || typeof returnVal.then === 'function') {
              returnVal.then(nextPromise.resolve.bind(nextPromise), nextPromise.reject.bind(nextPromise));
            } else {
              //回调返回的是其他数据，直接传给下一个Promise
              nextPromise.resolve(returnVal);
            }
          } catch (e) {
            //执行过程中如果出错，直接抛给下一个Promise
            nextPromise.reject(e);
          }
        }
      };

      MyPromise = Promise_;
    }
    //修正接口问题,目前主要用于修复732\733下mwp无法使用的问题
    var _version = '';
    var _mwp = function _mwp(args, resolve, reject) {
      if (_version == '732' || _version == '733') {
        reject(_rejectNotFount);
        return;
      }
      args.unshift(function (data) {
        resolve(data);
      }, function (error) {
        reject(error);
      });
      if (_secret) {
        //需要接入secret
        args.unshift(_secret);
      }
      if (mgj.ajax && mgj.ajax.mwp) {
        mgj.ajax.mwp.apply(null, args);
      } else {
        reject(_rejectNotFount);
      }
    },
        _bugfix = function _bugfix(pluginName, args) {
      if (pluginName == 'mgj.ajax.mwp') {
        return new MyPromise(function (resolve, reject) {
          if (!_version) {
            hdp.do('mgj.device.getInfo').then(function (info) {
              _version = info.appVersion;
              _mwp(args, resolve, reject);
            });
          } else {
            _mwp(args, resolve, reject);
          }
        });
      }
    };

    /**
    * 核心接口封装逻辑
    */

    //获取Cordova注入的对象
    var getObj = function getObj(rootName) {
      return new MyPromise(function (resolve, reject) {
        if (_isReady) {
          if (window[rootName]) {
            resolve(window[rootName]);
          } else {
            //页面已经ready,但没有这个对象
            reject(_rejectNotFount);
          }
        } else {
          if (isApp()) {
            document.addEventListener('deviceready', function () {
              //页面没有deviceReady;
              _isReady = true;
              if (window[rootName]) {
                resolve(window[rootName]);
              } else {
                reject(_rejectNotFount);
              }
            }, false);
          } else {
            reject(_rejectMsg);
          }
        }
      });
    },


    //获取命名空间下指定的fn
    getFn = function getFn(obj, nameSpaceAry) {
      if (nameSpaceAry.length == 3) {
        //命中大部分接口，省去一个循环
        if (obj[nameSpaceAry[1]]) {
          return obj[nameSpaceAry[1]][nameSpaceAry[2]];
        }
        return;
      }
      var tempObj = obj;
      for (var i = 1, l = nameSpaceAry.length; i < l; i++) {
        tempObj = tempObj[nameSpaceAry[i]];
        if (!tempObj) {
          break;
        }
        if (i == l - 1) {
          //最后一个了
          return tempObj;
        }
      }
    },

    //插入校验secret和两个回调函数, fallback.js下有一个兼容版本，用于适配旧接口
    generateParams = function generateParams(pluginName, args, resolve, reject, isWrap) {
      var params = args.concat();
      var suc = function suc(data) {
        data = toBeJson(data);
        if (pluginName == 'mgj.user.getUserInfo' && data.result) {
          //android下user.getInfo接口多了一层
          resolve(data.result);
        } else if (pluginName == 'mgj.device.getInfo' && data.deviceId) {
          //ios下deviceInfo的ID不对
          data.deviceID = data.deviceId;
          resolve(data);
        } else {
          resolve(data);
        }
      },
          err = function err(error, status, msg) {
        //在ajax插件下回调信息在第三个参数里
        if (msg) {
          reject(msg);
        } else {
          reject(error);
        }
      };
      if (pluginName == 'mgj.pevent' && !isWrap) {
        //733Android下兼容mgj.pevent未被封装的问题
        params.unshift(suc, err);
      } else if (pluginName == 'uni.resultnotification.postResult') {
        //uni下该插件接入时没有兼容，没有回调
        params.unshift(_secret);
      } else if (pluginName == 'mgj.navigation.setDropMenu') {
        //mgj下两个新插件没有规范接口参数
        params.unshift(_secret);
      } else if (pluginName == 'mgj.navigation.setNavigationBarRightIcons') {
        //mgj下两个新插件没有规范接口参数
        params.unshift(_secret);
      } else {
        params.unshift(_secret, suc, err);
      }
      return params;
    };

    //判定环境,是否处于蘑菇的apps中
    hdp.isApp = isApp;

    //暴露getObj接口给用户
    hdp.getObj = getObj;
    //设置 Bridge Secert, 用于接口校验
    hdp.setSecret = function (secret) {
      _secret = secret;
    };
    //ios下如果是wkWebview, cordova已经初始化
    if ((typeof cordova === 'undefined' ? 'undefined' : _typeof(cordova)) == 'object') {
      if (cordova.hdp_secret) {
        _secret = cordova.hdp_secret;
      }
    }
    //对外接口
    hdp.exec = function (pluginName) {
      if (!pluginName) {
        return;
      }
      //后面跟着的arguments
      var args = Array.prototype.slice.call(arguments, 1);
      var nameSpaceAry = pluginName.split('.');
      if (pluginName == 'mgj.ajax.mwp') {
        //修复接口
        return _bugfix(pluginName, args);
      }
      var func = null;
      return new MyPromise(function (resolve, reject) {
        getObj(nameSpaceAry[0]).then(function (obj) {
          func = getFn(obj, nameSpaceAry);
          if (!func) {
            //没有接口
            reject(_rejectNotFount + pluginName);
          }
          //734下cordovajs添加了封装函数的标识
          var isWrap = func.hdp_wrap_fn;
          if (!_secret) {
            //没有设置secret,旧的cordova.js版本，需要做参数兼容
            console.log('**hdp:未注入birdgeSecret');
            args = generateFallbackParams(pluginName, args, resolve, reject);
          } else {
            //构建参数
            args = generateParams(pluginName, args, resolve, reject, isWrap);
          }
          if (func) {
            //调用function
            func.apply(null, args);
          }
        }).catch(function (errmsg) {
          reject(errmsg);
        });
      });
    };

    hdp.do = hdp.exec;

    //兼容amd|cmd代码
    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
      module.exports = hdp;
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return hdp;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  })(window);

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = "\n<listview-shadow>\n  <template v-for=\"group of doubleItems\" :key=\"group.id\">\n    <view class=\"line\">\n      <good v-for=\"item of group.list\" :item=\"item\" :key=\"item.acm\"></good>\n    </view>\n  </template>\n</listview-shadow>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = "\n<listview class=\"container\" @scroll=\"scrollHandler\">\n  <swipper :items=\"swipperData\" :sourcekey=\"6165\"></swipper>\n  <brand-hot-list :items=\"brandHotListData\" :sourcekey=\"5465\"></brand-hot-list>\n  <horizontal-scroll :items=\"horizontalScrollData\" :sourcekey=\"6064\"></horizontal-scroll>\n  <key-word :items=\"keyWordData\" :sourcekey=\"11283\"></key-word>\n  <scroll-wall-tab></scroll-wall-tab>\n  <goods-wall :cid=\"goodsWallCid\" :imgsize=\"'220x330'\"></goods-wall>\n</listview>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index = __webpack_require__(56);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    _index2.default.init({
      share: {
        title: '品牌是一种态度',
        url: 'http://act.mogujie.com/brandstation?ismobile=1',
        imageUrl: 'http://s17.mogucdn.com/p1/160515/upload_ifrdinzug5rdayzyhazdambqmeyde_160x160.jpg',
        content: '【蘑菇街品牌站】品牌是一种态度，让生活与美好不期而遇！'
      },
      showRightBtn: true
    });
  }; //微信分享

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _hdp = __webpack_require__(57);

  var _hdp2 = _interopRequireDefault(_hdp);

  var _logger = __webpack_require__(58);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // wraper xcore by buji
  if (false) {
    var share;
    var WX_CONFIG;
    var WX_SDK;
    var CHANNEL_MAP;
    var EVENTID;
    var isWxReady;
    var wxSDK;
    var configData;

    (function () {

      /**
       * 初始化微信，微信接口验证
       *
       * @private
       */
      var wxInit = function wxInit() {
        var config = {
          debug: false,
          appId: '',
          timestamp: '',
          nonceStr: '',
          signature: '',
          jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay']
        };

        // 验证config信息
        var url = WX_CONFIG + '?url=' + encodeURIComponent(location.href) + '&callback=_getWxConfig';

        var script = document.createElement('script');
        script.src = url;

        var target = document.getElementsByTagName('script')[0] || document.head;
        target.parentNode.insertBefore(script, target);

        window._getWxConfig = function (data) {
          if (data && data.status && data.status.code === 1001) {
            data = data.result;
            config.appId = data.appId;
            config.nonceStr = data.nonceStr;
            config.signature = data.signature;
            config.timestamp = data.timestamp;
            wxSDK.config(config);

            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
          }
          window._getWxConfig = blank;
        };

        // config 信息验证后会执行ready代码
        wxSDK.ready(function () {
          isWxReady = true;
          wxConfig();
        });
      };

      /**
       * 配置微信分享回调
       *
       * @private
       */


      var wxConfig = function wxConfig() {
        if (!isWxReady) {
          return;
        }

        var opts = {
          title: configData.title,
          desc: configData.content,
          imgUrl: configData.imageUrl,
          type: configData.type,
          dataUrl: configData.dataUrl,
          trigger: function trigger(res) {
            // 用户点击分享时执行的回调函数
            triggerHook(share.hook.weixin.click, res);
          },
          success: function success(res) {
            // 用户确认分享后执行的回调函数
            triggerHook(share.hook.weixin.success, res);
            // 打点
            console.log(res);

            var shareType = res && res.errMsg && res.errMsg.split(":")[0];
            var logObj = {
              title: configData.title && configData.title.substring(0, 100),
              content: configData.content && configData.content.substring(0, 100),
              url: getWxShareUrl(shareType),
              imageUrl: configData.imageUrl,
              ua: navigator.userAgent
            };
            _logger2.default.log(EVENTID, logObj);
          },
          fail: function fail(res) {
            // 分享失败时执行的回调函数
            triggerHook(share.hook.weixin.fail, res);
          },
          cancel: function cancel(res) {
            // 用户取消分享后执行的回调函数
            triggerHook(share.hook.weixin.cancel, res);
          },
          complete: function complete(res) {
            // 分享完成时执行的回调函数，无论成功或失败都会执行
            triggerHook(share.hook.weixin.complete, res);
          }
        };

        // 分享给朋友
        wxSDK.onMenuShareAppMessage(extend({
          link: getWxShareUrl('sendAppMessage')
        }, opts));

        // 分享到朋友圈
        var timelineInfo = extend({
          link: getWxShareUrl('shareTimeline')
        }, opts);
        wxSDK.onMenuShareTimeline(extend(timelineInfo, {
          title: configData.content
        }));

        // 分享到QQ
        wxSDK.onMenuShareQQ(extend({
          link: getWxShareUrl('shareQQ')
        }, opts));

        // 分享到QQ空间
        wxSDK.onMenuShareQZone(extend({
          link: getWxShareUrl('shareQZone')
        }, opts));
      };

      /**
       * 当前容器是否是mogujie
       *
       * @private
       */


      var isMgj = function isMgj() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('mogujie') >= 0;
      };

      /**
       * 当前容器是否是微信
       *
       * @private
       */


      var isWx = function isWx() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('micromessenger') >= 0;
      };

      /**
       * 获取微信分享SDK
       *
       * @private
       */


      var getWxSDK = function getWxSDK(callback) {
        loadScript(WX_SDK, function () {
          wxSDK = window.wx;
          callback && callback();
        });
      };

      /**
       * 生成微信分享url
       *
       * @private
       */


      var getWxShareUrl = function getWxShareUrl(channel) {
        var query = getQuery(configData.url);

        if (!query.f) {
          query.f = CHANNEL_MAP[channel];
          delete query.f2;
        } else {
          query.f2 = CHANNEL_MAP[channel];
        }

        var urlPrefix;

        if (configData.url.indexOf('?') >= 0) {
          urlPrefix = configData.url.slice(0, configData.url.indexOf('?'));
        } else {
          urlPrefix = configData.url;
        }

        return urlPrefix + '?' + stringifyQuery(query);
      };

      /**
       * parse url字符串，返回参数对象
       *
       * @private
       */


      var getQuery = function getQuery(url, key) {
        var qs = (location.search || '').slice(1);

        var map = {};

        qs.split('&').forEach(function (item) {
          item = (item || '=').split('=');

          map[item[0]] = item[1];
        });

        if (key) {
          return map[key];
        }

        return map;
      };

      /**
       * 将query对象序列化成queryString
       *
       * @private
       */


      var stringifyQuery = function stringifyQuery(data) {
        data = data || {};

        var str = '';

        Object.keys(data).forEach(function (item) {
          if (str) {
            str += '&';
          }

          str += item + '=' + data[item];
        });

        return str;
      };

      /**
       * 对象属性复制
       *
       * @private
       */


      var extend = function extend(target, source) {
        target = target || {};
        source = source || {};

        Object.keys(source).forEach(function (item) {
          target[item] = source[item];
        });

        return target;
      };

      /**
       * 异步加载script文件
       *
       * @private
       */


      var loadScript = function loadScript(url, callback) {
        var script = document.createElement('script');
        script.src = url;

        script.onload = function () {
          callback && callback();
        };

        var target = document.getElementsByTagName('script')[0] || document.head;

        target.parentNode.insertBefore(script, target);
      };

      /**
       * 有jQuery活着zepto时触发回调
       * 
       * @private
       */


      var triggerHook = function triggerHook(hook, param) {
        if (window.$ && $(window).trigger) {
          $(window).trigger(hook, param);
        }
      };

      /**
       * 空函数
       *
       * @private
       */


      var blank = function blank() {};

      // web
      share = {};

      // 获取微信验证信息的接口

      WX_CONFIG = 'http://www.mogujie.com/traffic/prom/auth/getjsonsign';

      // 获取微信SDK的接口

      WX_SDK = 'http://s10.mogucdn.com/__static/traffic_api/jweixin.js';

      // 分享渠道代码映射

      CHANNEL_MAP = {
        'sendAppMessage': '1002',
        'shareTimeline': '1004',
        'shareQQ': '1001',
        'shareQZone': '1003'
      };

      // 微信分享事件打点id

      EVENTID = '700700';
      isWxReady = false;
      configData = {
        // 分享标题
        title: '',

        // 分享文案（如果是分享到朋友圈则是标题）
        content: '',

        // 分享出去的访问链接
        url: '',

        // 分享出去的缩略图(160px * 160px)
        imageUrl: '',

        // 分享类型,music、video或link，不填默认为link
        type: '',

        // 如果type是music或video，则要提供数据链接，默认为空
        dataUrl: ''
      };

      /**
       * 初始化分享模块
       *
       * @public
       */

      share.init = function (data) {
        configData = extend(configData, data.share);

        if (!configData.title) {
          configData.title = document.title;
        }

        if (!configData.url) {
          configData.url = location.href;
        }

        if (!configData.imageUrl) {
          if (document.getElementsByTagName('img')[0]) {
            configData.imageUrl = document.getElementsByTagName('img')[0].src;
          }
        }

        if (isWx()) {
          if (window.wx) {
            wxSDK = window.wx;
            wxInit();
          } else {
            getWxSDK(function () {
              wxInit();
            });
          }
        }

        if (data.showRightBtn) {
          share.addRightBtn();
        }
      };

      /**
       * 修改分享数据
       *
       * @public
       */
      share.setData = function (data) {
        configData = extend(configData, data);

        wxConfig();
      };

      /**
       * 调用蘑菇街的分享组件
       *
       * @public
       */
      share.moguShare = function (data) {
        if (!isMgj()) {
          return;
        }

        configData = extend(configData, data);

        var data = {
          title: configData.title,
          content: configData.content,
          url: configData.url,
          imageUrl: configData.imageUrl
        };

        // 如果是安卓&&版本700（这里请注意，历史的坑，永不磨灭）
        var ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf('mogujie4android') > 0 && ua.indexOf('700') > 0) {
          data.imageUrl = _share.data.content;
          data.content = _share.data.imageUrl;
        }

        if (_hdp2.default.isApp('mogujie')) {
          _hdp2.default.do('mgj.share.shareItem', data).then(function (res) {
            triggerHook(share.hook.mogujie.click, res);
          }).catch(function (res) {
            triggerHook(share.hook.mogujie.fail, res);
          });
        }
      };

      /**
       * 在蘑菇街容器右上角注册分享按钮
       *
       * @public
       */
      share.addRightBtn = function () {
        if (_hdp2.default.isApp('mogujie')) {
          _hdp2.default.do('mgj.navigation.rightitem.setTitle', '分享');
          document.addEventListener('rightButton', share.moguShare);
        }
      };

      /**
       * 删除蘑菇街容器右上角的按钮
       *
       * @public
       */
      share.removeRightBtn = function () {
        if (_hdp2.default.isApp('mogujie')) {
          _hdp2.default.do('mgj.navigation.rightitem.setTitle', '');
          document.removeEventListener('rightButton', share.moguShare);
        }
      };

      /**
       * 对外暴露的回调钩子
       * 外部只需要监听以下对应方法（通过window.share.hook查看有哪些钩子）
       * $(window).on(window._share.hook.weixin.click, function(res){
       *     console.log(res);
       * })
       *
       * @public
       */
      share.hook = {
        // 微信
        weixin: {
          click: '__share_hook_weixin_click__',
          success: '__share_hook_weixin_success__',
          fail: '__share_hook_weixin_fail__',
          cancel: '__share_hook_weixin_cancel__',
          complete: '__share_hook_weixin_complete__'
        },
        // 蘑菇街app
        mogujie: {
          click: '__share_hook_mogujie_click__',
          fail: '__share_hook_mogujie_fail__'
        }
      };

      module.exports = share;
    })();
  } else {
    // xcore
    module.exports = {
      init: function init(shareInfo) {
        if (shareInfo.showRightBtn) {
          // 设置分享按钮
          if (_hdp2.default.isApp('mogujie')) {
            _hdp2.default.do('mgj.navigation.rightitem.setTitle', '分享');

            document.addEventListener('rightButton', function () {
              _hdp2.default.do('mgj.share.shareItem', shareInfo.share);
            });
          }
        }
      }
    };
  }

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  (function (global) {
    'use strict';

    if (!global.hdp) {
      global.hdp = {};
    }
    var hdp = global.hdp;
    hdp.version = '0.0.7';
    /**
    * 部分接口向后兼容的逻辑，按cordovajs是否传入secret作为依据
    * 此部分代码会随便容器接口升级而废弃
    */
    //旧版本cordovajs无需传入回调的几个接口
    var whiteList = ['', 'setTitle', 'setIcon', 'pushWindow', 'popWindow', 'popToRoot', 'sendNotification', 'registerNotification', 'sendEvent', 'tips', 'setNavgationBackground', 'setStatusBarLight', 'postResult', ''].join('-');
    //兼容旧的参数构建方法
    var generateFallbackParams = function generateFallbackParams(pluginName, args, resolve, reject) {
      var name = pluginName.split('.');
      name = name[name.length - 1];
      if (whiteList.indexOf('-' + name + '-') > -1) {
        //白名单下,无需回调
        return args;
      }
      //个别兼容
      switch (pluginName) {
        //回调参数在后面的
        case 'mgj.sms.send':
        case 'mgj.device.signParams':
          args.push(function (data) {
            data = toBeJson(data);
            resolve(data);
          }, function (error) {
            reject(error);
          });
          break;
        //第一个参数是suc回调
        case 'mgj.location.pickLocationInfo':
        case 'mgj.app.isInstalled':
          args.unshift(function (data) {
            data = toBeJson(data);
            resolve(data);
          });
          break;
        //第二个参数是suc回调
        case 'navigator.notification.alert':
        case 'navigator.notification.confirm':
          args.splice(1, 0, function (data) {
            resolve(data);
          });
          break;
        //ajax兼容promise方式
        case 'mgj.ajax.ajax':
        case 'mgj.ajax.ajaxOrigin':
          var options = args[0];
          //补全callback,绑定promise
          if (!options.success) {
            options.success = function (data) {
              resolve(data);
            };
          } else {
            var suc = options.success;
            options.success = function (data) {
              suc.apply(null, arguments);
              resolve(data);
            };
          }
          if (!options.error) {
            options.error = function (error) {
              reject(error);
            };
          }
          break;
        default:
          //默认两个回调放前面
          args.unshift(function (data) {
            data = toBeJson(data);
            if (pluginName == 'mgj.user.getUserInfo' && data.result) {
              //android下user.getInfo接口多了一层
              resolve(data.result);
            } else if (pluginName == 'mgj.device.getInfo' && data.deviceId) {
              //ios下deviceInfo的ID不对
              data.deviceID = data.deviceId;
              resolve(data);
            } else {
              resolve(data);
            }
          }, function (error) {
            reject(error);
          });
      }
      return args;
    };
    //Promise构造器
    var MyPromise = global.Promise;
    var _Promise = function _Promise(fn) {
      //Promise状态
      this.state = 'pending';
      //resolve时的返回值，传给then中的success函数
      this.value = null;
      //reject时的返回值，传给then中的error函数
      this.reason = null;
      //当前Promise对应的一个classbacks,这里记录then中的success,error回调和连接下一个
      this.callback = {
        isDispatch: false
      };
      //调用业务函数，传入resolve和reject方法实现异步变更Promise状态
      if (typeof fn == 'function') {
        fn.call(null, this.resolve.bind(this), this.reject.bind(this));
      }
    };
    _Promise.prototype.resolve = function (value) {
      if (this.state != 'pending') {
        return;
      }
      this.state = 'fulfilled';
      this.value = value;
      //事件分发
      this._dispatch();
      return;
    };
    //将Promise状态变为rejected，传入原因（错误信息），并触发对应的回调函数
    _Promise.prototype.reject = function (reason) {
      if (this.state != 'pending') {
        return;
      }
      this.state = 'rejected';
      this.reason = reason;
      //事件分发
      this._dispatch();
      return;
    };
    //Promise主要接口，用于注册Promise状态改动后的回调函数
    //@params onFulfilled(value) 成功回调
    //@params onRejected(reson) 失败回调
    //@return Promise then操作后立即返回一个新的promise对象,实现Promise的链式操作
    _Promise.prototype.then = function (onFulfilled, onRejectd) {
      if (typeof onFulfilled == 'function') {
        this.callback.fulfill = onFulfilled;
      }
      if (typeof onRejectd == 'function') {
        this.callback.reject = onRejectd;
      }
      //如果当前Promsie处于结束状态，then操作后立即执行一次事件分开，让回调执行
      if (this.state != 'pending') {
        setTimeout(function () {
          this._dispatch();
        }.bind(this), 10);
      }
      //创建一个新的Promise，通过callback对象记录的下一个Promise引用
      this.callback.promise = new _Promise();
      //返回新的Promise
      return this.callback.promise;
    };
    //Promise主要接口，用于注册Promise失败后的回调函数
    _Promise.prototype.catch = function (onRejectd) {
      //@notice 这里同样要返回一个新的Promise对象
      return this.then(null, onRejectd);
    };

    //Promise内部事件分析，按照Promise状态调用callback
    //根据callback返回值，触发下一个Promise
    _Promise.prototype._dispatch = function () {
      if (this.state == 'pending') {
        return;
      }
      if (!this.callback.isDispatch) {
        //回调未触发
        var callback = this.callback;
        var nextPromise = callback.promise;
        var returnVal = null;
        try {
          switch (this.state) {
            case 'fulfilled':
              if (callback.fulfill) {
                //当前Promise有成功回调
                returnVal = callback.fulfill(this.value);
                callback.isDispatch = true;
              } else {
                //当前Promise无成功回调，触发Promise链中的下一个
                return nextPromise && nextPromise.resolve(this.value);
              }
              break;
            case 'rejected':
              if (callback.reject) {
                //当前Promise有失败回调
                returnVal = callback.reject(this.reason);
                callback.isDispatch = true;
              } else {
                //当前Promise无失败回调，触发Promise链中的下一个
                return nextPromise && nextPromise.reject(this.reason);
              }
              break;
          }
          //当前Promise的回调调用后，根据其返回值触发Promise链中的下一个
          if (returnVal == null) {
            //回调无返回，直接触发下一个Promise的fulfilled状态
            nextPromise.resolve(returnVal);
          } else if (returnVal instanceof _Promise || typeof returnVal.then === 'function') {
            returnVal.then(nextPromise.resolve.bind(nextPromise), nextPromise.reject.bind(nextPromise));
          } else {
            //回调返回的是其他数据，直接传给下一个Promise
            nextPromise.resolve(returnVal);
          }
        } catch (e) {
          //执行过程中如果出错，直接抛给下一个Promise
          nextPromise.reject(e);
        }
      }
    };

    MyPromise = _Promise;
    //修正接口问题,目前主要用于修复732\733下mwp无法使用的问题
    var _version = '';
    var _bugfix = function _bugfix(pluginName, args) {
      if (pluginName == 'mgj.ajax.mwp') {
        return new MyPromise(function (resolve, reject) {
          if (!_version) {
            hdp.do('mgj.device.getInfo').then(function (info) {
              _version = info.appVersion;
              _mwp(args, resolve, reject);
            });
          } else {
            _mwp(args, resolve, reject);
          }
        });
      }
    },
        _mwp = function _mwp(args, resolve, reject) {
      if (_version == '732' || _version == '733') {
        reject(_rejectNotFount);
        return;
      }
      args.unshift(function (data) {
        resolve(data);
      }, function (error) {
        reject(error);
      });
      if (_secret) {
        //需要接入secret
        args.unshift(_secret);
      }
      if (mgj.ajax && mgj.ajax.mwp) {
        mgj.ajax.mwp.apply(null, args);
      } else {
        reject(_rejectNotFount);
      }
    };
    /**
    * 核心接口封装逻辑
    */
    var _ua = navigator.userAgent.toLowerCase();
    var _rejectMsg = '**hdp:环境不是容器';
    var _rejectNotFount = '**hdp:没有对应的接口:';
    var _secret = '';
    var _isReady = false;

    //获取Cordova注入的对象
    var getObj = function getObj(rootName) {
      return new MyPromise(function (resolve, reject) {
        if (_isReady) {
          if (window[rootName]) {
            resolve(window[rootName]);
          } else {
            //页面已经ready,但没有这个对象
            reject(_rejectNotFount);
          }
        } else {
          if (isApp()) {
            document.addEventListener('deviceready', function () {
              //页面没有deviceReady;
              _isReady = true;
              if (window[rootName]) {
                resolve(window[rootName]);
              } else {
                reject(_rejectNotFount);
              }
            }, false);
          } else {
            reject(_rejectMsg);
          }
        }
      });
    },
        isApp = function isApp(_key) {
      if (!_key) {
        //mogujie主客，tt，uni, 番茄炒蛋，小店，淘世界, 美丽说
        var allUAKey = ['mogujie', 'tt', 'uni', 'go', 'xiaodian', 'ambuyer', 'amcustomer', 'meilishuo'];
        for (var i = 0, len = allUAKey.length; i < len; i++) {
          if (_ua.indexOf(allUAKey[i]) > -1) {
            return true;
          }
        }
        return false;
      } else {
        return _ua.indexOf(_key) > -1;
      }
    },


    //获取命名空间下指定的fn
    getFn = function getFn(obj, nameSpaceAry) {
      if (nameSpaceAry.length == 3) {
        //命中大部分接口，省去一个循环
        if (obj[nameSpaceAry[1]]) {
          return obj[nameSpaceAry[1]][nameSpaceAry[2]];
        }
        return;
      }
      var tempObj = obj;
      for (var i = 1, l = nameSpaceAry.length; i < l; i++) {
        tempObj = tempObj[nameSpaceAry[i]];
        if (!tempObj) {
          break;
        }
        if (i == l - 1) {
          //最后一个了
          return tempObj;
        }
      }
    },

    //兼容Android某些接口native返回string结构
    toBeJson = function toBeJson(data) {
      try {
        return data && typeof data == 'string' ? JSON.parse(data) : data;
      } catch (error) {
        return data;
      }
    },

    //插入校验secret和两个回调函数, fallback.js下有一个兼容版本，用于适配旧接口
    generateParams = function generateParams(pluginName, args, resolve, reject, isWrap) {
      var params = args.concat();
      var suc = function suc(data) {
        data = toBeJson(data);
        if (pluginName == 'mgj.user.getUserInfo' && data.result) {
          //android下user.getInfo接口多了一层
          resolve(data.result);
        } else if (pluginName == 'mgj.device.getInfo' && data.deviceId) {
          //ios下deviceInfo的ID不对
          data.deviceID = data.deviceId;
          resolve(data);
        } else {
          resolve(data);
        }
      },
          err = function err(error) {
        reject(error);
      };
      if (pluginName == 'mgj.pevent' && !isWrap) {
        //733Android下兼容mgj.pevent未被封装的问题
        params.unshift(suc, err);
      } else if (pluginName == 'uni.resultnotification.postResult') {
        //uni下该插件接入时没有兼容，没有回调
        params.unshift(_secret);
      } else {
        params.unshift(_secret, suc, err);
      }
      return params;
    };

    //判定环境,是否处于蘑菇的apps中
    hdp.isApp = isApp;

    //暴露getObj接口给用户
    hdp.getObj = getObj;
    //设置 Bridge Secert, 用于接口校验
    hdp.setSecret = function (secret) {
      _secret = secret;
    };
    //ios下如果是wkWebview, cordova已经初始化
    if ((typeof cordova === 'undefined' ? 'undefined' : _typeof(cordova)) == 'object') {
      if (cordova.hdp_secret) {
        _secret = cordova.hdp_secret;
      }
    }
    //对外接口
    hdp.exec = function (pluginName) {
      if (!pluginName) {
        return;
      }
      //后面跟着的arguments
      var args = Array.prototype.slice.call(arguments, 1);
      var nameSpaceAry = pluginName.split('.');
      if (pluginName == 'mgj.ajax.mwp') {
        //修复接口
        return _bugfix(pluginName, args);
      }
      var func = null;
      return new MyPromise(function (resolve, reject) {
        getObj(nameSpaceAry[0]).then(function (obj) {
          func = getFn(obj, nameSpaceAry);
          if (!func) {
            //没有接口
            reject(_rejectNotFount + pluginName);
          }
          //734下cordovajs添加了封装函数的标识
          var isWrap = func.hdp_wrap_fn;
          if (!_secret) {
            //没有设置secret,旧的cordova.js版本，需要做参数兼容
            console.log('**hdp:未注入birdgeSecret');
            args = generateFallbackParams(pluginName, args, resolve, reject);
          } else {
            //构建参数
            args = generateParams(pluginName, args, resolve, reject, isWrap);
          }
          if (func) {
            //调用function
            func.apply(null, args);
          }
        }).catch(function (errmsg) {
          reject(errmsg);
        });
      });
    };

    hdp.do = hdp.exec;
    //兼容amd|cmd代码
    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
      module.exports = hdp;
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return hdp;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  })(window);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  (function (global) {
    'use strict';

    var logger = global.logger = {};

    logger.version = '0.1.9';

    //兼容ie不报错
    if (typeof console === 'undefined') {
      window.console = {
        log: function log() {}
      };
    }
    var ERRMSG = '**logger.js---打点出错:';
    //工具类
    //暴露对象：logger.util
    var util = {
      /**
     * 对于非IE浏览器返回-1，对于IE浏览器返回版本号
     */
      getIEVersion: function getIEVersion() {
        var rv = -1,
            re;
        var ua = navigator.userAgent;
        if (navigator.appName == 'Microsoft Internet Explorer') {
          re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape') {
          re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1);
        }
        return rv;
      },
      stringify: function stringify(obj) {
        if (typeof JSON != 'undefined') {
          return JSON.stringify(obj);
        }
        var t = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
        if (t != "object" || obj === null) {
          // simple data type
          if (t == "string") obj = '"' + obj + '"';
          return String(obj);
        } else {
          // recurse array or object
          var n,
              v,
              json = [],
              arr = obj && obj.constructor == Array;

          for (n in obj) {
            v = obj[n];
            t = typeof v === 'undefined' ? 'undefined' : _typeof(v);
            if (obj.hasOwnProperty(n)) {
              if (t == "string") v = '"' + v + '"';else if (t == "object" && v !== null) v = util.stringify(v);
              json.push((arr ? "" : '"' + n + '":') + String(v));
            }
          }
          return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
      },
      isArray: function isArray(value) {
        return Object.prototype.toString.call(value) == '[object Array]';
      },
      getCookieInArray: function getCookieInArray(array) {
        for (var i = 0, l = array.length; i < l; i++) {
          var value = util.getCookie(array[i]);
          if (value) {
            return value;
          }
        }
        return '';
      },
      getCookieOrFunc: function getCookieOrFunc(keyOrFunc) {
        if (typeof keyOrFunc == 'function') {
          return util.getValue(keyOrFunc);
        } else {
          return util.getCookie(keyOrFunc);
        }
      },
      getCookie: function getCookie(c_name) {
        if (util.isArray(c_name)) {
          return util.getCookieInArray(c_name);
        }
        var arr = document.cookie.match(new RegExp("(^| )" + c_name + "=([^;]*)(;|$)"));
        if (arr !== null) return decodeURIComponent(arr[2]);
        return '';
      },
      getQuery: function getQuery(name, url) {
        if (url === undefined) {
          url = location.href;
        }
        var str = "(^|&|" + "\\?" + ")" + name + "=([^&]*)(&|$)";
        var reg = new RegExp(str, 'i');
        var r = url.substr(1).match(reg);
        if (r !== null) {
          return decodeURIComponent(r[2]);
        }
        return '';
      },
      getTime: function getTime() {
        return parseInt(new Date().getTime() / 1000);
      },
      registerEvent: function registerEvent(elem, event, func) {
        if (window.attachEvent) {
          elem.attachEvent('on' + event, func);
        } else {
          elem.addEventListener(event, func, false);
        }
      },
      extend: function extend() {
        var args = arguments;
        var target = arguments[0];

        for (var i = 1; i < args.length; i++) {
          var source = args[i];
          for (var p in source) {
            if (source.hasOwnProperty(p)) {
              target[p] = source[p];
            }
          }
        }
        return target;
      },
      getValue: function getValue(valueOrFunc) {
        if (!valueOrFunc) return;
        if (typeof valueOrFunc == 'function') {
          try {
            //后面跟着的arguments
            var args = Array.prototype.slice.call(arguments, 1);
            return valueOrFunc.apply(null, args);
          } catch (err) {
            //调用配置文件的函数时作一个保护
            console.log(ERRMSG + err);
            return '';
          }
        }
        return valueOrFunc;
      }
    };
    logger.util = util;
    // 配置文件
    // 暴露对象：logger.config
    var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
    logger.config = {
      //开启mogu.js打点, 正常情况下只向log.php打点，但要兼容之前的数据，所以暂时要打点到mogu.js
      EnableLogMoGuJs: true,

      //打点地址
      LogUrl: protocol + '//log.juangua.com/log.php',
      LogMoGuJsUrl: protocol + '//log.juangua.com/mogu.js',

      /*
     * cookie中获取uuid、uid、sfrom的key，由业务方配置
     * 当值为数组时，按顺序尝试获取，返回第一个成功获取的值
     */
      uuid: ['__mgjuuid', '__xduuid'],
      uid: '__ud_',
      sfrom: 'from_site',
      cpsinfo: '__cpsinfo',

      //指定ptp_cnt的a字段的生成逻辑(value/function)
      ptp_cnt_a: '',

      //指定ptp_cnt的b字段的生成逻辑(value/function)
      ptp_cnt_b: '',

      //指定ptp_cnt某个元素的c、d字段生成逻辑(value/function)
      ptp_cnt_c_d: '',

      //指定页面的平台字段，区分PC和H5，可由业务方继续细分
      platform: '',

      //指定p事件的eventId， 注意在native插件打点下，由插件决定eventId
      pEventId: '1001',

      //判断是否为移动端的正则主要做ios以及安卓判断
      isMobileRe: /iphone|android|ipad/i,

      //ptp验证
      ptpRe: /[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+/i,

      /**
     * url匹配,匹配成功的url跳转才会添加ptp信息, 由业务方配置
     * 如果hrefRe、mgjRe都匹配不了,则不添加ptp信息
     */
      hrefRe: /http[s]?:\/\/\w+\.(mogujie|xiaodian|uniny)\.com([\/]|\/.*|)$/,
      mgjRe: /mgj:\/\//,

      //判断是否存在mt参数
      mtRe: /\?.*[&]?mt=([^\.]+)\.([^\.]+)\.([^\.&#]+)/,

      //追踪url指定参数，在a标签跳转前添加参数，通过接口生成带ptp信息的url时，也会带上
      //支持数组，追踪多个参数
      chasing: ['f', 'f2'],

      //跳转链接时附带扩展参数，可由业务方配置，支持数组，扩展多个参数
      //当指定了'acm'时，A标签元素拼接PTP参数的同时，会找到当前元素的data-ext-acm属性的值，并以"&acm=value"的形式拼接到url里
      //如果当前元素没有data-ext-acm，则不会拼接相关参数
      //@note: 属性名“data-ext-”头是为了防止与其他业务命名冲突而添加的
      //@note: 请注意IE低版本号url长度的限制
      urlExtend: ['acm'],

      /**
     * 页面的P事件可以指定更多的自定义信息
     * 以key-value的形式，由业务方自定义
     * 注意：不能与正常的ptp打点信息冲突，否则会覆盖掉
     */
      extra: {
        // key1: function(){
        //     return 'value1';
        // },
        // key2: function(){
        //     return 'value2';
        // }
      },

      //判断是否为native, 如果在native下，会调用native.logE、native.logP来打E\P事件
      isNativeRe: /(mogujie|xcore)/i,
      /**
     * 调用native插件打点，由于不同的客户端的打点插件不一样，所以提供接口扩展，由业务方指定native打点代码
     * 需要与上面的‘isNativeRe’参数配合使用
     * 如果没有指定，会默认调用native.mgj.tracer.sendEvent和mgj.pevnet来进来打点（mogujie主客)
     */
      nativeLog: {
        //调用native插件发送E事件请求
        // logE: function(eventid, json){

        // },
        //调用native插件发送P事件请求
        // logP: function(ptp_cnt){

        // }
      }
    };

    //从PTP_PARAMS获取自定义逻辑
    if (window.PTP_PARAMS) {
      util.extend(logger.config, PTP_PARAMS);
    }
    //此文件提供日志项目hash工作

    function Hash() {
      this.arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      this.arrLen = this.arr.length;
    }

    Hash.prototype = {
      rand: function rand(a) {
        var c,
            b = "";
        for (c = 0; a > c; c++) {
          b += this.arr.charAt(Math.random() * this.arrLen);
        }return b;
      },
      code: function code(a, b) {
        var e,
            c = 0,
            d = a.split("");
        for (e = 0; e < d.length; e++) {
          c = b * c + d[e].charCodeAt(0);
        }return Math.abs(c);
      },
      hash: function hash(a, b, c) {
        if (!a || 1 > c) return "";
        for (var d = this.code(a, b), e = "", f = 0, g = 0; e.length < c && (f = d / this.arr.length, g = d % this.arr.length, e += this.arr.charAt(g), 0 !== f);) {
          d = f;
        }return e.toString();
      },
      pageHash: function pageHash(a) {
        return this.hash(a, 31, 4) + this.hash(a, 33, 4);
      }
    };
    // deviceInfo.js获取设备相关信息
    // 暴露对象：logger.info，
    ;(function () {
      var config = logger.config,
          ua = navigator.userAgent.toLocaleLowerCase();

      //暴露对象
      logger.info = {
        isApp: config.isNativeRe.test(ua),
        isNative: config.isNativeRe.test(ua),
        isMobile: config.isMobileRe.test(ua),
        isIos: ua.indexOf('iphone') > -1,
        isAndroid: ua.indexOf('android') > -1,
        isXd: location.href.indexOf('.xiaodian.') > -1
      };
    })()
    //ptp相关信息的收集
    //暴露logger.ptp

    ;
    (function () {
      var config = logger.config;
      var info = logger.info;
      var hash = new Hash();
      var ptp;
      /**
     * 获取平台字段
     * @returns {string}
     */
      function getCntA() {
        var custome = util.getValue(config.ptp_cnt_a);
        if (custome) {
          return custome;
        }
        var _ptp_cnt_a = '1';

        if (info.isXd) {
          _ptp_cnt_a = 'xd1';
        }
        if (info.isMobile) {
          _ptp_cnt_a = 'm1';
        }
        if (info.isIos && info.isNative) {
          _ptp_cnt_a = 'am0';
        } else if (info.isAndroid && info.isNative) {
          _ptp_cnt_a = 'am1';
        }
        return _ptp_cnt_a;
      }

      /**
     * url hash B  字段的方式
     * @returns {string}
     */
      function getCntB() {
        var custome = util.getValue(config.ptp_cnt_b);
        if (custome) {
          return custome;
        }
        var _ptp_cnt_b = '';
        var _url = location.href.replace(':', '');
        _url = _url.replace(/[\/\.]/, '_');
        _ptp_cnt_b = hash.pageHash(_url);
        return _ptp_cnt_b;
      }

      function getCpsInfo() {
        var _cpsinfo = util.getCookieOrFunc(config.cpsinfo);
        if (!_cpsinfo) return;
        _cpsinfo = _cpsinfo.replace('-', ',');
        return _cpsinfo;
      }

      //获取平台字段
      function getPlatform() {
        var custome = util.getValue(config.platform);
        if (custome) {
          return custome;
        }
        if (info.isMobile) {
          return 32;
        } else {
          return 31;
        }
      }
      /**
     * 用于业务方指定元素的C字段
     */
      function getCustomC(node) {
        if (!node) return;
        var custome = util.getValue(config.ptp_cnt_c_d, node);
        if (custome) {
          return custome;
        }
        var _attr = node.getAttribute('data-ptp-customc');
        if (_attr) {
          return {
            c: _attr,
            d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
          };
        }
        node = $(node).parents('[data-ptp-customc]')[0];
        if (!node) return;
        _attr = node.getAttribute('data-ptp-customc');
        if (_attr) {
          return {
            c: _attr,
            d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
          };
        }
      }
      // 获取容器离线化下的url
      function getOfflineUrl() {
        if (location.protocol.indexOf('file:') != -1) {
          //离线化下url需要通过插件获取
          document.addEventListener("deviceready", function () {
            if (window.hybrid && hybrid.bundle && hybrid.bundle.getUrl) {
              hybrid.bundle.getUrl(function (url) {
                if (ptpInfo) {
                  ptpInfo.refer = url;
                }
              });
            }
          }, false);
        }
      }
      function refreshPtpInfo() {
        getOfflineUrl();
        return {
          time: util.getTime(),
          sfrom: util.getCookieOrFunc(config.sfrom),
          uuid: util.getCookieOrFunc(config.uuid),
          uid: util.getCookieOrFunc(config.uid),
          cpsinfo: getCpsInfo() || '',
          refer: location.href,
          rerefer: document.referrer,
          ptp_url: util.getQuery('ptp', location.href),
          ptp_ref: ''
        };
      }
      function refreshAbcde() {
        return {
          a: getCntA(),
          b: getCntB(),
          c: 0,
          d: 0,
          e: hash.rand(5)
        };
      }
      var ptpInfo = refreshPtpInfo(),
          abcde = refreshAbcde();

      logger.ptp = ptp = {
        //获取每个打点日志的头部格式
        getPtpByType: function getPtpByType(type, eventId) {
          var platform = getPlatform();
          var result = [ptpInfo.time, 0, 'p/e', platform, logger.version, '1001', ptpInfo.uuid, ptpInfo.uid, ptpInfo.refer, ptpInfo.rerefer];
          if (type == 'p') {
            eventId = eventId || '1001';
            result[2] = 'p';
            result[5] = eventId;
            return result;
          } else if (type == 'e') {
            eventId = eventId || '50001';
            result[2] = 'e';
            result[5] = eventId;
            return result;
          }
        },
        //获取abcde字段
        getPtpCnt: function getPtpCnt(c, d) {
          if (!c) c = abcde.c;
          if (!d) d = abcde.d;
          return [abcde.a, abcde.b, c, d, abcde.e].join('.');
        },
        //获取打点ptpinfo
        getPtpInfo: function getPtpInfo() {
          var result = {};
          return util.extend(result, ptpInfo, {
            ptp_cnt: ptp.getPtpCnt()
          });
        },
        //获取打点ptpinfo和用户自定义的数据
        getPtpInfoAndExtra: function getPtpInfoAndExtra() {
          var result = ptp.getPtpInfo();
          var extra = {};
          if (config.extra) {
            for (var key in config.extra) {
              if (config.extra.hasOwnProperty(key)) {
                extra[key] = util.getValue(config.extra[key]);
              }
            }
          }
          return util.extend(result, extra);
        },
        //通过结点，创建一个ptpCnt信息
        //获取C字段逻辑:
        //1.如果指定了data-ptp-customc,则为data-ptp-customc
        //2.如果url有mt参数，则mt参数中提取C字段
        //3.从data-ptp中获取指定C字段，通过data-ptp-item获取当前元素的位置为D字段
        //4.C、D字段为0
        createPtpCnt: function createPtpCnt(node) {
          var customC = getCustomC(node);
          var mt = '',
              mtC = '',
              //麦田下提取的C字段
          keyC = 0,
              //C字段
          keyD = 0; //D字段
          if (customC) {
            return ptp.getPtpCnt(customC.c, customC.d);
          }
          if (node && node.href) {
            mt = node.href.match(config.mtRe);
          }
          //麦田参数里拿C字段
          if (mt) {
            mtC = '_mt-' + mt[2] + '-' + mt[3];
          }
          if (!mtC) {
            var $parent = $(node).parents('[data-ptp]');
            if ($parent.length) {
              keyC = $parent.attr('data-ptp');
              //获取当前元素在父级元素中的index
              var $borders = $parent.find('.data-ptp-item');
              if ($borders.length) {
                //通过data-ptp-item来划分index
                keyD = $borders.index($(node).parents('.data-ptp-item')) + 1;
              } else {
                //通过a标签的顺序获取
                keyD = $parent.find('a').index($(node)) + 1;
              }
            }
          } else {
            keyC = mtC;
          }
          if (!keyD) keyD = 0;
          return ptp.getPtpCnt(keyC, keyD);
        },
        /**
      * 将传入href拼接生成新的href
      */
        makeUrl: function makeUrl(href, ptpCnt, node) {
          var anchor = href.match(/(#.+)$/);
          href = href.replace(/(#.+)$/, '');
          href = href.replace(/ptp=[^&#]*/, '');
          if (href.indexOf('?') > -1) {
            href += '&' + ptpCnt;
          } else {
            href += '?' + ptpCnt;
          }
          href = href.replace(/[&]{2,}/g, '&').replace(/&$/, '');
          href = href.replace(/\?&/g, '?');
          var chasing = ptp.getChasingParams(href);
          var extend = ptp.getExtendParams(node);
          if (chasing) {
            href += '&' + chasing;
          }
          if (extend) {
            href += '&' + extend;
          }
          if (anchor) href += anchor[1];
          return href;
        },
        /*
      * 从url中获取需要跟踪的参数
      */
        getChasingParams: function getChasingParams(url) {
          if (url === undefined) url = '';
          if (!config.chasing) return '';
          //变成数组
          if (!config.chasing.length) {
            config.chasing = [config.chasing];
          }
          var result = [],
              key,
              value,
              hasVal;
          for (var i = 0, l = config.chasing.length; i < l; i++) {
            key = config.chasing[i];
            hasVal = util.getQuery(key, url); //url里面有没有这个值
            value = util.getQuery(key);
            if (value && !hasVal) {
              result.push(key + '=' + value);
            }
          }
          return result.join('&');
        },
        getExtendParams: function getExtendParams(node) {
          if (!node || !$(node).is('a')) {
            return '';
          }
          var result = [];
          var extend = config.urlExtend || [];
          for (var i = 0, l = extend.length; i < l; i++) {
            var key = extend[i];
            var value = $(node).attr('data-ext-' + key);
            if (value) {
              result.push(key + '=' + encodeURIComponent(value));
            }
          }
          return result.join('&');
        },
        /*
      * 刷新Ptp信息，当单页面url变化但页面无刷新时(pushState)，可以刷新ptp信息，以便重新打一个P事件
      */
        refreshPtp: function refreshPtp() {
          ptpInfo = refreshPtpInfo();
          abcde = refreshAbcde();
        }
      };
    })()
    //所有日志发送逻辑
    //暴露对象：logger.send
    ;(function () {
      var info = logger.info;
      var ptp = logger.ptp;
      var config = logger.config;
      var count = 0;
      //image提交打点数据 for:!ie
      var sendLogByImage = function sendLogByImage(url, data) {
        data = data || {};
        var params = [];
        for (var key in data) {
          var value = data[key];
          if (!value) {
            value = '';
          }
          value = encodeURIComponent(value);
          params.push(key + '=' + value);
        }
        params = params.join('&');
        if (url.indexOf('?') > -1) {
          url = url + '&' + params;
        } else {
          url = url + '?' + params;
        }
        var _imgObject = new Image();
        _imgObject.src = url;
      },

      //表彰post提交打点数据 for:ie
      sendLogByIframe = function sendLogByIframe(url, data) {
        data = data || {};
        var id = count++;
        var iframe;
        try {
          iframe = document.createElement('<iframe name="' + id + '">');
        } catch (ex) {
          iframe = document.createElement('iframe');
          iframe.setAttribute('name', id);
        }
        try {
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          iframe.contentWindow.name = id;

          var form = document.createElement('form');
          form.setAttribute('method', 'POST');
          form.setAttribute('action', url);
          form.setAttribute('target', id);

          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              var input = document.createElement('input');
              input.setAttribute('type', 'hidden');
              input.setAttribute('name', key);
              input.setAttribute('value', data[key]);

              form.appendChild(input);
            }
          }

          document.body.appendChild(form);
          form.submit();
          util.registerEvent(iframe, 'load', function () {
            try {
              document.body.removeChild(form);
              document.body.removeChild(iframe);
            } catch (ex) {}
          });
        } catch (ex) {
          console.log(ERRMSG + ex);
        }
      };

      var send = {
        //前端发送打点数据接口, ie下表单post，其他img请求
        sendLog: function sendLog(url, data) {
          var isIE = util.getIEVersion() != -1;
          if (isIE) {
            sendLogByIframe(url, data);
          } else {
            sendLogByImage(url, data);
          }
        },
        //在app里用tracer事件打点
        sendAppLog: function sendAppLog(eventId, params) {
          eventId = eventId + '';
          if (config.nativeLog && config.nativeLog.logE) {
            return config.nativeLog.logE(eventId, params);
          }
          if (window.hdp && window.hdp['do']) {
            hdp['do']('mgj.tracker.sendEvent', eventId, params);
          } else {
            document.addEventListener("deviceready", function () {
              if (window.mgj && mgj.tracker && mgj.tracker.sendEvent) {
                mgj.tracker.sendEvent(eventId, params);
              }
            }, false);
          }
        },
        //app的pevent插件打页面的p事件
        logAppPevent: function logAppPevent(ptp_cnt) {
          if (config.nativeLog && config.nativeLog.logP) {
            return config.nativeLog.logP(ptp_cnt);
          }
          if (window.hdp && window.hdp['do']) {
            hdp['do']('mgj.pevent', ptp_cnt).then(function () {}, function (err) {
              //pevent插件800前都有一个bug，成功调用也会报错!
              console.log('pevent:' + err);
            });
          } else {
            document.addEventListener("deviceready", function () {
              if (window.mgj && mgj.pevent) {
                mgj.pevent(function () {}, null, ptp_cnt);
              }
            }, false);
          }
        },
        logData: function logData(type, eventId, json) {
          var _params = ptp.getPtpByType(type, eventId);
          _params.push(util.stringify(json));
          if (!info.isNative) {
            //mogujie主客里
            send.sendLog(config.LogUrl, {
              v: 1,
              data: _params.join('\t')
            });
          } else {
            send.sendAppLog(eventId, json);
          }
        }

      };
      logger.send = send;
    })()
    //打点核心逻辑：
    //1.绑定a标签点击事件
    //2.点击事件处理，添加ptp参数到url
    //3.跳转url
    ;(function () {
      var config = logger.config;
      var ptp = logger.ptp;

      //给标签url跳转前插入ptp信息
      function insertPtpInfo(node) {
        var href = node.href;
        //mtalk/下不打点
        if (href.indexOf('mogujie.com/mtalk/') > -1) return;
        //不在打点域名下
        if (!config.hrefRe.test(href) && !config.mgjRe.test(href)) return;

        var id = node.getAttribute('data-ptp-cache-id');
        href = node.getAttribute('href');

        if (!id || !config.ptpRe.test(id)) {
          id = ptp.createPtpCnt(node);
          node.setAttribute('data-ptp-cache-id', id);
        }
        node.href = ptp.makeUrl(href, 'ptp=' + id, node);
      }

      //点击事件处理
      function handleClickEvent(event) {
        /*jshint scripturl:true*/
        var _event = event || window.event,
            target = _event.target || _event.srcElement,
            aLink = target.nodeName === 'A' ? target : $(target).parents('a')[0],
            areaLink = target.nodeName === 'AREA' ? target : null;
        if (areaLink) {
          aLink = areaLink;
        }
        //没有连接
        if (!aLink) return;
        if (aLink.href && aLink.href.indexOf('javascript:') > -1) return;
        insertPtpInfo(aLink);
      }

      //bind事件
      // var mouseDown = 'tap' in document.createElement('div') ? 'tap' : 'mousedown';
      // util.registerEvent(document, mouseDown, handleClickEvent);
      //@note:绑定touchstart，部分页面添加了fastclick，所以要绑定touchstart
      // util.registerEvent(document, 'touchstart', handleClickEvent);
    })();
    //打点初始化函数:
    //1.页面自动打点P事件
    //2.暴露接口函数
    var ptp = logger.ptp;
    var loggerInfo = ptp.getPtpInfoAndExtra();
    var config = logger.config;
    var send = logger.send;

    function logPEvent() {
      if (!logger.info.isNative) {
        //打到log.php
        var pEventId = util.getValue(config.pEventId);
        send.logData('p', pEventId, loggerInfo);
        if (config.EnableLogMoGuJs) {
          //打到mogu.js
          send.sendLog(config.LogMoGuJsUrl, loggerInfo);
        }
      } else {
        //在主客下通过插件来打p事件
        var cnt = ptp.getPtpCnt();
        send.logAppPevent(cnt);
      }
    }

    //框架自动打一个P事件
    logPEvent();

    /*
    * 刷新页面Ptp信息并打一个P事件
    * 主要用于单页面应用通过pushState切换页面（浏览器无刷新）时进行P事件打点
    * 其他情况下请不要主动调用这个方法
    */
    logger.refreshPevent = function () {
      logger.ptp.refreshPtp();
      loggerInfo = logger.ptp.getPtpInfoAndExtra();
      logPEvent();
    };
    /*
    * 自定义打点 指定事件id和打点数据
    * eventId: number 事件ID,每个事件id都需要先注册后使用，请与业务方、BI确认
    * json: object 自定义打点数据
    */
    logger.log = function (eventId, json) {
      if (eventId === undefined) {
        return;
      }
      json = json || {};
      logger.send.logData('e', eventId, util.extend({}, loggerInfo, json));
    };

    /*
    * 为指定url构造一个带ptp参数的url, 用于js代码跳转页面时，添加ptp信息
    * url: string 需要构造的url地址，如果地址中包含ptp参数，则直接返回
    * node: DOM元素，如果是页面上的A标签元素，会通过传入的node来获取自定义的C、D字段，否则C、D字段为0
    */
    logger.generatePtpParams = function (url, node) {
      if (url === undefined) {
        return;
      }
      var ptpCnt = '';
      if (node) {
        //通过结点获取ptp信息
        ptpCnt = ptp.createPtpCnt(node);
      } else {
        //获取ptp信息C、D字段为0
        ptpCnt = ptp.getPtpCnt();
      }
      return ptp.makeUrl(url, 'ptp=' + ptpCnt, node);
    };
    //兼容amd|cmd代码
    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
      module.exports = logger;
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return logger;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  })(window);

/***/ }
/******/ ]);