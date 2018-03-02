webpackHotUpdate(0,{

/***/ "./js/components/catalog/ProductGrid.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make Responsive, Collapse on Mobile sizings

var ProductGrid = function ProductGrid() {
  return _react2.default.createElement(
    "div",
    { className: "product-grid-catalog-container" },
    "EXAMPLE PRODUCT GRID"
  );
};

var _default = ProductGrid;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductGrid, "ProductGrid", "/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/ProductGrid.jsx");
  reactHotLoader.register(_default, "default", "/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/ProductGrid.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./js/components/catalog/Sidebar.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make Responsive, Collapse on Mobile sizings

var Sidebar = function Sidebar() {
  return _react2.default.createElement(
    "div",
    { className: "sidebar-container" },
    "Sidebar!"
  );
};

var _default = Sidebar;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/Sidebar.jsx");
  reactHotLoader.register(_default, "default", "/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/Sidebar.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./js/containers/Catalog.jsx":
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

var _ProductGrid = __webpack_require__("./js/components/catalog/ProductGrid.jsx");

var _ProductGrid2 = _interopRequireDefault(_ProductGrid);

var _Sidebar = __webpack_require__("./js/components/catalog/Sidebar.jsx");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catalog = function (_React$Component) {
  _inherits(Catalog, _React$Component);

  function Catalog(props) {
    _classCallCheck(this, Catalog);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {};
    return _this;
  }

  Catalog.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'catalog-container' },
      _react2.default.createElement(_Sidebar2.default, null),
      _react2.default.createElement(_ProductGrid2.default, null)
    );
  };

  Catalog.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Catalog;
}(_react2.default.Component);

Catalog.defaultProps = {};

Catalog.propTypes = {};

var _default = Catalog;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Catalog, 'Catalog', '/Users/edwardwieczorek/Sites/usn-front-end/js/containers/Catalog.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/containers/Catalog.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})