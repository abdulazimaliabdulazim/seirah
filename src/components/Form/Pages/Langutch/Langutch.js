import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import Buttom from "../../Buttom/Buttom";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch } from "react-redux";
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";
import jsonD from "../JSON_date/data_inputs.json";

const Language = () => {
  document.title = "اللغات";
  const [dataLanguage, setDataLanguage] = useState(
    getFormValues("dataLanguage")
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch({ type: { dataLanguage: dataLanguage } });
  let counter = [1, 1, 1, 1];
  let checkd = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
          <ParentInput forId={counter[2]++} hedinSpan={false} label={"اللغة"}>
            <input
              onChange={(e) => hendlerData(e, setDataLanguage)}
              id={counter[0]++}
              list="brow"
              value={dataLanguage[counter[1]++]}
            />
            <datalist id={"brow"}>
              {jsonD[2].map((lang, ind) => {
                return <option key={ind} value={lang} />;
              })}
            </datalist>
          </ParentInput>
          <Checkd forID={`levelLang${counter[3]++}`} label={"مستواك بها"}>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setDataLanguage)}
                value={"مبتدئ"}
                id={`levelLang${checkd[0]++}`}
                type="radio"
                name={`health${checkd[1]++}`}
              />
              مبتدئ
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setDataLanguage)}
                value={"محدود"}
                id={`levelLang${checkd[2]++}`}
                type="radio"
                name={`health${checkd[3]++}`}
              />
              محدود
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setDataLanguage)}
                value={"إجادة تامة في حدود العمل"}
                id={`levelLang${checkd[4]++}`}
                type="radio"
                name={`health${checkd[5]++}`}
              />
              إجادة تامة في حدود العمل
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setDataLanguage)}
                value={"إجادة كاملة"}
                id={`levelLang${checkd[6]++}`}
                type="radio"
                name={`health${checkd[7]++}`}
              />
              إجادة كاملة
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setDataLanguage)}
                value={"اللغة الأم"}
                id={`levelLang${checkd[8]++}`}
                type="radio"
                name={`health${checkd[9]++}`}
              />
              اللغة الأم
              <div className={style.tog}></div>
            </label>
          </Checkd>
        </div>
      </Fragment>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countLang", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        🤘 ✊
        <Checkd label={"هل تتحدث لغة الإشارة؟"}>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataLanguage)}
              value={"نعم"}
              id="signLanguage"
              type="radio"
              name="sign"
            />
            نعم
            <div className={style.tog}></div>
          </label>
          <label className={style.parent_tog}>
            <input
              onChange={(e) => hendlerData(e, setDataLanguage)}
              value={"لا"}
              id="signLanguage"
              type="radio"
              name="sign"
            />
            لا
            <div className={style.tog}></div>
          </label>
        </Checkd>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          {"أضف لغة جديدة"}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataLanguage",
              dataLanguage,
              "countLang",
              count
            );
          }}
          text={"حفظ اللغات"}
        />
      </div>
    </div>
  );
};

export default Language;
// Update 175
