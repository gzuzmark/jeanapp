webpackJsonp([40],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\navbar\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NavbarExamples = function (_Component) {
  _inherits(NavbarExamples, _Component);

  function NavbarExamples() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavbarExamples);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarExamples.__proto__ || Object.getPrototypeOf(NavbarExamples)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navs: [false, false, false, false]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavbarExamples, [{
    key: 'toggle',
    value: function toggle(id) {
      var newState = Array(4).fill(false);

      if (!this.state.navs[id]) {
        newState[id] = true;
      }

      this.setState({ navs: newState });
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
            lineNumber: 34
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Breadcrumb */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            { active: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            'UI Navbar'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 9, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
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
                      lineNumber: 42
                    },
                    __self: this
                  },
                  'Navbar ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      },
                      __self: this
                    },
                    'Example'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                'Here\u2019s what you need to know before getting started with the navbar:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ui',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    },
                    __self: this
                  },
                  'Navbars require a wrapping ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      },
                      __self: this
                    },
                    '<Navbar>'
                  ),
                  ' with ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      },
                      __self: this
                    },
                    'expand="*"'
                  ),
                  ' for responsive collapsing and color scheme classes.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  'Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    },
                    __self: this
                  },
                  'Use our spacing and flex utility classes for controlling spacing and alignment within navbars.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    },
                    __self: this
                  },
                  'Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    },
                    __self: this
                  },
                  'Navbars are hidden by default when printing. Force them to be printed by adding ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      },
                      __self: this
                    },
                    '.d-print'
                  ),
                  'to the ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      },
                      __self: this
                    },
                    '.navbar'
                  ),
                  '. See the display utility class.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* Navbar */],
                { className: 'px-2 mt-lg', color: 'light', light: true, expand: 'md', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* NavbarBrand */],
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: this
                  },
                  'Navbar'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* NavbarToggler */], { className: 'ml-auto', onClick: function onClick() {
                    return _this2.toggle(0);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["t" /* Collapse */],
                  { isOpen: this.state.navs[0], navbar: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                    { className: 'ml-auto', navbar: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                          },
                          __self: this
                        },
                        'Home'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 65
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          },
                          __self: this
                        },
                        'Features'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          },
                          __self: this
                        },
                        'Pricing'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        { disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                          },
                          __self: this
                        },
                        'Disabled'
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 9, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
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
                      lineNumber: 81
                    },
                    __self: this
                  },
                  'Navbar ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    },
                    'Example'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  },
                  __self: this
                },
                'Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    },
                    __self: this
                  },
                  'color="light"'
                ),
                'for use with light background colors, or ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    },
                    __self: this
                  },
                  'color="dark"'
                ),
                ' for dark background colors. Then, customize with ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    },
                    __self: this
                  },
                  '.bg-*'
                ),
                ' utilities.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* Navbar */],
                { className: 'px-2 mt-lg', color: 'dark', dark: true, expand: 'md', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* NavbarBrand */],
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    },
                    __self: this
                  },
                  'Navbar'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* NavbarToggler */], { className: 'ml-auto', onClick: function onClick() {
                    return _this2.toggle(1);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["t" /* Collapse */],
                  { isOpen: this.state.navs[1], navbar: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                    { className: 'ml-auto', navbar: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 93
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                          },
                          __self: this
                        },
                        'Home'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                          },
                          __self: this
                        },
                        'Features'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                          },
                          __self: this
                        },
                        'Pricing'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        { disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          },
                          __self: this
                        },
                        'Disabled'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* Navbar */],
                { className: 'px-2 mt-lg', color: 'primary', dark: true, expand: 'md', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* NavbarBrand */],
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109
                    },
                    __self: this
                  },
                  'Navbar'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* NavbarToggler */], { className: 'ml-auto', onClick: function onClick() {
                    return _this2.toggle(2);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["t" /* Collapse */],
                  { isOpen: this.state.navs[2], navbar: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                    { className: 'ml-auto', navbar: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                          },
                          __self: this
                        },
                        'Home'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 117
                          },
                          __self: this
                        },
                        'Features'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 119
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120
                          },
                          __self: this
                        },
                        'Pricing'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 122
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        { disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 123
                          },
                          __self: this
                        },
                        'Disabled'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* Navbar */],
                { className: 'px-2 mt-lg', color: 'light', light: true, expand: 'md', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* NavbarBrand */],
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129
                    },
                    __self: this
                  },
                  'Navbar'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* NavbarToggler */], { className: 'ml-auto', onClick: function onClick() {
                    return _this2.toggle(3);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["t" /* Collapse */],
                  { isOpen: this.state.navs[3], navbar: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 131
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* Nav */],
                    { className: 'ml-auto', navbar: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 133
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 134
                          },
                          __self: this
                        },
                        'Home'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                          },
                          __self: this
                        },
                        'Features'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 139
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 140
                          },
                          __self: this
                        },
                        'Pricing'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* NavItem */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 142
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* NavLink */],
                        { disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                          },
                          __self: this
                        },
                        'Disabled'
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

  return NavbarExamples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavbarExamples);

/***/ })

});
//# sourceMappingURL=40.chunk.js.map