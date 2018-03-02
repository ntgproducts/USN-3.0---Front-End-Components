webpackHotUpdate(2,{

/***/ "./js/utils/Spinner.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'], ['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  animation: ', ' 4s infinite linear;\n  background-image: url(/dist/img/system/brandmark.png);\n  background-repeact: no-repeat;\n  max-width: 250px;\n  margin: 0 auto;\n  display: block;\n  \n'], ['\n  animation: ', ' 4s infinite linear;\n  background-image: url(/dist/img/system/brandmark.png);\n  background-repeact: no-repeat;\n  max-width: 250px;\n  margin: 0 auto;\n  display: block;\n  \n']);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// Styled-Components is not compatible with no j/s implementations


var spin = (0, _styledComponents.keyframes)(_templateObject);

var Image = _styledComponents2.default.img(_templateObject2, spin);

var Spinner = function Spinner() {
  return _react2.default.createElement(Image, { src: '/dist/img/system/brandmark.png', alt: 'loading indicator' });
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

  reactHotLoader.register(spin, 'spin', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx');
  reactHotLoader.register(Image, 'Image', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx');
  reactHotLoader.register(Spinner, 'Spinner', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx');
  reactHotLoader.register(_default, 'default', '/Users/edwardwieczorek/Sites/usn-front-end/js/utils/Spinner.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})