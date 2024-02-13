import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import Buttom from "../../Buttom/Buttom";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, {
  getFormValues,
  sendActionData,
} from "../hendlerData/hendlerData";
import { Link } from "react-router-dom";
import { getTitlePage } from "../Qualifications/Home/Qualifications";

const Address = () => {
  getTitlePage();
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  const [address, setAddress] = useState(
    getFormValues(targetSeirah !== null ? `address${targetSeirah}` : "address1")
  );

  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.qualificBox}>
          <ParentInput
            forId="address"
            label="العنوان الوطني"
            paraghrap="تفاصيل العنوان الوطني">
            <input
              onChange={(e) => hendlerData(e, setAddress)}
              id="address"
              value={address.address}
              type="text"
              placeholder="العنوان الوطني"
            />
          </ParentInput>
        </div>
        <Link to="/dashboard/cvs/data/design">
          <Buttom
            onClick={() => {
              sendActionData(
                targetSeirah !== null ? `address${targetSeirah}` : "address1",
                address
              );
            }}
            text="حفظ العنوان الوطني"
          />
        </Link>
      </div>
    </div>
  );
};

export default Address;
