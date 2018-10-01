webpackJsonp([24],{

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tables/1.png?610f2a5a";

/***/ }),

/***/ 1707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/tables/static/Static.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG","file":"Static.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1853:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1707);
    var insertCss = __webpack_require__(40);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Static.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Static.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 2061:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(4));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSparklines"] = factory(require("react"));
	else
		root["ReactSparklines"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(16)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.reduce(function (a, b) {
        return a + b;
    }) / data.length;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.min.apply(Math, data);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(4);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.max.apply(Math, data);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(3);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sqDiff = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    var avgSqDiff = (0, _mean2.default)(sqDiff);
    return Math.sqrt(avgSqDiff);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SparklinesText = exports.SparklinesNormalBand = exports.SparklinesReferenceLine = exports.SparklinesSpots = exports.SparklinesBars = exports.SparklinesCurve = exports.SparklinesLine = exports.Sparklines = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SparklinesText = __webpack_require__(17);

var _SparklinesText2 = _interopRequireDefault(_SparklinesText);

var _SparklinesLine = __webpack_require__(18);

var _SparklinesLine2 = _interopRequireDefault(_SparklinesLine);

var _SparklinesCurve = __webpack_require__(19);

var _SparklinesCurve2 = _interopRequireDefault(_SparklinesCurve);

var _SparklinesBars = __webpack_require__(20);

var _SparklinesBars2 = _interopRequireDefault(_SparklinesBars);

var _SparklinesSpots = __webpack_require__(21);

var _SparklinesSpots2 = _interopRequireDefault(_SparklinesSpots);

var _SparklinesReferenceLine = __webpack_require__(22);

var _SparklinesReferenceLine2 = _interopRequireDefault(_SparklinesReferenceLine);

var _SparklinesNormalBand = __webpack_require__(27);

var _SparklinesNormalBand2 = _interopRequireDefault(_SparklinesNormalBand);

var _dataToPoints = __webpack_require__(28);

var _dataToPoints2 = _interopRequireDefault(_dataToPoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sparklines = function (_PureComponent) {
    _inherits(Sparklines, _PureComponent);

    function Sparklines(props) {
        _classCallCheck(this, Sparklines);

        return _possibleConstructorReturn(this, (Sparklines.__proto__ || Object.getPrototypeOf(Sparklines)).call(this, props));
    }

    _createClass(Sparklines, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                limit = _props.limit,
                width = _props.width,
                height = _props.height,
                svgWidth = _props.svgWidth,
                svgHeight = _props.svgHeight,
                preserveAspectRatio = _props.preserveAspectRatio,
                margin = _props.margin,
                style = _props.style,
                max = _props.max,
                min = _props.min;


            if (data.length === 0) return null;

            var points = (0, _dataToPoints2.default)({ data: data, limit: limit, width: width, height: height, margin: margin, max: max, min: min });

            var svgOpts = { style: style, viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: preserveAspectRatio };
            if (svgWidth > 0) svgOpts.width = svgWidth;
            if (svgHeight > 0) svgOpts.height = svgHeight;

            return _react2.default.createElement(
                'svg',
                svgOpts,
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, { data: data, points: points, width: width, height: height, margin: margin });
                })
            );
        }
    }]);

    return Sparklines;
}(_react.PureComponent);

Sparklines.propTypes = {
    data: _propTypes2.default.array,
    limit: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    svgWidth: _propTypes2.default.number,
    svgHeight: _propTypes2.default.number,
    preserveAspectRatio: _propTypes2.default.string,
    margin: _propTypes2.default.number,
    style: _propTypes2.default.object,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    onMouseMove: _propTypes2.default.func
};
Sparklines.defaultProps = {
    data: [],
    width: 240,
    height: 60,
    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin: 2
};
exports.Sparklines = Sparklines;
exports.SparklinesLine = _SparklinesLine2.default;
exports.SparklinesCurve = _SparklinesCurve2.default;
exports.SparklinesBars = _SparklinesBars2.default;
exports.SparklinesSpots = _SparklinesSpots2.default;
exports.SparklinesReferenceLine = _SparklinesReferenceLine2.default;
exports.SparklinesNormalBand = _SparklinesNormalBand2.default;
exports.SparklinesText = _SparklinesText2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(15);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesText = function (_React$Component) {
    _inherits(SparklinesText, _React$Component);

    function SparklinesText() {
        _classCallCheck(this, SparklinesText);

        return _possibleConstructorReturn(this, (SparklinesText.__proto__ || Object.getPrototypeOf(SparklinesText)).apply(this, arguments));
    }

    _createClass(SparklinesText, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                point = _props.point,
                text = _props.text,
                fontSize = _props.fontSize,
                fontFamily = _props.fontFamily;
            var x = point.x,
                y = point.y;

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement(
                    'text',
                    { x: x, y: y, fontFamily: fontFamily || "Verdana", fontSize: fontSize || 10 },
                    text
                )
            );
        }
    }]);

    return SparklinesText;
}(_react2.default.Component);

