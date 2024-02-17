import React from "react";
import style from "./Logo.module.css";
import Container from "../../../Container/Container";
import MineHeader from "./MineHeader/MineHeader";
import UserImg from "../../../UserImg/UserImg";
import { useSelector } from "react-redux";

const Logo = ({ personalLive }) => {
  const targetSeirah =
    window.localStorage.getItem("targetSeirah") !== null
      ? window.localStorage.getItem("targetSeirah")
      : "1";
  const personal = JSON.parse(window.localStorage.getItem("personal"));

  // const reduxPersonal = useSelector((state) => state.personal);

  // console.log(reduxPersonal);

  return (
    <div className={style.parent}>
      <div className={style.child}>
        <Container>
          <div className={style.box}>
            <div className={style.logo}>
              <UserImg
                state={personalLive}
                index={0}
                radius="12px"
                width="80px"
                hidden={false}
              />
            </div>
            <div className={style.detuls}>
              <h1>
                {personalLive[0].name !== ""
                  ? personalLive[0].name
                  : "مستخدم جديد"}
              </h1>
              <span>
                {Array.isArray(personalLive)
                  ? personalLive[0].position
                  : "مجهول"}
              </span>
            </div>
          </div>
        </Container>
        <MineHeader />
      </div>
    </div>
  );
};

export default Logo;
