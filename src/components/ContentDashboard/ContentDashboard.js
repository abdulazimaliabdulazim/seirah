import React from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import img1 from "../../images/home-img/id1.png";

const ContentDashboard = () => {
  return (
    <div className={style.ContentDashboard}>
      <Container>
        <div className={style.parent}>
          <Link to={"cvs"}>
            <img src={img1} alt="" />
            <div className={style.col}>
              <h3>السير الذاتية</h3>
              <h4>1</h4>
            </div>
          </Link>
          <p>أنشئ سير متخصصة حسب الجهات التي ترغب بالتقديم لها.</p>
        </div>
      </Container>
    </div>
  );
};

export default ContentDashboard;
