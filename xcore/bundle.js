console.log('start at: ' + (+new Date));
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./source/pages/home/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _ptp = __webpack_require__(/*! ./ptp */ 1);
  
  var _ptp2 = _interopRequireDefault(_ptp);
  
  var _xcoreVue = __webpack_require__(/*! ../../../../xcore-vue/dist/xcore-vue.js */ 2);
  
  var _xcoreVue2 = _interopRequireDefault(_xcoreVue);
  
  var _logger = __webpack_require__(/*! @mogu/logger/dist/logger.xcore */ 3);
  
  var _logger2 = _interopRequireDefault(_logger);
  
  var _xcoreA = __webpack_require__(/*! @component/xcore-a */ 4);
  
  var _xcoreA2 = _interopRequireDefault(_xcoreA);
  
  var _app = __webpack_require__(/*! ./app */ 7);
  
  var _app2 = _interopRequireDefault(_app);
  
  var _index = __webpack_require__(/*! ./modules/share/index */ 57);
  
  var _index2 = _interopRequireDefault(_index);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // 引入打点 ！如果去掉这个将不会带上打点功能
  window.__logger = _logger2.default;
  // register
  _xcoreVue2.default.component('a', _xcoreA2.default);
  
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
/*!**********************************!*\
  !*** ./source/pages/home/ptp.js ***!
  \**********************************/
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  window.PTP_PARAMS = {
    "c_action": "cube%40%40brandstation",
    "ptp_cnt_a": "m1",
    "time": new Date().getTime(),
    "ptp_cnt_b": "_mf1_921_4485"
  };
  
  exports.default = window.PTP_PARAMS;

