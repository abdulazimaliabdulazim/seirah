import React, { useState } from "react";
import style from "./Personal_data.module.css";
import ColInput from "./ColInput/ColInput";
import Checkd from "./Checkd/Checkd";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import dataPersonal from "../../JSON_date/data_inputs.json";
import Spans from "./Spans/Spans";

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

  const dataPersonalsInStory = useSelector((state) => state.personalsData);
  console.log(dataPersonalsInStory.name);

  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.colInput}>
          <label>اسمك</label>
          <div className={style.detulsInput}>
            <Spans />
            <input
              value={dataPersonalsInStory.name}
              onChange={(e) => hendlerDataPersonal(e)}
              id="name"
              type="text"
              placeholder="اسمك بالكامل..."
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>مسمى الوظيفة</label>
          <div className={style.detulsInput}>
            <Spans />
            <input
              value={dataPersonalsInStory.position}
              onChange={(e) => hendlerDataPersonal(e)}
              id="position"
              type="text"
              placeholder="مسمى الوظيفة"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>نبذة بسيطة</label>
          <div className={style.detulsInput}>
            <Spans />
            <input
              value={dataPersonalsInStory.overview}
              onChange={(e) => hendlerDataPersonal(e)}
              id="overview"
              type="text"
              placeholder="نبذة بسيطة"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>تاريخ الميلاد</label>
          <div className={style.detulsInput}>
            <Spans />
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="date"
              type="text"
              placeholder="مثال: 2000/9/23"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>موقعك الشخصي</label>
          <div className={style.detulsInput}>
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="personal_website"
              type="text"
              placeholder="https://abdulazimaliabdulazim.github.io/Tamplat-3/"
            />
            <p>
              إذا كان لديك مدونة أو موقع شخصي لعرض أعمالك على الإنترنت قد يكون
              من المفيد وضعه بسيرتك للتعرف عليك أكثر.
            </p>
          </div>
        </div>
        <div className={style.colInput}>
          <label>المدينة</label>
          <div className={style.detulsInput}>
            <Spans />
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="city"
              type="text"
              placeholder="الرياض"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>الدولة</label>
          <div className={style.detulsInput}>
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="country"
              type="text"
              placeholder="مصر"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>الجنسية</label>
          <div className={style.detulsInput}>
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="nationality"
              type="text"
              placeholder="مصري"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>معلومات أخرى</label>
          <div className={style.detulsInput}>
            <p>
              معلومات تخص بعض الدول العربية، قم بتعبئة ما يتناسب مع قوانين بلدك.
            </p>
          </div>
        </div>
        <div className={style.colInput}>
          <label>ايميلك</label>
          <div className={style.detulsInput}>
            <input
              onChange={(e) => hendlerDataPersonal(e)}
              id="email"
              type="text"
              placeholder="lybdh295@gmail.com"
            />
          </div>
        </div>
        <div className={style.colInput}>
          <label>رقم الجوال</label>
          <div
            onChange={(e) => hendlerDataPersonal(e)}
            id="phone_number"
            className={style.detulsInput}>
            <input type="text" placeholder="01141629495" />
          </div>
        </div>
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
        <Buttom onClick={dindlerAction} text={"حفظ البيانات الشخصية"} />
      </div>
    </div>
  );
};

export default Inputs;
//61
