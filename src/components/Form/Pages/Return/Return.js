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

const Return = () => {
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3];
  document.title = "المراجع";
  const [dataReturn, setDataReturn] = useState(
    getFormValues(
      true,
      "return",
      true,
      true,
      coun[coun.length - 1],
      "name",
      "number_phone",
      "esy"
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
        {json[7].map((input, ind) => {
          return (
            <ParentInput
              key={ind}
              forId={
                input.id === "job"
                  ? `${input.id}${coun[1]++}`
                  : input.id === "jobTitle"
                  ? `${input.id}${coun[2]++}`
                  : `${input.id}${coun[3]++}`
              }
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                onChange={(e) => hendlerData(e, setDataReturn)}
                type="text"
                placeholder={input.label}
                id={
                  input.id === "job"
                    ? `${input.id}${coun[4]++}`
                    : input.id === "jobTitle"
                    ? `${input.id}${coun[5]++}`
                    : `${input.id}${coun[6]++}`
                }
                value={
                  input.id === "job"
                    ? dataReturn[`${input.id}${coun[7]++}`]
                    : input.id === "jobTitle"
                    ? dataReturn[`${input.id}${coun[8]++}`]
                    : dataReturn[`${input.id}${coun[9]++}`]
                }
              />
            </ParentInput>
          );
        })}
      </div>
    );
  };
  let [returnNumber, setReturnNumber] = useState(
    getFormValues(true, "returnNumber", false)
  );
  return (
    <UsePages
      state={dataReturn}
      naState={"return"}
      state2={returnNumber}
      naState2={"returnNumber"}
      setState2={setReturnNumber}
      b1={"أضف شخص جديد"}
      b2={"حفظ المراجع"}
      numbCol={coun[coun.length - 1]}>
      {returnNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Return;
// Update 93
