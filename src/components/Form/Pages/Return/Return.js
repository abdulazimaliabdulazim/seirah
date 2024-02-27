import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Return = () => {
  const [returnP, setReturn] = useState([]);
  return (
    <Fragment>
      {returnP.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <Icones index={index} state={returnP} setState={setReturn} />
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput
              forId={`name${index}`}
              label="اسم الشخص"
              paraghrap="اسم الشخص الذي عملت معه، كمرجع وموصي لسؤاله عنك.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "name",
                    returnP,
                    setReturn
                  )
                }
                type="text"
                placeholder="اسم الشخص"
                id={`name${index}`}
                value={form.name}
              />
            </ParentInput>
            <ParentInput
              forId={`email${index}`}
              label="بريده الإلكتروني"
              paraghrap="ايميل المرجع للتواصل معه">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "email",
                    returnP,
                    setReturn
                  )
                }
                type="text"
                placeholder="بريده الإلكتروني"
                id={`email${index}`}
                value={form.email}
              />
            </ParentInput>
            <ParentInput
              forId={`number_phone${index}`}
              label="رقم الجوال"
              paraghrap="إختياري">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "number_phone",
                    returnP,
                    setReturn
                  )
                }
                type="text"
                placeholder="رقم الجوال"
                id={`number_phone${index}`}
                value={form.number_phone}
              />
            </ParentInput>
            <ParentInput
              forId={`esy${index}`}
              label="نبذة بسيط"
              paraghrap="نبذة بسيطة عن المشروع أو المنجز (اختياري).">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "esy",
                    returnP,
                    setReturn
                  )
                }
                type="text"
                placeholder="نبذة بسيط"
                id={`esy${index}`}
                value={form.esy}
              />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        state={returnP}
        setState={setReturn}
        nameData={{
          nameState: "return",
          nameItemObj: ["name", "email", "number_phone", "esy"],
        }}
        b1="أضف شخص جديد"
        b2="حفظ المراجع"
      />
    </Fragment>
  );
};

export default Return;