SparklinesText.propTypes = {
    text: _propTypes2.default.string,
    point: _propTypes2.default.object,
    fontSize: _propTypes2.default.number,
    fontFamily: _propTypes2.default.string
};
SparklinesText.defaultProps = {
    text: '',
    point: { x: 0, y: 0 }
};
exports.default = SparklinesText;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesLine = function (_React$Component) {
  _inherits(SparklinesLine, _React$Component);

  function SparklinesLine() {
    _classCallCheck(this, SparklinesLine);

    return _possibleConstructorReturn(this, (SparklinesLine.__proto__ || Object.getPrototypeOf(SparklinesLine)).apply(this, arguments));
  }

  _createClass(SparklinesLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          points = _props.points,
          width = _props.width,
          height = _props.height,
          margin = _props.margin,
          color = _props.color,
          style = _props.style,
          onMouseMove = _props.onMouseMove;


      var linePoints = points.map(function (p) {
        return [p.x, p.y];
      }).reduce(function (a, b) {
        return a.concat(b);
      });

      var closePolyPoints = [points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];

      var fillPoints = linePoints.concat(closePolyPoints);

      var lineStyle = {
        stroke: color || style.stroke || 'slategray',
        strokeWidth: style.strokeWidth || '1',
        strokeLinejoin: style.strokeLinejoin || 'round',
        strokeLinecap: style.strokeLinecap || 'round',
        fill: 'none'
      };
      var fillStyle = {
        stroke: style.stroke || 'none',
        strokeWidth: '0',
        fillOpacity: style.fillOpacity || '.1',
        fill: style.fill || color || 'slategray',
        pointerEvents: 'auto'
      };

      var tooltips = points.map(function (p, i) {
        return _react2.default.createElement('circle', {
          key: i,
          cx: p.x,
          cy: p.y,
          r: 2,
          style: fillStyle,
          onMouseEnter: function onMouseEnter(e) {
            return onMouseMove('enter', data[i], p);
          },
          onClick: function onClick(e) {
            return onMouseMove('click', data[i], p);
          }
        });
      });

      return _react2.default.createElement(
        'g',
        null,
        tooltips,
        _react2.default.createElement('polyline', { points: fillPoints.join(' '), style: fillStyle }),
        _react2.default.createElement('polyline', { points: linePoints.join(' '), style: lineStyle })
      );
    }
  }]);

  return SparklinesLine;
}(_react2.default.Component);

SparklinesLine.propTypes = {
  color: _propTypes2.default.string,
  style: _propTypes2.default.object
};
SparklinesLine.defaultProps = {
  style: {},
  onMouseMove: function onMouseMove() {}
};
exports.default = SparklinesLine;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesCurve = function (_React$Component) {
    _inherits(SparklinesCurve, _React$Component);

    function SparklinesCurve() {
        _classCallCheck(this, SparklinesCurve);

        return _possibleConstructorReturn(this, (SparklinesCurve.__proto__ || Object.getPrototypeOf(SparklinesCurve)).apply(this, arguments));
    }

    _createClass(SparklinesCurve, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                margin = _props.margin,
                color = _props.color,
                style = _props.style,
                _props$divisor = _props.divisor,
                divisor = _props$divisor === undefined ? 0.25 : _props$divisor;

            var prev = void 0;
            var curve = function curve(p) {
                var res = void 0;
                if (!prev) {
                    res = [p.x, p.y];
                } else {
                    var len = (p.x - prev.x) * divisor;
                    res = ["C",
                    //x1
                    prev.x + len,
                    //y1
                    prev.y,
                    //x2,
                    p.x - len,
                    //y2,
                    p.y,
                    //x,
                    p.x,
                    //y
                    p.y];
                }
                prev = p;
                return res;
            };
            var linePoints = points.map(function (p) {
                return curve(p);
            }).reduce(function (a, b) {
                return a.concat(b);
            });
            var closePolyPoints = ["L" + points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
            var fillPoints = linePoints.concat(closePolyPoints);

            var lineStyle = {
                stroke: color || style.stroke || 'slategray',
                strokeWidth: style.strokeWidth || '1',
                strokeLinejoin: style.strokeLinejoin || 'round',
                strokeLinecap: style.strokeLinecap || 'round',
                fill: 'none'
            };
            var fillStyle = {
                stroke: style.stroke || 'none',
                strokeWidth: '0',
                fillOpacity: style.fillOpacity || '.1',
                fill: style.fill || color || 'slategray'
            };

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: "M" + fillPoints.join(' '), style: fillStyle }),
                _react2.default.createElement('path', { d: "M" + linePoints.join(' '), style: lineStyle })
            );
        }
    }]);

    return SparklinesCurve;
}(_react2.default.Component);

