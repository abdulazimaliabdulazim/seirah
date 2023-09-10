import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MineHeader.module.css";
import { useDispatch } from "react-redux";
import { twoClick } from "../../../Pages/NewTranfrom/NewTranfrom";

const MineHeader = () => {
  const dispatch = useDispatch();

  return (
    <header className={style.parent}>
      <nav>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"home-data"}>
          👨🏻‍💻 البيانات الشخصية
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"qualifications"}>
          📆 المؤهلات العلمية
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"experiences"}>
          ⚙️ الخبرات العملية
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"coursess"}>
          📑 الدورات التدريبية
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"skils"}>
          🎯 المهارات
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"projects"}>
          🏆 المشاريع
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"return"}>
          👨🏻‍⚖️ المراجع
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"langutch"}>
          🎎 اللغات
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"links"}>
          🔗 الروابط
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"hobbies"}>
          🚴‍♂️ الهوايات
        </NavLink>
        <NavLink
          onClick={(e) => {
            twoClick(e);
            dispatch({ type: window.location.pathname });
          }}
          to={"address"}>
          🗺 العنوان
        </NavLink>
      </nav>
    </header>
  );
};
export default MineHeader;
