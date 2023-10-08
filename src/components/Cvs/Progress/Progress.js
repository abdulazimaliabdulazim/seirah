import React, { useState } from "react";
import style from "../style.module.css";

const Progress = () => {
  const [progress] = useState(
    window.localStorage.getItem("progress") !== null
      ? window.localStorage.getItem("progress")
      : "0"
  );
  return (
    <div className={style.line}>
      <div className={style.havi}>
        <div
          style={{ width: `${progress >= 100 ? "100" : progress}%` }}
          className={style.infuk}>
          {progress >= 100 ? "100%" : `${progress}%`}
        </div>
      </div>
    </div>
  );
};

export default Progress;
