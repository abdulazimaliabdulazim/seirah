import React from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../....//../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import { useDispatch } from "react-redux";
import { nextPage, sendActionData } from "../hendlerData/hendlerData";
import { counterActions } from "../../../../sliceStores/sliceTwo";
import { useNavigate } from "react-router-dom";
import json from "../JSON_date/data_inputs.json";

const UsePages = ({
  children,
  state,
  naState,
  state2,
  naState2,
  setState2,
  b1,
  b2,
  numbCol,
}) => {
  const navigate = useNavigate();
  const ulrsPages = json[13];
  const varNextPages = ulrsPages[ulrsPages.indexOf(nextPage().join("")) + 1];

  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch(counterActions[window.location.pathname.split("/")[4]](state));
  const hendlreNum = () => setState2((pre) => [...pre, 1]);

  const targetSeirah = window.localStorage.getItem("targetSeirah");
  return (
    <div className={style.parent}>
      <div className={style.box}>
        {children}
        <button
          onClick={(e) => {
            state2.length < numbCol
              ? hendlreNum()
              : e.target.removeEventListener("click", e.target);
          }}
          className={`${style.but} ${styleBut.mani}`}>
          {b1}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              `${naState}${targetSeirah}`,
              state,
              `${naState2}${targetSeirah}`,
              state2
            );
            navigate(varNextPages);
          }}
          text={b2}
        />
      </div>
    </div>
  );
};

export default UsePages;
