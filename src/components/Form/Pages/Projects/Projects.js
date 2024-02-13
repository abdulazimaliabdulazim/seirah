import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import { Day, Manth, Yar } from "../Qualifications/Home/DateQualifi/DateCopy";
import json from "../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../UsePage/UsePages";

const Projects = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  const [projects, setProjects] = useState(
    getFormValues(
      targetSeirah !== null ? `projects${targetSeirah}` : "projects1"
    )
  );
  const createqualifi = (ind) => {
    return (
      <div
        onDragStart={(e) => dargItem(e.target)}
        onDragEnd={(e) => dargEnd(e.target)}
        onDragOver={(e) => dargOver(e.target)}
        draggable
        key={ind}
        className={style.parentPages}>
        <Icones index={ind + 1} state1={projects} state2={projectsNumber} />
        <div className={style.qualificBox} key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          {json[6].map((input, ind) => {
            return (
              <ParentInput
                key={ind}
                forId={
                  input.id === "name"
                    ? `${input.id}${coun[1]++}`
                    : input.id === "link"
                    ? `${input.id}${coun[2]++}`
                    : `${input.id}${coun[3]++}`
                }
                label={input.label}
                paraghrap={input.paraghrap}>
                <input
                  onChange={(e) => hendlerData(e, setProjects)}
                  id={
                    input.id === "name"
                      ? `${input.id}${coun[4]++}`
                      : input.id === "link"
                      ? `${input.id}${coun[5]++}`
                      : `${input.id}${coun[6]++}`
                  }
                  type="text"
                  placeholder={input.label}
                  value={
                    input.id === "name"
                      ? projects[`${input.id}${coun[7]++}`]
                      : input.id === "link"
                      ? projects[`${input.id}${coun[8]++}`]
                      : projects[`${input.id}${coun[9]++}`]
                  }
                />
              </ParentInput>
            );
          })}
          <DateQualifi forId={coun[13]++} lable={"تاريخ الإنجاز"}>
            <Day id={`day${coun[14]++}`} state={setProjects} />
            <Manth id={`manth${coun[15]++}`} state={setProjects} />
            <Yar id={`yar${coun[16]++}`} state={setProjects} />
            <span>{projects[`day${coun[10]++}`]}</span>
            <span>{projects[`manth${coun[11]++}`]}</span>
            <span>{projects[`yar${coun[12]++}`]}</span>
          </DateQualifi>
        </div>
      </div>
    );
  };
  let [projectsNumber, setProjectsNumber] = useState(
    getFormValues(
      targetSeirah !== null
        ? `projectsNumber${targetSeirah}`
        : "projectsNumber1"
    )
  );
  return (
    <UsePages
      state={projects}
      state2={projectsNumber}
      setState2={setProjectsNumber}
      b1={"أضف مشروع جديد"}
      b2={"حفظ المشروعات"}>
      {projectsNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Projects;
