import React, { Fragment, useState } from "react";
import Profile from "../Profile/Profile";
import Links from "../Form/LinksParent/Links/Links";
import design from "./Design.module.css";
import Container from "../Container/Container";
import seirah1 from "../../images/seirah2.png";
import seirah2 from "../../images/seirah1.png";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { storePagesActions } from "../../sliceStores/sliceTwo";
import { getTitlePage } from "../Form/Pages/Qualifications/Home/Qualifications";

const Design = () => {
  getTitlePage();
  const transformSeirah = useSelector((state) => state.transformSeirah);
  const dispatch = useDispatch();
  const [detulsTem] = useState([
    { dispatch: "one", type: "التصميم الإفتراضي", srcImg: seirah1 },
    { dispatch: "two", type: "تشرين 👑", srcImg: seirah2 },
  ]);
  return (
    <Fragment>
      <Profile />
      <Links />
      <div className={design.design}>
        <Container>
          <div className={design.images}>
            {detulsTem.map((ele) => {
              return (
                <div
                  key={ele.dispatch}
                  onClick={() => {
                    dispatch(storePagesActions.transformSeirah(ele.dispatch));
                    window.localStorage.setItem(
                      "transformSeirah",
                      ele.dispatch
                    );
                  }}
                  className={design.parent_img}>
                  <p>مجاني</p>
                  <img src={ele.srcImg} alt="seirah1" />
                  <p>{ele.type}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className={design.background}>
        <div className={design.parent_design}>
          <div className={design.view}>
            <div className={design.text}>
              <p>
                {transformSeirah === "two" ? "تشرين 👑" : "التصميم الإفتراضي"}
              </p>
              <p>مجاني</p>
            </div>
            <Link className={design.viewSeirah} to="/seirah">
              معاينة السيرة
              <Icons
                path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                viewBox="0 0 24 24"
              />
            </Link>
          </div>
          <img
            src={transformSeirah === "one" ? seirah1 : seirah2}
            alt="seirah1"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Design;
