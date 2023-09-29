import React, { useState } from "react";
import Upload from "../Personal_data/Home/Upload_img/Upload";
import Buttom from "../../Buttom/Buttom";
import DateQualifi from "../Qualifications/Home/DateQualifi/DateQualifi";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import { useDispatch } from "react-redux";
import style from "../Qualifications/Home/Qualifications.module.css";
import styleBut from "../../Buttom/Buttom.module.css";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";
import img from "../../../../images/user.png";
import {
  Day,
  Manth,
  Yar,
} from "../Qualifications/Home/DateQualifi/LettersNmbers";

const Experiences = () => {
  document.title = "الخبرات العملية";
  const [dataExperiences, setDataExperiences] = useState(
    getFormValues("dataExperiences")
  );
  // Send Personals Data In Story
  const dispatch = useDispatch();
  const hindlerAction = () =>
    dispatch({ type: { dataExperiences: dataExperiences } });
  let count = [1, 1, 1, 1, 1];

  const [scrIma, setScrIma] = useState(
    !dataExperiences.thamnal ? img : dataExperiences.thamnal
  );
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
          forId={count[2]++}
          label={"جهة العمل"}
          paraghrap={"اسم الشركة أو المنظمة التي عملت فيها."}>
          <input
            onChange={(e) => hendlerData(e, setDataExperiences)}
            id={count[0]++}
            value={dataExperiences[count[1]++]}
            type="text"
            placeholder="الجهة التعليمية"
          />
        </ParentInput>
        <ParentInput
          forId={count[2]++}
          label={"مسمى الوظيفة"}
          paraghrap={"المجال أو التخصص الذي درسته."}>
          <input
            onChange={(e) => hendlerData(e, setDataExperiences)}
            id={count[0]++}
            value={dataExperiences[count[1]++]}
            type="text"
            placeholder="التخصص"
          />
        </ParentInput>
        <DateQualifi forId={count[2]++} lable={"تاريخ الالتحاق"}>
          <div
            id={`day${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Day />
            {count[0]++}
            {count[1]++}
          </div>
          <div
            id={`manth${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Manth />
          </div>
          <div
            id={`yar${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Yar />
          </div>
          <span>{dataExperiences[`day${count[4]++}`]}</span>
          <span>{dataExperiences[`manth${count[4]++}`]}</span>
          <span>{dataExperiences[`yar${count[4]++}`]}</span>
        </DateQualifi>
        <DateQualifi forId={count[2]++} lable={"تاريخ المغادرة"}>
          <div
            id={`day${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Day />
            {count[0]++}
            {count[1]++}
          </div>
          <div
            id={`manth${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Manth />
          </div>
          <div
            id={`yar${count[3]++}`}
            onClick={(e) => hendlerData(e, setDataExperiences)}>
            <Yar />
          </div>
          <span>{dataExperiences[`day${count[4]++}`]}</span>
          <span>{dataExperiences[`manth${count[4]++}`]}</span>
          <span>{dataExperiences[`yar${count[4]++}`]}</span>
        </DateQualifi>
        <ParentInput
          forId={count[2]++}
          label={"وصف بسيط"}
          paraghrap={"اكتب وصف بسيط عن هذه المرحلة الدارسية (اختياري)"}>
          <input
            onChange={(e) => hendlerData(e, setDataExperiences)}
            id={count[0]++}
            value={dataExperiences[count[1]++]}
            type="text"
            placeholder="وصف بسيط"
          />
        </ParentInput>
        <Upload
          text={"شعار المنشأة"}
          p={"إختياري، يظهر شعار المنشأة في بعض القوالب وليس كلها."}
          setImg={setScrIma}>
          <img
            src={scrIma}
            onLoad={(e) => hendlerData(e, setDataExperiences)}
            alt="img"
            id="thamnal"
          />
        </Upload>
      </div>
    );
  };
  // Click Add Qualification
  let [ExperNumber, setExperNumber] = useState(
    getFormValues("countExper", false)
  );
  const hendlreNum = () => setExperNumber((pre) => [...pre, 1]);
  return (
    <div onDrop={(e) => drop(e.target)} className={style.parent}>
      <div className={style.box}>
        {ExperNumber.map((ele, ind) => createqualifi(ind))}
        <button
          onClick={hendlreNum}
          className={`${style.but} ${styleBut.mani}`}>
          {"أضف خبرة جديدة"}
        </button>
        <hr className={style.hr} />
        <Buttom
          onClick={() => {
            sendActionData(
              hindlerAction,
              "dataExperiences",
              dataExperiences,
              "countExper",
              ExperNumber
            );
          }}
          text={"حفظ الخبرات"}
        />
      </div>
    </div>
  );
};

export default Experiences;
// Update 180
