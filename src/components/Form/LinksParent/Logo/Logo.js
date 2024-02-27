import React from "react";
import style from "./Logo.module.css";
import Container from "../../../Container/Container";
import MineHeader from "./MineHeader/MineHeader";
import UserImg from "../../../UserImg/UserImg";
import { useSelector } from "react-redux";

const Logo = () => {
  const personal = useSelector((state) => state.personal);

  const seirsAll = useSelector((state) => state.arr);

  const targetSeira = useSelector((state) => state.targetSeira);

  const checkdForDataIsNotEmpty = () => {
    if (seirsAll.length >= 1) {
      return seirsAll;
    } else {
    }
    console.log();
    // console.log(1 < 2);
  };

  checkdForDataIsNotEmpty();
  return (
    <div className={style.parent}>
      <div className={style.child}>
        <Container>
          <div className={style.box}>
            <div className={style.logo}>
              <UserImg
                state={`
                  seirsAll[targetSeira].personal !== undefined
                    ? seirsAll[targetSeira].personal
                    : ""`}
                index={0}
                radius="12px"
                width="80px"
                hidden={false}
              />
            </div>
            <div className={style.detuls}>
              <h1>
                {`seirsAll[targetSeira].personal !== undefined
                  ? seirsAll[targetSeira].personal[0].name
                  : "مستخدم جديد"`}
              </h1>
              <span>
                {`seirsAll[targetSeira].personal !== undefined
                  ? seirsAll[targetSeira].personal[0].position
                  : "مجهول"`}
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
