import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <Link aria-label="home" className={style.logo} to="/">
      <span>Siratuk</span>
    </Link>
  );
};

export default LogoHeader;
