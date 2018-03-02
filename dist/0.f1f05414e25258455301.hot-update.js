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

var _sample = __webpack_require__("./js/components/catalog/sample.js");

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make Responsive, Collapse on Mobile sizings

var ProductGrid = function ProductGrid() {
  return _react2.default.createElement(
    'div',
    { className: 'product-grid-catalog-container' },
    'EXAMPLE PRODUCT GRID',
    _sample2.default.map(function (product) {
      return _react2.default.createElement(
        'div',
        { className: 'product product-card' },
        _react2.default.createElement(
          'div',
          { className: 'product-inner' },
          _react2.default.createElement(
            'h3',
            null,
            product['Product Title']
          ),
          _react2.default.createElement('img', { src: 'https://static.usnetting.com' + product.imgUrl, alt: product['Product Title'] })
        )
      );
    })
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

  reactHotLoader.register(ProductGrid, 'ProductGrid', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/ProductGrid.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/components/catalog/ProductGrid.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})