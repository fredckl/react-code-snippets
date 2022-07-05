import React from "react";
import "./styles.css";
import SpecialEditor from "./SpecialEditor";

export default function App() {
  return (
    <div className="App">
      <h1>Code snippets</h1>
      <div style={{ marginBottom: "1rem" }}>
        <b>
          <i>widgets disponibles</i>
        </b>{" "}
        &nbsp;
        <code>[text_1] [text_2] [obj] [image] [lorem]</code>
      </div>
      <div className={"content"}>
        <div className={"w-50"}>
          <SpecialEditor />
        </div>
        <div className={"w-50"}>
          <SpecialEditor />
        </div>
      </div>
      <div className={"content"}>
        <div className={"w-25"}>
          <SpecialEditor />
        </div>
        <div className={"w-50"}>
          <SpecialEditor />
        </div>
        <div className={"w-25"}>
          <SpecialEditor />
        </div>
      </div>
      <div className={"content"}>
        <div className={"w-70"}>
          <SpecialEditor />
        </div>
        <div className={"w-30"}>
          <SpecialEditor />
        </div>
      </div>
    </div>
  );
}
