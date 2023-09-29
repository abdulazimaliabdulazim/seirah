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
import dataJson from "../../JSON_date/data_inputs.json";
import { Day, Manth, Yar } from "./DateQualifi/LettersNmbers";

const Qualifications = () => {
  document.title = "المؤهلات العلمية";
  const [dataQualifi, setDataQualifi] = useState(
    getFormValues("dataQualifi", true, false, dataJson[1][0])
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { dataQualifi: dataQualifi } });
  let coun = [1, 1, 1, 1, 1];
  const createqualifi = (ind) => {
    return (
      <div
        onDragStart={(e) => dargItem(e.target)}
        onDragEnd={(e) => dargEnd(e.target)}
        onDragOver={(e) => dargOver(e.target)}
        draggable={true}
        className={style.qualificBox}
        id={ind}
        key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        <ParentInput
          forId={coun[1]++}
          label={"الجهة التعليمية"}
          paraghrap={
            "اسم الجامعة أو الجهة التعليمية التي حصلت على الشهادة منها."
          }>
          <input
            onChange={(e) => hendlerData(e, setDataQualifi)}
            id={coun[0]++}
            value={dataQualifi[coun[2]++]}
            type="text"
            placeholder="الجهة التعليمية"
          />
        </ParentInput>
        <ParentInput
          forId={coun[1]++}
          label={"التخصص"}
          paraghrap={"المجال أو التخصص الذي درسته."}>
          <input
            onChange={(e) => hendlerData(e, setDataQualifi)}
            id={coun[0]++}
            value={dataQualifi[coun[2]++]}
            type="text"
            placeholder="التخصص"
          />
        </ParentInput>
        <ParentInput forId={coun[1]++} label={"الدرجة العلمية"}>
          <select
            id={coun[0]++}
            onChange={(e) => hendlerData(e, setDataQualifi)}
            value={dataQualifi[coun[2]++]}>
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
            onClick={(e) => hendlerData(e, setDataQualifi)}>
            <Day />
            {coun[0]++}
            {coun[2]++}
          </div>
          <div
            id={`manth${coun[3]++}`}
            onClick={(e) => hendlerData(e, setDataQualifi)}>
            <Manth />
          </div>
          <div
            id={`yar${coun[3]++}`}
            onClick={(e) => hendlerData(e, setDataQualifi)}>
            <Yar />
          </div>
          <span>{dataQualifi[`day${coun[4]++}`]}</span>
          <span>{dataQualifi[`manth${coun[4]++}`]}</span>
          <span>{dataQualifi[`yar${coun[4]++}`]}</span>
        </DateQualifi>
        <ParentInput
          forId={coun[1]++}
          label={"وصف بسيط"}
          paraghrap={"اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)"}>
          <input
            onChange={(e) => hendlerData(e, setDataQualifi)}
            id={coun[0]++}
            value={dataQualifi[coun[2]++]}
            type="text"
            placeholder="وصف بسيط"
          />
        </ParentInput>
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
              "dataQualifi",
              dataQualifi,
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
// Update 151
