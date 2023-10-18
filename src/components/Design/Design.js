import React, { Fragment } from "react";
import Profile from "../Profile/Profile";
import Links from "../Form/LinksParent/Links/Links";
import design from "./Design.module.css";
import Container from "../Container/Container";
import seirah1 from "../../images/seirah2.png";
import seirah2 from "../../images/seirah1.png";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../sliceStores/sliceTwo";

const Design = () => {
  const transformSeirah = useSelector((state) => state.transformSeirah); // templsertOne
  const transformSeirahTemplet = useSelector(
    (state) => state.transformSeirahTemplet
  ); // transformSeirahTemplet
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Profile />
      <Links />
      <div className={design.design}>
        <Container>
          <div className={design.images}>
            <div
              onClick={() => dispatch(counterActions.transformSeirahOne())}
              className={design.parent_img}>
              <p>مجاني </p>
              <img src={seirah1} alt="seirah1" />
              <p>التصميم الإفتراضي</p>
            </div>
            <div
              onClick={() => dispatch(counterActions.transformSeirahTwo())}
              className={design.parent_img}>
              <p>مجاني </p>
              <img src={seirah2} alt="seirah2" />
              <p>تشرين 👑</p>
            </div>
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
            {transformSeirahTemplet === "oneTemplet" ? (
              <Link className={design.viewSeirah} to={`/seirah`}>
                معاينة السيرة
                <Icons
                  path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  viewBox="0 0 24 24"
                />
              </Link>
            ) : (
              <Fragment>
                <button
                  onClick={(e) => {
                    e.target.style.display = "none";
                    dispatch(counterActions.transformSeirah());
                  }}
                  className={design.transformSeirah}
                  to={`/seirah`}>
                  <Icons
                    path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    viewBox="0 0 24 24"
                  />
                  استخدام هذا القالب
                </button>
              </Fragment>
            )}
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
