"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modale-fullscreen.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModaleFullscreen = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-global-container",
    id: props.idGlobalContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-inner-container",
    id: props.idInnerContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-header",
    id: props.idModaleHeader
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modale-title",
    id: props.idModaleTitle
  }, props.modaleTitle), /*#__PURE__*/_react.default.createElement("span", {
    className: "modale-icon",
    id: props.idModaleIcon,
    onClick: props.eventOnClickIcon
  }, props.modaleIcon ? props.modaleIcon : "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-content",
    id: props.idModaleContent
  }, props.modaleContent)));
};
var _default = ModaleFullscreen;
exports.default = _default;