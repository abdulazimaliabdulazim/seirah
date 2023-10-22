import React, { useState } from "react";
import style from "./Qualifications.module.css";
import DateQualifi from "../Home/DateQualifi/DateQualifi";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../../hendlerData/hendlerData";
import { Day, Manth, Yar } from "./DateQualifi/LettersNmbers";
import Json from "../../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../../UsePage/UsePages";

const Qualifications = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "المؤهلات العلمية";
  const [qualifications, setQualifications] = useState(
    getFormValues(
      targetSeirah !== null
        ? `qualifications${targetSeirah}`
        : "qualifications1"
    )
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones
          index={ind + 1}
          state1={qualifications}
          state2={qualificationsNumber}
        />
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
                  onChange={(e) => hendlerData(e, setQualifications)}
                  id={
                    input.id === "education"
                      ? `${input.id}${coun[5]++}`
                      : input.id === "specializat"
                      ? `${input.id}${coun[6]++}`
                      : `${input.id}${coun[7]++}`
                  }
                  value={
                    input.id === "education"
                      ? qualifications[`${input.id}${coun[8]++}`]
                      : input.id === "specializat"
                      ? qualifications[`${input.id}${coun[9]++}`]
                      : qualifications[`${input.id}${coun[10]++}`]
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
              onChange={(e) => hendlerData(e, setQualifications)}
              value={qualifications[`degree${coun[2]++}`]}>
              {Json[8].map((option, ind) => {
                return <option key={ind}>{option}</option>;
              })}
            </select>
          </ParentInput>
          <DateQualifi forId={coun[1]++} lable={"تاريخ التخرج"}>
            <Day id={`day${coun[3]++}`} state={setQualifications} />
            <Manth id={`manth${coun[4]++}`} state={setQualifications} />
            <Yar id={`yar${coun[14]++}`} state={setQualifications} />
            <span>{qualifications[`day${coun[15]++}`]}</span>
            <span>{qualifications[`manth${coun[16]++}`]}</span>
            <span>{qualifications[`yar${coun[17]++}`]}</span>
            {coun[0]++}
            {coun[2]++}
          </DateQualifi>
        </div>
      </div>
    );
  };
  const [qualificationsNumber, setQualificationsNumber] = useState(
    getFormValues(
      targetSeirah !== null
        ? `qualificationsNumber${targetSeirah}`
        : "qualificationsNumber1"
    )
  );
  return (
    <UsePages
      state={qualifications}
      state2={qualificationsNumber}
      setState2={setQualificationsNumber}
      b1={"أضف مؤهل جديد"}
      b2={"حفظ المؤهلات"}>
      {qualificationsNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Qualifications;
