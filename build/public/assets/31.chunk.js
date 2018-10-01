webpackJsonp([31],{

/***/ 1708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/ui-elements/buttons/Buttons.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG","file":"Buttons.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1854:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1708);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Buttons.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Buttons.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Widget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Buttons_scss__ = __webpack_require__(1854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Buttons_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Buttons_scss__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\buttons\\Buttons.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.toggleOne = _this.toggleOne.bind(_this);
    _this.toggleTwo = _this.toggleTwo.bind(_this);
    _this.toggleThree = _this.toggleThree.bind(_this);
    _this.toggleFour = _this.toggleFour.bind(_this);

    _this.onRadioBtnClickOne = _this.onRadioBtnClickOne.bind(_this);
    _this.onRadioBtnClickTwo = _this.onRadioBtnClickTwo.bind(_this);
    _this.onCheckboxBtnClickOne = _this.onCheckboxBtnClickOne.bind(_this);
    _this.onCheckboxBtnClickTwo = _this.onCheckboxBtnClickTwo.bind(_this);

    _this.state = {
      dropdownOpenOne: false,
      dropdownOpenTwo: false,
      dropdownOpenThree: false,
      dropdownOpenFour: false,
      cSelectedOne: [2],
      cSelectedTwo: [1, 3],
      rSelectedTwo: 2,
      rSelectedOne: null
    };
    return _this;
  }

  _createClass(Buttons, [{
    key: 'onRadioBtnClickOne',
    value: function onRadioBtnClickOne(rSelectedOne) {
      this.setState({ rSelectedOne: rSelectedOne });
    }
  }, {
    key: 'onRadioBtnClickTwo',
    value: function onRadioBtnClickTwo(rSelectedTwo) {
      this.setState({ rSelectedTwo: rSelectedTwo });
    }
  }, {
    key: 'onCheckboxBtnClickOne',
    value: function onCheckboxBtnClickOne(selected) {
      var index = this.state.cSelectedOne.indexOf(selected);
      if (index < 0) {
        this.state.cSelectedOne.push(selected);
      } else {
        this.state.cSelectedOne.splice(index, 1);
      }
      this.setState({ cSelectedOne: [].concat(_toConsumableArray(this.state.cSelectedOne)) });
    }
  }, {
    key: 'onCheckboxBtnClickTwo',
    value: function onCheckboxBtnClickTwo(selected) {
      var index = this.state.cSelectedTwo.indexOf(selected);
      if (index < 0) {
        this.state.cSelectedTwo.push(selected);
      } else {
        this.state.cSelectedTwo.splice(index, 1);
      }
      this.setState({ cSelectedTwo: [].concat(_toConsumableArray(this.state.cSelectedTwo)) });
    }
  }, {
    key: 'toggleOne',
    value: function toggleOne() {
      this.setState({
        dropdownOpenOne: !this.state.dropdownOpenOne
      });
    }
  }, {
    key: 'toggleTwo',
    value: function toggleTwo() {
      this.setState({
        dropdownOpenTwo: !this.state.dropdownOpenTwo
      });
    }
  }, {
    key: 'toggleThree',
    value: function toggleThree() {
      this.setState({
        dropdownOpenThree: !this.state.dropdownOpenThree
      });
    }
  }, {
    key: 'toggleFour',
    value: function toggleFour() {
      this.setState({
        dropdownOpenFour: !this.state.dropdownOpenFour
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__Buttons_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'breadcrumb-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'active breadcrumb-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            },
            'UI Buttons'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          },
          'Buttons - ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'fw-semi-bold', __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            },
            'Styles '
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    },
                    __self: this
                  },
                  ' Color ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      },
                      __self: this
                    },
                    'Options'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    },
                    __self: this
                  },
                  'Use any of the available button classes to quickly create a styled button. Semantically distinguishable beauty.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'text-left', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      },
                      __self: this
                    },
                    'Default'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'primary', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      },
                      __self: this
                    },
                    'Primary'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'info', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      },
                      __self: this
                    },
                    'Info'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'success', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                      },
                      __self: this
                    },
                    'Success'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'warning', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                      },
                      __self: this
                    },
                    'Warning'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'danger', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127
                      },
                      __self: this
                    },
                    'Danger'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'gray', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                      },
                      __self: this
                    },
                    'Gray'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'inverse', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129
                      },
                      __self: this
                    },
                    'Inverse'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 138
                    },
                    __self: this
                  },
                  ' Size ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 138
                      },
                      __self: this
                    },
                    'Variants'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142
                    },
                    __self: this
                  },
                  'Fancy larger or smaller buttons? Four separate sizes available for all use cases: from tiny 10px button to large one.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 147
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', size: 'lg', className: 'mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 148
                      },
                      __self: this
                    },
                    'Large button'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'primary', className: 'mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                      },
                      __self: this
                    },
                    'Default button'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'info', size: 'sm', className: 'mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                      },
                      __self: this
                    },
                    'Small button'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'success', size: 'xs', className: 'mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                      },
                      __self: this
                    },
                    'Tiny button'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 159
                    },
                    __self: this
                  },
                  'Outline ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159
                      },
                      __self: this
                    },
                    'Buttons'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 163
                    },
                    __self: this
                  },
                  'In need of a button, but not the hefty background colors they bring? Use ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      },
                      __self: this
                    },
                    'outline'
                  ),
                  ' property to remove all background images and colors on any button.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 168
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'default', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 169
                      },
                      __self: this
                    },
                    'Default'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'primary', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 170
                      },
                      __self: this
                    },
                    'Primary'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'info', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                      },
                      __self: this
                    },
                    'Info'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'success', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      },
                      __self: this
                    },
                    'Success'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'warning', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                      },
                      __self: this
                    },
                    'Warning'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'danger', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                      },
                      __self: this
                    },
                    'Danger'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'gray', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                      },
                      __self: this
                    },
                    'Gray'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'inverse', className: 'width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                      },
                      __self: this
                    },
                    'Inverse'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 184
                    },
                    __self: this
                  },
                  'Rounded ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                      },
                      __self: this
                    },
                    'Buttons'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 183
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 188
                    },
                    __self: this
                  },
                  'Use any of the available button properties to quickly create a styled button. Semantically distinguishable beauty. Use ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                      },
                      __self: this
                    },
                    '.btn-rounded'
                  ),
                  ' or ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                      },
                      __self: this
                    },
                    '.btn-rounded-f'
                  ),
                  '.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 192
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', className: 'btn-rounded-f width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 193
                      },
                      __self: this
                    },
                    'Default'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'primary', className: 'btn-rounded-f width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 194
                      },
                      __self: this
                    },
                    'Primary'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'info', className: 'btn-rounded-f width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                      },
                      __self: this
                    },
                    'Info'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'success', className: 'btn-rounded-f width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                      },
                      __self: this
                    },
                    'Success'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'warning', className: 'btn-rounded width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 197
                      },
                      __self: this
                    },
                    'Warning'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'danger', className: 'btn-rounded width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 198
                      },
                      __self: this
                    },
                    'Danger'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'gray', className: 'btn-rounded width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                      },
                      __self: this
                    },
                    'Gray'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { outline: true, color: 'inverse', className: 'btn-rounded width-100 mb-xs mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                      },
                      __self: this
                    },
                    'Inverse'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 207
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 209
                    },
                    __self: this
                  },
                  ' Block ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 209
                      },
                      __self: this
                    },
                    'Buttons'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 208
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 213
                    },
                    __self: this
                  },
                  'Create block level buttons - those that span the full width of a parent\u2014 by adding ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 215
                      },
                      __self: this
                    },
                    'block'
                  ),
                  'to ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 216
                      },
                      __self: this
                    },
                    '<Button>'
                  ),
                  ' component. Great for menu & social buttons.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                  { color: 'info', block: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 219
                    },
                    __self: this
                  },
                  'Block Button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                  { color: 'default', block: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    },
                    __self: this
                  },
                  'Show Menu \xA0\xA0\xA0',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                    className: 'fa fa-bars',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                  { color: 'primary', block: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 223
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 223
                    },
                    __self: this
                  }),
                  '\xA0\xA0Login mit Facebook'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                  { color: 'warning', block: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 225
                    },
                    __self: this
                  },
                  'Are you sure?'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 231
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 233
                    },
                    __self: this
                  },
                  ' Disabled ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 233
                      },
                      __self: this
                    },
                    'Buttons'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 232
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 237
                    },
                    __self: this
                  },
                  'Make buttons look unclickable by fading them back 50%. Add the ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 239
                      },
                      __self: this
                    },
                    'disabled'
                  ),
                  ' to ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 239
                      },
                      __self: this
                    },
                    '<Button>'
                  ),
                  ' component.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 241
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'primary', disabled: true, className: 'mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 242
                      },
                      __self: this
                    },
                    'Primary button'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', disabled: true, className: 'mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 243
                      },
                      __self: this
                    },
                    'Button'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 245
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'success', size: 'sm', disabled: true, className: 'mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 246
                      },
                      __self: this
                    },
                    'Primary Link'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', size: 'sm', disabled: true, className: 'mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 247
                      },
                      __self: this
                    },
                    'Link'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 256
                    },
                    __self: this
                  },
                  ' Button ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 256
                      },
                      __self: this
                    },
                    'Groups'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 255
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 260
                    },
                    __self: this
                  },
                  'Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with Bootstrap buttons plugin.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                  { className: 'mb-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 266
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 267
                      },
                      __self: this
                    },
                    'Left'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 268
                      },
                      __self: this
                    },
                    'Middle'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'default', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 269
                      },
                      __self: this
                    },
                    'Right'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Z" /* ButtonToolbar */],
                  { className: 'mb-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 272
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                    { className: 'mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 273
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 274
                        },
                        __self: this
                      },
                      '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 275
                        },
                        __self: this
                      },
                      '2'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 276
                        },
                        __self: this
                      },
                      '3'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 277
                        },
                        __self: this
                      },
                      '4'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                    { className: 'mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 279
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 280
                        },
                        __self: this
                      },
                      '5'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 281
                        },
                        __self: this
                      },
                      '6'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 282
                        },
                        __self: this
                      },
                      '7'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                    { className: 'mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 284
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 285
                        },
                        __self: this
                      },
                      '8'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 6, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 297
                    },
                    __self: this
                  },
                  ' Button ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 297
                      },
                      __self: this
                    },
                    'Dropdowns'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 296
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 300
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'fs-mini text-muted', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 301
                    },
                    __self: this
                  },
                  'Add dropdown menus to nearly anything with this simple plugin, including the buttons, navbar, tabs, and pills. Both solid & segmented dropdown options available.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'mb-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 308
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["T" /* ButtonDropdown */],
                    {
                      isOpen: this.state.dropdownOpenOne, toggle: this.toggleOne,
                      className: 'mr-xs',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 309
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */],
                      { caret: true, color: 'danger', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 313
                        },
                        __self: this
                      },
                      '\xA0 One \xA0'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 316
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 317
                          },
                          __self: this
                        },
                        'Action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 318
                          },
                          __self: this
                        },
                        'Another action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 319
                          },
                          __self: this
                        },
                        'Something else here'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 320
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 321
                          },
                          __self: this
                        },
                        'Separated link'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["T" /* ButtonDropdown */],
                    { isOpen: this.state.dropdownOpenTwo, toggle: this.toggleTwo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 325
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */],
                      { size: 'sm', caret: true, color: 'gray', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 326
                        },
                        __self: this
                      },
                      '\xA0 One \xA0'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 329
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 330
                          },
                          __self: this
                        },
                        'Action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 331
                          },
                          __self: this
                        },
                        'Another action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 332
                          },
                          __self: this
                        },
                        'Something else here'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 333
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 334
                          },
                          __self: this
                        },
                        'Separated link'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'mb-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 338
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["T" /* ButtonDropdown */],
                    {
                      isOpen: this.state.dropdownOpenThree, toggle: this.toggleThree,
                      className: 'mr-xs',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 339
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { id: 'dropdownThree', color: 'primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 343
                        },
                        __self: this
                      },
                      'Primary'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */], { color: 'primary', caret: true, className: 'dropdown-toggle-split', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 344
                      },
                      __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 345
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 346
                          },
                          __self: this
                        },
                        'Action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 347
                          },
                          __self: this
                        },
                        'Another action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 348
                          },
                          __self: this
                        },
                        'Something else here'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 349
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 350
                          },
                          __self: this
                        },
                        'Separated link'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["T" /* ButtonDropdown */],
                    { isOpen: this.state.dropdownOpenFour, toggle: this.toggleFour, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 353
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { size: 'sm', id: 'dropdownFour', color: 'gray', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 354
                        },
                        __self: this
                      },
                      'Gray'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */], { size: 'sm', caret: true, color: 'gray', className: 'dropdown-toggle-split', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 355
                      },
                      __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 356
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 357
                          },
                          __self: this
                        },
                        'Action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 358
                          },
                          __self: this
                        },
                        'Another action'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 359
                          },
                          __self: this
                        },
                        'Something else here'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 360
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 361
                          },
                          __self: this
                        },
                        'Separated link'
                      )
                    )
                  )
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
              lineNumber: 370
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: 12, sm: 12, xs: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 371
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
                      lineNumber: 373
                    },
                    __self: this
                  },
                  ' Button ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 373
                      },
                      __self: this
                    },
                    'Options'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 372
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 376
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                  { md: 4, sm: 6, xs: 12, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 378
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 379
                      },
                      __self: this
                    },
                    ' Button ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'fw-semi-bold', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 379
                        },
                        __self: this
                      },
                      'Checkboxes'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'fs-mini text-muted', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 380
                      },
                      __self: this
                    },
                    'Do more with buttons. Control button states or create groups of buttons for more components like toolbars. Use ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'code',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 384
                        },
                        __self: this
                      },
                      'ButtonGroup'
                    ),
                    ' to a group of checkboxes for checkbox style toggling on btn-group.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 388
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 389
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickOne(1);
                          },
                          active: this.state.cSelectedOne.includes(1),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 390
                          },
                          __self: this
                        },
                        'Left way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickOne(2);
                          },
                          active: this.state.cSelectedOne.includes(2),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 394
                          },
                          __self: this
                        },
                        'Middle way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickOne(3);
                          },
                          active: this.state.cSelectedOne.includes(3),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 398
                          },
                          __self: this
                        },
                        'Right way'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 404
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 405
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickTwo(1);
                          },
                          active: this.state.cSelectedTwo.includes(1),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 406
                          },
                          __self: this
                        },
                        'Left way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickTwo(2);
                          },
                          active: this.state.cSelectedTwo.includes(2),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 410
                          },
                          __self: this
                        },
                        'Middle way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onCheckboxBtnClickTwo(3);
                          },
                          active: this.state.cSelectedTwo.includes(3),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 414
                          },
                          __self: this
                        },
                        'Right way'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                  { md: 4, sm: 12, xs: 12, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 424
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 425
                      },
                      __self: this
                    },
                    ' Button ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'fw-semi-bold', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 425
                        },
                        __self: this
                      },
                      'Radios'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'fs-mini text-muted', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 426
                      },
                      __self: this
                    },
                    'Do more with buttons. Control button states or create groups of buttons for more components like toolbars. Use ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'code',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 429
                        },
                        __self: this
                      },
                      'ButtonGroup'
                    ),
                    ' to a group of radio inputs for radio style toggling on btn-group.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 432
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 433
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickOne(1);
                          },
                          active: this.state.rSelectedOne === 1,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 434
                          },
                          __self: this
                        },
                        'Left way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickOne(2);
                          },
                          active: this.state.rSelectedOne === 2,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 438
                          },
                          __self: this
                        },
                        'Middle way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickOne(3);
                          },
                          active: this.state.rSelectedOne === 3,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 442
                          },
                          __self: this
                        },
                        'Right way'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 448
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["z" /* ButtonGroup */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 449
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickTwo(1);
                          },
                          active: this.state.rSelectedTwo === 1,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 450
                          },
                          __self: this
                        },
                        'Left way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickTwo(2);
                          },
                          active: this.state.rSelectedTwo === 2,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 454
                          },
                          __self: this
                        },
                        'Middle way'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        {
                          size: 'sm', color: 'default', onClick: function onClick() {
                            return _this2.onRadioBtnClickTwo(3);
                          },
                          active: this.state.rSelectedTwo === 3,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 458
                          },
                          __self: this
                        },
                        'Right way'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                  { md: 4, sm: 12, xs: 12, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 467
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 468
                      },
                      __self: this
                    },
                    ' Use with ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'fw-semi-bold', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 468
                        },
                        __self: this
                      },
                      'Icons'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'fs-mini text-muted', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 469
                      },
                      __self: this
                    },
                    'Fontawesome and Glyph- icons may be used in buttons, button groups for a toolbar, navigation, or prepended form inputs. Let your buttons shine!'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'text-center mb-sm', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 474
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 475
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon glyphicon-tree-conifer text-success mr-xs mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 476
                        },
                        __self: this
                      }),
                      'Forest'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 479
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-check text-danger mr-xs mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 480
                        },
                        __self: this
                      }),
                      'Submit'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'default', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 483
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook text-primary mr-xs mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 484
                        },
                        __self: this
                      }),
                      'Login'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 488
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'inverse', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 489
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-exclamation text-warning mr-xs mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 490
                        },
                        __self: this
                      }),
                      'Error'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'inverse', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 493
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon glyphicon-globe text-info mr-xs mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 494
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'text-info', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 495
                          },
                          __self: this
                        },
                        'Globe'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                      { color: 'inverse', className: 'width-100 mr-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 497
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'circle bg-white mr-xs', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 498
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-marker text-gray', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 499
                          },
                          __self: this
                        })
                      ),
                      'Map'
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

  return Buttons;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Buttons_scss___default.a)(Buttons));

/***/ })

});
//# sourceMappingURL=31.chunk.js.map