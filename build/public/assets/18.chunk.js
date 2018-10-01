webpackJsonp([18],{

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n._17QhV4DfUtwesbFll7urf4 {\n  width: 80px;\n  height: 80px; }\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/package/SPackage.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG;AACH;EACE,YAAY;EACZ,aAAa,EAAE","file":"SPackage.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.image {\n  width: 80px;\n  height: 80px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"image": "_17QhV4DfUtwesbFll7urf4"
};

/***/ }),

/***/ 1758:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/angular-logo.svg?abfc3b93";

/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/angularjs-logo.svg?4b5c0090";

/***/ }),

/***/ 1770:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/js-logo.svg?dd60b11e";

/***/ }),

/***/ 1776:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/react-logo.svg?9623806f";

/***/ }),

/***/ 1785:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/vue-logo.svg?9a45fc76";

/***/ }),

/***/ 1838:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1692);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./SPackage.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./SPackage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Widget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SPackage_scss__ = __webpack_require__(1838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SPackage_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_react_logo_svg__ = __webpack_require__(1776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_react_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_react_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_angularjs_logo_svg__ = __webpack_require__(1759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_angularjs_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__images_angularjs_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_angular_logo_svg__ = __webpack_require__(1758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_angular_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__images_angular_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_vue_logo_svg__ = __webpack_require__(1785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_vue_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__images_vue_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_js_logo_svg__ = __webpack_require__(1770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_js_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__images_js_logo_svg__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\package\\SPackage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var SPackage = function (_React$Component) {
  _inherits(SPackage, _React$Component);

  function SPackage() {
    _classCallCheck(this, SPackage);

    return _possibleConstructorReturn(this, (SPackage.__proto__ || Object.getPrototypeOf(SPackage)).apply(this, arguments));
  }

  _createClass(SPackage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          'Sing - ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'fw-semi-bold', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            'Package'
          ),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'small',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            'More than 2000 man-hours already invested!'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'You will get access to all those versions listed below after you purchase any Sing licence!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 5, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    },
                    __self: this
                  },
                  'React JS Version'
                ), settings: true, collapse: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: ['rounded pull-left mb-1 mr-3', __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a.image].join(' '), src: __WEBPACK_IMPORTED_MODULE_5__images_react_logo_svg___default.a, width: '80', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                'React JS Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-muted', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                },
                'We spent another ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  '500'
                ),
                ' man-hours developing and designing React version, to save you time and money.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://reactjs.org/', rel: 'nofollow noopener noreferrer', target: '_blank', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  'React'
                ),
                ' is the most trendy and advanced component-based JavaScript library for building user interfaces. Our React version follows latest industry best practices and uses ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: this
                  },
                  'Redux'
                ),
                ' as a state manager and supports ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'Server Side Rendering'
                ),
                ' which makes this app incredibly fast and SEO-friendly.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: this
                },
                'This version is a great choice when you want to be in control of your own codebase and decide on development approaches that are the best for your project.',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://webpack.js.org/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  'Webpack'
                ),
                ' Module Bundler and Yarn as a package manager are under the hood.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'btn btn-transparent btn-lg btn-block disabled', href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                },
                '(You are here)'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 5, md: 6, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  'Angular Version'
                ), settings: true, collapse: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: ['rounded pull-left mb-1 mr-3', __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a.image].join(' '), src: __WEBPACK_IMPORTED_MODULE_6__images_angularjs_logo_svg___default.a, width: '80', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                },
                'Angular 2+ Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-muted', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                },
                'We spent around ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  '500'
                ),
                ' man-hours developing and designing Angular version, to match high engineering requirements.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://angular.io', rel: 'nofollow noopener noreferrer', target: '_blank', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    },
                    __self: this
                  },
                  'Angular'
                ),
                ' is the most mature and wide spread front-end framework created by Google and used by many established enterprises. It is a very good choice when your expect your application to have a well-engineered structure and development workflow. If you are familiar with Java or .NET ecosystems Angular is definitely your choice.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  },
                  __self: this
                },
                'Our app is built on top of latest ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  },
                  'Angular 5.0'
                ),
                ' version and uses ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://webpack.js.org/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    },
                    __self: this
                  },
                  'Webpack'
                ),
                ' Module Bundler and NPM as a package manager, so everything works out of the box! ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  className: 'btn btn-default btn-lg btn-block',
                  href: 'https://demo.flatlogic.com/sing-app/angular/',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                },
                'Go to Demo'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 5, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    },
                    __self: this
                  },
                  'AngularJS 1.X Version'
                ), settings: true, collapse: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: ['rounded pull-left mb-1 mr-3', __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a.image].join(' '), src: __WEBPACK_IMPORTED_MODULE_7__images_angular_logo_svg___default.a, width: '80', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                },
                'AngularJS Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-muted', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                'We don\u2019t know about you but we\u2019re very excited that it\u2019s finally here! Our brand new Light Blue Angular version.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    },
                    __self: this
                  },
                  'Angular 1.0'
                ),
                ' have so many opportunities in comparison to HTML. It lets you extend HTML vocabulary. And as a result your application can be very expressive and readable.',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    },
                    __self: this
                  },
                  'Directives'
                ),
                ' can hide complex DOM structure, CSS. They can let you invent new HTML syntax, specific to your application. We strongly believe that there\u2019s nothing better than arranging an outstanding end-user experience.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://reactjs.org/', rel: 'nofollow noopener noreferrer', target: '_blank', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    },
                    __self: this
                  },
                  'Angular'
                ),
                'should be definitely among your top considerations when choosing the right framework.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: this
                },
                'Angular version makes it possible by letting responsive, fast-loading and seamlessly-navigating application.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  className: 'btn btn-default btn-lg btn-block',
                  href: 'https://demo.flatlogic.com/sing-app/angularjs/',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                },
                'Go to Demo'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 5, md: 6, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    },
                    __self: this
                  },
                  'Pure HTML5 Version'
                ), settings: true, collapse: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: ['rounded pull-left mb-1 mr-3', __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a.image].join(' '), src: __WEBPACK_IMPORTED_MODULE_9__images_js_logo_svg___default.a, width: '80', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  },
                  __self: this
                },
                'HTML5 Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-muted', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  },
                  __self: this
                },
                'During last 4 years we invested more than ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123
                    },
                    __self: this
                  },
                  '1000'
                ),
                ' man-hours crafting and maintaining this version.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                  },
                  __self: this
                },
                'Basic HTML version is the most generic version of Light Blue App that can be used with any platform starting from PHP and Rails to .NET and Java. It contains pure w3c-validated ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 128
                    },
                    __self: this
                  },
                  'HTML5'
                ),
                ' markup and valid ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129
                    },
                    __self: this
                  },
                  'CSS3'
                ),
                ' styles. It can work in two modes: (a) as a ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 130
                    },
                    __self: this
                  },
                  'Single Page Application'
                ),
                ', using ajax to fetch page contents, or (b) as a static application, where pages served directly from server. The mode can be switched by changing the value of \xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 135
                    },
                    __self: this
                  },
                  'window.PJAX_ENABLED'
                ),
                ' global variable.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                  },
                  __self: this
                },
                'Moreover, this version comes with three different color schemes which you can easily switch based on your choice.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  className: 'btn btn-default btn-lg btn-block',
                  href: 'https://demo.flatlogic.com/sing-app/html-bs4/dashboard/index.html',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                },
                'Go to Demo'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { lg: 5, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 149
                    },
                    __self: this
                  },
                  'Vue JS Version'
                ), settings: true, collapse: true, close: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: ['rounded pull-left mb-1 mr-3', __WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a.image].join(' '), src: __WEBPACK_IMPORTED_MODULE_8__images_vue_logo_svg___default.a, width: '80', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  },
                  __self: this
                },
                'VUE JS Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-muted', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                  },
                  __self: this
                },
                'Coming soon version. Seed project is ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 155
                    },
                    __self: this
                  },
                  '50%'
                ),
                ' ready.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://reactjs.org/', rel: 'nofollow noopener noreferrer', target: '_blank', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 156
                    },
                    __self: this
                  },
                  'Vue'
                ),
                ' is a an open-source progressive JavaScript framework for building user interfaces. Vue is designed to be incrementally adoptable meaning that adding new libraries is made incredibly easy.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                  },
                  __self: this
                },
                'Creating Vue JS version is a main priority of ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://flatlogic.com', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 163
                    },
                    __self: this
                  },
                  'Flatlogic'
                ),
                ' for next months, so seed version will ready really soon! ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'btn btn-transparent btn-lg btn-block disabled', href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                  },
                  __self: this
                },
                'Coming Soon!'
              )
            )
          )
        )
      );
    }
  }]);

  return SPackage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__SPackage_scss___default.a)(SPackage));

/***/ })

});
//# sourceMappingURL=18.chunk.js.map