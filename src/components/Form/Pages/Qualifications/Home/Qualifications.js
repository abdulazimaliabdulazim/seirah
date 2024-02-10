import React, { Fragment, useEffect, useState } from "react";
import style from "./Qualifications.module.css";
import DateQualifi from "../Home/DateQualifi/DateQualifi";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../../hendlerData/hendlerData";
import DateCopy, { Day, Manth, Yar } from "./DateQualifi/DateCopy";
import Json from "../../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../../UsePage/UsePages";
import Icons from "../../../../Icons/Icons";

// Handle Input
export const handleInputChange = (index, value, type, state, setState) => {
  // تحديث قيمة الحقل النصي للنموذج الخاص بالفهرس المعطى
  const updatedForms = [...state];
  updatedForms[index][type] = value;
  setState(updatedForms);
};
// Delete Item
export const handleDelete = (index, state, setState) => {
  // حذف النموذج بناءً على الفهرس المعطى
  const updatedForms = state.filter((form, i) => i !== index);
  setState(updatedForms);
};
export const handleSubmit = (state) => {
  // يمكنك هنا إجراء أي عمليات إضافية على البيانات قبل التخزين في localStorage
  console.log("تم تقديم النماذج:", state);

  // تحديث localStorage
  localStorage.setItem("formData", JSON.stringify(state));
};

const Qualifications = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  document.title = "المؤهلات العلمية";
  const [qualifications, setQualifications] = useState(
    getFormValues(
      targetSeirah !== null
        ? `qualifications${targetSeirah}`
        : "qualifications1"
    )
  );

  // New
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setForms(storedData);
    }
  }, []);

  const addForm = () => {
    // إضافة نموذج جديد
    const newForm = {
      education: "",
      specializat: "",
      esy: "",
      degree: "",
      day: "",
      manth: "",
      yar: "",
    };

    // تحديث الحالة لتضمين النموذج الجديد
    setForms([...forms, newForm]);
  };

  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones
          index={ind + 1}
          state1={qualifications}
          state2={qualificationsNumber}
        />
        <div className={style.qualificBox} id={ind} key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          {Json[3].map((input, ind) => {
            return (
              <ParentInput
                key={ind}
                forId={
                  input.id === "education"
                    ? `${input.id}${coun[11]++}`
                    : input.id === "specializat"
                    ? `${input.id}${coun[12]++}`
                    : `${input.id}${coun[13]++}`
                }
                label={input.label}
                paraghrap={input.paraghrap}>
                <input
                  onChange={(e) => hendlerData(e, setQualifications)}
                  id={
                    input.id === "education"
                      ? `${input.id}${coun[5]++}`
                      : input.id === "specializat"
                      ? `${input.id}${coun[6]++}`
                      : `${input.id}${coun[7]++}`
                  }
                  value={
                    input.id === "education"
                      ? qualifications[`${input.id}${coun[8]++}`]
                      : input.id === "specializat"
                      ? qualifications[`${input.id}${coun[9]++}`]
                      : qualifications[`${input.id}${coun[10]++}`]
                  }
                  type="text"
                  placeholder={input.label}
                />
              </ParentInput>
            );
          })}
          <ParentInput forId={`degree${coun[1]++}`} label={"الدرجة العلمية"}>
            <select
              id={`degree${coun[0]++}`}
              onChange={(e) => hendlerData(e, setQualifications)}
              value={qualifications[`degree${coun[2]++}`]}>
              {Json[8].map((option, ind) => {
                return <option key={ind}>{option}</option>;
              })}
            </select>
          </ParentInput>
          <DateQualifi forId={coun[1]++} lable={"تاريخ التخرج"}>
            <Day id={`day${coun[3]++}`} state={setQualifications} />
            <Manth id={`manth${coun[4]++}`} state={setQualifications} />
            <Yar id={`yar${coun[14]++}`} state={setQualifications} />
            <span>{qualifications[`day${coun[15]++}`]}</span>
            <span>{qualifications[`manth${coun[16]++}`]}</span>
            <span>{qualifications[`yar${coun[17]++}`]}</span>
            {coun[0]++}
            {coun[2]++}
          </DateQualifi>
        </div>
      </div>
    );
  };
  const [qualificationsNumber, setQualificationsNumber] = useState(
    getFormValues(
      targetSeirah !== null
        ? `qualificationsNumber${targetSeirah}`
        : "qualificationsNumber1"
    )
  );
  console.log(forms);
  return (
    <Fragment>
      {forms.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <div className={style.controlBut}>
            <div
              onClick={() => handleDelete(index, forms, setForms)}
              className={style.icon}
              type="button">
              <Icons
                viewBox={"0 0 448 512"}
                path={
                  "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                }
              />
            </div>
            <div className={style.icon} draggable={true} type="button">
              <Icons
                viewBox={"0 0 192 512"}
                path={
                  "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"
                }
              />
            </div>
          </div>
          <div className={style.qualificBox} id={index} key={index}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput
              forId="education"
              label="الجهة التعليمية"
              paraghrap="اسم الجامعة أو الجهة التعليمية التي حصلت على الشهادة منها.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "education",
                    forms,
                    setForms
                  )
                }
                id="education"
                value={form.education}
                type="text"
                placeholder="الجهة التعليمية"
              />
            </ParentInput>
            <ParentInput
              forId="specializat"
              label="التخصص"
              paraghrap="المجال أو التخصص الذي درسته.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "specializat",
                    forms,
                    setForms
                  )
                }
                id="specializat"
                value={form.specializat}
                type="text"
                placeholder="التخصص"
              />
            </ParentInput>
            <ParentInput
              label="وصف بسيط"
              paraghrap="اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)">
              <input
                onChange={(e) => {
                  handleInputChange(
                    index,
                    e.target.value,
                    "esy",
                    forms,
                    setForms
                  );
                  console.log(e.target.value, index);
                }}
                id="esy"
                value={form.esy}
                type="text"
                placeholder="وصف بسيط"
              />
            </ParentInput>

            <ParentInput forId="degree" label="الدرجة العلمية">
              <select
                id="degree"
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "degree",
                    forms,
                    setForms
                  )
                }
                value={form.degree}>
                {Json[8].map((option, ind) => {
                  return <option key={ind}>{option}</option>;
                })}
              </select>
            </ParentInput>

            <ParentInput
              forId={"coun[1]++"}
              label="تاريخ التخرج"
              hedinSpan={false}>
              <DateCopy index={index} forms={forms} setForms={setForms} />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        handleSubmit={handleSubmit}
        addForm={addForm}
        state={forms}
        state2={qualificationsNumber}
        setState2={setQualificationsNumber}
        b1={"أضف مؤهل جديد"}
        b2={"حفظ المؤهلات"}>
        {qualificationsNumber.map((ele, ind) => createqualifi(ind))}
      </UsePages>
    </Fragment>
  );
};

export default Qualifications;
