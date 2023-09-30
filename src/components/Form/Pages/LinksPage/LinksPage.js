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

const LinksPage = () => {
  document.title = "الروابط";
  const [dataLinks, setDataLinks] = useState(
    getFormValues("dataLinks", true, true, "link", "networck")
  );
  // Send Links Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { dataLinks: dataLinks } });
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
        <ParentInput forId={`link${counter[2]++}`} label={"الرابط"}>
          <input
            onChange={(e) => hendlerData(e, setDataLinks)}
            id={`link${counter[0]++}`}
            value={dataLinks[`link${counter[1]++}`]}
            type="text"
            placeholder="الرابط"
          />
        </ParentInput>
        <ParentInput forId={`networck${counter[2]++}`} label={"الشبكة"}>
          <select
            id={`networck${counter[0]++}`}
            onChange={(e) => hendlerData(e, setDataLinks)}
            value={dataLinks[`networck${counter[1]++}`]}>
            <option>Twitter</option>
            <option>Linkedin</option>
            <option>Facebock</option>
            <option>Instagram</option>
            <option>Goodreads</option>
            <option>Tumblr</option>
            <option>Snabchat</option>
            <option>Wordpress</option>
            <option>مدونة شخصية</option>
            <option>موقع ويب</option>
            <option>أخري</option>
          </select>
        </ParentInput>
      </div>
    );
  };
  // Click Add Qualification
  let [count, setCount] = useState(getFormValues("countLink", false));
  const hendlreNum = () => setCount((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {count.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          أضف رابط جديد
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataLinks",
              dataLinks,
              "countLink",
              count
            );
          }}
          text={"حفظ الروابط"}
        />
      </div>
    </div>
  );
};

export default LinksPage;
// Update 102
