webpackHotUpdate(0,{

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
    _react2.default.createElement(
      "header",
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Filter By"
      )
    )
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

/***/ })

})