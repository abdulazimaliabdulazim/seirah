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
import { Icones } from "../Qualifications/Home/Qualifications";

const Return = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  document.title = "المراجع";
  const [dataReturn, setDataReturn] = useState(
    getFormValues(targetSeirah !== null ? `return${targetSeirah}` : "return1")
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones />
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
                  onChange={(e) => hendlerData(e, setDataReturn)}
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
                      ? dataReturn[`${input.id}${coun[9]++}`]
                      : input.id === "email"
                      ? dataReturn[`${input.id}${coun[10]++}`]
                      : input.id === "number_phone"
                      ? dataReturn[`${input.id}${coun[11]++}`]
                      : input.id === "esy"
                      ? dataReturn[`${input.id}${coun[12]++}`]
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
      state={dataReturn}
      naState={"return"}
      state2={returnNumber}
      naState2={"returnNumber"}
      setState2={setReturnNumber}
      b1={"أضف شخص جديد"}
      b2={"حفظ المراجع"}>
      {returnNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Return;
