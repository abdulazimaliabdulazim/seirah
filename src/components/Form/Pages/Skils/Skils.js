import React, { Fragment, useState } from "react";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Skils = () => {
  const [skils, setSkils] = useState([]);
  return (
    <Fragment>
      {skils.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}
            key={index}>
            <span className={style.numberQuali}>{index + 1}</span>
            <Icones index={index} state={skils} setState={setSkils} />
            <ParentInput
              forId={`skilsId${index}`}
              label="المهارة"
              paraghrap="مسمى المهارة، من كلمة إلى 4 كلمات كحد أقصى. مثال: Photoshop, Excel, أو HTML/CSS .. إلى آخره">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "skilsId",
                    skils,
                    setSkils
                  )
                }
                value={form.skilsId}
                id={`skilsId${index}`}
                type="text"
                placeholder="المهارة"
              />
            </ParentInput>
            <Checkd forId={`skils${index}`} label="مستواك بها">
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "six",
                      skils,
                      setSkils
                    )
                  }
                  value="20% مبتدئ"
                  id={`skils${index}`}
                  type="radio"
                  name={`skils${index}`}
                />
                مبتدئ
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "six",
                      skils,
                      setSkils
                    )
                  }
                  value="40% محدود"
                  id={`skils${index}`}
                  type="radio"
                  name={`skils${index}`}
                />
                محدود
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "six",
                      skils,
                      setSkils
                    )
                  }
                  value="60% جيّد"
                  id={`skils${index}`}
                  type="radio"
                  name={`skils${index}`}
                />
                جيّد
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "six",
                      skils,
                      setSkils
                    )
                  }
                  value="80% متمكن"
                  id={`skils${index}`}
                  type="radio"
                  name={`skils${index}`}
                />
                متمكن
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "six",
                      skils,
                      setSkils
                    )
                  }
                  value="100% متخصص"
                  id={`skils${index}`}
                  type="radio"
                  name={`skils${index}`}
                />
                متخصص
                <div className={style.tog}></div>
              </label>
            </Checkd>
          </div>
        </div>
      ))}
      <UsePages
        state={skils}
        setState={setSkils}
        nameData={{
          nameState: "skils",
          nameItemObj: ["skilsId", "skils"],
        }}
        b1="أضف خبرة مهارة"
        b2="حفظ المهارات"
      />
    </Fragment>
  );
};

export default Skils;
