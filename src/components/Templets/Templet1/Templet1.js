import React, { useRef } from "react";
import templet from "./templet.module.css";
import Container from "../../Container/Container";
import UserImg from "../../UserImg/UserImg";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Icons from "../../Icons/Icons";

const Templet1 = () => {
  const {
    name,
    position,
    phone_number,
    email,
    iam,
    personal_website,
    six,
    date,
    stits,
    country,
    nationality,
  } = useSelector((state) => state.personal);
  const experiences = useSelector((state) => state.experiences);
  const pdfRef = useRef();
  const key = Object.values(experiences).filter((ele) => ele !== "").length / 4;

  for (let i = 1; i <= 20; i = i + 5) {
    console.log(experiences[`job${i}`]);
  }
  console.log(key);
  return (
    <div className={templet.templetOne} ref={pdfRef}>
      <div className={templet.header}>
        <Container>
          <img src={logo} alt="logo" />
          <Link>عربي</Link>
          <Link>English</Link>
        </Container>
      </div>
      <Container>
        <div className={templet.box}>
          <div className={templet.colOne}>
            <UserImg radius="50%" width="80px" />
            <h1>{name}</h1>
            <span>{position}</span>
          </div>
          <hr />
          <div className={templet.colTwo}>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{phone_number}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{email}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal_website}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{six}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{date}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{stits}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{country}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{nationality}</span>
            </div>
          </div>
          <div className={templet.textAria}>
            <p>{iam}</p>
          </div>
          <div className={templet.experiences}>
            <div className={templet.hedin}>
              <h4>الخبرات العمليّة</h4>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              <div className={templet.detuls}>
                <div className={templet.date}>
                  <Icons
                    path={
                      "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    }
                    viewBox={"0 0 24 24"}
                  />
                  <span>2023-7-29</span>
                  <span>-</span>
                  <span>2022-5-7</span>
                </div>
                <div className={templet.info}>
                  <h1>Smart</h1>
                  <p>مكتبة لطباعة كتب IG</p>
                  <p>اسوء ناس</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Templet1;
