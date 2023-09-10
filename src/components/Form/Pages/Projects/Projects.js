import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const Projects = () => {
  return (
    <Qualifications
      date={"تاريخ الإنجاز"}
      dataJson={dataJson[4]}
      addBtu={"أضف مشروع جديد"}
      saveBut={"حفظ الإنجازات"}
    />
  );
};

export default Projects;
