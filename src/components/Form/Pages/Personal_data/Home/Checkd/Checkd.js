import React from "react";
import style from "./Checkd.module.css";
import RadioCheckd from "./RaduoCheckd/RadioCheckd";

const Checkd = ({ lab, nameRad, typeRad, setHalth, paraghraph }) => {
  return (
    <div className={style.parent}>
      <label>{lab}</label>
      <div className={style.checkd}>
        <div className={style.col}>
          {nameRad.map((ele, ind) => (
            <RadioCheckd
              setHalth={setHalth}
              key={ind}
              nameRad={ele.statis}
              typeRad={typeRad}
            />
          ))}
        </div>
        <p>
          اختر [نعم] إذا كنت قمت بتأدية الخدمة العسكرية، أو [لا] إذا لم تقم بها
          بعد. أو [إخفاء] لإخفائها من العرض في السيرة.
        </p>
      </div>
    </div>
  );
};

export default Checkd;
