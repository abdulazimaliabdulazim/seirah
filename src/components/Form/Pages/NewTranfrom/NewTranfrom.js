import React from "react";
import style from "./NewTranfrom.module.css";
import Icons from "../../../Icons/Icons";
import Button from "../../Buttom/Buttom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../../sliceStores/sliceTwo";
import json from "../JSON_date/data_inputs.json";
import { nextPage } from "../hendlerData/hendlerData";

const NewTranfrom = () => {
  const textPage = useSelector((state) => state.textPage);
  window.localStorage.setItem("textPage", textPage);

  const ulrsPages = json[13];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const varNextPages = ulrsPages[ulrsPages.indexOf(nextPage().join("")) + 1];
  return (
    <div className={style.transfrom}>
      <div className={style.flex}>
        <Icons
          path={
            "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          }
          viewBox={"0 0 20 20"}
        />
        <div className={style.text}>
          <strong>{textPage}</strong>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate(varNextPages);
          if (
            varNextPages !== undefined &&
            varNextPages !== "/dashboard/cvs/data/download-share"
          ) {
            dispatch(counterActions[`name_${varNextPages.split("/")[4]}`]());
          }
        }}
        text={"التالي"}
      />
    </div>
  );
};

export default NewTranfrom;
