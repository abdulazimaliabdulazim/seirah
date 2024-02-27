import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import jsonD from "../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  return (
    <Fragment>
      {languages.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <Icones index={index} state={languages} setState={setLanguages} />
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput forId={`lang${index}`} hedinSpan={false} label="اللغة">
              <input
                id={`lang${index}`}
                value={form.lang}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "lang",
                    languages,
                    setLanguages
                  )
                }
                list="brow"
              />
              <datalist id="brow">
                {jsonD[1].map((lang, ind) => {
                  return <option key={ind} value={lang} />;
                })}
              </datalist>
            </ParentInput>
            <Checkd forID={`levelLang${index}}`} label="مستواك بها">
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "levelLang",
                      languages,
                      setLanguages
                    )
                  }
                  value="مبتدئ"
                  id={`levelLang${index}}`}
                  type="radio"
                  name={`health${index}`}
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
                      "levelLang",
                      languages,
                      setLanguages
                    )
                  }
                  value="محدود"
                  id={`levelLang${index}`}
                  type="radio"
                  name={`health${index}`}
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
                      "levelLang",
                      languages,
                      setLanguages
                    )
                  }
                  value="إجادة تامة في حدود العمل"
                  id={`levelLang${index}`}
                  type="radio"
                  name={`health${index}`}
                />
                إجادة تامة في حدود العمل
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "levelLang",
                      languages,
                      setLanguages
                    )
                  }
                  value="إجادة كاملة"
                  id={`levelLang${index}`}
                  type="radio"
                  name={`health${index}`}
                />
                إجادة كاملة
                <div className={style.tog}></div>
              </label>
              <label className={style.parent_tog}>
                <input
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      "levelLang",
                      languages,
                      setLanguages
                    )
                  }
                  value="اللغة الأم"
                  id={`levelLang${index}`}
                  type="radio"
                  name={`health${index}`}
                />
                اللغة الأم
                <div className={style.tog}></div>
              </label>
            </Checkd>
          </div>
        </div>
      ))}
      <div onDrop={(e) => drop(e.target)} className={style.parent}>
        <UsePages
          state={languages}
          setState={setLanguages}
          nameData={{
            nameState: "languages",
            nameItemObj: ["lang"],
          }}
          b1="أضف لغة جديدة"
          b2="حفظ اللغات"
        />
      </div>
    </Fragment>
  );
};

export default Languages;
