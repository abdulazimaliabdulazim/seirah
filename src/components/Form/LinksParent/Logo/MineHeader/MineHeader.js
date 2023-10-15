import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MineHeader.module.css";
import { useDispatch } from "react-redux";
import dataUrlJson from "../../../Pages/JSON_date/data_inputs.json";
import { counterActions } from "../../../../../sliceStores/sliceTwo";

const MineHeader = () => {
  const dispatch = useDispatch();
  const data = dataUrlJson;

  return (
    <header className={style.parent}>
      <nav>
        {data[0].map((ele, ind) => {
          return (
            <NavLink
              key={ind}
              onClick={() => dispatch(counterActions[`name_${ele.url}`]())}
              to={ele.url}>
              {ele.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
export default MineHeader;
