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
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import jsonD from "../JSON_date/data_inputs.json";
import UsePages from "../UsePage/UsePages";

const Languages = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3];
  document.title = "اللغات";
  const [languages, setLanguages] = useState(
    getFormValues(
      targetSeirah !== null ? `languages${targetSeirah}` : "languages1"
    )
  );
  const createqualifi = (ind) => {
    return (
      <Fragment key={ind}>
        <div
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable={true}
          className={style.qualificBox}>
          <span className={style.numberQuali}>{ind + 1}</span>
          <div className={style.controlBut}>
            <div type="button"></div>
            <div draggable={true} type="button"></div>
          </div>
          <ParentInput
            forId={`lang${coun[12]++}`}
            hedinSpan={false}
            label={"اللغة"}>
            <input
              id={`lang${coun[10]++}`}
              value={languages[`lang${coun[11]++}`]}
              onChange={(e) => hendlerData(e, setLanguages)}
              list="brow"
            />
            <datalist id={"brow"}>
              {jsonD[1].map((lang, ind) => {
                return <option key={ind} value={lang} />;
              })}
            </datalist>
          </ParentInput>
          <Checkd forID={`levelLang${coun[13]++}`} label={"مستواك بها"}>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setLanguages)}
                value={"مبتدئ"}
                id={`levelLang${coun[0]++}`}
                type="radio"
                name={`health${coun[1]++}`}
              />
              مبتدئ
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setLanguages)}
                value={"محدود"}
                id={`levelLang${coun[2]++}`}
                type="radio"
                name={`health${coun[3]++}`}
              />
              محدود
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setLanguages)}
                value={"إجادة تامة في حدود العمل"}
                id={`levelLang${coun[4]++}`}
                type="radio"
                name={`health${coun[5]++}`}
              />
              إجادة تامة في حدود العمل
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setLanguages)}
                value={"إجادة كاملة"}
                id={`levelLang${coun[6]++}`}
                type="radio"
                name={`health${coun[7]++}`}
              />
              إجادة كاملة
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setLanguages)}
                value={"اللغة الأم"}
                id={`levelLang${coun[8]++}`}
                type="radio"
                name={`health${coun[9]++}`}
              />
              اللغة الأم
              <div className={style.tog}></div>
            </label>
          </Checkd>
        </div>
      </Fragment>
    );
  };
  let [languagesNumber, setLanguagesNumber] = useState(
    getFormValues(
      targetSeirah !== null
        ? `languagesNumber${targetSeirah}`
        : "languagesNumber1"
    )
  );
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.signlanguages}>
        🤘 ✊
        <Checkd label={"هل تتحدث لغة الإشارة؟"}>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setLanguages)}
              value={"نعم"}
              id="signlanguages"
              type="radio"
              name="sign"
            />
            نعم
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setLanguages)}
              value={"لا"}
              id="signlanguages"
              type="radio"
              name="sign"
            />
            لا
            <div className={style.tog}></div>
          </label>
        </Checkd>
      </div>
      <UsePages
        state={languages}
        naState={"languages"}
        state2={languagesNumber}
        naState2={"languagesNumber"}
        setState2={setLanguagesNumber}
        b1={"أضف لغة جديدة"}
        b2={"حفظ اللغات"}>
        {languagesNumber.map((ele, ind) => createqualifi(ind))}
      </UsePages>
    </div>
  );
};

export default Languages;
