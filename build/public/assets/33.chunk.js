webpackJsonp([33],{

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n._1yEZAGyogbjO78KDikpKVD {\n  padding-top: 5%;\n  background-color: #d6dee5;\n  height: 100%; }\n\n._2T7FIJ7-p_Pz9VsBEW20VO {\n  width: 365px;\n  text-align: center; }\n\n._19TzmFJPSb7_l_GRqFlvnM {\n  padding-left: 35px;\n  padding-right: 35px; }\n\n._1-bTyT7PQaLtyOT02yjnko {\n  margin: 20px;\n  font-size: 80px;\n  font-weight: 400;\n  color: #3c484f; }\n  @media (min-width: 768px) {\n    ._1-bTyT7PQaLtyOT02yjnko {\n      font-size: 180px; } }\n\n._3_Gs7FjB8NUbQjHpkmymtz {\n  font-size: 20px;\n  color: #3c484f; }\n\n._1RPBAR1OQFLNz-gQGZufrg {\n  font-size: 14px; }\n\n._3i2Lv-6mfDDA34I8yjrAln {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  font-size: 0.9rem;\n  color: #798892;\n  text-align: center; }\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/error/ErrorPage.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG;AACH;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,aAAa,EAAE;;AAEjB;EACE,aAAa;EACb,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,eAAe,EAAE;EACjB;IACE;MACE,iBAAiB,EAAE,EAAE;;AAE3B;EACE,gBAAgB;EAChB,eAAe,EAAE;;AAEnB;EACE,gBAAgB,EAAE;;AAEpB;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mBAAmB,EAAE","file":"ErrorPage.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n.errorPage {\n  padding-top: 5%;\n  background-color: #d6dee5;\n  height: 100%; }\n\n.errorContainer {\n  width: 365px;\n  text-align: center; }\n\n.errorBtn {\n  padding-left: 35px;\n  padding-right: 35px; }\n\n.errorCode {\n  margin: 20px;\n  font-size: 80px;\n  font-weight: 400;\n  color: #3c484f; }\n  @media (min-width: 768px) {\n    .errorCode {\n      font-size: 180px; } }\n\n.errorInfo {\n  font-size: 20px;\n  color: #3c484f; }\n\n.errorHelp {\n  font-size: 14px; }\n\n.pageFooter {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  font-size: 0.9rem;\n  color: #798892;\n  text-align: center; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"errorPage": "_1yEZAGyogbjO78KDikpKVD",
	"errorContainer": "_2T7FIJ7-p_Pz9VsBEW20VO",
	"errorBtn": "_19TzmFJPSb7_l_GRqFlvnM",
	"errorCode": "_1-bTyT7PQaLtyOT02yjnko",
	"errorInfo": "_3_Gs7FjB8NUbQjHpkmymtz",
	"errorHelp": "_1RPBAR1OQFLNz-gQGZufrg",
	"pageFooter": "_3i2Lv-6mfDDA34I8yjrAln"
};

/***/ }),

/***/ 1826:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1680);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./ErrorPage.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./ErrorPage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss__ = __webpack_require__(1826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\error\\ErrorPage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ErrorPage = function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorPage, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Container */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorContainer + ' mx-auto', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorCode, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              '404'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorInfo, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              'Opps, it seems that this page does not exist.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: [__WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorHelp, 'mb-3'].join(' '), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'If you are sure it should, search for it.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["V" /* Form */],
              { method: 'get', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* FormGroup */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Input */], { className: 'input-no-border', type: 'text', placeholder: 'Search Pages', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["d" /* Link */],
                { to: 'app/extra/search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                  { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.errorBtn, type: 'submit', color: 'inverse', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  'Search ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-search text-warning ml-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    },
                    __self: this
                  })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'footer',
            { className: __WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a.pageFooter, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            '2017 \xA9 Sing. Admin Dashboard Template.'
          )
        )
      );
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__ErrorPage_scss___default.a)(ErrorPage));

/***/ })

});
//# sourceMappingURL=33.chunk.js.map