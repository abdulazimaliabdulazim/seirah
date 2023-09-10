import React from "react";
import style from "./ColInput.module.css";

const ColInput = ({
  label,
  plac,
  yse = true,
  hedingInp = true,
  children,
  paraghraph,
}) => {
  return (
    <div className={style.parent}>
      <label>{label}</label>
      <div className={style.detulsInput}>
        {yse && (
          <div className={style.spans}>
            <span>English</span>
            <span>عربي</span>
          </div>
        )}
        {hedingInp && <input type="text" placeholder={plac} />}
        {children}
        <p>{paraghraph}</p>
      </div>
    </div>
  );
};

export default ColInput;
//30
