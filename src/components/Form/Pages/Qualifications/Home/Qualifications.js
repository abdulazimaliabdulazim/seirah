import React, { useState } from "react";
import style from "./Qualifications.module.css";
import DateQualifi from "../Home/DateQualifi/DateQualifi";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../../hendlerData/hendlerData";
import { Day, Manth, Yar } from "./DateQualifi/LettersNmbers";
import Json from "../../JSON_date/data_inputs.json";
import UsePages from "../../UsePage/UsePages";

const Qualifications = () => {
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "المؤهلات العلمية";
  const [qualification, setQualification] = useState(
    getFormValues(
      true,
      "qualification",
      true,
      true,
      coun[coun.length - 1],
      "education",
      "specializat",
      "esy"
    )
  );
  const createqualifi = (ind) => {
    return (
      <div className={style.qualificBox} id={ind} key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
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
    );
  };
  const [qualifiNumber, setQualifiNumber] = useState(
    getFormValues(true, "qualifiNumber", false)
  );
  return (
    <UsePages
      state={qualification}
      naState={"qualification"}
      state2={qualifiNumber}
      naState2={"qualifiNumber"}
      setState2={setQualifiNumber}
      b1={"أضف مؤهل جديد"}
      b2={"حفظ المؤهلات"}
      numbCol={coun[coun.length - 1]}>
      {qualifiNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Qualifications;
// Update 129 => 101
