import React from "react";

const jsx = {
  type: "div",
  props: {
    style: {
      color: "yellow",
      backgroundColor: "blue"
    }
  },
  children: <p>Wouahou</p>
};
const ObjectStruct = () => {
  return React.createElement(jsx.type, jsx.props, jsx.children);
};

export default ObjectStruct;
