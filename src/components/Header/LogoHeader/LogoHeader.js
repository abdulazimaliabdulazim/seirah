import React from "react";
import style from "./style.module.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <Link aria-label="home" className={style.logo} to={"/"}>
      <img src={logo} alt="logo" />
      <span>سيَرٍتگ</span>
    </Link>
  );
};

export default LogoHeader;
