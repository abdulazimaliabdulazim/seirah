import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";
import Checkd from "../Personal_data/Home/Checkd/Checkd";

const Skils = () => {
  return (
    <Qualifications
      dataJson={dataJson[3]}
      addBtu={"أضف مهارة جديدة"}
      saveBut={"حفظ المهارات"}
      hedinDate={false}>
      <Checkd
        lab={"مستواك بها"}
        nameRad={[
          { statis: "مبتدئ" },
          { statis: "محدود" },
          { statis: "جيّد" },
          { statis: "متمكن" },
          { statis: "متخصص" },
        ]}
        typeRad={"stits"}
      />
    </Qualifications>
  );
};

export default Skils;
