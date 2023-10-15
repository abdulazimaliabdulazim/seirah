import React from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../....//../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import { useDispatch } from "react-redux";
import { progress, sendActionData } from "../hendlerData/hendlerData";
import { counterActions } from "../../../../sliceStores/sliceTwo";
import { useNavigate } from "react-router-dom";
import { transform } from "../NewTranfrom/NewTranfrom";

const UsePages = ({
  children,
  state,
  naState,
  state2,
  naState2,
  setState2,
  b1,
  b2,
}) => {
  const navigate = useNavigate();
  // Progress
  progress(state);

  const dispatch = useDispatch();
  const hindlerAction = () => dispatch(counterActions.progress(state.progress));
  const hendlreNum = () => setState2((pre) => [...pre, 1]);

  const targetSeirah = window.localStorage.getItem("targetSeirah");
  return (
    <div className={style.parent}>
      <div className={style.box}>
        {children}
        <button
          onClick={() => hendlreNum()}
          className={`${style.but} ${styleBut.mani}`}>
          {b1}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              targetSeirah !== null
                ? `${naState}${targetSeirah}`
                : `${naState}1`,
              state,
              targetSeirah !== null
                ? `${naState2}${targetSeirah}`
                : `${naState2}1`,
              state2
            );
            transform(navigate, dispatch);
          }}
          text={b2}
        />
      </div>
    </div>
  );
};

export default UsePages;
