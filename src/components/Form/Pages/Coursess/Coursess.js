import React, { Fragment, useState } from "react";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import style from "../Qualifications/Home/Qualifications.module.css";
import UsePages, { Icones } from "../UsePage/UsePages";
import DateCopy from "../Qualifications/Home/DateQualifi/DateCopy";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Coursess = () => {
  const [coursess, setCoursess] = useState([]);
  return (
    <Fragment>
      {coursess.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <div className={style.qualificBox} key={index}>
            <span className={style.numberQuali}>{index + 1}</span>
            <Icones index={index} state={coursess} setState={setCoursess} />
            <ParentInput
              forId={`cours${index}`}
              label="اسم الدورة"
              paraghrap="اسم الدورة أو الكورس التدريبي الذي ألتحقت به.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "cours",
                    coursess,
                    setCoursess
                  )
                }
                value={form.cours}
                id={`cours${index}`}
                type="text"
                placeholder="اسم الدورة"
              />
            </ParentInput>
            <ParentInput
              forId={`mantur${index}`}
              label="الجهة التعليمية"
              paraghrap="اسم الجهة التعليمية أو موقع الويب الذي حصلت على الدورة منه.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "mantur",
                    coursess,
                    setCoursess
                  )
                }
                value={form.mantur}
                id={`mantur${index}`}
                type="text"
                placeholder="الجهة التعليمية"
              />
            </ParentInput>
            <ParentInput
              forId={`esy${index}`}
              label="وصف بسيط"
              paraghrap="نبذة بسيطة عن الدورة التدريبية (اختياري).">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "esy",
                    coursess,
                    setCoursess
                  )
                }
                value={form.esy}
                id={`esy${index}`}
                type="text"
                placeholder="وصف بسيط"
              />
            </ParentInput>
            <ParentInput label="تاريخها" hedinSpan={false}>
              <DateCopy
                index={index}
                stateDate={coursess}
                setStateDate={setCoursess}
              />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        state={coursess}
        setState={setCoursess}
        nameData={{
          nameState: "coursess",
          nameItemObj: ["cours", "mantur", "esy"],
        }}
        b1="أضف دورة جديدة"
        b2="حفظ الدورات"
      />
    </Fragment>
  );
};

export default Coursess;
// 97
