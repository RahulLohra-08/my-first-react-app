import React from "react";

export default function WarningStatus(props) {
  if (!props.text) return;
//   WarningStatus me khuch text hoga to text return karega or nhi hai to waring color aa jaiga
  return <div className={"alert alert-" + props.type}>{props.text}</div>;
}
