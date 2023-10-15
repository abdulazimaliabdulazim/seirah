import React, { useState } from "react";
import style from "./Qualifications.module.css";
import DateQualifi from "../Home/DateQualifi/DateQualifi";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../../hendlerData/hendlerData";
import { Day, Manth, Yar } from "./DateQualifi/LettersNmbers";
import Json from "../../JSON_date/data_inputs.json";
import UsePages from "../../UsePage/UsePages";
import Icons from "../../../../Icons/Icons";

export const Icones = () => {
  return (
    <div className={style.controlBut}>
      <div className={style.icon} type="button">
        <Icons
          viewBox={"0 0 448 512"}
          path={
            "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
          }
        />
      </div>
      <div className={style.icon} draggable={true} type="button">
        <Icons
          viewBox={"0 0 192 512"}
          path={
            "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"
          }
        />
      </div>
    </div>
  );
};

const Qualifications = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "المؤهلات العلمية";
  const [qualification, setQualification] = useState(
    getFormValues(
      targetSeirah !== null
        ? `qualifications${targetSeirah}`
        : "qualifications1"
    )
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones />
        <div className={style.qualificBox} id={ind} key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          {Json[3].map((input, ind) => {
            return (
              <ParentInput
                key={ind}
                forId={
                  input.id === "education"
                    ? `${input.id}${coun[11]++}`
                    : input.id === "specializat"
                    ? `${input.id}${coun[12]++}`
                    : `${input.id}${coun[13]++}`
                }
                label={input.label}
                paraghrap={input.paraghrap}>
                <input
                  onChange={(e) => hendlerData(e, setQualification)}
                  id={
                    input.id === "education"
                      ? `${input.id}${coun[5]++}`
                      : input.id === "specializat"
                      ? `${input.id}${coun[6]++}`
                      : `${input.id}${coun[7]++}`
                  }
                  value={
                    input.id === "education"
                      ? qualification[`${input.id}${coun[8]++}`]
                      : input.id === "specializat"
                      ? qualification[`${input.id}${coun[9]++}`]
                      : qualification[`${input.id}${coun[10]++}`]
                  }
                  type="text"
                  placeholder={input.label}
                />
              </ParentInput>
            );
          })}
          <ParentInput forId={`degree${coun[1]++}`} label={"الدرجة العلمية"}>
            <select
              id={`degree${coun[0]++}`}
              onChange={(e) => hendlerData(e, setQualification)}
              value={qualification[`degree${coun[2]++}`]}>
              {Json[8].map((option, ind) => {
                return <option key={ind}>{option}</option>;
              })}
            </select>
          </ParentInput>
          <DateQualifi forId={coun[1]++} lable={"تاريخ التخرج"}>
            <Day id={`day${coun[3]++}`} state={setQualification} />
            <Manth id={`manth${coun[4]++}`} state={setQualification} />
            <Yar id={`yar${coun[14]++}`} state={setQualification} />
            <span>{qualification[`day${coun[15]++}`]}</span>
            <span>{qualification[`manth${coun[16]++}`]}</span>
            <span>{qualification[`yar${coun[17]++}`]}</span>
            {coun[0]++}
            {coun[2]++}
          </DateQualifi>
        </div>
      </div>
    );
  };
  const [qualifiNumber, setQualifiNumber] = useState(
    getFormValues(
      targetSeirah !== null ? `qualifiNumber${targetSeirah}` : "qualifiNumber1"
    )
  );
  return (
    <UsePages
      state={qualification}
      naState={"qualifications"}
      state2={qualifiNumber}
      naState2={"qualifiNumber"}
      setState2={setQualifiNumber}
      b1={"أضف مؤهل جديد"}
      b2={"حفظ المؤهلات"}>
      {qualifiNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Qualifications;