/***/ },
/* 2 */
/*!**************************************!*\
  !*** ../xcore-vue/dist/xcore-vue.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

  (function webpackUniversalModuleDefinition(root, factory) {
    if(true)
      module.exports = factory();
    else if(typeof define === 'function' && define.amd)
      define([], factory);
    else {
      var a = factory();
      for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
  })(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};
  /******/
  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {
  /******/
  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      return installedModules[moduleId].exports;
  /******/
  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };
  /******/
  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/    // Flag the module as loaded
  /******/    module.loaded = true;
  /******/
  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }
  /******/
  /******/
  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;
  /******/
  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;
  /******/
  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";
  /******/
  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    module.exports = __webpack_require__(1)['default'];
  
  /***/ },
  /* 1 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _xcoreRuntime = __webpack_require__(2);
    
    var _xcoreRuntime2 = _interopRequireDefault(_xcoreRuntime);
    
    var _index = __webpack_require__(8);
    
    var _index2 = __webpack_require__(40);
    
    var _index3 = __webpack_require__(63);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var idToTemplate = (0, _index.cached)(function (id) {
      var el = (0, _index2.query)(id);
      return el && el.innerHTML;
    });
    
    var mount = _xcoreRuntime2.default.prototype.$mount;
    _xcoreRuntime2.default.prototype.$mount = function (el, hydrating) {
      // start dom
      if (el === '#app') {
        el = document.createElement( true ? 'view' : 'div');
      }
    
      var options = this.$options;
      // resolve template/el and convert to render function
      if (!options.render) {
        var template = options.template;
        if (template) {
          if (typeof template === 'string') {
            if (template.charAt(0) === '#') {
              template = idToTemplate(template);
            }
          } else if (template.nodeType) {
            template = template.innerHTML;
          } else {
            if (true) {
              (0, _index.warn)('invalid template option:' + template, this);
            }
            return this;
          }
        } else {
          if (true) {
            (0, _index.warn)('if el is not #app there must have a template in options', this);
          }
        }
        if (template) {
          var _compileToFunctions = (0, _index3.compileToFunctions)(template, {
            delimiters: options.delimiters,
            warn: _index.warn
          }, this);
    
          var render = _compileToFunctions.render;
          var staticRenderFns = _compileToFunctions.staticRenderFns;
    
          options.render = render;
          options.staticRenderFns = staticRenderFns;
        }
      }
      return mount.call(this, el, hydrating);
    };
    
    /**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */
    // function getOuterHTML (el: Element): string {
    //   if (el.outerHTML) {
    //     return el.outerHTML
    //   } else {
    //     const container = document.createElement('div')
    //     container.appendChild(el.cloneNode(true))
    //     return container.innerHTML
    //   }
    // }
    
    _xcoreRuntime2.default.compile = _index3.compileToFunctions;
    
    exports.default = _xcoreRuntime2.default;
  
  /***/ },
  /* 2 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _index = __webpack_require__(3);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _util = __webpack_require__(6);
    
    var _patch = __webpack_require__(38);
    
    var _index3 = __webpack_require__(56);
    
    var _index4 = _interopRequireDefault(_index3);
    
    var _index5 = __webpack_require__(61);
    
    var _index6 = _interopRequireDefault(_index5);
    
    var _index7 = __webpack_require__(40);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    // install platform specific utils
    _index2.default.config.isUnknownElement = _index7.isUnknownElement;
    
    _index2.default.config.isReservedTag = _index7.isReservedTag;
    _index2.default.config.mustUseProp = _index7.mustUseProp;
    
    // install platform runtime directives & components
    (0, _util.extend)(_index2.default.options.directives, _index4.default);
    (0, _util.extend)(_index2.default.options.components, _index6.default);
    
    // install platform patch function
    _index2.default.prototype.__patch__ = _config2.default._isServer ? _util.noop : _patch.patch;
    
    // wrap mount
    _index2.default.prototype.$mount = function (el, hydrating) {
      return this._mount(el && (0, _index7.query)(el), hydrating);
    };
    
    exports.default = _index2.default;
  
  /***/ },
  /* 3 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _index = __webpack_require__(7);
    
    var _index2 = __webpack_require__(13);
    
    var _index3 = _interopRequireDefault(_index2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    (0, _index.initGlobalAPI)(_index3.default);
    
    Object.defineProperty(_index3.default.prototype, '$isServer', {
      get: function get() {
        return _config2.default._isServer;
      }
    });
    
    _index3.default.version = '0.2.10';
    
    exports.default = _index3.default;
  
  /***/ },
  /* 4 */
  /***/ function(module, exports, __webpack_require__) {
  
    /* WEBPACK VAR INJECTION */(function(process) {'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _util = __webpack_require__(6);
    
    var config = {
      /**
       * Option merge strategies (used in core/util/options)
       */
      optionMergeStrategies: Object.create(null),
    
      /**
       * Whether to suppress warnings.
       */
      silent: false,
    
      /**
       * Whether to enable devtools
       */
      devtools: ("development") !== 'production',
    
      /**
       * Error handler for watcher errors
       */
      errorHandler: null,
    
      /**
       * Ignore certain custom elements
       */
      ignoredElements: null,
    
      /**
       * Custom user key aliases for v-on
       */
      keyCodes: Object.create(null),
    
      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: _util.no,
    
      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: _util.no,
    
      /**
       * Get the namespace of an element
       */
      getTagNamespace: _util.noop,
    
      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: _util.no,
    
      /**
       * List of asset types that a component can own.
       */
      _assetTypes: ['component', 'directive', 'filter'],
    
      /**
       * List of lifecycle hooks.
       */
      _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],
    
      /**
       * Max circular updates allowed in a scheduler flush cycle.
       */
      _maxUpdateCount: 100,
    
      /**
       * Server rendering?
       */
      _isServer: process.env.VUE_ENV === 'server'
    };
    
    exports.default = config;
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))
  
  /***/ },
  /* 5 */
  /***/ function(module, exports) {
  
    // shim for using process in browser
    var process = module.exports = {};
    
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    
    var cachedSetTimeout;
    var cachedClearTimeout;
    
    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    } ())
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    
    
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    
    
    
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
    
        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
  
  
  /***/ },
  /* 6 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.isLowDevice = isLowDevice;
    exports._toString = _toString;
    exports.toNumber = toNumber;
    exports.makeMap = makeMap;
    exports.remove = remove;
    exports.hasOwn = hasOwn;
    exports.isPrimitive = isPrimitive;
    exports.cached = cached;
    exports.bind = bind;
    exports.toArray = toArray;
    exports.extend = extend;
    exports.isObject = isObject;
    exports.isPlainObject = isPlainObject;
    exports.toObject = toObject;
    exports.isEmptyObject = isEmptyObject;
    exports.throttle = throttle;
    exports.noop = noop;
    exports.genStaticKeys = genStaticKeys;
    
    
    /**
     * is lower device
     */
    function isLowDevice() {
      var ua = navigator.userAgent.toLocaleLowerCase();
      var lowerDevice = /android 4.2|android 4.3/;
    
      return lowerDevice.test(ua) && ua.indexOf('xcore') < 0;
    }
    
    /**
     * Convert a value to a string that is actually rendered.
     */
    function _toString(val) {
      return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
    }
    
    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber(val) {
      var n = parseFloat(val, 10);
      return n || n === 0 ? n : val;
    }
    
    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? function (val) {
        return map[val.toLowerCase()];
      } : function (val) {
        return map[val];
      };
    }
    
    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = exports.isBuiltInTag = makeMap('slot,component', true);
    
    /**
     * Remove an item from an array
     */
    function remove(arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1);
        }
      }
    }
    
    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }
    
    /**
     * Check if value is primitive
     */
    function isPrimitive(value) {
      return typeof value === 'string' || typeof value === 'number';
    }
    
    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
      var cache = Object.create(null);
      return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    }
    
    /**
     * Camelize a hyphen-delmited string.
     */
    var camelizeRE = /-(\w)/g;
    var camelize = exports.camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
    });
    
    /**
     * Capitalize a string.
     */
    var capitalize = exports.capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    
    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /([^-])([A-Z])/g;
    var hyphenate = exports.hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
    });
    
    /**
     * Simple bind, faster than native
     */
    function bind(fn, ctx) {
      function boundFn(a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
      }
      // record original fn length
      boundFn._length = fn.length;
      return boundFn;
    }
    
    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray(list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret;
    }
    
    /**
     * Mix properties into target object.
     */
    function extend(to, _from) {
      for (var _key in _from) {
        to[_key] = _from[_key];
      }
      return to;
    }
    
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
      return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
    }
    
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    var toString = Object.prototype.toString;
    var OBJECT_STRING = '[object Object]';
    function isPlainObject(obj) {
      return toString.call(obj) === OBJECT_STRING;
    }
    
    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
      var res = arr[0] || {};
      for (var i = 1; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res;
    }
    
    function isEmptyObject(obj) {
      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return true;
    
      for (var k in obj) {
        if ({}.hasOwnProperty.call(obj, k)) return false;
      }
      return true;
    }
    
    /**
     * 节流函数
     * @param  {function} fn 传入函数
     * @param  {number} delay 执行的时间间隔
     * @param  {number} mustRunDelay 每隔 xx ms至少执行一次
     * @return {function} 返回函数
     */
    function throttle(fn, delay, mustRunDelay) {
      var timer = null;
      var tStart = void 0;
    
      return function () {
        var context = this;
        var tCurr = +new Date();
    
        var args = new Array(arguments.length);
        for (var i = 0, l = arguments.length; i < l; i++) {
          args[i] = arguments[i];
        }
    
        clearTimeout(timer);
    
        if (!tStart) {
          tStart = tCurr;
        }
        if (tCurr - tStart >= mustRunDelay) {
          fn.apply(context, args);
          tStart = tCurr;
        } else {
          timer = setTimeout(function () {
            fn.apply(context, args);
          }, delay);
        }
      };
    }
    
    /**
     * Perform no operation.
     */
    function noop() {}
    
    /**
     * Always return false.
     */
    var no = exports.no = function no() {
      return false;
    };
    
    /**
     * Generate a static keys string from compiler modules.
     */
    function genStaticKeys(modules) {
      return modules.reduce(function (keys, m) {
        return keys.concat(m.staticKeys || []);
      }, []).join(',');
    }
    
    /**
     * Object.assign Polyfill
     */
    var objectAssign = exports.objectAssign = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  
  /***/ },
  /* 7 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initGlobalAPI = initGlobalAPI;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _index = __webpack_require__(8);
    
    var util = _interopRequireWildcard(_index);
    
    var _use = __webpack_require__(32);
    
    var _mixin = __webpack_require__(33);
    
    var _extend = __webpack_require__(34);
    
    var _assets = __webpack_require__(35);
    
    var _index2 = __webpack_require__(20);
    
    var _index3 = __webpack_require__(36);
    
    var _index4 = _interopRequireDefault(_index3);
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function initGlobalAPI(Vue) {
      // config
      var configDef = {};
      configDef.get = function () {
        return _config2.default;
      };
      if (true) {
        configDef.set = function () {
          util.warn('Do not replace the Vue.config object, set individual fields instead.');
        };
      }
      Object.defineProperty(Vue, 'config', configDef);
      Vue.util = util;
      Vue.set = _index2.set;
      Vue.delete = _index2.del;
      Vue.nextTick = util.nextTick;
    
      Vue.options = Object.create(null);
      _config2.default._assetTypes.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });
    
      util.extend(Vue.options.components, _index4.default);
    
      (0, _use.initUse)(Vue);
      (0, _mixin.initMixin)(Vue);
      (0, _extend.initExtend)(Vue);
      (0, _assets.initAssetRegisters)(Vue);
    }
  
  /***/ },
  /* 8 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _util = __webpack_require__(6);
    
    Object.keys(_util).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _util[key];
        }
      });
    });
    
    var _lang = __webpack_require__(9);
    
    Object.keys(_lang).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _lang[key];
        }
      });
    });
    
    var _dom = __webpack_require__(10);
    
    Object.keys(_dom).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _dom[key];
        }
      });
    });
    
    var _env = __webpack_require__(11);
    
    Object.keys(_env).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _env[key];
        }
      });
    });
    
    var _options = __webpack_require__(12);
    
    Object.keys(_options).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _options[key];
        }
      });
    });
    
    var _debug = __webpack_require__(29);
    
    Object.keys(_debug).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _debug[key];
        }
      });
    });
    
    var _props = __webpack_require__(30);
    
    Object.keys(_props).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _props[key];
        }
      });
    });
    
    var _render = __webpack_require__(31);
    
    Object.keys(_render).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _render[key];
        }
      });
    });
    
    var _index = __webpack_require__(20);
    
    Object.defineProperty(exports, 'defineReactive', {
      enumerable: true,
      get: function get() {
        return _index.defineReactive;
      }
    });
  
  /***/ },
  /* 9 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.isReserved = isReserved;
    exports.def = def;
    exports.parsePath = parsePath;
    exports.updateQueryStringParameter = updateQueryStringParameter;
    
    
    /**
     * Check if a string starts with $ or _
     */
    function isReserved(str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F;
    }
    
    /**
     * Define a property.
     */
    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    
    /**
     * Parse simple path.
     */
    var bailRE = /[^\w\.\$]/;
    function parsePath(path) {
      if (bailRE.test(path)) {
        return;
      } else {
        var _ret = function () {
          var segments = path.split('.');
          return {
            v: function v(obj) {
              for (var i = 0; i < segments.length; i++) {
                if (!obj) return;
                obj = obj[segments[i]];
              }
              return obj;
            }
          };
        }();
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
    
    /**
     * update query string parameter
     */
    function updateQueryStringParameter(uri, key, value) {
      var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
      var separator = uri.indexOf('?') !== -1 ? '&' : '?';
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + encodeURIComponent(value) + '$2');
      } else {
        return uri + separator + key + '=' + encodeURIComponent(value);
      }
    }
  
  /***/ },
  /* 10 */
  /***/ function(module, exports) {
  
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.signChildren = signChildren;
    
    
    /**
     * sign children with key value
     * @param {Array<VNode>} children 需要设置children
     * @param {String} key 需要设置的键
     * @param {String} value 需要设置的值
     */
    function signChildren(children, key, value) {
      for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
    
        if (child.length && child.length > 0) {
          for (var j = 0, l = child.length; j < l; j++) {
            signChildren(child[j], key, value);
          }
        } else {
          child[key] = value;
    
          if (child.children) {
            signChildren(child.children, key, value);
          }
        }
      }
    }
  
  /***/ },
  /* 11 */
  /***/ function(module, exports) {
  
    /* WEBPACK VAR INJECTION */(function(global) {'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    /* global MutationObserver */
    // can we use __proto__?
    var hasProto = exports.hasProto = '__proto__' in {};
    
    // Browser environment sniffing
    var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
    
    // detect devtools
    var devtools = exports.devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    
    // UA sniffing for working around browser-specific quirks
    var UA = exports.UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
    var iosVersionMatch = UA && isIos && UA.match(/os ([\d_]+)/);
    var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');
    
    // MutationObserver is unreliable in iOS 9.3 UIWebView
    // detecting it by checking presence of IndexedDB
    // ref #3027
    var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;
    
    /**
     * Defer a task to execute it asynchronously. Ideally this
     * should be executed as a microtask, so we leverage
     * MutationObserver if it's available, and fallback to
     * setTimeout(0).
     *
     * @param {Function} cb
     * @param {Object} ctx
     */
    var nextTick = exports.nextTick = function () {
      var callbacks = [];
      var pending = false;
      var timerFunc = void 0;
      function nextTickHandler() {
        pending = false;
        var copies = callbacks.slice(0);
        callbacks = [];
        for (var i = 0; i < copies.length; i++) {
          copies[i]();
        }
      }
    
      /* istanbul ignore else */
      if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
        (function () {
          var counter = 1;
          var observer = new MutationObserver(nextTickHandler);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, {
            characterData: true
          });
          timerFunc = function timerFunc() {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
          };
        })();
      } else {
        // webpack attempts to inject a shim for setImmediate
        // if it is used as a global, so we have to work around that to
        // avoid bundling unnecessary code.
        var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
        timerFunc = context.setImmediate || setTimeout;
      }
      return function (cb, ctx) {
        var func = ctx ? function () {
          cb.call(ctx);
        } : cb;
        callbacks.push(func);
        if (pending) return;
        pending = true;
        timerFunc(nextTickHandler, 0);
      };
    }();
    
    var _Set = void 0;
    /* istanbul ignore if */
    if (typeof Set !== 'undefined' && /native code/.test(Set.toString())) {
      // use native Set when available.
      exports._Set = _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      exports._Set = _Set = function () {
        function Set() {
          _classCallCheck(this, Set);
    
          this.set = Object.create(null);
        }
    
        _createClass(Set, [{
          key: 'has',
          value: function has(key) {
            return this.set[key] !== undefined;
          }
        }, {
          key: 'add',
          value: function add(key) {
            this.set[key] = 1;
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.set = Object.create(null);
          }
        }]);
    
        return Set;
      }();
    }
    
    exports._Set = _Set;
    /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
  
  /***/ },
  /* 12 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeOptions = mergeOptions;
    exports.resolveAsset = resolveAsset;
    
    var _index = __webpack_require__(13);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _debug = __webpack_require__(29);
    
    var _index3 = __webpack_require__(20);
    
    var _util = __webpack_require__(6);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = _config2.default.optionMergeStrategies;
    
    /**
     * Options with restrictions
     */
    
    
    if (true) {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          (0, _debug.warn)('option "' + key + '" can only be used during instance ' + 'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
      };
    
      strats.name = function (parent, child, vm) {
        if (vm && child) {
          (0, _debug.warn)('options "name" can only be used as a component definition option, ' + 'not during instance creation.');
        }
        return defaultStrat(parent, child);
      };
    }
    
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData(to, from) {
      var key = void 0,
          toVal = void 0,
          fromVal = void 0;
      for (key in from) {
        toVal = to[key];
        fromVal = from[key];
        if (!(0, _util.hasOwn)(to, key)) {
          (0, _index3.set)(to, key, fromVal);
        } else if ((0, _util.isObject)(toVal) && (0, _util.isObject)(fromVal)) {
          mergeData(toVal, fromVal);
        }
      }
      return to;
    }
    
    /**
     * Data
     */
    strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal;
        }
        if (typeof childVal !== 'function') {
          ("development") !== 'production' && (0, _debug.warn)('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
          return mergeData(childVal.call(this), parentVal.call(this));
        };
      } else if (parentVal || childVal) {
        return function mergedInstanceDataFn() {
          // instance merge
          var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
          var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
          if (instanceData) {
            return mergeData(instanceData, defaultData);
          } else {
            return defaultData;
          }
        };
      }
    };
    
    /**
     * Hooks and param attributes are merged as arrays.
     */
    function mergeHook(parentVal, childVal) {
      return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    }
    
    _config2.default._lifecycleHooks.forEach(function (hook) {
      strats[hook] = mergeHook;
    });
    
    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets(parentVal, childVal) {
      var res = Object.create(parentVal || null);
      return childVal ? (0, _util.extend)(res, childVal) : res;
    }
    
    _config2.default._assetTypes.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });
    
    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (parentVal, childVal) {
      /* istanbul ignore if */
      if (!childVal) return parentVal;
      if (!parentVal) return childVal;
      var ret = {};
      (0, _util.extend)(ret, parentVal);
      for (var key in childVal) {
        var parent = ret[key];
        var child = childVal[key];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key] = parent ? parent.concat(child) : [child];
      }
      return ret;
    };
    
    /**
     * Other object hashes.
     */
    strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
      if (!childVal) return parentVal;
      if (!parentVal) return childVal;
      var ret = Object.create(null);
      (0, _util.extend)(ret, parentVal);
      (0, _util.extend)(ret, childVal);
      return ret;
    };
    
    /**
     * Default strategy.
     */
    var defaultStrat = function defaultStrat(parentVal, childVal) {
      return childVal === undefined ? parentVal : childVal;
    };
    
    /**
     * Make sure component options get converted to actual
     * constructors.
     */
    function normalizeComponents(options) {
      if (options.components) {
        var components = options.components;
        var def = void 0;
        for (var key in components) {
          var lower = key.toLowerCase();
          if ((0, _util.isBuiltInTag)(lower) || _config2.default.isReservedTag(lower)) {
            ("development") !== 'production' && (0, _debug.warn)('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
            continue;
          }
          def = components[key];
          if ((0, _util.isPlainObject)(def)) {
            components[key] = _index2.default.extend(def);
          }
        }
      }
    }
    
    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps(options) {
      var props = options.props;
      if (!props) return;
      var res = {};
      var i = void 0,
          val = void 0,
          name = void 0;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = (0, _util.camelize)(val);
            res[name] = { type: null };
          } else if (true) {
            (0, _debug.warn)('props must be strings when using array syntax.');
          }
        }
      } else if ((0, _util.isPlainObject)(props)) {
        for (var key in props) {
          val = props[key];
          name = (0, _util.camelize)(key);
          res[name] = (0, _util.isPlainObject)(val) ? val : { type: val };
        }
      }
      options.props = res;
    }
    
    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives(options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def = dirs[key];
          if (typeof def === 'function') {
            dirs[key] = { bind: def, update: def };
          }
        }
      }
    }
    
    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions(parent, child, vm) {
      normalizeComponents(child);
      normalizeProps(child);
      normalizeDirectives(child);
      var extendsFrom = child.extends;
      if (extendsFrom) {
        parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          var mixin = child.mixins[i];
          if (mixin.prototype instanceof _index2.default) {
            mixin = mixin.options;
          }
          parent = mergeOptions(parent, mixin, vm);
        }
      }
      var options = {};
      var key = void 0;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!(0, _util.hasOwn)(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options;
    }
    
    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset(options, type, id, warnMissing) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return;
      }
      var assets = options[type];
      var res = assets[id] ||
      // camelCase ID
      assets[(0, _util.camelize)(id)] ||
      // Pascal Case ID
      assets[(0, _util.capitalize)((0, _util.camelize)(id))];
      if (("development") !== 'production' && warnMissing && !res) {
        (0, _debug.warn)('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
      }
      return res;
    }
  
  /***/ },
  /* 13 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _init = __webpack_require__(14);
    
    var _state = __webpack_require__(16);
    
    var _render = __webpack_require__(22);
    
    var _events = __webpack_require__(28);
    
    var _lifecycle = __webpack_require__(27);
    
    function Vue(options) {
      this._init(options);
    }
    
    (0, _init.initMixin)(Vue);
    (0, _state.stateMixin)(Vue);
    (0, _events.eventsMixin)(Vue);
    (0, _lifecycle.lifecycleMixin)(Vue);
    (0, _render.renderMixin)(Vue);
    
    exports.default = Vue;
  
  /***/ },
  /* 14 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initMixin = initMixin;
    
    var _proxy = __webpack_require__(15);
    
    var _state = __webpack_require__(16);
    
    var _render = __webpack_require__(22);
    
    var _events = __webpack_require__(28);
    
    var _lifecycle = __webpack_require__(27);
    
    var _index = __webpack_require__(8);
    
    var uid = 0;
    
    function initMixin(Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        // a flag to avoid this being observed
        vm._isVue = true;
    
        vm.$Vue = Vue;
    
        // merge options
        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = (0, _index.mergeOptions)(resolveConstructorOptions(vm), options || {}, vm);
        }
        /* istanbul ignore else */
        if (true) {
          (0, _proxy.initProxy)(vm);
        } else {
          vm._renderProxy = vm;
        }
        // expose real self
        vm._self = vm;
        (0, _lifecycle.initLifecycle)(vm);
        (0, _events.initEvents)(vm);
        (0, _lifecycle.callHook)(vm, 'beforeCreate');
        (0, _state.initState)(vm);
        (0, _lifecycle.callHook)(vm, 'created');
        (0, _render.initRender)(vm);
      };
    
      function initInternalComponent(vm, options) {
        var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
        // doing this because it's faster than dynamic enumeration.
        opts.parent = options.parent;
        opts.propsData = options.propsData;
        opts._parentVnode = options._parentVnode;
        opts._parentListeners = options._parentListeners;
        opts._renderChildren = options._renderChildren;
        opts._componentTag = options._componentTag;
        if (options.render) {
          opts.render = options.render;
          opts.staticRenderFns = options.staticRenderFns;
        }
      }
    
      function resolveConstructorOptions(vm) {
        var Ctor = vm.constructor;
        var options = Ctor.options;
        if (Ctor.super) {
          var superOptions = Ctor.super.options;
          var cachedSuperOptions = Ctor.superOptions;
          if (superOptions !== cachedSuperOptions) {
            // super option changed
            Ctor.superOptions = superOptions;
            options = Ctor.options = (0, _index.mergeOptions)(superOptions, Ctor.extendOptions);
            if (options.name) {
              options.components[options.name] = Ctor;
            }
          }
        }
        return options;
      }
    }
  
  /***/ },
  /* 15 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initProxy = undefined;
    
    var _index = __webpack_require__(8);
    
    var hasProxy = void 0,
        proxyHandlers = void 0,
        initProxy = void 0; /* not type checking this file because flow doesn't play well with Proxy */
    
    if (true) {
      (function () {
        var allowedGlobals = (0, _index.makeMap)('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
        );
    
        hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);
    
        proxyHandlers = {
          has: function has(target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
            if (!has && !isAllowed) {
              (0, _index.warn)('Property or method "' + key + '" is not defined on the instance but ' + 'referenced during render. Make sure to declare reactive data ' + 'properties in the data option.', target);
            }
            return has || !isAllowed;
          }
        };
    
        exports.initProxy = initProxy = function initProxy(vm) {
          if (hasProxy) {
            vm._renderProxy = new Proxy(vm, proxyHandlers);
          } else {
            vm._renderProxy = vm;
          }
        };
      })();
    }
    
    exports.initProxy = initProxy;
  
  /***/ },
  /* 16 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initState = initState;
    exports.stateMixin = stateMixin;
    
    var _watcher = __webpack_require__(17);
    
    var _watcher2 = _interopRequireDefault(_watcher);
    
    var _dep = __webpack_require__(18);
    
    var _dep2 = _interopRequireDefault(_dep);
    
    var _index = __webpack_require__(20);
    
    var _index2 = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function initState(vm) {
      vm._watchers = [];
      initProps(vm);
      initData(vm);
      initComputed(vm);
      initMethods(vm);
      initWatch(vm);
    }
    
    function initProps(vm) {
      var props = vm.$options.props;
      var propsData = vm.$options.propsData;
      if (props) {
        var keys = vm.$options._propKeys = Object.keys(props);
        var isRoot = !vm.$parent;
        // root instance props should be converted
        _index.observerState.shouldConvert = isRoot;
    
        var _loop = function _loop(i) {
          var key = keys[i];
          /* istanbul ignore else */
          if (true) {
            (0, _index.defineReactive)(vm, key, (0, _index2.validateProp)(key, props, propsData, vm), function () {
              if (vm.$parent && !_index.observerState.isSettingProps) {
                (0, _index2.warn)('Avoid mutating a prop directly since the value will be ' + 'overwritten whenever the parent component re-renders. ' + 'Instead, use a data or computed property based on the prop\'s ' + ('value. Prop being mutated: "' + key + '"'), vm);
              }
            });
          } else {
            (0, _index.defineReactive)(vm, key, (0, _index2.validateProp)(key, props, propsData, vm));
          }
        };
    
        for (var i = 0; i < keys.length; i++) {
          _loop(i);
        }
        _index.observerState.shouldConvert = true;
      }
    }
    
    function initData(vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
      if (!(0, _index2.isPlainObject)(data)) {
        data = {};
        ("development") !== 'production' && (0, _index2.warn)('data functions should return an object.', vm);
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var i = keys.length;
      while (i--) {
        if (props && (0, _index2.hasOwn)(props, keys[i])) {
          ("development") !== 'production' && (0, _index2.warn)('The data property "' + keys[i] + '" is already declared as a prop. ' + 'Use prop default value instead.', vm);
        } else {
          proxy(vm, keys[i]);
        }
      }
      // observe data
      (0, _index.observe)(data);
      data.__ob__ && data.__ob__.vmCount++;
    }
    
    var computedSharedDefinition = {
      enumerable: true,
      configurable: true,
      get: _index2.noop,
      set: _index2.noop
    };
    
    function initComputed(vm) {
      var computed = vm.$options.computed;
      if (computed) {
        for (var _key in computed) {
          var userDef = computed[_key];
          if (typeof userDef === 'function') {
            computedSharedDefinition.get = makeComputedGetter(userDef, vm);
            computedSharedDefinition.set = _index2.noop;
          } else {
            computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _index2.bind)(userDef.get, vm) : _index2.noop;
            computedSharedDefinition.set = userDef.set ? (0, _index2.bind)(userDef.set, vm) : _index2.noop;
          }
          Object.defineProperty(vm, _key, computedSharedDefinition);
        }
      }
    }
    
    function makeComputedGetter(getter, owner) {
      var watcher = new _watcher2.default(owner, getter, _index2.noop, {
        lazy: true
      });
      return function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (_dep2.default.target) {
          watcher.depend();
        }
        return watcher.value;
      };
    }
    
    function initMethods(vm) {
      var methods = vm.$options.methods;
      if (methods) {
        for (var _key2 in methods) {
          vm[_key2] = (0, _index2.bind)(methods[_key2], vm);
        }
      }
    }
    
    function initWatch(vm) {
      var watch = vm.$options.watch;
      if (watch) {
        for (var _key3 in watch) {
          var handler = watch[_key3];
          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              createWatcher(vm, _key3, handler[i]);
            }
          } else {
            createWatcher(vm, _key3, handler);
          }
        }
      }
    }
    
    function createWatcher(vm, key, handler) {
      var options = void 0;
      if ((0, _index2.isPlainObject)(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      vm.$watch(key, handler, options);
    }
    
    function stateMixin(Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () {
        return this._data;
      };
      if (true) {
        dataDef.set = function (newData) {
          (0, _index2.warn)('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
    
      Vue.prototype.$set = _index.set;
      Vue.prototype.$delete = _index.del;
    
      Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        options = options || {};
        options.user = true;
        var watcher = new _watcher2.default(vm, expOrFn, cb, options);
        if (options.immediate) {
          cb.call(vm, watcher.value);
        }
        return function unwatchFn() {
          watcher.teardown();
        };
      };
    }
    
    function proxy(vm, key) {
      if (!(0, _index2.isReserved)(key)) {
        Object.defineProperty(vm, key, {
          configurable: true,
          enumerable: true,
          get: function proxyGetter() {
            return vm._data[key];
          },
          set: function proxySetter(val) {
            vm._data[key] = val;
          }
        });
      }
    }
  
  /***/ },
  /* 17 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _dep = __webpack_require__(18);
    
    var _dep2 = _interopRequireDefault(_dep);
    
    var _scheduler = __webpack_require__(19);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var uid = 0;
    
    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    
    var Watcher = function () {
      function Watcher(vm, expOrFn, cb) {
        var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    
        _classCallCheck(this, Watcher);
    
        this.vm = vm;
        vm._watchers.push(this);
        // options
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.expression = expOrFn.toString();
        this.cb = cb;
        this.id = ++uid; // uid for batching
        this.active = true;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _index._Set();
        this.newDepIds = new _index._Set();
        // parse expression for getter
        if (typeof expOrFn === 'function') {
          this.getter = expOrFn;
        } else {
          this.getter = (0, _index.parsePath)(expOrFn);
          if (!this.getter) {
            this.getter = function () {};
            ("development") !== 'production' && (0, _index.warn)('Failed watching path: "' + expOrFn + '" ' + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
          }
        }
        this.value = this.lazy ? undefined : this.get();
      }
    
      /**
       * Evaluate the getter, and re-collect dependencies.
       */
    
    
      _createClass(Watcher, [{
        key: 'get',
        value: function get() {
          (0, _dep.pushTarget)(this);
          var value = this.getter.call(this.vm, this.vm);
          // "touch" every property so they are all tracked as
          // dependencies for deep watching
          if (this.deep) {
            traverse(value);
          }
          (0, _dep.popTarget)();
          this.cleanupDeps();
          return value;
        }
    
        /**
         * Add a dependency to this directive.
         */
    
      }, {
        key: 'addDep',
        value: function addDep(dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
              dep.addSub(this);
            }
          }
        }
    
        /**
         * Clean up for dependency collection.
         */
    
      }, {
        key: 'cleanupDeps',
        value: function cleanupDeps() {
          var i = this.deps.length;
          while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
              dep.removeSub(this);
            }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
        }
    
        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */
    
      }, {
        key: 'update',
        value: function update() {
          /* istanbul ignore else */
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync) {
            this.run();
          } else {
            (0, _scheduler.queueWatcher)(this);
          }
        }
    
        /**
         * Scheduler job interface.
         * Will be called by the scheduler.
         */
    
      }, {
        key: 'run',
        value: function run() {
          if (this.active) {
            var value = this.get();
            if (value !== this.value ||
            // Deep watchers and watchers on Object/Arrays should fire even
            // when the value is the same, because the value may
            // have mutated.
            (0, _index.isObject)(value) || this.deep) {
              // set new value
              var oldValue = this.value;
              this.value = value;
              if (this.user) {
                try {
                  this.cb.call(this.vm, value, oldValue);
                } catch (e) {
                  ("development") !== 'production' && (0, _index.warn)('Error in watcher "' + this.expression + '"', this.vm);
                  /* istanbul ignore else */
                  if (_config2.default.errorHandler) {
                    _config2.default.errorHandler.call(null, e, this.vm);
                  } else {
                    throw e;
                  }
                }
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
          }
        }
    
        /**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */
    
      }, {
        key: 'evaluate',
        value: function evaluate() {
          this.value = this.get();
          this.dirty = false;
        }
    
        /**
         * Depend on all deps collected by this watcher.
         */
    
      }, {
        key: 'depend',
        value: function depend() {
          var i = this.deps.length;
          while (i--) {
            this.deps[i].depend();
          }
        }
    
        /**
         * Remove self from all dependencies' subcriber list.
         */
    
      }, {
        key: 'teardown',
        value: function teardown() {
          if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed or is performing a v-for
            // re-render (the watcher list is then filtered by v-for).
            if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
              (0, _index.remove)(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
              this.deps[i].removeSub(this);
            }
            this.active = false;
          }
        }
      }]);
    
      return Watcher;
    }();
    
    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    
    
    exports.default = Watcher;
    var seenObjects = new _index._Set();
    function traverse(val, seen) {
      var i = void 0,
          keys = void 0;
      if (!seen) {
        seen = seenObjects;
        seen.clear();
      }
      var isA = Array.isArray(val);
      var isO = (0, _index.isObject)(val);
      if ((isA || isO) && Object.isExtensible(val)) {
        if (val.__ob__) {
          var depId = val.__ob__.dep.id;
          if (seen.has(depId)) {
            return;
          } else {
            seen.add(depId);
          }
        }
        if (isA) {
          i = val.length;
          while (i--) {
            traverse(val[i], seen);
          }
        } else if (isO) {
          keys = Object.keys(val);
          i = keys.length;
          while (i--) {
            traverse(val[keys[i]], seen);
          }
        }
      }
    }
  
  /***/ },
  /* 18 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    exports.pushTarget = pushTarget;
    exports.popTarget = popTarget;
    
    var _index = __webpack_require__(8);
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var uid = 0;
    
    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    
    var Dep = function () {
      function Dep() {
        _classCallCheck(this, Dep);
    
        this.id = uid++;
        this.subs = [];
      }
    
      _createClass(Dep, [{
        key: 'addSub',
        value: function addSub(sub) {
          this.subs.push(sub);
        }
      }, {
        key: 'removeSub',
        value: function removeSub(sub) {
          (0, _index.remove)(this.subs, sub);
        }
      }, {
        key: 'depend',
        value: function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        }
      }, {
        key: 'notify',
        value: function notify() {
          // stablize the subscriber list first
          var subs = this.subs.slice();
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        }
      }]);
    
      return Dep;
    }();
    
    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
    
    
    exports.default = Dep;
    Dep.target = null;
    var targetStack = [];
    
    function pushTarget(_target) {
      if (Dep.target) targetStack.push(Dep.target);
      Dep.target = _target;
    }
    
    function popTarget() {
      Dep.target = targetStack.pop();
    }
  
  /***/ },
  /* 19 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queueWatcher = queueWatcher;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var queue = [];
    
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    
    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState() {
      queue.length = 0;
      has = {};
      if (true) {
        circular = {};
      }
      waiting = flushing = false;
    }
    
    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue() {
      flushing = true;
    
      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue.sort(function (a, b) {
        return a.id - b.id;
      });
    
      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index = 0; index < queue.length; index++) {
        var watcher = queue[index];
        var id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if (("development") !== 'production' && has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > _config2.default._maxUpdateCount) {
            (0, _index.warn)('You may have an infinite update loop ' + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : 'in a component render function.'), watcher.vm);
            break;
          }
        }
      }
    
      // devtool hook
      /* istanbul ignore if */
      if (_index.devtools && _config2.default.devtools) {
        _index.devtools.emit('flush');
      }
    
      resetSchedulerState();
    }
    
    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher(watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;
          while (i >= 0 && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(Math.max(i, index) + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
          waiting = true;
          (0, _index.nextTick)(flushSchedulerQueue);
        }
      }
    }
  
  /***/ },
  /* 20 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Observer = exports.observerState = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    exports.observe = observe;
    exports.defineReactive = defineReactive;
    exports.set = set;
    exports.del = del;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _dep = __webpack_require__(18);
    
    var _dep2 = _interopRequireDefault(_dep);
    
    var _array = __webpack_require__(21);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
    
    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
    var observerState = exports.observerState = {
      shouldConvert: true,
      isSettingProps: false
    };
    
    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
    
    var Observer = exports.Observer = function () {
      // number of vms that has this object as root $data
    
      function Observer(value) {
        _classCallCheck(this, Observer);
    
        this.value = value;
        this.dep = new _dep2.default();
        this.vmCount = 0;
        (0, _index.def)(value, '__ob__', this);
        if (Array.isArray(value)) {
          var augment = _index.hasProto ? protoAugment : copyAugment;
          augment(value, _array.arrayMethods, arrayKeys);
          this.observeArray(value);
        } else {
          this.walk(value);
        }
      }
    
      /**
       * Walk through each property and convert them into
       * getter/setters. This method should only be called when
       * value type is Object.
       */
    
    
      _createClass(Observer, [{
        key: 'walk',
        value: function walk(obj) {
          var val = this.value;
          for (var key in obj) {
            defineReactive(val, key, obj[key]);
          }
        }
    
        /**
         * Observe a list of Array items.
         */
    
      }, {
        key: 'observeArray',
        value: function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        }
      }]);
    
      return Observer;
    }();
    
    // helpers
    
    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    
    
    function protoAugment(target, src) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }
    
    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     *
     * istanbul ignore next
     */
    function copyAugment(target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        (0, _index.def)(target, key, src[key]);
      }
    }
    
    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe(value) {
      if (!(0, _index.isObject)(value)) {
        return;
      }
      var ob = void 0;
      if ((0, _index.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (observerState.shouldConvert && !_config2.default._isServer && (Array.isArray(value) || (0, _index.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
        ob = new Observer(value);
      }
      return ob;
    }
    
    /**
     * Define a reactive property on an Object.
     */
    function defineReactive(obj, key, val, customSetter) {
      var dep = new _dep2.default();
    
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return;
      }
    
      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
    
      var childOb = observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          var value = getter ? getter.call(obj) : val;
          if (_dep2.default.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
            }
            if (Array.isArray(value)) {
              for (var e, i = 0, l = value.length; i < l; i++) {
                e = value[i];
                e && e.__ob__ && e.__ob__.dep.depend();
              }
            }
          }
          return value;
        },
        set: function reactiveSetter(newVal) {
          var value = getter ? getter.call(obj) : val;
          if (newVal === value) {
            return;
          }
          if (("development") !== 'production' && customSetter) {
            customSetter();
          }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = observe(newVal);
          dep.notify();
        }
      });
    }
    
    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set(obj, key, val) {
      if (Array.isArray(obj)) {
        obj.splice(key, 1, val);
        return val;
      }
      if ((0, _index.hasOwn)(obj, key)) {
        obj[key] = val;
        return;
      }
      var ob = obj.__ob__;
      if (obj._isVue || ob && ob.vmCount) {
        ("development") !== 'production' && (0, _index.warn)('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - delcare it upfront in the data option.');
        return;
      }
      if (!ob) {
        obj[key] = val;
        return;
      }
      defineReactive(ob.value, key, val);
      ob.dep.notify();
      return val;
    }
    
    /**
     * Delete a property and trigger change if necessary.
     */
    function del(obj, key) {
      var ob = obj.__ob__;
      if (obj._isVue || ob && ob.vmCount) {
        ("development") !== 'production' && (0, _index.warn)('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
        return;
      }
      if (!(0, _index.hasOwn)(obj, key)) {
        return;
      }
      delete obj[key];
      if (!ob) {
        return;
      }
      ob.dep.notify();
    }
  
  /***/ },
  /* 21 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.arrayMethods = undefined;
    
    var _index = __webpack_require__(8);
    
    var arrayProto = Array.prototype; /*
                                       * not type checking this file because flow doesn't play well with
                                       * dynamically accessing methods on Array prototype
                                       */
    
    var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
    
    /**
     * Intercept mutating methods and emit events
     */
    ;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      (0, _index.def)(arrayMethods, method, function mutator() {
        // avoid leaking arguments:
        // http://jsperf.com/closure-with-arguments
        var i = arguments.length;
        var args = new Array(i);
        while (i--) {
          args[i] = arguments[i];
        }
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted = void 0;
        switch (method) {
          case 'push':
            inserted = args;
            break;
          case 'unshift':
            inserted = args;
            break;
          case 'splice':
            inserted = args.slice(2);
            break;
        }
        if (inserted) ob.observeArray(inserted);
        // notify change
        ob.dep.notify();
        return result;
      });
    });
  
  /***/ },
  /* 22 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initRender = initRender;
    exports.renderMixin = renderMixin;
    exports.resolveSlots = resolveSlots;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _vnode = __webpack_require__(23);
    
    var _vnode2 = _interopRequireDefault(_vnode);
    
    var _helpers = __webpack_require__(24);
    
    var _index = __webpack_require__(8);
    
    var _createElement = __webpack_require__(25);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function initRender(vm) {
      vm.$vnode = null; // the placeholder node in parent tree
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null;
      vm.$slots = resolveSlots(vm.$options._renderChildren);
      // bind the public createElement fn to this instance
      // so that we get proper render context inside it.
      vm.$createElement = (0, _index.bind)(_createElement.createElement, vm);
      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    }
    
    function renderMixin(Vue) {
      Vue.prototype.$nextTick = function (fn) {
        (0, _index.nextTick)(fn, this);
      };
    
      Vue.prototype._render = function () {
        var vm = this;
        var _vm$$options = vm.$options;
        var render = _vm$$options.render;
        var staticRenderFns = _vm$$options.staticRenderFns;
        var _parentVnode = _vm$$options._parentVnode;
    
    
        if (staticRenderFns && !vm._staticTrees) {
          vm._staticTrees = [];
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode = void 0;
        try {
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          if (true) {
            (0, _index.warn)('Error when rendering ' + (0, _index.formatComponentName)(vm) + ':');
          }
          /* istanbul ignore else */
          if (_config2.default.errorHandler) {
            _config2.default.errorHandler.call(null, e, vm);
          } else {
            if (_config2.default._isServer) {
              throw e;
            } else {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
          // return previous vnode to prevent render error causing blank component
          vnode = vm._vnode;
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof _vnode2.default)) {
          if (("development") !== 'production' && Array.isArray(vnode)) {
            (0, _index.warn)('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
          }
          vnode = (0, _vnode.emptyVNode)();
        }
        // set parent
        vnode.parent = _parentVnode;
    
        if (false) {
          if (vnode.parent && vnode.parent.$underBody && !vnode.$underBody) {
            (0, _index.signChildren)([vnode], '$underBody', vnode.parent.$underBody);
          }
        }
    
        return vnode;
      };
    
      // shorthands used in render functions
      Vue.prototype._h = _createElement.createElement;
      // toString for mustaches
      Vue.prototype._s = _index._toString;
      // number conversion
      Vue.prototype._n = _index.toNumber;
    
      // render static tree by index
      Vue.prototype._m = function renderStatic(index, isInFor) {
        var tree = this._staticTrees[index];
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by indentity.
        if (tree && !isInFor) {
          return tree;
        }
        // otherwise, render a fresh tree.
        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
        if (Array.isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
            tree[i].isStatic = true;
            tree[i].key = '__static__' + index + '_' + i;
          }
        } else {
          tree.isStatic = true;
          tree.key = '__static__' + index;
        }
        return tree;
      };
    
      // filter resolution helper
      var identity = function identity(_) {
        return _;
      };
      Vue.prototype._f = function resolveFilter(id) {
        return (0, _index.resolveAsset)(this.$options, 'filters', id, true) || identity;
      };
    
      // render v-for
      Vue.prototype._l = function renderList(val, render) {
        var ret = void 0,
            i = void 0,
            l = void 0,
            keys = void 0,
            key = void 0;
        if (Array.isArray(val)) {
          ret = new Array(val.length);
          for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
          }
        } else if (typeof val === 'number') {
          ret = new Array(val);
          for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
          }
        } else if ((0, _index.isObject)(val)) {
          keys = Object.keys(val);
          ret = new Array(keys.length);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i);
          }
        }
        return ret;
      };
    
      // apply v-bind object
      Vue.prototype._b = function bindProps(vnode, value, asProp) {
        if (value) {
          if (!(0, _index.isObject)(value)) {
            ("development") !== 'production' && (0, _index.warn)('v-bind without argument expects an Object or Array value', this);
          } else {
            if (Array.isArray(value)) {
              value = (0, _index.toObject)(value);
            }
            var data = vnode.data;
            for (var _key in value) {
              if (_key === 'class' || _key === 'style') {
                data[_key] = value[_key];
              } else {
                var hash = asProp || _config2.default.mustUseProp(_key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                hash[_key] = value[_key];
              }
            }
          }
        }
      };
    
      // expose v-on keyCodes
      Vue.prototype._k = function getKeyCodes(key) {
        return _config2.default.keyCodes[key];
      };
    }
    
    function resolveSlots(renderChildren) {
      var slots = {};
      if (!renderChildren) {
        return slots;
      }
      var children = (0, _helpers.normalizeChildren)(renderChildren) || [];
      var defaultSlot = [];
      var name = void 0,
          child = void 0;
      for (var i = 0, l = children.length; i < l; i++) {
        child = children[i];
        if (child.data && (name = child.data.slot)) {
          delete child.data.slot;
          var slot = slots[name] || (slots[name] = []);
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children);
          } else {
            slot.push(child);
          }
        } else {
          defaultSlot.push(child);
        }
      }
      // ignore single whitespace
      if (defaultSlot.length && !(defaultSlot.length === 1 && defaultSlot[0].text === ' ')) {
        slots.default = defaultSlot;
      }
      return slots;
    }
  
  /***/ },
  /* 23 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var VNode = // hoisted static node
    // compoennt placeholder node
    // rendered in this component's scope
    function VNode(tag, data, children, text, elm, ns, context, componentOptions) {
      _classCallCheck(this, VNode);
    
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = ns;
      this.context = context;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.child = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      // apply construct hook.
      // this is applied during render, before patch happens.
      // unlike other hooks, this is applied on both client and server.
      var constructHook = data && data.hook && data.hook.construct;
      if (constructHook) {
        constructHook(this);
      }
    } // necessary for enter transition check
    // contains raw HTML
    // component instance
    ;
    
    exports.default = VNode;
    var emptyVNode = exports.emptyVNode = function emptyVNode() {
      var node = new VNode();
      node.text = '';
      node.isComment = true;
      return node;
    };
  
  /***/ },
  /* 24 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeChildren = normalizeChildren;
    exports.getFirstComponentChild = getFirstComponentChild;
    exports.mergeVNodeHook = mergeVNodeHook;
    exports.updateListeners = updateListeners;
    
    var _index = __webpack_require__(8);
    
    var _vnode = __webpack_require__(23);
    
    var _vnode2 = _interopRequireDefault(_vnode);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function normalizeChildren(children, ns) {
      if ((0, _index.isPrimitive)(children)) {
        return [createTextVNode(children)];
      }
      if (Array.isArray(children)) {
        var res = [];
        for (var i = 0, l = children.length; i < l; i++) {
          var c = children[i];
          var last = res[res.length - 1];
          //  nested
          if (Array.isArray(c)) {
            res.push.apply(res, normalizeChildren(c, ns));
          } else if ((0, _index.isPrimitive)(c)) {
            if (last && last.text) {
              last.text += String(c);
            } else if (c !== '') {
              // convert primitive to vnode
              res.push(createTextVNode(c));
            }
          } else if (c instanceof _vnode2.default) {
            if (c.text && last && last.text) {
              last.text += c.text;
            } else {
              // inherit parent namespace
              if (ns) {
                applyNS(c, ns);
              }
              res.push(c);
            }
          }
        }
        return res;
      }
    }
    
    function createTextVNode(val) {
      return new _vnode2.default(undefined, undefined, undefined, String(val));
    }
    
    function applyNS(vnode, ns) {
      if (vnode.tag && !vnode.ns) {
        vnode.ns = ns;
        if (vnode.children) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
            applyNS(vnode.children[i], ns);
          }
        }
      }
    }
    
    function getFirstComponentChild(children) {
      return children && children.filter(function (c) {
        return c && c.componentOptions;
      })[0];
    }
    
    function mergeVNodeHook(def, key, hook) {
      var oldHook = def[key];
      if (oldHook) {
        def[key] = function () {
          oldHook.apply(this, arguments);
          hook.apply(this, arguments);
        };
      } else {
        def[key] = hook;
      }
    }
    
    function updateListeners(on, oldOn, add, remove) {
      var name = void 0,
          cur = void 0,
          old = void 0,
          fn = void 0,
          event = void 0,
          capture = void 0;
      for (name in on) {
        cur = on[name];
        old = oldOn[name];
        if (!cur) {
          ("development") !== 'production' && (0, _index.warn)('Handler for event "' + name + '" is undefined.');
        } else if (!old) {
          capture = name.charAt(0) === '!';
          event = capture ? name.slice(1) : name;
          if (Array.isArray(cur)) {
            add(event, cur.invoker = arrInvoker(cur), capture);
          } else {
            fn = cur;
            cur = on[name] = {};
            cur.fn = fn;
            add(event, cur.invoker = fnInvoker(cur), capture);
          }
        } else if (Array.isArray(old)) {
          old.length = cur.length;
          for (var i = 0; i < old.length; i++) {
            old[i] = cur[i];
          }on[name] = old;
        } else {
          old.fn = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (!on[name]) {
          event = name.charAt(0) === '!' ? name.slice(1) : name;
          remove(event, oldOn[name].invoker);
        }
      }
    }
    
    function arrInvoker(arr) {
      return function (ev) {
        var single = arguments.length === 1;
        for (var i = 0; i < arr.length; i++) {
          single ? arr[i](ev) : arr[i].apply(null, arguments);
        }
      };
    }
    
    function fnInvoker(o) {
      return function (ev) {
        var single = arguments.length === 1;
        single ? o.fn(ev) : o.fn.apply(null, arguments);
      };
    }
  
  /***/ },
  /* 25 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.createElement = createElement;
    
    var _vnode = __webpack_require__(23);
    
    var _vnode2 = _interopRequireDefault(_vnode);
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _createComponent = __webpack_require__(26);
    
    var _helpers = __webpack_require__(24);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement(tag, data, children) {
      if (data && (Array.isArray(data) || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object')) {
        children = data;
        data = undefined;
      }
    
      // make sure to use real instance instead of proxy as context
      var vnode = _createElement(this._self, tag, data, children);
    
      if (false) {
        if (vnode.tag === 'body') {
          (0, _index.signChildren)(children, '$underBody', true);
        } else if (vnode.$underBody) {
          (0, _index.signChildren)(children, '$underBody', vnode.$underBody);
        }
      }
    
      return vnode;
    }
    
    function _createElement(context, tag, data, children) {
      if (data && data.__ob__) {
        ("development") !== 'production' && (0, _index.warn)('Avoid using observed data object as vnode data: ' + JSON.stringify(data) + '\n' + 'Always create fresh vnode data objects in each render!', context);
        return;
      }
      if (!tag) {
        // in case of component :is set to falsy value
        return (0, _vnode.emptyVNode)();
      }
      if (typeof tag === 'string') {
        var Ctor = void 0;
        var ns = _config2.default.getTagNamespace(tag);
        if (_config2.default.isReservedTag(tag)) {
          // platform built-in elements
          return new _vnode2.default(tag, data, (0, _helpers.normalizeChildren)(children, ns), undefined, undefined, ns, context);
        } else if (Ctor = (0, _index.resolveAsset)(context.$options, 'components', tag)) {
          // component
          return (0, _createComponent.createComponent)(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          return new _vnode2.default(tag, data, (0, _helpers.normalizeChildren)(children, ns), undefined, undefined, ns, context);
        }
      } else {
        // direct component options / constructor
        return (0, _createComponent.createComponent)(tag, data, context, children);
      }
    }
  
  /***/ },
  /* 26 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.createComponent = createComponent;
    exports.createComponentInstanceForVnode = createComponentInstanceForVnode;
    
    var _index = __webpack_require__(13);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _vnode = __webpack_require__(23);
    
    var _vnode2 = _interopRequireDefault(_vnode);
    
    var _helpers = __webpack_require__(24);
    
    var _lifecycle = __webpack_require__(27);
    
    var _render = __webpack_require__(22);
    
    var _index3 = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
    var hooksToMerge = Object.keys(hooks);
    
    function createComponent(Ctor, data, context, children, tag) {
      if (!Ctor) {
        return;
      }
    
      if ((0, _index3.isObject)(Ctor)) {
        Ctor = _index2.default.extend(Ctor);
      }
    
      if (typeof Ctor !== 'function') {
        if (true) {
          (0, _index3.warn)('Invalid Component definition: ' + Ctor, context);
        }
        return;
      }
    
      // async component
      if (!Ctor.cid) {
        if (Ctor.resolved) {
          Ctor = Ctor.resolved;
        } else {
          Ctor = resolveAsyncComponent(Ctor, function () {
            // it's ok to queue this on every render because
            // $forceUpdate is buffered by the scheduler.
            context.$forceUpdate();
          });
          if (!Ctor) {
            // return nothing if this is indeed an async component
            // wait for the callback to trigger parent update.
            return;
          }
        }
      }
    
      data = data || {};
    
      // extract props
      var propsData = extractProps(data, Ctor);
    
      // functional component
      if (Ctor.options.functional) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
      }
    
      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      data.on = data.nativeOn;
    
      if (Ctor.options.abstract) {
        // abstract components do not keep anything
        // other than props & listeners
        data = {};
      }
    
      // merge component management hooks onto the placeholder node
      mergeHooks(data);
    
      // return a placeholder vnode
      var name = Ctor.options.name || tag;
      var vnode = new _vnode2.default('vue-component-' + Ctor.cid + (name ? '-' + name : ''), data, undefined, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
      return vnode;
    }
    
    function createFunctionalComponent(Ctor, propsData, data, context, children) {
      var props = {};
      var propOptions = Ctor.options.props;
      if (propOptions) {
        for (var key in propOptions) {
          props[key] = (0, _index3.validateProp)(key, propOptions, propsData);
        }
      }
      return Ctor.options.render.call(null, context.$createElement, {
        props: props,
        data: data,
        parent: context,
        children: (0, _helpers.normalizeChildren)(children),
        slots: function slots() {
          return (0, _render.resolveSlots)(children);
        }
      });
    }
    
    function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
    ) {
      var vnodeComponentOptions = vnode.componentOptions;
      var options = {
        _isComponent: true,
        parent: parent,
        propsData: vnodeComponentOptions.propsData,
        _componentTag: vnodeComponentOptions.tag,
        _parentVnode: vnode,
        _parentListeners: vnodeComponentOptions.listeners,
        _renderChildren: vnodeComponentOptions.children
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (inlineTemplate) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnodeComponentOptions.Ctor(options);
    }
    
    function init(vnode, hydrating) {
      if (!vnode.child || vnode.child._isDestroyed) {
        var child = vnode.child = createComponentInstanceForVnode(vnode, _lifecycle.activeInstance);
        // sign child
        if (false) {
          (0, _index3.signChildren)([child], '$underBody', vnode.$underBody);
        }
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    }
    
    function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.child = oldVnode.child;
      if (child) {
        child._updateFromParent(options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
      }
    }
    
    function insert(vnode) {
      if (!vnode.child._isMounted) {
        vnode.child._isMounted = true;
        (0, _lifecycle.callHook)(vnode.child, 'mounted');
      }
      if (vnode.data.keepAlive) {
        vnode.child._inactive = false;
        (0, _lifecycle.callHook)(vnode.child, 'activated');
      }
    }
    
    function destroy(vnode) {
      if (!vnode.child._isDestroyed) {
        if (!vnode.data.keepAlive) {
          vnode.child.$destroy();
        } else {
          vnode.child._inactive = true;
          (0, _lifecycle.callHook)(vnode.child, 'deactivated');
        }
      }
    }
    
    function resolveAsyncComponent(factory, cb) {
      if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        var _ret = function () {
          factory.requested = true;
          var cbs = factory.pendingCallbacks = [cb];
          var sync = true;
          factory(
          // resolve
          function (res) {
            if ((0, _index3.isObject)(res)) {
              res = _index2.default.extend(res);
            }
            // cache resolved
            factory.resolved = res;
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync) {
              for (var i = 0, l = cbs.length; i < l; i++) {
                cbs[i](res);
              }
            }
          },
          // reject
          function (reason) {
            ("development") !== 'production' && (0, _index3.warn)('Failed to resolve async component: ' + factory + (reason ? '\nReason: ' + reason : ''));
          });
          sync = false;
          // return in case resolved synchronously
          return {
            v: factory.resolved
          };
        }();
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
    
    function extractProps(data, Ctor) {
      // we are only extrating raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (!propOptions) {
        return;
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      var domProps = data.domProps;
    
      if (attrs || props || domProps) {
        for (var key in propOptions) {
          var altKey = (0, _index3.hyphenate)(key);
          checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
        }
      }
      return res;
    }
    
    function checkProp(res, hash, key, altKey, preserve) {
      if (hash) {
        if ((0, _index3.hasOwn)(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true;
        } else if ((0, _index3.hasOwn)(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true;
        }
      }
      return false;
    }
    
    function mergeHooks(data) {
      if (!data.hook) {
        data.hook = {};
      }
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var fromParent = data.hook[key];
        var ours = hooks[key];
        data.hook[key] = fromParent ? mergeHook(ours, fromParent) : ours;
      }
    }
    
    function mergeHook(a, b) {
      // since all hooks have at most two args, use fixed args
      // to avoid having to use fn.apply().
      return function (_, __) {
        a(_, __);
        b(_, __);
      };
    }
  
  /***/ },
  /* 27 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.activeInstance = undefined;
    exports.initLifecycle = initLifecycle;
    exports.lifecycleMixin = lifecycleMixin;
    exports.callHook = callHook;
    
    var _watcher = __webpack_require__(17);
    
    var _watcher2 = _interopRequireDefault(_watcher);
    
    var _vnode = __webpack_require__(23);
    
    var _index = __webpack_require__(20);
    
    var _index2 = __webpack_require__(8);
    
    var _render = __webpack_require__(22);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var activeInstance = exports.activeInstance = null;
    
    function initLifecycle(vm) {
      var options = vm.$options;
    
      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
    
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
    
      vm.$children = [];
      vm.$refs = {};
    
      vm._watcher = null;
      vm._inactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }
    
    function lifecycleMixin(Vue) {
      Vue.prototype._mount = function (el, hydrating) {
        var vm = this;
        vm.$el = el;
        if (!vm.$options.render) {
          vm.$options.render = _vnode.emptyVNode;
          if (true) {
            /* istanbul ignore if */
            if (vm.$options.template) {
              (0, _index2.warn)('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
            } else {
              (0, _index2.warn)('Failed to mount component: template or render function not defined.', vm);
            }
          }
        }
        callHook(vm, 'beforeMount');
        vm._watcher = new _watcher2.default(vm, function () {
          vm._update(vm._render(), hydrating);
        }, _index2.noop);
        hydrating = false;
        // root instance, call mounted on self
        // mounted is called for child components in its inserted hook
        if (vm.$root === vm) {
          vm._isMounted = true;
          callHook(vm, 'mounted');
        }
        return vm;
      };
    
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate');
        }
    
        if (false) {
          (0, _index2.signChildren)([vnode], '$underBody', vm.$underBody);
        }
    
        var prevEl = vm.$el;
        var prevActiveInstance = activeInstance;
        exports.activeInstance = activeInstance = vm;
        var prevVnode = vm._vnode;
        vm._vnode = vnode;
        if (!prevVnode) {
          // Vue.prototype.__patch__ is injected in entry points
          // based on the rendering backend used.
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
        } else {
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        exports.activeInstance = activeInstance = prevActiveInstance;
        // update __vue__ reference
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
        if (vm._isMounted) {
          callHook(vm, 'updated');
        }
      };
    
      Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
        var vm = this;
        var hasChildren = !!(vm.$options._renderChildren || renderChildren);
        vm.$options._parentVnode = parentVnode;
        vm.$options._renderChildren = renderChildren;
        // update props
        if (propsData && vm.$options.props) {
          _index.observerState.shouldConvert = false;
          if (true) {
            _index.observerState.isSettingProps = true;
          }
          var propKeys = vm.$options._propKeys || [];
          for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            vm[key] = (0, _index2.validateProp)(key, vm.$options.props, propsData, vm);
          }
          _index.observerState.shouldConvert = true;
          if (true) {
            _index.observerState.isSettingProps = false;
          }
        }
        // update listeners
        if (listeners) {
          var oldListeners = vm.$options._parentListeners;
          vm.$options._parentListeners = listeners;
          vm._updateListeners(listeners, oldListeners);
        }
        // resolve slots + force update if has children
        if (hasChildren) {
          vm.$slots = (0, _render.resolveSlots)(renderChildren);
          vm.$forceUpdate();
        }
      };
    
      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };
    
      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return;
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          (0, _index2.remove)(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        callHook(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
      };
    }
    
    function callHook(vm, hook) {
      var handlers = vm.$options[hook];
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          handlers[i].call(vm);
        }
      }
      vm.$emit('hook:' + hook);
    }
  
  /***/ },
  /* 28 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initEvents = initEvents;
    exports.eventsMixin = eventsMixin;
    
    var _index = __webpack_require__(8);
    
    var _helpers = __webpack_require__(24);
    
    function initEvents(vm) {
      vm._events = Object.create(null);
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      var on = (0, _index.bind)(vm.$on, vm);
      var off = (0, _index.bind)(vm.$off, vm);
      vm._updateListeners = function (listeners, oldListeners) {
        (0, _helpers.updateListeners)(listeners, oldListeners || {}, on, off);
      };
      if (listeners) {
        vm._updateListeners(listeners);
      }
    }
    
    function eventsMixin(Vue) {
      Vue.prototype.$on = function (event, fn) {
        var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
        return vm;
      };
    
      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
      };
    
      Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm;
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
          return vm;
        }
        if (arguments.length === 1) {
          vm._events[event] = null;
          return vm;
        }
        // specific handler
        var cb = void 0;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break;
          }
        }
        return vm;
      };
    
      Vue.prototype.$emit = function (event) {
        var vm = this;
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? (0, _index.toArray)(cbs) : cbs;
          var args = (0, _index.toArray)(arguments, 1);
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i].apply(vm, args);
          }
        }
        return vm;
      };
    }
  
  /***/ },
  /* 29 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatComponentName = exports.warn = undefined;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var warn = void 0;
    var formatComponentName = void 0;
    
    if (true) {
      (function () {
        var hasConsole = typeof console !== 'undefined';
    
        exports.warn = warn = function warn(msg, vm) {
          if (hasConsole && !_config2.default.silent) {
            console.error('[Vue warn]: ' + msg + ' ' + (vm ? formatLocation(formatComponentName(vm)) : ''));
          }
        };
    
        exports.formatComponentName = formatComponentName = function formatComponentName(vm) {
          if (vm.$root === vm) {
            return 'root instance';
          }
          var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
          return name ? 'component <' + name + '>' : 'anonymous component';
        };
    
        var formatLocation = function formatLocation(str) {
          if (str === 'anonymous component') {
            str += ' - use the "name" option for better debugging messages.';
          }
          return '(found in ' + str + ')';
        };
      })();
    }
    
    exports.warn = warn;
    exports.formatComponentName = formatComponentName;
  
  /***/ },
  /* 30 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.validateProp = validateProp;
    
    var _util = __webpack_require__(6);
    
    var _index = __webpack_require__(20);
    
    var _debug = __webpack_require__(29);
    
    function validateProp(key, propOptions, propsData, vm) {
      /* istanbul ignore if */
      if (!propsData) return;
      var prop = propOptions[key];
      var absent = !(0, _util.hasOwn)(propsData, key);
      var value = propsData[key];
      // handle boolean props
      if (getType(prop.type) === 'Boolean') {
        if (absent && !(0, _util.hasOwn)(prop, 'default')) {
          value = false;
        } else if (value === '' || value === (0, _util.hyphenate)(key)) {
          value = true;
        }
      }
      // check default value
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldConvert = _index.observerState.shouldConvert;
        _index.observerState.shouldConvert = true;
        (0, _index.observe)(value);
        _index.observerState.shouldConvert = prevShouldConvert;
      }
      if (true) {
        assertProp(prop, key, value, vm, absent);
      }
      return value;
    }
    
    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue(vm, prop, name) {
      // no default, return undefined
      if (!(0, _util.hasOwn)(prop, 'default')) {
        return undefined;
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if ((0, _util.isObject)(def)) {
        ("development") !== 'production' && (0, _debug.warn)('Invalid default value for prop "' + name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
      }
      // call factory function for non-Function types
      return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
    }
    
    /**
     * Assert whether a prop is valid.
     */
    function assertProp(prop, name, value, vm, absent) {
      if (prop.required && absent) {
        (0, _debug.warn)('Missing required prop: "' + name + '"', vm);
        return;
      }
      if (value == null && !prop.required) {
        return;
      }
      var type = prop.type;
      var valid = !type;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType);
          valid = assertedType.valid;
        }
      }
      if (!valid) {
        (0, _debug.warn)('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(_util.capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
        return;
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          (0, _debug.warn)('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
      }
    }
    
    /**
     * Assert the type of a value
     */
    function assertType(value, type) {
      var valid = void 0;
      var expectedType = getType(type);
      if (expectedType === 'String') {
        valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
      } else if (expectedType === 'Number') {
        valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
      } else if (expectedType === 'Boolean') {
        valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
      } else if (expectedType === 'Function') {
        valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
      } else if (expectedType === 'Object') {
        valid = (0, _util.isPlainObject)(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }
      return {
        valid: valid,
        expectedType: expectedType
      };
    }
    
    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType(fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match && match[1];
    }
  
  /***/ },
  /* 31 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.stopRAF = exports.rAF = undefined;
    exports.Ruler = Ruler;
    exports.offsetTop = offsetTop;
    exports.offsetLeft = offsetLeft;
    exports.imageLazyerUnRegister = imageLazyerUnRegister;
    exports.imageLazyer = imageLazyer;
    
    var _env = __webpack_require__(11);
    
    var _index = __webpack_require__(8);
    
    var winWidth = document.body.clientWidth;
    var ua = navigator.userAgent.toLowerCase();
    
    if (false) {
      var ScreenWidthResolutionReg = /screenwidthresolution=(\d*)/;
      var ScreenDensityReg = /screendensity=([\d|\.]*)/;
    
      var ScreenWidthResolution = 0;
      var ScreenDensity = 1;
    
      var ScreenWidthResolutionMatch = ua.match(ScreenWidthResolutionReg);
      if (ScreenWidthResolutionMatch && ScreenWidthResolutionMatch[1] && !isNaN(ScreenWidthResolutionMatch[1])) {
        ScreenWidthResolution = +ScreenWidthResolutionMatch[1];
      }
    
      var ScreenDensityMatch = ua.match(ScreenDensityReg);
      if (ScreenDensityMatch && ScreenDensityMatch[1] && !isNaN(ScreenDensityMatch[1])) {
        ScreenDensity = +ScreenDensityMatch[1];
      }
    
      if (ScreenWidthResolution !== 0) {
        winWidth = Math.round(ScreenWidthResolution / ScreenDensity);
      }
    }
    
    /**
     * animate frame
     * @param {function} 帧函数
     * @return {int} 帧函数timer
     */
    var rAF = exports.rAF = window.requestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
    
    /**
     * 停止 animate frame
     * @param {int} 帧函数timer
     */
    var stopRAF = exports.stopRAF = window.cancelAnimationFrame || window.clearTimeout;
    
    /**
     * 按照比例缩放尺寸，并且取整
     * @param {int} value 原始尺寸
     * @param {int} designWidth 设计稿宽度，默认为750
     */
    function Ruler(value) {
      var designWidth = arguments.length <= 1 || arguments[1] === undefined ? 750 : arguments[1];
    
      return Math.round(value * winWidth / designWidth);
    }
    
    /**
     * 获取元素距离父亲的offsetTop
     * @param {element} el 待计算的元素
     * @param {element} parent el 相对的元素，可选，不传则指向上层body
     * @return {int} offsetTop
     */
    function offsetTop(el, parentEl) {
      if (!el) return null;
    
      var curEl = el;
    
      var offsetTop = 0;
      var flag = false;
      var toBody = !parentEl;
    
      do {
        if (toBody) {
          if (curEl.tag === 'body') {
            flag = true;
            break;
          }
        } else {
          if (curEl === parentEl) {
            flag = true;
            break;
          }
        }
        offsetTop += curEl.offsetTop;
        curEl = curEl.parentNode;
      } while (curEl);
    
      return flag ? offsetTop : null;
    }
    
    /**
     * 获取元素距离父亲的offsetLeft
     * @param {element} el 待计算的元素
     * @param {element} parent el 相对的元素，可选，不传则指向上层body
     * @return {int} offsetLeft
     */
    function offsetLeft(el, parentEl) {
      if (!el) return null;
    
      var curEl = el;
    
      var offsetLeft = 0;
      var flag = false;
      var toBody = !parentEl;
    
      do {
        if (toBody) {
          if (curEl.tag === 'body') {
            flag = true;
            break;
          }
        } else {
          if (curEl === parentEl) {
            flag = true;
            break;
          }
        }
        offsetLeft += curEl.offsetLeft;
        curEl = curEl.parentNode;
      } while (curEl);
    
      return flag ? offsetLeft : null;
    }
    
    var bodyLazyInfos = null;
    function effectImageLazyerListener(el, src, placeholder) {
      if (el.__lazyTimes === undefined) {
        el.__lazyTimes = 0;
      }
    
      // max 10 times
      if (el.__lazyTimes >= 10) return;
    
      var bodyNode = null;
      var parentNode = el.parentNode;
      while (parentNode) {
        if (parentNode.tag === 'body') {
          bodyNode = parentNode;
          break;
        }
        parentNode = parentNode.parentNode;
      }
    
      // 还没有在listview中
      if (!bodyNode) {
        // push to nextTick
        (0, _env.nextTick)(function () {
          el.__lazyTimes++;
          effectImageLazyerListener(el, src, placeholder);
        }, this);
        return;
      }
    
      // 获取元素距离listview上方位置
      var elOffsetTop = offsetTop(el);
    
      // listview 滚动事件监听
      if (!bodyLazyInfos) {
        bodyLazyInfos = {
          images: {},
          handle: function handle() {
            var scrollView = document.body;
    
            if (!bodyLazyInfos || (0, _index.isEmptyObject)(bodyLazyInfos.images)) return;
    
            var scrollClientTopPos = scrollView.scrollTop;
            var scrollClientHeight = scrollView.offsetHeight;
            var scrollClientBottomPos = scrollClientTopPos + scrollClientHeight;
    
            var images = bodyLazyInfos.images;
    
            for (var k in images) {
              var image = images[k];
              if (scrollClientBottomPos + scrollClientHeight >= image.offsetTop && scrollClientTopPos <= image.offsetBottom + scrollClientHeight) {
                // 预加载一屏，多保留一屏
                // 可视区域
                if (!image.show) {
                  image.elm.setAttribute('src', image.src);
                  image.show = true;
                }
              } else {
                // 非可视区域
                if (image.show) {
                  image.elm.setAttribute('src', image.placeholder);
                  image.show = false;
                }
              }
            }
          }
        };
        window.addEventListener('scroll', (0, _index.throttle)(bodyLazyInfos.handle, 50, 100));
      }
    
      bodyLazyInfos.images[el.createId] = {
        elm: el,
        src: src,
        show: false,
        placeholder: placeholder,
        offsetTop: elOffsetTop,
        offsetBottom: elOffsetTop + el.offsetHeight
      };
    
      (0, _env.nextTick)(function () {
        if (bodyLazyInfos && bodyLazyInfos.handle) {
          bodyLazyInfos.handle();
        }
      }, this);
    }
    
    // get parent scrollview or listview
    function getParentScrollView(el) {
      var bodyNode = null;
      var parentNode = el.parentNode;
      while (parentNode) {
        if (parentNode.tag === 'body') {
          bodyNode = parentNode;
          break;
        }
        parentNode = parentNode.parentNode;
      }
    
      return bodyNode || null;
    }
    
    // get lazyInfos
    function getImageLazyInfos(el, scroller) {
      if (!bodyLazyInfos || !bodyLazyInfos.images) return null;
    
      var infos = bodyLazyInfos.images[el.createId];
    
      return infos || null;
    }
    
    function removeImageLazyInfos(el) {
      if (!bodyLazyInfos || !bodyLazyInfos.images) return null;
    
      if (bodyLazyInfos.images[el.createId]) {
        delete bodyLazyInfos.images[el.createId];
      }
    }
    
    // init image lazy
    function initImageInfo(el, src, placeholder) {
      if (false) {
        placeholder = placeholder || 'http://s17.mogucdn.com/p1/160411/upload_ie4wmytcme3tay3eg4zdambqgqyde_1x1.gif';
    
        el.setAttribute('src', placeholder);
        effectImageLazyerListener(el, src, placeholder);
        el.__isLazyer = true;
      }
    }
    
    // set recently
    function updateInfos(el, src, placeholder) {
      var scroller = getParentScrollView(el);
      if (!scroller) return;
    
      var image = getImageLazyInfos(el, scroller);
      if (image) {
        if (image.src !== src || image.placeholder !== placeholder) {
          var elOffsetTop = offsetTop(el);
    
          image.src = src;
          image.placeholder = placeholder;
          image.offsetTop = elOffsetTop;
          image.offsetBottom = elOffsetTop + el.offsetHeight;
    
          var scrollClientTopPos = scroller.scrollTop;
          var scrollClientHeight = scroller.offsetHeight;
          var scrollClientBottomPos = scrollClientTopPos + scrollClientHeight;
    
          if (scrollClientBottomPos + scrollClientHeight >= image.offsetTop && scrollClientTopPos <= image.offsetBottom + scrollClientHeight) {
            // 预加载一屏，多保留一屏
            // 可视区域
            image.elm.setAttribute('src', image.src);
            image.show = true;
          } else {
            // 非可视区域
            image.elm.setAttribute('src', image.placeholder);
            image.show = false;
          }
        }
      }
    }
    
    /**
     * 注册image元素lazyload
     */
    // export function imageLazyerRegister(el) {
    // }
    
    /**
     * 取消注册image元素lazyload
     */
    function imageLazyerUnRegister(el) {
      removeImageLazyInfos(el);
    }
    
    /**
     * 为image元素设置lazyload
     * @param {element} el 待设置的image元素
     * @param {string} src 图片地址
     * @param {string} placeholder placeholder图片地址
     */
    function imageLazyer(el, src, placeholder) {
      if (el.__isLazyer) {
        // update
        updateInfos(el, src, placeholder);
      } else {
        // init
        initImageInfo(el, src, placeholder);
      }
    }
  
  /***/ },
  /* 32 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initUse = initUse;
    
    var _index = __webpack_require__(8);
    
    function initUse(Vue) {
      Vue.use = function (plugin) {
        /* istanbul ignore if */
        if (plugin.installed) {
          return;
        }
        // additional parameters
        var args = (0, _index.toArray)(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else {
          plugin.apply(null, args);
        }
        plugin.installed = true;
        return this;
      };
    }
  
  /***/ },
  /* 33 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initMixin = initMixin;
    
    var _index = __webpack_require__(8);
    
    function initMixin(Vue) {
      Vue.mixin = function (mixin) {
        Vue.options = (0, _index.mergeOptions)(Vue.options, mixin);
      };
    }
  
  /***/ },
  /* 34 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initExtend = initExtend;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function initExtend(Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;
    
      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var isFirstExtend = Super.cid === 0;
        if (isFirstExtend && extendOptions._Ctor) {
          return extendOptions._Ctor;
        }
        var name = extendOptions.name || Super.options.name;
        if (true) {
          if (!/^[a-zA-Z][\w-]*$/.test(name)) {
            (0, _index.warn)('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
            name = null;
          }
        }
        var Sub = function VueComponent(options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = (0, _index.mergeOptions)(Super.options, extendOptions);
        Sub['super'] = Super;
        // allow further extension
        Sub.extend = Super.extend;
        // create asset registers, so extended classes
        // can have their private assets too.
        _config2.default._assetTypes.forEach(function (type) {
          Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
          Sub.options.components[name] = Sub;
        }
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        // cache constructor
        if (isFirstExtend) {
          extendOptions._Ctor = Sub;
        }
        return Sub;
      };
    }
  
  /***/ },
  /* 35 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.initAssetRegisters = initAssetRegisters;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _index = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function initAssetRegisters(Vue) {
      /**
       * Create asset registration methods.
       */
      _config2.default._assetTypes.forEach(function (type) {
        Vue[type] = function (id, definition) {
          if (!definition) {
            return this.options[type + 's'][id];
          } else {
            /* istanbul ignore if */
            if (true) {
              if (type === 'component' && _config2.default.isReservedTag(id)) {
                (0, _index.warn)('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
              }
            }
            if (type === 'component' && (0, _index.isPlainObject)(definition)) {
              definition.name = definition.name || id;
              definition = Vue.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = { bind: definition, update: definition };
            }
            this.options[type + 's'][id] = definition;
            return definition;
          }
        };
      });
    }
  
  /***/ },
  /* 36 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _keepAlive = __webpack_require__(37);
    
    var _keepAlive2 = _interopRequireDefault(_keepAlive);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
      KeepAlive: _keepAlive2.default
    };
  
  /***/ },
  /* 37 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _lifecycle = __webpack_require__(27);
    
    var _helpers = __webpack_require__(24);
    
    exports.default = {
      name: 'keep-alive',
      abstract: true,
      created: function created() {
        this.cache = Object.create(null);
      },
      render: function render() {
        var vnode = (0, _helpers.getFirstComponentChild)(this.$slots.default);
        if (vnode && vnode.componentOptions) {
          var opts = vnode.componentOptions;
          var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? opts.Ctor.cid + '::' + opts.tag : vnode.key;
          if (this.cache[key]) {
            vnode.child = this.cache[key].child;
          } else {
            this.cache[key] = vnode;
          }
          vnode.data.keepAlive = true;
        }
        return vnode;
      },
      destroyed: function destroyed() {
        for (var key in this.cache) {
          var vnode = this.cache[key];
          (0, _lifecycle.callHook)(vnode.child, 'deactivated');
          vnode.child.$destroy();
        }
      }
    };
  
  /***/ },
  /* 38 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.patch = undefined;
    
    var _nodeOps = __webpack_require__(39);
    
    var nodeOps = _interopRequireWildcard(_nodeOps);
    
    var _patch = __webpack_require__(46);
    
    var _index = __webpack_require__(48);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _index3 = __webpack_require__(50);
    
    var _index4 = _interopRequireDefault(_index3);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
    
    // the directive module should be applied last, after all
    // built-in modules have been applied.
    var modules = _index4.default.concat(_index2.default);
    
    var patch = exports.patch = (0, _patch.createPatchFunction)({ nodeOps: nodeOps, modules: modules });
  
  /***/ },
  /* 39 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createElement = createElement;
    exports.createElementNS = createElementNS;
    exports.createTextNode = createTextNode;
    exports.insertBefore = insertBefore;
    exports.removeChild = removeChild;
    exports.appendChild = appendChild;
    exports.parentNode = parentNode;
    exports.nextSibling = nextSibling;
    exports.tagName = tagName;
    exports.setTextContent = setTextContent;
    exports.childNodes = childNodes;
    exports.setAttributes = setAttributes;
    exports.removeAttributes = removeAttributes;
    
    var _index = __webpack_require__(40);
    
    var _index2 = __webpack_require__(8);
    
    var _elemExtra = __webpack_require__(44);
    
    function setText(elem, text) {
      text = text.trim();
    
      if (false) {
        elem.innerHTML = text;
      } else {
        elem.setText(text);
      }
    }
    
    var elementIdCount = 1;
    function createElement(tagName) {
      var elem = void 0;
    
      if (true) {
        if (tagName === 'body') {
          elem = document.createElement('listview');
          document.body.appendChild(elem);
    
          // if (node.tag === 'body') {
          console.log('body append child at: ' + +new Date());
          // }
        } else {
          elem = document.createElement(tagName);
        }
      } else {
        if (tagName === 'body') {
          elem = document.body;
        } else {
          elem = document.createElement(_index.webTagMap[tagName] || 'div');
        }
      }
      elem.tag = tagName;
      elem.setAttribute('tag', tagName);
      elem.createId = tagName + elementIdCount++;
    
      (0, _elemExtra.elemExtra)(elem, 'createElement');
    
      return elem;
    }
    
    function createElementNS(namespace, tagName) {
      return document.createElementNS(_index.namespaceMap[namespace], tagName);
    }
    
    function createTextNode(text) {
      return {
        text: text,
        nodeType: 3
      };
    }
    
    function insertBefore(parentNode, newNode, referenceNode) {
      if (newNode.nodeType === 3) {
        // 处理文本节点
        newNode.curParent = parentNode;
        newNode.__defineGetter__('parentNode', function () {
          return this.curParent;
        });
    
        if (parentNode.tag === 'label') {
          setText(parentNode, newNode.text);
          newNode.__defineSetter__('textContent', function (text) {
            if (this.curParent) {
              setText(this.curParent, text);
            }
          });
        }
      } else {
        if (newNode.tag !== 'body') {
          parentNode.insertBefore(newNode, referenceNode);
        }
      }
    
      (0, _elemExtra.elemExtra)(newNode, 'insertBefore');
    }
    
    function removeChild(node, child) {
      if (child.nodeType === 3) {
        // 处理文本节点
        if (node.tag === 'label') {
          if (false) {
            node.innerHTML = '';
          } else {
            node.setText('');
          }
          child.curParent = undefined;
        }
      } else {
        if (node) {
          node.removeChild(child);
        }
      }
    }
    
    function appendChild(node, child) {
      if (child.nodeType === 3) {
        // 处理文本节点
        child.curParent = node;
        child.__defineGetter__('parentNode', function () {
          return this.curParent;
        });
        if (node.tag === 'label') {
          setText(node, child.text);
          child.__defineSetter__('textContent', function (text) {
            if (this.curParent) {
              setText(this.curParent, text);
            }
          });
        }
      } else {
        node.appendChild(child);
      }
      if (node.tag === 'body') {
        console.log('listview append child at: ' + +new Date());
      }
      (0, _elemExtra.elemExtra)(child, 'appendChild');
    }
    
    function parentNode(node) {
      return node.parentNode;
    }
    
    function nextSibling(node) {
      return node.nextSibling;
    }
    
    function tagName(node) {
      return node.tag || node.tagName;
    }
    
    function setTextContent(node, text) {
      node.textContent = text;
    }
    
    function childNodes(node) {
      return node.childNodes;
    }
    
    // export function setAttribute (node: Element, key: string, val: string) {
    //   node.setAttribute(key, val)
    // }
    
    function setAttributes(node, attrs) {
      if (!attrs || (0, _index2.isEmptyObject)(attrs)) return;
    
      var preAttrs = {};
      for (var key in attrs) {
        var value = attrs[key];
    
        if ((0, _index.isBooleanAttr)(key)) {
          // set attribute for blank value
          // e.g. <option disabled>Select one</option>
          if ((0, _index.isFalsyAttrValue)(value)) {
            if (false) {
              node.removeAttribute(key);
            } else {
              preAttrs[key] = value;
            }
          } else {
            if (false) {
              node.setAttribute(key, key);
            } else {
              preAttrs[key] = key;
            }
          }
        } else if ((0, _index.isEnumeratedAttr)(key)) {
          var v = (0, _index.isFalsyAttrValue)(value) || value === 'false' ? 'false' : 'true';
          if (false) {
            node.setAttribute(key, v);
          } else {
            preAttrs[key] = v;
          }
        } else {
          if ((0, _index.isFalsyAttrValue)(value)) {
            if (false) {
              node.removeAttribute(key);
            } else {
              preAttrs[key] = value;
            }
          } else {
            if (false) {
              node.setAttribute(key, value);
            } else {
              preAttrs[key] = value;
            }
          }
        }
      }
    
      if (true) {
        node.setAttribution(preAttrs);
      }
    }
    
    function removeAttributes(node, attrs) {
      if (!attrs || (0, _index2.isEmptyObject)(attrs)) return;
    
      var preAttrs = {};
      for (var key in attrs) {
        if (false) {
          node.removeAttribute(key);
        } else {
          preAttrs[key] = null;
        }
      }
    
      if (true) {
        node.setAttribution(preAttrs);
      }
    }
  
  /***/ },
  /* 40 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAndroid = exports.isIE9 = exports.isIE = undefined;
    
    var _attrs = __webpack_require__(41);
    
    Object.keys(_attrs).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _attrs[key];
        }
      });
    });
    
    var _class = __webpack_require__(42);
    
    Object.keys(_class).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _class[key];
        }
      });
    });
    
    var _element = __webpack_require__(43);
    
    Object.keys(_element).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _element[key];
        }
      });
    });
    exports.query = query;
    
    var _index = __webpack_require__(8);
    
    var UA = _index.inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = exports.isIE = UA && /msie|trident/.test(UA);
    var isIE9 = exports.isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isAndroid = exports.isAndroid = UA && UA.indexOf('android') > 0;
    
    /**
     * Query an element selector if it's not an element already.
     */
    function query(el) {
      if (typeof el === 'string') {
        if (true) {
          return document.createElement('view');
        } else {
          var selector = el;
          el = document.querySelector(el);
          if (!el) {
            NODE_ENV !== 'production' && (0, _index.warn)('Cannot find element: ' + selector);
            return document.createElement('div');
          }
        }
      }
      return el;
    }
  
  /***/ },
  /* 41 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isFalsyAttrValue = exports.getXlinkProp = exports.isXlink = exports.xlinkNS = exports.propsToAttrMap = exports.isBooleanAttr = exports.isEnumeratedAttr = exports.mustUseProp = undefined;
    
    var _util = __webpack_require__(6);
    
    // attributes that should be using props for binding
    var mustUseProp = exports.mustUseProp = (0, _util.makeMap)('');
    
    var isEnumeratedAttr = exports.isEnumeratedAttr = (0, _util.makeMap)('');
    
    var isBooleanAttr = exports.isBooleanAttr = (0, _util.makeMap)('');
    
    var propsToAttrMap = exports.propsToAttrMap = {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    };
    
    var xlinkNS = exports.xlinkNS = 'http://www.w3.org/1999/xlink';
    
    var isXlink = exports.isXlink = function isXlink(name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
    };
    
    var getXlinkProp = exports.getXlinkProp = function getXlinkProp(name) {
      return isXlink(name) ? name.slice(6, name.length) : '';
    };
    
    var isFalsyAttrValue = exports.isFalsyAttrValue = function isFalsyAttrValue(val) {
      return val == null || val === false;
    };
  
  /***/ },
  /* 42 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.genClassForVnode = genClassForVnode;
    exports.concat = concat;
    exports.stringifyClass = stringifyClass;
    
    var _util = __webpack_require__(6);
    
    function genClassForVnode(vnode) {
      var data = vnode.data;
      // Important: check if this is a component container node
      // or a child component root node
      var i = void 0;
      if ((i = vnode.child) && (i = i._vnode.data)) {
        data = mergeClassData(i, data);
      }
      if ((i = vnode.parent) && (i = i.data)) {
        data = mergeClassData(data, i);
      }
      return genClassFromData(data);
    }
    
    function mergeClassData(child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: child.class ? [child.class, parent.class] : parent.class
      };
    }
    
    function genClassFromData(data) {
      var dynamicClass = data.class;
      var staticClass = data.staticClass;
      if (staticClass || dynamicClass) {
        return concat(staticClass, stringifyClass(dynamicClass));
      }
      /* istanbul ignore next */
      return '';
    }
    
    function concat(a, b) {
      return a ? b ? a + ' ' + b : a : b || '';
    }
    
    function stringifyClass(value) {
      var res = '';
      if (!value) {
        return res;
      }
      if (typeof value === 'string') {
        return value;
      }
      if (Array.isArray(value)) {
        var stringified = void 0;
        for (var i = 0, l = value.length; i < l; i++) {
          if (value[i]) {
            if (stringified = stringifyClass(value[i])) {
              res += stringified + ' ';
            }
          }
        }
        return res.slice(0, -1);
      }
      if ((0, _util.isObject)(value)) {
        for (var key in value) {
          if (value[key]) res += key + ' ';
        }
        return res.slice(0, -1);
      }
      /* istanbul ignore next */
      return res;
    }
  
  /***/ },
  /* 43 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canBeLeftOpenTag = exports.isUnaryTag = exports.tagStyleSupport = exports.isReservedTag = exports.webTagMap = exports.namespaceMap = undefined;
    exports.getTagNamespace = getTagNamespace;
    exports.isUnknownElement = isUnknownElement;
    
    var _util = __webpack_require__(6);
    
    var namespaceMap = exports.namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };
    
    var webTagMap = exports.webTagMap = {
      // default div
      image: 'img'
    };
    
    var isReservedTag = exports.isReservedTag = (0, _util.makeMap)('view,label,image,listview,listview-shadow,scrollview,slider-image');
    
    var tagStyleSupport = exports.tagStyleSupport = {
      'view': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'paddingLeft,paddingTop,paddingRight,paddingBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'flexDirection,flexWrap,justifyContent,alignItems,' + 'alignSelf,flex'),
      'label': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'color,fontSize,textAlign,fontWeight,whiteSpace,textOverflow,textDecoration,' + 'alignSelf,flex'),
      'listview': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'alignSelf,flex'),
      'listview-shadow': (0, _util.makeMap)(''),
      'slider-image': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'paddingLeft,paddingTop,paddingRight,paddingBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'flexDirection,flexWrap,justifyContent,alignItems,' + 'alignSelf,flex'),
      'scrollview': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'paddingLeft,paddingTop,paddingRight,paddingBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'flexDirection,flexWrap,justifyContent,alignItems,' + 'alignSelf,flex'),
      'image': (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'left,top,right,bottom,borderWidth,borderColor,borderRadius,' + 'position,display,backgroundColor,opacity,' + 'alignSelf,flex,objectFit')
    };
    
    var isUnaryTag = exports.isUnaryTag = (0, _util.makeMap)('image', true);
    
    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    var canBeLeftOpenTag = exports.canBeLeftOpenTag = (0, _util.makeMap)('', true);
    
    // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
    // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
    // export const isNonPhrasingTag = makeMap(
    //   'view',
    //   true
    // )
    
    // this map covers namespace elements that can appear as template root nodes
    var isSVG = (0, _util.makeMap)('', true);
    
    function getTagNamespace(tag) {
      if (isSVG(tag)) {
        return 'svg';
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
        return 'math';
      }
    }
    
    function isUnknownElement(tag) {
      /* istanbul ignore if */
      // if (!inBrowser) {
      //   return true
      // }
      // tag = tag.toLowerCase()
      // /* istanbul ignore if */
      // if (unknownElementCache[tag] != null) {
      //   return unknownElementCache[tag]
      // }
      // const el = document.createElement(tag)
      // if (tag.indexOf('-') > -1) {
      //   // http://stackoverflow.com/a/28210364/1070244
      //   return (unknownElementCache[tag] = (
      //     el.constructor === window.HTMLUnknownElement ||
      //     el.constructor === window.HTMLElement
      //   ))
      // } else {
      //   return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
      // }
      return false;
    }
  
  /***/ },
  /* 44 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elemExtra = elemExtra;
    
    var _index = __webpack_require__(8);
    
    var _styleUtil = __webpack_require__(45);
    
    function elemExtra(elem, opt) {
      if (opt === 'createElement') {
        switch (elem.tag) {
          case 'body':
            if (true) {
              (0, _styleUtil.setStyles)(elem, {
                flex: 1
              });
            }
            // 代理scroll方法
            elem.setScrollTop = function (val) {
              var minTop = 0;
              var maxTop = this.scrollHeight - this.offsetHeight;
    
              val = val < minTop ? minTop : val;
              val = val > maxTop ? maxTop : val;
    
              this.scrollTop = val;
            }.bind(elem);
            elem.setScrollLeft = function (val) {
              var minLeft = 0;
              var maxLeft = this.scrollWidth - this.offsetWidth;
    
              val = val < minLeft ? minLeft : val;
              val = val > maxLeft ? maxLeft : val;
    
              this.scrollLeft = val;
            }.bind(elem);
            break;
    
          case 'scrollview':
            // 代理scroll方法
            elem.setScrollTop = function (val) {
              var minTop = 0;
              var maxTop = this.scrollHeight - this.offsetHeight;
    
              val = val < minTop ? minTop : val;
              val = val > maxTop ? maxTop : val;
    
              this.scrollTop = val;
            }.bind(elem);
            elem.setScrollLeft = function (val) {
              var minLeft = 0;
              var maxLeft = this.scrollWidth - this.offsetWidth;
    
              val = val < minLeft ? minLeft : val;
              val = val > maxLeft ? maxLeft : val;
    
              this.scrollLeft = val;
            }.bind(elem);
    
            if (false) {
              // 低版本设备
              (0, _styleUtil.setStyles)(elem, {
                'transform': '' // 取消加速
              });
            }
            break;
    
          default:
            break;
        }
      }
    }
  
  /***/ },
  /* 45 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.checkSupport = checkSupport;
    exports.effectProp = effectProp;
    exports.extraProp = extraProp;
    exports.isStyleSupport = isStyleSupport;
    exports.setStyle = setStyle;
    exports.setStyles = setStyles;
    
    var _debug = __webpack_require__(29);
    
    var _index = __webpack_require__(8);
    
    var _util = __webpack_require__(6);
    
    var _index2 = __webpack_require__(40);
    
    var hackWhileList = (0, _util.makeMap)('display,wordBreak,overflowX,overflowY,WebkitOverflowScrolling,WebkitFlexDirection,zIndex,' + 'transform,transition,transitionProperty,transitionDuration');
    
    // number or 'auto'
    var ruleStyles = (0, _util.makeMap)('width,height,minWidth,maxWidth,minHeight,maxHeight,' + 'marginLeft,marginTop,marginRight,marginBottom,' + 'paddingLeft,paddingTop,paddingRight,paddingBottom,' + 'left,top,right,bottom,borderWidth,borderRadius,' + 'fontSize');
    
    // string or enum
    var stringStyles = (0, _util.makeMap)('borderColor,flexDirection,flexWrap,justifyContent,alignItems,alignSelf,' + 'position,display,backgroundColor,' + 'color,textAlign,fontWeight,whiteSpace,textOverflow,textDecoration,' + 'objectFit');
    
    // number
    var numberStyles = (0, _util.makeMap)('flex,opacity');
    
    // web prefix style
    var webPrefixStyles = (0, _util.makeMap)('flexDirection,flexWrap,justifyContent,alignItems,alignSelf,flex,boxOrient,' + 'boxPack,boxAlign,boxFlex,boxLines,transform,transitionDuration');
    
    // web older style
    var webExtraStyles = {
      flexDirection: [{
        hack: 'boxOrient',
        values: {
          'row': 'horizontal',
          'column': 'vertical'
        }
      }],
      justifyContent: [{
        hack: 'boxPack',
        values: {
          'flex-start': 'start',
          'flex-end': 'end',
          'space-between': 'justify',
          'space-around': 'justify'
        }
      }],
      alignItems: [{
        hack: 'boxAlign',
        values: {
          'flex-start': 'start',
          'flex-end': 'end'
        }
      }],
      flex: [{
        hack: 'boxFlex',
        values: {}
      }],
      flexWrap: [{
        hack: 'boxLines',
        values: {
          'wrap': 'multiple',
          'nowrap': 'single'
        }
      }]
    };
    
    /**
     * 获取设备像素，web只能为1
     * @return {int} 设备1像素
     */
    var DevicePixel =  false ? 1 : +(1 / window.devicePixelRatio).toFixed(2);
    
    /**
     * check is style support
     */
    function checkSupport(name, tagName) {
      var isSupport = isStyleSupport(name);
      var tagMsg = '';
    
      if (typeof tagName === 'string' && _index2.tagStyleSupport[tagName]) {
        tagMsg = 'in ' + tagName + ' ';
        isSupport = _index2.tagStyleSupport[tagName](name) || hackWhileList(name);
      }
    
      if (true) {
        if (!isSupport) {
          (0, _debug.warn)('style ' + name + ' ' + ('is not support ' + tagMsg + 'now.'));
        }
      }
    
      return !!isSupport;
    }
    
    /**
     * replace style prop with finial effect prop
     */
    function effectProp(name) {
      if (false) {
        return (0, _util.camelize)('-webkit-' + (0, _util.hyphenate)(name));
      } else {
        return name;
      }
    }
    
    /**
     * append older style for web
     */
    function extraProp(name, value) {
      if (false) {
        var _ret = function () {
          var hackStyle = webExtraStyles[name];
          var hackMap = {};
          hackStyle.forEach(function (item) {
            var k = (0, _util.camelize)(item.hack);
            var v = item.values[value];
    
            if (value === '') {
              hackMap[k] = v;
            } else if (v) {
              hackMap[k] = v;
            } else {
              hackMap[k] = value;
            }
          });
          return {
            v: hackMap
          };
        }();
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } else {
        return null;
      }
    }
    
    /**
     * check is style name support
     */
    function isStyleSupport(name) {
      return !!(ruleStyles(name) || stringStyles(name) || numberStyles(name) || ("native") === 'web' && hackWhileList(name));
    }
    
    /**
     * set style
     */
    function setStyle(elm, name, value) {
      if (!name || !elm) return;
      if (!checkSupport(name, elm.tag)) return;
    
      // reset to default
      if (value === '') {
        if (false) {
          elm.style[effectProp(name)] = value;
    
          // css hack
          var hackMap = extraProp(name, value);
          if (hackMap) {
            for (var k in hackMap) {
              elm.style[effectProp(k)] = value;
            }
          }
        } else {
          var sobj = {};
          sobj[effectProp(name)] = value;
          elm.setStyle(sobj);
        }
        return;
      }
    
      if (ruleStyles(name)) {
        if (typeof value === 'number') {
          value = (0, _index.Ruler)(value);
        } else if (value === 'pixel') {
          value = DevicePixel;
        }
      }
    
      if (false) {
        if (ruleStyles(name)) {
          value += 'px';
        }
        elm.style[effectProp(name)] = value;
    
        // css hack
        var _hackMap = extraProp(name, value);
        if (_hackMap) {
          for (var _k in _hackMap) {
            elm.style[effectProp(_k)] = _hackMap[_k];
          }
        }
      } else {
        var _sobj = {};
        _sobj[effectProp(name)] = value;
        elm.setStyle(_sobj);
      }
    }
    
    /**
     * set styles
     */
    function setStyles(elm, cssMap) {
      if (!cssMap || (0, _index.isEmptyObject)(cssMap)) return;
    
      var effectCssMap = {};
      for (var name in cssMap) {
        var value = cssMap[name];
    
        if (!name) continue;
        if (!checkSupport(name, elm.tag)) continue;
    
        // reset to default
        if (value === '') {
          if (false) {
            elm.style[effectProp(name)] = value;
    
            // css hack
            var hackMap = extraProp(name, value);
            if (hackMap) {
              for (var k in hackMap) {
                elm.style[effectProp(k)] = value;
              }
            }
          } else {
            effectCssMap[effectProp(name)] = value;
          }
          continue;
        }
    
        if (ruleStyles(name)) {
          if (typeof value === 'number') {
            value = (0, _index.Ruler)(value);
          } else if (value === 'pixel') {
            value = DevicePixel;
          }
        }
    
        if (false) {
          if (ruleStyles(name)) {
            value += 'px';
          }
          elm.style[effectProp(name)] = value;
    
          // css hack
          var _hackMap2 = extraProp(name, value);
          if (_hackMap2) {
            for (var _k2 in _hackMap2) {
              elm.style[effectProp(_k2)] = _hackMap2[_k2];
            }
          }
        } else {
          effectCssMap[effectProp(name)] = value;
        }
      }
    
      if (("native") === 'native' && !(0, _index.isEmptyObject)(effectCssMap)) {
        elm.setStyle(effectCssMap);
      }
    }
  
  /***/ },
  /* 46 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createPatchFunction = createPatchFunction;
    
    var _config = __webpack_require__(4);
    
    var _config2 = _interopRequireDefault(_config);
    
    var _vnode = __webpack_require__(23);
    
    var _vnode2 = _interopRequireDefault(_vnode);
    
    var _index = __webpack_require__(8);
    
    var _lifecycle = __webpack_require__(27);
    
    var _ref = __webpack_require__(47);
    
    var _index2 = __webpack_require__(8);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
    
    /*
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */
    
    var emptyData = {};
    var emptyNode = new _vnode2.default('', emptyData, []);
    var hooks = ['create', 'update', 'postpatch', 'remove', 'destroy'];
    
    function isUndef(s) {
      return s == null;
    }
    
    function isDef(s) {
      return s != null;
    }
    
    function sameVnode(vnode1, vnode2) {
      function sameData(vnode1, vnode2) {
        if ((0, _index.isEmptyObject)(vnode1.data) && (0, _index.isEmptyObject)(vnode2.data)) {
          return true;
        }
        return !vnode1.data === !vnode2.data;
      }
    
      return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && sameData(vnode1, vnode2);
    }
    
    function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i = void 0,
          key = void 0;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) map[key] = i;
      }
      return map;
    }
    
    function createPatchFunction(backend) {
      var i = void 0,
          j = void 0;
      var cbs = {};
    
      var modules = backend.modules;
      var nodeOps = backend.nodeOps;
    
    
      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    
      function emptyNodeAt(elm) {
        return new _vnode2.default(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
      }
    
      function createRmCb(childElm, listeners) {
        function remove() {
          if (--remove.listeners === 0) {
            removeElement(childElm);
          }
        }
        remove.listeners = listeners;
        return remove;
      }
    
      function removeElement(el) {
        var parent = nodeOps.parentNode(el);
        nodeOps.removeChild(parent, el);
      }
    
      function createElm(vnode, insertedVnodeQueue, nested) {
        var i = void 0,
            elm = void 0;
        var data = vnode.data = vnode.data || {};
        vnode.isRootInsert = !nested;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
          // after calling the init hook, if the vnode is a child component
          // it should've created a child instance and mounted it. the child
          // component also has set the placeholder vnode's elm.
          // in that case we can just return the element and be done.
          if (isDef(i = vnode.child)) {
            initComponent(vnode, insertedVnodeQueue);
            return vnode.elm;
          }
        }
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          if (true) {
            if (!vnode.ns && !(_config2.default.ignoredElements && _config2.default.ignoredElements.indexOf(tag) > -1) && _config2.default.isUnknownElement(tag)) {
              (0, _index.warn)('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
            }
          }
          elm = vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag);
          setScope(vnode);
          if (Array.isArray(children)) {
            for (i = 0; i < children.length; ++i) {
              nodeOps.appendChild(elm, createElm(children[i], insertedVnodeQueue, true));
            }
          } else if ((0, _index.isPrimitive)(vnode.text)) {
            nodeOps.appendChild(elm, nodeOps.createTextNode(vnode.text));
          }
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
        } else if (vnode.isComment) {
          elm = vnode.elm = nodeOps.createComment(vnode.text);
        } else {
          elm = vnode.elm = nodeOps.createTextNode(vnode.text);
        }
        return vnode.elm;
      }
    
      function isPatchable(vnode) {
        while (vnode.child) {
          vnode = vnode.child._vnode;
        }
        return isDef(vnode.tag);
      }
    
      function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var _i = 0; _i < cbs.create.length; ++_i) {
          cbs.create[_i](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
          if (i.create) i.create(emptyNode, vnode);
          if (i.insert) insertedVnodeQueue.push(vnode);
        }
      }
    
      function initComponent(vnode, insertedVnodeQueue) {
        if (vnode.data.pendingInsert) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        }
        vnode.elm = vnode.child.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          // empty component root.
          // skip all element-related modules except for ref (#3455)
          (0, _ref.registerRef)(vnode);
          // make sure to invoke the insert hook
          insertedVnodeQueue.push(vnode);
        }
      }
    
      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope(vnode) {
        var i = void 0;
        if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        if (isDef(i = _lifecycle.activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
      }
    
      function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
        }
      }
    
      function invokeDestroyHook(vnode) {
        var i = void 0,
            j = void 0;
        var data = vnode.data;
    
        if (vnode.tag === 'image') {
          (0, _index2.imageLazyerUnRegister)(vnode.elm);
        }
    
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
          for (i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](vnode);
          }
        }
        if (isDef(i = vnode.child) && !data.keepAlive) {
          invokeDestroyHook(i._vnode);
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }
    
      function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else {
              // Text node
              nodeOps.removeChild(parentElm, ch.elm);
            }
          }
        }
      }
    
      function removeAndInvokeRemoveHook(vnode, rm) {
        if (rm || isDef(vnode.data)) {
          var listeners = cbs.remove.length + 1;
          if (!rm) {
            // directly removing
            rm = createRmCb(vnode.elm, listeners);
          } else {
            // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
          }
          // recursively invoke hooks on child component root node
          if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeElement(vnode.elm);
        }
      }
    
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx = void 0,
            idxInOld = void 0,
            elmToMove = void 0,
            before = void 0;
    
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
    
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
            idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
            if (isUndef(idxInOld)) {
              // New element
              nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            } else {
              elmToMove = oldCh[idxInOld];
              /* istanbul ignore if */
              if (("development") !== 'production' && !elmToMove) {
                (0, _index.warn)('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
              }
              if (elmToMove.tag !== newStartVnode.tag) {
                // same key but different element. treat as new element
                nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                newStartVnode = newCh[++newStartIdx];
              } else {
                patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
                newStartVnode = newCh[++newStartIdx];
              }
            }
          }
        }
        if (oldStartIdx > oldEndIdx) {
          before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
      }
    
      function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
        if (oldVnode === vnode) {
          return;
        }
        if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key) {
          vnode.elm = oldVnode.elm;
          return;
        }
        var i = void 0,
            hook = void 0;
        var hasData = isDef(i = vnode.data);
        if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
          i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (hasData && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) {
            cbs.update[i](oldVnode, vnode);
          }if (isDef(hook) && isDef(i = hook.update)) i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          } else if (isDef(ch)) {
            if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '');
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (hasData) {
          for (i = 0; i < cbs.postpatch.length; ++i) {
            cbs.postpatch[i](oldVnode, vnode);
          }if (isDef(hook) && isDef(i = hook.postpatch)) i(oldVnode, vnode);
        }
      }
    
      function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (initial && vnode.parent) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var _i2 = 0; _i2 < queue.length; ++_i2) {
            queue[_i2].data.hook.insert(queue[_i2]);
          }
        }
      }
    
      var bailed = false;
      function hydrate(elm, vnode, insertedVnodeQueue) {
        if (true) {
          if (!assertNodeMatch(elm, vnode)) {
            return false;
          }
        }
        vnode.elm = elm;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
    
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode, true /* hydrating */);
          if (isDef(i = vnode.child)) {
            // child component. it should have hydrated its own tree.
            initComponent(vnode, insertedVnodeQueue);
            return true;
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            var childNodes = nodeOps.childNodes(elm);
            var childrenMatch = true;
            if (childNodes.length !== children.length) {
              childrenMatch = false;
            } else {
              for (var _i3 = 0; _i3 < children.length; _i3++) {
                if (!hydrate(childNodes[_i3], children[_i3], insertedVnodeQueue)) {
                  childrenMatch = false;
                  break;
                }
              }
            }
            if (!childrenMatch) {
              if (("development") !== 'production' && typeof console !== 'undefined' && !bailed) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
              }
              return false;
            }
          }
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
        }
        return true;
      }
    
      function assertNodeMatch(node, vnode) {
        if (vnode.tag) {
          return vnode.tag.indexOf('vue-component') === 0 || vnode.tag === nodeOps.tagName(node).toLowerCase();
        } else {
          return (0, _index._toString)(vnode.text) === node.data;
        }
      }
    
      return function patch(oldVnode, vnode, hydrating, removeOnly) {
        var elm = void 0,
            parent = void 0;
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
    
        if (!oldVnode) {
          // empty mount, create new root element
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
          } else {
            if (isRealElement) {
              // mounting to a real element
              // check if this is server-rendered content and if we can perform
              // a successful hydration.
              // if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
              // oldVnode.removeAttribute('server-rendered')
              // hydrating = true
              // }
              if (hydrating) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode;
                } else if (true) {
                  (0, _index.warn)('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
                }
              }
              // either not server-rendered, or hydration failed.
              // create an empty node and replace it
              oldVnode = emptyNodeAt(oldVnode);
            }
            elm = oldVnode.elm;
            parent = nodeOps.parentNode(elm);
    
            createElm(vnode, insertedVnodeQueue);
    
            // component root element replaced.
            // update parent placeholder node element.
            if (vnode.parent) {
              vnode.parent.elm = vnode.elm;
              if (isPatchable(vnode)) {
                for (var _i4 = 0; _i4 < cbs.create.length; ++_i4) {
                  cbs.create[_i4](emptyNode, vnode.parent);
                }
              }
            }
    
            if (parent !== null) {
              nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
              removeVnodes(parent, [oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }
    
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
      };
    }
  
  /***/ },
  /* 47 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.registerRef = registerRef;
    
    var _util = __webpack_require__(6);
    
    exports.default = {
      create: function create(_, vnode) {
        registerRef(vnode);
      },
      update: function update(oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy(vnode) {
        registerRef(vnode, true);
      }
    };
    function registerRef(vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!key) return;
    
      var vm = vnode.context;
      var ref = vnode.child || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          (0, _util.remove)(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (Array.isArray(refs[key])) {
            refs[key].push(ref);
          } else {
            refs[key] = [ref];
          }
        } else {
          refs[key] = ref;
        }
      }
    }
  
  /***/ },
  /* 48 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _directives = __webpack_require__(49);
    
    var _directives2 = _interopRequireDefault(_directives);
    
    var _ref = __webpack_require__(47);
    
    var _ref2 = _interopRequireDefault(_ref);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = [_ref2.default, _directives2.default];
  
  /***/ },
  /* 49 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _options = __webpack_require__(12);
    
    exports.default = {
      create: function bindDirectives(oldVnode, vnode) {
        applyDirectives(oldVnode, vnode, 'bind');
      },
      update: function updateDirectives(oldVnode, vnode) {
        applyDirectives(oldVnode, vnode, 'update');
      },
      postpatch: function postupdateDirectives(oldVnode, vnode) {
        applyDirectives(oldVnode, vnode, 'componentUpdated');
      },
      destroy: function unbindDirectives(vnode) {
        applyDirectives(vnode, vnode, 'unbind');
      }
    };
    
    
    var emptyModifiers = Object.create(null);
    
    function applyDirectives(oldVnode, vnode, hook) {
      var dirs = vnode.data.directives;
      if (dirs) {
        var oldDirs = oldVnode.data.directives;
        var isUpdate = hook === 'update';
        for (var i = 0; i < dirs.length; i++) {
          var dir = dirs[i];
          var def = (0, _options.resolveAsset)(vnode.context.$options, 'directives', dir.name, true);
          var fn = def && def[hook];
          if (fn) {
            if (isUpdate && oldDirs) {
              dir.oldValue = oldDirs[i].value;
            }
            if (!dir.modifiers) {
              dir.modifiers = emptyModifiers;
            }
            fn(vnode.elm, dir, vnode, oldVnode);
          }
        }
      }
    }
  
  /***/ },
  /* 50 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _attrs = __webpack_require__(51);
    
    var _attrs2 = _interopRequireDefault(_attrs);
    
    var _events = __webpack_require__(53);
    
    var _events2 = _interopRequireDefault(_events);
    
    var _props = __webpack_require__(54);
    
    var _props2 = _interopRequireDefault(_props);
    
    var _style = __webpack_require__(55);
    
    var _style2 = _interopRequireDefault(_style);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    if (true) {
      window.diffCount = function () {
        if (window.___diffcount === undefined) {
          window.___diffcount = 1;
        } else {
          clearTimeout(window.___diffcounttimer);
          window.___diffcount++;
        }
    
        window.___diffcounttimer = setTimeout(function () {
          console.log('diff count: ' + window.___diffcount);
          window.___diffcount = 0;
        }, 1000);
      };
    }
    // import klass from './class'
    
    // import transition from './transition'
    
    exports.default = [_attrs2.default,
    // klass,
    _events2.default, _props2.default, _style2.default
    // transition
    ];
  
  /***/ },
  /* 51 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _index = __webpack_require__(40);
    
    var _nodeOps = __webpack_require__(39);
    
    var _attrExtra = __webpack_require__(52);
    
    function updateAttrs(oldVnode, vnode) {
      if (true) {
        window.diffCount();
      }
    
      if (!oldVnode.data.attrs && !vnode.data.attrs) {
        return;
      }
      var key = void 0,
          cur = void 0,
          old = void 0;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
    
      var preAttrs = {};
      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          if ((0, _attrExtra.attrExtra)(elm, key, cur, vnode, oldVnode)) {
            preAttrs[key] = cur;
          }
        }
      }
      (0, _nodeOps.setAttributes)(elm, preAttrs);
    
      var preRmAttrs = {};
      for (key in oldAttrs) {
        if (attrs[key] == null) {
          if (!(0, _index.isEnumeratedAttr)(key)) {
            preRmAttrs[key] = null;
          }
        }
      }
      (0, _nodeOps.removeAttributes)(elm, preRmAttrs);
    }
    
    exports.default = {
      create: function create(_, vnode) {
        var attrs = vnode.data.staticAttrs;
        if (attrs) {
          var preAttrs = {};
          for (var key in attrs) {
            if ((0, _attrExtra.attrExtra)(vnode.elm, key, attrs[key], vnode)) {
              preAttrs[key] = attrs[key];
            }
          }
          (0, _nodeOps.setAttributes)(vnode.elm, preAttrs);
        }
        updateAttrs(_, vnode);
      },
      update: updateAttrs
    };
  
  /***/ },
  /* 52 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attrExtra = attrExtra;
    
    var _index = __webpack_require__(8);
    
    /**
     * 处理attr额外信息
     * @param  {element} elm
     * @param  {string} key k
     * @param  {string} cur v
     * @param  {VNode} vnode new vnode
     * @param  {VNode} vnode old vnode
     * @return {bool} is continue set attr
     */
    function attrExtra(elm, key, cur, vnode, oldVnode) {
      switch (elm.tag) {
        case 'image':
          if (oldVnode && oldVnode.$underBody === true) {
            vnode.$underBody = true;
          }
    
          if (false) {
            var attrs = vnode.data.attrs;
    
            if (attrs['fixture']) {
              return true;
            }
    
            // web image lazyload
            var lazyImage = attrs && attrs['placeholder'] ? attrs['placeholder'] : undefined;
            (0, _index.imageLazyer)(elm, cur, lazyImage);
            return false;
          } else {
            return true;
          }
    
        case 'scrollview':
          if (key === 'force-scroll-animate' && cur + '' === 'true') {
            if (false) {
              elm._setScrollTop = elm.setScrollTop;
              elm._setScrollLeft = elm.setScrollLeft;
    
              elm.setScrollTop = function (val) {
                (0, _index.stopRAF)(this._scrollTopTime);
    
                var minTop = 0;
                var maxTop = this.scrollHeight - this.offsetHeight;
    
                val = val < minTop ? minTop : val;
                val = val > maxTop ? maxTop : val;
    
                // scroll animate
                var s0 = this.scrollTop;
                var s1 = val;
                var totalTime = 0.2; // 0.2s滑动到指定位置
                var fps = 60;
                var times = Math.ceil(totalTime * fps);
                var v = (s1 - s0) / times;
                var maxTimes = times;
    
                function run(times) {
                  var _this = this;
    
                  if (times <= 0) {
                    this._setScrollTop(s1);
                    return;
                  } else {
                    this._setScrollTop(s0 + v * (maxTimes - times));
                  }
    
                  this._scrollTopTime = (0, _index.rAF)(function () {
                    run.call(_this, --times);
                  });
                }
                run.call(this, --times);
              }.bind(elm);
    
              elm.setScrollLeft = function (val) {
                (0, _index.stopRAF)(this._scrollLeftTime);
    
                var minLeft = 0;
                var maxLeft = this.scrollWidth - this.offsetWidth;
    
                val = val < minLeft ? minLeft : val;
                val = val > maxLeft ? maxLeft : val;
    
                // scroll animate
                var s0 = this.scrollLeft;
                var s1 = val;
                var totalTime = 0.2; // 0.2s滑动到指定位置
                var fps = 60;
                var times = Math.ceil(totalTime * fps);
                var v = (s1 - s0) / times;
                var maxTimes = times;
    
                function run(times) {
                  var _this2 = this;
    
                  if (times <= 0) {
                    this._setScrollLeft(s1);
                    return;
                  } else {
                    this._setScrollLeft(s0 + v * (maxTimes - times));
                  }
    
                  this._scrollLeftTime = (0, _index.rAF)(function () {
                    run.call(_this2, --times);
                  });
                }
                run.call(this, --times);
              }.bind(elm);
            } else {
              elm.forceScrollAnimate = true;
            }
            return false;
          } else {
            return true;
          }
    
        default:
          return true;
      }
    }
  
  /***/ },
  /* 53 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _helpers = __webpack_require__(24);
    
    var _util = __webpack_require__(6);
    
    // skip type checking this file because we need to attach private properties
    // to elements
    
    function updateDOMListeners(oldVnode, vnode) {
      if (!oldVnode.data.on && !vnode.data.on) {
        return;
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
        if (false) {
          window.addEventListener('scroll', function (e) {
            var customEvent = (0, _util.objectAssign)({}, e, {
              target: document.body
            });
            handler.apply(this, [customEvent]);
          }, capture);
        } else {
          vnode.elm.addEventListener(event, handler, capture);
        }
      });
      var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
        vnode.elm.removeEventListener(event, handler);
      });
      (0, _helpers.updateListeners)(on, oldOn, add, remove);
    }
    
    exports.default = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };
  
  /***/ },
  /* 54 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function updateProps(oldVnode, vnode) {
      if (true) {
        window.diffCount();
      }
    
      if (!oldVnode.data.props && !vnode.data.props) {
        return;
      }
      var key = void 0,
          cur = void 0;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.props || {};
      var props = vnode.data.props || {};
    
      for (key in oldProps) {
        if (props[key] == null) {
          elm[key] = undefined;
        }
      }
      for (key in props) {
        cur = props[key];
        if (key === 'value') {
          // store value as _value as well since
          // non-string values will be stringified
          elm._value = cur;
          // avoid resetting cursor position when value is the same
          if (elm.value != cur) {
            // eslint-disable-line
            elm.value = cur;
          }
        } else {
          elm[key] = cur;
        }
      }
    }
    
    exports.default = {
      create: updateProps,
      update: updateProps
    };
  
  /***/ },
  /* 55 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _util = __webpack_require__(6);
    
    var _styleUtil = __webpack_require__(45);
    
    var _index = __webpack_require__(8);
    
    // let testEl
    var normalize = (0, _util.cached)(function (prop) {
      prop = (0, _util.camelize)(prop);
    
      if ((0, _styleUtil.checkSupport)(prop)) {
        return prop;
      }
    });
    
    // prop value to css map
    
    
    var styleValueToCssMap = function styleValueToCssMap(styleValue) {
      var cssMap = {};
      try {
        var cssRules = styleValue.split(';');
        cssRules.forEach(function (rule) {
          var ruleMeans = rule.split(':');
          if (ruleMeans.length === 2) {
            var k = ruleMeans[0].trim();
            var v = ruleMeans[1].trim();
            cssMap[(0, _util.camelize)(k)] = isNaN(v) ? v : +v;
          }
        });
      } catch (e) {
        if (true) {
          (0, _index.warn)('style invalid, ' + 'please check if it spell error.');
        }
      }
      return cssMap;
    };
    
    function createStyle(oldVnode, vnode) {
      var style = void 0,
          name = void 0;
      var elm = vnode.elm;
      var vm$$data = vnode.context.$data;
      var styleSheet = vm$$data.style;
    
      // extend static class styles
      if (vnode.data.staticClass) {
        var classNames = vnode.data.staticClass.split(' ');
        if (false) {
          elm.setAttribute('_sclass', vnode.data.staticClass);
        }
        classNames.forEach(function (cls) {
          if (cls === '') return;
    
          if (styleSheet[cls]) {
            style = style ? (0, _util.extend)(style, styleSheet[cls]) : styleSheet[cls];
          }
        });
      }
    
      // extend static style styles
      if (vnode.data.staticStyle) {
        var cssMap = styleValueToCssMap(vnode.data.staticStyle);
        style = style ? (0, _util.extend)(style, cssMap) : cssMap;
      }
    
      var preStyles = {};
      for (name in style) {
        var norName = normalize(name);
        if (norName) {
          preStyles[norName] = style[name];
        }
      }
      (0, _styleUtil.setStyles)(elm, preStyles);
    
      // clone the style for future updates,
      // in case the user mutates the style object in-place.
      if (style) {
        vnode.data.baseStyle = (0, _util.extend)({}, style);
      }
    
      // to data binding style
      updateStyle(oldVnode, vnode);
    }
    
    function updateStyle(oldVnode, vnode) {
      if (true) {
        window.diffCount();
      }
    
      var cur = void 0,
          name = void 0;
      var elm = vnode.elm;
      var oldStyle = oldVnode.data.style;
      var baseStyle = oldVnode.data.baseStyle || vnode.data.baseStyle;
      var vm$$data = vnode.context.$data;
    
      // get default tag styles
      var style = void 0;
      var styleData = vm$$data.style;
    
      // extend class styles
      if (vnode.data.jstyles && vnode.data.jstyles.class) {
        var classNames = vnode.data.jstyles.class.split(' ');
        if (false) {
          elm.setAttribute('_class', vnode.data.jstyles.class);
        }
    
        if (styleData) {
          classNames.forEach(function (cls) {
            if (cls === '') return;
    
            if (styleData[cls]) {
              style = style ? (0, _util.extend)(style, styleData[cls]) : styleData[cls];
            }
          });
        }
      }
    
      // extend style prop styles
      if (vnode.data.jstyles && vnode.data.jstyles.style) {
        var cssMap = styleValueToCssMap(vnode.data.jstyles.style);
        style = style ? (0, _util.extend)(style, cssMap) : cssMap;
      }
    
      var preStyles = {};
      if (oldStyle) {
        for (name in oldStyle) {
          cur = style ? style[name] : undefined;
    
          // new style wait to del
          if (cur === undefined) {
            // check if in base static style
            cur = baseStyle && baseStyle[name] ? baseStyle[name] : '';
    
            var norName = normalize(name);
            if (norName) {
              preStyles[norName] = cur;
            }
          }
        }
      }
    
      if (style) {
        for (name in style) {
          cur = style[name];
          if (!oldStyle || cur !== oldStyle[name]) {
            var _norName = normalize(name);
            if (_norName) {
              preStyles[_norName] = cur;
            }
          }
        }
      }
    
      (0, _styleUtil.setStyles)(elm, preStyles);
    
      // clone the style for future updates,
      // in case the user mutates the style object in-place.
      if (style) {
        vnode.data.style = (0, _util.extend)({}, style);
      }
      if (baseStyle) {
        vnode.data.baseStyle = (0, _util.extend)({}, baseStyle);
      }
    }
    
    exports.default = {
      create: createStyle,
      update: updateStyle
    };
  
  /***/ },
  /* 56 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _model = __webpack_require__(57);
    
    var _model2 = _interopRequireDefault(_model);
    
    var _show = __webpack_require__(58);
    
    var _show2 = _interopRequireDefault(_show);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
      model: _model2.default,
      show: _show2.default
    };
  
  /***/ },
  /* 57 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _index = __webpack_require__(8);
    
    var _index2 = __webpack_require__(40);
    
    /* istanbul ignore if */
    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */
    
    if (_index2.isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }
    
    exports.default = {
      bind: function bind(el, binding, vnode) {
        if (true) {
          if (!/input|select|textarea/.test(vnode.tag)) {
            (0, _index.warn)('v-model is not supported on element type: <' + vnode.tag + '>. ' + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
          }
        }
        if (vnode.tag === 'select') {
          setSelected(el, binding.value);
        } else {
          if (!_index2.isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (_index2.isIE9) {
            el.vmodel = true;
          }
        }
      },
      postupdate: function postupdate(el, binding, vnode) {
        var val = binding.value;
        if (vnode.tag === 'select') {
          setSelected(el, val);
          // in case the options rendered by v-for have changed,
          // it's possible that the value is out-of-sync with the rendered options.
          // detect such cases and filter out values that no longer has a matchig
          // option in the DOM.
          var needReset = el.multiple ? val.some(function (v) {
            return hasNoMatchingOption(v, el.options);
          }) : hasNoMatchingOption(val, el.options);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    };
    
    
    function setSelected(el, value) {
      var isMultiple = el.multiple;
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
      for (var i = 0, l = el.options.length; i < l; i++) {
        var option = el.options[i];
        if (isMultiple) {
          option.selected = value.indexOf(getValue(option)) > -1;
        } else {
          if (getValue(option) === value) {
            el.selectedIndex = i;
            break;
          }
        }
      }
    }
    
    function hasNoMatchingOption(value, options) {
      for (var i = 0, l = options.length; i < l; i++) {
        if (getValue(options[i]) === value) {
          return false;
        }
      }
      return true;
    }
    
    function getValue(option) {
      return '_value' in option ? option._value : option.value || option.text;
    }
    
    function onCompositionStart(e) {
      e.target.composing = true;
    }
    
    function onCompositionEnd(e) {
      e.target.composing = false;
      trigger(e.target, 'input');
    }
    
    function trigger(el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }
  
  /***/ },
  /* 58 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _index = __webpack_require__(40);
    
    var _transition = __webpack_require__(59);
    
    var _styleUtil = __webpack_require__(45);
    
    exports.default = {
      bind: function bind(el, _ref, vnode) {
        var value = _ref.value;
    
        var transition = getTransition(vnode);
        if (value && transition && transition.appear && !_index.isIE9) {
          (0, _transition.enter)(vnode);
        }
        (0, _styleUtil.setStyle)(el, 'display', value ? '' : 'none');
      },
      update: function update(el, _ref2, vnode) {
        var value = _ref2.value;
    
        var transition = getTransition(vnode);
        if (transition && !_index.isIE9) {
          if (value) {
            (0, _transition.enter)(vnode);
            (0, _styleUtil.setStyle)(el, 'display', '');
          } else {
            (0, _transition.leave)(vnode, function () {
              (0, _styleUtil.setStyle)(el, 'display', 'none');
            });
          }
        } else {
          (0, _styleUtil.setStyle)(el, 'display', value ? '' : 'none');
        }
      }
    };
    
    
    function getTransition(vnode) {
      var parent = vnode.parent;
      return parent && parent.data.transition != null ? parent.data.transition : vnode.data.transition;
    }
  
  /***/ },
  /* 59 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.animationEndEvent = exports.animationProp = exports.transitionEndEvent = exports.transitionProp = undefined;
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.nextFrame = nextFrame;
    exports.enter = enter;
    exports.leave = leave;
    
    var _classUtil = __webpack_require__(60);
    
    var _index = __webpack_require__(8);
    
    var _util = __webpack_require__(6);
    
    var _index2 = __webpack_require__(40);
    
    var hasTransition = _index.inBrowser && !_index2.isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';
    
    // Transition property/event sniffing
    var transitionProp = exports.transitionProp = 'transition';
    var transitionEndEvent = exports.transitionEndEvent = 'transitionend';
    var animationProp = exports.animationProp = 'animation';
    var animationEndEvent = exports.animationEndEvent = 'animationend';
    if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        exports.transitionProp = transitionProp = 'WebkitTransition';
        exports.transitionEndEvent = transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        exports.animationProp = animationProp = 'WebkitAnimation';
        exports.animationEndEvent = animationEndEvent = 'webkitAnimationEnd';
      }
    }
    
    var raf = _index.inBrowser && window.requestAnimationFrame || setTimeout;
    function nextFrame(fn) {
      raf(function () {
        raf(fn);
      });
    }
    
    function enter(vnode) {
      var el = vnode.elm;
      // call leave callback now
      if (el._leaveCb) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
      var data = vnode.data.transition;
      if (!data) {
        return;
      }
      var isAppear = !vnode.context.$root._isMounted;
      if (isAppear && !data.appear && data.appear !== '') {
        return;
      }
    
      var _resolveTransition = resolveTransition(data, vnode.context);
    
      var css = _resolveTransition.css;
      var enterClass = _resolveTransition.enterClass;
      var enterActiveClass = _resolveTransition.enterActiveClass;
      var appearClass = _resolveTransition.appearClass;
      var appearActiveClass = _resolveTransition.appearActiveClass;
      var beforeEnter = _resolveTransition.beforeEnter;
      var onEnter = _resolveTransition.onEnter;
      var afterEnter = _resolveTransition.afterEnter;
      var enterCancelled = _resolveTransition.enterCancelled;
      var beforeAppear = _resolveTransition.beforeAppear;
      var onAppear = _resolveTransition.onAppear;
      var afterAppear = _resolveTransition.afterAppear;
      var appearCancelled = _resolveTransition.appearCancelled;
    
    
      var startClass = isAppear ? appearClass : enterClass;
      var activeClass = isAppear ? appearActiveClass : enterActiveClass;
      var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
      var enterHook = isAppear ? onAppear || onEnter : onEnter;
      var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
      var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    
      var expectsCSS = css !== false;
      var userWantsControl = enterHook && enterHook.length > 1;
      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });
    
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        nextFrame(function () {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, activeClass);
            if (!userWantsControl) {
              whenTransitionEnds(el, cb);
            }
          }
        });
      }
      enterHook && enterHook(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
    
    function leave(vnode, rm) {
      var el = vnode.elm;
      // call enter callback now
      if (el._enterCb) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }
      var data = vnode.data.transition;
      if (!data) {
        return rm();
      }
    
      var _resolveTransition2 = resolveTransition(data, vnode.context);
    
      var css = _resolveTransition2.css;
      var leaveClass = _resolveTransition2.leaveClass;
      var leaveActiveClass = _resolveTransition2.leaveActiveClass;
      var beforeLeave = _resolveTransition2.beforeLeave;
      var onLeave = _resolveTransition2.onLeave;
      var afterLeave = _resolveTransition2.afterLeave;
      var leaveCancelled = _resolveTransition2.leaveCancelled;
      var delayLeave = _resolveTransition2.delayLeave;
    
    
      var expectsCSS = css !== false;
      var userWantsControl = onLeave && onLeave.length > 1;
      var cb = el._leaveCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });
    
      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }
    
      function performLeave() {
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          nextFrame(function () {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveActiveClass);
              if (!userWantsControl) {
                whenTransitionEnds(el, cb);
              }
            }
          });
        }
        onLeave && onLeave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }
    
    function resolveTransition(id, context) {
      var def = void 0;
      if (id && typeof id === 'string') {
        def = (0, _index.resolveAsset)(context.$options, 'transitions', id);
        return def ? ensureTransitionClasses(def.name || id, def) : autoCssTransition(id);
      } else if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
        // inline transition object
        if (id.name) {
          def = (0, _index.resolveAsset)(context.$options, 'transitions', id.name);
        }
        def = def ? (0, _util.extend)(ensureTransitionClasses(id.name, def), id) : ensureTransitionClasses(id.name, id);
        // extra hooks to be merged
        // added by <transition-control>
        if (id.hooks) {
          for (var key in id.hooks) {
            mergeHook(def, key, id.hooks[key]);
          }
        }
        return def;
      } else {
        return autoCssTransition('v');
      }
    }
    
    function ensureTransitionClasses(name, def) {
      name = name || 'v';
      var res = {};
      if (def.css !== false) {
        (0, _util.extend)(res, autoCssTransition(name));
      }
      (0, _util.extend)(res, def);
      return res;
    }
    
    var autoCssTransition = (0, _util.cached)(function (name) {
      return {
        enterClass: name + '-enter',
        leaveClass: name + '-leave',
        appearClass: name + '-enter',
        enterActiveClass: name + '-enter-active',
        leaveActiveClass: name + '-leave-active',
        appearActiveClass: name + '-enter-active'
      };
    });
    
    function mergeHook(def, key, hook) {
      var oldHook = def[key];
      if (oldHook) {
        def[key] = function () {
          oldHook.apply(this, arguments);
          hook();
        };
      } else {
        def[key] = hook;
      }
    }
    
    function addTransitionClass(el, cls) {
      (el._transitionClasses || (el._transitionClasses = [])).push(cls);
      (0, _classUtil.addClass)(el, cls);
    }
    
    function removeTransitionClass(el, cls) {
      (0, _util.remove)(el._transitionClasses, cls);
      (0, _classUtil.removeClass)(el, cls);
    }
    
    function whenTransitionEnds(el, cb) {
      var _getTransitionInfo = getTransitionInfo(el);
    
      var type = _getTransitionInfo.type;
      var timeout = _getTransitionInfo.timeout;
      var propCount = _getTransitionInfo.propCount;
    
      if (!type) return cb();
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function end() {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function onEnd() {
        if (++ended >= propCount) {
          end();
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
    
    function getTransitionInfo(el) {
      var styles = window.getComputedStyle(el);
      // 1. determine the maximum duration (timeout)
      var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
      var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
      var animationDelays = styles[animationProp + 'Delay'].split(', ');
      var animationDurations = styles[animationProp + 'Duration'].split(', ');
      var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
      var animationTimeout = getTimeout(animationDelays, animationDurations);
      var timeout = Math.max(transitionTimeout, animationTimeout);
      var type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      var propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      return {
        type: type,
        timeout: timeout,
        propCount: propCount
      };
    }
    
    function getTimeout(delays, durations) {
      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
      }));
    }
    
    function toMs(s) {
      return Number(s.slice(0, -1)) * 1000;
    }
    
    function once(fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn();
        }
      };
    }
    
    function shouldSkipTransition(vnode) {
      return !!(
      // if this is a component root node and the compoennt's
      // parent container node also has transition, skip.
      vnode.parent && vnode.parent.data.transition ||
      // if the element has v-show, let the runtime directive
      // call the hooks instead
      vnode.data.show);
    }
    
    exports.default = hasTransition ? {
      create: function create(_, vnode) {
        if (!shouldSkipTransition(vnode)) {
          enter(vnode);
        }
      },
      remove: function remove(vnode, rm) {
        if (!shouldSkipTransition(vnode)) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};
  
  /***/ },
  /* 60 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addClass = addClass;
    exports.removeClass = removeClass;
    
    
    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass(el, cls) {
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) {
            return el.classList.add(c);
          });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = ' ' + el.getAttribute('class') + ' ';
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }
    
    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass(el, cls) {
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) {
            return el.classList.remove(c);
          });
        } else {
          el.classList.remove(cls);
        }
      } else {
        var cur = ' ' + el.getAttribute('class') + ' ';
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        el.setAttribute('class', cur.trim());
      }
    }
  
  /***/ },
  /* 61 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _transitionControl = __webpack_require__(62);
    
    var _transitionControl2 = _interopRequireDefault(_transitionControl);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
      TransitionControl: _transitionControl2.default
    };
  
  /***/ },
  /* 62 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /* flow */
    
    var _index = __webpack_require__(8);
    
    exports.default = {
      name: 'transition-control',
      _abstract: true,
      props: {
        child: Object,
        mode: {
          validator: function validator(val) {
            /* istanbul ignore if */
            if (val && val !== 'out-in' && val !== 'in-out') {
              (0, _index.warn)('transition-mode must be either "out-in" or "in-out".');
              return false;
            }
            return true;
          }
        }
      },
      render: function render() {
        var _this = this;
    
        var oldChild = this._vnode;
        var newChild = this.child;
        if (oldChild && oldChild.data && (oldChild.tag !== newChild.tag || oldChild.key !== newChild.key)) {
          if (this.mode === 'out-in') {
            // return empty node
            // and queue an update when the leave finishes
            return addHook(oldChild, {
              afterLeave: function afterLeave() {
                _this.$forceUpdate();
              }
            });
          } else if (this.mode === 'in-out') {
            (function () {
              var delayedLeave = void 0;
              var performLeave = function performLeave() {
                delayedLeave();
              };
              addHook(newChild, {
                afterEnter: performLeave,
                enterCancelled: performLeave
              });
              addHook(oldChild, {
                delayLeave: function delayLeave(leave) {
                  delayedLeave = leave;
                }
              });
            })();
          }
        }
        return newChild;
      }
    };
    
    
    function addHook(vnode, hooks) {
      /* istanbul ignore if */
      if (!vnode.data || !vnode.data.transition) {
        return;
      }
      var trans = vnode.data.transition;
      /* istanbul ignore else */
      if (typeof trans === 'string') {
        trans = vnode.data.transition = { name: trans };
      } else if ((typeof trans === 'undefined' ? 'undefined' : _typeof(trans)) !== 'object') {
        trans = vnode.data.transition = { name: 'v' };
      }
      trans.hooks = hooks;
    }
  
  /***/ },
  /* 63 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.baseOptions = undefined;
    exports.compile = compile;
    exports.compileToFunctions = compileToFunctions;
    
    var _util = __webpack_require__(6);
    
    var _debug = __webpack_require__(29);
    
    var _index = __webpack_require__(64);
    
    var _errorDetector = __webpack_require__(76);
    
    var _index2 = __webpack_require__(77);
    
    var _index3 = _interopRequireDefault(_index2);
    
    var _index4 = __webpack_require__(81);
    
    var _index5 = _interopRequireDefault(_index4);
    
    var _index6 = __webpack_require__(40);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var cache = Object.create(null);
    
    var baseOptions = exports.baseOptions = {
      isIE: _index6.isIE,
      expectHTML: true,
      modules: _index3.default,
      staticKeys: (0, _util.genStaticKeys)(_index3.default),
      directives: _index5.default,
      isReservedTag: _index6.isReservedTag,
      isUnaryTag: _index6.isUnaryTag,
      mustUseProp: _index6.mustUseProp,
      getTagNamespace: _index6.getTagNamespace
    };
    
    function compile(template, options) {
      options = options ? (0, _util.extend)((0, _util.extend)({}, baseOptions), options) : baseOptions;
      return (0, _index.compile)(template, options);
    }
    
    function compileToFunctions(template, options, vm) {
      var _warn = options && options.warn || _debug.warn;
      // detect possible CSP restriction
      /* istanbul ignore if */
      if (true) {
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            _warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }
      var key = options && options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }
      var res = {};
      var compiled = compile(template, options);
      res.render = makeFunction(compiled.render);
      var l = compiled.staticRenderFns.length;
      res.staticRenderFns = new Array(l);
      for (var i = 0; i < l; i++) {
        res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
      }
      if (true) {
        if (res.render === _util.noop || res.staticRenderFns.some(function (fn) {
          return fn === _util.noop;
        })) {
          _warn('failed to compile template:\n\n' + template + '\n\n' + (0, _errorDetector.detectErrors)(compiled.ast).join('\n') + '\n\n', vm);
        }
      }
      return cache[key] = res;
    }
    
    function makeFunction(code) {
      try {
        return new Function(code);
      } catch (e) {
        return _util.noop;
      }
    }
  
  /***/ },
  /* 64 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.compile = compile;
    
    var _index = __webpack_require__(65);
    
    var _optimizer = __webpack_require__(71);
    
    var _index2 = __webpack_require__(72);
    
    /**
     * Compile a template.
     */
    function compile(template, options) {
      var ast = (0, _index.parse)(template.trim(), options);
      (0, _optimizer.optimize)(ast, options);
      var code = (0, _index2.generate)(ast, options);
      return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
      };
    }
  
  /***/ },
  /* 65 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.forIteratorRE = exports.forAliasRE = exports.dirRE = undefined;
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
    
    exports.parse = parse;
    
    var _entities = __webpack_require__(66);
    
    var _htmlParser = __webpack_require__(67);
    
    var _textParser = __webpack_require__(68);
    
    var _util = __webpack_require__(6);
    
    var _helpers = __webpack_require__(70);
    
    var dirRE = exports.dirRE = /^v-|^@|^:|^_class|^_style/;
    var forAliasRE = exports.forAliasRE = /(.*)\s+(?:in|of)\s+(.*)/;
    var forIteratorRE = exports.forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
    var bindRE = /^:|^v-bind:/;
    var onRE = /^@|^v-on:/;
    var vclassRE = /^_class/;
    var vstyleRE = /^_style/;
    var argRE = /:(.*)$/;
    var modifierRE = /\.[^\.]+/g;
    
    var decodeHTMLCached = (0, _util.cached)(_entities.decodeHTML);
    
    // configurable state
    var warn = void 0;
    var platformGetTagNamespace = void 0;
    var platformMustUseProp = void 0;
    var platformIsPreTag = void 0;
    var preTransforms = void 0;
    var transforms = void 0;
    var postTransforms = void 0;
    var delimiters = void 0;
    var seenSlots = void 0;
    
    /**
     * Convert HTML string to AST.
     */
    function parse(template, options) {
      warn = options.warn || _helpers.baseWarn;
      platformGetTagNamespace = options.getTagNamespace || _util.no;
      platformMustUseProp = options.mustUseProp || _util.no;
      platformIsPreTag = options.isPreTag || _util.no;
      preTransforms = (0, _helpers.pluckModuleFunction)(options.modules, 'preTransformNode');
      transforms = (0, _helpers.pluckModuleFunction)(options.modules, 'transformNode');
      postTransforms = (0, _helpers.pluckModuleFunction)(options.modules, 'postTransformNode');
      delimiters = options.delimiters;
      seenSlots = Object.create(null);
      var stack = [];
      var preserveWhitespace = options.preserveWhitespace !== false;
      var root = void 0;
      var currentParent = void 0;
      var inVPre = false;
      var inPre = false;
      var warned = false;
      (0, _htmlParser.parseHTML)(template, {
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        isFromDOM: options.isFromDOM,
        shouldDecodeTags: options.shouldDecodeTags,
        start: function start(tag, attrs, unary) {
          // check namespace.
          // inherit parent ns if there is one
          var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
    
          // handle IE svg bug
          /* istanbul ignore if */
          if (options.isIE && ns === 'svg') {
            attrs = guardIESVGBug(attrs);
          }
    
          var element = {
            type: 1,
            tag: tag,
            attrsList: attrs,
            attrsMap: makeAttrsMap(attrs),
            parent: currentParent,
            children: []
          };
          if (ns) {
            element.ns = ns;
          }
    
          if (isForbiddenTag(element)) {
            element.forbidden = true;
            ("development") !== 'production' && warn('Templates should only be responsbile for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + ('<' + tag + '>.'));
          }
    
          // apply pre-transforms
          for (var i = 0; i < preTransforms.length; i++) {
            preTransforms[i](element, options);
          }
    
          if (!inVPre) {
            processPre(element);
            if (element.pre) {
              inVPre = true;
            }
          }
          if (platformIsPreTag(element.tag)) {
            inPre = true;
          }
          if (inVPre) {
            processRawAttrs(element);
          } else {
            processFor(element);
            processIf(element);
            processOnce(element);
    
            // determine whether this is a plain element after
            // removing structural attributes
            element.plain = !element.key && !attrs.length;
    
            processKey(element);
            processRef(element);
            processSlot(element);
            processComponent(element);
            for (var _i = 0; _i < transforms.length; _i++) {
              transforms[_i](element, options);
            }
            processAttrs(element);
          }
    
          function checkRootConstraints(el) {
            if (true) {
              if (el.tag === 'slot' || el.tag === 'template') {
                warn('Cannot use <' + el.tag + '> as component root element because it may ' + 'contain multiple nodes:\n' + template);
              }
              if (el.attrsMap.hasOwnProperty('v-for')) {
                warn('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements:\n' + template);
              }
            }
          }
    
          // tree management
          if (!root) {
            root = element;
            checkRootConstraints(root);
          } else if (("development") !== 'production' && !stack.length && !warned) {
            // allow 2 root elements with v-if and v-else
            if (root.attrsMap.hasOwnProperty('v-if') && element.attrsMap.hasOwnProperty('v-else')) {
              checkRootConstraints(element);
            } else {
              warned = true;
              warn('Component template should contain exactly one root element:\n\n' + template);
            }
          }
          if (currentParent && !element.forbidden) {
            if (element.else) {
              processElse(element, currentParent);
            } else {
              currentParent.children.push(element);
              element.parent = currentParent;
            }
          }
          if (!unary) {
            currentParent = element;
            stack.push(element);
          }
          // apply post-transforms
          for (var _i2 = 0; _i2 < postTransforms.length; _i2++) {
            postTransforms[_i2](element, options);
          }
        },
        end: function end() {
          // remove trailing whitespace
          var element = stack[stack.length - 1];
          var lastNode = element.children[element.children.length - 1];
          if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
            element.children.pop();
          }
          // pop stack
          stack.length -= 1;
          currentParent = stack[stack.length - 1];
          // check pre state
          if (element.pre) {
            inVPre = false;
          }
          if (platformIsPreTag(element.tag)) {
            inPre = false;
          }
        },
        chars: function chars(text) {
          if (!currentParent) {
            if (("development") !== 'production' && !warned) {
              warned = true;
              warn('Component template should contain exactly one root element:\n\n' + template);
            }
            return;
          }
          text = inPre || text.trim() ? decodeHTMLCached(text)
          // only preserve whitespace if its not right after a starting tag
          : preserveWhitespace && currentParent.children.length ? ' ' : '';
          if (text) {
            var expression = void 0;
            if (!inVPre && text !== ' ' && (expression = (0, _textParser.parseText)(text, delimiters))) {
              currentParent.children.push({
                type: 2,
                expression: expression,
                text: text
              });
            } else {
              currentParent.children.push({
                type: 3,
                text: text
              });
            }
          }
        }
      });
      return root;
    }
    
    function processPre(el) {
      if ((0, _helpers.getAndRemoveAttr)(el, 'v-pre') != null) {
        el.pre = true;
      }
    }
    
    function processRawAttrs(el) {
      var l = el.attrsList.length;
      if (l) {
        var attrs = el.attrs = new Array(l);
        for (var i = 0; i < l; i++) {
          attrs[i] = {
            name: el.attrsList[i].name,
            value: JSON.stringify(el.attrsList[i].value)
          };
        }
      } else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
      }
    }
    
    function processKey(el) {
      var exp = (0, _helpers.getBindingAttr)(el, 'key');
      if (exp) {
        el.key = exp;
      }
    }
    
    function processRef(el) {
      var ref = (0, _helpers.getBindingAttr)(el, 'ref');
      if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
      }
    }
    
    function processFor(el) {
      var exp = void 0;
      if (exp = (0, _helpers.getAndRemoveAttr)(el, 'v-for')) {
        var inMatch = exp.match(forAliasRE);
        if (!inMatch) {
          ("development") !== 'production' && warn('Invalid v-for expression: ' + exp);
          return;
        }
        el.for = inMatch[2].trim();
        var alias = inMatch[1].trim();
        var iteratorMatch = alias.match(forIteratorRE);
        if (iteratorMatch) {
          el.alias = iteratorMatch[1].trim();
          el.iterator1 = iteratorMatch[2].trim();
          if (iteratorMatch[3]) {
            el.iterator2 = iteratorMatch[3].trim();
          }
        } else {
          el.alias = alias;
        }
      }
    }
    
    function processIf(el) {
      var exp = (0, _helpers.getAndRemoveAttr)(el, 'v-if');
      if (exp) {
        el.if = exp;
      }
      if ((0, _helpers.getAndRemoveAttr)(el, 'v-else') != null) {
        el.else = true;
      }
    }
    
    function processElse(el, parent) {
      var prev = findPrevElement(parent.children);
      if (prev && prev.if) {
        prev.elseBlock = el;
      } else if (true) {
        warn('v-else used on element <' + el.tag + '> without corresponding v-if.');
      }
    }
    
    function processOnce(el) {
      var once = (0, _helpers.getAndRemoveAttr)(el, 'v-once');
      if (once != null) {
        el.once = true;
      }
    }
    
    function processSlot(el) {
      if (el.tag === 'slot') {
        if (true) {
          if (!el.attrsMap[':name'] && !el.attrsMap['v-bind:name'] && checkInFor(el)) {
            warn('Static <slot> found inside v-for: they will not render correctly. ' + 'Render the list in parent scope and use a single <slot> instead.');
          }
        }
        el.slotName = (0, _helpers.getBindingAttr)(el, 'name');
        if (true) {
          var name = el.slotName;
          if (seenSlots[name]) {
            warn('Duplicate ' + (name ? '<slot> with name ' + name : 'default <slot>') + ' ' + 'found in the same template.');
          }
          seenSlots[name] = true;
        }
      } else {
        var slotTarget = (0, _helpers.getBindingAttr)(el, 'slot');
        if (slotTarget) {
          el.slotTarget = slotTarget;
        }
      }
    }
    
    function processComponent(el) {
      var binding = void 0;
      if (binding = (0, _helpers.getBindingAttr)(el, 'is')) {
        el.component = binding;
      }
      if ((0, _helpers.getAndRemoveAttr)(el, 'inline-template') != null) {
        el.inlineTemplate = true;
      }
    }
    
    function processAttrs(el) {
      var list = el.attrsList;
      var i = void 0,
          l = void 0,
          name = void 0,
          value = void 0,
          arg = void 0,
          modifiers = void 0,
          isProp = void 0;
      for (i = 0, l = list.length; i < l; i++) {
        name = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
          // mark element as dynamic
          el.hasBindings = true;
          // modifiers
          modifiers = parseModifiers(name);
          if (modifiers) {
            name = name.replace(modifierRE, '');
          }
          if (bindRE.test(name)) {
            // v-bind
            name = name.replace(bindRE, '');
            if (modifiers && modifiers.prop) {
              isProp = true;
              name = (0, _util.camelize)(name);
              if (name === 'innerHtml') name = 'innerHTML';
            }
            if (isProp || platformMustUseProp(name)) {
              (0, _helpers.addProp)(el, name, value);
            } else {
              (0, _helpers.addAttr)(el, name, value);
            }
          } else if (onRE.test(name)) {
            // v-on
            name = name.replace(onRE, '');
            (0, _helpers.addHandler)(el, name, value, modifiers);
          } else if (vclassRE.test(name)) {
            name = name.replace(vclassRE, '');
            // transfrom to jstyle class
            (0, _helpers.addStyle)(el, 'class', value);
          } else if (vstyleRE.test(name)) {
            name = name.replace(vstyleRE, '');
            // transfrom to jstyle style
            (0, _helpers.addStyle)(el, 'style', value);
          } else {
            // normal directives
            name = name.replace(dirRE, '');
            // parse arg
            var argMatch = name.match(argRE);
            if (argMatch && (arg = argMatch[1])) {
              name = name.slice(0, -(arg.length + 1));
            }
            (0, _helpers.addDirective)(el, name, value, arg, modifiers);
          }
        } else {
          // literal attribute
          if (true) {
            var expression = (0, _textParser.parseText)(value, delimiters);
            if (expression) {
              warn(name + '="' + value + '": ' + 'Interpolation inside attributes has been deprecated. ' + 'Use v-bind or the colon shorthand instead.');
            }
          }
          (0, _helpers.addAttr)(el, name, JSON.stringify(value));
        }
      }
    }
    
    function checkInFor(el) {
      var parent = el;
      while (parent) {
        if (parent.for !== undefined) {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    }
    
    function parseModifiers(name) {
      var match = name.match(modifierRE);
      if (match) {
        var _ret = function () {
          var ret = {};
          match.forEach(function (m) {
            ret[m.slice(1)] = true;
          });
          return {
            v: ret
          };
        }();
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
    
    function makeAttrsMap(attrs) {
      var map = {};
      for (var i = 0, l = attrs.length; i < l; i++) {
        if (("development") !== 'production' && map[attrs[i].name]) {
          warn('duplicate attribute: ' + attrs[i].name);
        }
        map[attrs[i].name] = attrs[i].value;
      }
      return map;
    }
    
    function findPrevElement(children) {
      var i = children.length;
      while (i--) {
        if (children[i].tag) return children[i];
      }
    }
    
    function isForbiddenTag(el) {
      return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
    }
    
    var ieNSBug = /^xmlns:NS\d+/;
    var ieNSPrefix = /^NS\d+:/;
    
    /* istanbul ignore next */
    function guardIESVGBug(attrs) {
      var res = [];
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
          attr.name = attr.name.replace(ieNSPrefix, '');
          res.push(attr);
        }
      }
      return res;
    }
  
  /***/ },
  /* 66 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.decodeHTML = decodeHTML;
    
    
    // const decoder = document.createElement('div')
    
    function decodeHTML(html) {
      // decoder.innerHTML = html
      // return decoder.textContent
      return html.length > 0 ? html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&#39;/g, '\'').replace(/&quot;/g, '"') : '';
    }
  
  /***/ },
  /* 67 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseHTML = parseHTML;
    
    var _util = __webpack_require__(6);
    
    var _index = __webpack_require__(40);
    
    // Regular Expressions for parsing tags and attributes
    /**
     * Not type-checking this file because it's mostly vendor code.
     */
    
    /*!
     * HTML Parser By John Resig (ejohn.org)
     * Modified by Juriy "kangax" Zaytsev
     * Original code by Erik Arvidsson, Mozilla Public License
     * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
     */
    
    var singleAttrIdentifier = /([^\s"'<>\/=]+)/;
    var singleAttrAssign = /(?:=)/;
    var singleAttrValues = [
    // attr value double quotes
    /"([^"]*)"+/.source,
    // attr value, single quotes
    /'([^']*)'+/.source,
    // attr value, no quotes
    /([^\s"'=<>`]+)/.source];
    var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');
    
    // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
    // but for Vue templates we can enforce a simple charset
    var ncname = '[a-zA-Z_][\\w\\-\\.]*';
    var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
    var startTagOpen = new RegExp('^<' + qnameCapture);
    var startTagClose = /^\s*(\/?)>/;
    var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
    var doctype = /^<!DOCTYPE [^>]+>/i;
    
    var IS_REGEX_CAPTURING_BROKEN = false;
    'x'.replace(/x(.)?/g, function (m, g) {
      IS_REGEX_CAPTURING_BROKEN = g === '';
    });
    
    // Special Elements (can contain anything)
    var isSpecialTag = (0, _util.makeMap)('script,style', true);
    
    var reCache = {};
    
    var ampRE = /&amp;/g;
    var ltRE = /&lt;/g;
    var gtRE = /&gt;/g;
    var quoteRE = /&quot;/g;
    
    function decodeAttr(value, shouldDecodeTags) {
      if (shouldDecodeTags) {
        value = value.replace(ltRE, '<').replace(gtRE, '>');
      }
      return value.replace(ampRE, '&').replace(quoteRE, '"');
    }
    
    function parseHTML(html, options) {
      var stack = [];
      var expectHTML = options.expectHTML;
      var isUnaryTag = options.isUnaryTag || _util.no;
      var isFromDOM = options.isFromDOM;
      var shouldDecodeTags = options.shouldDecodeTags;
      var index = 0;
      var last = void 0,
          lastTag = void 0;
      while (html) {
        last = html;
        // Make sure we're not in a script or style element
        if (!lastTag || !isSpecialTag(lastTag)) {
          var textEnd = html.indexOf('<');
          if (textEnd === 0) {
            // Comment:
            if (/^<!--/.test(html)) {
              var commentEnd = html.indexOf('-->');
    
              if (commentEnd >= 0) {
                advance(commentEnd + 3);
                continue;
              }
            }
    
            // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
            if (/^<!\[/.test(html)) {
              var conditionalEnd = html.indexOf(']>');
    
              if (conditionalEnd >= 0) {
                advance(conditionalEnd + 2);
                continue;
              }
            }
    
            // Doctype:
            var doctypeMatch = html.match(doctype);
            if (doctypeMatch) {
              advance(doctypeMatch[0].length);
              continue;
            }
    
            // End tag:
            var endTagMatch = html.match(endTag);
            if (endTagMatch) {
              var curIndex = index;
              advance(endTagMatch[0].length);
              parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
              continue;
            }
    
            // Start tag:
            var startTagMatch = parseStartTag();
            if (startTagMatch) {
              handleStartTag(startTagMatch);
              continue;
            }
          }
    
          var text = void 0;
          if (textEnd >= 0) {
            text = html.substring(0, textEnd);
            advance(textEnd);
          } else {
            text = html;
            html = '';
          }
    
          if (options.chars) {
            if (text.trim() !== '') {
              options.chars(text);
            }
          }
        } else {
          var stackedTag = lastTag.toLowerCase();
          var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
          var endTagLength = 0;
          var rest = html.replace(reStackedTag, function (all, text, endTag) {
            endTagLength = endTag.length;
            if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
              text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
            }
            if (options.chars) {
              options.chars(text);
            }
            return '';
          });
          index += html.length - rest.length;
          html = rest;
          parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
        }
    
        if (html === last) {
          throw new Error('Error parsing template:\n\n' + html);
        }
      }
    
      // Clean up any remaining tags
      parseEndTag();
    
      function advance(n) {
        index += n;
        html = html.substring(n);
      }
    
      function parseStartTag() {
        var start = html.match(startTagOpen);
        if (start) {
          var match = {
            tagName: start[1],
            attrs: [],
            start: index
          };
          advance(start[0].length);
          var end = void 0,
              attr = void 0;
          while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
            advance(attr[0].length);
            match.attrs.push(attr);
          }
          if (end) {
            match.unarySlash = end[1];
            advance(end[0].length);
            match.end = index;
            return match;
          }
        }
      }
    
      function handleStartTag(match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
    
        if (expectHTML) {
          if (lastTag === 'p') {
            parseEndTag('', lastTag);
          }
          if ((0, _index.canBeLeftOpenTag)(tagName) && lastTag === tagName) {
            parseEndTag('', tagName);
          }
        }
    
        var unary = isUnaryTag(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
    
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
          var args = match.attrs[i];
          // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
          if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
            if (args[3] === '') {
              delete args[3];
            }
            if (args[4] === '') {
              delete args[4];
            }
            if (args[5] === '') {
              delete args[5];
            }
          }
          var value = args[3] || args[4] || args[5] || '';
          attrs[i] = {
            name: args[1],
            value: isFromDOM ? decodeAttr(value, shouldDecodeTags) : value
          };
        }
    
        if (!unary) {
          stack.push({ tag: tagName, attrs: attrs });
          lastTag = tagName;
          unarySlash = '';
        }
    
        if (options.start) {
          options.start(tagName, attrs, unary, match.start, match.end);
        }
      }
    
      function parseEndTag(tag, tagName, start, end) {
        var pos = void 0;
        if (start == null) start = index;
        if (end == null) end = index;
    
        // Find the closest opened tag of the same type
        if (tagName) {
          var needle = tagName.toLowerCase();
          for (pos = stack.length - 1; pos >= 0; pos--) {
            if (stack[pos].tag.toLowerCase() === needle) {
              break;
            }
          }
        } else {
          // If no tag name is provided, clean shop
          pos = 0;
        }
    
        if (pos >= 0) {
          // Close all the open elements, up the stack
          for (var i = stack.length - 1; i >= pos; i--) {
            if (options.end) {
              options.end(stack[i].tag, start, end);
            }
          }
    
          // Remove the open elements from the stack
          stack.length = pos;
          lastTag = pos && stack[pos - 1].tag;
        } else if (tagName.toLowerCase() === 'br') {
          if (options.start) {
            options.start(tagName, [], true, start, end);
          }
        } else if (tagName.toLowerCase() === 'p') {
          if (options.start) {
            options.start(tagName, [], false, start, end);
          }
          if (options.end) {
            options.end(tagName, start, end);
          }
        }
      }
    }
  
  /***/ },
  /* 68 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseText = parseText;
    
    var _util = __webpack_require__(6);
    
    var _filterParser = __webpack_require__(69);
    
    var defaultTagRE = /\{\{((?:.|\\n)+?)\}\}/g;
    var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
    
    var buildRegex = (0, _util.cached)(function (delimiters) {
      var open = delimiters[0].replace(regexEscapeRE, '\\$&');
      var close = delimiters[1].replace(regexEscapeRE, '\\$&');
      return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
    });
    
    function parseText(text, delimiters) {
      var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
      if (!tagRE.test(text)) {
        return;
      }
      var tokens = [];
      var lastIndex = tagRE.lastIndex = 0;
      var match = void 0,
          index = void 0;
      while (match = tagRE.exec(text)) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
          tokens.push(JSON.stringify(text.slice(lastIndex, index)));
        }
        // tag token
        var exp = (0, _filterParser.parseFilters)(match[1].trim());
        tokens.push('_s(' + exp + ')');
        lastIndex = index + match[0].length;
      }
      if (lastIndex < text.length) {
        tokens.push(JSON.stringify(text.slice(lastIndex)));
      }
      return tokens.join('+');
    }
  
  /***/ },
  /* 69 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseFilters = parseFilters;
    function parseFilters(exp) {
      var inSingle = false;
      var inDouble = false;
      var curly = 0;
      var square = 0;
      var paren = 0;
      var lastFilterIndex = 0;
      var c = void 0,
          prev = void 0,
          i = void 0,
          expression = void 0,
          filters = void 0;
    
      for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
          // check single quote
          if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
        } else if (inDouble) {
          // check double quote
          if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
        } else if (c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
          if (expression === undefined) {
            // first filter, end of expression
            lastFilterIndex = i + 1;
            expression = exp.slice(0, i).trim();
          } else {
            pushFilter();
          }
        } else {
          switch (c) {
            case 0x22:
              inDouble = true;break; // "
            case 0x27:
              inSingle = true;break; // '
            case 0x28:
              paren++;break; // (
            case 0x29:
              paren--;break; // )
            case 0x5B:
              square++;break; // [
            case 0x5D:
              square--;break; // ]
            case 0x7B:
              curly++;break; // {
            case 0x7D:
              curly--;break; // }
          }
        }
      }
    
      if (expression === undefined) {
        expression = exp.slice(0, i).trim();
      } else if (lastFilterIndex !== 0) {
        pushFilter();
      }
    
      function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
      }
    
      if (filters) {
        for (i = 0; i < filters.length; i++) {
          expression = wrapFilter(expression, filters[i]);
        }
      }
    
      return expression;
    }
    
    function wrapFilter(exp, filter) {
      var i = filter.indexOf('(');
      if (i < 0) {
        // _f: resolveFilter
        return '_f("' + filter + '")(' + exp + ')';
      } else {
        var name = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return '_f("' + name + '")(' + exp + ',' + args;
      }
    }
  
  /***/ },
  /* 70 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.baseWarn = baseWarn;
    exports.pluckModuleFunction = pluckModuleFunction;
    exports.addProp = addProp;
    exports.addAttr = addAttr;
    exports.addStaticAttr = addStaticAttr;
    exports.addDirective = addDirective;
    exports.addStyle = addStyle;
    exports.addHook = addHook;
    exports.addHandler = addHandler;
    exports.getBindingAttr = getBindingAttr;
    exports.getAndRemoveAttr = getAndRemoveAttr;
    function baseWarn(msg) {
      console.error('[Vue parser]: ' + msg);
    }
    
    function pluckModuleFunction(modules, key) {
      return modules ? modules.map(function (m) {
        return m[key];
      }).filter(function (_) {
        return _;
      }) : [];
    }
    
    function addProp(el, name, value) {
      (el.props || (el.props = [])).push({ name: name, value: value });
    }
    
    function addAttr(el, name, value) {
      (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    }
    
    function addStaticAttr(el, name, value) {
      (el.staticAttrs || (el.staticAttrs = [])).push({ name: name, value: value });
    }
    
    function addDirective(el, name, value, arg, modifiers) {
      (el.directives || (el.directives = [])).push({ name: name, value: value, arg: arg, modifiers: modifiers });
    }
    
    function addStyle(el, type, value) {
      (el.jstyles || (el.jstyles = [])).push({ type: type, value: value });
    }
    
    function addHook(el, name, code) {
      var hooks = el.hooks || (el.hooks = {});
      var hook = hooks[name];
      /* istanbul ignore if */
      if (hook) {
        hook.push(code);
      } else {
        hooks[name] = [code];
      }
    }
    
    function addHandler(el, name, value, modifiers, important) {
      // check capture modifier
      if (modifiers && modifiers.capture) {
        delete modifiers.capture;
        name = '!' + name; // mark the event as captured
      }
      var events = void 0;
      if (modifiers && modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
      } else {
        events = el.events || (el.events = {});
      }
      var newHandler = { value: value, modifiers: modifiers };
      var handlers = events[name];
      /* istanbul ignore if */
      if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
      } else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
      } else {
        events[name] = newHandler;
      }
    }
    
    function getBindingAttr(el, name, getStatic) {
      var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
      if (dynamicValue != null) {
        return dynamicValue;
      } else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
          return JSON.stringify(staticValue);
        }
      }
    }
    
    function getAndRemoveAttr(el, name) {
      var val = void 0;
      if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i].name === name) {
            list.splice(i, 1);
            break;
          }
        }
      }
      return val;
    }
  
  /***/ },
  /* 71 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.optimize = optimize;
    
    var _util = __webpack_require__(6);
    
    var isStaticKey = void 0;
    
    var isPlatformReservedTag = void 0;
    
    var genStaticKeysCached = (0, _util.cached)(genStaticKeys);
    
    /**
     * Goal of the optimizier: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */
    function optimize(root, options) {
      if (!root) return;
      isStaticKey = genStaticKeysCached(options.staticKeys || '');
      isPlatformReservedTag = options.isReservedTag || function () {
        return false;
      };
      // first pass: mark all non-static nodes.
      markStatic(root);
      // second pass: mark static roots.
      markStaticRoots(root, false);
    }
    
    function genStaticKeys(keys) {
      return (0, _util.makeMap)('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
    }
    
    function markStatic(node) {
      node.static = isStatic(node);
      if (node.type === 1) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          var child = node.children[i];
          markStatic(child);
          if (!child.static) {
            node.static = false;
          }
        }
      }
    }
    
    function markStaticRoots(node, isInFor) {
      if (node.type === 1) {
        if (node.once || node.static) {
          node.staticRoot = true;
          node.staticInFor = isInFor;
          return;
        }
        if (node.children) {
          for (var i = 0, l = node.children.length; i < l; i++) {
            markStaticRoots(node.children[i], !!node.for);
          }
        }
      }
    }
    
    function isStatic(node) {
      if (node.type === 2) {
        // expression
        return false;
      }
      if (node.type === 3) {
        // text
        return true;
      }
      return !!(node.pre || !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !(0, _util.isBuiltInTag)(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      Object.keys(node).every(isStaticKey));
    }
  
  /***/ },
  /* 72 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generate = generate;
    
    var _events = __webpack_require__(73);
    
    var _helpers = __webpack_require__(70);
    
    var _index = __webpack_require__(74);
    
    var _index2 = _interopRequireDefault(_index);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    // configurable state
    var warn = void 0;
    
    var transforms = void 0;
    var dataGenFns = void 0;
    var platformDirectives = void 0;
    var staticRenderFns = void 0;
    var currentOptions = void 0;
    
    function generate(ast, options) {
      // save previous staticRenderFns so generate calls can be nested
      var prevStaticRenderFns = staticRenderFns;
      var currentStaticRenderFns = staticRenderFns = [];
      currentOptions = options;
      warn = options.warn || _helpers.baseWarn;
      transforms = (0, _helpers.pluckModuleFunction)(options.modules, 'transformCode');
      dataGenFns = (0, _helpers.pluckModuleFunction)(options.modules, 'genData');
      platformDirectives = options.directives || {};
      var code = ast ? genElement(ast) : '_h("div")';
      staticRenderFns = prevStaticRenderFns;
      return {
        render: 'with(this){return ' + code + '}',
        staticRenderFns: currentStaticRenderFns
      };
    }
    
    function genElement(el) {
      if (el.staticRoot && !el.staticProcessed) {
        // hoist static sub-trees out
        el.staticProcessed = true;
        staticRenderFns.push('with(this){return ' + genElement(el) + '}');
        return '_m(' + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ')';
      } else if (el.for && !el.forProcessed) {
        return genFor(el);
      } else if (el.if && !el.ifProcessed) {
        return genIf(el);
      } else if (el.tag === 'template' && !el.slotTarget) {
        return genChildren(el) || 'void 0';
      } else if (el.tag === 'slot') {
        return genSlot(el);
      } else {
        // component or element
        var code = void 0;
        if (el.component) {
          code = genComponent(el);
        } else {
          var data = genData(el);
          var children = el.inlineTemplate ? null : genChildren(el);
          code = '_h(\'' + el.tag + '\'' + (data ? ',' + data : '' // data
          ) + (children ? ',' + children : '' // children
          ) + ')';
        }
        // module transforms
        for (var i = 0; i < transforms.length; i++) {
          code = transforms[i](el, code);
        }
        return code;
      }
    }
    
    function genIf(el) {
      var exp = el.if;
      el.ifProcessed = true; // avoid recursion
      return '(' + exp + ')?' + genElement(el) + ':' + genElse(el);
    }
    
    function genElse(el) {
      return el.elseBlock ? genElement(el.elseBlock) : 'void 0';
    }
    
    function genFor(el) {
      var exp = el.for;
      var alias = el.alias;
      var iterator1 = el.iterator1 ? ',' + el.iterator1 : '';
      var iterator2 = el.iterator2 ? ',' + el.iterator2 : '';
      el.forProcessed = true; // avoid recursion
      return '(' + exp + ')&&_l((' + exp + '),' + ('function(' + alias + iterator1 + iterator2 + '){') + ('return ' + genElement(el)) + '})';
    }
    
    function genData(el) {
      if (el.plain) {
        return;
      }
    
      var data = '{';
    
      // directives first.
      // directives may mutate the el's other properties before they are generated.
      var dirs = genDirectives(el);
      if (dirs) data += dirs + ',';
    
      // key
      if (el.key) {
        data += 'key:' + el.key + ',';
      }
      // ref
      if (el.ref) {
        data += 'ref:' + el.ref + ',';
      }
      if (el.refInFor) {
        data += 'refInFor:true,';
      }
      // record original tag name for components using "is" attribute
      if (el.component) {
        data += 'tag:"' + el.tag + '",';
      }
      // slot target
      if (el.slotTarget) {
        data += 'slot:' + el.slotTarget + ',';
      }
      // module data generation functions
      for (var i = 0; i < dataGenFns.length; i++) {
        data += dataGenFns[i](el);
      }
      // v-show, used to avoid transition being applied
      // since v-show takes it over
      if (el.attrsMap['v-show']) {
        data += 'show:true,';
      }
      // attributes
      if (el.attrs) {
        data += 'attrs:{' + genProps(el.attrs) + '},';
      }
      // DOM props
      if (el.props) {
        data += 'domProps:{' + genProps(el.props) + '},';
      }
      // jstyle
      if (el.jstyles) {
        data += 'jstyles:{' + genJStyles(el.jstyles) + '},';
      }
      // hooks
      if (el.hooks) {
        data += 'hook:{' + genHooks(el.hooks) + '},';
      }
      // event handlers
      if (el.events) {
        data += (0, _events.genHandlers)(el.events) + ',';
      }
      if (el.nativeEvents) {
        data += (0, _events.genHandlers)(el.nativeEvents, true) + ',';
      }
      // inline-template
      if (el.inlineTemplate) {
        var ast = el.children[0];
        if (("development") !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
          warn('Inline-template components must have exactly one child element.');
        }
        if (ast.type === 1) {
          var inlineRenderFns = generate(ast, currentOptions);
          data += 'inlineTemplate:{render:function(){' + inlineRenderFns.render + '},staticRenderFns:[' + inlineRenderFns.staticRenderFns.map(function (code) {
            return 'function(){' + code + '}';
          }).join(',') + ']}';
        }
      }
      return data.replace(/,$/, '') + '}';
    }
    
    function genDirectives(el) {
      var dirs = el.directives;
      if (!dirs) return;
      var res = 'directives:[';
      var hasRuntime = false;
      var i = void 0,
          l = void 0,
          dir = void 0,
          needRuntime = void 0;
      for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = platformDirectives[dir.name] || _index2.default[dir.name];
        if (gen) {
          // compile-time directive that manipulates AST.
          // returns true if it also needs a runtime counterpart.
          needRuntime = !!gen(el, dir, warn);
        }
        if (needRuntime) {
          hasRuntime = true;
          res += '{name:"' + dir.name + '"' + (dir.value ? ',value:(' + dir.value + '),expression:' + JSON.stringify(dir.value) : '') + (dir.arg ? ',arg:"' + dir.arg + '"' : '') + (dir.modifiers ? ',modifiers:' + JSON.stringify(dir.modifiers) : '') + '},';
        }
      }
      if (hasRuntime) {
        return res.slice(0, -1) + ']';
      }
    }
    
    function genChildren(el) {
      if (el.children.length) {
        return '[' + el.children.map(genNode).join(',') + ']';
      }
    }
    
    function genNode(node) {
      if (node.type === 1) {
        return genElement(node);
      } else {
        return genText(node);
      }
    }
    
    function genText(text) {
      return text.type === 2 ? text.expression // no need for () because already wrapped in _s()
      : JSON.stringify(text.text);
    }
    
    function genSlot(el) {
      var slot = '$slots[' + (el.slotName || '"default"') + ']';
      var children = genChildren(el);
      return children ? '(' + slot + '||' + children + ')' : slot;
    }
    
    function genComponent(el) {
      var children = genChildren(el);
      return '_h(' + el.component + ',' + genData(el) + (children ? ',' + children : '') + ')';
    }
    
    function genProps(props) {
      var res = '';
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        res += '"' + prop.name + '":' + prop.value + ',';
      }
      return res.slice(0, -1);
    }
    
    function genJStyles(jstyles) {
      var res = '';
      var varReg = /\{\{.*\}\}/;
    
      for (var i = 0; i < jstyles.length; i++) {
        var jstyle = jstyles[i];
        if (varReg.test(jstyle.value)) {
          jstyle.value = jstyle.value.replace(/\{\{/g, '" + (').replace(/\}\}/g, ') + "');
        }
    
        res += '"' + jstyle.type + '":"' + jstyle.value + '",';
      }
      return res.slice(0, -1);
    }
    
    function genHooks(hooks) {
      var res = '';
      for (var _key in hooks) {
        res += '"' + _key + '":function(n1,n2){' + hooks[_key].join(';') + '},';
      }
      return res.slice(0, -1);
    }
  
  /***/ },
  /* 73 */
  /***/ function(module, exports) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.genHandlers = genHandlers;
    var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
    
    // keyCode aliases
    var keyCodes = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      'delete': [8, 46]
    };
    
    var modifierCode = {
      stop: '$event.stopPropagation();',
      prevent: '$event.preventDefault();',
      self: 'if($event.target !== $event.currentTarget)return;'
    };
    
    function genHandlers(events, native) {
      var res = native ? 'nativeOn:{' : 'on:{';
      for (var name in events) {
        res += '"' + name + '":' + genHandler(events[name]) + ',';
      }
      return res.slice(0, -1) + '}';
    }
    
    function genHandler(handler) {
      if (!handler) {
        return 'function(){}';
      } else if (Array.isArray(handler)) {
        return '[' + handler.map(genHandler).join(',') + ']';
      } else if (!handler.modifiers) {
        return simplePathRE.test(handler.value) ? handler.value : 'function($event){' + handler.value + '}';
      } else {
        var code = '';
        var keys = [];
        for (var key in handler.modifiers) {
          if (modifierCode[key]) {
            code += modifierCode[key];
          } else {
            keys.push(key);
          }
        }
        if (keys.length) {
          code = genKeyFilter(keys) + code;
        }
        var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
        return 'function($event){' + code + handlerCode + '}';
      }
    }
    
    function genKeyFilter(keys) {
      var code = keys.length === 1 ? normalizeKeyCode(keys[0]) : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
      if (Array.isArray(code)) {
        return 'if(' + code.map(function (c) {
          return '$event.keyCode!==' + c;
        }).join('&&') + ')return;';
      } else {
        return 'if($event.keyCode!==' + code + ')return;';
      }
    }
    
    function normalizeKeyCode(key) {
      return parseInt(key, 10) || // number keyCode
      keyCodes[key] || // built-in alias
      '_k(' + JSON.stringify(key) + ')' // custom alias
      ;
    }
  
  /***/ },
  /* 74 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _bind = __webpack_require__(75);
    
    var _bind2 = _interopRequireDefault(_bind);
    
    var _util = __webpack_require__(6);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
      bind: _bind2.default,
      cloak: _util.noop
    };
  
  /***/ },
  /* 75 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = bind;
    
    var _helpers = __webpack_require__(70);
    
    function bind(el, dir) {
      (0, _helpers.addHook)(el, 'construct', '_b(n1,' + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ')');
    }
  
  /***/ },
  /* 76 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectErrors = detectErrors;
    
    var _index = __webpack_require__(65);
    
    // operators like typeof, instanceof and in are allowed
    var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');
    // check valid identifier for v-for
    
    
    var identRE = /[A-Za-z_$][\w$]*/;
    // strip strings in expressions
    var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
    
    // detect problematic expressions in a template
    function detectErrors(ast) {
      var errors = [];
      if (ast) {
        checkNode(ast, errors);
      }
      return errors;
    }
    
    function checkNode(node, errors) {
      if (node.type === 1) {
        for (var name in node.attrsMap) {
          if (_index.dirRE.test(name)) {
            var value = node.attrsMap[name];
            if (value) {
              if (name === 'v-for') {
                checkFor(node, 'v-for="' + value + '"', errors);
              } else {
                checkExpression(value, name + '="' + value + '"', errors);
              }
            }
          }
        }
        if (node.children) {
          for (var i = 0; i < node.children.length; i++) {
            checkNode(node.children[i], errors);
          }
        }
      } else if (node.type === 2) {
        checkExpression(node.expression, node.text, errors);
      }
    }
    
    function checkFor(node, text, errors) {
      checkExpression(node.for || '', text, errors);
      checkIdentifier(node.alias, 'v-for alias', text, errors);
      checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
      checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
    }
    
    function checkIdentifier(ident, type, text, errors) {
      if (typeof ident === 'string' && !identRE.test(ident)) {
        errors.push('- invalid ' + type + ' "' + ident + '" in expression: ' + text);
      }
    }
    
    function checkExpression(exp, text, errors) {
      try {
        new Function('return ' + exp);
      } catch (e) {
        var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
        if (keywordMatch) {
          errors.push('- avoid using JavaScript keyword as property name: ' + ('"' + keywordMatch[0] + '" in expression ' + text));
        } else {
          errors.push('- invalid expression: ' + text);
        }
      }
    }
  
  /***/ },
  /* 77 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _class = __webpack_require__(78);
    
    var _class2 = _interopRequireDefault(_class);
    
    var _style = __webpack_require__(79);
    
    var _style2 = _interopRequireDefault(_style);
    
    var _transition = __webpack_require__(80);
    
    var _transition2 = _interopRequireDefault(_transition);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = [_class2.default, _style2.default, _transition2.default];
  
  /***/ },
  /* 78 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _textParser = __webpack_require__(68);
    
    var _helpers = __webpack_require__(70);
    
    function transformNode(el, options) {
      var warn = options.warn || _helpers.baseWarn;
      var staticClass = (0, _helpers.getAndRemoveAttr)(el, 'class');
      if (("development") !== 'production' && staticClass) {
        var expression = (0, _textParser.parseText)(staticClass, options.delimiters);
        if (expression) {
          warn('class="' + staticClass + '": ' + 'Interpolation inside attributes has been deprecated. ' + 'Use _class instead.');
        }
      }
      el.staticClass = JSON.stringify(staticClass);
    }
    
    function genData(el) {
      var data = '';
      if (el.staticClass) {
        data += 'staticClass:' + el.staticClass + ',';
      }
      return data;
    }
    
    exports.default = {
      staticKeys: ['staticClass'],
      transformNode: transformNode,
      genData: genData
    };
  
  /***/ },
  /* 79 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _textParser = __webpack_require__(68);
    
    var _helpers = __webpack_require__(70);
    
    function transformNode(el, options) {
      var warn = options.warn || _helpers.baseWarn;
      var staticStyle = (0, _helpers.getAndRemoveAttr)(el, 'style');
      if (("development") !== 'production' && staticStyle) {
        var expression = (0, _textParser.parseText)(staticStyle, options.delimiters);
        if (expression) {
          warn('style="' + staticStyle + '": ' + 'Interpolation inside attributes has been deprecated. ' + 'Use _style instead.');
        }
      }
      el.staticStyle = JSON.stringify(staticStyle);
    }
    
    function genData(el) {
      var data = '';
      if (el.staticStyle) {
        data += 'staticStyle:' + el.staticStyle + ',';
      }
      return data;
    }
    
    exports.default = {
      staticKeys: ['staticStyle'],
      transformNode: transformNode,
      genData: genData
    };
  
  /***/ },
  /* 80 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _helpers = __webpack_require__(70);
    
    function transformNode(el) {
      var transition = (0, _helpers.getBindingAttr)(el, 'transition');
      if (transition === '""') {
        transition = true;
      }
      if (transition) {
        el.transition = transition;
      }
      var mode = (0, _helpers.getBindingAttr)(el, 'transition-mode');
      if (mode) {
        el.transitionMode = mode;
      }
    }
    
    function genData(el) {
      return el.transition ? 'transition:' + el.transition + ',' : '';
    }
    
    function transformCode(el, code) {
      return el.transitionMode ? '_h(_e(\'TransitionControl\',{props:{mode:' + el.transitionMode + ',child:' + code + '}}))' : code;
    }
    
    exports.default = {
      transformNode: transformNode,
      genData: genData,
      transformCode: transformCode
    };
  
  /***/ },
  /* 81 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _model = __webpack_require__(82);
    
    var _model2 = _interopRequireDefault(_model);
    
    var _text = __webpack_require__(83);
    
    var _text2 = _interopRequireDefault(_text);
    
    var _html = __webpack_require__(84);
    
    var _html2 = _interopRequireDefault(_html);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
      model: _model2.default,
      text: _text2.default,
      html: _html2.default
    };
  
  /***/ },
  /* 82 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = model;
    
    var _helpers = __webpack_require__(70);
    
    var warn = void 0;
    
    function model(el, dir, _warn) {
      warn = _warn;
      var value = dir.value;
      var modifiers = dir.modifiers;
      if (el.tag === 'select') {
        return genSelect(el, value);
      } else {
        switch (el.attrsMap.type) {
          case 'checkbox':
            genCheckboxModel(el, value);
            break;
          case 'radio':
            genRadioModel(el, value);
            break;
          default:
            return genDefaultModel(el, value, modifiers);
        }
      }
    }
    
    function genCheckboxModel(el, value) {
      if (("development") !== 'production' && el.attrsMap.checked != null) {
        warn('<' + el.tag + ' v-model="' + value + '" checked>:\n' + 'inline checked attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
      }
      var valueBinding = (0, _helpers.getBindingAttr)(el, 'value');
      var trueValueBinding = (0, _helpers.getBindingAttr)(el, 'true-value') || 'true';
      var falseValueBinding = (0, _helpers.getBindingAttr)(el, 'false-value') || 'false';
      (0, _helpers.addProp)(el, 'checked', 'Array.isArray(' + value + ')' + ('?(' + value + ').indexOf(' + valueBinding + ')>-1') + (':(' + value + ')===(' + trueValueBinding + ')'));
      (0, _helpers.addHandler)(el, 'change', 'var $$a=' + value + ',' + '$$el=$event.target,' + ('$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');') + 'if(Array.isArray($$a)){' + ('var $$v=' + valueBinding + ',') + '$$i=$$a.indexOf($$v);' + 'if($$c){$$i<0&&$$a.push($$v)}' + 'else{$$i>-1&&$$a.splice($$i,1)}' + ('}else{' + value + '=$$c}'));
    }
    
    function genRadioModel(el, value) {
      if (("development") !== 'production' && el.attrsMap.checked != null) {
        warn('<' + el.tag + ' v-model="' + value + '" checked>:\n' + 'inline checked attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
      }
      var valueBinding = (0, _helpers.getBindingAttr)(el, 'value');
      (0, _helpers.addProp)(el, 'checked', '(' + value + ')===(' + valueBinding + ')');
      (0, _helpers.addHandler)(el, 'change', value + '=' + valueBinding);
    }
    
    function genDefaultModel(el, value, modifiers) {
      if (true) {
        if (el.tag === 'input' && el.attrsMap.value) {
          warn('<' + el.tag + ' v-model="' + value + '" value="' + el.attrsMap.value + '">:\n' + 'inline value attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
        }
        if (el.tag === 'textarea' && el.children.length) {
          warn('<textarea v-model="' + value + '">:\n' + 'inline content inside <textarea> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
        }
      }
    
      var type = el.attrsMap.type;
    
      var _ref = modifiers || {};
    
      var lazy = _ref.lazy;
      var number = _ref.number;
      var trim = _ref.trim;
    
      var event = lazy ? 'change' : 'input';
      var needCompositionGuard = !lazy && type !== 'range';
    
      var valueExpression = '$event.target.value' + (trim ? '.trim()' : '');
      var code = number || type === 'number' ? value + '=Number(' + valueExpression + ')' : value + '=' + valueExpression;
      if (needCompositionGuard) {
        code = 'if($event.target.composing)return;' + code;
      }
      (0, _helpers.addProp)(el, 'value', '(' + value + ')');
      (0, _helpers.addHandler)(el, event, code);
      if (needCompositionGuard) {
        // need runtime directive code to help with composition events
        return true;
      }
    }
    
    function genSelect(el, value) {
      if (true) {
        el.children.some(checkOptionWarning);
      }
      var code = value + '=Array.prototype.filter' + '.call($event.target.options,function(o){return o.selected})' + '.map(function(o){return "_value" in o ? o._value : o.value})' + (el.attrsMap.multiple == null ? '[0]' : '');
      (0, _helpers.addHandler)(el, 'change', code);
      // need runtime to help with possible dynamically generated options
      return true;
    }
    
    function checkOptionWarning(option) {
      if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
        var parentModel = option.parent && option.parent.type === 1 && option.parent.attrsMap['v-model'];
        warn('<select v-model="' + parentModel + '">:\n' + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
        return true;
      }
    }
  
  /***/ },
  /* 83 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = text;
    
    var _helpers = __webpack_require__(70);
    
    function text(el, dir) {
      if (dir.value) {
        (0, _helpers.addProp)(el, 'textContent', '_s(' + dir.value + ')');
      }
    }
  
  /***/ },
  /* 84 */
  /***/ function(module, exports, __webpack_require__) {
  
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = html;
    
    var _helpers = __webpack_require__(70);
    
    function html(el, dir) {
      if (dir.value) {
        (0, _helpers.addProp)(el, 'innerHTML', '_s(' + dir.value + ')');
      }
    }
  
  /***/ }
  /******/ ])
  });
  ;
  //# sourceMappingURL=xcore-vue.js.map

