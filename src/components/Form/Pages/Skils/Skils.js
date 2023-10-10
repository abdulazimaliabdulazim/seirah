import React, { useState } from "react";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import UsePages from "../UsePage/UsePages";

const Skils = () => {
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "المهارات";
  const [skils, setSkils] = useState(
    getFormValues(true, "skils", true, true, coun[coun.length - 1], "skils")
  );
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
          forId={`skilsId${coun[0]++}`}
          label={"المهارة"}
          paraghrap={
            "مسمى المهارة، من كلمة إلى 4 كلمات كحد أقصى. مثال: Photoshop, Excel, أو HTML/CSS .. إلى آخره"
          }>
          <input
            onChange={(e) => hendlerData(e, setSkils)}
            id={`skilsId${coun[1]++}`}
            value={skils[`skilsId${coun[2]++}`]}
            type="text"
            placeholder="المهارة"
          />
        </ParentInput>
        <Checkd forId={`skils${coun[18]++}`} label={"مستواك بها"}>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skils${coun[4]++}`}
              type="radio"
              name={`skils${coun[5]++}`}
            />
            مبتدئ
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skils${coun[7]++}`}
              type="radio"
              name={`skils${coun[8]++}`}
            />
            محدود
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skils${coun[10]++}`}
              type="radio"
              name={`skils${coun[11]++}`}
            />
            جيّد
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skils${coun[13]++}`}
              type="radio"
              name={`skils${coun[14]++}`}
            />
            متمكن
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skils${coun[16]++}`}
              type="radio"
              name={`skils${coun[17]++}`}
            />
            متخصص
            <div className={style.tog}></div>
          </label>
        </Checkd>
      </div>
    );
  };
  let [skilsNumber, setSkilsNumb] = useState(
    getFormValues(true, "skilsNumber", false)
  );
  return (
    <UsePages
      state={skils}
      naState={"skils"}
      state2={skilsNumber}
      naState2={"skilsNumber"}
      setState2={setSkilsNumb}
      b1={"أضف خبرة مهارة"}
      b2={"حفظ المهارات"}
      numbCol={5}>
      {skilsNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Skils;
// Update 149
