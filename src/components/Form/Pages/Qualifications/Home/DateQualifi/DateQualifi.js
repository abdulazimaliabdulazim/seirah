import React, { useState } from "react";
import style from "./DateQualifi.module.css";
import ColInput from "../../../Personal_data/Home/ColInput/ColInput";

const DateQualifi = ({ date, keyword }) => {
  const dayEmpty = [];
  const [dayState] = useState(dayEmpty);
  for (let i = 1; i <= 31; i++) dayEmpty.push(i);

  const [checkdDay, setCheckdday] = useState(false);
  const [checkdDayText, setCheckddayText] = useState("");
  // Manth
  const [manthState] = useState([
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]);
  const [checkdManth, setCheckdManth] = useState(false);
  const [checkdManthText, setCheckdManthText] = useState("");

  // Age
  const yarEmpty = [];
  const [yarState] = useState(yarEmpty);
  for (let i = 1963; i <= 2030; i++) yarEmpty.push(i);
  const [checkdYar, setCheckdYar] = useState(false);
  const [checkdYarText, setCheckdYarText] = useState("");

  const colDataParent = (
    funSetCheckdday,
    funCheckdDay,
    funDayState,
    funSetCheckddayText,
    funCheckdDayText
  ) => {
    return (
      <div
        className={style.test}
        onClick={() => funSetCheckdday(!funCheckdDay)}>
        <div className={style.one}></div>
        <div className={style.two}></div>
        {funCheckdDay && (
          <div className={style.parentNumberDat}>
            {funDayState.map((ele, ind) => (
              <span
                onClick={(e) => funSetCheckddayText(e.target.innerHTML)}
                key={ind}
                className={style.numberDay}>
                {ele}
              </span>
            ))}
          </div>
        )}
        {funCheckdDayText}
      </div>
    );
  };

  return (
    <ColInput label={date} hedingInp={false} yse={false}>
      <div className={style.parebtTest}>
        اليوم
        {colDataParent(
          setCheckdday,
          checkdDay,
          dayState,
          setCheckddayText,
          checkdDayText
        )}
        الشهر
        {colDataParent(
          setCheckdManth,
          checkdManth,
          manthState,
          setCheckdManthText,
          checkdManthText
        )}
        السنه
        {colDataParent(
          setCheckdYar,
          checkdYar,
          yarState,
          setCheckdYarText,
          checkdYarText
        )}
      </div>
      <p>في حال عدم رغبتك باظهار تاريخ اليوم اتركه فارغا</p>
    </ColInput>
  );
};

export default DateQualifi;
