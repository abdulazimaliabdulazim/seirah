import React, { Fragment, useEffect, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import { useDispatch, useSelector } from "react-redux";
import { messageSave, sendActionData } from "../hendlerData/hendlerData";
import { useNavigate } from "react-router-dom";
import { transform } from "../NewTranfrom/NewTranfrom";
import Icons from "../../../Icons/Icons";
import {
  getTitlePage,
  handleDelete,
} from "../Qualifications/Home/Qualifications";
import { storePagesActions } from "../../../../sliceStores/sliceTwo";

// Component Icones And Function Delete Col
export const Icones = ({ index, state, setState }) => {
  return (
    <div className={style.controlBut}>
      <div
        onClick={() => handleDelete(index, state, setState)}
        className={style.icon}
        type="button">
        <Icons
          viewBox="0 0 448 512"
          path="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
        />
      </div>
      <div className={style.icon} draggable={true} type="button">
        <Icons
          viewBox="0 0 192 512"
          path="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"
        />
      </div>
    </div>
  );
};

const UsePages = ({ state, b1, b2, nameData, setState }) => {
  // Page title
  getTitlePage();
  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("allSeirs"));
    if (storedData && storedData.length >= 1) {
      if (storedData[targetSeira][nameData.nameState] !== undefined) {
        setState(storedData[targetSeira][nameData.nameState]);
      }
    }
  }, []);

  const targetSeira = useSelector((state) => state.targetSeira);
  const arr = useSelector((state) => state.arr);
  const [seirsAll, setSeirsAll] = useState(arr);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storePagesActions.addSeirs([seirsAll, targetSeira]));
  }, [targetSeira, dispatch, seirsAll]);

  // إضافة نموذج جديد
  const addForm = () => {
    const newForm = {};
    nameData.nameItemObj.map((item) => {
      return (newForm[item] = "");
    });

    console.log(arr);

    // تحديث الحالة لتضمين النموذج الجديد
    setState(...state, arr[targetSeira][nameData.nameState].concat(newForm));
  };

  const navigate = useNavigate();
  // Progress
  // progress(state);

  return (
    <div className={style.parent}>
      <div className={style.box}>
        {nameData.nameState !== ("address" && "personal") && (
          <Fragment>
            <button
              onClick={addForm}
              className={`${style.but} ${styleBut.mani}`}>
              {b1}
            </button>
            <hr className={style.hr} />
          </Fragment>
        )}
        <Buttom
          onClick={() => {
            dispatch(
              storePagesActions.addDataInRedux([state, nameData.nameState])
            );
            sendActionData();
            messageSave(`تم ${b2}`);
            transform(navigate, dispatch);
          }}
          text={b2}
        />
      </div>
    </div>
  );
};

export default UsePages;
