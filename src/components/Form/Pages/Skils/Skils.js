import React, { useState } from "react";
import Buttom from "../../Buttom/Buttom";
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
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";

const Skils = () => {
  document.title = "المهارات";
  const [dataSkils, setDataSkils] = useState(getFormValues("dataSkils"));
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { dataSkils: dataSkils } });
  let coun = [1, 1, 1];

  let checkd = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
          forId={coun[2]++}
          label={"المهارة"}
          paraghrap={
            "مسمى المهارة، من كلمة إلى 4 كلمات كحد أقصى. مثال: Photoshop, Excel, أو HTML/CSS .. إلى آخره"
          }>
          <input
            onChange={(e) => hendlerData(e, setDataSkils)}
            id={coun[0]++}
            value={dataSkils[coun[1]++]}
            type="text"
            placeholder="المهارة"
          />
        </ParentInput>
        <Checkd forId={"skils"} label={"مستواك بها"}>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataSkils)}
              value={[`skils${checkd[11]++}`, "مبتدئ"]}
              id={`skils${checkd[0]++}`}
              type="radio"
              name={`skils${checkd[1]++}`}
            />
            مبتدئ
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataSkils)}
              value={[`skils${checkd[11]++}`, "محدود"]}
              id={`skils${checkd[2]++}`}
              type="radio"
              name={`skils${checkd[3]++}`}
            />
            محدود
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataSkils)}
              value={[`skils${checkd[11]++}`, "جيّد"]}
              id={`skils${checkd[4]++}`}
              type="radio"
              name={`skils${checkd[5]++}`}
            />
            جيّد
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataSkils)}
              value={[`skils${checkd[11]++}`, "متمكن"]}
              id={`skils${checkd[6]++}`}
              type="radio"
              name={`skils${checkd[7]++}`}
            />
            متمكن
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataSkils)}
              value={[`skils${checkd[11]++}`, "متخصص"]}
              id={`skils${checkd[8]++}`}
              type="radio"
              name={`skils${checkd[9]++}`}
            />
            متخصص
            <div className={style.tog}></div>
          </label>
        </Checkd>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countSkils", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);

  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          {"أضف مهارة جديدة"}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataSkils",
              dataSkils,
              "countSkils",
              count
            );
          }}
          text={"حفظ المهارات"}
        />
      </div>
    </div>
  );
};

export default Skils;
// Update 147
