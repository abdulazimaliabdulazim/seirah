import React from "react";
import style from "../style.module.css";

const Progress = ({ progress }) => {
  const checkd = `${
    progress >= 100 ? "100" : progress !== "" ? progress : "0"
  }%`;
  return (
    <div className={style.line}>
      <div className={style.havi}>
        <div
          style={{
            width: checkd,
          }}
          className={style.infuk}>
          {checkd}
        </div>
      </div>
    </div>
  );
};

export default Progress;
