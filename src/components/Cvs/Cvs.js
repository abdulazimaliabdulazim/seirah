import React, { useState } from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import { Link, useNavigate } from "react-router-dom";
import Buttom from "../Form/Buttom/Buttom";
import Icons from "../Icons/Icons";
import UserImg from "../UserImg/UserImg";
import Profile from "../Profile/Profile";
import Progress from "./Progress/Progress";
import { fetchDateAllSeirah } from "../Form/Pages/hendlerData/hendlerData";
import { useSelector } from "react-redux";

const Cvs = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  const [progressAll] = useState([]);
  const progress = useSelector((state) => state[`progress${targetSeirah}`]);
  progressAll.push(progress);

  const counViewSe = window.localStorage.getItem("counViewSe");
  const [stateCoun, setStateCoun] = useState(
    counViewSe !== null ? JSON.parse(counViewSe) : []
  );
  window.localStorage.setItem("counViewSe", JSON.stringify(stateCoun));

  const dataAllFun = () => {
    const dataAll = [];
    for (let i = 1; i <= stateCoun.length; i++) {
      dataAll.push(fetchDateAllSeirah(i));
    }
    return dataAll;
  };

  const [seirsAll, setSeirsAll] = useState(dataAllFun());
  window.localStorage.setItem("countseirah", seirsAll.length);

  const navigat = useNavigate();

  const deleteFunc = (indFunc) =>
    setSeirsAll((preveState) =>
      preveState.filter((ele, ind) => ind !== indFunc)
    );
  return (
    <div className={style.cvs}>
      <Profile />
      <Container>
        <div className={style.listSeirah}>
          <span>قائمة السير الذاتية</span>
          <Link to={"data/personal"}></Link>
          <Buttom
            onClick={() => {
              setStateCoun([...stateCoun, 1]);
              setTimeout(() => {
                navigat("data/personal");
              }, 10);
            }}>
            أضف سيرة
          </Buttom>
        </div>
        <div className={style.boxingAll}>
          {seirsAll.map((seirh, ind) => (
            <div key={ind} className={style.box}>
              {window.localStorage.setItem("targetSeirah", ind + 2)}
              <div className={style.parent}>
                <Link
                  onClick={() =>
                    window.localStorage.setItem("targetSeirah", ind + 1)
                  }
                  className={style.img}
                  to={"data/personal"}>
                  <UserImg
                    srcImg={seirh[0] !== null ? seirh[0].srcImg1 : ""}
                    radius="50%"
                  />
                  <div className={style.col}>
                    <span>السيرة الذاتية الأساسية</span>
                    <h4>{seirh[0] !== null ? seirh[0].name : ""}</h4>
                  </div>
                </Link>
                <Progress progress={10} />
                <div className={style.pareControl}>
                  <Link
                    onClick={() =>
                      window.localStorage.setItem("targetSeirah", ind + 1)
                    }
                    to={"data/personal"}
                    className={style.control}>
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
                  <Link
                    onClick={() =>
                      window.localStorage.setItem("targetSeirah", ind + 1)
                    }
                    to={"data/download-share"}
                    className={style.control}>
                    <Icons
                      path={
                        "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      }
                      viewBox={"0 0 24 24"}
                    />
                    تحميل
                  </Link>
                  <Link
                    onClick={() => {
                      deleteFunc(ind);
                      setStateCoun(stateCoun.slice(1));
                      fetchDateAllSeirah(ind + 1, false);
                    }}
                    to={""}
                    className={style.control}>
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
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cvs;
