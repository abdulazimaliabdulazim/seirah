import React, { useState } from "react";
import style from "./Qualifications.module.css";
import styleBut from "../../../Buttom/Buttom.module.css";
import Buttom from "../../../Buttom/Buttom";
import DateQualifi from "../Home/DateQualifi/DateQualifi";
import { dargItem, dargEnd, dargOver, drop } from "./f_drag_drop/drag_drop";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch } from "react-redux";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../../hendlerData/hendlerData";
import { Day, Manth, Yar } from "./DateQualifi/LettersNmbers";
import Json from "../../JSON_date/data_inputs.json";

const Qualifications = () => {
  document.title = "المؤهلات العلمية";
  const [qualifi, setQualifi] = useState(
    getFormValues("qualifi", true, true, "education", "specializat", "esy")
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { qualifi: qualifi } });
  let coun = [1, 1, 1, 1, 1];
  const createqualifi = (ind) => {
    return (
      <div className={style.qualificBox} id={ind} key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        {Json[3].map((input, ind) => {
          return (
            <ParentInput
              key={ind}
              forId={`${input.id}${coun[1]++}`}
              label={input.label}
              paraghrap={input.paraghrap}>
              <input
                onChange={(e) => hendlerData(e, setQualifi)}
                id={`${input.id}${coun[0]++}`}
                value={qualifi[`${input.id}${coun[2]++}`]}
                type="text"
                placeholder={input.label}
              />
            </ParentInput>
          );
        })}
        <ParentInput forId={coun[1]++} label={"الدرجة العلمية"}>
          <select
            id={coun[0]++}
            onChange={(e) => hendlerData(e, setQualifi)}
            value={qualifi[coun[2]++]}>
            <option>دكتوراه</option>
            <option>ماجستير</option>
            <option>دبلوم عالي</option>
            <option>بكالوريوس</option>
            <option>ليسانس</option>
            <option>دبلوم</option>
            <option>المرحلة الثانوية أو ما يعادلها</option>
            <option>المرحلة المتوسطة</option>
            <option>أخرى</option>
          </select>
        </ParentInput>
        <DateQualifi forId={coun[1]++} lable={"تاريخ التخرج"}>
          <div
            id={`day${coun[3]++}`}
            onClick={(e) =>
              hendlerData(e, setQualifi, false, false, true, false)
            }>
            <Day />
            {coun[0]++}
            {coun[2]++}
          </div>
          <div
            id={`manth${coun[3]++}`}
            onClick={(e) =>
              hendlerData(e, setQualifi, false, false, true, false)
            }>
            <Manth />
          </div>
          <div
            id={`yar${coun[3]++}`}
            onClick={(e) =>
              hendlerData(e, setQualifi, false, false, true, false)
            }>
            <Yar />
          </div>
          <span>{qualifi[`day${coun[4]++}`]}</span>
          <span>{qualifi[`manth${coun[4]++}`]}</span>
          <span>{qualifi[`yar${coun[4]++}`]}</span>
        </DateQualifi>
      </div>
    );
  };
  const [qualifiNumber, setQualifiNumber] = useState(
    getFormValues("countQualifi", false)
  );
  const hendlreNum = () => setQualifiNumber((pre) => [...pre, 1]);

  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {qualifiNumber.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          أضف مؤهل جديد
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "qualifi",
              qualifi,
              "countQualifi",
              qualifiNumber
            );
          }}
          text={"حفظ المؤهلات"}
        />
      </div>
    </div>
  );
};

export default Qualifications;
// Update 129
