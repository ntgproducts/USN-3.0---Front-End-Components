webpackHotUpdate(2,{

/***/ "./js/utils/AsyncRoute.jsx":
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

var _Spinner = __webpack_require__("./js/utils/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncRoute = function (_Component) {
  _inherits(AsyncRoute, _Component);

  function AsyncRoute() {
    var _temp, _this, _ret;

    _classCallCheck(this, AsyncRoute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      // only keep things in state that need rerenders
      loaded: false
    }, _this.component = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AsyncRoute.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.props.loadingPromise.then(function (module) {
      _this2.component = module.default;
      setTimeout(function () {
        _this2.setState({ loaded: true });
      }, 4000);
    });
  };

  AsyncRoute.prototype.render = function render() {
    if (this.state.loaded) {
      // we do have a prop called props it looks super weird but thats 
      // what it is
      return _react2.default.createElement(this.component, this.props.props);
    }
    // if the component isn't currently loaded show our spinner
    return _react2.default.createElement(_Spinner2.default, null);
  };

  AsyncRoute.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return AsyncRoute;
}(_react.Component);

var _default = AsyncRoute;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AsyncRoute, 'AsyncRoute', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/AsyncRoute.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/AsyncRoute.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})