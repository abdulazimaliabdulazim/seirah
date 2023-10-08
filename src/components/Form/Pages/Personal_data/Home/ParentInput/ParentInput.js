import React from "react";
import style from "./ParentInput.module.css";
import Spans from "../Spans/Spans";

const ParentInput = ({
  label,
  hedinSpan = true,
  children,
  paraghrap,
  forId,
}) => {
  return (
    <div className={style.colInput}>
      <label htmlFor={forId}>{label}</label>
      <div className={style.detulsInput}>
        {hedinSpan && <Spans className={style.spans} />}
        {children}
        <p>{paraghrap}</p>
      </div>
    </div>
  );
};

export default ParentInput;
