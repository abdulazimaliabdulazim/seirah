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
  const [date, setDate] = useState([]);
  const [globalD, setGlobalD] = useState([]);
  const funHendler = (obj) => {
    setDate((pre) => setDate([...pre, obj]));
  };
  console.log(date);
  const [coursess, setCoursess] = useState(getFormValues("coursess"));
  // console.log(coursess);
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { coursess: coursess } });
  let counter = [1, 1, 1, 1, 1, 1];
  const createqualifi = (ind) => {
    return (
      <div className={style.qualificBox} key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        {json[3].map((input, ind) => {
          return (
            <ParentInput
              key={ind}
              forId={counter[1]++}
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                onChange={(e) => {
                  hendlerData(e, setCoursess);
                  hendlerData(e, setGlobalD, false, true);
                }}
                id={counter[0]++}
                type="text"
                placeholder={input.label}
                value={coursess[counter[2]++]}
                className={input.id}
              />
            </ParentInput>
          );
        })}
        <DateQualifi forId={""} lable={"تاريخها"}>
          <div id={"day"} onClick={(e) => hendlerData(e, setCoursess)}>
            <Day />
          </div>
          <div id={"manth"} onClick={(e) => hendlerData(e, setCoursess)}>
            <Manth />
          </div>
          <div id={"yar"} onClick={(e) => hendlerData(e, setCoursess)}>
            <Yar />
          </div>
          <span>"datess"</span>
          <span>"datess</span>
          <span>"datess</span>
        </DateQualifi>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countCours", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);

  return (
    <form onSubmit={(e) => hendlerData(e, setCoursess)}>
      <div onDrop={(e) => drop(e.target)} className={style.parent}>
        <div className={style.box}>
          {count.map((ele, ind) => createqualifi(ind))}
          <button
            onClick={() => {
              hendlreNum();
              funHendler(globalD);
            }}
            className={`${style.but} ${styleBut.mani}`}>
            {"أضف خبرة جديدة"}
          </button>
          <hr className={style.hr} />
          <Buttom
            onClick={() => {
              funHendler(globalD);
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
    </form>
  );
};

export default Coursess;
