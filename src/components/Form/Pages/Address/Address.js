import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import Buttom from "../../Buttom/Buttom";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch, useSelector } from "react-redux";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";

const Address = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  document.title = "العنوان";
  const [address, setAddress] = useState(
    getFormValues(false, `address${targetSeirah}`)
  );
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { address } });
  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.qualificBox}>
          <span className={style.numberQuali}>{"1"}</span>
          <div className={style.controlBut}>
            <div type="button"></div>
            <div draggable={true} type="button"></div>
          </div>
          <ParentInput
            forId={"address"}
            label={"العنوان الوطني"}
            paraghrap={"تفاصيل العنوان الوطني"}>
            <input
              onChange={(e) => hendlerData(e, setAddress)}
              id={"address"}
              value={address.address}
              type="text"
              placeholder="العنوان الوطني"
            />
          </ParentInput>
        </div>
        <Buttom
          onClick={() => {
            sendActionData(hindlerAction, `address${targetSeirah}`, address);
          }}
          text={"حفظ العنوان الوطني"}
        />
      </div>
    </div>
  );
};

export default Address;
// Update 49
// Total => (1,662)
