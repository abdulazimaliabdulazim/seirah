import React from "react";
import { Link } from "react-router-dom";
import style from "./Links.module.css";
import Container from "../../../Container/Container";

const Links = () => {
  return (
    <header className={style.parent}>
      <Container>
        <nav>
          <Link to="#">
            <span>بيانات السيرة</span>
          </Link>
          <Link to="#">
            <span>التصميم</span>
          </Link>
          <Link to="#">
            <span>تحميل ومشاركة</span>
          </Link>
          <Link to="#">
            <span>تخصيص</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Links;
