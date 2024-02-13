import React, { useEffect, useState } from "react";
import style from "./Personal_data.module.css";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import ParentInput from "./ParentInput/ParentInput";
import Checkd from "./Checkd/Checkd";
import { messageSave, progress } from "../../hendlerData/hendlerData";
import json from "../../JSON_date/data_inputs.json";
import { counterActions } from "../../../../../sliceStores/sliceTwo";
import { useNavigate } from "react-router-dom";
import {
  getTitlePage,
  handleInputChange,
  handleSubmit,
} from "../../Qualifications/Home/Qualifications";

const Inputs = ({ getState }) => {
  getTitlePage();
  // const targetSeirah = window.localStorage.getItem("targetSeirah");
  const selector = useSelector((state) => state.value);
  const [halth, setHalth] = useState(false);

  const [personal, setPersonal] = useState([]);
  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("personal"));
    if (storedData) {
      setPersonal(storedData);
    }
  }, []);

  const addForm = () => {
    // إضافة نموذج جديد
    const newForm = {
      name: "",
      position: "",
      email: "",
      phone_number: "",
      date: "",
      personal_website: "",
      country: "",
      nationality: "",
      iam: "",
      progress: "",
      image: "",
    };
    // تحديث الحالة لتضمين النموذج الجديد
    setPersonal([newForm]);
  };
  // Set Value Progress
  progress(personal);

  useEffect(() => {
    getState(personal);
  }, [personal, getState]);

  const navigator = useNavigate();
  // Send Personals Data In Story
  const dispatch = useDispatch();
  return (
    <div className={style.parent}>
      <div className={style.box}>
        {json[2].map((input, ind) => {
          return (
            <ParentInput
              hedinSpan={input.hedinSpan}
              paraghrap={input.apr}
              key={ind}
              forId={input.id}
              label={input.label}>
              {input.id !== "" ? (
                <input
                  onChange={(e) =>
                    handleInputChange(
                      0,
                      e.target.value,
                      input.id,
                      personal,
                      setPersonal
                    )
                  }
                  value={""}
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
        <ParentInput hedinSpan={true} forId="iam" label="نبذة بسيطة">
          <textarea
            onChange={(e) =>
              handleInputChange(0, e.target.value, "iam", personal, setPersonal)
            }
            id="iam"
            value={"personal[0].iam"}
            placeholder="نبذة بسيطة"
            typeof="text"
          />
        </ParentInput>
        <Checkd forID="six" label="الجنس">
          <label onClick={() => dispatch(counterActions.man())}>
            <input
              onChange={(e) => {
                handleInputChange(
                  0,
                  e.target.value,
                  "six",
                  personal,
                  setPersonal
                );
              }}
              value="رجل"
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
                handleInputChange(
                  0,
                  e.target.value,
                  "six",
                  personal,
                  setPersonal
                );
              }}
              value="أنثى"
              id="six"
              type="radio"
              name="six"
            />
            أنثى
            <div></div>
          </label>
        </Checkd>
        <Checkd forID="stits" label="الحالة الزوجية">
          <label>
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "stits",
                  personal,
                  setPersonal
                )
              }
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
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "stits",
                  personal,
                  setPersonal
                )
              }
              id="stits"
              type="radio"
              name="stits"
              value={selector[1]}
            />
            {selector[1]}
            <div></div>
          </label>
        </Checkd>
        <Checkd forID="statis_health" label="♿️ الحالة الصحية">
          <label onClick={() => setHalth(false)}>
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "statis_health",
                  personal,
                  setPersonal
                )
              }
              id="statis_health"
              type="radio"
              name="statis_health"
              value="سليم"
            />
            سليم
            <div></div>
          </label>
          <label onClick={() => setHalth(true)}>
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "statis_health",
                  personal,
                  setPersonal
                )
              }
              id="statis_health"
              type="radio"
              name="statis_health"
              value="لدي حالة"
            />
            لدي حالة
            <div></div>
          </label>
        </Checkd>
        {halth && (
          <Checkd forID="health" label="نوع الحالة الصحية">
            <label>
              <input
                onChange={(e) =>
                  handleInputChange(
                    0,
                    e.target.value,
                    "health",
                    personal,
                    setPersonal
                  )
                }
                value="إعاقة حركية"
                id="health"
                type="radio"
                name="health"
              />
              إعاقة حركية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) =>
                  handleInputChange(
                    0,
                    e.target.value,
                    "health",
                    personal,
                    setPersonal
                  )
                }
                value="إعاقة سمعية"
                id="health"
                type="radio"
                name="health"
              />
              إعاقة سمعية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) =>
                  handleInputChange(
                    0,
                    e.target.value,
                    "health",
                    personal,
                    setPersonal
                  )
                }
                value="إعاقة بصرية"
                id="health"
                type="radio"
                name="health"
              />
              إعاقة بصرية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) =>
                  handleInputChange(
                    0,
                    e.target.value,
                    "health",
                    personal,
                    setPersonal
                  )
                }
                value="إعاقة ذهنية"
                id="health"
                type="radio"
                name="health"
              />
              إعاقة ذهنية
              <div></div>
            </label>
            <label>
              <input
                onChange={(e) =>
                  handleInputChange(
                    0,
                    e.target.value,
                    "health",
                    personal,
                    setPersonal
                  )
                }
                value="أخرى"
                id="health"
                type="radio"
                name="health"
              />
              أخرى
              <div></div>
            </label>
          </Checkd>
        )}
        <Checkd forID="service" label="الخدمة العسكرية">
          <label>
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "service",
                  personal,
                  setPersonal
                )
              }
              id="service"
              type="radio"
              name="service"
              value="الخدمة العسكرية: تم"
            />
            نعم
            <div></div>
          </label>
          <label>
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "service",
                  personal,
                  setPersonal
                )
              }
              id="service"
              type="radio"
              name="service"
              value="الخدمة العسكرية: لا"
            />
            لا
          </label>
        </Checkd>
        <hr />
        <Upload
          text="الصورة الشخصية"
          p="الصوره يجب ان تكون بحجم 300*300 بكسل"
          state={personal}
          setState={setPersonal}
          index={0}
        />
        <hr />
        <Buttom
          onClick={() => {
            addForm();
            handleSubmit(personal, "personal");

            // sendActionData(
            //   targetSeirah !== null ? `personal${targetSeirah}` : "personal1",
            //   personal
            // );
            navigator("/dashboard/cvs/data/qualifications");
            messageSave("تم حفظ البيانات الشخصية");
          }}
          text="حفظ البيانات الشخصية"
        />
      </div>
    </div>
  );
};

export default Inputs;
