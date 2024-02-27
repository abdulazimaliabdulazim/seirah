import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import json from "../JSON_date/data_inputs.json";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const LinksPage = () => {
  const [links, setLinks] = useState([]);

  return (
    <Fragment>
      {links.map((form, index) => (
        <div key={index} className={style.parentPages}>
          <Icones index={index} state={links} setState={setLinks} />
          <div
            onDragStart={(e) => dargItem(e.target)}
            onDragEnd={(e) => dargEnd(e.target)}
            onDragOver={(e) => dargOver(e.target)}
            draggable={true}
            className={style.qualificBox}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput forId={`link${index}`} label="الرابط">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "link",
                    links,
                    setLinks
                  )
                }
                id={`link${index}`}
                value={form.link}
                type="text"
                placeholder="الرابط"
              />
            </ParentInput>
            <ParentInput forId={`networck${index}`} label="الشبكة">
              <select
                id={`networck${index}`}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "networck",
                    links,
                    setLinks
                  )
                }
                value={links[`networck${index}`]}>
                {json[9].map((option, ind) => {
                  return <option key={ind}>{option}</option>;
                })}
              </select>
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        state={links}
        setState={setLinks}
        nameData={{
          nameState: "links",
          nameItemObj: ["link", "networck"],
        }}
        b1="أضف رابط جديد"
        b2="حفظ الروابط"
      />
    </Fragment>
  );
};

export default LinksPage;
