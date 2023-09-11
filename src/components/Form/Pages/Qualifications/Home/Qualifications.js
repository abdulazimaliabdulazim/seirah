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
    console.log(e.target.value);
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

  let coun = 0;
  let getCoun = 0;
  const [isn, sein] = useState([]);

  // console.log(isn[`input${coun++}`]);

  const hen = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    sein((pre) => {
      return { ...pre, [id]: value };
    });
  };

  if (isn.length <= 0) {
    sein(JSON.parse(window.localStorage.getItem("henQualificaions")));
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
            onChange={(e) => hen(e)}
            id={coun++}
            value={isn[getCoun++]}
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
  let [qualifiNumber, setQualifiNumber] = useState([0, 1]);
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
              "henQualificaions",
              JSON.stringify(isn)
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
