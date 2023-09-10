import React from "react";
import logo from "../../images/logo.png";
import style from "./style.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <Container>
      <div className={style.parent}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h1>سيرة</h1>
        </div>
        <div className={style.maniger}>
          <a href="a">إدارة الحساب</a>
          <a href="a">خروج</a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
