import React from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import { useAuth } from "../Auth/Auth";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import LogoHeader from "./LogoHeader/LogoHeader";

const Header = () => {
  const auth = useAuth();
  const nullUser = auth.user === null;
  return (
    <div className={style.header}>
      <Container>
        <LogoHeader />
        <div className={style.maniger}>
          <Link to={nullUser ? "register" : "dashboard"}>
            <Icons path={"M12 6v6m0 0v6m0-6h6m-6 0H6"} viewBox={"0 0 24 24"} />
            {nullUser ? "أنشئ حساب جديد" : "إدارة الحساب"}
          </Link>
          <a
            onClick={() => {
              auth.logout();
              window.localStorage.removeItem("userDetuls");
            }}
            href="#a">
            <Icons
              path={
                "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              }
              viewBox={"0 0 24 24"}
            />
            {auth.user === null ? "دخول" : "خروج"}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
