import React, { useState } from "react";
import Buttom from "../../Buttom/Buttom";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import { useDispatch } from "react-redux";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";
import {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/LettersNmbers";
import json from "../JSON_date/data_inputs.json";

const Coursess = () => {
  document.title = "الدورات التدريبية";
  const [coursess, setCoursess] = useState(
    getFormValues("coursess", true, true, "cours", "mantur", "esy")
  );
  // Send Coursess Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { date: coursess } });
  let counter = [1, 1, 1, 1, 1, 1, 1];

  const createqualifi = (ind) => {
    return (
      <div className={style.qualificBox} key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        {json[5].map((input, ind) => {
          return (
            <ParentInput
              key={ind}
              forId={`${input.id}${counter[1]++}`}
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                onChange={(e) => hendlerData(e, setCoursess)}
                id={`${input.id}${counter[0]++}`}
                type="text"
                placeholder={input.label}
                className={`${input.id}${counter[2]++}`}
                value={coursess[`${input.id}${counter[3]++}`]}
              />
            </ParentInput>
          );
        })}
        <DateQualifi forId={counter[4]++} lable={"تاريخها"}>
          <div
            id={`day${counter[5]++}`}
            onClick={(e) =>
              hendlerData(e, setCoursess, false, false, true, false)
            }>
            <Day />
            {counter[0]++}
          </div>
          <div
            id={`manth${counter[5]++}`}
            onClick={(e) =>
              hendlerData(e, setCoursess, false, false, true, false)
            }>
            <Manth />
          </div>
          <div
            id={`yar${counter[5]++}`}
            onClick={(e) =>
              hendlerData(e, setCoursess, false, false, true, false)
            }>
            <Yar />
          </div>
          <span>{coursess[`day${counter[6]++}`]}</span>
          <span>{coursess[`manth${counter[6]++}`]}</span>
          <span>{coursess[`yar${counter[6]++}`]}</span>
        </DateQualifi>
      </div>
    );
  };
  // Click Add Coursess
  let [count, setCount] = useState(getFormValues("countCours", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);

  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          أضف خبرة جديدة
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "coursess",
              coursess,
              "countCours",
              count
            );
          }}
          text={"حفظ الخبرات"}
        />
      </div>
    </div>
  );
};

export default Coursess;
// Update 122
