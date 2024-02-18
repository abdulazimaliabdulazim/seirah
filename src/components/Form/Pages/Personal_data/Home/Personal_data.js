import React, { useEffect, useState } from "react";
import style from "./Personal_data.module.css";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload_img/Upload";
import Buttom from "../../../Buttom/Buttom";
import ParentInput from "./ParentInput/ParentInput";
import Checkd from "./Checkd/Checkd";
import {
  messageSave,
  progress,
  sendActionData,
} from "../../hendlerData/hendlerData";
import { useNavigate } from "react-router-dom";
import {
  getTitlePage,
  handleInputChange,
  handleSubmit,
} from "../../Qualifications/Home/Qualifications";
import { storePagesActions } from "../../../../../sliceStores/sliceTwo";

const Inputs = ({ getState }) => {
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
  getTitlePage();
  // const targetSeirah = window.localStorage.getItem("targetSeirah");
  const selector = useSelector((state) => state.value);
  // const storePersonal = useSelector((state) => state.personal);
  // console.log(storePersonal);
  const [halth, setHalth] = useState(false);
  const [personal, setPersonal] = useState([newForm]);
  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("personal"));
    if (storedData) {
      setPersonal(storedData);
    }
  }, []);
  // Set Value Progress
  // progress(personal);

  useEffect(() => {
    getState(personal);
  }, [personal, getState]);

  const navigator = useNavigate();
  // Send Personals Data In Story
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem("yes", personal[0].position);
    dispatch(storePagesActions.getPersonalDataOnload(personal));
  }, [personal, dispatch]);

  const one = JSON.parse(window.localStorage.getItem("one"));
  console.log(one[0].name);
  const position = window.localStorage.getItem("yes");
  console.log(position);

  return personal.map((form, index) => {
    return (
      <div key={index} className={style.parent}>
        <div className={style.box}>
          <ParentInput forId="name" label="اسمك">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "name",
                  personal,
                  setPersonal
                )
              }
              value={form.name}
              id="name"
              type="text"
              placeholder="اسمك بالكامل..."
            />
          </ParentInput>
          <ParentInput forId="position" label="مسمى الوظيفة">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "position",
                  personal,
                  setPersonal
                )
              }
              value={form.position}
              id="position"
              type="text"
              placeholder="مسمى الوظيفة"
            />
          </ParentInput>
          <ParentInput forId="email" label="ايميلك">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "email",
                  personal,
                  setPersonal
                )
              }
              value={form.email}
              id="email"
              type="text"
              placeholder="lybdh295@gmail.com"
            />
          </ParentInput>
          <ParentInput forId="phone_number" label="رقم الجوال">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "phone_number",
                  personal,
                  setPersonal
                )
              }
              value={form.phone_number}
              id="phone_number"
              type="number"
              placeholder="01141629495"
            />
          </ParentInput>
          <ParentInput forId="date" label="تاريخ الميلاد">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "date",
                  personal,
                  setPersonal
                )
              }
              value={form.date}
              id="date"
              type="text"
              placeholder="مثال: 2000/9/23"
            />
          </ParentInput>
          <ParentInput forId="personal_website" label="موقعك الشخصي">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "personal_website",
                  personal,
                  setPersonal
                )
              }
              value={form.personal_website}
              id="personal_website"
              type="text"
              placeholder="https://abdulazimaliabdulazim.github.io/Tamplat-3/"
            />
          </ParentInput>
          <ParentInput forId="country" label="الدولة">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "country",
                  personal,
                  setPersonal
                )
              }
              value={form.country}
              id="country"
              type="text"
              placeholder="مصر"
            />
          </ParentInput>
          <ParentInput forId="nationality" label="الجنسية">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "nationality",
                  personal,
                  setPersonal
                )
              }
              value={form.nationality}
              id="nationality"
              type="text"
              placeholder="مصري"
            />
          </ParentInput>
          <ParentInput
            paraghrap="معلومات تخص بعض الدول العربية، قم بتعبئة ما يتناسب مع قوانين بلدك."
            label="معلومات أخرى"
            hedinSpan={false}
          />
          <ParentInput hedinSpan={true} forId="iam" label="نبذة بسيطة">
            <textarea
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "iam",
                  personal,
                  setPersonal
                )
              }
              id="iam"
              value={form.iam}
              placeholder="نبذة بسيطة"
              typeof="text"
            />
          </ParentInput>

          <Checkd forID="six" label="الجنس">
            <label>
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
            <label>
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
                value={"selector[0]"}
              />
              {"selector[0]"}
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
                value={"selector[1]"}
              />
              {"selector[1]"}
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
              handleSubmit(personal, "personal");
              sendActionData();
              messageSave("تم حفظ البيانات الشخصية");
              navigator("/dashboard/cvs/data/qualifications");
            }}
            text="حفظ البيانات الشخصية"
          />
        </div>
      </div>
    );
  });
};

export default Inputs;
