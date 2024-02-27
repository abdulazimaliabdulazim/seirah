import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Buttom from "../Form/Buttom/Buttom";
import Icons from "../Icons/Icons";
import UserImg from "../UserImg/UserImg";
import Profile from "../Profile/Profile";
import Progress from "./Progress/Progress";
import {
  getTitlePage,
  handleDelete,
} from "../Form/Pages/Qualifications/Home/Qualifications";
import { useDispatch, useSelector } from "react-redux";
import { storePagesActions } from "../../sliceStores/sliceTwo";
import jsomData from "../Form/Pages/JSON_date/data_inputs.json";

const Cvs = () => {
  getTitlePage();
  const arr = useSelector((state) => state.arr);

  const targetSeira = useSelector((state) => state.targetSeira);
  const [seirsAll, setSeirsAll] = useState(arr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storePagesActions.addSeirs([seirsAll, targetSeira]));
  }, [seirsAll, dispatch, targetSeira]);

  const obj = {};
  jsomData[0].map((url) => {
    return (obj[url.url] = []);
  });

  return (
    <div className={style.cvs}>
      <Profile />
      <Container>
        <div className={style.listSeirah}>
          <span>قائمة السير الذاتية</span>
          <Buttom
            onClick={() => {
              setSeirsAll((prevState) => [...prevState, obj]);
            }}>
            أضف سيرة
          </Buttom>
        </div>
        <div className={style.boxingAll}>
          {seirsAll.map((seirh, ind) => (
            <div key={ind} className={style.box}>
              <div className={style.parent}>
                <Link
                  onClick={() => {
                    dispatch(storePagesActions.addSeirs([seirsAll, ind]));
                  }}
                  className={style.img}
                  to="data/personal">
                  <UserImg
                    state={
                      seirh.personal !== undefined
                        ? seirh.personal.length >= 1
                          ? seirh.personal
                          : ""
                        : ""
                    }
                    index={0}
                    width="60px"
                    radius="50%"
                    hidden={false}
                  />
                  <div className={style.col}>
                    <span>السيرة الذاتية الأساسية</span>
                    <h4>
                      {seirh.personal !== undefined
                        ? seirh.personal.length >= 1
                          ? seirh.personal[0].name
                          : ""
                        : ""}
                    </h4>
                  </div>
                </Link>
                <Progress progress={""} />
                <div className={style.pareControl}>
                  <Link to="data/personal" className={style.control}>
                    <Icons
                      path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      viewBox="0 0 24 24"
                    />
                    تعديل البيانات
                  </Link>
                  <Link to="data/design" className={style.control}>
                    <Icons
                      path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      viewBox="0 0 24 24"
                    />
                    تصميم
                  </Link>
                  <Link to="data/download-share" className={style.control}>
                    <Icons
                      path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      viewBox="0 0 24 24"
                    />
                    تحميل
                  </Link>
                  <Link
                    onClick={() => handleDelete(ind, seirsAll, setSeirsAll)}
                    style={{ cursor: "no-drop" }}
                    to=""
                    className={style.control}>
                    <Icons
                      path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      viewBox="0 0 24 24"
                    />
                    حذف السيرة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cvs;