/***/ },
/* 3 */
/*!*********************************************!*\
  !*** ./~/@mogu/logger/dist/logger.xcore.js ***!
  \*********************************************/
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
    (function () {
      var hasjQuery = window.jQuery || window.Zepto;
      var nodeIndex = function nodeIndex(nodes, node) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          if (nodes[i] == node) {
            return i + 1;
          }
        }
        return -1;
      };
      var jq = {
        getA: function getA(node) {
          var _node = node;
          if (_node.tagName != 'A') {
            while (_node.parentNode) {
              _node = _node.parentNode;
              if (_node.tagName == 'A') {
                return _node;
              }
            }
          } else {
            return node;
          }
        },
        getParentByClass: function getParentByClass(node, cls) {
          if (!node) return;
          if (hasjQuery) {
            return $(node).parents('.' + cls);
          } else {
            var _node = node,
                _hasClass;
            while (_node.parentNode) {
              _node = _node.parentNode;
              _hasClass = _node.className && _node.className.indexOf(cls) != -1;
              if (_hasClass) return _node;
            }
          }
        },
        getParents: function getParents(node, attr) {
          if (!node) return;
          attr = attr || '';
          if (hasjQuery) {
            attr = '[' + attr + ']';
            return $(node).parents(attr)[0];
          } else {
            var _node = node,
                _attr;
            while (_node.parentNode) {
              _node = _node.parentNode;
              _attr = _node.getAttribute && _node.getAttribute(attr);
              if (_attr) return _node;
            }
            return;
          }
        },
        getIndex: function getIndex(selector, attr, node) {
          if (!selector || !attr || !node) return 0;
          if (hasjQuery) {
            return $('[' + selector + '="' + attr + '"]').index($(node)) + 1;
          } else {
            if (document.querySelectorAll) {
              var nodes = document.querySelectorAll('[' + selector + '="' + attr + '"]');
              return nodeIndex(nodes, node);
            } else {
              return 1;
            }
          }
        },
        getElemIndex: function getElemIndex(elem, selector, node) {
          if (!elem || !selector || !node) return 0;
          if (hasjQuery) {
            return $(elem).find(selector).index($(node)) + 1;
          } else {
            if (elem.querySelectorAll) {
              var nodes = elem.querySelectorAll(selector);
              return nodeIndex(nodes, node);
            } else {
              return 1;
            }
          }
        },
        is: function is(node, tagName) {
          if (!node || !tagName) return false;
          if (node.length) {
            node = node[0];
          }
          if (node.nodeName.toLowerCase() === tagName.toLowerCase()) {
            return true;
          }
        }
      };
      logger.jq = jq;
    })();
    //工具类
    //暴露对象：logger.util
    var CBID = 1001;
    var events = {};
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
          url = location.search;
        }
        url = url.split('#')[0];
        var str = "(^|&|" + "\\?" + ")" + name + "=([^&]*)(&|$)";
        var reg = new RegExp(str, 'i');
        var r = url.substr(1).match(reg);
        if (r !== null) {
          return decodeURIComponent(r[2]);
        }
        return '';
      },
      setQuery: function setQuery(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
          return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
          return uri + separator + key + "=" + value;
        }
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
      },
      /**
     * 异步加载script文件
     *
     * @private
     */
      loadScript: function loadScript(url, callback) {
        window['callback_' + CBID] = function (result) {
          if (callback) {
            callback(result);
          }
        };
        url += '?callback=callback_' + CBID;
        CBID += 1;
  
        if (navigator.userAgent.toLowerCase().indexOf('xcore') > -1) {
          if (window.loader) {
            window.loader.script(url);
          }
        } else {
          var script = document.createElement('script');
          script.src = url;
  
          var target = document.getElementsByTagName('head')[0];
          target.appendChild(script);
        }
      },
      listenTo: function listenTo(name, func) {
        if (!events[name]) {
          events[name] = [];
        }
        events[name].push(func);
      },
      fire: function fire(name) {
        var aryFns = events[name];
        if (!aryFns) return;
        if (aryFns.length) {
          for (var i = 0, l = aryFns.length; i < l; i++) {
            aryFns[i].call();
          }
          events[name] = [];
        }
      }
    };
    logger.util = util;
    // 配置文件
    // 暴露对象：logger.config
    var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
    var cookieHost = 'mogujie';
    var host = location.host || location.domain || document.domain;
    if (host.indexOf('meilishuo') != -1) {
      cookieHost = 'meilishuo';
    }
    logger.config = {
      //开启mogu.js打点, 正常情况下只向log.php打点，但要兼容之前的数据，所以暂时要打点到mogu.js
      EnableLogMoGuJs: true,
  
      //打点地址
      LogUrl: protocol + '//log.juangua.com/log.php',
      LogMoGuJsUrl: protocol + '//log.juangua.com/mogu.js',
  
      //cookie请求地址，暂时只支持mogujie\meilishuo的
      CookieUrl: protocol + '//portal.' + cookieHost + '.com/api/util/getUuid',
  
      //是否需要请求cookie
      shouldRequestCookie: function shouldRequestCookie() {
        if (location.protocol.indexOf('file:') != -1) {
          //离线化后不种cookie
          return false;
        }
        var uuid = logger.util.getCookieOrFunc(logger.config.uuid);
        if (!uuid) {
          //没有uuid
          return true;
        }
        return false;
      },
  
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
      platform: function platform() {
        var _ua = navigator.userAgent.toLowerCase();
        if (/qq\/([\d\.]+)/.test(_ua)) {
          //蘑菇街页面在手Q下平台字段为48
          return 48;
        }
      },
  
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
      chasing: ['f', 'f2', 'mlf'],
  
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
    /**
    * 修正android客户端refer错误的问题, 兼容蘑菇街、美丽说
    */
    ;(function () {
      logger.needReferFix = false;
      var ua = navigator.userAgent.toLocaleLowerCase();
      var isAndroidApp = logger.info.isApp && logger.info.isAndroid;
      var isMelishuo = ua.indexOf('meilishuo') != -1;
      var isMogujie = ua.indexOf('mogujie') != -1;
      var hasNotfix = ua.indexOf('referfix=1') != -1;
  
      var mgjLink = ['^http://(m|www).mogujie.com/x6/wall/book/([a-z]+)/?(\\S*)$', '^http://(m|www).mogujie.com/x6/marketchannel\\?(\\S*)$', '^http://(m|www).mogujie.com/x6/detail/(\\w*)[\\?]?(\\S*)$', '^http://(m|www).mogujie.com/x6/shop/(.*?)/goodsall[\\?]?(\\S*)$', '^http://(m|www).mogujie.com/x6/account/getprofile[\\?].*?uid=(\\w*).*?$', '^http://(m|www).mogujie.com/x6/attention/lifestyle[\\?].*?id=(\\w*).*?((ptp|url_ptp)=([\\w.]+))?$', '^http://(m|www).mogujie.com/x6/shop/(\\w+)/?(\\?(.*))?$', '^http://(m|www).mogujie.com/x6/book/([a-z]+)/?(\\S*)$', '^http://(m|www).mogujie.com/x6/search/?\\?keywords=([^&]+)(\\S*)$'];
  
      var mlsLink = ["^https?:\/\/sgitem.meilishuo.com\/sgdetail\/(\\w+)\/?\\??(.*?)$", "^https?:\/\/item.meilishuo.com\/h5\/detail\/(\\w+)\/?\\??(.*?)$", "^https?:\/\/www.mogujie.com\/trade\/order\/detail4buyer\\?.*?orderId=(\\w+).*?$", "^https?:\/\/www.mogujie.com\/trade\/refund\/detail\\?.*?itemOrderId=(\\w+).*?$", "^(http|https):\/\/sgitemapp.meilishuo.com\/sgdetail\/(\\w+).*?$", "^https?:\/\/act.meilishuo.com\/keyword\/?\\??(.*?)?$", "^https?:\/\/weixin.meilishuo.com\/wx\/shop\/(\\w+)\/?\\??(.*?)$"];
      function matchNativeLink(ary, url) {
        var re;
        for (var i = 0; i < ary.length; i++) {
          re = new RegExp(ary[i]);
          if (re.test(url)) {
            return true;
          }
        }
        return false;
      }
      logger.matchNativeLink = matchNativeLink;
      var isMlsNativeLink = function isMlsNativeLink(url) {
        if (url.indexOf('mls://') != -1) {
          return true;
        }
        return matchNativeLink(mlsLink, url);
      };
  
      var isMgjNativeLink = function isMgjNativeLink(url) {
        if (url.indexOf('mgj://') != -1) {
          return true;
        }
        //过滤一大部分url
        if (url.indexOf('/x6/') == -1) {
          return false;
        }
        return matchNativeLink(mgjLink, url);
      };
      logger.isMgjNativeLink = isMgjNativeLink;
      var checkReferFix = function checkReferFix() {
        var _ver = '';
        if (isAndroidApp) {
          if (hasNotfix) return true;
          var re = ua.match(/\/(\d{3})\//);
          if (re && re[1]) {
            _ver = parseInt(re[1]);
            if (isMelishuo && _ver <= 832) {
              return true;
            } else if (isMogujie && _ver <= 806) {
              return true;
            }
          }
        }
        return false;
      };
  
      var addPtpFilter = function addPtpFilter(url) {
        return logger.util.setQuery(url, '_isfilter', '1');
      };
      // var addPtpRefer= function(url){
      //  return logger.util.setQuery(url, '_realrefer', encodeURIComponent(location.href));
      // };
  
      //是否需要修复refer
      logger.needReferFix = checkReferFix();
  
      //h5->h5， h5->native需要修复url，分别添加_isfilter、_realrefer
      logger.fixReferUrl = function (url) {
        if (isMelishuo && isMlsNativeLink(url)) {
          //美丽说的短链
          return url;
        } else if (isMogujie && isMgjNativeLink(url)) {
          //蘑菇街的短链
          return url;
        } else {
          //不是native页面
          return addPtpFilter(url);
        }
      };
    })()
    //ptp相关信息的收集
    //暴露logger.ptp
  
    ;
    (function () {
      var config = logger.config;
      var info = logger.info;
      var jq = logger.jq;
      var hash = new Hash();
      var ptp;
      /**
     * 获取平台字段
     * @returns {string}
     */
      function getCntA() {
        // 不再提供a字段的覆盖
        // var custome = util.getValue(config.ptp_cnt_a);
        // if (custome) {
        //  return custome;
        // }
        var _ptp_cnt_a = '1';
  
        // if (info.isXd) {
        //  _ptp_cnt_a = 'xd1';
        // }
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
        var _url = location.href.split('?')[0];
        // _url = _url.replace(/[\/\.]/, '_');
        _ptp_cnt_b = hash.pageHash(_url);
        return _ptp_cnt_b;
      }
  
      function getCpsInfo() {
        var _cpsinfo = util.getCookieOrFunc(config.cpsinfo);
        if (!_cpsinfo) return '';
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
            d: jq.getIndex('data-ptp-customc', _attr, node)
            // d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
          };
        }
        node = jq.getParents(node, 'data-ptp-customc');
        // node = $(node).parents('[data-ptp-customc]')[0];
        if (!node) return;
        _attr = node.getAttribute('data-ptp-customc');
        if (_attr) {
          return {
            c: _attr,
            d: jq.getIndex('data-ptp-customc', _attr, node)
            // d: $('[data-ptp-customc="' + _attr + '"]').index($(node)) + 1
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
          cpsinfo: getCpsInfo(),
          refer: location.href,
          rerefer: document.referrer,
          ptp_url: util.getQuery('ptp', location.href),
          ptp_ref: document.referrer ? util.getQuery('ptp', document.referrer) : ''
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
          var keyC = 0,
              //C字段
          keyD = 0; //D字段
          if (customC) {
            return ptp.getPtpCnt(customC.c, customC.d);
          }
  
          // var $parent = $(node).parents('[data-ptp]');
          var parent = jq.getParents(node, 'data-ptp');
          var item = jq.getParentByClass(node, 'data-ptp-item');
          if (parent) {
            keyC = parent.getAttribute('data-ptp');
            //获取当前元素在父级元素中的index
            if (item) {
              keyD = jq.getElemIndex(parent, '.data-ptp-item', item);
            } else {
              keyD = jq.getElemIndex(parent, 'a', node);
            }
            // var $borders = $parent.find('.data-ptp-item');
            // if ($borders.length) {
            //  //通过data-ptp-item来划分index
            //  keyD = $borders.index($(node).parents('.data-ptp-item')) + 1;
            // } else {
            //  //通过a标签的顺序获取
            //  keyD = $parent.find('a').index($(node)) + 1;
            // }
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
          href = util.setQuery(href, 'ptp', ptpCnt);
          //添加追踪参数
          href = ptp.getChasingParams(href);
          //添加data-ext-acm参数
          href = ptp.getExtendParams(node, href);
          //android807以前修正refer问题
          if (logger.needReferFix) {
            //需要修正
            href = logger.fixReferUrl(href);
          }
          if (anchor) href += anchor[1];
          return href;
        },
        /*
      * 从url中获取需要跟踪的参数
      */
        getChasingParams: function getChasingParams(url) {
          if (url === undefined) url = '';
          var result = url;
          if (!config.chasing) return result;
          //变成数组
          if (!config.chasing.length) {
            config.chasing = [config.chasing];
          }
          var key, value;
          for (var i = 0, l = config.chasing.length; i < l; i++) {
            key = config.chasing[i];
            // hasVal = util.getQuery(key, url);  //url里面有没有这个值
            value = util.getQuery(key);
            if (value) {
              // result.push(key + '=' + value);
              result = util.setQuery(result, key, value);
            }
          }
          return result;
        },
        getExtendParams: function getExtendParams(node, href) {
          var result = href;
          if (!node || !jq.is(node, 'a')) {
            return result;
          }
          if (node.length) node = node[0];
          var extend = config.urlExtend || [];
          for (var i = 0, l = extend.length; i < l; i++) {
            var key = extend[i];
            var value = node.getAttribute('data-ext-' + key);
            if (value) {
              //没有这个值才插进来
              // result.push(key + '=' + encodeURIComponent(value));
              result = util.setQuery(result, key, value);
            }
          }
          return result;
        },
        /*
      * 刷新Ptp信息，当单页面url变化但页面无刷新时(pushState)，可以刷新ptp信息，以便重新打一个P事件
      */
        refreshPtp: function refreshPtp() {
          ptpInfo = refreshPtpInfo();
          abcde = refreshAbcde();
        },
        /**
      * 重新从cookie里面获取值，在前端种完cookie后调用
      */
        refreshCookie: function refreshCookie() {
          if (ptpInfo) {
            ptpInfo.sfrom = util.getCookieOrFunc(config.sfrom);
            ptpInfo.uuid = util.getCookieOrFunc(config.uuid);
            ptpInfo.uid = util.getCookieOrFunc(config.uid);
            ptpInfo.cpsinfo = getCpsInfo();
          }
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
        sendLog: function sendLog(url, data, useImg) {
          var version = util.getIEVersion();
          var isLowIE = version != -1 && version <= 8;
          if (isLowIE && !useImg) {
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
      var jq = logger.jq;
  
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
        node.href = ptp.makeUrl(href, id, node);
      }
  
      //点击事件处理
      function handleClickEvent(event) {
        /*jshint scripturl:true*/
        var _event = event || window.event,
            target = _event.target || _event.srcElement,
            aLink = jq.getA(target),
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
    var config = logger.config;
    var send = logger.send;
    var isLoggerReady = !config.shouldRequestCookie();
  
    //进来就发请求，如果需要
    if (!isLoggerReady) {
      //请求发cookie
      util.loadScript(config.CookieUrl, function () {
        //加载打点js
        isLoggerReady = true;
        //更新数据
        logger.ptp.refreshCookie();
        util.fire('LoggerReady');
      });
    }
  
    function _logP() {
      var loggerInfo = ptp.getPtpInfoAndExtra();
      var pEventId = util.getValue(config.pEventId);
      send.logData('p', pEventId, loggerInfo);
      if (config.EnableLogMoGuJs) {
        //打到mogu.js
        send.sendLog(config.LogMoGuJsUrl, loggerInfo, true);
      }
    }
  
    function logPEvent() {
      if (!logger.info.isNative) {
        //打到log.php
        if (isLoggerReady) {
          _logP();
        } else {
          util.listenTo('LoggerReady', function () {
            _logP();
          });
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
      var loggerInfo = ptp.getPtpInfoAndExtra();
      if (isLoggerReady) {
        logger.send.logData('e', eventId, util.extend({}, loggerInfo, json));
      } else {
        util.listenTo('LoggerReady', function () {
          var loggerInfo = ptp.getPtpInfoAndExtra();
          logger.send.logData('e', eventId, util.extend({}, loggerInfo, json));
        });
      }
      //如果业务接入了mta，往mta上报一个自定义事件
      if (window.MtaH5 && MtaH5.clickStat) {
        MtaH5.clickStat(eventId, json);
      }
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
      return ptp.makeUrl(url, ptpCnt, node);
    };
  
    //打一个e事件
    if (logger.needReferFix && document.referrer) {
      var _loggerInfo = ptp.getPtpInfoAndExtra();
      logger.log('016000616', {
        ptp_cnt2: _loggerInfo.ptp_cnt,
        ptp_url2: _loggerInfo.ptp_url,
        ptp_ref2: _loggerInfo.ptp_ref
      });
    }
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
/*!****************************************!*\
  !*** ./~/@component/xcore-a/index.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 5)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-a/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 6)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 5 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./~/@component/xcore-a/index.vue ***!
  \********************************************************************************************************************************************************************************/
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
/*!*************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./~/@component/xcore-a/index.vue ***!
  \*************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view :href=\"href\" @click=\"jump\">\n  <slot></slot>\n</view>\n";

/***/ },
/* 7 */
/*!***********************************!*\
  !*** ./source/pages/home/app.vue ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./app.vue */ 8)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/app.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./app.vue */ 56)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./app.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 8 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/app.vue ***!
  \***************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 9);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _swipper = __webpack_require__(/*! ./modules/swipper */ 10);
  
  var _swipper2 = _interopRequireDefault(_swipper);
  
  var _brandHotList = __webpack_require__(/*! ./modules/brandHotList */ 22);
  
  var _brandHotList2 = _interopRequireDefault(_brandHotList);
  
  var _horizontalScroll = __webpack_require__(/*! ./modules/horizontalScroll */ 29);
  
  var _horizontalScroll2 = _interopRequireDefault(_horizontalScroll);
  
  var _keyWord = __webpack_require__(/*! ./modules/keyWord */ 33);
  
  var _keyWord2 = _interopRequireDefault(_keyWord);
  
  var _scrollWallTab = __webpack_require__(/*! ./modules/scrollWallTab */ 37);
  
  var _scrollWallTab2 = _interopRequireDefault(_scrollWallTab);
  
  var _newTypeGoodsWall = __webpack_require__(/*! ./modules/newTypeGoodsWall */ 44);
  
  var _newTypeGoodsWall2 = _interopRequireDefault(_newTypeGoodsWall);
  
  var _pubsub = __webpack_require__(/*! ./modules/pubsub */ 40);
  
  var _pubsub2 = _interopRequireDefault(_pubsub);
  
  var _data = __webpack_require__(/*! ./modules/scrollWallTab/data */ 51);
  
  var _data2 = _interopRequireDefault(_data);
  
  var _xcoreTips = __webpack_require__(/*! @component/xcore-tips */ 52);
  
  var _xcoreTips2 = _interopRequireDefault(_xcoreTips);
  
  var _xcoreAjax = __webpack_require__(/*! @component/xcore-ajax */ 25);
  
  var _xcoreAjax2 = _interopRequireDefault(_xcoreAjax);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    components: {
      Swipper: _swipper2.default,
      BrandHotList: _brandHotList2.default,
      HorizontalScroll: _horizontalScroll2.default,
      KeyWord: _keyWord2.default,
      ScrollWallTab: _scrollWallTab2.default,
      GoodsWall: _newTypeGoodsWall2.default,
      Tips: _xcoreTips2.default
    },
  
    data: function data() {
      return {
        style: _style2.default,
        swipperData: [],
        brandHotListData: [],
        horizontalScrollData: [],
        keyWordData: [],
        scrollWallData: _data2.default,
        goodsWallCid: '',
        isLoading: false,
        isMoreLoading: false
      };
    },
    created: function created() {
      var _this = this;
  
      this.isLoading = true;
      (0, _xcoreAjax2.default)({
        url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=6165%2C5465%2C6064%2C11283',
        dataType: 'jsonp',
        success: function success(data) {
          if (data && data.success) {
            var d = data.data;
            _this.swipperData = d['6165'].list;
            _this.brandHotListData = d['5465'].list;
            _this.horizontalScrollData = d['6064'].list;
            _this.keyWordData = d['11283'].list;
          } else {
            _this.showTip('网络请求错误，请刷新页面重试');
          }
        },
        error: function error() {
          _this.showTip('网络请求错误，请刷新页面重试');
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
      },
      setLoading: function setLoading(isLoading) {
        this.isLoading = isLoading;
      },
      setMoreLoading: function setMoreLoading(isLoading) {
        this.isMoreLoading = isLoading;
      },
      showTip: function showTip(message) {
        this.$refs.tips.show(message);
      }
    }
  };

/***/ },
/* 9 */
/*!************************************!*\
  !*** ./source/pages/home/style.js ***!
  \************************************/
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    container: {
      flex: 1,
      // flexDirection: 'column',
      // flexWrap: 'nowrap',
      backgroundColor: '#f6f6f6'
    },
    loading: {
      height: 2000,
      paddingTop: 40,
      width: 750,
      flexDirection: 'column'
    },
    moreLoading: {
      flexDirection: 'column',
      height: 120,
      paddingTop: 40,
      width: 750
    },
    loadingText: {
      width: 750,
      textAlign: 'center',
      color: '#999'
    }
  };

/***/ },
/* 10 */
/*!*****************************************************!*\
  !*** ./source/pages/home/modules/swipper/index.vue ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 11)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/swipper/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 21)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 11 */
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/swipper/index.vue ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 12);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _xcoreSliderImage = __webpack_require__(/*! @component/xcore-slider-image */ 13);
  
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
          item.c = 'banner_' + _this.sourcekey;
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
/*!****************************************************!*\
  !*** ./source/pages/home/modules/swipper/style.js ***!
  \****************************************************/
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
      left: 0,
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
/*!***************************************************!*\
  !*** ./~/@component/xcore-slider-image/index.vue ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 14)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-slider-image/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 20)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 14 */
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./~/@component/xcore-slider-image/index.vue ***!
  \*******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _web = __webpack_require__(/*! ./web */ 15);
  
  var _web2 = _interopRequireDefault(_web);
  
  var _style = __webpack_require__(/*! ./style */ 19);
  
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
      auto: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
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
/*!*******************************************************!*\
  !*** ./~/@component/xcore-slider-image/web/index.vue ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 16)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-slider-image/web/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 18)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 16 */
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./~/@component/xcore-slider-image/web/index.vue ***!
  \***********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style */ 17);
  
  var _style2 = _interopRequireDefault(_style);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    props: {
      width: Number,
      height: Number,
      images: Array,
      auto: Boolean,
      interval: Number,
      onChange: Function
    },
  
    data: function data() {
      return {
        style: _style2.default,
        currentIndex: 0,
        loopTimer: 0,
        imagesData: this.images };
    },
  
  
    computed: {
      leftIndex: function leftIndex() {
        var index = this.currentIndex - 1;
        if (index < 0) {
          index = this.imagesData.length - 1;
        }
        return index;
      },
      rightIndex: function rightIndex() {
        var index = this.currentIndex + 1;
        if (index >= this.imagesData.length) {
          index = 0;
        }
        return index;
      }
    },
  
    created: function created() {
      this.startX = 0;
  
      this.moveX = 0;
  
      this.isOnly2Imgs = false;
    },
    mounted: function mounted() {
      var _this = this;
  
      this.lengthJudge();
  
      this.startLoop();
  
      if (this.imagesData.length) {
        this.onChange({ index: 0 });
      }
  
      this.$watch('images', function (val, oldVal) {
        _this.imagesData = val;
        _this.lengthJudge();
        _this.currentIndex = 0;
        if (_this.imagesData.length) {
          _this.onChange({ index: 0 });
        }
        _this.startLoop();
      });
  
      this.$watch('auto', function (val, oldVal) {
        if (val) {
          _this.startLoop();
        } else {
          _this.stopLoop();
        }
      });
  
      this.$watch('interval', function (val, oldVal) {
        _this.stopLoop();
        _this.startLoop();
      });
    },
  
  
    methods: {
      imgClass: function imgClass(index) {
        return index === this.currentIndex ? 'current' : index === this.leftIndex ? 'left' : 'right';
      },
      lengthJudge: function lengthJudge() {
        if (this.images.length === 2) {
          this.isOnly2Imgs = true;
          this.imagesData.push(this.images[0]);
          this.imagesData.push(this.images[1]);
        } else {
          this.isOnly2Imgs = false;
        }
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
        if (this.isOnly2Imgs) {
          this.onChange({ index: index % 2 });
        } else {
          this.onChange({ index: index });
        }
      },
      goLeft: function goLeft() {
        this.enableTransition(this.currentIndex);
        this.enableTransition(this.leftIndex);
  
        this.disableTransition(this.rightIndex);
        var index = this.leftIndex;
        this.currentIndex = index;
        if (this.isOnly2Imgs) {
          this.onChange({ index: index % 2 });
        } else {
          this.onChange({ index: index });
        }
      },
      startLoop: function startLoop() {
        var _this2 = this;
  
        if (this.loopTimer) {
          this.stopLoop();
        }
  
        if (this.imagesData.length > 1 && this.auto) {
          this.loopTimer = setInterval(function () {
            _this2.goRight();
          }, this.interval);
        }
      },
      stopLoop: function stopLoop() {
        clearInterval(this.loopTimer);
      },
      onTouchstart: function onTouchstart(event) {
        if (this.imagesData.length <= 1) return;
        if (event.changedTouches && event.changedTouches[0]) {
          this.stopLoop();
          this.startX = event.changedTouches[0].clientX;
        }
      },
      onTouchmove: function onTouchmove(event) {
        if (this.imagesData.length <= 1) return;
        if (event.changedTouches && event.changedTouches[0]) {
          this.moveX = event.changedTouches[0].clientX - this.startX;
          var sliderWidth = this.$refs.wrap.clientWidth;
          this.disableTransition(this.currentIndex);
          this.disableTransition(this.leftIndex);
          this.disableTransition(this.rightIndex);
          this.translate3d(this.currentIndex, this.moveX);
          this.translate3d(this.leftIndex, -sliderWidth + this.moveX);
          this.translate3d(this.rightIndex, sliderWidth + this.moveX);
        }
      },
      onTouchend: function onTouchend(event) {
        if (this.imagesData.length <= 1) return;
        if (event.changedTouches && event.changedTouches[0]) {
          if (Math.abs(this.moveX) > 30) {
            this.moveX < 0 ? this.goRight() : this.goLeft();
          } else {
            var sliderWidth = this.$refs.wrap.clientWidth;
            this.enableTransition(this.currentIndex);
            this.enableTransition(this.leftIndex);
            this.enableTransition(this.rightIndex);
            this.translate3d(this.currentIndex, 0);
            this.translate3d(this.leftIndex, -sliderWidth);
            this.translate3d(this.rightIndex, sliderWidth);
          }
          this.moveX = 0;
          this.startLoop();
        }
      }
    }
  };

/***/ },
/* 17 */
/*!******************************************************!*\
  !*** ./~/@component/xcore-slider-image/web/style.js ***!
  \******************************************************/
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
/*!****************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./~/@component/xcore-slider-image/web/index.vue ***!
  \****************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view ref=\"wrap\" _style=\"height: {{height}}; width: {{width}}\" @touchstart=\"onTouchstart\"\n  @touchmove.prevent=\"onTouchmove\" @touchend=\"onTouchend\">\n  <view v-for=\"image,index in imagesData\" ref=\"img\" class=\"imgWrap\"\n     _class=\"{{imgClass(index)}}\">\n    <image :src=\"image\" _style=\"height: {{height}}; width: {{width}}\"/>\n  </view>\n</view>\n";

/***/ },
/* 19 */
/*!**************************************************!*\
  !*** ./~/@component/xcore-slider-image/style.js ***!
  \**************************************************/
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
/*!************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./~/@component/xcore-slider-image/index.vue ***!
  \************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view class=\"wrap\">\n  <slider-image :images=\"images\" :auto=\"auto\" :interval=\"interval\"\n    _style=\"height: {{height}}; width: {{width}}\"\n    v-if=\"isNative\" @change=\"onChange\" @click=\"onClick\"></slider-image>\n  <view v-else>\n    <view @click=\"onClick\">\n      <slider-web :images=\"images\" :auto=\"auto\" :interval=\"interval\"\n        :width=\"width\" :height=\"height\" :on-change=\"onChange\"></slider-web>\n    </view>\n  </view>\n  <slot>\n    <view class=\"indicatorWrap\">\n      <view class=\"indicator\" v-for=\"item, index in data\"\n        _class=\"{{ index === activeIndex ? 'active' : '' }}\"></view>\n    </view>\n  </slot>\n</view>\n";

/***/ },
/* 21 */
/*!**************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/swipper/index.vue ***!
  \**************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <slider :data=\"sliderData\" :change=\"onSliderChange\">\n    <view class=\"indicatorWrap\">\n      <view class=\"triggerInner\">\n        <view class=\"indicator\" v-for=\"item, index in sliderData\"\n          _class=\"{{ index === activeIndex ? 'active' : '' }}\"></view>\n      </view>\n    </view>\n  </slider>\n</view>\n";

/***/ },
/* 22 */
/*!**********************************************************!*\
  !*** ./source/pages/home/modules/brandHotList/index.vue ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 23)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/brandHotList/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 28)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 23 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/brandHotList/index.vue ***!
  \**************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 24);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _xcoreAjax = __webpack_require__(/*! @component/xcore-ajax */ 25);
  
  var _xcoreAjax2 = _interopRequireDefault(_xcoreAjax);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    props: {
      items: Array,
      sourcekey: Number
    },
    data: function data() {
      return {
        style: _style2.default,
        isGot: false,
        shopId: 20757156,
        couponId: '1hv5hidmm' };
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
  
        (0, _xcoreAjax2.default)({
          url: 'http://promotion.mogujie.com/jsonp/getShopCoupon/1',
          dataType: 'jsonp',
          data: {
            campId: this.couponId,
            shopId: this.idToUrl(this.shopId),
            _: new Date().getTime()
          },
          success: function success(data) {
            var msg = '';
            if (data && data.success && data.returnCode === 'SUCCESS' && data.data) {
              msg = '成功领取';
              _this.isGot = true;
            } else if (data && data.returnCode === 'SESSION_INVALID') {
              if (/(mogujie|xcore)/i.test(navigator.userAgent)) {
                window.open('mgj://login');
              } else {
                var url = 'http://portal.mogujie.com/login?refer=' + encodeURIComponent(location.href);
                if (window.__logger) {
                  url = __logger.generatePtpParams(url);
                }
                window.open(url);
              }
            } else if (data && data.returnCode === '50006') {
              msg = data.message;
              _this.isGot = true;
            } else {
              msg = data.message;
            }
  
            if (msg) {
              _this.$parent.showTip(msg);
            }
          }
        });
      }
    }
  };

