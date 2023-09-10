import React from "react";
import Qualifications from "../Qualifications/Home/Qualifications";
import dataJson from "../JSON_date/data_inputs.json";
import Checkd from "../Personal_data/Home/Checkd/Checkd";

const Languages = () => {
  return (
    <Qualifications
      hedinDate={false}
      dataJson={dataJson[6]}
      addBtu={"أضف لغة جديدة"}
      saveBut={"حفظ اللغات"}>
      <Checkd
        lab={"مستواك بها"}
        nameRad={[
          { statis: "مبتدئ" },
          { statis: "محدود" },
          { statis: "إجادة تامة في حدود العمل" },
          { statis: "إجادة كاملة" },
          { statis: "اللغة الأم" },
        ]}
        typeRad={"stits"}
      />
    </Qualifications>
  );
};

export default Languages;
