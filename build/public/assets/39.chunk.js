webpackJsonp([39],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\popovers\\Popovers.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PopoverExamples = function (_Component) {
  _inherits(PopoverExamples, _Component);

  function PopoverExamples() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoverExamples);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoverExamples.__proto__ || Object.getPrototypeOf(PopoverExamples)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltips: [false, false, false, false, false, false],
      popovers: [false, false, false, false, false, false],
      tooltipOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopoverExamples, [{
    key: 'toggle',
    value: function toggle(id, field) {
      var newState = [].concat(_toConsumableArray(this.state[field]));
      newState.fill(false);

      if (!this.state[field][id]) {
        newState[id] = true;
      }

      this.setState(_defineProperty({}, field, newState));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Breadcrumb */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            { active: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            'UI Badge'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          'Badge'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                className: 'mb-xlg',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  'Popover ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                      },
                      __self: this
                    },
                    'Example'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-1', className: 'mr-xs', size: 'lg', color: 'danger',
                  onClick: function onClick() {
                    return _this2.toggle(0, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                },
                'Click to toggle popover'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-2', color: 'danger', disabled: true,
                  onClick: function onClick() {
                    return _this2.toggle(1, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: this
                },
                'Disabled button'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  'Popover ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    'Directions'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-3', className: 'mr-xs mb-xs', color: 'info',
                  onClick: function onClick() {
                    return _this2.toggle(2, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                'Popover on top'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-4', className: 'mr-xs mb-xs', color: 'warning',
                  onClick: function onClick() {
                    return _this2.toggle(3, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  },
                  __self: this
                },
                'Popover on right'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-5', className: 'mr-xs mb-xs', color: 'inverse',
                  onClick: function onClick() {
                    return _this2.toggle(4, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                },
                'Popover on bottom'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                {
                  id: 'p-6', className: 'mr-xs mb-xs', color: 'default',
                  onClick: function onClick() {
                    return _this2.toggle(5, 'popovers');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                },
                'Popover on left'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                className: 'mb-xlg',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    },
                    __self: this
                  },
                  'Tooltip ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    'Example'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-1', className: 'mr-sm', size: 'lg', color: 'success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                },
                'Tooltip'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-2', color: 'success', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  },
                  __self: this
                },
                'Disabled button'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    },
                    __self: this
                  },
                  'Tooltip ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                      },
                      __self: this
                    },
                    'Directions'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-3', className: 'mr-xs mb-xs', color: 'info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                'Tooltip on top'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-4', className: 'mr-xs mb-xs', color: 'warning', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  },
                  __self: this
                },
                'Tooltip on right'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-5', className: 'mr-xs mb-xs', color: 'inverse', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  },
                  __self: this
                },
                'Tooltip on bottom'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { id: 't-6', className: 'mr-xs mb-xs', color: 'default', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  },
                  __self: this
                },
                'Tooltip on left'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'top', isOpen: this.state.popovers[0], target: 'p-1', toggle: function toggle() {
              return _this2.toggle(0, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'top', isOpen: this.state.popovers[1], target: 'p-2', toggle: function toggle() {
              return _this2.toggle(1, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'top', isOpen: this.state.popovers[2], target: 'p-3', toggle: function toggle() {
              return _this2.toggle(2, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'right', isOpen: this.state.popovers[3], target: 'p-4', toggle: function toggle() {
              return _this2.toggle(3, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'bottom', isOpen: this.state.popovers[4], target: 'p-5', toggle: function toggle() {
              return _this2.toggle(4, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Popover */],
          { placement: 'left', isOpen: this.state.popovers[5], target: 'p-6', toggle: function toggle() {
              return _this2.toggle(5, 'popovers');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* PopoverHeader */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            },
            'Popover Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* PopoverBody */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            },
            'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'top', isOpen: this.state.tooltips[0], toggle: function toggle() {
              return _this2.toggle(0, 'tooltips');
            }, target: 't-1', __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          },
          'Hello world!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'top', isOpen: this.state.tooltips[1], toggle: function toggle() {
              return _this2.toggle(1, 'tooltips');
            }, target: 't-2', __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          },
          'Hello world!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'top', isOpen: this.state.tooltips[2], toggle: function toggle() {
              return _this2.toggle(2, 'tooltips');
            }, target: 't-3', __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          },
          'Top'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'right', isOpen: this.state.tooltips[3], toggle: function toggle() {
              return _this2.toggle(3, 'tooltips');
            }, target: 't-4', __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          },
          'Right'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'bottom', isOpen: this.state.tooltips[4], toggle: function toggle() {
              return _this2.toggle(4, 'tooltips');
            }, target: 't-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          },
          'Bottom'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* Tooltip */],
          { placement: 'left', isOpen: this.state.tooltips[5], toggle: function toggle() {
              return _this2.toggle(5, 'tooltips');
            }, target: 't-6', __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          },
          'Left'
        )
      );
    }
  }]);

  return PopoverExamples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PopoverExamples);

/***/ })

});
//# sourceMappingURL=39.chunk.js.map