/***/ },
/* 24 */
/*!*********************************************************!*\
  !*** ./source/pages/home/modules/brandHotList/style.js ***!
  \*********************************************************/
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
      backgroundColor: '#fff',
      justifyContent: 'space-between'
    },
    left: {
      position: 'relative',
      height: 442,
      width: 306
    },
    leftLink: {
      // height: 332,
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
      top: 338,
      width: 130,
      height: 48,
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
      width: 446,
      height: 440,
      flexDirection: 'column',
      backgroundColor: '#e5e5e5'
    },
    rightLine: {
      width: 446,
      height: 220,
      marginBottom: 'pixel',
      flexDirection: 'row'
    },
    rightItem: {
      width: 220,
      height: 220,
      marginLeft: 'pixel',
      backgroundColor: '#fff'
    },
    itemImage: {
      width: 220,
      height: 220
    }
  };

/***/ },
/* 25 */
/*!******************************************!*\
  !*** ./~/@component/xcore-ajax/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                     * Created by xinnian on 16/4/11.
                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                     * 依赖XHR 对象,和 LoadScript
                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                     */
  
  
  exports.default = ajax;
  
  var _util = __webpack_require__(/*! ./util */ 26);
  
  var _jsonp = __webpack_require__(/*! ./jsonp */ 27);
  
  var _jsonp2 = _interopRequireDefault(_jsonp);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var DATA_TYPE = {
    XML: 'xml',
    HTML: 'html',
    TEXT: 'text',
    JSON: 'json',
    JSONP: 'jsonp',
    SCRIPT: 'script'
  };
  
  function ajax(options) {
    var _opt = _extends({
      type: 'GET',
      url: null,
      data: null,
      contentType: 'application/x-www-form-urlencoded',
      mimeType: null,
      dataType: DATA_TYPE.TEXT,
      headers: {},
      success: function success(data, status, xhr) {},
      error: function error(_error) {},
      complete: function complete(xhr, status) {}
    }, options);
  
    //构建URL 参数
    if (_opt.type.toUpperCase() === 'GET') {
      if (!_opt.url) {
        throw new Error('url 不合法');
      } else {
        for (var k in _opt.data) {
          _opt.url = (0, _util.updateQueryStringParameter)(_opt.url, k, _opt.data[k]);
        }
      }
    }
  
    if (_opt.dataType.toLowerCase() === DATA_TYPE.JSONP) {
      (0, _jsonp2.default)(_opt.url, function (error, data) {
        if (error) {
          if (_opt.error) {
            _opt.error(error);
          } else {}
        } else {
          if (_opt.success) {
            _opt.success(data, 200);
          }
        }
        _opt.complete();
      });
    } else {
      (function () {
        var xhr = new XMLHttpRequest();
  
        xhr.open(_opt.type.toUpperCase(), _opt.url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (_opt.dataType.toLowerCase() === DATA_TYPE.JSON) {
              try {
                _opt.success(JSON.parse(xhr.responseText));
              } catch (e) {
                console.log(xhr.responseText);
                _opt.error(new Error("数据格式化错误"));
              } finally {
                _opt.complete(xhr.responseText, xhr.status);
              }
            } else {
              _opt.success(xhr.responseText);
            }
          }
        };
        xhr.onerror = function (error) {
          _opt.error(error);
        };
        xhr.send();
      })();
    }
  }

