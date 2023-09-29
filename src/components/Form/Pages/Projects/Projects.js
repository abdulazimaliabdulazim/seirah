import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
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
import {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/LettersNmbers";

const Projects = () => {
  document.title = "المشاريع";
  const [dataProjects, setDataProjects] = useState(
    getFormValues("dataProjects")
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch({ type: { dataProjects: { dataProjects: dataProjects } } });
  let counter = [1, 1, 1, 1, 1];

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
          label={"اسم المشروع"}
          paraghrap={
            "إذا كان للمشروع موقع أو صفحة في السوشال ميديا ضع رابطها هنا، (اختياري)"
          }>
          <input
            onChange={(e) => hendlerData(e, setDataProjects)}
            id={counter[0]++}
            value={dataProjects[counter[1]++]}
            type="text"
            placeholder="اسم المشروع"
          />
        </ParentInput>
        <ParentInput
          forId={counter[2]++}
          label={"رابط المشروع"}
          paraghrap={
            "إذا كان للمشروع موقع أو صفحة في السوشال ميديا ضع رابطها هنا، (اختياري)"
          }>
          <input
            onChange={(e) => hendlerData(e, setDataProjects)}
            id={counter[0]++}
            value={dataProjects[counter[1]++]}
            type="text"
            placeholder="رابط المشروع"
          />
        </ParentInput>
        <DateQualifi forId={counter[2]++} lable={"تاريخ الإنجاز"}>
          <div
            id={`day${counter[3]++}`}
            onClick={(e) => hendlerData(e, setDataProjects)}>
            <Day />
            {counter[0]++}
            {counter[1]++}
          </div>
          <div
            id={`manth${counter[3]++}`}
            onClick={(e) => hendlerData(e, setDataProjects)}>
            <Manth />
          </div>
          <div
            id={`yar${counter[3]++}`}
            onClick={(e) => hendlerData(e, setDataProjects)}>
            <Yar />
          </div>
          <span>{dataProjects[`day${counter[4]++}`]}</span>
          <span>{dataProjects[`manth${counter[4]++}`]}</span>
          <span>{dataProjects[`yar${counter[4]++}`]}</span>
        </DateQualifi>
        <ParentInput
          forId={counter[2]++}
          label={"نبذة عن المشروع"}
          paraghrap={"نبذة بسيطة عن المشروع أو المنجز (اختياري)."}>
          <input
            onChange={(e) => hendlerData(e, setDataProjects)}
            id={counter[0]++}
            value={dataProjects[counter[1]++]}
            type="text"
            placeholder="نبذة عن المشروع"
          />
        </ParentInput>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countProj", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          أضف مشروع جديد
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataProjects",
              dataProjects,
              "countProj",
              count
            );
          }}
          text={"حفظ الإنجازات"}
        />
      </div>
    </div>
  );
};

export default Projects;
// Update 144
