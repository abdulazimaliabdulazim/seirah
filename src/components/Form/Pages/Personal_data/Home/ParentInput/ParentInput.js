import React from "react";
import style from "./ParentInput.module.css";
import Spans from "../Spans/Spans";

const ParentInput = ({ label, hedinSpan = true, children, paraghrap }) => {
  return (
    <div className={style.colInput}>
      <label>{label}</label>
      <div className={style.detulsInput}>
        {hedinSpan && <Spans />}
        {children}
        <p>{paraghrap}</p>
      </div>
    </div>
  );
};

export default ParentInput;
