import React from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../....//../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import { useDispatch } from "react-redux";
import { progress, sendActionData } from "../hendlerData/hendlerData";
import { counterActions } from "../../../../sliceStores/sliceTwo";
import { useNavigate } from "react-router-dom";
import { transform } from "../NewTranfrom/NewTranfrom";
import Icons from "../../../Icons/Icons";

// Component Icones And Function Delete Col
export const Icones = ({ index, state1, state2 }) => {
  const deleteCol = () => {
    const targetSeirah =
      window.localStorage.getItem("targetSeirah") !== null
        ? window.localStorage.getItem("targetSeirah")
        : "1";
    const pathName = window.location.pathname.split("/");
    const pathNameFinal = pathName[pathName.length - 1];
    const key = Object.keys(state1);
    key
      .filter((ele) => {
        return Number(ele.slice((0, -1))) === index;
      })
      .filter((ele) => {
        delete state1[ele];
        window.localStorage.setItem(
          `${pathNameFinal}${targetSeirah}`,
          JSON.stringify(state1)
        );
      });
    window.localStorage.setItem(
      `${pathNameFinal}Number${targetSeirah}`,
      JSON.stringify(state2.slice(1))
    );
  };
  return (
    <div className={style.controlBut}>
      <div
        onClick={() => deleteCol(index)}
        className={style.icon}
        type="button">
        <Icons
          viewBox={"0 0 448 512"}
          path={
            "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
          }
        />
      </div>
      <div className={style.icon} draggable={true} type="button">
        <Icons
          viewBox={"0 0 192 512"}
          path={
            "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"
          }
        />
      </div>
    </div>
  );
};

const UsePages = ({ children, state, state2, setState2, b1, b2 }) => {
  const pathName = window.location.pathname.split("/");
  const pathNameFinal = pathName[pathName.length - 1];
  const targetSeirah =
    window.localStorage.getItem("targetSeirah") !== null
      ? window.localStorage.getItem("targetSeirah")
      : "1";
  const navigate = useNavigate();
  // Progress
  progress(state);

  const dispatch = useDispatch();
  const hindlerAction = () => dispatch(counterActions.progress(state.progress));
  const hendlreNum = () => setState2((pre) => [...pre, 1]);

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
                ? `${pathNameFinal}${targetSeirah}`
                : `${pathNameFinal}1`,
              state,
              targetSeirah !== null
                ? `${pathNameFinal}Number${targetSeirah}`
                : `${pathNameFinal}Number1`,
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
