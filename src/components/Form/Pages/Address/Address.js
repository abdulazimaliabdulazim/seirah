import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const Address = () => {
  return (
    <Qualifications
      dataJson={dataJson[9]}
      hedinDate={false}
      addBtu={"أضهار العنوان"}
      saveBut={"حفظ العنوان الوطني"}
    />
  );
};

export default Address;
