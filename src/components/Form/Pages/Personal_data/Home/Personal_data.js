import React, { useState } from "react";
import style from "./Personal_data.module.css";
import Checkd from "./Checkd/Checkd";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import dataPersonal from "../../JSON_date/data_inputs.json";
import ParentInput from "./ParentInput/ParentInput";

const Inputs = () => {
  const selector = useSelector((state) => state.value);
  const [halth, setHalth] = useState(false);
  const [allData] = useState(dataPersonal);
  allData[10][1][1].nameRad[0].statis = selector[0];
  allData[10][1][1].nameRad[1].statis = selector[1];

  const [dataPersonals, setDataPersonal] = useState([]);

  const hendlerDataPersonal = (e) => {
    let idName = e.target.id;
    setDataPersonal((prev) => {
      return { ...prev, [idName]: e.target.value };
    });
  };
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const dindlerAction = () => dispatch({ type: dataPersonals });

  if (dataPersonals.length <= 0) {
    setDataPersonal(JSON.parse(window.localStorage.getItem("dataPersonal")));
  }

  return (
    <div className={style.parent}>
      <div className={style.box}>
        <ParentInput label={"اسمك"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            value={dataPersonals.name}
            id="name"
            type="text"
            placeholder="اسمك بالكامل..."
          />
        </ParentInput>
        <ParentInput label={"مسمى الوظيفة"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="position"
            value={dataPersonals.position}
            type="text"
            placeholder="مسمى الوظيفة"
          />
        </ParentInput>
        <ParentInput label={"نبذة بسيطة"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="overview"
            value={dataPersonals.overview}
            type="text"
            placeholder="نبذة بسيطة"
          />
        </ParentInput>
        <ParentInput label={"تاريخ الميلاد"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="date"
            value={dataPersonals.date}
            type="text"
            placeholder="مثال: 2000/9/23"
          />
        </ParentInput>
        <ParentInput label={"موقعك الشخصي"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="personal_website"
            value={dataPersonals.personal_website}
            type="text"
            placeholder="https://abdulazimaliabdulazim.github.io/Tamplat-3/"
          />
        </ParentInput>
        <ParentInput label={"المدينة"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="city"
            value={dataPersonals.city}
            type="text"
            placeholder="الرياض"
          />
        </ParentInput>
        <ParentInput label={"الدولة"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="country"
            value={dataPersonals.country}
            type="text"
            placeholder="مصر"
          />
        </ParentInput>
        <ParentInput label={"الجنسية"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="nationality"
            value={dataPersonals.nationality}
            type="text"
            placeholder="مصري"
          />
        </ParentInput>
        <ParentInput
          label={"معلومات أخرى"}
          para={
            "معلومات تخص بعض الدول العربية، قم بتعبئة ما يتناسب مع قوانين بلدك."
          }></ParentInput>
        <ParentInput label={"ايميلك"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="email"
            value={dataPersonals.email}
            type="text"
            placeholder="lybdh295@gmail.com"
          />
        </ParentInput>
        <ParentInput label={"رقم الجوال"}>
          <input
            onChange={(e) => hendlerDataPersonal(e)}
            id="phone_number"
            value={dataPersonals.phone_number}
            type="text"
            placeholder="01141629495"
          />
        </ParentInput>
        {allData[10][1].map((data, ind) => (
          <Checkd
            lab={data.labels}
            nameRad={data.nameRad.map((ele) => ele)}
            typeRad={data.typeRad}
            setHalth={setHalth}
            key={ind}
            id={data.id}
            onClick={(e) => console.log(e.target.id)}
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
        <Buttom
          onClick={() => {
            dindlerAction();
            window.localStorage.setItem(
              "dataPersonal",
              JSON.stringify(dataPersonals)
            );
          }}
          text={"حفظ البيانات الشخصية"}
        />
      </div>
    </div>
  );
};

export default Inputs;
//61
