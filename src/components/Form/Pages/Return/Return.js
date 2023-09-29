import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch } from "react-redux";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";

const Return = () => {
  document.title = "المراجع";
  const [dataReturn, setDataReturn] = useState(getFormValues("dataReturn"));
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { dataReturn: dataReturn } });
  let counter = [1, 1, 1];

  const createqualifi = (ind) => {
    return (
      <div
        onDragStart={(e) => dargItem(e.target)}
        onDragEnd={(e) => dargEnd(e.target)}
        onDragOver={(e) => dargOver(e.target)}
        draggable={true}
        className={style.qualificBox}
        key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        <ParentInput
          forId={counter[2]++}
          label={"اسم الشخص"}
          paraghrap={"اسم الشخص الذي عملت معه، كمرجع وموصي لسؤاله عنك."}>
          <input
            onChange={(e) => hendlerData(e, setDataReturn)}
            id={counter[0]++}
            value={dataReturn[counter[1]++]}
            type="text"
            placeholder="اسم الشخص"
          />
        </ParentInput>
        <ParentInput
          forId={counter[2]++}
          label={"رقم الجوال"}
          paraghrap={"إختياري"}>
          <input
            onChange={(e) => hendlerData(e, setDataReturn)}
            id={counter[0]++}
            value={dataReturn[counter[1]++]}
            type="text"
            placeholder="رقم الجوال"
          />
        </ParentInput>
        <ParentInput
          forId={counter[2]++}
          label={"نبذة بسيط"}
          paraghrap={"نبذة بسيطة عن المشروع أو المنجز (اختياري)."}>
          <input
            onChange={(e) => hendlerData(e, setDataReturn)}
            id={counter[0]++}
            value={dataReturn[counter[1]++]}
            type="text"
            placeholder="نبذة بسيط"
          />
        </ParentInput>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countRetu", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          {"أضف شخص جديد"}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataReturn",
              dataReturn,
              "countRetu",
              count
            );
          }}
          text={"حفظ المراجع"}
        />
      </div>
    </div>
  );
};

export default Return;
// Update 109
