import React from "react";
import style from "./Upload.module.css";
import UserImg from "../../../../../UserImg/UserImg";

const Upload = ({ text, p, state, setState, index }) => {
  return (
    <div className={style.parent}>
      <div className={style.col}>
        <label htmlFor="img">{text}</label>
        <div className={style.img}>
          <UserImg
            state={state}
            setState={setState}
            index={index}
            radius="12px"
            width="80px"
            hidden={true}
          />
        </div>
      </div>
      <p>{p}</p>
    </div>
  );
};

export default Upload;
