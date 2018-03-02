webpackHotUpdate(2,{

/***/ "./js/utils/Spinner.jsx":
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

// Styled-Components is not compatible with no j/s implementations
// import styled, { keyframes } from 'styled-components';

// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Image = styled.img`
//   animation: ${spin} 4s infinite linear;
//   background-image: url(/public/img/loading.png);
//   background-repeact: no-repeat;
//   max-width: 250px;
// `;

var Spinner = function Spinner() {
  return _react2.default.createElement("img", { src: "/dist/img/system/loading.gif", alt: "loading indicator" });
};

var _default = Spinner;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx");
  reactHotLoader.register(_default, "default", "/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/isobject/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.es.js":
false,

/***/ "./node_modules/styled-components/node_modules/hoist-non-react-statics/index.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.js":
false

})