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

const Return = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  document.title = "المراجع";
  const [returnP, setreturnP] = useState(
    getFormValues(targetSeirah !== null ? `return${targetSeirah}` : "return1")
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones index={ind + 1} state1={returnP} state2={returnNumber} />
        <div
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable={true}
          className={style.qualificBox}
          key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          {json[7].map((input, ind) => {
            return (
              <ParentInput
                key={ind}
                forId={
                  input.id === "name"
                    ? `${input.id}${coun[1]++}`
                    : input.id === "email"
                    ? `${input.id}${coun[2]++}`
                    : input.id === "number_phone"
                    ? `${input.id}${coun[3]++}`
                    : input.id === "esy"
                    ? `${input.id}${coun[4]++}`
                    : ""
                }
                label={input.label}
                paraghrap={input.paraghrap}>
                <input
                  onChange={(e) => hendlerData(e, setreturnP)}
                  type="text"
                  placeholder={input.label}
                  id={
                    input.id === "name"
                      ? `${input.id}${coun[5]++}`
                      : input.id === "email"
                      ? `${input.id}${coun[6]++}`
                      : input.id === "number_phone"
                      ? `${input.id}${coun[7]++}`
                      : input.id === "esy"
                      ? `${input.id}${coun[8]++}`
                      : ""
                  }
                  value={
                    input.id === "name"
                      ? returnP[`${input.id}${coun[9]++}`]
                      : input.id === "email"
                      ? returnP[`${input.id}${coun[10]++}`]
                      : input.id === "number_phone"
                      ? returnP[`${input.id}${coun[11]++}`]
                      : input.id === "esy"
                      ? returnP[`${input.id}${coun[12]++}`]
                      : ""
                  }
                />
              </ParentInput>
            );
          })}
        </div>
      </div>
    );
  };
  let [returnNumber, setReturnNumber] = useState(
    getFormValues(
      targetSeirah !== null ? `returnNumber${targetSeirah}` : "returnNumber1"
    )
  );
  return (
    <UsePages
      state={returnP}
      state2={returnNumber}
      setState2={setReturnNumber}
      b1={"أضف شخص جديد"}
      b2={"حفظ المراجع"}>
      {returnNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Return;
