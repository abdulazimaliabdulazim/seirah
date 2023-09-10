import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";
import Upload from "../Personal_data/Home/Upload_img/Upload";

const Experiences = () => {
  return (
    <Qualifications
      date={"تاريخ التخرج"}
      dataJson={dataJson[1]}
      addBtu={"أضف خبرة جديدة"}
      saveBut={"حفظ الخبرات"}>
      <Upload
        text={"شعار المنشأة"}
        p={"إختياري، يظهر شعار المنشأة في بعض القوالب وليس كلها."}
      />
    </Qualifications>
  );
};

export default Experiences;