SparklinesCurve.propTypes = {
    color: _propTypes2.default.string,
    style: _propTypes2.default.object
};
SparklinesCurve.defaultProps = {
    style: {}
};
exports.default = SparklinesCurve;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesBars = function (_React$Component) {
  _inherits(SparklinesBars, _React$Component);

  function SparklinesBars() {
    _classCallCheck(this, SparklinesBars);

    return _possibleConstructorReturn(this, (SparklinesBars.__proto__ || Object.getPrototypeOf(SparklinesBars)).apply(this, arguments));
  }

  _createClass(SparklinesBars, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          points = _props.points,
          height = _props.height,
          style = _props.style,
          barWidth = _props.barWidth,
          margin = _props.margin,
          onMouseMove = _props.onMouseMove;

      var strokeWidth = 1 * (style && style.strokeWidth || 0);
      var marginWidth = margin ? 2 * margin : 0;
      var width = barWidth || (points && points.length >= 2 ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth) : 0);

      return _react2.default.createElement(
        'g',
        { transform: 'scale(1,-1)' },
        points.map(function (p, i) {
          return _react2.default.createElement('rect', {
            key: i,
            x: p.x - (width + strokeWidth) / 2,
            y: -height,
            width: width,
            height: Math.max(0, height - p.y),
            style: style,
            onMouseMove: onMouseMove && onMouseMove.bind(_this2, p)
          });
        })
      );
    }
  }]);

  return SparklinesBars;
}(_react2.default.Component);

SparklinesBars.propTypes = {
  points: _propTypes2.default.arrayOf(_propTypes2.default.object),
  height: _propTypes2.default.number,
  style: _propTypes2.default.object,
  barWidth: _propTypes2.default.number,
  margin: _propTypes2.default.number,
  onMouseMove: _propTypes2.default.func
};
SparklinesBars.defaultProps = {
  style: { fill: 'slategray' }
};
exports.default = SparklinesBars;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesSpots = function (_React$Component) {
    _inherits(SparklinesSpots, _React$Component);

    function SparklinesSpots() {
        _classCallCheck(this, SparklinesSpots);

        return _possibleConstructorReturn(this, (SparklinesSpots.__proto__ || Object.getPrototypeOf(SparklinesSpots)).apply(this, arguments));
    }

    _createClass(SparklinesSpots, [{
        key: 'lastDirection',
        value: function lastDirection(points) {

            Math.sign = Math.sign || function (x) {
                return x > 0 ? 1 : -1;
            };

            return points.length < 2 ? 0 : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                size = _props.size,
                style = _props.style,
                spotColors = _props.spotColors;


            var startSpot = _react2.default.createElement('circle', {
                cx: points[0].x,
                cy: points[0].y,
                r: size,
                style: style });

            var endSpot = _react2.default.createElement('circle', {
                cx: points[points.length - 1].x,
                cy: points[points.length - 1].y,
                r: size,
                style: style || { fill: spotColors[this.lastDirection(points)] } });

            return _react2.default.createElement(
                'g',
                null,
                style && startSpot,
                endSpot
            );
        }
    }]);

    return SparklinesSpots;
}(_react2.default.Component);

SparklinesSpots.propTypes = {
    size: _propTypes2.default.number,
    style: _propTypes2.default.object,
    spotColors: _propTypes2.default.object
};
SparklinesSpots.defaultProps = {
    size: 2,
    spotColors: {
        '-1': 'red',
        '0': 'black',
        '1': 'green'
    }
};
exports.default = SparklinesSpots;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dataProcessing = __webpack_require__(23);

var dataProcessing = _interopRequireWildcard(_dataProcessing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesReferenceLine = function (_React$Component) {
    _inherits(SparklinesReferenceLine, _React$Component);

    function SparklinesReferenceLine() {
        _classCallCheck(this, SparklinesReferenceLine);

        return _possibleConstructorReturn(this, (SparklinesReferenceLine.__proto__ || Object.getPrototypeOf(SparklinesReferenceLine)).apply(this, arguments));
    }

    _createClass(SparklinesReferenceLine, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                type = _props.type,
                style = _props.style,
                value = _props.value;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var y = type == 'custom' ? value : dataProcessing[type](ypoints);

            return _react2.default.createElement('line', {
                x1: points[0].x, y1: y + margin,
                x2: points[points.length - 1].x, y2: y + margin,
                style: style });
        }
    }]);

    return SparklinesReferenceLine;
}(_react2.default.Component);

