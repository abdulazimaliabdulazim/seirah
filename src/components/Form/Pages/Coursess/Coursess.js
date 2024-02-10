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
import { Day, Manth, Yar } from "../Qualifications/Home/DateQualifi/DateCopy";
import json from "../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../UsePage/UsePages";

const Coursess = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "الدورات التدريبية";
  const [coursess, setCoursess] = useState(
    getFormValues(
      targetSeirah !== null ? `coursess${targetSeirah}` : "coursess1"
    )
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <div className={style.qualificBox} key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          <Icones index={ind + 1} state1={coursess} state2={coursessNumber} />
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
      </div>
    );
  };
  let [coursessNumber, setCoursessNum] = useState(
    getFormValues(
      targetSeirah !== null
        ? `coursessNumber${targetSeirah}`
        : "coursessNumber1"
    )
  );
  return (
    <UsePages
      state={coursess}
      state2={coursessNumber}
      setState2={setCoursessNum}
      b1={"أضف دورة جديدة"}
      b2={"حفظ الدورات"}>
      {coursessNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Coursess;
