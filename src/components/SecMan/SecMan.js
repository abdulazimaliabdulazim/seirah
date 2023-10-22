import React from "react";
import style from "./SecMan.module.css";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SecMan = () => {
  const getUser = useSelector((state) => state.detulsUser);
  const checkd = getUser === null;
  return (
    <div className={style.parent}>
      <Container>
        <h1>
          سيرة ذاتية مختلفة، عصرية، مدروسة بعناية لتساعدك في الحصول على وظيفتك
          المثالية
        </h1>
        <Link to={checkd ? "register" : "dashboard"}>
          <button>{checkd ? "أنشئ سيرتك الآن" : "إدارة سيرك الذاتية"}</button>
        </Link>
      </Container>
    </div>
  );
};

export default SecMan;
