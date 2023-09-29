import React, { useState } from "react";
import style from "./Personal_data.module.css";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import ParentInput from "./ParentInput/ParentInput";
import Checkd from "./Checkd/Checkd";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../../hendlerData/hendlerData";

const Inputs = () => {
  document.title = "البيانات الشخصية";
  const selector = useSelector((state) => state.value);
  const [halth, setHalth] = useState(false);
  const [dataPersonal, setDataPersonal] = useState(
    getFormValues("dataPersonal", true, false, {
      city: "",
      country: "",
      date: "",
      email: "",
      name: "",
      personal_website: "",
      nationality: "",
      overview: "",
      phone_number: "",
      position: "",
      service: "",
      six: "",
      tatis_health: "",
      stits: "",
      thamnal: "",
    })
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch({ type: { dataPersonal: dataPersonal } });

  return (
    <div className={style.parent}>
      <div className={style.box}>
        <ParentInput forId={"name"} label={"اسمك"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            value={dataPersonal.name}
            id="name"
            type="text"
            placeholder="اسمك بالكامل..."
          />
        </ParentInput>
        <ParentInput forId={"position"} label={"مسمى الوظيفة"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="position"
            value={dataPersonal.position}
            type="text"
            placeholder="مسمى الوظيفة"
          />
        </ParentInput>
        <ParentInput forId={"overview"} label={"نبذة بسيطة"}>
          <textarea
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="iam"
            value={dataPersonal.iam}
            placeholder="نبذة بسيطة"
            typeof="text"></textarea>
        </ParentInput>
        <ParentInput forId={"date"} label={"تاريخ الميلاد"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="date"
            value={dataPersonal.date}
            type="text"
            placeholder="مثال: 2000/9/23"
          />
        </ParentInput>
        <ParentInput forId={"personal_website"} label={"موقعك الشخصي"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="personal_website"
            value={dataPersonal.personal_website}
            type="text"
            placeholder="https://abdulazimaliabdulazim.github.io/Tamplat-3/"
          />
        </ParentInput>
        <ParentInput forId={"city"} label={"المدينة"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="city"
            value={dataPersonal.city}
            type="text"
            placeholder="الرياض"
          />
        </ParentInput>
        <ParentInput forId={"country"} label={"الدولة"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="country"
            value={dataPersonal.country}
            type="text"
            placeholder="مصر"
          />
        </ParentInput>
        <ParentInput forId={"nationality"} label={"الجنسية"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="nationality"
            value={dataPersonal.nationality}
            type="text"
            placeholder="مصري"
          />
        </ParentInput>
        <ParentInput
          label={"معلومات أخرى"}
          para={
            "معلومات تخص بعض الدول العربية، قم بتعبئة ما يتناسب مع قوانين بلدك."
          }></ParentInput>
        <ParentInput forId={"email"} label={"ايميلك"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="email"
            value={dataPersonal.email}
            type="text"
            placeholder="lybdh295@gmail.com"
          />
        </ParentInput>
        <ParentInput forId={"phone_number"} label={"رقم الجوال"}>
          <input
            onChange={(e) => hendlerData(e, setDataPersonal)}
            id="phone_number"
            value={dataPersonal.phone_number}
            type="text"
            placeholder="01141629495"
          />
        </ParentInput>
        <Checkd forID={"six"} label={"الجنس"}>
          <label onClick={() => dispatch({ type: "رجل" })}>
            <input
              onChange={(e) => {
                hendlerData(e, setDataPersonal);
              }}
              value={"رجل"}
              id="six"
              type="radio"
              name="six"
            />
            رجل
            <div></div>
          </label>
          <label onClick={() => dispatch({ type: "أنثى" })}>
            <input
              onChange={(e) => {
                hendlerData(e, setDataPersonal);
              }}
              value={"أنثى"}
              id="six"
              type="radio"
              name="six"
            />
            أنثى
            <div></div>
          </label>
        </Checkd>
        <Checkd forID={"stits"} label={"الحالة الزوجية"}>
          <label>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="stits"
              type="radio"
              name="stits"
              value={selector[0]}
            />
            {selector[0]}
            <div></div>
          </label>
          <label>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="stits"
              type="radio"
              name="stits"
              value={selector[1]}
            />
            {selector[1]}
            <div></div>
          </label>
        </Checkd>
        <Checkd forID={"statis_health"} label={"♿️ الحالة الصحية"}>
          <label onClick={() => setHalth(false)}>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="statis_health"
              type="radio"
              name="statis_health"
              value={"سليم"}
            />
            سليم
            <div></div>
          </label>
          <label onClick={() => setHalth(true)}>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="statis_health"
              type="radio"
              name="statis_health"
              value={"لدي حالة"}
            />
            لدي حالة
            <div></div>
          </label>
        </Checkd>
        {halth && (
          <Checkd forID={"health"} label={"نوع الحالة الصحية"}>
            <label>
              <input
                onChange={(e) => hendlerData(e, setDataPersonal)}
                value={"إعاقة حركية"}
                id="health"
                type="radio"
                name="health"
              />
              إعاقة حركية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) => hendlerData(e, setDataPersonal)}
                value={"إعاقة سمعية"}
                id="health"
                type="radio"
                name="health"
              />
              إعاقة سمعية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) => hendlerData(e, setDataPersonal)}
                value={"إعاقة بصرية"}
                id="health"
                type="radio"
                name="health"
              />
              إعاقة بصرية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) => hendlerData(e, setDataPersonal)}
                value={"إعاقة ذهنية"}
                id="health"
                type="radio"
                name="health"
              />
              إعاقة ذهنية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) => hendlerData(e, setDataPersonal)}
                value={"أخرى"}
                id="health"
                type="radio"
                name="health"
              />
              أخرى
              <div></div>
            </label>
          </Checkd>
        )}
        <Checkd forID={"service"} label={"الخدمة العسكرية"}>
          <label>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="service"
              type="radio"
              name="service"
              value={"الخدمة العسكرية: تم"}
            />
            نعم
            <div></div>
          </label>
          <label>
            <input
              onChange={(e) => hendlerData(e, setDataPersonal)}
              id="service"
              type="radio"
              name="service"
              value={"الخدمة العسكرية: لا"}
            />
            لا
            <div></div>
          </label>
        </Checkd>
        <hr />
        <Upload
          text={"الصورة الشخصية"}
          p={"الصوره يجب ان تكون بحجم 300*300 بكسل"}></Upload>
        <hr />
        <Buttom
          onClick={() => {
            sendActionData(hindlerAction, "dataPersonal", dataPersonal);
          }}
          text={"حفظ البيانات الشخصية"}
        />
      </div>
    </div>
  );
};

export default Inputs;
// Update 326
