import React, { useState } from "react";
import json from "../../../JSON_date/data_inputs.json";
import { handleInputChange } from "../Qualifications";
import style from "./DateQualifi.module.css";

// Day
export const Day = ({ index, forms, setForms }) => {
  const dayEmpty = [];
  const [dayState] = useState(dayEmpty);
  for (let i = 1; i <= 31; i++) dayEmpty.push(i);
  return (
    <select
      className={style.selectBox}
      onChange={(e) =>
        handleInputChange(index, e.target.value, "day", forms, setForms)
      }
      value={forms.day}>
      {dayState.map((ele, ind) => (
        <option key={ind}>{ele}</option>
      ))}
    </select>
  );
};
// Manth
export const Manth = ({ index, forms, setForms }) => {
  const [manthState] = useState(json[11]);
  return (
    <select
      className={style.selectBox}
      onChange={(e) => {
        handleInputChange(index, e.target.value, "manth", forms, setForms);
        console.log(e.target.value, index);
      }}
      value={forms.Manth}>
      {manthState.map((ele, ind) => (
        <option key={ind}>{ele}</option>
      ))}
    </select>
  );
};
// Age
export const Yar = ({ index, forms, setForms }) => {
  const yarEmpty = [];
  const [yarState] = useState(yarEmpty);
  for (let i = 1963; i <= 2030; i++) yarEmpty.push(i);
  return (
    <select
      className={style.selectBox}
      onChange={(e) => {
        handleInputChange(index, e.target.value, "yar", forms, setForms);
        console.log(e.target.value, index);
      }}
      value={forms.yar}>
      {yarState.map((ele, ind) => (
        <option key={ind}>{ele}</option>
      ))}
    </select>
  );
};

const DateCopy = ({ index, forms, setForms }) => {
  // Day
  const dayEmpty = [];
  const [day] = useState(dayEmpty);
  // Manth
  const [manth] = useState(json[11]);
  for (let i = 1; i <= 31; i++) dayEmpty.push(i);
  // Yar
  const yarEmpty = [];
  const [yar] = useState(yarEmpty);
  for (let i = 1963; i <= 2030; i++) yarEmpty.push(i);

  // Function Hendler Date
  const hendlerDate = (state, typeDate) => {
    return (
      <select
        className={style.selectBox}
        onChange={(e) => {
          handleInputChange(index, e.target.value, typeDate, forms, setForms);
        }}
        value={forms[index][typeDate]}>
        {state.map((ele, ind) => (
          <option key={ind}>{ele}</option>
        ))}
      </select>
    );
  };
  return (
    <div className={style.parentDate}>
      {hendlerDate(day, "day")}
      {hendlerDate(manth, "manth")}
      {hendlerDate(yar, "yar")}
    </div>
  );
};

export default DateCopy;
