webpackHotUpdate(2,{

/***/ "./js/components/Navigation.jsx":
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

var Nav = function Nav() {
  return _react2.default.createElement(
    'div',
    { className: 'navigation' },
    _react2.default.createElement(
      'ul',
      { className: 'brand' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { href: '/', to: '/' },
          _react2.default.createElement('img', { src: 'dist/img/system/white-logo-01.png', alt: 'US Netting' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'US Netting'
          )
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'navigation-links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/example' },
          'Another Example'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/example' },
          'Next Example'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/example' },
          'Example'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/example' },
          'Contact'
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'navigation-links mobile-navigation-links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#open' },
          'Menu'
        )
      )
    )
  );
};

var _default = Nav;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Nav, 'Nav', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/Navigation.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/Navigation.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})