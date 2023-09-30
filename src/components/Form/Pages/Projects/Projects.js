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
import json from "../JSON_date/data_inputs.json";

const Projects = () => {
  document.title = "المشاريع";
  const [projects, setProjects] = useState(
    getFormValues("projects", true, true, "name", "link", "brief")
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch({ type: { projects: { projects: projects } } });
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
        {json[6].map((input, ind) => {
          return (
            <ParentInput
              key={ind}
              forId={`${input.id}${counter[2]++}`}
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                onChange={(e) => hendlerData(e, setProjects)}
                id={`${input.id}${counter[0]++}`}
                type="text"
                placeholder={input.label}
                value={projects[`${input.id}${counter[1]++}`]}
              />
            </ParentInput>
          );
        })}
        <DateQualifi forId={counter[2]++} lable={"تاريخ الإنجاز"}>
          <div
            id={`day${counter[3]++}`}
            onClick={(e) =>
              hendlerData(e, setProjects, false, false, true, false)
            }>
            <Day />
            {counter[0]++}
            {counter[1]++}
          </div>
          <div
            id={`manth${counter[3]++}`}
            onClick={(e) =>
              hendlerData(e, setProjects, false, false, true, false)
            }>
            <Manth />
          </div>
          <div
            id={`yar${counter[3]++}`}
            onClick={(e) =>
              hendlerData(e, setProjects, false, false, true, false)
            }>
            <Yar />
          </div>
          <span>{projects[`day${counter[4]++}`]}</span>
          <span>{projects[`manth${counter[4]++}`]}</span>
          <span>{projects[`yar${counter[4]++}`]}</span>
        </DateQualifi>
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
              "projects",
              projects,
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
// Update 128
