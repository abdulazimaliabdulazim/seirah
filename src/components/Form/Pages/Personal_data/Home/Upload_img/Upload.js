import React from "react";
import style from "./Upload.module.css";
import UserImg from "../../../../../UserImg/UserImg";

const Upload = ({ id, text, p, srcImg, setState }) => {
  return (
    <div className={style.parent}>
      <div className={style.col}>
        <label htmlFor="img">{text}</label>
        <div id={id} className={style.img}>
          <UserImg
            srcImg={srcImg}
            setState={setState}
            radius={"12px"}
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
