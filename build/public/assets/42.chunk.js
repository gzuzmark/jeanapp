webpackJsonp([42],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\modal\\Modal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ModalExample = function (_React$Component) {
  _inherits(ModalExample, _React$Component);

  function ModalExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalExample.__proto__ || Object.getPrototypeOf(ModalExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      demo: false,
      verticallyCentered: false,
      large: false,
      small: false,
      launch: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalExample, [{
    key: 'toggle',
    value: function toggle(id) {
      this.setState(function (prevState) {
        return _defineProperty({}, id, !prevState[id]);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          demo = _state.demo,
          scrollingLong = _state.scrollingLong,
          large = _state.large,
          small = _state.small,
          launch = _state.launch;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Breadcrumb */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* BreadcrumbItem */],
            { active: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            'UI Modal'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          'Modal - ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'fw-semi-bold', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            'Examples'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
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
                      lineNumber: 45
                    },
                    __self: this
                  },
                  'Live ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: this
                    },
                    'Demo'
                  )
                ), close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                'Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { className: 'mr-sm', color: 'primary', onClick: function onClick() {
                    return _this2.toggle('demo');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: this
                },
                'Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { color: 'primary', onClick: function onClick() {
                    return _this2.toggle('scrollingLong');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                'Scrolling long content'
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
                      lineNumber: 56
                    },
                    __self: this
                  },
                  'Optional ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    'Sizes'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                },
                'Modals have two optional sizes, available via modifier .modal-sm and .modal-lg classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { className: 'mr-sm', color: 'primary', onClick: function onClick() {
                    return _this2.toggle('large');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                'Large modal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                { color: 'primary', onClick: function onClick() {
                    return _this2.toggle('small');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                },
                'Small modal'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
            { xs: 12, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
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
                      lineNumber: 71
                    },
                    __self: this
                  },
                  'Using ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    },
                    'Grid'
                  ),
                  ' '
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: this
                },
                'Utilize the Bootstrap grid system within a modal by nesting ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  },
                  '<Container fluid>'
                ),
                ' within the ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  },
                  '<ModalBody>'
                ),
                '. Then, use the normal grid system classes as you would anywhere else.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bg-light p-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
                  { color: 'primary', onClick: function onClick() {
                      return _this2.toggle('launch');
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    },
                    __self: this
                  },
                  'Launch'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  { className: 'bg-light border-0 w-100 h-100', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    },
                    '<Container fluid>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    },
                    '  <Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      },
                      __self: this
                    },
                    '    <Col md={4}>\n'
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
                    '      .col-md-4\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    '    </Col>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      },
                      __self: this
                    },
                    '    <Col md={4} className="ml-auto">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: this
                    },
                    '      .col-md-4 .ml-auto\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      },
                      __self: this
                    },
                    '    </Col>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      },
                      __self: this
                    },
                    '  </Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                      },
                      __self: this
                    },
                    '  <Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      },
                      __self: this
                    },
                    '    <Col md={3} className="ml-auto">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                      },
                      __self: this
                    },
                    '      .col-md-3 .ml-auto\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      },
                      __self: this
                    },
                    '    </Col>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      },
                      __self: this
                    },
                    '    <Col md={4} className="ml-auto">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      },
                      __self: this
                    },
                    '      .col-md-4 .ml-auto\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                      },
                      __self: this
                    },
                    '    </Col>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      },
                      __self: this
                    },
                    '  </Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                      },
                      __self: this
                    },
                    '  <Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                      },
                      __self: this
                    },
                    '    <Col md={6} className="ml-auto">\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      },
                      __self: this
                    },
                    '      .col-md-6 .ml-auto\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-info', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      },
                      __self: this
                    },
                    '    </Col>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-success', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    },
                    '  </Row>\n'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      },
                      __self: this
                    },
                    '</Container>'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* Modal */],
          { isOpen: demo, toggle: function toggle() {
              return _this2.toggle('demo');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* ModalHeader */],
            { toggle: function toggle() {
                return _this2.toggle('demo');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            },
            'Modal title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["K" /* ModalBody */],
            { className: 'bg-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            },
            '...'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* ModalFooter */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'secondary', onClick: function onClick() {
                  return _this2.toggle('demo');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                },
                __self: this
              },
              'Save changes'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* Modal */],
          { isOpen: scrollingLong, toggle: function toggle() {
              return _this2.toggle('scrollingLong');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* ModalHeader */],
            { toggle: function toggle() {
                return _this2.toggle('scrollingLong');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            },
            'Long content'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["K" /* ModalBody */],
            { className: 'bg-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                },
                __self: this
              },
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              },
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 145
                },
                __self: this
              },
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                },
                __self: this
              },
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                },
                __self: this
              },
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* ModalFooter */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'secondary', onClick: function onClick() {
                  return _this2.toggle('scrollingLong');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: this
              },
              'Save changes'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* Modal */],
          { size: 'lg', isOpen: large, toggle: function toggle() {
              return _this2.toggle('large');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* ModalHeader */],
            { toggle: function toggle() {
                return _this2.toggle('large');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 183
              },
              __self: this
            },
            'Large modal'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["K" /* ModalBody */],
            { className: 'bg-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              },
              __self: this
            },
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum? Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* ModalFooter */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'secondary', onClick: function onClick() {
                  return _this2.toggle('large');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 190
                },
                __self: this
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 191
                },
                __self: this
              },
              'Save changes'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* Modal */],
          { size: 'sm', isOpen: small, toggle: function toggle() {
              return _this2.toggle('small');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* ModalHeader */],
            { toggle: function toggle() {
                return _this2.toggle('small');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 196
              },
              __self: this
            },
            'Small modal'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["K" /* ModalBody */],
            { className: 'bg-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              },
              __self: this
            },
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum? Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* ModalFooter */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'secondary', onClick: function onClick() {
                  return _this2.toggle('small');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 203
                },
                __self: this
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                },
                __self: this
              },
              'Save changes'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* Modal */],
          { isOpen: launch, toggle: function toggle() {
              return _this2.toggle('launch');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* ModalHeader */],
            { toggle: function toggle() {
                return _this2.toggle('launch');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: this
            },
            'Small modal'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["K" /* ModalBody */],
            { className: 'bg-white text-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 210
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Container */],
              { fluid: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 211
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
                  { md: 4, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 213
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'h-100 w-100 bg-primary p-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 213
                      },
                      __self: this
                    },
                    '.col-md-4'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
                  { md: 4, className: 'ml-auto', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 214
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'h-100 w-100 bg-primary p-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 214
                      },
                      __self: this
                    },
                    '.col-md-4 .ml-auto'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
                { className: 'mt-sm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
                  { md: 3, className: 'ml-auto', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 217
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'h-100 w-100 bg-primary p-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                      },
                      __self: this
                    },
                    '.col-md-3 .ml-auto'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
                  { md: 4, className: 'ml-auto', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 218
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'h-100 w-100 bg-primary p-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 218
                      },
                      __self: this
                    },
                    '.col-md-4 .ml-auto'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */],
                { className: 'mt-sm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Col */],
                  { md: 6, className: 'ml-auto', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 221
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'h-100 w-100 bg-primary p-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 221
                      },
                      __self: this
                    },
                    '.col-md-6 .ml-auto'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* ModalFooter */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 225
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'secondary', onClick: function onClick() {
                  return _this2.toggle('launch');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 226
                },
                __self: this
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["x" /* Button */],
              { color: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 227
                },
                __self: this
              },
              'Save changes'
            )
          )
        )
      );
    }
  }]);

  return ModalExample;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

});
//# sourceMappingURL=42.chunk.js.map