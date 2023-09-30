import React, { useState } from "react";
import style from "./style.module.css";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import ParentInput from "../Form/Pages/Personal_data/Home/ParentInput/ParentInput";
import Buttom from "../Form/Buttom/Buttom";

const Register = () => {
  let emptyUser = { name: "", password: "" };
  const detulsUser = () => {
    let getuser = window.localStorage.getItem("userDetuls");
    if (getuser) {
      return JSON.parse(getuser);
    } else {
      return emptyUser;
    }
  };
  const [userDetuls, setUserDetuls] = useState(detulsUser);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("userDetuls", JSON.stringify(userDetuls));
    navigate("/dashboard", { replace: true });
  };
  const hendlerInput = (e) => {
    let id = e.target.id;
    setUserDetuls((prev) => {
      return { ...prev, [id]: e.target.value };
    });
  };
  return (
    <div className={style.register}>
      <div className={style.parent}>
        <div className={style.continer}>
          <div className={style.content}>
            <LogoHeader />
            <h1>أنشئ حساب جديد</h1>
            <p>
              أو <Link to={"/login"}>سجّل دخولك من هنا</Link>
            </p>
          </div>
        </div>
        <div className={style.login}>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <ParentInput hedinSpan={false}>
              <label htmlFor="name">اسمك</label>
              <input
                required
                onChange={(e) => hendlerInput(e)}
                id={"name"}
                value={userDetuls.name}
                type="text"
              />
              <label htmlFor="password">كلمة المرور</label>
              <input
                autoComplete="offoff"
                required
                onChange={(e) => hendlerInput(e)}
                id={"password"}
                value={userDetuls.password}
                type="password"
              />
              <Buttom>أنشئ الحساب</Buttom>
            </ParentInput>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
