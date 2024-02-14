import React, { Fragment, useEffect, useState } from "react";
import style from "./Qualifications.module.css";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import DateCopy from "./DateQualifi/DateCopy";
import Json from "../../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../../UsePage/UsePages";
import urlTitle from "../../JSON_date/data_inputs.json";

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
export const handleSubmit = (state, nameData) => {
  // يمكنك هنا إجراء أي عمليات إضافية على البيانات قبل التخزين في localStorage
  console.log("تم تقديم النماذج:", state);
  // تحديث localStorage
  localStorage.setItem(nameData, JSON.stringify(state));
};

// Get Title In Local Storge (Page)
export const getTitlePage = () => {
  urlTitle[0].map((titleUrl) =>
    titleUrl.url ===
    window.location.href.split("/")[window.location.href.split("/").length - 1]
      ? (document.title = titleUrl.name)
      : ""
  );
};

const Qualifications = () => {
  const [qualifications, setQualifications] = useState([]);
  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("qualifications"));
    if (storedData) {
      setQualifications(storedData);
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
    setQualifications([...qualifications, newForm]);
  };

  return (
    <Fragment>
      {qualifications.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <Icones
            index={index}
            state={qualifications}
            setState={setQualifications}
          />
          <div className={style.qualificBox} id={index} key={index}>
            <span className={style.numberQuali}>{index + 1}</span>

            <ParentInput
              forId={`education${index}`}
              label="الجهة التعليمية"
              paraghrap="اسم الجامعة أو الجهة التعليمية التي حصلت على الشهادة منها.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "education",
                    qualifications,
                    setQualifications
                  )
                }
                value={form.education}
                id={`education${index}`}
                type="text"
                placeholder="الجهة التعليمية"
              />
            </ParentInput>

            <ParentInput
              forId={`specializat${index}`}
              label="التخصص"
              paraghrap="المجال أو التخصص الذي درسته.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "specializat",
                    qualifications,
                    setQualifications
                  )
                }
                value={form.specializat}
                id={`specializat${index}`}
                type="text"
                placeholder="التخصص"
              />
            </ParentInput>

            <ParentInput
              forId={`esy${index}`}
              label="وصف بسيط"
              paraghrap="اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)">
              <input
                onChange={(e) => {
                  handleInputChange(
                    index,
                    e.target.value,
                    "esy",
                    qualifications,
                    setQualifications
                  );
                }}
                value={form.esy}
                id={`esy${index}`}
                type="text"
                placeholder="وصف بسيط"
              />
            </ParentInput>

            <ParentInput forId={`degree${index}`} label="الدرجة العلمية">
              <select
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "degree",
                    qualifications,
                    setQualifications
                  )
                }
                value={form.degree}
                id={`degree${index}`}>
                {Json[8].map((option, ind) => {
                  return <option key={ind}>{option}</option>;
                })}
              </select>
            </ParentInput>

            <ParentInput label="تاريخ التخرج" hedinSpan={false}>
              <DateCopy
                index={index}
                stateDate={qualifications}
                setStateDate={setQualifications}
              />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        addForm={addForm}
        state={qualifications}
        nameData="qualifications"
        b1="أضف مؤهل جديد"
        b2="حفظ المؤهلات"
      />
    </Fragment>
  );
};

export default Qualifications;
