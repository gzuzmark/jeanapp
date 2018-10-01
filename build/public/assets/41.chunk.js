webpackJsonp([41],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\nav\\Nav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NavExamples = function (_Component) {
  _inherits(NavExamples, _Component);

  function NavExamples() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavExamples);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavExamples.__proto__ || Object.getPrototypeOf(NavExamples)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDropdownOpened: false
    }, _this.toggleDropdown = function () {
      _this.setState(function (prevState) {
        return {
          isDropdownOpened: !prevState.isDropdownOpened
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavExamples, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Breadcrumb */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            { active: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            'UI Nav'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  'Base ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      },
                      __self: this
                    },
                    'Nav'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                'Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bg-light p-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 53
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56
                        },
                        __self: this
                      },
                      'Another Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { disabled: true, href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59
                        },
                        __self: this
                      },
                      'Disabled Link'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  { className: 'bg-light border-0 w-100 h-100', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: this
                    },
                    '<Nav>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      },
                      __self: this
                    },
                    '      Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    },
                    '      Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      },
                      __self: this
                    },
                    '      Another Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      },
                      __self: this
                    },
                    '    <NavLink disabled href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      },
                      __self: this
                    },
                    '      Disabled Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: this
                    },
                    '</Nav>'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h5',
                { className: 'mt', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                },
                'With dropdown'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                { className: 'bg-light p-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                    { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      },
                      __self: this
                    },
                    'Link'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["w" /* Dropdown */],
                  { isOpen: this.state.isDropdownOpened, toggle: this.toggleDropdown, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["p" /* DropdownToggle */],
                    { nav: true, caret: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                      },
                      __self: this
                    },
                    'Dropdown'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["q" /* DropdownMenu */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* DropdownItem */],
                      { header: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 100
                        },
                        __self: this
                      },
                      'Header'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* DropdownItem */],
                      { disabled: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        },
                        __self: this
                      },
                      'Action'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* DropdownItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        },
                        __self: this
                      },
                      'Another Action'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* DropdownItem */], { divider: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      },
                      __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* DropdownItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 104
                        },
                        __self: this
                      },
                      'Another Action'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                    { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      },
                      __self: this
                    },
                    'Another Link'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                    { disabled: true, href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      },
                      __self: this
                    },
                    'Disabled Link'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    },
                    __self: this
                  },
                  'Tabs & Pills'
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  },
                  __self: this
                },
                'Takes the basic ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    },
                    __self: this
                  },
                  '<Nav>'
                ),
                ' from above and adds the ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    },
                    __self: this
                  },
                  'tabs'
                ),
                ' property to generate a tabbed interface. Use them to create tabbable regions with our tab JavaScript plugin.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bg-light p-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                  { tabs: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', active: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 129
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 132
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 135
                        },
                        __self: this
                      },
                      'Another Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { disabled: true, href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 138
                        },
                        __self: this
                      },
                      'Disabled Link'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  { className: 'bg-light border-0 w-100 h-100', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142
                      },
                      __self: this
                    },
                    '<Nav tabs>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 143
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 144
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145
                      },
                      __self: this
                    },
                    '      Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 147
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                      },
                      __self: this
                    },
                    '      Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 152
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 153
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 156
                      },
                      __self: this
                    },
                    '    <NavLink href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 157
                      },
                      __self: this
                    },
                    '      Another Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      },
                      __self: this
                    },
                    '  <NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                      },
                      __self: this
                    },
                    '    <NavLink disabled href="#">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163
                      },
                      __self: this
                    },
                    '      Disabled Link\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-warning', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      },
                      __self: this
                    },
                    '    </NavLink>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      },
                      __self: this
                    },
                    '  </NavItem>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                      },
                      __self: this
                    },
                    '</Nav>'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'mt', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  },
                  __self: this
                },
                'Do the same thing with the ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 169
                    },
                    __self: this
                  },
                  'pills'
                ),
                ' property.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bg-light p-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                  { pills: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', active: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 173
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176
                        },
                        __self: this
                      },
                      'Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 179
                        },
                        __self: this
                      },
                      'Another Link'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 181
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                      { disabled: true, href: '#', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 182
                        },
                        __self: this
                      },
                      'Disabled Link'
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

  return NavExamples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavExamples);

/***/ })

});
//# sourceMappingURL=41.chunk.js.map