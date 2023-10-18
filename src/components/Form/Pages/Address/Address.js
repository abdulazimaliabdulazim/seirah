import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import Buttom from "../../Buttom/Buttom";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import { useDispatch } from "react-redux";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";

const Address = () => {
  document.title = "العنوان";
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  const [address, setAddress] = useState(
    getFormValues(targetSeirah !== null ? `address${targetSeirah}` : "address1")
  );
  const dispatch = useDispatch();
  const hindlerAction = () => dispatch({ type: { address } });
  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.qualificBox}>
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
            sendActionData(
              hindlerAction,
              targetSeirah !== null ? `address${targetSeirah}` : "address1",
              address
            );
          }}
          text={"حفظ العنوان الوطني"}
        />
      </div>
    </div>
  );
};

export default Address;
