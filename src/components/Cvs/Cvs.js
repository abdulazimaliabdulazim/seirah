import React, { useState } from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Buttom from "../Form/Buttom/Buttom";
import Icons from "../Icons/Icons";
import UserImg from "../UserImg/UserImg";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";

const Cvs = () => {
  const { name } = useSelector((state) => state.personal);
  const [progress, setProgress] = useState("15%");
  return (
    <div className={style.cvs}>
      <Profile />
      <Container>
        <div className={style.listSeirah}>
          <span>قائمة السير الذاتية</span>
          <Buttom>أضف سيرة</Buttom>
        </div>
        <div className={style.box}>
          <div className={style.parent}>
            <Link className={style.img} to={"home-detuls/home-data"}>
              <UserImg radius="50%" />
              <div className={style.col}>
                <span>السيرة الذاتية الأساسية</span>
                <h4>{name}</h4>
              </div>
            </Link>
            <div className={style.line}>
              <div className={style.havi}>
                <div style={{ width: progress }} className={style.infuk}>
                  {progress}
                </div>
              </div>
            </div>
            <div className={style.pareControl}>
              <Link to={"home-detuls/home-data"} className={style.control}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
                تعديل البيانات
              </Link>
              <Link to={""} className={style.control}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
                تصميم
              </Link>
              <Link to={""} className={style.control}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
                تحميل
              </Link>
              <Link to={""} className={style.control}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
                تخصيص
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cvs;
