import React from "react";
import style from "./Logo.module.css";
import Container from "../../../Container/Container";
import MineHeader from "./MineHeader/MineHeader";
import UserImg from "../../../UserImg/UserImg";

const Logo = () => {
  const personal = JSON.parse(window.localStorage.getItem("dataPersonal"));

  return (
    <div className={style.parent}>
      <div className={style.child}>
        <Container>
          <div className={style.box}>
            <div className={style.logo}>
              <UserImg radius={"50%"} />
            </div>
            <div className={style.detuls}>
              <h1>{personal === null ? "مستخدم جديد" : personal.name}</h1>
              <span>{personal === null ? "مجهول" : personal.position}</span>
            </div>
          </div>
        </Container>
        <MineHeader />
      </div>
    </div>
  );
};

export default Logo;
