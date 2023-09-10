import React from "react";
import style from "./SecMan.module.css";
import Container from "../Container/Container";

const SecMan = () => {
  return (
    <div className={style.parent}>
      <Container>
        <h1>
          سيرة ذاتية مختلفة، عصرية، مدروسة بعناية لتساعدك في الحصول على وظيفتك
          المثالية
        </h1>
        <button>إدارة سيرك الذاتية</button>
      </Container>
    </div>
  );
};

export default SecMan;