/***/ },
/* 26 */
/*!*****************************************!*\
  !*** ./~/@component/xcore-ajax/util.js ***!
  \*****************************************/
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.updateQueryStringParameter = updateQueryStringParameter;
  /**
   * update query string parameter
   */
  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + encodeURIComponent(value) + '$2');
    } else {
      return uri + separator + key + "=" + encodeURIComponent(value);
    }
  }

/***/ },
/* 27 */
/*!******************************************!*\
  !*** ./~/@component/xcore-ajax/jsonp.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = jsonp;
  
  var _util = __webpack_require__(/*! ./util */ 26);
  
  var jsonpcount = 1; /**
                       * Created by xinnian on 16/4/12.
                       */
  function jsonp(url, cbFn) {
    var cbFnName = 'jsonp' + jsonpcount++;
    url = (0, _util.updateQueryStringParameter)(url, 'callback', cbFnName);
  
    if (typeof global === 'undefined') {
      global = window;
    }
  
    global[cbFnName] = function (data) {
      if (cbFn) {
        cbFn(null, data);
      } else {
        console.log(data);
      }
    };
  
    function errorHandle(error) {
      if (cbFn) {
        cbFn(error);
      } else {
        console.log(error);
      }
    }
  
    if (false) {
      var elem = document.createElement('script');
      elem.src = url;
      elem.error = errorHandle;
      document.head.appendChild(elem);
    } else {
      loader.script(url, function () {}, errorHandle);
    }
  }
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/brandHotList/index.vue ***!
  \*******************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <view class=\"head\">\n      <label class=\"title\">品牌热榜</label>\n      <a href=\"http://act.mogujie.com/brandstationlogo?ismobile=1\" :c=\"ptpc\">\n        <label class=\"more\">查看更多></label>\n      </a>\n  </view>\n  <view class=\"body\">\n    <view class=\"left\">\n      <template v-if=\"firstItem.image\">\n        <a class=\"leftLink\" :href=\"firstItem.link\" :c=\"ptpc\" :acm=\"firstItem.acm\">  \n          <image class=\"leftImage\" :src=\"firstItem.image\" />\n        </a>\n        <view class=\"coupon\" @click=\"getCoupon\">\n          <label v-if=\"!isGot\" class=\"couponInner\">收藏领券</label>\n          <label v-else class=\"couponInner\">已收藏</label>\n        </view>\n      </template>\n    </view>\n    <view class=\"right\">\n      <view class=\"rightLine\">\n        <a v-for=\"item,index of items.slice(1, 3)\" class=\"rightItem\" :href=\"item.link\" :c=\"ptpc\" :acm=\"item.acm\" :d=\"String(index)\">\n          <image class=\"itemImage\" :src=\"item.image\" />\n        </a>\n      </view>\n      <view class=\"rightLine\">\n        <a v-for=\"item,index of items.slice(3, 5)\" class=\"rightItem\" :href=\"item.link\" :c=\"ptpc\" :acm=\"item.acm\" :d=\"String(index)\">\n          <image class=\"itemImage\" :src=\"item.image\" />\n        </a>\n      </view>\n    </view>\n  </view>\n</view>\n";

