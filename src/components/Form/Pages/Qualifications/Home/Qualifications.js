import React, { useState } from "react";
import style from "./Qualifications.module.css";
import styleBut from "../../../Buttom/Buttom.module.css";
import Buttom from "../../../Buttom/Buttom";
import ColInput from "../../Personal_data/Home/ColInput/ColInput";
import DateQualifi from "./DateQualifi/DateQualifi";
import { dargItem, dargEnd, dargOver, drop } from "./f_drag_drop/drag_drop";
import { useSelector } from "react-redux";

const Qualifications = ({
  dataJson,
  children,
  addBtu,
  saveBut,
  date,
  butAdd = true,
  hedinDate = true,
}) => {
  const [objState] = useState([dataJson]);

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
        {objState[0].map((ele, ind) => {
          return (
            <ColInput
              key={ind}
              label={ele.labels}
              plac={ele.labels}
              hedingInp={ele.hedingInp}>
              {typeof ele.paraghrap == "object" ? (
                <select>
                  {ele.paraghrap.map((p, ind) => {
                    return <option key={ind}>{p}</option>;
                  })}
                </select>
              ) : (
                <p key={ind}>{ele.paraghrap}</p>
              )}
            </ColInput>
          );
        })}
        {hedinDate && <DateQualifi date={date} />}
        {children}
      </div>
    );
  };
  // Click Add Qualification
  const [qualifiNumber, setQualifiNumber] = useState([]);
  const qualifiNumberHendlre = () => setQualifiNumber((pre) => [...pre, 1]);

  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {qualifiNumber.map((ele, ind) => createqualifi(ind))}
        {butAdd && (
          <button
            onClick={qualifiNumberHendlre}
            className={`${style.but} ${styleBut.mani}`}>
            {addBtu}
          </button>
        )}
        <hr className={style.hr} />
        <Buttom text={saveBut} />
      </div>
    </div>
  );
};

export default Qualifications;
//79
