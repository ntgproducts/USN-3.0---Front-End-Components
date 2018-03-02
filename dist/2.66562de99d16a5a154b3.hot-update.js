webpackHotUpdate(2,{

/***/ "./js/containers/App.jsx":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _AsyncRoute = __webpack_require__("./js/utils/AsyncRoute.jsx");

var _AsyncRoute2 = _interopRequireDefault(_AsyncRoute);

var _store = __webpack_require__("./js/store.js");

var _store2 = _interopRequireDefault(_store);

var _Navigation = __webpack_require__("./js/components/Navigation.jsx");

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = function NoMatch(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404: Page not found'
    ),
    _react2.default.createElement(
      'code',
      null,
      'NOMATCH FOUND FOR ',
      location.pathname
    )
  );
};


NoMatch.propTypes = {
  location: _propTypes2.default.string
};
NoMatch.defaultProps = {
  location: 'unknown'

  // We are importing the component in the loadingPromise Prop so we dynamically load the component

};var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(_Navigation2.default, null),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/',
        component: function component(props) {
          return _react2.default.createElement(_AsyncRoute2.default, { props: props, loadingPromise: new Promise(function (resolve) {
              __webpack_require__.e/* require.ensure */(4).then((function (require) {
                resolve(__webpack_require__("./js/pages/Main.jsx"));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            }) });
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/calculators', component: function component(props) {
          return _react2.default.createElement(_AsyncRoute2.default, { props: props, loadingPromise: new Promise(function (resolve) {
              __webpack_require__.e/* require.ensure */(3/* duplicate */).then((function (require) {
                resolve(__webpack_require__("./js/components/Calculators.jsx"));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            }) });
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/catalog', component: function component(props) {
          return _react2.default.createElement(_AsyncRoute2.default, { props: props, loadingPromise: new Promise(function (resolve) {
              __webpack_require__.e/* require.ensure */(3/* duplicate */).then((function (require) {
                resolve(__webpack_require__("./js/components/Calculators.jsx"));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            }) });
        } })
    )
  );
};

var _default = App;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NoMatch, 'NoMatch', '/Users/edwardwieczorek/Sites/usn-front-end/js/containers/App.jsx');
  reactHotLoader.register(App, 'App', '/Users/edwardwieczorek/Sites/usn-front-end/js/containers/App.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/containers/App.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})