/***/ },
/* 29 */
/*!**************************************************************!*\
  !*** ./source/pages/home/modules/horizontalScroll/index.vue ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 30)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/horizontalScroll/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 32)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 30 */
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/horizontalScroll/index.vue ***!
  \******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 31);
  
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
        return '_keyword_' + this.sourcekey;
      }
    }
  };

/***/ },
/* 31 */
/*!*************************************************************!*\
  !*** ./source/pages/home/modules/horizontalScroll/style.js ***!
  \*************************************************************/
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
/* 32 */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/horizontalScroll/index.vue ***!
  \***********************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <view class=\"head\">\n    <label class=\"title\">店铺焕新</label>\n  </view>\n  <scrollview class=\"scrollView\">\n    <template v-for=\"item,index of items\">\n      <a class=\"scrollItem\" :href=\"item.link\" :c=\"ptpc\" :d=\"String(index)\" :acm=\"item.acm\">\n        <image class=\"itemImage\" :src=\"item.image\" />\n      </a>\n    </template>\n  </scrollview>\n</view>\n";

/***/ },
/* 33 */
/*!*****************************************************!*\
  !*** ./source/pages/home/modules/keyWord/index.vue ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 34)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/keyWord/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 36)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 34 */
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/keyWord/index.vue ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 35);
  
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
      itemLines: function itemLines() {
        var lines = [];
        var line = [];
        this.items.forEach(function (item, index) {
          if (index % 4 === 0) {
            line = [];
            lines.push(line);
          }
          line.push(item);
        });
        return lines;
      },
      ptpc: function ptpc() {
        return '_keyword_' + this.sourcekey;
      }
    }
  };

