import React, { useState } from "react";
import Upload from "../Personal_data/Home/Upload_img/Upload";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/LettersNmbers";
import Json from "../JSON_date/data_inputs.json";
import UsePages from "../UsePage/UsePages";

const Experiences = () => {
  let coun = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 3,
  ];
  document.title = "الخبرات العملية";
  const [experiences, setexpEriences] = useState(
    getFormValues(
      "experiences",
      true,
      true,
      coun[coun.length - 1],
      "job",
      "jobTitle",
      "esy"
    )
  );
  const createexperiences = (ind) => {
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
        {Json[4].map((input, ind) => {
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
                onChange={(e) => hendlerData(e, setexpEriences)}
                id={
                  input.id === "job"
                    ? `${input.id}${coun[4]++}`
                    : input.id === "jobTitle"
                    ? `${input.id}${coun[5]++}`
                    : `${input.id}${coun[6]++}`
                }
                value={
                  input.id === "job"
                    ? experiences[`${input.id}${coun[7]++}`]
                    : input.id === "jobTitle"
                    ? experiences[`${input.id}${coun[8]++}`]
                    : experiences[`${input.id}${coun[9]++}`]
                }
                type="text"
                placeholder={input.label}
              />
            </ParentInput>
          );
        })}
        <DateQualifi forId={coun[0]++} lable={"تاريخ الالتحاق"}>
          <Day id={`day${coun[12]++}`} state={setexpEriences} />
          <Manth id={`manth${coun[13]++}`} state={setexpEriences} />
          <Yar id={`yar${coun[14]++}`} state={setexpEriences} />
          <span>{experiences[`day${coun[15]++}`]}</span>
          <span>{experiences[`manth${coun[16]++}`]}</span>
          <span>{experiences[`yar${coun[17]++}`]}</span>
          {coun[0]++}
          {coun[10]++}
        </DateQualifi>
        <DateQualifi forId={coun[18]++} lable={"تاريخ المغادرة"}>
          <Day id={`day2${coun[20]++}`} state={setexpEriences} />
          <Manth id={`manth2${coun[21]++}`} state={setexpEriences} />
          <Yar id={`yar2${coun[22]++}`} state={setexpEriences} />
          <span>{experiences[`day2${coun[23]++}`]}</span>
          <span>{experiences[`manth2${coun[24]++}`]}</span>
          <span>{experiences[`yar2${coun[25]++}`]}</span>
        </DateQualifi>
        <Upload
          id={`srcImg${coun[18]++}`}
          text={"شعار المنشأة"}
          p={"إختياري، يظهر شعار المنشأة في بعض القوالب وليس كلها."}
          setState={setexpEriences}
          srcImg={experiences[`srcImg${coun[19]++}`]}
        />
      </div>
    );
  };
  let [experienNumber, setExperNumber] = useState(
    getFormValues("experienNumber", false)
  );
  return (
    <UsePages
      state={experiences}
      naState={"experiences"}
      state2={experienNumber}
      naState2={"experienNumber"}
      setState2={setExperNumber}
      b1={"أضف خبرة جديدة"}
      b2={"حفظ الخبرات"}
      numbCol={coun[coun.length - 1]}>
      {experienNumber.map((ele, ind) => createexperiences(ind))}
    </UsePages>
  );
};

export default Experiences;
// Update 173
