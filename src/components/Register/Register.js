import React, { Fragment, useState } from "react";
import style from "./style.module.css";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import { Link, useNavigate } from "react-router-dom";
import ParentInput from "../Form/Pages/Personal_data/Home/ParentInput/ParentInput";
import Buttom from "../Form/Buttom/Buttom";
import json from "../Form/Pages/JSON_date/data_inputs.json";
import hendlerData, {
  generatorId,
  getFormValues,
} from "../Form/Pages/hendlerData/hendlerData";
import { useDispatch } from "react-redux";
import { storePagesActions } from "../../sliceStores/sliceTwo";
import Container from "../Container/Container";

const Register = () => {
  const date = new Date().getDate();
  const [userDetuls, setUserDetuls] = useState(
    getFormValues("detulsUser", false)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const arryOfObjectData = [userDetuls, { date: date }, { id: generatorId }];

  const onSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("detulsUser", JSON.stringify(arryOfObjectData));
    dispatch(storePagesActions.detulsUser(arryOfObjectData));
    if (userDetuls.name !== undefined && userDetuls.password !== undefined) {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <div className={style.register}>
      <Container>
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
            <form>
              <ParentInput hedinSpan={false}>
                {json[10].map((input, ind) => {
                  return (
                    <Fragment key={ind}>
                      <label htmlFor={input.id}>{input.label}</label>
                      <input
                        autoComplete={
                          userDetuls !== undefined ? userDetuls[input.id] : ""
                        }
                        required
                        onChange={(e) => hendlerData(e, setUserDetuls)}
                        id={input.id}
                        type={input.type}
                        value={
                          userDetuls !== undefined ? userDetuls[input.id] : ""
                        }
                      />
                    </Fragment>
                  );
                })}
                <Buttom onClick={onSubmit}>أنشئ الحساب</Buttom>
              </ParentInput>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
