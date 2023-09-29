import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./MineHeader.module.css";
import { useDispatch } from "react-redux";
import dataUrlJson from "../../../Pages/JSON_date/data_inputs.json";

const MineHeader = () => {
  const dispatch = useDispatch();
  const [data] = useState(dataUrlJson);
  //22 && 54
  return (
    <header className={style.parent}>
      <nav>
        {data[0].map((ele, ind) => {
          return (
            <NavLink
              key={ind}
              onClick={() =>
                dispatch({
                  type: { urls: window.location.pathname },
                })
              }
              to={ele.url}>
              {ele.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
export default MineHeader;

// <header className={style.parent}>
//   <nav>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"home-data"}>
//       👨🏻‍💻 البيانات الشخصية
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"qualifications"}>
//       📆 المؤهلات العلمية
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"experiences"}>
//       ⚙️ الخبرات العملية
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"coursess"}>
//       📑 الدورات التدريبية
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"skils"}>
//       🎯 المهارات
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"projects"}>
//       🏆 المشاريع
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"return"}>
//       👨🏻‍⚖️ المراجع
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"langutch"}>
//       🎎 اللغات
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"links"}>
//       🔗 الروابط
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"hobbies"}>
//       🚴‍♂️ الهوايات
//     </NavLink>
//     <NavLink
//       onClick={() => dispatch({ type: { urls: window.location.pathname } })}
//       to={"address"}>
//       🗺 العنوان
//     </NavLink>
//   </nav>
// </header>;
