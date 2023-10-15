import React, { useState } from "react";
import style from "./DateQualifi.module.css";
import ParentInput from "../../../Personal_data/Home/ParentInput/ParentInput";

const BoxDate = ({ text, setCheckd, checkd, date, childr }) => {
  return (
    <div className={style.colDate}>
      <span>{text}</span>
      <div id="date" className={style.test} onClick={() => setCheckd(!checkd)}>
        {date}
        <div className={style.one}></div>
        <div className={style.two}></div>
        {checkd && childr}
      </div>
    </div>
  );
};

const DateQualifi = ({ lable, children, forId }) => {
  const [checkdDay, setCheckdDay] = useState(false);
  const [checkdManth, setCheckdManth] = useState(false);
  const [checkdYar, setCheckdYar] = useState(false);
  return (
    <ParentInput forId={forId} label={lable} hedinSpan={false}>
      <div className={style.parebtTest}>
        <BoxDate
          text={"اليوم"}
          setCheckd={setCheckdDay}
          checkd={checkdDay}
          date={children[3]}
          childr={children[0]}
        />
        <BoxDate
          text={"الشهر"}
          setCheckd={setCheckdManth}
          checkd={checkdManth}
          date={children[4]}
          childr={children[1]}
        />
        <BoxDate
          text={"السنه"}
          setCheckd={setCheckdYar}
          checkd={checkdYar}
          date={children[5]}
          childr={children[2]}
        />
      </div>
      <p>في حال عدم رغبتك باظهار تاريخ اليوم اتركه فارغا</p>
    </ParentInput>
  );
};

export default DateQualifi;
