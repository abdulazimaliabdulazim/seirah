import React, { useState } from "react";
import style from "./Personal_data.module.css";
import ColInput from "./ColInput/ColInput";
import Checkd from "./Checkd/Checkd";
import { useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import dataPersonal from "../../JSON_date/data_inputs.json";

const Inputs = () => {
  const selector = useSelector((state) => state.value);
  const [halth, setHalth] = useState(false);
  const [allData] = useState(dataPersonal);
  allData[10][1][1].nameRad[0].statis = selector[0];
  allData[10][1][1].nameRad[1].statis = selector[1];

  return (
    <div className={style.parent}>
      <div className={style.box}>
        {allData[10][0].map((data, ind) => (
          <ColInput
            label={data.labels}
            plac={data.plac}
            yse={data.yse}
            hedingInp={data.hedingInp}
            paraghraph={data.paraghraph}
            key={ind}></ColInput>
        ))}
        {allData[10][1].map((data, ind) => (
          <Checkd
            lab={data.labels}
            nameRad={data.nameRad.map((ele) => ele)}
            typeRad={data.typeRad}
            setHalth={setHalth}
            key={ind}
          />
        ))}
        <hr />
        {halth &&
          allData[10][2].map((data, ind) => (
            <Checkd
              lab={data.labels}
              nameRad={data.nameRad.map((ele) => ele)}
              typeRad={data.typeRad}
              setHalth={setHalth}
              key={ind}
            />
          ))}
        <hr />
        <Upload
          text={"الصورة الشخصية"}
          p={"الصوره يجب ان تكون بحجم 300*300 بكسل"}
        />
        <hr />
        <Buttom text={"حفظ البيانات الشخصية"} />
      </div>
    </div>
  );
};

export default Inputs;
