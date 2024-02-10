import React from "react";
import style from "./Logo.module.css";
import Container from "../../../Container/Container";
import MineHeader from "./MineHeader/MineHeader";
import UserImg from "../../../UserImg/UserImg";

const Logo = ({ name }) => {
  const targetSeirah =
    window.localStorage.getItem("targetSeirah") !== null
      ? window.localStorage.getItem("targetSeirah")
      : "1";
  const personal = JSON.parse(
    window.localStorage.getItem(`personal${targetSeirah}`)
  );

  return (
    <div className={style.parent}>
      <div className={style.child}>
        <Container>
          <div className={style.box}>
            <div className={style.logo}>
              <UserImg
                srcImg={personal !== null ? personal.srcImg1 : ""}
                radius={"50%"}
              />
            </div>
            <div className={style.detuls}>
              <h1>{personal !== null ? name : "مستخدم جديد"}</h1>
              <span>{personal !== null ? personal.position : "مجهول"}</span>
            </div>
          </div>
        </Container>
        <MineHeader />
      </div>
    </div>
  );
};

export default Logo;
