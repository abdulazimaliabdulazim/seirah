import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Links.module.css";
import Container from "../../../Container/Container";

const Links = () => {
  return (
    <header className={style.parent}>
      <Container>
        <nav>
          <NavLink to="/dashboard/cvs/home-detuls">
            <span>بيانات السيرة</span>
          </NavLink>
          <NavLink to="/dashboard/cvs/ahome-detuls">
            <span>التصميم</span>
          </NavLink>
          <NavLink to="/dashboard/cvs/hosadme-detuls">
            <span>تحميل ومشاركة</span>
          </NavLink>
          <NavLink to="/dashboard/cvs/home-sddetuls">
            <span>تخصيص</span>
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Links;
