'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-91557a6f.js');
require('./unsupportedIterableToArray-d83f5963.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-058507b6.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-ed0e3293.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-bae30f44.js');
require('./Viewport-37371745.js');
var Layout = require('./Layout.js');

var BAR_PADDING = 2 * constants.GU;

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1bhv6q6-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1bhv6q6-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1bhv6q6-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1bhv6q6-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Bar(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "primary", "secondary"]);

  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullScreen = layoutName === 'small';
  var content = children || /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar:primary"
  }, primary)), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar:secondary"
  }, secondary)));
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv4, _extends$1._extends({}, props, {
    _css: fullScreen ? 0 : constants.BIG_RADIUS,
    _css2: theme.surface,
    _css3: theme.border,
    _css4: fullScreen ? '1px 0' : '1px',
    _css5: 8 * constants.GU,
    _css6: 2 * constants.GU
  }), content));
}

Bar.propTypes = {
  children: index.PropTypes.node,
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node
};
Bar.PADDING = BAR_PADDING;

exports.default = Bar;
//# sourceMappingURL=Bar.js.map
