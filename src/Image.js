import React from "react";
// https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg
const Image = ({ src }) => {
  return (
    <img
      style={{ width: "100%" }}
      width={300}
      alt={"elephant"}
      src={
        src ||
        "https://media.gettyimages.com/photos/threatening-male-elephant-picture-id527963268?s=2048x2048"
      }
    />
  );
};

export default Image;
