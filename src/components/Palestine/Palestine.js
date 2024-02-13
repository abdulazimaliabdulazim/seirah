import React from "react";
import style from "./palestine.module.css";
import palestine from "../../images/logo.png";

const Palestine = () => {
  return (
    <div className={style.palestine}>
      <img src={palestine} alt="palestine" />
      <p>STAND WITH PALESTINE</p>
      <img src={palestine} alt="palestine" />
    </div>
  );
};

export default Palestine;
