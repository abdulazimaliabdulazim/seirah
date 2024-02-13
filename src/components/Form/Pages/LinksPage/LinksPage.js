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
import UsePages, { Icones } from "../UsePage/UsePages";

const LinksPage = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3];
  const [links, setLinks] = useState(
    getFormValues(targetSeirah !== null ? `links${targetSeirah}` : "links1")
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones index={ind + 1} state1={links} state2={linksNumber} />
        <div
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable={true}
          className={style.qualificBox}
          key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
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
      </div>
    );
  };
  let [linksNumber, setLinksNumber] = useState(
    getFormValues(
      targetSeirah !== null ? `linksNumber${targetSeirah}` : "linksNumber1"
    )
  );
  return (
    <UsePages
      state={links}
      state2={linksNumber}
      setState2={setLinksNumber}
      b1={"أضف رابط جديد"}
      b2={"حفظ الروابط"}>
      {linksNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default LinksPage;