/***/ },
/* 35 */
/*!****************************************************!*\
  !*** ./source/pages/home/modules/keyWord/style.js ***!
  \****************************************************/
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
      width: 750,
      top: 30,
      left: 0,
      fontSize: 28,
      textAlign: 'center',
      position: 'absolute'
    },
    body: {
      flexDirection: 'column'
    },
    itemLine: {
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
/* 36 */
/*!**************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/keyWord/index.vue ***!
  \**************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view class=\"container\">\n  <view class=\"head\">\n    <image class=\"headImage\" src=\"http://s17.mogucdn.com/p1/160415/upload_ifqteobymy4wkmdgg4zdambqgyyde_313x10.png\" />\n    <label class=\"title\">品牌精选</label>\n  </view>\n  <view class=\"body\">\n    <view class=\"itemLine\" v-for=\"line of itemLines\">\n      <a v-for=\"item,index of line\"\n        class=\"item\" :href=\"item.link\" :c=\"ptpc\" :d=\"String(index)\" :acm=\"item.acm\">\n        <image class=\"itemImage\" :src=\"item.image\" />\n        <label class=\"itemName\">{{item.title}}</label>\n      </a>\n    </view>\n  </view>\n</view>\n";

/***/ },
/* 37 */
/*!***********************************************************!*\
  !*** ./source/pages/home/modules/scrollWallTab/index.vue ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 38)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/scrollWallTab/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 43)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 38 */
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/scrollWallTab/index.vue ***!
  \***************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 39);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _pubsub = __webpack_require__(/*! ../pubsub */ 40);
  
  var _pubsub2 = _interopRequireDefault(_pubsub);
  
  var _revealLog = __webpack_require__(/*! ../revealLog */ 42);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    props: {
      items: Array
    },
    data: function data() {
      return {
        style: _style2.default,
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
          if (true) {
            document.body.appendChild(container);
          }
        } else {
          if (!_this.fixed) return;
          _this.fixed = false;
          if (true) {
            wrap.appendChild(container);
          }
        }
      });
    },
  
    computed: {
      position: function position() {
        var fixedValue =  true ? 'absolute' : 'fixed';
        return this.fixed ? fixedValue : 'relative';
      }
    },
    methods: {
      select: function select(id, index, event) {
        var _this2 = this;
  
        id = String(id);
        this.currentId = id;
        this.$parent.changeCid(id);
        this.activeIndex = index;
        if (event) {
          (function () {
            var tab = _this2.$refs.tabs[index];
            var scroller = _this2.$refs.scroller;
            var scrollLeft = scroller.scrollLeft;
            var offsetLeft = tab.offsetLeft;
            var offsetWidth = tab.offsetWidth;
  
            var left = offsetLeft - scrollLeft + offsetWidth / 2;
  
            var toMove = left - scroller.offsetWidth / 2;
            _this2.$nextTick(function () {
              scroller.setScrollLeft(scrollLeft + toMove);
            });
          })();
        }
  
        if (this.fixed && this.$refs.wrap) {
          (function () {
            var scrollTop = _this2.$root.$el.scrollTop;
            var offsetTop = _this2.$refs.wrap.offsetTop;
            if (scrollTop !== offsetTop) {
              _this2.$nextTick(function () {
                _this2.$root.$el.setScrollTop(offsetTop);
              });
            }
          })();
        }
  
        var tabName = this.items[index].title;
        (0, _revealLog.pushTabClickLog)(tabName, id, index);
      }
    }
  };

