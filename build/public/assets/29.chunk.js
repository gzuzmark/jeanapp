webpackJsonp([29],{

/***/ 1712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports


// module
exports.push([module.i, "/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["D:/FREELANCES/Tesis Jean Claude Esquerra/Code/src/pages/ui-elements/tabs-accordion/TabsAccordion.scss"],"names":[],"mappings":"AAAA;;;GAGG;AACH;;8EAE8E;AAC9E;;GAEG","file":"TabsAccordion.scss","sourcesContent":["/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/*\n * Typography\n * ======================================================================== */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1858:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1712);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./TabsAccordion.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./TabsAccordion.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabsAccordion_scss__ = __webpack_require__(1858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabsAccordion_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TabsAccordion_scss__);
var _jsxFileName = 'D:\\FREELANCES\\Tesis Jean Claude Esquerra\\Code\\src\\pages\\ui-elements\\tabs-accordion\\TabsAccordion.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */







var TabsAccordion = function (_React$Component) {
  _inherits(TabsAccordion, _React$Component);

  function TabsAccordion(props) {
    _classCallCheck(this, TabsAccordion);

    var _this = _possibleConstructorReturn(this, (TabsAccordion.__proto__ || Object.getPrototypeOf(TabsAccordion)).call(this, props));

    _this.toggleFirstTabs = _this.toggleFirstTabs.bind(_this);
    _this.toggleSecondTabs = _this.toggleSecondTabs.bind(_this);
    _this.toggleThirdTabs = _this.toggleThirdTabs.bind(_this);
    _this.toggleAccordionFirst = _this.toggleAccordionFirst.bind(_this);
    _this.state = {
      activeFirstTab: 'tab11',
      activeSecondTab: 'tab22',
      activeThirdTab: 'tab31',
      dropdownOpen: false,
      accordionFirst: [false, false, false],
      accordionSecond: [false, true, false],
      accordionSecondContent: [{
        title: 'Collapsible Group Item', body: ' Get base styles and flexible support for collapsible components like accordions and navigation.\n          Using the collapse plugin, we built a simple accordion by extending the panel component.'
      }, {
        title: 'Normal Text Insertion', body: '\n        Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very\n              controversial point. I think the opposite actually. Everyone knows what is lore ipsum\n              - it is easy to understand if text is lore ipsum. You\'ll automatically skip -\n              because you know - it\'s just non-informative stub. But what if there some text like\n              this one? You start to read it! But the goal of this text is different. The goal is\n              the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!'
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.'
      }],

      accordionFirstContent: [{
        title: 'Collapsible Group Item', body: ' Get base styles and flexible support for collapsible components like accordions and navigation.\n          Using the collapse plugin, we built a simple accordion by extending the panel component.'
      }, {
        title: 'Random from the Web', body: '\n        <p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based\n        on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n        We didn\'t like the darkness of most of admin templates, so we created this light one.\n        We didn\'t like the high contrast of most of admin templates, so we created this unobtrusive one.\n        We searched for a solution of how to make widgets look like real widgets, so we decided that\n        deep background - is what makes widgets look real.\n        </p>\n        <p class="no-margin text-muted"><em>- Some One</em></p>\n'
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.'
      }]
    };
    return _this;
  }

  _createClass(TabsAccordion, [{
    key: 'toggleFirstTabs',
    value: function toggleFirstTabs(tab) {
      if (this.state.activeFirstTab !== tab) {
        this.setState({
          activeFirstTab: tab
        });
      }
    }
  }, {
    key: 'toggleSecondTabs',
    value: function toggleSecondTabs(tab) {
      if (this.state.activeSecondTab !== tab) {
        this.setState({
          activeSecondTab: tab
        });
      }
    }
  }, {
    key: 'toggleThirdTabs',
    value: function toggleThirdTabs(tab) {
      if (this.state.activeThirdTab !== tab) {
        this.setState({
          activeThirdTab: tab
        });
      }
    }
  }, {
    key: 'toggleAccordionFirst',
    value: function toggleAccordionFirst(id) {
      var arr = [];
      arr.length = this.state.accordionFirst.length;
      arr.fill(false);
      arr[id] = !this.state.accordionFirst[id];
      this.setState({
        accordionFirst: arr
      });
    }
  }, {
    key: 'toggleAccordionSecond',
    value: function toggleAccordionSecond(id) {
      var arr = [];
      arr.length = this.state.accordionSecond.length;
      arr.fill(false);
      arr[id] = !this.state.accordionSecond[id];
      this.setState({
        accordionSecond: arr
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__TabsAccordion_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'breadcrumb-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              },
              __self: this
            },
            'YOU ARE HERE'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'breadcrumb-item active', __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            },
            'UI Tabs & Accordion'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'page-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          'Tabs & Accordion - ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              className: 'fw-semi-bold',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            },
            'Components'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: '6', xs: '12', __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'clearfix', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* Nav */],
                { tabs: true, className: 'float-left bg-light', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 138
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                    {
                      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeFirstTab === 'tab11' }),
                      onClick: function onClick() {
                        _this2.toggleFirstTabs('tab11');
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 139
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 143
                        },
                        __self: this
                      },
                      'Basic'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 146
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                    {
                      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeFirstTab === 'tab12' }),
                      onClick: function onClick() {
                        _this2.toggleFirstTabs('tab12');
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 147
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 151
                        },
                        __self: this
                      },
                      'Assumtion'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_1" /* UncontrolledNavDropdown */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 154
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* DropdownToggle */],
                    { nav: true, caret: true,
                      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
                        active: this.state.activeFirstTab === 'tab13' || this.state.activeFirstTab === 'tab14'
                      }), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
                      },
                      __self: this
                    },
                    'Dropdown'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["q" /* DropdownMenu */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                      { onClick: function onClick() {
                          _this2.toggleFirstTabs('tab13');
                        }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        },
                        __self: this
                      },
                      '@fat'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* DropdownItem */],
                      { onClick: function onClick() {
                          _this2.toggleFirstTabs('tab14');
                        }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 167
                        },
                        __self: this
                      },
                      '@mdo'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_2" /* TabContent */],
              { className: 'mb-lg', activeTab: this.state.activeFirstTab, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                { tabId: 'tab11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 179
                    },
                    __self: this
                  },
                  'Tabs-enabled widget'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 180
                    },
                    __self: this
                  },
                  'You will never know exactly how something will go until you try it.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 181
                    },
                    __self: this
                  },
                  'You can think three hundred times and still have no precise result. If you see\n                  attractive girl all you need to do is to go and ask her to give you her phone.\n                  You don\u2019t\n                  need to think about HOW it can turn out. All you have to do is to GO and DO IT.\n                  It\n                  should be super-fast and easy. No hesitation. You ask me: \u201CWhat to do with these\n                  fearful thoughts preventing me from doing that?\u201D The answer is to ignore them,\n                  because\n                  they can\u2019t disappear immediately.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 190
                    },
                    __self: this
                  },
                  'The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it. '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'float-right', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 193
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'inverse', className: 'mr-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 194
                      },
                      __self: this
                    },
                    'Cancel'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                    { color: 'primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                      },
                      __self: this
                    },
                    'Some button'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                { tabId: 'tab12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 201
                    },
                    __self: this
                  },
                  'Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s\n                  very controversial\n                  point. I think the opposite actually. Everyone knows what is lore ipsum - it is\n                  easy to understand if text is lore ipsum.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'clearfix', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 205
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'btn-toolbar', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 206
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { className: 'btn btn-default', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 207
                        },
                        __self: this
                      },
                      '\xA0\xA0Check\xA0\xA0'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { className: 'btn btn-primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 208
                        },
                        __self: this
                      },
                      '\xA0\xA0Dance?\xA0\xA0'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                { tabId: 'tab13', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 214
                    },
                    __self: this
                  },
                  ' If you will think too much it will sink in the swamp of never implemented plans and ideas or will just go away or will be implemented by someone else.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 217
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'strong',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                      },
                      __self: this
                    },
                    '5 months of doing everything to achieve nothing.'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 218
                    },
                    __self: this
                  },
                  'You\'ll automatically skip - because you know - it\'s just non-informative stub.\n                  But what if there some text like this one?'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                { tabId: 'tab14', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'blockquote',
                  { className: 'blockquote-sm blockquote mb-xs', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 223
                    },
                    __self: this
                  },
                  'Plan it? Make it!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 226
                    },
                    __self: this
                  },
                  'The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it.'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: '6', xs: '12', __source: {
                fileName: _jsxFileName,
                lineNumber: 234
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                { xs: '12', className: 'mb-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* Nav */],
                  { className: 'bg-light', tabs: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 237
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 238
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeSecondTab === 'tab21' }),
                        onClick: function onClick() {
                          _this2.toggleSecondTabs('tab21');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 239
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 243
                          },
                          __self: this
                        },
                        'Basic'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 246
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeSecondTab === 'tab22' }),
                        onClick: function onClick() {
                          _this2.toggleSecondTabs('tab22');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 247
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 251
                          },
                          __self: this
                        },
                        'Assumtion'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 254
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeSecondTab === 'tab23' }),
                        onClick: function onClick() {
                          _this2.toggleSecondTabs('tab23');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 255
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 259
                          },
                          __self: this
                        },
                        'Works'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_2" /* TabContent */],
                  { className: 'mb-lg', activeTab: this.state.activeSecondTab, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 264
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab21', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 265
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 266
                        },
                        __self: this
                      },
                      'I had an idea named Great Work. It was a service aimed to help people find their passion. Yes I know it sound crazy and super na\xEFve but I worked on that. I started to work on planning, graphics, presentations, pictures, descriptions, articles, investments and so on. I worked on everything but not the project itself.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab22', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 279
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 280
                        },
                        __self: this
                      },
                      'Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s\n                      very\n                      controversial\n                      point. I think the opposite actually. Everyone knows what is lore ipsum - it\n                      is\n                      easy to understand if text is lore ipsum.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'clearfix', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 286
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'btn-toolbar', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 287
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                          { color: 'danger', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 288
                            },
                            __self: this
                          },
                          '\xA0\xA0Check\xA0\xA0'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                          { color: 'default', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 289
                            },
                            __self: this
                          },
                          '\xA0\xA0Dance?\xA0\xA0'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab23', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 293
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 294
                        },
                        __self: this
                      },
                      ' If you will think too much it will sink in the swamp of never implemented plans and ideas or will just go away or will be implemented by someone else.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 298
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'strong',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 298
                          },
                          __self: this
                        },
                        '5 months of doing everything to achieve nothing.'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 299
                        },
                        __self: this
                      },
                      'You\'ll automatically skip - because you know - it\'s just non-informative\n                      stub.\n                      But what if there some text like this one?'
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
                  lineNumber: 307
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
                { xs: '12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 308
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* Nav */],
                  { className: 'bg-light', tabs: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 309
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 310
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeThirdTab === 'tab31' }),
                        onClick: function onClick() {
                          _this2.toggleThirdTabs('tab31');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 311
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 315
                          },
                          __self: this
                        },
                        'Basic'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 318
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeThirdTab === 'tab32' }),
                        onClick: function onClick() {
                          _this2.toggleThirdTabs('tab32');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 319
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323
                          },
                          __self: this
                        },
                        'Assumtion'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavItem */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 326
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* NavLink */],
                      {
                        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ active: this.state.activeThirdTab === 'tab33' }),
                        onClick: function onClick() {
                          _this2.toggleThirdTabs('tab33');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 327
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 331
                          },
                          __self: this
                        },
                        'Works'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_2" /* TabContent */],
                  { className: 'mb-lg', activeTab: this.state.activeThirdTab, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 336
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab31', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 337
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 338
                        },
                        __self: this
                      },
                      'I had an idea named Great Work. It was a service aimed to help people find their passion. Yes I know it sound crazy and super na\xEFve but I worked on that. I started to work on planning, graphics, presentations, pictures, descriptions, articles, investments and so on. I worked on everything but not the project itself.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab32', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 351
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 352
                        },
                        __self: this
                      },
                      'Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s\n                      very\n                      controversial\n                      point. I think the opposite actually. Everyone knows what is lore ipsum - it\n                      is\n                      easy to understand if text is lore ipsum.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'clearfix', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 358
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'btn-toolbar', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 359
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                          { color: 'danger', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 360
                            },
                            __self: this
                          },
                          '\xA0\xA0Check\xA0\xA0'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["x" /* Button */],
                          { color: 'default', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 361
                            },
                            __self: this
                          },
                          '\xA0\xA0Dance?\xA0\xA0'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["_3" /* TabPane */],
                    { tabId: 'tab33', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 365
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 366
                        },
                        __self: this
                      },
                      ' If you will think too much it will sink in the swamp of never implemented plans and ideas or will just go away or will be implemented by someone else.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 370
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'strong',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 370
                          },
                          __self: this
                        },
                        '5 months of doing everything to achieve nothing.'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 371
                        },
                        __self: this
                      },
                      'You\'ll automatically skip - because you know - it\'s just non-informative\n                      stub.\n                      But what if there some text like this one?'
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Row */],
          { className: 'mt-xs', __source: {
              fileName: _jsxFileName,
              lineNumber: 382
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: '6', xs: '12', className: 'mb-lg', __source: {
                fileName: _jsxFileName,
                lineNumber: 383
              },
              __self: this
            },
            this.state.accordionFirstContent.map(function (element, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card panel mb-xs', key: 'accord-one-' + index.toString(), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 386
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    className: 'card-header panel-header bg-light', role: 'button',
                    onClick: function onClick() {
                      _this2.toggleAccordionFirst(index);
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 388
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-0', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 393
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { className: 'accordion-toggle', role: 'button', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 394
                        },
                        __self: _this2
                      },
                      element.title,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-angle-down ' + (_this2.state.accordionFirst[index] ? 'expanded' : ''), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 396
                        },
                        __self: _this2
                      })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["t" /* Collapse */],
                  { className: 'panel-body', isOpen: _this2.state.accordionFirst[index], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 400
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card-body', dangerouslySetInnerHTML: { __html: element.body }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 401
                    },
                    __self: _this2
                  })
                )
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Col */],
            { md: '6', xs: '12', className: 'mb-lg', __source: {
                fileName: _jsxFileName,
                lineNumber: 406
              },
              __self: this
            },
            this.state.accordionSecondContent.map(function (element, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card panel mb-xs', key: 'accord-one-' + index.toString(), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 407
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    className: 'card-header panel-header bg-light', role: 'button',
                    onClick: function onClick() {
                      _this2.toggleAccordionSecond(index);
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 409
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mb-0', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 414
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { className: 'accordion-toggle', role: 'button', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 415
                        },
                        __self: _this2
                      },
                      element.title,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-angle-down float-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 417
                        },
                        __self: _this2
                      })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_reactstrap__["t" /* Collapse */],
                  { className: 'panel-body', isOpen: _this2.state.accordionSecond[index], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 421
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card-body', dangerouslySetInnerHTML: { __html: element.body }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 422
                    },
                    __self: _this2
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return TabsAccordion;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__TabsAccordion_scss___default.a)(TabsAccordion));

/***/ })

});
//# sourceMappingURL=29.chunk.js.map