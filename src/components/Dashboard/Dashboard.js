import React, { Fragment } from "react";
import style from "./style.module.css";
import ContentDashboard from "../ContentDashboard/ContentDashboard";
import Profile from "../Profile/Profile";
import UserImg from "../UserImg/UserImg";
import Container from "../Container/Container";
import Icons from "../Icons/Icons";
import { useSelector } from "react-redux";
import { allSeirah } from "../Form/Pages/hendlerData/hendlerData";
import { getTitlePage } from "../Form/Pages/Qualifications/Home/Qualifications";

const Dashboard = () => {
  getTitlePage();
  const dateNew = new Date().getDay();
  const [, { date }] = useSelector((state) => state.detulsUser);
  const personal = useSelector((state) => state.personal);

  return (
    <Fragment>
      <Profile />
      <div className={style.detulsPersonal}>
        <Container>
          <div className={style.detuls}>
            <UserImg
              state={personal !== undefined ? personal : ""}
              index={0}
              width="60px"
              radius="50%"
              hidden={false}
            />
            <div className={style.box}>
              <h2>
                <span>أهلاً</span>
                {personal !== undefined ? personal[0].name : ""}🖐
              </h2>
            </div>
          </div>
          <div className={style.name}>
            <div className={style.date}>
              <Icons
                path="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                viewBox="0 0 24 24"
              />
              <span>{`عضو منذ ${dateNew - date} يوم`}</span>
            </div>
            <div className={style.paca}>
              <Icons
                path="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                viewBox="0 0 24 24"
              />
              <span>الباقة المجانية</span>
            </div>
            <div className={style.email}>
              <Icons
                path="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                viewBox="0 0 20 20"
              />
              <span>حساب نشط</span>
            </div>
          </div>
        </Container>
      </div>
      <ContentDashboard />
    </Fragment>
  );
};

export default Dashboard;