/***/ },
/* 39 */
/*!**********************************************************!*\
  !*** ./source/pages/home/modules/scrollWallTab/style.js ***!
  \**********************************************************/
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    wrap: {
      position: 'relative',
      marginTop: 30,
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: '#fff',
      height: 108
    },
    container: {
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      width: 750,
      height: 82,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f67a98',
      zIndex: 2
    },
    scroller: {
      flex: 1
    },
    item: {
      position: 'relative',
      height: 82,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemName: {
      fontSize: 28,
      color: '#fff'
    },
    feLine: {
      position: 'absolute',
      height: 3,
      left: 20,
      right: 20,
      bottom: 0,
      backgroundColor: '#fff'
    }
  };

/***/ },
/* 40 */
/*!***************************************************!*\
  !*** ./source/pages/home/modules/pubsub/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _eventemitter = __webpack_require__(/*! eventemitter3 */ 41);
  
  var _eventemitter2 = _interopRequireDefault(_eventemitter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = new _eventemitter2.default(); //返回一个全局的消息控制器实例

/***/ },
/* 41 */
/*!**********************************!*\
  !*** ./~/eventemitter3/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var has = Object.prototype.hasOwnProperty;
  
  //
  // We store our EE objects in a plain object whose properties are event names.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // `~` to make sure that the built-in object properties are not overridden or
  // used as an attack vector.
  // We also assume that `Object.create(null)` is available when the event name
  // is an ES6 Symbol.
  //
  var prefix = typeof Object.create !== 'function' ? '~' : false;
  
  /**
   * Representation of a single EventEmitter function.
   *
   * @param {Function} fn Event handler to be called.
   * @param {Mixed} context Context for function execution.
   * @param {Boolean} [once=false] Only emit once
   * @api private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  
  /**
   * Minimal EventEmitter interface that is molded against the Node.js
   * EventEmitter interface.
   *
   * @constructor
   * @api public
   */
  function EventEmitter() { /* Nothing to set */ }
  
  /**
   * Hold the assigned EventEmitters by name.
   *
   * @type {Object}
   * @private
   */
  EventEmitter.prototype._events = undefined;
  
  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @api public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var events = this._events
      , names = []
      , name;
  
    if (!events) return names;
  
    for (name in events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
  
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
  
    return names;
  };
  
  /**
   * Return a list of assigned event listeners.
   *
   * @param {String} event The events that should be listed.
   * @param {Boolean} exists We only need to know if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event
      , available = this._events && this._events[evt];
  
    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];
  
    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }
  
    return ee;
  };
  
  /**
   * Emit an event to all registered event listeners.
   *
   * @param {String} event The name of the event.
   * @returns {Boolean} Indication if we've emitted an event.
   * @api public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
  
    if (!this._events || !this._events[evt]) return false;
  
    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;
  
    if ('function' === typeof listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
  
      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
  
      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
  
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;
  
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
  
        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
  
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
  
    return true;
  };
  
  /**
   * Register a new EventListener for the given event.
   *
   * @param {String} event Name of the event.
   * @param {Function} fn Callback function.
   * @param {Mixed} [context=this] The context of the function.
   * @api public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this)
      , evt = prefix ? prefix + event : event;
  
    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else {
      if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [
        this._events[evt], listener
      ];
    }
  
    return this;
  };
  
  /**
   * Add an EventListener that's only called once.
   *
   * @param {String} event Name of the event.
   * @param {Function} fn Callback function.
   * @param {Mixed} [context=this] The context of the function.
   * @api public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true)
      , evt = prefix ? prefix + event : event;
  
    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else {
      if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [
        this._events[evt], listener
      ];
    }
  
    return this;
  };
  
  /**
   * Remove event listeners.
   *
   * @param {String} event The event we want to remove.
   * @param {Function} fn The listener that we need to find.
   * @param {Mixed} context Only remove listeners matching this context.
   * @param {Boolean} once Only remove once listeners.
   * @api public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
  
    if (!this._events || !this._events[evt]) return this;
  
    var listeners = this._events[evt]
      , events = [];
  
    if (fn) {
      if (listeners.fn) {
        if (
             listeners.fn !== fn
          || (once && !listeners.once)
          || (context && listeners.context !== context)
        ) {
          events.push(listeners);
        }
      } else {
        for (var i = 0, length = listeners.length; i < length; i++) {
          if (
               listeners[i].fn !== fn
            || (once && !listeners[i].once)
            || (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }
      }
    }
  
    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) {
      this._events[evt] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[evt];
    }
  
    return this;
  };
  
  /**
   * Remove all listeners or only the listeners for the specified event.
   *
   * @param {String} event The event want to remove all listeners for.
   * @api public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    if (!this._events) return this;
  
    if (event) delete this._events[prefix ? prefix + event : event];
    else this._events = prefix ? {} : Object.create(null);
  
    return this;
  };
  
  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  
  //
  // This function doesn't apply anymore.
  //
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };
  
  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;
  
  //
  // Expose the module.
  //
  if (true) {
    module.exports = EventEmitter;
  }


/***/ },
/* 42 */
/*!******************************************************!*\
  !*** ./source/pages/home/modules/revealLog/index.js ***!
  \******************************************************/
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pushTabClickLog = pushTabClickLog;
  exports.pushAcmLog = pushAcmLog;
  exports.pushCpcLog = pushCpcLog;
  //图墙源文件 https://gitlab.mogujie.org/f2e/pagani/blob/master/assets/widgets/all/wall-exposure-log.js
  
  //曝光打点
  var appVer = function () {
    var ua = navigator.userAgent;
    if (!/(mogujie|xcore)/i.test(ua)) return 0;
  
    // 匹配ua参数
    if (/iphone/i.test(ua)) {
      var uaReg = new RegExp("(mogujie4iphone).*/([0-9]{3})", "i");
      var uaRst = ua.match(uaReg);
      if (uaRst && uaRst[2] > 400) {
        return parseInt(uaRst[2]);
      }
    }
  
    if (/android/i.test(ua)) {
      var _uaReg = new RegExp("(mogujie4android).*/([0-9]{3})", "i");
      var _uaRst = ua.match(_uaReg);
      if (_uaRst && _uaRst[2] > 400) {
        return parseInt(_uaRst[2]);
      }
    }
  }();
  
  var ACM_ID = "70001";
  var CPC_ID = "70004";
  var CLICK_ID = "000000001";
  
  //tab切换打点
  function pushTabClickLog(name, fcid, index) {
    var logData = {
      tableName: name,
      fcid: fcid,
      q_: '',
      index: index,
      lableName: ''
    };
    window.logger && logger.log(CLICK_ID, logData);
  }
  
  //推送商品acm日志
  function pushAcmLog(params, list, offset) {
    var logData = {
      ver: appVer,
      ptpPartC: params.ptpPartC,
      eventid: params.eventId || ACM_ID,
      fcid: params.fcid,
      _mgjuuid: params._mgjuuid,
      acms: [],
      iids: [],
      indexs: []
    };
  
    list.forEach(function (item, index) {
      index = index + offset;
      if (item.tradeItemId) {
        logData.acms.push(item.acm + '_' + index);
        logData.iids.push(item.tradeItemId);
        logData.indexs.push(index);
      }
    });
  
    if (logData.iids.length) {
      window.logger && logger.log(logData.eventid, logData);
    }
  }
  
  //推送cpc商品日志
  function pushCpcLog(params, list, offset) {
    var logData = {
      ver: appVer,
      ptpPartC: params.ptpPartC,
      eventid: params.cpcEventId || ACM_ID,
      fcid: params.fcid,
      _mgjuuid: params._mgjuuid,
      cparams: []
    };
  
    list.forEach(function (item, index) {
      index = index + offset;
      if (item.cparam) {
        logData.cpcs.push(item.tradeItemId);
        logData.cparams.push(item.cparam);
      }
    });
  
    if (logData.cparams.length) {
      window.logger && logger.log(logData.eventid, logData);
    }
  }

/***/ },
/* 43 */
/*!********************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/scrollWallTab/index.vue ***!
  \********************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view ref=\"wrap\" class=\"wrap\">\n  <view ref=\"container\" class=\"container\" _style=\"position: {{position}}\">\n    <scrollview class=\"scroller\" ref=\"scroller\" force-scroll-animate=\"true\">\n      <template v-for=\"item, index of items\">\n        <view class=\"item\" @click=\"select(item.id, index, $event)\" ref=\"tabs\">\n          <label class=\"itemName\">{{item.title}}</label>\n          <view v-if=\"currentId == item.id\" class=\"feLine\"></view>\n        </view>\n      </template>\n    </scrollview>\n  </view>\n</view>\n";

/***/ },
/* 44 */
/*!**************************************************************!*\
  !*** ./source/pages/home/modules/newTypeGoodsWall/index.vue ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 45)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/newTypeGoodsWall/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 50)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 45 */
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/newTypeGoodsWall/index.vue ***!
  \******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 46);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _xcoreAjax = __webpack_require__(/*! @component/xcore-ajax */ 25);
  
  var _xcoreAjax2 = _interopRequireDefault(_xcoreAjax);
  
  var _good = __webpack_require__(/*! ./good */ 47);
  
  var _good2 = _interopRequireDefault(_good);
  
  var _pubsub = __webpack_require__(/*! ../pubsub */ 40);
  
  var _pubsub2 = _interopRequireDefault(_pubsub);
  
  var _revealLog = __webpack_require__(/*! ../revealLog */ 42);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    components: {
      Good: _good2.default
    },
    props: {
      cid: String,
      tabid: String,
      sort: String,
      isguesslike: Boolean,
      tag: String
    },
    data: function data() {
      return {
        style: _style2.default,
        page: 0,
        endPage: 10000,
        isLoading: false,
        isEnd: false,
        itemsCache: [],
        items: []
      };
    },
  
    watch: {
      tabid: function tabid(val, oldVal) {
        if (this.tabid === this.cid) {
          this.switchDataSource();
        } else {
          this.items = [];
        }
      }
    },
    created: function created() {
      var _this = this;
  
      var checkDelay = null;
      _pubsub2.default.on('h-scroll', function (e) {
        if (_this.tabid == _this.cid) {
          (function () {
            var el = e.target;
            checkDelay && clearTimeout(checkDelay);
            checkDelay = setTimeout(function () {
              if (el.scrollHeight - el.offsetHeight <= el.scrollTop + 100) {
                _this.loadNextPage();
              }
            }, 50);
          })();
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
        return dbItems;
      },
      placeholder: function placeholder() {
        return this.items.length === 0 ? [1] : [];
      }
    },
    methods: {
      render: function render() {
        var result = [];
        for (var i = 0; i < this.page + 1; i++) {
          result = result.concat(this.itemsCache[i]);
        }
  
        var idMap = {};
        result = result.filter(function (item) {
          if (idMap[item.tradeItemId]) {
            return false;
          } else {
            idMap[item.tradeItemId] = true;
            return true;
          }
        });
        this.items = result;
      },
      switchDataSource: function switchDataSource() {
        var _this2 = this;
  
        this.page = 0;
  
        this.$parent.setMoreLoading(true);
        if (this.itemsCache.length) {
          this.render();
          this.$parent.setMoreLoading(false);
          return false;
        } else {
          this.$parent.setLoading(true);
          this.fetchData(this.page, function (data) {
            _this2.$parent.setLoading(false);
            _this2.itemsCache.push(data.result.wall.docs);
            if (data.result.wall.isEnd) {
              _this2.endPage = _this2.page;
              _this2.$parent.setMoreLoading(false);
            }
            _this2.render();
          });
        }
      },
      loadNextPage: function loadNextPage() {
        var _this3 = this;
  
        if (this.isLoading) {
          return false;
        }
  
        var nextPage = this.page + 1;
        if (this.itemsCache.length) {
          if (this.itemsCache[nextPage]) {
            this.page = nextPage;
            this.render();
          } else {
            if (this.isEnd()) {
              console.log('已经没有更多数据了');
              this.showErrorTips('已经到底了');
              return false;
            } else {
              this.fetchData(nextPage, function (data) {
                _this3.page = nextPage;
                _this3.itemsCache[nextPage] = data.result.wall.docs;
                if (data.result.wall.isEnd) {
                  _this3.endPage = nextPage;
                  _this3.$parent.setMoreLoading(false);
                }
                _this3.render();
              });
            }
          }
        }
      },
      isEnd: function isEnd() {
        return this.page === this.endPage;
      },
      fetchData: function fetchData(page, cb) {
        var _this4 = this;
  
        if (this.isLoading) {
          return false;
        }
        this.showLoading();
  
        if (this.isguesslike) {
          (0, _xcoreAjax2.default)({
            url: "http://list.mogujie.com/search",
            dataType: 'jsonp',
            data: {
              cKey: 'app-channel-guess',
              cpc_offset: 0,
              pid: this.cid,
              searchTag: '',
              sort: 'new',
              ratio: '3:4',
              _version: 1,
              fcid: '',
              page: page + 1
            },
            success: function success(data) {
              _this4.hideLoading();
              if (data && data.status && data.status.code == 1001) {
                if (data.result) {
                  data = _this4.formatData(data);
  
                  if (data.result.param && data.result.wall.docs) {
                    (0, _revealLog.pushAcmLog)(data.result.param, data.result.wall.docs, _this4.items.length);
                    (0, _revealLog.pushCpcLog)(data.result.param, data.result.wall.docs, _this4.items.length);
                  }
                  cb(data);
                }
              } else {
                _this4.showErrorTips();
              }
            },
            error: function error(e) {
              _this4.showErrorTips();
              _this4.hideLoading();
            }
          });
        } else {
          (0, _xcoreAjax2.default)({
            url: "http://list.mogujie.com/search",
            dataType: 'jsonp',
            data: {
              cKey: 'h5-wall-v1',
              cpc_offset: 0,
              pid: '',
              searchTag: '',
  
              ratio: '3:4',
              _version: 1,
              fcid: this.cid,
              page: page + 1
            },
            success: function success(data) {
              _this4.hideLoading();
              if (data && data.status && data.status.code == 1001) {
                if (data.result.param && data.result.wall.docs) {
                  (0, _revealLog.pushAcmLog)(data.result.param, data.result.wall.docs, _this4.items.length);
                  (0, _revealLog.pushCpcLog)(data.result.param, data.result.wall.docs, _this4.items.length);
                }
                cb(data);
              } else {
                _this4.showErrorTips();
              }
            },
            error: function error(e) {
              _this4.showErrorTips();
              _this4.hideLoading();
            }
          });
        }
      },
      showLoading: function showLoading() {
        this.isLoading = true;
      },
      hideLoading: function hideLoading() {
        this.isLoading = false;
      },
      showErrorTips: function showErrorTips() {
        var msg = arguments.length <= 0 || arguments[0] === undefined ? '数据请求错误，请稍候再试' : arguments[0];
  
        this.$parent.showTip(msg);
      },
      formatData: function formatData(data) {
        data.result.wall.docs = data.result.wall.list;
        data.result.wall.docs.forEach(function (item) {
          item.price = item.price.replace('￥', '');
          item.tradeItemId = item.iid;
          return item;
        });
        return data;
      }
    }
  };

/***/ },
/* 46 */
/*!*************************************************************!*\
  !*** ./source/pages/home/modules/newTypeGoodsWall/style.js ***!
  \*************************************************************/
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PINK = '#F44B6E';
  var GREEN = '#93bb21';
  
  exports.default = {
    container: {
      minHeight: 2000
    },
    line: {
      flexDirection: "row",
      paddingLeft: 12,
      paddingRight: 12,
      flexWrap: 'nowrap',
      justifyContent: "space-between",
      backgroundColor: '#fff',
      paddingBottom: 16
    },
    nothing: {
      height: 1000
    },
    item: {
      position: 'relative',
      width: 178 * 2,
      height: 337 * 2,
      flexDirection: 'column',
      alignItems: 'center',
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
      width: 155 * 2,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    tags: {
      flexDirection: 'row',
      marginTop: 5,
      justifyContent: 'flex-start'
    },
    tag: {
      width: 56,
      height: 34,
      marginRight: 4
    },
    leftTopTag: {
      position: 'absolute',
      left: 0,
      top: '0'
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
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    },
    price: {
      width: 180, //for ios width isuess
      color: '#333',
      fontSize: 30,
      fontWeight: 'bold'
    },
    star: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    starImage: {
      width: 24,
      height: 23
    },
    starNumber: {
      fontSize: 24,
      marginRight: 5,
      color: '#999'
    }
  };

/***/ },
/* 47 */
/*!*************************************************************!*\
  !*** ./source/pages/home/modules/newTypeGoodsWall/good.vue ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./good.vue */ 48)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] source/pages/home/modules/newTypeGoodsWall/good.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./good.vue */ 49)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./good.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 48 */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./source/pages/home/modules/newTypeGoodsWall/good.vue ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style.js */ 46);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _pubsub = __webpack_require__(/*! ../pubsub */ 40);
  
  var _pubsub2 = _interopRequireDefault(_pubsub);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    props: {
      item: Object
    },
    data: function data() {
      return {
        style: _style2.default
      };
    }
  };

/***/ },
/* 49 */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/newTypeGoodsWall/good.vue ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<a class=\"item\"  :href=\"item.link\">\n  <view class=\"thumb\">\n    <image class=\"image\" :src=\"item.img + '_220x330.jpg'\" placeholder=\"http://s17.mogucdn.com/p1/160816/idid_ifrtmn3fgftdkobwmezdambqhayde_220x330.png\" />\n  </view>\n  <view class=\"bottom\">\n    <view class=\"title\">\n      <label class=\"titleText\">{{item.title}}</label>\n    </view>\n    <view v-if=\"item.leftbottom_taglist && item.leftbottom_taglist.length\" class=\"tags\">\n      <template v-for=\"imgSrc of item.leftbottom_taglist\">\n        <image class=\"tag\" :src=\"imgSrc\" />\n      </template>\n    </view>\n    \n    <view class=\"extInfo\">\n      <label class=\"price\">￥{{item.price}}</label>\n      <view class=\"star\">\n        <label class=\"starNumber\">{{item.cfav}}</label>\n        <image class=\"starImage\" src=\"http://s17.mogucdn.com/p2/160830/upload_3314f7cl5l440765d8ceakajd5g30_48x46.png\" />\n      </view>\n    </view>\n  </view>\n  <template v-if=\"item.lefttop_taglist && item.lefttop_taglist.length\">\n    <image :src=\"item.lefttop_taglist[0]\" class=\"tag leftTopTag\" />\n  </template>\n</a>\n";

/***/ },
/* 50 */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/modules/newTypeGoodsWall/index.vue ***!
  \***********************************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<listview-shadow>\n  <template v-for=\"group of doubleItems\" :key=\"group.id\">\n    <view class=\"line\" v-show=\"tabid === cid\">\n      <good v-for=\"item of group.list\" :item=\"item\" :key=\"item.acm\"></good>\n    </view>\n  </template>\n</listview-shadow>\n";

/***/ },
/* 51 */
/*!*********************************************************!*\
  !*** ./source/pages/home/modules/scrollWallTab/data.js ***!
  \*********************************************************/
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    title: '猜你喜欢',
    id: 15043,
    isGuessLike: true
  }, {
    title: '外套',
    id: 10059664
  }, {
    title: '单鞋',
    id: 10058711
  }, {
    title: '双肩包',
    id: 10058725
  }, {
    title: '运动鞋',
    id: 10058715
  }, {
    title: '面膜',
    id: 10058079
  }, {
    title: '男友',
    id: 10058034
  }, {
    title: '内衣',
    id: 10058342
  }, {
    title: '食品',
    id: 10058054
  }, {
    title: '配饰',
    id: 10059570
  }, {
    title: '家居',
    id: 10058053
  }, {
    title: '母婴',
    id: 10058055
  }];

/***/ },
/* 52 */
/*!*******************************************!*\
  !*** ./~/@component/xcore-tips/index.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

  var __vue_script__, __vue_template__
  __vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../@mogu/xcore-loader/lib/selector.js?type=script&index=0!./index.vue */ 53)
  if (__vue_script__ &&
      __vue_script__.__esModule &&
      Object.keys(__vue_script__).length > 1) {
    console.warn("[vue-loader] node_modules/@component/xcore-tips/index.vue: named exports in *.vue files are ignored.")}
  __vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../@mogu/xcore-loader/lib/selector.js?type=template&index=0!./index.vue */ 55)
  module.exports = __vue_script__ || {}
  if (module.exports.__esModule) module.exports = module.exports.default
  if (__vue_template__) {
  (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
  }
  if (false) {(function () {  module.hot.accept()
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    var id = "./index.vue"
    if (!module.hot.data) {
      hotAPI.createRecord(id, module.exports)
    } else {
      hotAPI.update(id, module.exports, __vue_template__)
    }
  })()}

/***/ },
/* 53 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/@mogu/xcore-loader/lib/selector.js?type=script&index=0!./~/@component/xcore-tips/index.vue ***!
  \***********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _style = __webpack_require__(/*! ./style */ 54);
  
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
      show: function show(message) {
        this.msg = message;
        this.resetTimer();
      }
    },
    mounted: function mounted() {
      this.resetTimer();
    }
  };

/***/ },
/* 54 */
/*!******************************************!*\
  !*** ./~/@component/xcore-tips/style.js ***!
  \******************************************/
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
      zIndex: 100,
      backgroundColor: 'rgba(23,12,31,0.5)'
    },
    tipsWrap: {
      flexDirection: 'column',
      paddingTop: 86,
      paddingBottom: 86,
      paddingLeft: 160,
      paddingRight: 160,
      maxWidth: 600
    }
  };

/***/ },
/* 55 */
/*!****************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./~/@component/xcore-tips/index.vue ***!
  \****************************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<view :key=\"wrapKey\" _vdom=\"tips\">\n  <view v-if=\"on\" ref=\"wrap\" class=\"wrap\">\n    <view\n      class=\"tipsWrap\"\n      _style=\"background-color:{{backgroundColor}};border-radius:{{borderRadius}}\">\n      <label _style=\"color:{{foregroundColor}}\">{{msg}}</label>\n    </view>\n  </view>\n</view>\n";

/***/ },
/* 56 */
/*!********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/@mogu/xcore-loader/lib/selector.js?type=template&index=0!./source/pages/home/app.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports) {

  module.exports = "\n<body class=\"container\" @scroll=\"scrollHandler\">\n  <swipper :items=\"swipperData\" :sourcekey=\"6165\"></swipper>\n  <brand-hot-list :items=\"brandHotListData\" :sourcekey=\"5465\"></brand-hot-list>\n  <horizontal-scroll :items=\"horizontalScrollData\" :sourcekey=\"6064\"></horizontal-scroll>\n  <key-word :items=\"keyWordData\" :sourcekey=\"11283\"></key-word>\n  <scroll-wall-tab :items=\"scrollWallData\"></scroll-wall-tab>\n  <template v-for=\"data in scrollWallData\">\n    <goods-wall :tabid=\"goodsWallCid\" :key=\"data.id\" :cid=\"String(data.id)\" :isguesslike=\"data.isGuessLike\"></goods-wall>\n  </template>\n  <view class=\"loading\" v-show=\"isLoading\">\n    <label class=\"loadingText\">正在加载中...</label>\n  </view>\n  <view class=\"moreLoading\" v-show=\"isMoreLoading\">\n    <label class=\"loadingText\">正在加载中...</label>\n  </view>\n  <tips ref=\"tips\" delay-time=\"1000\" border-radius=\"10\" foreground-color=\"#fff\" background-color=\"#F5476C\"></tips>\n</body>\n";

/***/ },
/* 57 */
/*!**************************************************!*\
  !*** ./source/pages/home/modules/share/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _index = __webpack_require__(/*! @mogu/share/index.xcore */ 58);
  
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
/* 58 */
/*!**************************************!*\
  !*** ./~/@mogu/share/index.xcore.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _hdp = __webpack_require__(/*! @mogu/hdp */ 59);
  
  var _hdp2 = _interopRequireDefault(_hdp);
  
  var _logger = __webpack_require__(/*! @mogu/logger/dist/logger.xcore */ 3);
  
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
/* 59 */
/*!*********************************!*\
  !*** ./~/@mogu/hdp/dist/hdp.js ***!
  \*********************************/
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map