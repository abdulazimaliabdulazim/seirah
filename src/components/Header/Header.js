import React from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import LogoHeader from "./LogoHeader/LogoHeader";
import { useSelector } from "react-redux";

const Header = () => {
  const getUser = useSelector((state) => state.detulsUser);
  const checkd = getUser === null;

  return (
    <div className={style.header}>
      <Container>
        <LogoHeader />
        <div className={style.maniger}>
          <Link to={checkd ? "register" : "dashboard"}>
            <Icons path={"M12 6v6m0 0v6m0-6h6m-6 0H6"} viewBox={"0 0 24 24"} />
            {checkd ? "أنشئ حساب جديد" : "إدارة الحساب"}
          </Link>
          <a
            onClick={() => {
              window.localStorage.removeItem("detulsUser");
              window.location.reload();
            }}
            href="#a">
            <Icons
              path={
                "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              }
              viewBox={"0 0 24 24"}
            />
            {checkd ? "دخول" : "خروج"}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
