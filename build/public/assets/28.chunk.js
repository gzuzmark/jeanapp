webpackJsonp([28],{

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.b_dBrgKM-wzMIoGw5lr59 ._1WKh9Fn1pqPj8I33eWg5U1 {\n  max-height: 50px; }\n\n.b_dBrgKM-wzMIoGw5lr59 .N8iPrDKtbuhlicPr25Mio {\n  margin-top: 70px; }\n\n.b_dBrgKM-wzMIoGw5lr59 .widget {\n  padding: 10px 20px; }\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/extra/invoice/Invoice.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG;AACH;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,mBAAmB,EAAE","file":"Invoice.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.root .invoiceLogo {\n  max-height: 50px; }\n\n.root .invoiceBody {\n  margin-top: 70px; }\n\n.root :global .widget {\n  padding: 10px 20px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "b_dBrgKM-wzMIoGw5lr59",
	"invoiceLogo": "_1WKh9Fn1pqPj8I33eWg5U1",
	"invoiceBody": "N8iPrDKtbuhlicPr25Mio"
};

/***/ }),

/***/ 1769:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/invoice-logo.png?cec56bef";

/***/ }),

/***/ 1829:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1683);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Invoice.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./Invoice.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Invoice_scss__ = __webpack_require__(1829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Invoice_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Invoice_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Widget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_invoice_logo_png__ = __webpack_require__(1769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_invoice_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_invoice_logo_png__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\extra\\invoice\\Invoice.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["printInvoice"] }] */








