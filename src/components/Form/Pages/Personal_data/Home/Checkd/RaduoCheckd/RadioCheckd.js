import React from "react";
import style from "./RadioCheckd.module.css";
import { useDispatch } from "react-redux";

const RadioCheckd = ({ nameRad, typeRad, setHalth }) => {
  const dispatch = useDispatch();
  const man = () => dispatch({ type: nameRad });
  const woman = () => dispatch({ type: nameRad });

  return (
    <label
      onClick={() =>
        nameRad === "رجل"
          ? man()
          : nameRad === "أنثى"
          ? woman()
          : nameRad === "لدي حالة"
          ? setHalth(true)
          : nameRad === "سليم"
          ? setHalth(false)
          : ""
      }
      className={style.parent_tog}>
      <input type="radio" name={typeRad} />
      {nameRad}
      <div className={style.tog}></div>
    </label>
  );
};

export default RadioCheckd;
