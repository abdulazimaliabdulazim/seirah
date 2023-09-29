import React from "react";
import style from "./Checkd.module.css";

const Checkd = ({ children, label, forID }) => {
  return (
    <div className={style.parentCheckd}>
      <label htmlFor={forID}>{label}</label>
      <div className={style.checkd}>
        <div className={style.col}>{children}</div>
      </div>
    </div>
  );
};

export default Checkd;
