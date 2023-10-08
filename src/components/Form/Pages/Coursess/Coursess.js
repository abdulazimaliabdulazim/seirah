import React, { useState } from "react";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/LettersNmbers";
import json from "../JSON_date/data_inputs.json";
import UsePages from "../UsePage/UsePages";

const Coursess = () => {
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "الدورات التدريبية";
  const [coursess, setCoursess] = useState(
    getFormValues(
      "coursess",
      true,
      true,
      coun[coun.length - 1],
      "cours",
      "mantur",
      "esy"
    )
  );
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
              forId={
                input.id === "cours"
                  ? `${input.id}${coun[0]++}`
                  : input.id === "mantur"
                  ? `${input.id}${coun[1]++}`
                  : `${input.id}${coun[2]++}`
              }
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                id={
                  input.id === "cours"
                    ? `${input.id}${coun[3]++}`
                    : input.id === "mantur"
                    ? `${input.id}${coun[4]++}`
                    : `${input.id}${coun[5]++}`
                }
                value={
                  input.id === "cours"
                    ? coursess[`${input.id}${coun[6]++}`]
                    : input.id === "mantur"
                    ? coursess[`${input.id}${coun[7]++}`]
                    : coursess[`${input.id}${coun[8]++}`]
                }
                type="text"
                placeholder={input.label}
                className={`${input.id}${coun[9]++}`}
                onChange={(e) => hendlerData(e, setCoursess)}
              />
            </ParentInput>
          );
        })}
        <DateQualifi forId={coun[10]++} lable={"تاريخها"}>
          <Day id={`day${coun[11]++}`} state={setCoursess} />
          <Manth id={`manth${coun[12]++}`} state={setCoursess} />
          <Yar id={`yar${coun[13]++}`} state={setCoursess} />
          <span>{coursess[`day${coun[14]++}`]}</span>
          <span>{coursess[`manth${coun[15]++}`]}</span>
          <span>{coursess[`yar${coun[16]++}`]}</span>
        </DateQualifi>
      </div>
    );
  };
  let [coursessNumber, setCoursessNum] = useState(
    getFormValues("coursessNumber", false)
  );
  return (
    <UsePages
      state={coursess}
      naState={"coursess"}
      state2={coursessNumber}
      naState2={"coursessNumber"}
      setState2={setCoursessNum}
      b1={"أضف دورة جديدة"}
      b2={"حفظ الدورات"}
      numbCol={coun[coun.length - 1]}>
      {coursessNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Coursess;
// Update 122
