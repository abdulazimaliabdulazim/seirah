import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const Coursess = () => {
  return (
    <Qualifications
      date={"تاريخها"}
      dataJson={dataJson[2]}
      addBtu={"أضف دورة جديدة"}
      saveBut={"حفظ الدورات"}
    />
  );
};

export default Coursess;
//16
