import React from "react";
import style from "./SecMan.module.css";
import Container from "../Container/Container";
import { useAuth } from "../Auth/Auth";

const SecMan = () => {
  const auth = useAuth();
  return (
    <div className={style.parent}>
      <Container>
        <h1>
          سيرة ذاتية مختلفة، عصرية، مدروسة بعناية لتساعدك في الحصول على وظيفتك
          المثالية
        </h1>
        <button>
          {auth.user === null ? "أنشئ سيرتك الآن" : "إدارة سيرك الذاتية"}
        </button>
      </Container>
    </div>
  );
};

export default SecMan;
