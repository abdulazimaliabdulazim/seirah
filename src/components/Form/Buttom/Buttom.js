import React from "react";
import style from "./Buttom.module.css";

const Buttom = (props) => {
  return (
    <button onClick={props.onClick} className={style.mani}>
      {props.text}
      {props.children}
    </button>
  );
};

export default Buttom;
