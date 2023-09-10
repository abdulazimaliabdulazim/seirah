import React from "react";
import style from "./Section.module.css";
import Container from "../Container/Container";
import Icons from "../Icons/Icons";
import img_home from "../../images/home-img/home-image.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className={style.parent}>
      <Container>
        <div className={style.child_parent}>
          <a className={style.link} href="#s">
            <span>⧓</span> أنشئ سيرتك الذاتية <span>بدقيقتين</span>
            <span>⌛️</span>
          </a>
          <h1>
            <span>سيرة</span> يساعدك في الحصول علي <br /> الوظيفة التي تستحق.
          </h1>
          <ul>
            <li>
              <Icons
                path={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                viewBox={"0 0 24 24"}
              />
              أنشئ سيرة إحترافية متعددة اللغات بدقائق.
            </li>
            <li>
              <Icons
                path={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                viewBox={"0 0 24 24"}
              />
              إطبع، أنشر، أو أرسل سيرتك مباشرة للشركات المهتم بالعمل معهم.
            </li>
            <li>
              <Icons
                path={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                viewBox={"0 0 24 24"}
              />
              أضف رغباتك الوظيفة حسب شروطك.
            </li>
            <li>
              <Icons
                path={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                viewBox={"0 0 24 24"}
              />
              ابحث عن الوظائف المتوافقة مع رغباتك. وغيرها الكثير،
              <span>مجّاناً</span>.
            </li>
          </ul>
          <Link to="home-detuls/home-data">
            <button className={style.butManger}>إدارة سيرك الذاتية</button>
          </Link>
        </div>
        <div className={style.image}>
          <img src={img_home} alt="home" />
        </div>
      </Container>
    </div>
  );
};

export default Section;
