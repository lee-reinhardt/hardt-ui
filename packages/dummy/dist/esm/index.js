function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';
export var Dummy = () => {
  return /*#__PURE__*/React.createElement("div", null, "dummy 2");
};
export var Button = props => {
  return /*#__PURE__*/React.createElement(ChakraButton, _extends({
    size: "sm",
    colorScheme: "blue"
  }, props));
};

var run = foo => {
  return {
    ok: true,
    name: 'dummy',
    foo
  };
};

export default run;
//# sourceMappingURL=index.js.map