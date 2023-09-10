import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const Hobbies = () => {
  return (
    <Qualifications
      hedinDate={false}
      dataJson={dataJson[8]}
      addBtu={" أضف هواية جديدة"}
      saveBut={"حفظ الهوايات"}
    />
  );
};

export default Hobbies;
