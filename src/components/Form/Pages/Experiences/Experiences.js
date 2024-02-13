import React, { Fragment, useEffect, useState } from "react";
import Upload from "../Personal_data/Home/Upload_img/Upload";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import DateCopy, {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/DateCopy";
import Json from "../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../UsePage/UsePages";
import {
  handleInputChange,
  handleSubmit,
} from "../Qualifications/Home/Qualifications";

const Experiences = () => {
  const [experiences, setexpEriences] = useState([]);

  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("experiences"));
    if (storedData) {
      setexpEriences(storedData);
    }
  }, []);

  const addForm = () => {
    // إضافة نموذج جديد
    const newForm = {
      job: "",
      jobTitle: "",
      esy: "",
      image: "",
    };
    // تحديث الحالة لتضمين النموذج الجديد
    setexpEriences([...experiences, newForm]);
  };
  console.log(experiences);
  return (
    <Fragment>
      {experiences.map((form, ind) => (
        <div key={ind} className={style.parentPages}>
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}
            key={ind}>
            <span className={style.numberQuali}>{ind + 1}</span>
            <Icones index={ind} forms={experiences} setForms={setexpEriences} />

            <ParentInput
              forId={`job${ind}`}
              label="جهة العمل"
              paraghrap="اسم الشركة أو المنظمة التي عملت فيها.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    ind,
                    e.target.value,
                    "job",
                    experiences,
                    setexpEriences
                  )
                }
                value={form.job}
                id={`job${ind}`}
                type="text"
                placeholder="جهة العمل"
              />
            </ParentInput>
            <ParentInput
              forId={`jobTitle${ind}`}
              label="مسمى الوظيفة"
              paraghrap="المجال أو التخصص الذي درسته.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    ind,
                    e.target.value,
                    "jobTitle",
                    experiences,
                    setexpEriences
                  )
                }
                value={form.jobTitle}
                id={`jobTitle${ind}`}
                type="text"
                placeholder="مسمى الوظيفة"
              />
            </ParentInput>
            <ParentInput
              forId={`esy${ind}`}
              label="وصف بسيط"
              paraghrap="اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)">
              <input
                onChange={(e) =>
                  handleInputChange(
                    ind,
                    e.target.value,
                    "esy",
                    experiences,
                    setexpEriences
                  )
                }
                value={form.esy}
                id={`esy${ind}`}
                type="text"
                placeholder="وصف بسيط"
              />
            </ParentInput>

            <ParentInput label="تاريخ الالتحاق" hedinSpan={false}>
              <DateCopy
                index={ind}
                stateDate={experiences}
                setStateDate={setexpEriences}
                oneDate={true}
              />
            </ParentInput>

            <ParentInput label="تاريخ المغادرة" hedinSpan={false}>
              <DateCopy
                index={ind}
                stateDate={experiences}
                setStateDate={setexpEriences}
                oneDate={true}
              />
            </ParentInput>

            <Upload
              text="شعار المنشأة"
              p="إختياري، يظهر شعار المنشأة في بعض القوالب وليس كلها."
              state={experiences}
              setState={setexpEriences}
              index={ind}
            />
          </div>
        </div>
      ))}
      <UsePages
        addForm={addForm}
        nameData={"experiences"}
        state={experiences}
        b1="أضف خبرة جديدة"
        b2="حفظ الخبرات"
      />
    </Fragment>
  );
};

export default Experiences;
// 127
