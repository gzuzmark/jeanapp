webpackJsonp([45],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Widget__ = __webpack_require__(198);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\alerts\\Alerts.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Alerts = function (_Component) {
  _inherits(Alerts, _Component);

  function Alerts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alerts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alerts.__proto__ || Object.getPrototypeOf(Alerts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      alerts: [{
        id: 'al-1',
        type: 'success',
        msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
        visible: [true, true, true]
      }, {
        id: 'al-2',
        type: 'info',
        msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
        visible: [true, true, true]
      }, {
        id: 'al-3',
        type: 'warning',
        msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
        visible: [true, true, true]
      }, {
        id: 'al-4',
        type: 'danger',
        msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
        visible: [true, true, true]
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alerts, [{
    key: 'closeAlert',
    value: function closeAlert(index, alertGroup) {
      var newAlerts = [].concat(_toConsumableArray(this.state.alerts));
      newAlerts[index].visible[alertGroup] = false;

      this.setState({ alerts: newAlerts });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var alerts = this.state.alerts;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["u" /* Breadcrumb */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* BreadcrumbItem */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* BreadcrumbItem */],
            { active: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            'UI Alerts'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          },
          'Alerts'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { xs: 12, md: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
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
                      lineNumber: 58
                    },
                    __self: this
                  },
                  'Alert ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      },
                      __self: this
                    },
                    'Messages'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                },
                'Alerts are available for any length of text, as well as an optional dismiss button.'
              ),
              alerts.map(function (alert, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Alert */],
                  {
                    key: alert.id, isOpen: alert.visible[0], toggle: function toggle() {
                      return _this2.closeAlert(index, 0);
                    },
                    color: alert.type,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { dangerouslySetInnerHTML: { __html: alert.msg }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: _this2
                  })
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { xs: 12, md: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
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
                      lineNumber: 72
                    },
                    __self: this
                  },
                  'Transparent ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    },
                    'Alerts'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: this
                },
                'Transparent  alerts are available by adding ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  },
                  '.alert-transparent'
                ),
                ' class.'
              ),
              alerts.map(function (alert, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Alert */],
                  {
                    className: 'alert-transparent',
                    key: alert.id, isOpen: alert.visible[1], toggle: function toggle() {
                      return _this2.closeAlert(index, 1);
                    },
                    color: alert.type,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { dangerouslySetInnerHTML: { __html: alert.msg }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    },
                    __self: _this2
                  })
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { xs: 12, md: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
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
                      lineNumber: 87
                    },
                    __self: this
                  },
                  'Rounded ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: this
                    },
                    'Alerts'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                },
                'Rounded alerts are available by adding ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'code',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    },
                    __self: this
                  },
                  '.alert-rounded'
                ),
                ' class.'
              ),
              alerts.map(function (alert, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Alert */],
                  {
                    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('alert-rounded', { 'alert-transparent': index % 2 !== 1 }),
                    key: alert.id, isOpen: alert.visible[2], toggle: function toggle() {
                      return _this2.closeAlert(index, 2);
                    },
                    color: alert.type,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { dangerouslySetInnerHTML: { __html: alert.msg }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    },
                    __self: _this2
                  })
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { xs: 12, md: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
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
                      lineNumber: 102
                    },
                    __self: this
                  },
                  'Additional ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    },
                    'Content'
                  )
                ),
                close: true, collapse: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  },
                  __self: this
                },
                'Alerts can also contain additional HTML elements like headings, paragraphs and dividers.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Alert */],
                { color: 'success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'alert-heading', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  },
                  'Well done!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    },
                    __self: this
                  },
                  'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  { className: 'mb-0', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    },
                    __self: this
                  },
                  'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Alert */],
                { color: 'danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'alert-heading', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 119
                    },
                    __self: this
                  },
                  'Well done!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 120
                    },
                    __self: this
                  },
                  'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Alerts;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ })

});
//# sourceMappingURL=45.chunk.js.map