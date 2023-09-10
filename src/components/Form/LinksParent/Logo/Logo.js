import React from "react";
import style from "./Logo.module.css";
import img from "../../../../images/user.png";
import Container from "../../../Container/Container";
import MineHeader from "./MineHeader/MineHeader";

const Logo = () => {
  return (
    <div className={style.parent}>
      <div className={style.child}>
        <Container>
          <div className={style.box}>
            <div className={style.logo}>
              <img src={img} alt="logo" />
            </div>
            <div className={style.detuls}>
              <h1>عبدالعظيم علي عبدالعظيم بغدادي</h1>
              <span>Frontend Dveloper</span>
            </div>
          </div>
        </Container>
        <MineHeader />
      </div>
    </div>
  );
};

export default Logo;
