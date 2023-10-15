import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Links.module.css";
import Container from "../../../Container/Container";

const Links = () => {
  return (
    <header className={style.parent}>
      <Container>
        <nav>
          <NavLink to={`/dashboard/cvs/data/personal`}>
            <span>بيانات السيرة</span>
          </NavLink>
          <NavLink to={`/dashboard/cvs/data/download-share`}>
            <span>التصميم</span>
          </NavLink>
          <NavLink to={`/dashboard/cvs/data/download-share`}>
            <span>تحميل ومشاركة</span>
          </NavLink>
          <NavLink to={`/dashboard/cvs/data/s`}>
            <span>تخصيص</span>
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Links;
