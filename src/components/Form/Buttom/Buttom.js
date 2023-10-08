import React from "react";
import style from "./Buttom.module.css";

const Buttom = (props) => {
  return (
    <button
      role={props.role}
      type={props.type}
      onClick={props.onClick}
      className={style.mani}
      style={props.style}>
      {props.text}
      {props.children}
    </button>
  );
};

export default Buttom;