SparklinesReferenceLine.propTypes = {
    type: _propTypes2.default.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
    value: _propTypes2.default.number,
    style: _propTypes2.default.object
};
SparklinesReferenceLine.defaultProps = {
    type: 'mean',
    style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
};
exports.default = SparklinesReferenceLine;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variance = exports.stdev = exports.median = exports.midRange = exports.avg = exports.mean = exports.max = exports.min = undefined;

var _min2 = __webpack_require__(7);

var _min3 = _interopRequireDefault(_min2);

var _mean2 = __webpack_require__(3);

var _mean3 = _interopRequireDefault(_mean2);

var _midRange2 = __webpack_require__(24);

var _midRange3 = _interopRequireDefault(_midRange2);

var _median2 = __webpack_require__(25);

var _median3 = _interopRequireDefault(_median2);

var _stdev2 = __webpack_require__(10);

var _stdev3 = _interopRequireDefault(_stdev2);

var _variance2 = __webpack_require__(26);

var _variance3 = _interopRequireDefault(_variance2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.min = _min3.default;
exports.max = _min3.default;
exports.mean = _mean3.default;
exports.avg = _mean3.default;
exports.midRange = _midRange3.default;
exports.median = _median3.default;
exports.stdev = _stdev3.default;
exports.variance = _variance3.default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(7);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(9);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    return (0, _max2.default)(data) - (0, _min2.default)(data) / 2;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.sort(function (a, b) {
        return a - b;
    })[Math.floor(data.length / 2)];
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(3);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sq = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    return (0, _mean2.default)(sq);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _mean = __webpack_require__(3);

var _mean2 = _interopRequireDefault(_mean);

var _stdev = __webpack_require__(10);

var _stdev2 = _interopRequireDefault(_stdev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesNormalBand = function (_React$Component) {
    _inherits(SparklinesNormalBand, _React$Component);

    function SparklinesNormalBand() {
        _classCallCheck(this, SparklinesNormalBand);

        return _possibleConstructorReturn(this, (SparklinesNormalBand.__proto__ || Object.getPrototypeOf(SparklinesNormalBand)).apply(this, arguments));
    }

    _createClass(SparklinesNormalBand, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                style = _props.style;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var dataMean = (0, _mean2.default)(ypoints);
            var dataStdev = (0, _stdev2.default)(ypoints);

            return _react2.default.createElement('rect', { x: points[0].x, y: dataMean - dataStdev + margin,
                width: points[points.length - 1].x - points[0].x, height: _stdev2.default * 2,
                style: style });
        }
    }]);

    return SparklinesNormalBand;
}(_react2.default.Component);

