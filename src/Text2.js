import React from "react";

const Text2 = ({ style = {} }) => {
  return <p style={{ color: "red", ...style }}>Lorem ipsum 2</p>;
};

export default Text2;
