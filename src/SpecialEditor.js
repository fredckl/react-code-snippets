import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";
import useDoubleClick from "./useDoubleClick";

const Text1 = loadable(() => import("./Text1"));
const Text2 = loadable(() => import("./Text2"));
const Image = loadable(() => import("./Image"));
const ObjectStruct = loadable(() => import("./ObjectStruct"));
const Lorem = loadable(() => import("./Lorem"));

const widgets = {
  "[text_1]": Text1,
  "[text_2]": Text2,
  "[image]": Image,
  "[obj]": ObjectStruct,
  "[lorem]": Lorem
};

const SpecialEditor = () => {
  const [Html, setHtml] = useState(null);
  const [htmlProps, setHtmlProps] = useState({});
  const [isDbClick, click] = useDoubleClick();
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (isDbClick) {
      setHtml(null);
      setPreview(false);
      //reset();
    }
  }, [isDbClick]);

  const handleChange = (e) => {
    const textContent = e.currentTarget.textContent.replace(/(\[|\])/g, "");
    const attrs = textContent.split(" ");

    const elm = attrs.shift();
    const html = widgets[`[${elm}]`];
    let props = {};
    attrs.forEach((elm) => {
      const [key, val] = elm.split("=");
      if (key === "style" && val) {
        const styleProps = val.split(";").reduce((acc, val) => {
          const [k, v] = val.split(":");
          return { ...acc, [k]: v };
        }, {});

        props[key] = styleProps;
      } else {
        props[key] = val;
      }
    });

    if (html) {
      setHtmlProps(props);
      setHtml(html);
    }
  };

  const handleBlur = (e) => {
    setPreview(true);
    if (!Html) handleChange(e);
  };

  const isPreview = preview && Html;

  return (
    <>
      {isPreview && (
        <div className={"cursor-pointer"} onClick={click}>
          {Html && <Html {...htmlProps} />}
        </div>
      )}
      <div
        style={{
          border: "solid 1px gray",
          display: isPreview && "none"
        }}
        suppressContentEditableWarning
        contentEditable={true}
        onInput={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default SpecialEditor;
