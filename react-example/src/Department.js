import React from "react";

export function Department(props) {
  return (
    <div
      style={{ border: props.checked ? "4px solid red" : "none" }}
      onClick={props.onClick}
    >
      <input type="checkbox" checked={props.checked} />
      <p style={{ display: "inline-block" }}>{props.name}</p>
    </div>
  );
}
