import React, { Fragment } from "react";
import styleing from "./DownloadShare.module.css";
import Profile from "../Profile/Profile";
import Links from "../Form/LinksParent/Links/Links";
import Container from "../Container/Container";
import Icons from "../Icons/Icons";
import Progress from "../Cvs/Progress/Progress";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkUser } from "../Form/Pages/hendlerData/hendlerData";
import copy from "../../Framework/copy";

const DownloadShare = () => {
  const detulsUser = useSelector((state) => state.detulsUser);

  return (
    <Fragment>
      <Profile />
      <Links />
      <div className={styleing.header}>
        <p>تحميل ومشاركة السيرة</p>
      </div>
      <div className={styleing.DownloadShare}>
        <Container>
          <div className={styleing.box}>
            <Icons
              path={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
              viewBox={"0 0 24 24"}
            />
            <p>
              بعد إكمال بيانات سيرتك الذاتية، يمكنك تحميلها إلى جهازك أو نشر
              ومشاركة رابطها لمن يهمه الأمر.
            </p>
          </div>
          <div className={styleing.box2}>
            <div className={styleing.parent}>
              <Icons
                path={
                  "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                }
                viewBox={"0 0 24 24"}
              />
              <p>نسبة اكتمال السيرة</p>
            </div>
            <Progress />
          </div>
          <div className={styleing.copyLink}>
            <div className={styleing.link}>
              <Icons
                path={
                  "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                }
                viewBox={"0 0 24 24"}
              />
              <p>رابط سيرتك</p>
            </div>
            <div className={styleing.url}>
              <button onClick={(e) => copy(e.target.nextSibling)}>
                <Icons
                  path={
                    "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  }
                  viewBox={"0 0 24 24"}
                />
                نسخ الرابط
              </button>
              {`http://localhost:3000/seirah.com`}
              <Link to={`/seirah`}>
                معاينة السيرة
                <Icons
                  path={
                    "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  }
                  viewBox={"0 0 24 24"}
                />
              </Link>
            </div>
          </div>
          <div className={styleing.pdf}>
            <div className={styleing.headin}>
              <Icons
                path={
                  "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                }
              />
              <p>تحميل السيرة بصيغة صورة PNG</p>
            </div>
            <div className={styleing.parent}>
              <span>
                <Icons
                  path={
                    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  }
                  viewBox={"0 0 24 24"}
                />
                تحميل السيرة بصيغة صورة PNG
              </span>
              <span>عربي</span>
            </div>
            <div className={styleing.parent}>
              <span>
                <Icons
                  path={
                    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  }
                  viewBox={"0 0 24 24"}
                />
                تحميل السيرة بصيغة صورة PNG
              </span>
              <span dir="ltr">English</span>
            </div>
          </div>
          <div className={styleing.pdf}>
            <div className={styleing.headin}>
              <Icons
                path={
                  "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                }
              />
              <p>تحميل السيرة PDF</p>
            </div>
            <div className={styleing.mauty}>
              <Icons
                path={
                  "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                }
                viewBox={"0 0 384 512"}
              />
              متعددة الصفحات
            </div>
            <div className={styleing.parent}>
              <span>
                <Icons
                  path={
                    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  }
                  viewBox={"0 0 24 24"}
                />
                تحميل السيرة بصيغة PDF
              </span>
              <span>عربي</span>
            </div>
            <div className={styleing.parent}>
              <span>
                <Icons
                  path={
                    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  }
                  viewBox={"0 0 24 24"}
                />
                تحميل السيرة بصيغة PDF
              </span>
              <span dir="ltr">English</span>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default DownloadShare;
