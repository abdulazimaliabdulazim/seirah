import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  getTitlePage,
  handleInputChange,
} from "../Qualifications/Home/Qualifications";

import UsePages from "../UsePage/UsePages";

const Address = () => {
  getTitlePage();
  const newForm = { address: "" };
  const [address, setAddress] = useState([newForm]);

  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.qualificBox}>
          <ParentInput
            forId="address"
            label="العنوان الوطني"
            paraghrap="تفاصيل العنوان الوطني">
            <input
              onChange={(e) =>
                handleInputChange(
                  0,
                  e.target.value,
                  "address",
                  address,
                  setAddress
                )
              }
              id="address"
              value={address[0].address}
              type="text"
              placeholder="العنوان الوطني"
            />
          </ParentInput>
        </div>
        <UsePages
          state={address}
          setState={setAddress}
          nameData={{
            nameState: "address",
            nameItemObj: ["address"],
          }}
          b2="حفظ العنوان الوطني"
        />
      </div>
    </div>
  );
};

export default Address;
