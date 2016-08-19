(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _webRuntime = __webpack_require__(3);
	
	var _webRuntime2 = _interopRequireDefault(_webRuntime);
	
	var _index = __webpack_require__(8);
	
	var _index2 = __webpack_require__(38);
	
	var _index3 = __webpack_require__(59);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var idToTemplate = (0, _index.cached)(function (id) {
	  var el = (0, _index2.query)(id);
	  return el && el.innerHTML;
	});
	
	var mount = _webRuntime2.default.prototype.$mount;
	_webRuntime2.default.prototype.$mount = function (el, hydrating) {
	  if (el === '#app') {
	    el = document.createElement('div')
	    // setStyle(document.body, 'flexDirection', 'column')
	    document.body.appendChild(el);
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
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _index.warn)('invalid template option:' + template, this);
	        }
	        return this;
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
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
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	_webRuntime2.default.compile = _index3.compileToFunctions;
	
	exports.default = _webRuntime2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(4);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _util = __webpack_require__(6);
	
	var _patch = __webpack_require__(36);
	
	var _index3 = __webpack_require__(54);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _index5 = __webpack_require__(57);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _index7 = __webpack_require__(38);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _index = __webpack_require__(7);
	
	var _index2 = __webpack_require__(12);
	
	var _index3 = _interopRequireDefault(_index2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _index.initGlobalAPI)(_index3.default);
	
	Object.defineProperty(_index3.default.prototype, '$isServer', {
	  get: function get() {
	    return _config2.default._isServer;
	  }
	});
	
	_index3.default.version = '2.0.0-alpha.1';
	
	exports.default = _index3.default;

/***/ },
/* 5 */
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
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
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
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: _util.no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: ['component', 'directive', 'transition', 'filter'],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: ['init', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: process.env.VUE_ENV === 'server',
	
	  /**
	   * Keeping track of all extended Component constructors
	   * so that we can update them in the case of global mixins being applied
	   * after their creation.
	   */
	  _ctors: []
	};
	
	exports.default = config;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.renderString = renderString;
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
	exports.noop = noop;
	exports.genStaticKeys = genStaticKeys;
	
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function renderString(val) {
	  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
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
	var isBuiltInTag = exports.isBuiltInTag = makeMap('slot,component,render,transition', true);
	
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
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initGlobalAPI = initGlobalAPI;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _index = __webpack_require__(8);
	
	var util = _interopRequireWildcard(_index);
	
	var _use = __webpack_require__(30);
	
	var _mixin = __webpack_require__(31);
	
	var _extend = __webpack_require__(32);
	
	var _assets = __webpack_require__(33);
	
	var _index2 = __webpack_require__(19);
	
	var _index3 = __webpack_require__(34);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initGlobalAPI(Vue) {
	  Vue.config = _config2.default;
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
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _util[key];
	    }
	  });
	});
	
	var _lang = __webpack_require__(9);
	
	Object.keys(_lang).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lang[key];
	    }
	  });
	});
	
	var _env = __webpack_require__(10);
	
	Object.keys(_env).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _env[key];
	    }
	  });
	});
	
	var _options = __webpack_require__(11);
	
	Object.keys(_options).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _options[key];
	    }
	  });
	});
	
	var _debug = __webpack_require__(28);
	
	Object.keys(_debug).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _debug[key];
	    }
	  });
	});
	
	var _props = __webpack_require__(29);
	
	Object.keys(_props).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _props[key];
	    }
	  });
	});
	
	var _index = __webpack_require__(19);
	
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
	var bailRE = /[^\w\.]/;
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

