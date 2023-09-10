import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const Return = () => {
  return (
    <Qualifications
      dataJson={dataJson[5]}
      addBtu={"أضف شخص جديد"}
      saveBut={"حفظ المرجع"}
    />
  );
};

export default Return;
