webpackHotUpdate(1,{

/***/ "./js/components/SubNavigation.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  TODO: Make responsive for collapse on mobile
var SubNav = function SubNav() {
  return _react2.default.createElement(
    'div',
    { className: 'navigation sub-navigation' },
    _react2.default.createElement(
      'ul',
      { className: 'navigation-links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'fancy-underline fancy-underline-blue', to: '/calculators', href: '/calculators' },
          'Calculator Styles'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'fancy-underline', to: '/example', href: '/example' },
          'Next Example'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { className: 'fancy-underline', href: '/example' },
          'Example'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { className: 'fancy-underline', href: '/example' },
          'Contact'
        )
      )
    )
  );
};

var _default = SubNav;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubNav, 'SubNav', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/SubNavigation.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/SubNavigation.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})