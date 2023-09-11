import React, { useState } from "react";
import style from "./Qualifications.module.css";
import styleBut from "../../../Buttom/Buttom.module.css";
import Buttom from "../../../Buttom/Buttom";
import DateQualifi from "./DateQualifi/DateQualifi";
import { dargItem, dargEnd, dargOver, drop } from "./f_drag_drop/drag_drop";
import ParentInput from "../../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch } from "react-redux";

const Qualifications = ({
  children,
  addBtu,
  saveBut,
  butAdd = true,
  hedinDate = true,
}) => {
  const [dataQualificaions, setDataQualificaions] = useState([]);
  const hendlerDataQualificaions = (e) => {
    let idName = e.target.id;
    setDataQualificaions((prev) => {
      return { ...prev, [idName]: e.target.value };
    });
  };

  // Send Personals Data In Story
  const dispatch = useDispatch();
  const dindlerAction = () => dispatch({ type: dataQualificaions });

  if (dataQualificaions.length <= 0) {
    setDataQualificaions(
      JSON.parse(window.localStorage.getItem("dataQualificaions"))
    );
  }

  const createqualifi = (ind) => {
    return (
      <div
        onDragStart={(e) => dargItem(e.target)}
        onDragEnd={(e) => dargEnd(e.target)}
        onDragOver={(e) => dargOver(e.target)}
        draggable={true}
        className={style.qualificBox}
        key={ind}>
        <span className={style.numberQuali}>{ind + 1}</span>
        <div className={style.controlBut}>
          <div type="button"></div>
          <div draggable={true} type="button"></div>
        </div>
        <ParentInput
          label={"الجهة التعليمية"}
          paraghrap={
            "اسم الجامعة أو الجهة التعليمية التي حصلت على الشهادة منها."
          }>
          <input
            onChange={(e) => hendlerDataQualificaions(e)}
            value={dataQualificaions.educational_entity}
            id="educational_entity"
            type="text"
            placeholder="الجهة التعليمية"
          />
        </ParentInput>
        <ParentInput
          label={"التخصص"}
          paraghrap={"المجال أو التخصص الذي درسته."}>
          <input
            onChange={(e) => hendlerDataQualificaions(e)}
            value={dataQualificaions.specialization}
            id="specialization"
            type="text"
            placeholder="التخصص"
          />
        </ParentInput>
        <ParentInput label={"الدرجة العلمية"}>
          <select id="degree" onChange={(e) => hendlerDataQualificaions(e)}>
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
        <ParentInput
          label={"وصف بسيط"}
          paraghrap={"اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)"}>
          <input
            onChange={(e) => hendlerDataQualificaions(e)}
            value={dataQualificaions.esy}
            id="esy"
            type="text"
            placeholder="وصف بسيط"
          />
        </ParentInput>
        {hedinDate && <DateQualifi hendlerQuali={hendlerDataQualificaions} />}
        {children}
      </div>
    );
  };
  // Click Add Qualification
  const [qualifiNumber, setQualifiNumber] = useState([0]);
  const qualifiNumberHendlre = () => setQualifiNumber((pre) => [...pre, 1]);

  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {qualifiNumber.map((ele, ind) => createqualifi(ind))}

        <button
          onClick={qualifiNumberHendlre}
          className={`${style.but} ${styleBut.mani}`}>
          {addBtu}
        </button>

        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            dindlerAction();
            window.localStorage.setItem(
              "dataQualificaions",
              JSON.stringify(dataQualificaions)
            );
          }}
          text={saveBut}
        />
      </div>
    </div>
  );
};

export default Qualifications;
//79
