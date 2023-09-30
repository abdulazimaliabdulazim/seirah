import React, { useState } from "react";
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
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";

const Hobbies = () => {
  document.title = "الهوايات";
  const [dataHobbies, setDataHobbies] = useState(
    getFormValues("dataHobbies", true, true, "hobbie")
  );
  // Send Hobbies Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { dataHobbies: dataHobbies } });
  let counter = [1, 1, 1];

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
          forId={`hobbie${counter[2]++}`}
          label={"الهواية"}
          paraghrap={"يُفضّل من كلمة إلى 4 كلمات كحد أقصى."}>
          <input
            onChange={(e) => hendlerData(e, setDataHobbies)}
            id={`hobbie${counter[0]++}`}
            value={dataHobbies[`hobbie${counter[1]++}`]}
            type="text"
            placeholder="الهواية"
          />
        </ParentInput>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countHobbi", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          أضف هواية جديدة
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataHobbies",
              dataHobbies,
              "countHobbi",
              count
            );
          }}
          text={"حفظ الهويات"}
        />
      </div>
    </div>
  );
};

export default Hobbies;
// Update 87
