import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import json from "../JSON_date/data_inputs.json";
import UsePages from "../UsePage/UsePages";

const LinksPage = () => {
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3];
  document.title = "الروابط";
  const [links, setLinks] = useState(
    getFormValues(
      true,
      "links",
      true,
      true,
      coun[coun.length - 1],
      "link",
      "networck"
    )
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
        <ParentInput forId={`link${coun[0]++}`} label={"الرابط"}>
          <input
            onChange={(e) => hendlerData(e, setLinks)}
            id={`link${coun[1]++}`}
            value={links[`link${coun[2]++}`]}
            type="text"
            placeholder="الرابط"
          />
        </ParentInput>
        <ParentInput forId={`networck${coun[3]++}`} label={"الشبكة"}>
          <select
            id={`networck${coun[4]++}`}
            onChange={(e) => hendlerData(e, setLinks)}
            value={links[`networck${coun[5]++}`]}>
            {json[9].map((option, ind) => {
              return <option key={ind}>{option}</option>;
            })}
          </select>
        </ParentInput>
      </div>
    );
  };
  let [linksNumber, setLinksNumber] = useState(
    getFormValues(true, "linksNumber", false)
  );
  return (
    <UsePages
      state={links}
      naState={"links"}
      state2={linksNumber}
      naState2={"linksNumber"}
      setState2={setLinksNumber}
      b1={"أضف رابط جديد"}
      b2={"حفظ الروابط"}
      numbCol={coun[coun.length - 1]}>
      {linksNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default LinksPage;
// Update 102
