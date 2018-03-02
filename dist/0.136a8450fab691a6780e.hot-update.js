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

__webpack_require__("./js/components/catalog/catalog.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make Responsive, Collapse on Mobile sizings

var ProductGrid = function ProductGrid() {
  return _react2.default.createElement(
    'div',
    { className: 'product-grid-catalog-container' },
    'EXAMPLE PRODUCT GRID',
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _sample2.default.map(function (product) {
        return _react2.default.createElement(
          'div',
          { key: product.id, className: 'product product-card column column-25' },
          _react2.default.createElement(
            'div',
            { className: 'product-inner' },
            _react2.default.createElement(
              'h3',
              null,
              product['Product Title']
            ),
            _react2.default.createElement('img', { src: 'https://www.usnetting.com' + product.imgUrl, alt: product['Product Title'] }),
            _react2.default.createElement(
              'p',
              null,
              'Price: $',
              product.price
            )
          )
        );
      })
    )
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

/***/ }),

/***/ "./js/components/catalog/catalog.styl":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./js/components/catalog/catalog.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept("./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./js/components/catalog/catalog.styl", function() {
		var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./js/components/catalog/catalog.styl");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./js/components/catalog/catalog.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

})