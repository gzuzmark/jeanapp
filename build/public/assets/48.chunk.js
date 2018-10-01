webpackJsonp([48],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\core\\colors\\Colors.js',
    _this = this;






var tableData = [{
  id: 0,
  state: 'Success',
  usage: ['text-success', 'btn-success']
}, {
  id: 1,
  state: 'Warning',
  usage: ['badge-warning', 'bg-warning']
}, {
  id: 2,
  state: 'Danger',
  usage: ['btn-danger', 'text-danger']
}, {
  id: 3,
  state: 'Info',
  usage: ['alert-info', 'badge-info']
}, {
  id: 4,
  state: 'Primary',
  usage: ['bg-primary', 'text-primary']
}, {
  id: 5,
  state: 'Secondary',
  usage: ['bg-secondary']
}];

var Colors = function Colors() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Breadcrumb */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: _this
        },
        'YOU ARE HERE'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
        { active: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: _this
        },
        'Colors'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'page-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: _this
      },
      'Colors'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
          {
            title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h5',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: _this
              },
              'States ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: _this
                },
                'Colors'
              )
            ),
            close: true, collapse: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: _this
            },
            'Sing comes with a number of state colors that can be applied to the most of elements and components. It reuses Bootstrap\'s original 6 states:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* Table */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    },
                    __self: _this
                  },
                  'STATE'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    },
                    __self: _this
                  },
                  'PREVIEW'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: _this
                  },
                  'CLASS POSTFIX'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    },
                    __self: _this
                  },
                  'USAGE EXAMPLE'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                },
                __self: _this
              },
              tableData.map(function (_ref) {
                var state = _ref.state,
                    usage = _ref.usage,
                    id = _ref.id;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tr',
                  { key: id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'th',
                    { scope: 'row', className: 'fw-thin', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      },
                      __self: _this
                    },
                    state
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: _this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'circle bg-' + state.toLowerCase(), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        },
                        __self: _this
                      },
                      '\xA0'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      },
                      __self: _this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'code',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        },
                        __self: _this
                      },
                      '*-',
                      state.toLowerCase()
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: _this
                    },
                    usage.map(function (item) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'code',
                        { key: item, className: 'mr-xs', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                          },
                          __self: _this
                        },
                        item
                      );
                    })
                  )
                );
              })
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
        { xs: 12, md: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
          {
            title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h5',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                },
                __self: _this
              },
              'Text ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  },
                  __self: _this
                },
                'Colors'
              )
            ),
            close: true, collapse: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: _this
            },
            'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too. Use ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'code',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: _this
              },
              'text-*'
            ),
            ' class to fill text.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'widget-padding-md border rounded w-100 h-100 text-left', __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'text-danger', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                },
                __self: _this
              },
              'h1. Heading'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { className: 'text-warning', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: _this
              },
              'h2. Heading'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { className: 'text-success', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                },
                __self: _this
              },
              'h3. Heading'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              { className: 'text-primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                },
                __self: _this
              },
              'h4. Heading'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h5',
              { className: 'text-info', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                },
                __self: _this
              },
              'h5. Heading'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h6',
              { className: 'text-inverse', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                },
                __self: _this
              },
              'h6. Heading'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
        { xs: 12, md: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
          {
            title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h5',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: _this
              },
              'Example ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: _this
                },
                'Buttons'
              )
            ),
            close: true, collapse: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: _this
            },
            'Use any of the available button classes to quickly create a styled button. Semantically distinguishable beauty.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'default', __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: _this
            },
            'Default'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: _this
            },
            'Primary'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'info', __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: _this
            },
            'Info'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'success', __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: _this
            },
            'Success'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'warning', __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: _this
            },
            'Warning'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'danger', __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: _this
            },
            'Danger'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'gray', __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: _this
            },
            'Gray'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
            { className: 'width-100 mb-xs mr-xs', color: 'inverse', __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: _this
            },
            'Inverse'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

});
//# sourceMappingURL=48.chunk.js.map