var Stats = function (_React$Component) {
  _inherits(Stats, _React$Component);

  function Stats() {
    _classCallCheck(this, Stats);

    return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
  }

  _createClass(Stats, [{
    key: 'printInvoice',
    value: function printInvoice() {
      window.print();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
          { lg: 11, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
            { className: __WEBPACK_IMPORTED_MODULE_3__Invoice_scss___default.a.root, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
              { xs: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4__components_Widget__["a" /* default */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'widget', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { md: '6', xs: '12', className: 'col-print-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_5__images_invoice_logo_png___default.a, alt: 'Logo', className: __WEBPACK_IMPORTED_MODULE_3__Invoice_scss___default.a.invoiceLogo, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                          },
                          __self: this
                        })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { md: '6', xs: '12', className: 'col-print-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h4',
                          { className: 'text-right', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 36
                            },
                            __self: this
                          },
                          '#',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'fw-semi-bold', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                              },
                              __self: this
                            },
                            '9.45613'
                          ),
                          ' /',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'small',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                              },
                              __self: this
                            },
                            '17 May 2014'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'text-muted fs-larger text-right', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 40
                            },
                            __self: this
                          },
                          'Some Invoice number description or whatever'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: __WEBPACK_IMPORTED_MODULE_3__Invoice_scss___default.a.invoiceBody, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
                      { className: 'mb-lg', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { sm: 6, className: 'col-print-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h5',
                          { className: 'text-muted no-margin', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 49
                            },
                            __self: this
                          },
                          'Company Information'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h3',
                          { className: 'company-name m-t-1', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 50
                            },
                            __self: this
                          },
                          'Wrapbootstrap LLC'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'address',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 53
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                              },
                              __self: this
                            },
                            '2 Infinite Loop'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 54
                            },
                            __self: this
                          }),
                          'Minsk, Belarus 220004',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 55
                            },
                            __self: this
                          }),
                          '088.253.5345',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 56
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work email', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                              },
                              __self: this
                            },
                            'e-mail:'
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: 'mailto:#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                              },
                              __self: this
                            },
                            'email@example.com'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 57
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work Phone', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                              },
                              __self: this
                            },
                            'phone:'
                          ),
                          ' (012) 345-678-901',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 58
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work Fax', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                              },
                              __self: this
                            },
                            'fax:'
                          ),
                          ' (012) 678-132-901'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { sm: 6, className: 'col-print-6 text-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h5',
                          { className: 'text-muted no-margin', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 64
                            },
                            __self: this
                          },
                          'Client Information'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h3',
                          { className: 'client-name m-t-1', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 65
                            },
                            __self: this
                          },
                          'Veronica Niasvizhskaja'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'address',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 68
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                              },
                              __self: this
                            },
                            'Consultant'
                          ),
                          ' at',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                              },
                              __self: this
                            },
                            'Allspana'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 71
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work email', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                              },
                              __self: this
                            },
                            'e-mail:'
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: 'mailto:#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                              },
                              __self: this
                            },
                            'maryna@allspana.by'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 73
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work Phone', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                              },
                              __self: this
                            },
                            'phone:'
                          ),
                          ' (012) 345-678-901',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 74
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'abbr',
                            { title: 'Work Fax', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                              },
                              __self: this
                            },
                            'fax:'
                          ),
                          ' (012) 678-132-901',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'no-margin', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 76
                                },
                                __self: this
                              },
                              'Note:'
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'text-muted', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                              },
                              __self: this
                            },
                            'Some nights I stay up cashing in my bad luck. Some nights I call it a draw'
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["j" /* Table */],
                      { className: 'table-striped', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 83
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'thead',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'tr',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
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
                                lineNumber: 87
                              },
                              __self: this
                            },
                            'Item'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                              },
                              __self: this
                            },
                            'Description'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                              },
                              __self: this
                            },
                            'Quantity'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                              },
                              __self: this
                            },
                            'Price per Unit'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                              },
                              __self: this
                            },
                            'Total'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'tbody',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'tr',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 95
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
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
                                lineNumber: 97
                              },
                              __self: this
                            },
                            'Brand-new 27 monitor'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                              },
                              __self: this
                            },
                            '2,560x1,440-pixel (WQHD) resolution supported!'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                              },
                              __self: this
                            },
                            '2'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                              },
                              __self: this
                            },
                            '700'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                              },
                              __self: this
                            },
                            '1,400.00'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'tr',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104
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
                                lineNumber: 105
                              },
                              __self: this
                            },
                            'Domain: okendoken.com'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                              },
                              __self: this
                            },
                            '6-month registration'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 107
                              },
                              __self: this
                            },
                            '1'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 108
                              },
                              __self: this
                            },
                            '10.99'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 109
                              },
                              __self: this
                            },
                            '21.88'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'tr',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 111
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 112
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
                                lineNumber: 113
                              },
                              __self: this
                            },
                            'Atlas Shrugged'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 114
                              },
                              __self: this
                            },
                            'Novel by Ayn Rand, first published in 1957 in the United States'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 118
                              },
                              __self: this
                            },
                            '5'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 119
                              },
                              __self: this
                            },
                            '35'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                              },
                              __self: this
                            },
                            '175.00'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'tr',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 122
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 123
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
                                lineNumber: 124
                              },
                              __self: this
                            },
                            'New Song by Dr. Pre'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 125
                              },
                              __self: this
                            },
                            'Lyrics: praesent blandit augue non sapien ornare imperdiet'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 128
                              },
                              __self: this
                            },
                            '1'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'td',
                            { className: 'hidden-sm-down d-print-none', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 129
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
                                lineNumber: 130
                              },
                              __self: this
                            },
                            '2.00'
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 135
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { xs: 12, md: 8, className: 'col-print-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'p',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 137
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 138
                              },
                              __self: this
                            },
                            'Note:'
                          ),
                          'Thank you for your business. Keep in mind, sometimes bad things happen. But it\'s just sometimes.'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                        { md: 4, xs: 12, className: 'col-print-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
                          { className: 'text-right justify-content-end', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 144
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */], { xs: 6, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 145
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                            { sm: 3, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 146
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 147
                                },
                                __self: this
                              },
                              'Subtotal'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 148
                                },
                                __self: this
                              },
                              'Tax(10%)'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              { className: 'no-margin', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 149
                                },
                                __self: this
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'strong',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 149
                                  },
                                  __self: this
                                },
                                'Total'
                              )
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                            { sm: 3, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 151
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 152
                                },
                                __self: this
                              },
                              '1,598.88'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 153
                                },
                                __self: this
                              },
                              '159.89'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              { className: 'no-margin', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 154
                                },
                                __self: this
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'strong',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 154
                                  },
                                  __self: this
                                },
                                '1,758.77'
                              )
                            )
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { className: 'text-right mt-lg mb-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159
                        },
                        __self: this
                      },
                      'Marketing Consultant'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { className: 'text-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 162
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'fw-semi-bold', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163
                          },
                          __self: this
                        },
                        'Bob Smith'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Z" /* ButtonToolbar */],
                      { className: 'mt-lg justify-content-end d-print-none', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 165
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        { onClick: this.printInvoice, color: 'inverse', className: 'mr-2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 166
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-print', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 167
                          },
                          __self: this
                        }),
                        '\xA0\xA0 Print'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                        { color: 'danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 171
                          },
                          __self: this
                        },
                        'Proceed with Payment \xA0',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'circle bg-white', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 174
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-arrow-right text-danger', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 175
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

  return Stats;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Invoice_scss___default.a)(Stats));

/***/ })

});
//# sourceMappingURL=28.chunk.js.map