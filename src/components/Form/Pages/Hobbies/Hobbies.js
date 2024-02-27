import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  return (
    <Fragment>
      {hobbies.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <Icones index={index} state={hobbies} setState={setHobbies} />
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput
              forId={`hobbie${index}`}
              label="الهواية"
              paraghrap="يُفضّل من كلمة إلى 4 كلمات كحد أقصى.">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "hobbie",
                    hobbies,
                    setHobbies
                  )
                }
                id={`hobbie${index}`}
                value={form.hobbie}
                type="text"
                placeholder="الهواية"
              />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        state={hobbies}
        setState={setHobbies}
        nameData={{
          nameState: "hobbies",
          nameItemObj: [],
        }}
        b1="أضف هواية جديدة"
        b2="حفظ الهويات"
      />
    </Fragment>
  );
};

export default Hobbies;
