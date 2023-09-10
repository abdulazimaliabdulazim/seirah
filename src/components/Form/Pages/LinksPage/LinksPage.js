import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";

const LinksPage = () => {
  return (
    <Qualifications
      hedinDate={false}
      dataJson={dataJson[7]}
      addBtu={"أضف رابط جديد"}
      saveBut={"حفظ الروابط"}
    />
  );
};

export default LinksPage;