/***/ },
/* 10 */
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
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
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
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mergeOptions = mergeOptions;
	exports.resolveAsset = resolveAsset;
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _debug = __webpack_require__(28);
	
	var _index3 = __webpack_require__(19);
	
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
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      (0, _debug.warn)('option "' + key + '" can only be used during instance ' + 'creation with the `new` keyword.');
	    }
	    return defaultStrat(parent, child);
	  };
	
	  strats.name = function (parent, child, vm) {
	    if (vm) {
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
	      process.env.NODE_ENV !== 'production' && (0, _debug.warn)('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
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
	      if ((0, _util.isBuiltInTag)(key) || _config2.default.isReservedTag(key)) {
	        process.env.NODE_ENV !== 'production' && (0, _debug.warn)('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
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
	      } else if (process.env.NODE_ENV !== 'production') {
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
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    (0, _debug.warn)('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(13);
	
	var _state = __webpack_require__(15);
	
	var _render = __webpack_require__(21);
	
	var _events = __webpack_require__(27);
	
	var _lifecycle = __webpack_require__(26);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initMixin = initMixin;
	
	var _proxy = __webpack_require__(14);
	
	var _state = __webpack_require__(15);
	
	var _render = __webpack_require__(21);
	
	var _events = __webpack_require__(27);
	
	var _lifecycle = __webpack_require__(26);
	
	var _index = __webpack_require__(8);
	
	var uid = 0;
	
	function initMixin(Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = (0, _index.mergeOptions)(vm.constructor.options, options || {}, vm);
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      (0, _proxy.initProxy)(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    (0, _lifecycle.initLifecycle)(vm);
	    (0, _events.initEvents)(vm);
	    (0, _lifecycle.callHook)(vm, 'init');
	    (0, _state.initState)(vm);
	    (0, _lifecycle.callHook)(vm, 'created');
	    (0, _render.initRender)(vm);
	  };
	}
	
	function initInternalComponent(vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = opts.staticRenderFns;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initProxy = undefined;
	
	var _index = __webpack_require__(8);
	
	var hasProxy = void 0,
	    proxyHandlers = void 0,
	    initProxy = void 0; /* not type checking this file because flow doesn't play well with Proxy */
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var allowedGlobals = (0, _index.makeMap)('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require,__webpack_require__' // for Webpack/Browserify
	    );
	
	    hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);
	
	    proxyHandlers = {
	      has: function has(target, key) {
	        var has = key in target;
	        var isAllowedGlobal = allowedGlobals(key);
	        if (!has && !isAllowedGlobal) {
	          (0, _index.warn)('Trying to access non-existent property "' + key + '" while rendering. ' + 'Make sure to declare reactive data properties in the data option.', target);
	        }
	        return !isAllowedGlobal;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.stateMixin = stateMixin;
	
	var _watcher = __webpack_require__(16);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(17);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _index = __webpack_require__(19);
	
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
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _index.defineReactive)(vm, key, (0, _index2.validateProp)(vm, key, propsData), function () {
	          if (vm.$parent && !_index.observerState.isSettingProps) {
	            (0, _index2.warn)('Avoid mutating a prop directly since the value will be ' + 'overwritten whenever the parent component re-renders. ' + 'Instead, use a data or computed property based on the prop\'s ' + ('value. Prop being mutated: "' + key + '"'), vm);
	          }
	        });
	      } else {
	        (0, _index.defineReactive)(vm, key, (0, _index2.validateProp)(vm, key, propsData));
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
	    process.env.NODE_ENV !== 'production' && (0, _index2.warn)('data functions should return an object.', vm);
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && (0, _index2.hasOwn)(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && (0, _index2.warn)('The data property "' + keys[i] + '" is already declared as a prop. ' + 'Use prop default value instead.', vm);
	    } else {
	      (0, _index.proxy)(vm, keys[i]);
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
	  dataDef.set = function (newData) {
	    if (newData !== this._data) {
	      setData(this, newData);
	    }
	  };
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
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
	
	function setData(vm, newData) {
	  newData = newData || {};
	  var oldData = vm._data;
	  vm._data = newData;
	  var keys = void 0,
	      key = void 0,
	      i = void 0;
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!(key in newData)) {
	      (0, _index.unproxy)(vm, key);
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!(0, _index2.hasOwn)(vm, key)) {
	      // new property
	      (0, _index.proxy)(vm, key);
	    }
	  }
	  oldData.__ob__ && oldData.__ob__.vmCount--;
	  (0, _index.observe)(newData);
	  newData.__ob__ && newData.__ob__.vmCount++;
	  vm.$forceUpdate();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _dep = __webpack_require__(17);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _scheduler = __webpack_require__(18);
	
	var _index = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var uid = 0;
	var prevTarget = void 0;
	
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
	        process.env.NODE_ENV !== 'production' && (0, _index.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
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
	      this.beforeGet();
	      var value = void 0;
	      try {
	        value = this.getter.call(this.vm, this.vm);
	      } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (this.user) {
	            (0, _index.warn)('Error when evaluating watcher with getter: ' + this.expression, this.vm);
	          } else {
	            (0, _index.warn)('Error during component render', this.vm);
	          }
	          /* istanbul ignore else */
	          if (_config2.default.errorHandler) {
	            _config2.default.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e;
	          }
	        }
	        // return old value when evaluation fails so the current UI is preserved
	        // if the error was somehow handled by user
	        value = this.value;
	      }
	      // "touch" every property so they are all tracked as
	      // dependencies for deep watching
	      if (this.deep) {
	        traverse(value);
	      }
	      this.afterGet();
	      return value;
	    }
	
	    /**
	     * Prepare for dependency collection.
	     */
	
	  }, {
	    key: 'beforeGet',
	    value: function beforeGet() {
	      prevTarget = _dep2.default.target;
	      _dep2.default.target = this;
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
	    key: 'afterGet',
	    value: function afterGet() {
	      _dep2.default.target = prevTarget;
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
	      if (this.lazy) {
	        this.dirty = true;
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
	          this.cb.call(this.vm, value, oldValue);
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
	      // avoid overwriting another watcher that is being
	      // collected.
	      var current = _dep2.default.target;
	      this.value = this.get();
	      this.dirty = false;
	      _dep2.default.target = current;
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
	  if (isA || isO) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.queueWatcher = queueWatcher;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _index = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue() {
	  runSchedulerQueue(queue.sort(queueSorter));
	  runSchedulerQueue(userQueue);
	  // user watchers triggered more watchers,
	  // keep flushing until it depletes
	  if (queue.length) {
	    return flushSchedulerQueue();
	  }
	  resetSchedulerState();
	}
	
	/**
	 * Sort queue before flush.
	 * This ensures components are updated from parent to child
	 * so there will be no duplicate updates, e.g. a child was
	 * pushed into the queue first and then its parent's props
	 * changed.
	 */
	function queueSorter(a, b) {
	  return a.id - b.id;
	}
	
	/**
	 * Run the watchers in a single queue.
	 */
	function runSchedulerQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > _config2.default._maxUpdateCount) {
	        (0, _index.warn)('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = true;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      (0, _index.nextTick)(flushSchedulerQueue);
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = exports.observerState = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _dep = __webpack_require__(17);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(20);
	
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
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
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
	    process.env.NODE_ENV !== 'production' && (0, _index.warn)('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - delcare it upfront in the data option.');
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
	    process.env.NODE_ENV !== 'production' && (0, _index.warn)('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
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
	
	function proxy(vm, key) {
	  if (!(0, _index.isReserved)(key)) {
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
	
	// using Object type to avoid flow complaining
	function unproxy(vm, key) {
	  if (!(0, _index.isReserved)(key)) {
	    delete vm[key];
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderState = undefined;
	exports.initRender = initRender;
	exports.renderMixin = renderMixin;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _vnode = __webpack_require__(22);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	var _helpers = __webpack_require__(23);
	
	var _index = __webpack_require__(8);
	
	var _createElement = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var renderState = exports.renderState = {
	  activeInstance: null
	};
	
	function initRender(vm) {
	  vm._vnode = null;
	  vm._staticTrees = null;
	  vm.$slots = {};
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = (0, _index.bind)(function (tag, data, children, namespace) {
	    return this._h(this._e(tag, data, namespace), children);
	  }, vm);
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
	
	    // set current active instance
	    var prev = renderState.activeInstance;
	    renderState.activeInstance = vm;
	
	    var _vm$$options = vm.$options;
	    var render = _vm$$options.render;
	    var staticRenderFns = _vm$$options.staticRenderFns;
	    var _renderChildren = _vm$$options._renderChildren;
	    var _parentVnode = _vm$$options._parentVnode;
	
	
	    if (staticRenderFns && !vm._staticTrees) {
	      // render static sub-trees for once on initial render
	      renderStaticTrees(vm, staticRenderFns);
	    }
	    // resolve slots. becaues slots are rendered in parent scope,
	    // we set the activeInstance to parent.
	    if (_renderChildren) {
	      resolveSlots(vm, _renderChildren);
	    }
	    // render self
	    var vnode = render.call(vm._renderProxy);
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof _vnode2.default)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        (0, _index.warn)('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
	      }
	      vnode = (0, _vnode.emptyVNode)();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    // restore render state
	    renderState.activeInstance = prev;
	    return vnode;
	  };
	
	  // shorthands used in render functions
	  Vue.prototype._h = _createElement.renderElementWithChildren;
	  Vue.prototype._e = _createElement.renderElement;
	  Vue.prototype._t = _createElement.renderText;
	  Vue.prototype._m = _createElement.renderStatic;
	
	  // toString for mustaches
	  Vue.prototype._s = _index.renderString;
	
	  // filter resolution helper
	  var identity = function identity(_) {
	    return _;
	  };
	  Vue.prototype._f = function (id) {
	    return (0, _index.resolveAsset)(this.$options, 'filters', id, true) || identity;
	  };
	
	  // render v-for
	  Vue.prototype._l = function (val, render) {
	    var ret = void 0,
	        i = void 0,
	        l = void 0,
	        keys = void 0,
	        key = void 0;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i, i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i, i);
	      }
	    } else if ((0, _index.isObject)(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], i, key);
	      }
	    }
	    return ret;
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function (vnode, value) {
	    if (value) {
	      if (!(0, _index.isObject)(value)) {
	        process.env.NODE_ENV !== 'production' && (0, _index.warn)('v-bind without argument expects an Object or Array value', this);
	      } else {
	        if (Array.isArray(value)) {
	          value = (0, _index.toObject)(value);
	        }
	        var data = vnode.data;
	        for (var key in value) {
	          var hash = _config2.default.mustUseProp(key) ? data.props || (data.props = {}) : data.attrs || (data.attrs = {});
	          hash[key] = value[key];
	        }
	      }
	    }
	  };
	}
	
	function renderStaticTrees(vm, fns) {
	  var trees = vm._staticTrees = new Array(fns.length);
	  for (var i = 0; i < fns.length; i++) {
	    trees[i] = fns[i].call(vm._renderProxy);
	  }
	}
	
	function resolveSlots(vm, renderChildren) {
	  if (renderChildren) {
	    var children = (0, _helpers.normalizeChildren)(renderChildren);
	    var slots = {};
	    var defaultSlot = [];
	    var name = void 0,
	        child = void 0;
	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      if (name = child.data && child.data.slot) {
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
	    if (defaultSlot.length && !(defaultSlot.length === 1 && defaultSlot[0].text === ' ')) {
	      slots['default'] = defaultSlot;
	    }
	    vm.$slots = slots;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VNode = function () {
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
	    // apply construct hook.
	    // this is applied during render, before patch happens.
	    // unlike other hooks, this is applied on both client and server.
	    var constructHook = data && data.hook && data.hook.construct;
	    if (constructHook) {
	      constructHook(this);
	    }
	  }
	
	  _createClass(VNode, [{
	    key: 'setChildren',
	    value: function setChildren(children) {
	      this.children = children;
	    }
	  }]);
	
	  return VNode;
	}();
	
	exports.default = VNode;
	var emptyVNode = exports.emptyVNode = function emptyVNode() {
	  return new VNode(undefined, undefined, undefined, '');
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeChildren = normalizeChildren;
	exports.updateListeners = updateListeners;
	
	var _index = __webpack_require__(8);
	
	var _vnode = __webpack_require__(22);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function normalizeChildren(children) {
	  // invoke children thunks.
	  // components always receive their children as thunks so that they
	  // can perform the actual render inside their own dependency collection cycle.
	  if (typeof children === 'function') {
	    children = children();
	  }
	  if (typeof children === 'string') {
	    return [new _vnode2.default(undefined, undefined, undefined, children)];
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c));
	      } else if ((0, _index.isPrimitive)(c)) {
	        // convert primitive to vnode
	        res.push(new _vnode2.default(undefined, undefined, undefined, c));
	      } else if (c instanceof _vnode2.default) {
	        res.push(c);
	      }
	    }
	    return res;
	  }
	  return [];
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
	    if (!old) {
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderElementWithChildren = renderElementWithChildren;
	exports.renderElement = renderElement;
	exports.renderText = renderText;
	exports.renderStatic = renderStatic;
	
	var _vnode = __webpack_require__(22);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _createComponent = __webpack_require__(25);
	
	var _helpers = __webpack_require__(23);
	
	var _render = __webpack_require__(21);
	
	var _index = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderElementWithChildren(vnode, children) {
	  if (vnode) {
	    if (vnode.componentOptions) {
	      if (process.env.NODE_ENV !== 'production' && children && typeof children !== 'function') {
	        (0, _index.warn)('A component\'s children should be a function that returns the ' + 'children array. This allows the component to track the children ' + 'dependencies and optimizes re-rendering.');
	      }
	      vnode.componentOptions.children = children;
	    } else {
	      vnode.setChildren((0, _helpers.normalizeChildren)(children));
	    }
	  }
	  return vnode;
	}
	
	function renderElement(tag, data, namespace) {
	  // make sure to expose real self instead of proxy
	  var context = this._self;
	  var parent = _render.renderState.activeInstance;
	  if (!parent) {
	    process.env.NODE_ENV !== 'production' && (0, _index.warn)('createElement cannot be called outside of component ' + 'render functions.');
	    return;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return (0, _vnode.emptyVNode)();
	  }
	  if (typeof tag === 'string') {
	    var Ctor = void 0;
	    if (_config2.default.isReservedTag(tag)) {
	      return new _vnode2.default(tag, data, undefined, undefined, undefined, namespace, context);
	    } else if (Ctor = (0, _index.resolveAsset)(context.$options, 'components', tag)) {
	      return (0, _createComponent.createComponent)(Ctor, data, parent, context, tag);
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!namespace && _config2.default.isUnknownElement(tag)) {
	          (0, _index.warn)('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	      return new _vnode2.default(tag, data, undefined, undefined, undefined, namespace, context);
	    }
	  } else {
	    return (0, _createComponent.createComponent)(tag, data, parent, context);
	  }
	}
	
	function renderText(str) {
	  return str || '';
	}
	
	function renderStatic(index) {
	  return this._staticTrees[index];
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.createComponent = createComponent;
	exports.createComponentInstanceForVnode = createComponentInstanceForVnode;
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _vnode = __webpack_require__(22);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	var _lifecycle = __webpack_require__(26);
	
	var _index3 = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent(Ctor, data, parent, context, tag) {
	  if (!Ctor) {
	    return;
	  }
	  if ((0, _index3.isObject)(Ctor)) {
	    Ctor = _index2.default.extend(Ctor);
	  }
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      (0, _index3.warn)('Invalid Component definition: ' + Ctor, parent);
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
	        // $forceUpdate is buffered. this is only called
	        // if the
	        parent.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return;
	      }
	    }
	  }
	
	  data = data || {};
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  if (listeners) {
	    delete data.on;
	  }
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new _vnode2.default('vue-component-' + Ctor.cid + (name ? '-' + name : ''), data, undefined, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, parent: parent, tag: tag, children: undefined }
	  // children to be set later by renderElementWithChildren,
	  // but before the init hook
	  );
	  return vnode;
	}
	
	function createComponentInstanceForVnode(vnode // we know it's MountedComponentVNode but flow doesn't
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: vnodeComponentOptions.parent,
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
	  if (!vnode.child) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}
	
	function prepatch(oldVnode, vnode) {
	  var options = vnode.componentOptions;
	  vnode.child = oldVnode.child;
	  vnode.child._updateFromParent(options.propsData, // updated props
	  options.listeners, // updated listeners
	  vnode, // new parent vnode
	  options.children // new children
	  );
	}
	
	function insert(vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    (0, _lifecycle.callHook)(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    (0, _lifecycle.callHook)(vnode.child, 'activated');
	  }
	}
	
	function destroy(vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
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
	        process.env.NODE_ENV !== 'production' && (0, _index3.warn)('Failed to resolve async component: ' + factory + (reason ? '\nReason: ' + reason : ''));
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
	  var staticAttrs = data.staticAttrs;
	  if (!attrs && !props && !staticAttrs) {
	    return res;
	  }
	  for (var key in propOptions) {
	    var altKey = (0, _index3.hyphenate)(key);
	    checkProp(res, attrs, key, altKey) || checkProp(res, props, key, altKey) || checkProp(res, staticAttrs, key, altKey);
	  }
	  return res;
	}
	
	function checkProp(res, hash, key, altKey) {
	  if (hash) {
	    if ((0, _index3.hasOwn)(hash, key)) {
	      res[key] = hash[key];
	      delete hash[key];
	      return true;
	    } else if ((0, _index3.hasOwn)(hash, altKey)) {
	      res[key] = hash[altKey];
	      delete hash[altKey];
	      return true;
	    }
	  }
	  return false;
	}
	
	function mergeHooks(data) {
	  if (data.hook) {
	    for (var i = 0; i < hooksToMerge.length; i++) {
	      var key = hooksToMerge[i];
	      var fromParent = data.hook[key];
	      var ours = hooks[key];
	      data.hook[key] = fromParent ? mergeHook(ours, fromParent) : ours;
	    }
	  } else {
	    data.hook = hooks;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initLifecycle = initLifecycle;
	exports.lifecycleMixin = lifecycleMixin;
	exports.callHook = callHook;
	
	var _watcher = __webpack_require__(16);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _vnode = __webpack_require__(22);
	
	var _index = __webpack_require__(19);
	
	var _index2 = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initLifecycle(vm) {
	  var options = vm.$options;
	
	  vm.$parent = options.parent;
	  vm.$root = vm.$parent ? vm.$parent.$root : vm;
	  if (vm.$parent && !options._abstract) {
	    vm.$parent.$children.push(vm);
	  }
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
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
	      if (process.env.NODE_ENV !== 'production') {
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
	    if (!vm._vnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(vm._vnode, vnode);
	    }
	    vm._vnode = vnode;
	    // update parent vnode element after patch
	    var parentNode = vm.$options._parentVnode;
	    if (parentNode) {
	      parentNode.elm = vm.$el;
	      // update parent $el if the parent is HOC
	      // this is necessary because child is updated after parent
	      if (vm.$parent && parentNode === vm.$parent._vnode) {
	        vm.$parent.$el = vm.$el;
	      }
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
	    var vm = this;
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      _index.observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        _index.observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = (0, _index2.validateProp)(vm, key, propsData);
	      }
	      _index.observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        _index.observerState.isSettingProps = false;
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	    if (vm._watchers.length) {
	      for (var i = 0; i < vm._watchers.length; i++) {
	        vm._watchers[i].update(true /* shallow */);
	      }
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
	    if (parent && !parent._isBeingDestroyed && !vm.$options._abstract) {
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
	  };
	}
	
	function callHook(vm, hook) {
	  vm.$emit('pre-hook:' + hook);
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initEvents = initEvents;
	exports.eventsMixin = eventsMixin;
	
	var _index = __webpack_require__(8);
	
	var _helpers = __webpack_require__(23);
	
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warn = undefined;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _util = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warn = void 0;
	var formatComponentName = void 0;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    exports.warn = warn = function warn(msg, vm) {
	      if (hasConsole && !_config2.default.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function formatComponentName(vm) {
	      if (vm.$root === vm) {
	        return ' (found in root instance)';
	      }
	      var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
	      return name ? ' (found in component: <' + (0, _util.hyphenate)(name) + '>)' : ' (found in anonymous component. Use the "name" option for better debugging messages)';
	    };
	  })();
	}
	
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.validateProp = validateProp;
	
	var _util = __webpack_require__(6);
	
	var _index = __webpack_require__(19);
	
	var _debug = __webpack_require__(28);
	
	function validateProp(vm, key, propsData) {
	  /* istanbul ignore if */
	  if (!vm.$options.props || !propsData) return;
	  var prop = vm.$options.props[key];
	  var absent = !(0, _util.hasOwn)(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (prop.type === Boolean) {
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
	    _index.observerState.shouldConvert = true;
	    (0, _index.observe)(value);
	    _index.observerState.shouldConvert = false;
	  }
	  if (process.env.NODE_ENV !== 'production') {
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
	    process.env.NODE_ENV !== 'production' && (0, _debug.warn)('Invalid default value for prop "' + name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
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
	  var expectedType = void 0;
	  if (type === String) {
	    expectedType = 'string';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Object) {
	    expectedType = 'Object';
	    valid = (0, _util.isPlainObject)(value);
	  } else if (type === Array) {
	    expectedType = 'Array';
	    valid = Array.isArray(value);
	  } else {
	    expectedType = type.name || type.toString();
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initMixin = initMixin;
	
	var _config = __webpack_require__(5);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _index = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initMixin(Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = (0, _index.mergeOptions)(Vue.options, mixin);
	    // update constructors that are already created
	    _config2.default._ctors.forEach(function (Ctor) {
	      Ctor.options = (0, _index.mergeOptions)(Ctor['super'].options, Ctor.extendOptions);
	    });
	  };
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initExtend = initExtend;
	
	var _config = __webpack_require__(5);
	
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
	    if (process.env.NODE_ENV !== 'production') {
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
	    // book-keeping for global mixin edge cases. also expose a way to remove it
	    Sub.extendOptions = extendOptions;
	    _config2.default._ctors.push(Sub);
	    Sub.release = function () {
	      (0, _index.remove)(_config2.default._ctors, Sub);
	    };
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initAssetRegisters = initAssetRegisters;
	
	var _config = __webpack_require__(5);
	
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
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && _config2.default.isReservedTag(id)) {
	            (0, _index.warn)('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && (0, _index.isPlainObject)(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keepAlive = __webpack_require__(35);
	
	var _keepAlive2 = _interopRequireDefault(_keepAlive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  KeepAlive: _keepAlive2.default
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifecycle = __webpack_require__(26);
	
	exports.default = {
	  name: 'keep-alive',
	  _abstract: true,
	  props: {
	    child: Object
	  },
	  created: function created() {
	    this.cache = Object.create(null);
	  },
	  render: function render() {
	    var rawChild = this.child;
	    var realChild = getRealChild(this.child);
	    var cid = realChild.componentOptions.Ctor.cid;
	    if (this.cache[cid]) {
	      var child = realChild.child = this.cache[cid].child;
	      realChild.elm = this.$el = child.$el;
	    } else {
	      this.cache[cid] = realChild;
	    }
	    realChild.data.keepAlive = true;
	    return rawChild;
	  },
	  destroyed: function destroyed() {
	    for (var key in this.cache) {
	      var vnode = this.cache[key];
	      (0, _lifecycle.callHook)(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	// in case the child is also an abstract component, e.g. <transition-control>
	// we want to recrusively retrieve the real component to be rendered
	
	function getRealChild(vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options._abstract) {
	    return getRealChild(compOptions.propsData.child);
	  } else {
	    return vnode;
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.patch = undefined;
	
	var _nodeOps = __webpack_require__(37);
	
	var nodeOps = _interopRequireWildcard(_nodeOps);
	
	var _patch = __webpack_require__(42);
	
	var _index = __webpack_require__(43);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(46);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = _index4.default.concat(_index2.default);
	
	var patch = exports.patch = (0, _patch.createPatchFunction)({ nodeOps: nodeOps, modules: modules });

/***/ },
/* 37 */
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
	exports.setAttribute = setAttribute;
	
	var _index = __webpack_require__(38);
	
	function createElement(tagName) {
	  return document.createElement(tagName);
	}
	
	function createElementNS(namespace, tagName) {
	  return document.createElementNS(_index.namespaceMap[namespace], tagName);
	}
	
	function createTextNode(text) {
	  return document.createTextNode(text);
	}
	
	function insertBefore(parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild(node, child) {
	  node.removeChild(child);
	}
	
	function appendChild(node, child) {
	  node.appendChild(child);
	}
	
	function parentNode(node) {
	  return node.parentNode;
	}
	
	function nextSibling(node) {
	  return node.nextSibling;
	}
	
	function tagName(node) {
	  return node.tagName;
	}
	
	function setTextContent(node, text) {
	  node.textContent = text;
	}
	
	function childNodes(node) {
	  return node.childNodes;
	}
	
	function setAttribute(node, key, val) {
	  node.setAttribute(key, val);
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isAndroid = exports.isIE9 = exports.isIE = undefined;
	
	var _attrs = __webpack_require__(39);
	
	Object.keys(_attrs).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _attrs[key];
	    }
	  });
	});
	
	var _class = __webpack_require__(40);
	
	Object.keys(_class).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _class[key];
	    }
	  });
	});
	
	var _element = __webpack_require__(41);
	
	Object.keys(_element).forEach(function (key) {
	  if (key === "default") return;
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
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && (0, _index.warn)('Cannot find element: ' + selector);
	      return document.createElement('div');
	    }
	  }
	  return el;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isFalsyAttrValue = exports.getXlinkProp = exports.isXlink = exports.xlinkNS = exports.propsToAttrMap = exports.isBooleanAttr = exports.isEnumeratedAttr = exports.mustUseProp = undefined;
	
	var _util = __webpack_require__(6);
	
	// attributes that should be using props for binding
	var mustUseProp = exports.mustUseProp = (0, _util.makeMap)('value,selected,checked,muted');
	
	var isEnumeratedAttr = exports.isEnumeratedAttr = (0, _util.makeMap)('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = exports.isBooleanAttr = (0, _util.makeMap)('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
	
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isNonPhrasingTag = exports.canBeLeftOpenTag = exports.isUnaryTag = exports.isReservedTag = exports.namespaceMap = undefined;
	exports.getTagNamespace = getTagNamespace;
	exports.isUnknownElement = isUnknownElement;
	
	var _env = __webpack_require__(10);
	
	var _util = __webpack_require__(6);
	
	var namespaceMap = exports.namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isReservedTag = exports.isReservedTag = (0, _util.makeMap)('html,base,head,link,meta,style,listview-shadow,scrollview,title,' + 'address,article,footer,header,listview,view,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');
	
	var isUnaryTag = exports.isUnaryTag = (0, _util.makeMap)('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = exports.canBeLeftOpenTag = (0, _util.makeMap)('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = exports.isNonPhrasingTag = (0, _util.makeMap)('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);
	
	// this map covers namespace elements that can appear as template root nodes
	var isSVG = (0, _util.makeMap)('svg,g,defs,symbol,use,image,text,circle,ellipse,' + 'line,path,polygon,polyline,rect', true);
	
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
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement(tag) {
	  /* istanbul ignore if */
	  if (!_env.inBrowser) {
	    return true;
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag];
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	  } else {
	    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()) &&
	    // Chrome returns unknown for several HTML5 elements.
	    // https://code.google.com/p/chromium/issues/detail?id=540526
	    !/^(data|time|rtc|rb)$/.test(tag);
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPatchFunction = createPatchFunction;
	
	var _vnode = __webpack_require__(22);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	var _index = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Virtual DOM implementation based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * with custom modifications.
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new _vnode2.default('', {}, []);
	var hooks = ['create', 'update', 'postpatch', 'remove', 'destroy'];
	
	function isUndef(s) {
	  return s == null;
	}
	
	function isDef(s) {
	  return s != null;
	}
	
	function sameVnode(vnode1, vnode2) {
	  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag;
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
	
	  function createElm(vnode, insertedVnodeQueue) {
	    var i = void 0,
	        elm = void 0;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	        setScope(vnode);
	        return vnode.elm;
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      elm = vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag);
	      setScope(vnode);
	      if (Array.isArray(children)) {
	        for (i = 0; i < children.length; ++i) {
	          nodeOps.appendChild(elm, createElm(children[i], insertedVnodeQueue));
	        }
	      } else if ((0, _index.isPrimitive)(vnode.text)) {
	        nodeOps.appendChild(elm, nodeOps.createTextNode(vnode.text));
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else {
	      elm = vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm;
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
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope(vnode) {
	    var i = void 0;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
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
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
	      for (i = 0; i < cbs.destroy.length; ++i) {
	        cbs.destroy[i](vnode);
	      }
	    }
	    if (isDef(i = vnode.child)) {
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
	          invokeDestroyHook(ch);
	          removeAndInvokeRemoveHook(ch);
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
	
	  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
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
	          nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	          oldStartVnode = oldCh[++oldStartIdx];
	          newEndVnode = newCh[--newEndIdx];
	        } else if (sameVnode(oldEndVnode, newStartVnode)) {
	          // Vnode moved left
	          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	          nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	          oldEndVnode = oldCh[--oldEndIdx];
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	          idxInOld = oldKeyToIdx[newStartVnode.key];
	          if (isUndef(idxInOld)) {
	            // New element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            elmToMove = oldCh[idxInOld];
	            /* istanbul ignore if */
	            if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	              (0, _index.warn)('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
	            }
	            if (elmToMove.tag !== newStartVnode.tag) {
	              // same key but different element. treat as new element
	              nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	              newStartVnode = newCh[++newStartIdx];
	            } else {
	              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	              oldCh[idxInOld] = undefined;
	              nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
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
	
	  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
	    if (oldVnode === vnode) return;
	    var i = void 0,
	        hook = void 0;
	    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(vnode.data)) {
	      for (i = 0; i < cbs.update.length; ++i) {
	        cbs.update[i](oldVnode, vnode);
	      }if (isDef(hook) && isDef(i = hook.update)) i(oldVnode, vnode);
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
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
	    if (isDef(vnode.data)) {
	      for (i = 0; i < cbs.postpatch.length; ++i) {
	        cbs.postpatch[i](oldVnode, vnode);
	      }if (isDef(hook) && isDef(i = hook.postpatch)) i(oldVnode, vnode);
	    }
	  }
	
	  function invokeInsertHook(queue) {
	    for (var _i2 = 0; _i2 < queue.length; ++_i2) {
	      queue[_i2].data.hook.insert(queue[_i2]);
	    }
	  }
	
	  function hydrate(elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
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
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	        return true;
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        for (var _i3 = 0; _i3 < children.length; _i3++) {
	          var success = hydrate(childNodes[_i3], children[_i3], insertedVnodeQueue);
	          if (!success) {
	            return false;
	          }
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
	      if (vnode.tag.indexOf('vue-component') === 0) {
	        return true;
	      } else {
	        var childNodes = nodeOps.childNodes(node);
	        return vnode.tag === nodeOps.tagName(node).toLowerCase() && (vnode.children ? vnode.children.length === childNodes.length : childNodes.length === 0);
	      }
	    } else {
	      return (0, _index.renderString)(vnode.text) === node.data;
	    }
	  }
	
	  return function patch(oldVnode, vnode, hydrating) {
	    var elm = void 0,
	        parent = void 0;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(insertedVnodeQueue);
	              return oldVnode;
	            } else if (process.env.NODE_ENV !== 'production') {
	              (0, _index.warn)('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. Bailing hydration and performing ' + 'full client-side render.');
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	
	        createElm(vnode, insertedVnodeQueue);
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(insertedVnodeQueue);
	    return vnode.elm;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _directives = __webpack_require__(44);
	
	var _directives2 = _interopRequireDefault(_directives);
	
	var _ref = __webpack_require__(45);
	
	var _ref2 = _interopRequireDefault(_ref);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_ref2.default, _directives2.default];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _options = __webpack_require__(11);
	
	exports.default = {
	  create: function bindDirectives(oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'bind');
	  },
	  update: function updateDirectives(oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'update');
	  },
	  postpatch: function postupdateDirectives(oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'postupdate');
	  },
	  destroy: function unbindDirectives(vnode) {
	    applyDirectives(vnode, vnode, 'unbind');
	  }
	};
	
	
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
	        // only call update if value has changed
	        if (isUpdate && oldDirs) {
	          var oldValue = dir.oldValue = oldDirs[i].value;
	          if (oldValue === dir.value) {
	            continue;
	          }
	        }
	        fn(vnode.elm, dir, vnode, oldVnode);
	      }
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
	
	var _util = __webpack_require__(6);
	
	exports.default = {
	  create: function create(_, vnode) {
	    registerRef(vnode, false);
	  },
	  destroy: function destroy(vnode) {
	    registerRef(vnode, true);
	  }
	}; /* flow */
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _attrs = __webpack_require__(47);
	
	var _attrs2 = _interopRequireDefault(_attrs);
	
	var _class = __webpack_require__(48);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _events = __webpack_require__(49);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _props = __webpack_require__(50);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _style = __webpack_require__(51);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _transition = __webpack_require__(52);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_attrs2.default, _class2.default, _events2.default, _props2.default, _style2.default, _transition2.default];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(38);
	
	function updateAttrs(oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return;
	  }
	  var key = void 0,
	      cur = void 0,
	      old = void 0;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if ((0, _index.isXlink)(key)) {
	        elm.removeAttributeNS(_index.xlinkNS, (0, _index.getXlinkProp)(key));
	      } else if (!(0, _index.isEnumeratedAttr)(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr(el, key, value) {
	  if ((0, _index.isBooleanAttr)(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if ((0, _index.isFalsyAttrValue)(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if ((0, _index.isEnumeratedAttr)(key)) {
	    el.setAttribute(key, (0, _index.isFalsyAttrValue)(value) || value === 'false' ? 'false' : 'true');
	  } else if ((0, _index.isXlink)(key)) {
	    if ((0, _index.isFalsyAttrValue)(value)) {
	      el.removeAttributeNS(_index.xlinkNS, (0, _index.getXlinkProp)(key));
	    } else {
	      el.setAttributeNS(_index.xlinkNS, key, value);
	    }
	  } else {
	    if ((0, _index.isFalsyAttrValue)(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	exports.default = {
	  create: function create(_, vnode) {
	    var attrs = vnode.data.staticAttrs;
	    if (attrs) {
	      for (var key in attrs) {
	        setAttr(vnode.elm, key, attrs[key]);
	      }
	    }
	    updateAttrs(_, vnode);
	  },
	  update: updateAttrs
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(38);
	
	function updateClass(oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  if (!data.staticClass && !data.class) {
	    return;
	  }
	
	  var cls = (0, _index.genClassForVnode)(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = (0, _index.concat)(cls, (0, _index.stringifyClass)(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	exports.default = {
	  create: updateClass,
	  update: updateClass
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(23);
	
	function updateDOMListeners(oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return;
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  (0, _helpers.updateListeners)(on, oldOn, add, remove);
	} // skip type checking this file because we need to attach private properties
	// to elements
	
	exports.default = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	function updateProps(oldVnode, vnode) {
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(6);
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl = void 0;
	var normalize = (0, _util.cached)(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = (0, _util.camelize)(prop);
	  if (prop !== 'filter' && prop in testEl.style) {
	    return prop;
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed;
	    }
	  }
	});
	
	function updateStyle(oldVnode, vnode) {
	  if (!oldVnode.data.style && !vnode.data.style) {
	    return;
	  }
	  var cur = void 0,
	      name = void 0;
	  var elm = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = (0, _util.toObject)(style);
	  }
	
	  for (name in oldStyle) {
	    if (!style[name]) {
	      elm.style[normalize(name)] = '';
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      elm.style[normalize(name)] = cur || '';
	    }
	  }
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  vnode.data.style = (0, _util.extend)({}, style);
	}
	
	exports.default = {
	  create: updateStyle,
	  update: updateStyle
	};

/***/ },
/* 52 */
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
	
	var _classUtil = __webpack_require__(53);
	
	var _index = __webpack_require__(8);
	
	var _util = __webpack_require__(6);
	
	var _index2 = __webpack_require__(38);
	
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _model = __webpack_require__(55);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _show = __webpack_require__(56);
	
	var _show2 = _interopRequireDefault(_show);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  model: _model2.default,
	  show: _show2.default
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(8);
	
	var _index2 = __webpack_require__(38);
	
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
	    if (process.env.NODE_ENV !== 'production') {
	      if (!vnode.tag.match(/input|select|textarea/)) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(38);
	
	var _transition = __webpack_require__(52);
	
	exports.default = {
	  bind: function bind(el, _ref, vnode) {
	    var value = _ref.value;
	
	    var transition = getTransition(vnode);
	    if (value && transition && transition.appear && !_index.isIE9) {
	      (0, _transition.enter)(vnode);
	    }
	    el.style.display = value ? '' : 'none';
	  },
	  update: function update(el, _ref2, vnode) {
	    var value = _ref2.value;
	
	    var transition = getTransition(vnode);
	    if (transition && !_index.isIE9) {
	      if (value) {
	        (0, _transition.enter)(vnode);
	        el.style.display = '';
	      } else {
	        (0, _transition.leave)(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	
	function getTransition(vnode) {
	  var parent = vnode.parent;
	  return parent && parent.data.transition != null ? parent.data.transition : vnode.data.transition;
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _transitionControl = __webpack_require__(58);
	
	var _transitionControl2 = _interopRequireDefault(_transitionControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  TransitionControl: _transitionControl2.default
	};

/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.baseOptions = undefined;
	exports.compile = compile;
	exports.compileToFunctions = compileToFunctions;
	
	var _util = __webpack_require__(6);
	
	var _debug = __webpack_require__(28);
	
	var _index = __webpack_require__(60);
	
	var _errorDetector = __webpack_require__(73);
	
	var _index2 = __webpack_require__(74);
	
	var _index3 = _interopRequireDefault(_index2);
	
	var _index4 = __webpack_require__(78);
	
	var _index5 = _interopRequireDefault(_index4);
	
	var _index6 = __webpack_require__(38);
	
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
	  if (process.env.NODE_ENV !== 'production') {
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
	  if (process.env.NODE_ENV !== 'production') {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compile = compile;
	
	var _index = __webpack_require__(61);
	
	var _optimizer = __webpack_require__(67);
	
	var _codegen = __webpack_require__(68);
	
	/**
	 * Compile a template.
	 */
	function compile(template, options) {
	  var ast = (0, _index.parse)(template.trim(), options);
	  (0, _optimizer.optimize)(ast, options);
	  var code = (0, _codegen.generate)(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  };
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dirRE = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.parse = parse;
	
	var _entities = __webpack_require__(62);
	
	var _htmlParser = __webpack_require__(63);
	
	var _textParser = __webpack_require__(64);
	
	var _util = __webpack_require__(6);
	
	var _helpers = __webpack_require__(66);
	
	var dirRE = exports.dirRE = /^v-|^@|^:/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var forAliasRE = /(.*)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((.*),(.*)\)/;
	var camelRE = /[a-z\d][A-Z]/;
	
	var decodeHTMLCached = (0, _util.cached)(_entities.decodeHTML);
	
	// configurable state
	var warn = void 0;
	var platformGetTagNamespace = void 0;
	var platformMustUseProp = void 0;
	var preTransforms = void 0;
	var transforms = void 0;
	var postTransforms = void 0;
	var delimiters = void 0;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse(template, options) {
	  warn = options.warn || _helpers.baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || _util.no;
	  platformMustUseProp = options.mustUseProp || _util.no;
	  preTransforms = (0, _helpers.pluckModuleFunction)(options.modules, 'preTransformNode');
	  transforms = (0, _helpers.pluckModuleFunction)(options.modules, 'transformNode');
	  postTransforms = (0, _helpers.pluckModuleFunction)(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var root = void 0;
	  var currentParent = void 0;
	  var inPre = false;
	  var warned = false;
	  (0, _htmlParser.parseHTML)(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    start: function start(tag, attrs, unary) {
	      // check camelCase tag
	      if (camelRE.test(tag)) {
	        process.env.NODE_ENV !== 'production' && warn('Found camelCase tag in template: <' + tag + '>. ' + ('I\'ve converted it to <' + (0, _util.hyphenate)(tag) + '> for you.'));
	        tag = (0, _util.hyphenate)(tag);
	      }
	
	      tag = tag.toLowerCase();
	
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
	        process.env.NODE_ENV !== 'production' && warn('Templates should only be responsbile for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + ('<' + tag + '>.'));
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inPre) {
	        processPre(element);
	        if (element.pre) {
	          inPre = true;
	        }
	      }
	      if (inPre) {
	        processRawAttrs(element);
	      } else {
	        processKey(element);
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        // determine whether this is a plain element after
	        // removing if/for/once attributes
	        element.plain = !element.key && !attrs.length;
	        processRender(element);
	        processSlot(element);
	        processComponent(element);
	        for (var _i = 0; _i < transforms.length; _i++) {
	          transforms[_i](element, options);
	        }
	        processAttrs(element);
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        // check root element constraints
	        if (process.env.NODE_ENV !== 'production') {
	          if (tag === 'slot' || tag === 'template') {
	            warn('Cannot use <' + tag + '> as component root element because it may ' + 'contain multiple nodes:\n' + template);
	          }
	          if (element.attrsMap.hasOwnProperty('v-for')) {
	            warn('Cannot use v-for on component root element because it renders ' + 'multiple elements:\n' + template);
	          }
	        }
	      } else if (process.env.NODE_ENV !== 'production' && !stack.length && !warned) {
	        warned = true;
	        warn('Component template should contain exactly one root element:\n\n' + template);
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
	        inPre = false;
	      }
	    },
	    chars: function chars(text) {
	      if (!currentParent) {
	        if (process.env.NODE_ENV !== 'production' && !warned) {
	          warned = true;
	          warn('Component template should contain exactly one root element:\n\n' + template);
	        }
	        return;
	      }
	      text = currentParent.tag === 'pre' || text.trim() ? decodeHTMLCached(text)
	      // only preserve whitespace if its not right after a starting tag
	      : currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression = void 0;
	        if (!inPre && text !== ' ' && (expression = (0, _textParser.parseText)(text, delimiters))) {
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
	    var attrs = el.staticAttrs = new Array(l);
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
	
	function processFor(el) {
	  var exp = void 0;
	  if (exp = (0, _helpers.getAndRemoveAttr)(el, 'v-for')) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression: ' + exp);
	      return;
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.iterator = iteratorMatch[1].trim();
	      el.alias = iteratorMatch[2].trim();
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
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('v-else used on element <' + el.tag + '> without corresponding v-if.');
	  }
	}
	
	function processOnce(el) {
	  var once = (0, _helpers.getAndRemoveAttr)(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}
	
	function processRender(el) {
	  if (el.tag === 'render') {
	    el.render = true;
	    el.renderMethod = el.attrsMap[':method'] || el.attrsMap['v-bind:method'];
	    el.renderArgs = el.attrsMap[':args'] || el.attrsMap['v-bind:args'];
	    if (process.env.NODE_ENV !== 'production') {
	      if (el.attrsMap.method) {
	        warn('<render> method should use a dynamic binding, e.g. `:method="..."`.');
	      } else if (!el.renderMethod) {
	        warn('method attribute is required on <render>.');
	      }
	      if (el.attrsMap.args) {
	        warn('<render> args should use a dynamic binding, e.g. `:args="..."`.');
	      }
	    }
	  }
	}
	
	function processSlot(el) {
	  if (el.tag === 'slot') {
	    el.slotName = (0, _helpers.getBindingAttr)(el, 'name');
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
	  if ((0, _helpers.getAndRemoveAttr)(el, 'keep-alive') != null) {
	    el.keepAlive = true;
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
	      modifiers = void 0;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) {
	        // v-bind
	        name = name.replace(bindRE, '');
	        if (platformMustUseProp(name)) {
	          (0, _helpers.addProp)(el, name, value);
	        } else {
	          (0, _helpers.addAttr)(el, name, value);
	        }
	      } else if (onRE.test(name)) {
	        // v-on
	        name = name.replace(onRE, '');
	        (0, _helpers.addHandler)(el, name, value, modifiers);
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
	      if (process.env.NODE_ENV !== 'production') {
	        var expression = (0, _textParser.parseText)(value, delimiters);
	        if (expression) {
	          warn(name + '="' + value + '": ' + 'Interpolation inside attributes has been deprecated. ' + 'Use v-bind or the colon shorthand instead.');
	        }
	      }
	      (0, _helpers.addStaticAttr)(el, name, JSON.stringify(value));
	    }
	  }
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
	    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name]) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decodeHTML = decodeHTML;
	
	
	var decoder = document.createElement('div');
	
	function decodeHTML(html) {
	  decoder.innerHTML = html;
	  return decoder.textContent;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseHTML = parseHTML;
	
	var _entities = __webpack_require__(62);
	
	var _util = __webpack_require__(6);
	
	var _index = __webpack_require__(38);
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/; /**
	                                               * Not type-checking this file because it's mostly vendor code.
	                                               */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	var singleAttrAssign = /=/;
	var singleAttrAssigns = [singleAttrAssign];
	var singleAttrValues = [
	// attr value double quotes
	/"([^"]*)"+/.source,
	// attr value, single quotes
	/'([^']*)'+/.source,
	// attr value, no quotes
	/([^\s"'=<>`]+)/.source];
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
	var special = (0, _util.makeMap)('script,style', true);
	
	var reCache = {};
	
	function attrForHandler(handler) {
	  var pattern = singleAttrIdentifier.source + '(?:\\s*(' + joinSingleAttrAssigns(handler) + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?';
	  return new RegExp('^\\s*' + pattern);
	}
	
	function joinSingleAttrAssigns(handler) {
	  return singleAttrAssigns.map(function (assign) {
	    return '(?:' + assign.source + ')';
	  }).join('|');
	}
	
	function parseHTML(html, handler) {
	  var stack = [];
	  var attribute = attrForHandler(handler);
	  var expectHTML = handler.expectHTML;
	  var isUnaryTag = handler.isUnaryTag || _util.no;
	  var isSpecialTag = handler.isSpecialTag || special;
	  var last = void 0,
	      prevTag = void 0,
	      nextTag = void 0,
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
	            html = html.substring(commentEnd + 3);
	            prevTag = '';
	            continue;
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (/^<!\[/.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            html = html.substring(conditionalEnd + 2);
	            prevTag = '';
	            continue;
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          if (handler.doctype) {
	            handler.doctype(doctypeMatch[0]);
	          }
	          html = html.substring(doctypeMatch[0].length);
	          prevTag = '';
	          continue;
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          html = html.substring(endTagMatch[0].length);
	          endTagMatch[0].replace(endTag, parseEndTag);
	          prevTag = '/' + endTagMatch[1].toLowerCase();
	          continue;
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag(html);
	        if (startTagMatch) {
	          html = startTagMatch.rest;
	          handleStartTag(startTagMatch);
	          prevTag = startTagMatch.tagName.toLowerCase();
	          continue;
	        }
	      }
	
	      var text = void 0;
	      if (textEnd >= 0) {
	        text = html.substring(0, textEnd);
	        html = html.substring(textEnd);
	      } else {
	        text = html;
	        html = '';
	      }
	
	      // next tag
	      var nextTagMatch = parseStartTag(html);
	      if (nextTagMatch) {
	        nextTag = nextTagMatch.tagName;
	      } else {
	        nextTagMatch = html.match(endTag);
	        if (nextTagMatch) {
	          nextTag = '/' + nextTagMatch[1];
	        } else {
	          nextTag = '';
	        }
	      }
	
	      if (handler.chars) {
	        handler.chars(text, prevTag, nextTag);
	      }
	      prevTag = '';
	    } else {
	      (function () {
	        var stackedTag = lastTag.toLowerCase();
	        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)</' + stackedTag + '[^>]*>', 'i'));
	
	        html = html.replace(reStackedTag, function (all, text) {
	          if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
	          }
	          if (handler.chars) {
	            handler.chars(text);
	          }
	          return '';
	        });
	
	        parseEndTag('</' + stackedTag + '>', stackedTag);
	      })();
	    }
	
	    if (html === last) {
	      throw new Error('Error parsing template:\n\n' + html);
	    }
	  }
	
	  if (!handler.partialMarkup) {
	    // Clean up any remaining tags
	    parseEndTag();
	  }
	
	  function parseStartTag(input) {
	    var start = input.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: []
	      };
	      input = input.slice(start[0].length);
	      var end = void 0,
	          attr = void 0;
	      while (!(end = input.match(startTagClose)) && (attr = input.match(attribute))) {
	        input = input.slice(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        match.rest = input.slice(end[0].length);
	        return match;
	      }
	    }
	  }
	
	  function handleStartTag(match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && (0, _index.isNonPhrasingTag)(tagName)) {
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
	      attrs[i] = {
	        name: args[1],
	        value: (0, _entities.decodeHTML)(args[3] || args[4] || args[5] || '')
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }
	
	    if (handler.start) {
	      handler.start(tagName, attrs, unary, unarySlash);
	    }
	  }
	
	  function parseEndTag(tag, tagName) {
	    var pos = void 0;
	
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
	        if (handler.end) {
	          handler.end(stack[i].tag, stack[i].attrs, i > pos || !tag);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (handler.start) {
	        handler.start(tagName, [], true, '');
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (handler.start) {
	        handler.start(tagName, [], false, '', true);
	      }
	      if (handler.end) {
	        handler.end(tagName, []);
	      }
	    }
	  }
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseText = parseText;
	
	var _util = __webpack_require__(6);
	
	var _filterParser = __webpack_require__(65);
	
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
/* 65 */
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
/* 66 */
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
	
	function addHandler(el, name, value, modifiers) {
	  var events = el.events || (el.events = {});
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = [handlers, newHandler];
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
/* 67 */
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
	  markStaticRoots(root);
	}
	
	function genStaticKeys(keys) {
	  return (0, _util.makeMap)('type,tag,attrsList,attrsMap,plain,parent,children,staticAttrs' + (keys ? ',' + keys : ''));
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
	
	function markStaticRoots(node) {
	  if (node.type === 1 && (node.once || node.static)) {
	    node.staticRoot = true;
	    return;
	  }
	  if (node.children) {
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      markStaticRoots(node.children[i]);
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
	  return !!(node.pre || !node.if && !node.for && // not v-if or v-for or v-else
	  !(0, _util.isBuiltInTag)(node.tag) && // not a built-in
	  isPlatformReservedTag(node.tag) && ( // not a component
	  node.plain || Object.keys(node).every(isStaticKey)) // no dynamic bindings
	  );
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generate = generate;
	
	var _events = __webpack_require__(69);
	
	var _helpers = __webpack_require__(66);
	
	var _index = __webpack_require__(70);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _util = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// configurable state
	var warn = void 0;
	var transforms = void 0;
	var dataGenFns = void 0;
	var platformDirectives = void 0;
	var isPlatformReservedTag = void 0;
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
	  isPlatformReservedTag = options.isReservedTag || _util.no;
	  var code = ast ? genElement(ast) : '_h(_e("div"))';
	  staticRenderFns = prevStaticRenderFns;
	  return {
	    render: 'with(this){return ' + code + '}',
	    staticRenderFns: currentStaticRenderFns
	  };
	}
	
	function genElement(el) {
	  if (el.for) {
	    return genFor(el);
	  } else if (el.if) {
	    return genIf(el);
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0';
	  } else if (el.tag === 'render') {
	    return genRender(el);
	  } else if (el.tag === 'slot') {
	    return genSlot(el);
	  } else {
	    // component or element
	    var code = void 0;
	    if (el.component) {
	      code = genComponent(el);
	    } else {
	      var data = genData(el);
	      // if the element is potentially a component,
	      // wrap its children as a thunk.
	      var children = !el.inlineTemplate ? genChildren(el, !el.ns && !isPlatformReservedTag(el.tag) /* asThunk */) : null;
	      code = '_h(_e(\'' + el.tag + '\'' + (data ? ',' + data : el.ns ? ',void 0' : '' // data
	      ) + (el.ns ? ',\'' + el.ns + '\'' : '' // namespace
	      ) + ')' + (children ? ',' + children : '' // children
	      ) + ')';
	      if (el.staticRoot) {
	        // hoist static sub-trees out
	        staticRenderFns.push('with(this){return ' + code + '}');
	        code = '_m(' + (staticRenderFns.length - 1) + ')';
	      }
	    }
	    // module transforms
	    for (var i = 0; i < transforms.length; i++) {
	      code = transforms[i](el, code);
	    }
	    // check keep-alive
	    if (el.component && el.keepAlive) {
	      code = '_h(_e("KeepAlive",{props:{child:' + code + '}}))';
	    }
	    return code;
	  }
	}
	
	function genIf(el) {
	  var exp = el.if;
	  el.if = null; // avoid recursion
	  return '(' + exp + ')?' + genElement(el) + ':' + genElse(el);
	}
	
	function genElse(el) {
	  return el.elseBlock ? genElement(el.elseBlock) : 'void 0';
	}
	
	function genFor(el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator = el.iterator;
	  el.for = null; // avoid recursion
	  return '(' + exp + ')&&_l((' + exp + '),' + ('function(' + alias + ',$index,' + (iterator || '$key') + '){') + ('return ' + genElement(el)) + '})';
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
	    data += 'ref:"' + el.ref + '",';
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
	  // props
	  if (el.props) {
	    data += 'props:{' + genProps(el.props) + '},';
	  }
	  // attributes
	  if (el.attrs) {
	    data += 'attrs:{' + genProps(el.attrs) + '},';
	  }
	  // static attributes
	  if (el.staticAttrs) {
	    data += 'staticAttrs:{' + genProps(el.staticAttrs) + '},';
	  }
	  // hooks
	  if (el.hooks) {
	    data += 'hook:{' + genHooks(el.hooks) + '},';
	  }
	  // event handlers
	  if (el.events) {
	    data += (0, _events.genHandlers)(el.events) + ',';
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if (process.env.NODE_ENV !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
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
	      res += '{name:"' + dir.name + '"' + (dir.value ? ',value:(' + dir.value + ')' : '') + (dir.arg ? ',arg:"' + dir.arg + '"' : '') + (dir.modifiers ? ',modifiers:' + JSON.stringify(dir.modifiers) : '') + '},';
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']';
	  }
	}
	
	function genChildren(el, asThunk) {
	  if (!el.children.length) {
	    return;
	  }
	  var code = '[' + el.children.map(genNode).join(',') + ']';
	  return asThunk ? 'function(){return ' + code + '}' : code;
	}
	
	function genNode(node) {
	  if (node.type === 1) {
	    return genElement(node);
	  } else {
	    return genText(node);
	  }
	}
	
	function genText(text) {
	  return text.type === 2 ? '(' + text.expression + ')' : '_t(' + JSON.stringify(text.text) + ')';
	}
	
	function genRender(el) {
	  if (!el.renderMethod) {
	    return 'void 0';
	  }
	  var children = genChildren(el);
	  return el.renderMethod + '(' + (el.renderArgs || '') + (children ? (el.renderArgs ? ',' : '') + children : '') + ')';
	}
	
	function genSlot(el) {
	  var slot = '$slots[' + (el.slotName || '"default"') + ']';
	  var children = genChildren(el);
	  return children ? '(' + slot + '||' + children + ')' : slot;
	}
	
	function genComponent(el) {
	  var children = genChildren(el, true);
	  return '_h(_e(' + el.component + ',' + genData(el) + ')' + (children ? ',' + children : '') + ')';
	}
	
	function genProps(props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += '"' + prop.name + '":' + prop.value + ',';
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 69 */
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
	
	function genHandlers(events) {
	  var res = 'on:{';
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
	    var code = 'function($event){';
	    for (var key in handler.modifiers) {
	      code += modifierCode[key] || genKeyFilter(key);
	    }
	    var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
	    return code + handlerCode + '}';
	  }
	}
	
	function genKeyFilter(key) {
	  var code = keyCodes[key];
	  if (Array.isArray(code)) {
	    return 'if(' + code.map(function (c) {
	      return '$event.keyCode!==' + c;
	    }).join('&&') + ')return;';
	  } else {
	    return 'if($event.keyCode!==' + code + ')return;';
	  }
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ref = __webpack_require__(71);
	
	var _ref2 = _interopRequireDefault(_ref);
	
	var _bind = __webpack_require__(72);
	
	var _bind2 = _interopRequireDefault(_bind);
	
	var _util = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  ref: _ref2.default,
	  bind: _bind2.default,
	  cloak: _util.noop
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ref;
	function ref(el, dir) {
	  if (dir.arg) {
	    el.ref = dir.arg;
	    // go up and check if this node is inside a v-for
	    var parent = el;
	    while (parent) {
	      if (parent.for !== undefined) {
	        el.refInFor = true;
	        break;
	      }
	      parent = parent.parent;
	    }
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bind;
	
	var _helpers = __webpack_require__(66);
	
	function bind(el, dir) {
	  (0, _helpers.addHook)(el, 'construct', '_b(n1,' + dir.value + ')');
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.detectErrors = detectErrors;
	
	var _index = __webpack_require__(61);
	
	var keywordRE = new RegExp('\\b' + ('do,if,in,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,typeof,default,' + 'extends,finally,continue,debugger,function,arguments,instanceof').split(',').join('\\b|\\b') + '\\b');
	
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
	          checkExpression(value, name + '="' + value + '"', errors);
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
	
	function checkExpression(exp, text, errors) {
	  exp = stripToString(exp);
	  var keywordMatch = exp.match(keywordRE);
	  if (keywordMatch) {
	    errors.push('- avoid using JavaScript keyword as property name: ' + ('"' + keywordMatch[0] + '" in expression ' + text));
	  } else {
	    try {
	      new Function(exp);
	    } catch (e) {
	      errors.push('- invalid expression: ' + text);
	    }
	  }
	}
	
	function stripToString(exp) {
	  return exp.replace(/^_s\((.*)\)$/, '$1');
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _class = __webpack_require__(75);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _style = __webpack_require__(76);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _transition = __webpack_require__(77);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_class2.default, _style2.default, _transition2.default];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _textParser = __webpack_require__(64);
	
	var _helpers = __webpack_require__(66);
	
	function transformNode(el, options) {
	  var warn = options.warn || _helpers.baseWarn;
	  var staticClass = (0, _helpers.getAndRemoveAttr)(el, 'class');
	  if (process.env.NODE_ENV !== 'production' && staticClass) {
	    var expression = (0, _textParser.parseText)(staticClass, options.delimiters);
	    if (expression) {
	      warn('class="' + staticClass + '": ' + 'Interpolation inside attributes has been deprecated. ' + 'Use v-bind or the colon shorthand instead.');
	    }
	  }
	  el.staticClass = JSON.stringify(staticClass);
	  var classBinding = (0, _helpers.getBindingAttr)(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData(el) {
	  var data = '';
	  if (el.staticClass) {
	    data += 'staticClass:' + el.staticClass + ',';
	  }
	  if (el.classBinding) {
	    data += 'class:' + el.classBinding + ',';
	  }
	  return data;
	}
	
	exports.default = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(66);
	
	function transformNode(el) {
	  var styleBinding = (0, _helpers.getBindingAttr)(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData(el) {
	  return el.styleBinding ? 'style:(' + el.styleBinding + '),' : '';
	}
	
	exports.default = {
	  transformNode: transformNode,
	  genData: genData
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(66);
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _model = __webpack_require__(79);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _text = __webpack_require__(80);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _html = __webpack_require__(81);
	
	var _html2 = _interopRequireDefault(_html);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  model: _model2.default,
	  text: _text2.default,
	  html: _html2.default
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = model;
	
	var _helpers = __webpack_require__(66);
	
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
	  if (process.env.NODE_ENV !== 'production' && el.attrsMap.checked != null) {
	    warn('<' + el.tag + ' v-model="' + value + '" checked>:\n' + 'inline checked attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	  }
	  var valueBinding = (0, _helpers.getBindingAttr)(el, 'value');
	  var trueValueBinding = (0, _helpers.getBindingAttr)(el, 'true-value') || 'true';
	  var falseValueBinding = (0, _helpers.getBindingAttr)(el, 'false-value') || 'false';
	  (0, _helpers.addProp)(el, 'checked', 'Array.isArray(' + value + ')' + ('?(' + value + ').indexOf(' + valueBinding + ')>-1') + (':(' + value + ')===(' + trueValueBinding + ')'));
	  (0, _helpers.addHandler)(el, 'change', 'var $$a=' + value + ',' + '$$el=$event.target,' + ('$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');') + 'if(Array.isArray($$a)){' + ('var $$v=' + valueBinding + ',') + '$$i=$$a.indexOf($$v);' + 'if($$c){$$i<0&&$$a.push($$v)}' + 'else{$$i>-1&&$$a.splice($$i,1)}' + ('}else{' + value + '=$$c}'));
	}
	
	function genRadioModel(el, value) {
	  if (process.env.NODE_ENV !== 'production' && el.attrsMap.checked != null) {
	    warn('<' + el.tag + ' v-model="' + value + '" checked>:\n' + 'inline checked attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	  }
	  var valueBinding = (0, _helpers.getBindingAttr)(el, 'value');
	  (0, _helpers.addProp)(el, 'checked', '(' + value + ')===(' + valueBinding + ')');
	  (0, _helpers.addHandler)(el, 'change', value + '=' + valueBinding);
	}
	
	function genDefaultModel(el, value, modifiers) {
	  if (process.env.NODE_ENV !== 'production') {
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
	  if (process.env.NODE_ENV !== 'production') {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = text;
	
	var _helpers = __webpack_require__(66);
	
	function text(el, dir) {
	  if (dir.value) {
	    (0, _helpers.addProp)(el, 'textContent', '_s(' + dir.value + ')');
	  }
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = html;
	
	var _helpers = __webpack_require__(66);
	
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