SparklinesNormalBand.propTypes = {
    style: _propTypes2.default.object
};
SparklinesNormalBand.defaultProps = {
    style: { fill: 'red', fillOpacity: .1 }
};
exports.default = SparklinesNormalBand;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(7);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(9);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        limit = _ref.limit,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 1 : _ref$height,
        _ref$margin = _ref.margin,
        margin = _ref$margin === undefined ? 0 : _ref$margin,
        _ref$max = _ref.max,
        max = _ref$max === undefined ? (0, _max2.default)(data) : _ref$max,
        _ref$min = _ref.min,
        min = _ref$min === undefined ? (0, _min2.default)(data) : _ref$min;


    var len = data.length;

    if (limit && limit < len) {
        data = data.slice(len - limit);
    }

    var vfactor = (height - margin * 2) / (max - min || 2);
    var hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

    return data.map(function (d, i) {
        return {
            x: i * hfactor + margin,
            y: (max === min ? 1 : max - d) * vfactor + margin
        };
    });
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sparklines__ = __webpack_require__(2061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sparklines___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Widget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Static_scss__ = __webpack_require__(1853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Static_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Static_scss__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\tables\\static\\Static.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Static = function (_React$Component) {
  _inherits(Static, _React$Component);

  function Static(props) {
    _classCallCheck(this, Static);

    var _this = _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, props));

    _this.state = {
      tableStyles: [{
        id: 1,
        picture: __webpack_require__(1370), // eslint-disable-line global-require
        description: 'Palo Alto',
        info: {
          type: 'JPEG',
          dimensions: '200x150'
        },
        date: new Date('September 14, 2012'),
        size: '45.6 KB',
        progress: {
          percent: 29,
          colorClass: 'success'
        }
      }, {
        id: 2,
        // picture: require('../../../images/tables/2.png'), // eslint-disable-line global-require
        description: 'The Sky',
        info: {
          type: 'PSD',
          dimensions: '2400x1455'
        },
        date: new Date('November 14, 2012'),
        size: '15.3 MB',
        progress: {
          percent: 33,
          colorClass: 'warning'
        }
      }, {
        id: 3,
        // picture: require('../../../images/tables/3.png'), // eslint-disable-line global-require
        description: 'Down the road',
        label: {
          colorClass: 'danger',
          text: 'INFO!'
        },
        info: {
          type: 'JPEG',
          dimensions: '200x150'
        },
        date: new Date('September 14, 2012'),
        size: '49.0 KB',
        progress: {
          percent: 38,
          colorClass: 'inverse'
        }
      }, {
        id: 4,
        // picture: require('../../../images/tables/4.png'), // eslint-disable-line global-require
        description: 'The Edge',
        info: {
          type: 'PNG',
          dimensions: '210x160'
        },
        date: new Date('September 15, 2012'),
        size: '69.1 KB',
        progress: {
          percent: 17,
          colorClass: 'danger'
        }
      }, {
        id: 5,
        // picture: require('../../../images/tables/5.png'), // eslint-disable-line global-require
        description: 'Fortress',
        info: {
          type: 'JPEG',
          dimensions: '1452x1320'
        },
        date: new Date('October 1, 2012'),
        size: '2.3 MB',
        progress: {
          percent: 41,
          colorClass: 'primary'
        }
      }],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false]
    };

    _this.checkAll = _this.checkAll.bind(_this);
    return _this;
  }

  _createClass(Static, [{
    key: 'parseDate',
    value: function parseDate(date) {
      this.dateSet = date.toDateString().split(' ');
      return date.toLocaleString('en-us', { month: 'long' }) + ' ' + this.dateSet[2] + ', ' + this.dateSet[3];
    }
  }, {
    key: 'checkAll',
    value: function checkAll(ev, checkbox) {
      var checkboxArr = new Array(this.state[checkbox].length).fill(ev.target.checked);
      this.setState(_defineProperty({}, checkbox, checkboxArr));
    }
  }, {
    key: 'changeCheck',
    value: function changeCheck(ev, checkbox, id) {
      this.state[checkbox][id] = ev.target.checked;
      if (!ev.target.checked) {
        this.state[checkbox][0] = false;
      }
      this.setState(_defineProperty({}, checkbox, this.state[checkbox]));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__Static_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'breadcrumb-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'breadcrumb-item active', __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            },
            'Tables Basic'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          },
          'Tables - ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'fw-semi-bold', __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            },
            'Static'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 150
                    },
                    __self: this
                  },
                  'Table ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                      },
                      __self: this
                    },
                    'Styles'
                  )
                ), settings: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'thead',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 155
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    { className: 'fs-sm', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 156
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'hidden-sm-down', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 157
                        },
                        __self: this
                      },
                      '#'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 158
                        },
                        __self: this
                      },
                      'Picture'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159
                        },
                        __self: this
                      },
                      'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'hidden-sm-down', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 160
                        },
                        __self: this
                      },
                      'Info'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'hidden-sm-down', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 161
                        },
                        __self: this
                      },
                      'Date'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'hidden-sm-down', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 162
                        },
                        __self: this
                      },
                      'Size'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'hidden-sm-down', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        },
                        __self: this
                      },
                      'Status'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167
                    },
                    __self: this
                  },
                  this.state.tableStyles.map(function (row) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      { key: row.id, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 170
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 171
                          },
                          __self: _this2
                        },
                        row.id
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-rounded', src: row.picture, alt: '', height: '50', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 173
                          },
                          __self: _this2
                        })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 175
                          },
                          __self: _this2
                        },
                        row.description,
                        row.label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 178
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                            { color: row.label.colorClass, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 179
                              },
                              __self: _this2
                            },
                            row.label.text
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 183
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'p',
                          { className: 'mb-0', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 184
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'small',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                              },
                              __self: _this2
                            },
                            'Type:',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'text-muted fw-semi-bold', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 187
                                },
                                __self: _this2
                              },
                              '\xA0 ',
                              row.info.type
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'p',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 190
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'small',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 191
                              },
                              __self: _this2
                            },
                            'Dimensions:',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'text-muted fw-semi-bold', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 193
                                },
                                __self: _this2
                              },
                              '\xA0 ',
                              row.info.dimensions
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-semi-muted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 197
                          },
                          __self: _this2
                        },
                        _this2.parseDate(row.date)
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-semi-muted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 200
                          },
                          __self: _this2
                        },
                        row.size
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'width-150', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 203
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["i" /* Progress */], {
                          color: row.progress.colorClass, value: row.progress.percent,
                          className: 'progress-sm mb-xs',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 204
                          },
                          __self: _this2
                        })
                      )
                    );
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'float-right', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 215
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', className: 'mr-xs', size: 'sm', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 216
                      },
                      __self: this
                    },
                    'Send to...'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["y" /* UncontrolledButtonDropdown */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */],
                      { color: 'inverse', className: 'mr-xs', size: 'sm', caret: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 218
                        },
                        __self: this
                      },
                      'Clear'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 219
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 220
                          },
                          __self: this
                        },
                        'Clear'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 221
                          },
                          __self: this
                        },
                        'Move ...'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 222
                          },
                          __self: this
                        },
                        'Something else here'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 223
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 224
                          },
                          __self: this
                        },
                        'Separated link'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 228
                    },
                    __self: this
                  },
                  'Basic table with styled content'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 234
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 236
                    },
                    __self: this
                  },
                  'Table ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 236
                      },
                      __self: this
                    },
                    'Styles'
                  )
                ), settings: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                  },
                  __self: this
                },
                'Stripped ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 238
                    },
                    __self: this
                  },
                  'Table'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                  },
                  __self: this
                },
                'Each row is highlighted. You will never lost there. Just ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 240
                    },
                    __self: this
                  },
                  '.table-striped'
                ),
                ' it.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                { className: 'table-striped', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'thead',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 242
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 243
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 244
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 245
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox1', type: 'checkbox', checked: this.state.checkboxes1[0],
                          onChange: function onChange(event) {
                            return _this2.checkAll(event, 'checkboxes1');
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 246
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox1', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 250
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 253
                        },
                        __self: this
                      },
                      'First Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 254
                        },
                        __self: this
                      },
                      'Last Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 255
                        },
                        __self: this
                      },
                      'Info'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 258
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 259
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 260
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 261
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox2', type: 'checkbox', checked: this.state.checkboxes1[1],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes1', 1);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 262
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 266
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 269
                        },
                        __self: this
                      },
                      'Mark'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 270
                        },
                        __self: this
                      },
                      'Otto'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 271
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                        { color: 'danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 271
                          },
                          __self: this
                        },
                        'Online'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 273
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 274
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 275
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox3', type: 'checkbox', checked: this.state.checkboxes1[2],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes1', 2);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 276
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 280
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 283
                        },
                        __self: this
                      },
                      'Jacob ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                        { color: 'warning', className: 'text-gray-dark', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 283
                          },
                          __self: this
                        },
                        'ALERT!'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 284
                        },
                        __self: this
                      },
                      'Thornton'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 285
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'badge bg-gray', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 285
                          },
                          __self: this
                        },
                        'Away'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 287
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 288
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 289
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox4', type: 'checkbox', checked: this.state.checkboxes1[3],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes1', 3);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 290
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 294
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 297
                        },
                        __self: this
                      },
                      'Larry'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 298
                        },
                        __self: this
                      },
                      'the Bird'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 299
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                        { color: 'danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 299
                          },
                          __self: this
                        },
                        'Construct'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 303
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 303
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304
                  },
                  __self: this
                },
                'Hover ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 304
                    },
                    __self: this
                  },
                  'Table'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                  },
                  __self: this
                },
                'Trace only what\'s really important. ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 305
                    },
                    __self: this
                  },
                  '.table-hover'
                ),
                ' is made for it.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'table-responsive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                  { className: 'table-hover', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 307
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 308
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 309
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 310
                          },
                          __self: this
                        },
                        '#'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 311
                          },
                          __self: this
                        },
                        'First Name'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 312
                          },
                          __self: this
                        },
                        'Last Name'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 313
                          },
                          __self: this
                        },
                        'Email'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 314
                          },
                          __self: this
                        },
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 318
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 319
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 320
                          },
                          __self: this
                        },
                        '1'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 321
                          },
                          __self: this
                        },
                        'Mark'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 322
                          },
                          __self: this
                        },
                        'Otto'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { href: '#', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 323
                            },
                            __self: this
                          },
                          'ottoto@example.com'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 324
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                          { color: 'gray', className: 'text-gray', pill: true, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 324
                            },
                            __self: this
                          },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 326
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 327
                          },
                          __self: this
                        },
                        '2'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 328
                          },
                          __self: this
                        },
                        'Jacob'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 329
                          },
                          __self: this
                        },
                        'Thornton'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 330
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { href: '#', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 330
                            },
                            __self: this
                          },
                          'fat.thor@example.com'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 331
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                          { color: 'gray', className: 'text-gray-light', pill: true, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 331
                            },
                            __self: this
                          },
                          'Unconfirmed'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 333
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 334
                          },
                          __self: this
                        },
                        '3'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 335
                          },
                          __self: this
                        },
                        'Larry'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 336
                          },
                          __self: this
                        },
                        'the Bird'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 337
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { href: '#', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 337
                            },
                            __self: this
                          },
                          'larry@example.com'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 338
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                          { color: 'gray', className: 'text-gray', pill: true, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 338
                            },
                            __self: this
                          },
                          'New'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 340
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 341
                          },
                          __self: this
                        },
                        '4'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 342
                          },
                          __self: this
                        },
                        'Peter'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 343
                          },
                          __self: this
                        },
                        'Horadnia'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 344
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { href: '#', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 344
                            },
                            __self: this
                          },
                          'peter@example.com'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 345
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Badge */],
                          { color: 'gray', className: 'text-gray-light', pill: true, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 345
                            },
                            __self: this
                          },
                          'Active'
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 353
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 355
                    },
                    __self: this
                  },
                  'Table ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 355
                      },
                      __self: this
                    },
                    'Styles'
                  )
                ), settings: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 354
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 357
                  },
                  __self: this
                },
                'Bordered ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 357
                    },
                    __self: this
                  },
                  'Table'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 358
                  },
                  __self: this
                },
                'Each row is highlighted. You will never lost there. That\'s how all of us learned in school the table should look like. Just add',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 360
                    },
                    __self: this
                  },
                  '.table-bordered'
                ),
                ' to it.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                { className: 'table-bordered table-lg mt-lg mb-0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'thead',
                  { className: 'text-uppercase', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 362
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 363
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 364
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 365
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox10', type: 'checkbox', checked: this.state.checkboxes2[0],
                          onChange: function onChange(event) {
                            return _this2.checkAll(event, 'checkboxes2');
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 366
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox10', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 370
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 373
                        },
                        __self: this
                      },
                      'Product'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 374
                        },
                        __self: this
                      },
                      'Price'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 375
                        },
                        __self: this
                      },
                      'Sales'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 378
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 379
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 380
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 381
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox11', type: 'checkbox', checked: this.state.checkboxes2[1],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes2', 1);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 382
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox11', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 386
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 389
                        },
                        __self: this
                      },
                      'On the Road'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 390
                        },
                        __self: this
                      },
                      '$25 224.2'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 391
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                        { data: [13, 14, 16, 15, 4, 14, 20], style: { width: '35px', height: '20px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 392
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#618fb0' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 393
                          },
                          __self: this
                        })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 397
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 398
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 399
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox12', type: 'checkbox', checked: this.state.checkboxes2[2],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes2', 2);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 400
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox12', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 404
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 407
                        },
                        __self: this
                      },
                      'HP Core i7'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 408
                        },
                        __self: this
                      },
                      '$87 346.1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 409
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                        { data: [14, 12, 16, 11, 17, 19, 16], style: { width: '35px', height: '20px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 410
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#999' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 411
                          },
                          __self: this
                        })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 415
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 416
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 417
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox13', type: 'checkbox', checked: this.state.checkboxes2[3],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes2', 3);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 418
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox13', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 422
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 425
                        },
                        __self: this
                      },
                      'Let\'s Dance'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 426
                        },
                        __self: this
                      },
                      '$57 944.6'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 427
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                        { data: [11, 17, 19, 16, 14, 12, 16], style: { width: '35px', height: '20px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 428
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#f0b518' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 429
                          },
                          __self: this
                        })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 433
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 434
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 435
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox14', type: 'checkbox', checked: this.state.checkboxes2[4],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes2', 4);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 436
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox14', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 440
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 443
                        },
                        __self: this
                      },
                      'Air Pro'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 444
                        },
                        __self: this
                      },
                      '$118 533.1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 445
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                        { data: [13, 14, 20, 16, 15, 4, 14], style: { width: '35px', height: '20px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 446
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#e5603b' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 447
                          },
                          __self: this
                        })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 451
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 452
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'abc-checkbox', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 453
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                          id: 'checkbox15', type: 'checkbox', checked: this.state.checkboxes2[5],
                          onChange: function onChange(event) {
                            return _this2.changeCheck(event, 'checkboxes2', 5);
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 454
                          },
                          __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox15', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 458
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 461
                        },
                        __self: this
                      },
                      'Version Control'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 462
                        },
                        __self: this
                      },
                      '$72 854.5'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { className: 'text-center', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 463
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                        { data: [16, 15, 4, 14, 13, 14, 20], style: { width: '35px', height: '20px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 464
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#618fb0' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 465
                          },
                          __self: this
                        })
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 473
                    },
                    __self: this
                  },
                  'Table ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 473
                      },
                      __self: this
                    },
                    'Styles'
                  )
                ), settings: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 472
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 475
                  },
                  __self: this
                },
                'Overflow ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 475
                    },
                    __self: this
                  },
                  'Table'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 476
                  },
                  __self: this
                },
                'Add any non-bordered .table within a widget for a seamless design. Awesome look for no cost. Just wrap the table with simple css class ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 479
                    },
                    __self: this
                  },
                  '.widget-table-overflow'
                ),
                ' inside of widget'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'widget-table-overflow', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 482
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                  { className: 'table-striped table-lg mt-lg mb-0', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 483
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 484
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 485
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 486
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 487
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox20', type: 'checkbox', checked: this.state.checkboxes3[0],
                            onChange: function onChange(event) {
                              return _this2.checkAll(event, 'checkboxes3');
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 488
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox20', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 492
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 495
                          },
                          __self: this
                        },
                        'Product'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 496
                          },
                          __self: this
                        },
                        'Price'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 497
                          },
                          __self: this
                        },
                        'Sales'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 500
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 501
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 502
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 503
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox21', type: 'checkbox', checked: this.state.checkboxes3[1],
                            onChange: function onChange(event) {
                              return _this2.changeCheck(event, 'checkboxes3', 1);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 504
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox21', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 508
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 511
                          },
                          __self: this
                        },
                        'On the Road'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 512
                          },
                          __self: this
                        },
                        '$25 224.2'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 513
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                          { data: [13, 14, 16, 15, 4, 14, 20], style: { width: '35px', height: '20px' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 514
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#618fb0' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 515
                            },
                            __self: this
                          })
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 519
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 520
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 521
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox22', type: 'checkbox', checked: this.state.checkboxes3[2],
                            onChange: function onChange(event) {
                              return _this2.changeCheck(event, 'checkboxes3', 2);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 522
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox22', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 526
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 529
                          },
                          __self: this
                        },
                        'HP Core i7'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 530
                          },
                          __self: this
                        },
                        '$87 346.1'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 531
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                          { data: [14, 12, 16, 11, 17, 19, 16], style: { width: '35px', height: '20px' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 532
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#999' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 533
                            },
                            __self: this
                          })
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 537
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 538
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 539
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox23', type: 'checkbox', checked: this.state.checkboxes3[3],
                            onChange: function onChange(event) {
                              return _this2.changeCheck(event, 'checkboxes3', 3);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 540
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox23', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 544
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 547
                          },
                          __self: this
                        },
                        'Let\'s Dance'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 548
                          },
                          __self: this
                        },
                        '$57 944.6'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 549
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                          { data: [11, 17, 19, 16, 14, 12, 16], style: { width: '35px', height: '20px' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 550
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#f0b518' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 551
                            },
                            __self: this
                          })
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 555
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 556
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 557
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox24', type: 'checkbox', checked: this.state.checkboxes3[4],
                            onChange: function onChange(event) {
                              return _this2.changeCheck(event, 'checkboxes3', 4);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 558
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox24', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 562
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 565
                          },
                          __self: this
                        },
                        'Air Pro'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 566
                          },
                          __self: this
                        },
                        '$118 533.1'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 567
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                          { data: [13, 14, 20, 16, 15, 4, 14], style: { width: '35px', height: '20px' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 568
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#e5603b' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 569
                            },
                            __self: this
                          })
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 573
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 574
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'abc-checkbox', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 575
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], {
                            id: 'checkbox25', type: 'checkbox', checked: this.state.checkboxes3[5],
                            onChange: function onChange(event) {
                              return _this2.changeCheck(event, 'checkboxes3', 5);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 576
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Label */], { 'for': 'checkbox25', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 580
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 583
                          },
                          __self: this
                        },
                        'Version Control'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 584
                          },
                          __self: this
                        },
                        '$72 854.5'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { className: 'text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 585
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_sparklines__["Sparklines"],
                          { data: [16, 15, 4, 14, 13, 14, 20], style: { width: '35px', height: '20px' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 586
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sparklines__["SparklinesBars"], { style: { stroke: 'white', fill: '#618fb0' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 587
                            },
                            __self: this
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Static;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Static_scss___default.a)(Static));

/***/ })

});
//# sourceMappingURL=24.chunk.js.map