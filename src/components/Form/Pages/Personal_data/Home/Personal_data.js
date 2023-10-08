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
import json from "../../JSON_date/data_inputs.json";
import { counterActions } from "../../../../../sliceStores/sliceTwo";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
  document.title = "البيانات الشخصية";
  const selector = useSelector((state) => state.value);
  const [halth, setHalth] = useState(false);
  const [personal, setPersonal] = useState(
    getFormValues("personal", true, false, 0, "", "", "", {
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
      srcImg1: "",
      address: "",
    })
  );

  const navigator = useNavigate();

  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch(counterActions.personal(personal));
  return (
    <div className={style.parent}>
      <div className={style.box}>
        {json[2].map((input, ind) => {
          return (
            <ParentInput key={ind} forId={input.id} label={input.label}>
              {input.id !== "" ? (
                <input
                  onChange={(e) => hendlerData(e, setPersonal)}
                  value={personal[input.id]}
                  id={input.id}
                  type="text"
                  placeholder={input.placeholder}
                />
              ) : (
                ""
              )}
            </ParentInput>
          );
        })}
        <ParentInput forId={"iam"} label={"نبذة بسيطة"}>
          <textarea
            onChange={(e) => hendlerData(e, setPersonal)}
            id="iam"
            value={personal.iam}
            placeholder="نبذة بسيطة"
            typeof="text"></textarea>
        </ParentInput>
        <Checkd forID={"six"} label={"الجنس"}>
          <label onClick={() => dispatch(counterActions.man())}>
            <input
              onChange={(e) => {
                hendlerData(e, setPersonal);
              }}
              value={"رجل"}
              id="six"
              type="radio"
              name="six"
            />
            رجل
            <div></div>
          </label>
          <label onClick={() => dispatch(counterActions.famil())}>
            <input
              onChange={(e) => {
                hendlerData(e, setPersonal);
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
                onChange={(e) => hendlerData(e, setPersonal)}
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
                onChange={(e) => hendlerData(e, setPersonal)}
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
                onChange={(e) => hendlerData(e, setPersonal)}
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
                onChange={(e) => hendlerData(e, setPersonal)}
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
                onChange={(e) => hendlerData(e, setPersonal)}
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
              onChange={(e) => hendlerData(e, setPersonal)}
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
          id={`srcImg1`}
          text={"الصورة الشخصية"}
          p={"الصوره يجب ان تكون بحجم 300*300 بكسل"}
          setState={setPersonal}
          srcImg={personal.srcImg1}
        />
        <hr />
        <Buttom
          onClick={() => {
            sendActionData(hindlerAction, "personal", personal);
            navigator("/dashboard/cvs/data/qualifications");
          }}
          text={"حفظ البيانات الشخصية"}
        />
      </div>
    </div>
  );
};

export default Inputs;
// Update 244
