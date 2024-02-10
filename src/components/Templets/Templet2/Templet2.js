import React from "react";
import templet2 from "./Templet2.module.css";
import Container from "../../Container/Container";
import UserImg from "../../UserImg/UserImg";
import Icons from "../../Icons/Icons";
import { HeaderTemplet } from "../Templet1/Templet1";
import { useSelector } from "react-redux";
import download from "../../../Framework/pdf";

const Templet2 = ({
  personal,
  experiencesFinal,
  qualificationsFinal,
  coursessFinal,
  projectsFinal,
  skilsFinal,
  return_Final,
  languagesFinal,
  linksFinal,
  hobbiesFinal,
  address,
}) => {
  const checkdPdf = useSelector((state) => state.downloadPdf);
  download(checkdPdf, personal !== undefined ? personal.name : "");

  return (
    <div className={templet2.parent}>
      <HeaderTemplet />
      <Container>
        <div id="faund" className={templet2.container}>
          <div className={templet2.persnal_date}>
            <div className={templet2.col_one}>
              <UserImg
                srcImg={personal !== undefined ? personal.srcImg1 : ""}
                width="150px"
                radius="5px"
              />
              <div className={templet2.name_position}>
                <h2>{personal !== undefined ? personal.name : ""}</h2>
                <h4>{personal !== undefined ? personal.position : ""}</h4>
              </div>
            </div>
            <div className={templet2.cor_two}>
              <p>{personal !== undefined ? personal.iam : ""}</p>
            </div>
            <div className={templet2.conect}>
              <h2 className={templet2.frimwork_o}>معلومات الاتصال</h2>
              <div className={templet2.parent_icons}>
                <div className={templet2.col}>
                  <span>
                    <Icons
                      path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>
                    {personal !== undefined ? personal.phone_number : ""}
                  </span>
                </div>
                <div className={templet2.col}>
                  <span>
                    <Icons
                      path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>{personal !== undefined ? personal.email : ""}</span>
                </div>
                <div className={templet2.col}>
                  <span>
                    <Icons
                      path="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>
                    <a
                      href={
                        personal !== undefined ? personal.personal_website : ""
                      }
                      target="_blanck">
                      <span>
                        {personal !== undefined
                          ? personal.personal_website
                          : ""}
                      </span>
                    </a>
                  </span>
                </div>
                <div className={templet2.col}>
                  <span className={templet2.icon}>
                    <Icons
                      path="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>{personal !== undefined ? personal.six : ""}</span>
                </div>
                <div className={templet2.col}>
                  <span className={templet2.icon}>
                    <Icons
                      path="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>{personal !== undefined ? personal.date : ""}</span>
                </div>
                <div className={templet2.col}>
                  <span className={templet2.icon}>
                    <Icons
                      path={
                        "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      }
                      viewBox={"0 0 24 24"}
                    />
                  </span>
                  <span>{personal !== undefined ? personal.stits : ""}</span>
                </div>
                <div className={templet2.col}>
                  <span className={templet2.icon}>
                    <Icons
                      path="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span>{personal !== undefined ? personal.country : ""}</span>
                </div>
                <div className={templet2.col}>
                  <span className={templet2.icon}>
                    <Icons
                      path={
                        "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      }
                      viewBox={"0 0 24 24"}
                    />
                  </span>
                  <span>
                    {personal !== undefined ? personal.nationality : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className={templet2.address}>
              <h2 className={templet2.frimwork_o}>العنوان الوطني</h2>
              <p>{address !== undefined ? address.address : ""}</p>
            </div>
            <div className={templet2.skils}>
              <h2 className={templet2.frimwork_o}>المهارات</h2>
              {skilsFinal.map((ele, ind) => {
                return (
                  ele.skilsId !== undefined && (
                    <div key={ind} className={templet2.boxLevils}>
                      <div className={templet2.skil}>
                        <div
                          style={{
                            width:
                              ele.skils !== undefined
                                ? ele.skils.split(" ")[0]
                                : "",
                          }}>
                          {ele.skilsId}
                        </div>
                      </div>
                      <div className={templet2.lesvel}>
                        {ele.skils !== undefined ? ele.skils.split(" ")[1] : ""}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.languages}>
              <h2 className={templet2.frimwork_o}>اللغات</h2>
              {languagesFinal.map((ele, ind) => {
                return (
                  ele.lang !== undefined && (
                    <div key={ind} className={templet2.boxLevils}>
                      <div className={templet2.langua}>
                        <div>{ele.lang}</div>
                      </div>
                      <div
                        style={{ padding: "4px 8px", fontSize: "1rem" }}
                        className={templet2.lesvel}>
                        {ele.levelLang}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.links}>
              <h2 className={templet2.frimwork_o}>روابط</h2>
              {linksFinal.map((ele, ind) => {
                return (
                  ele.networck !== undefined && (
                    <div key={ind} className={templet2.boxLevils}>
                      <div className={templet2.langua}>
                        <div>{ele.networck}</div>
                      </div>
                      <div
                        dir="ltr"
                        onClick={() => window.open(ele.link)}
                        style={{ padding: "4px 8px", cursor: "pointer" }}
                        className={templet2.lesvel}>
                        <Icons
                          path="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          viewBox="0 0 24 24"
                        />
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.hobbies}>
              <h2 className={templet2.frimwork_o}>الهوايات</h2>
              <div className={templet2.par}>
                {hobbiesFinal.map((ele, ind) => {
                  return (
                    ele.hobbie !== undefined && (
                      <div key={ind} className={templet2.hobbie}>
                        {ele.hobbie}
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
          <div className={templet2.detuls_information}>
            <div className={templet2.experiences}>
              <h2 className={templet2.frimwork_o}>الخبرات العمليّة</h2>
              {experiencesFinal.map((ele, ind) => {
                return (
                  ele.job !== undefined && (
                    <div key={ind} className={templet2.detuls}>
                      <div className={templet2.date}>
                        <span>{ele.dateTwo.reverse().join("-")}</span>
                        <span>-</span>
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet2.info}>
                        <span>{ele.job}</span>
                        <span>{ele.jobTitle}</span>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.qualifications}>
              <h2 className={templet2.frimwork_o}>المؤهلات العلميّة</h2>
              {qualificationsFinal.map((ele, ind) => {
                return (
                  ele.education !== undefined && (
                    <div key={ind} className={templet2.detuls}>
                      <div className={templet2.date}>
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet2.info}>
                        <span>{ele.education}</span>
                        <span>{ele.degree} -</span>
                        <span> {ele.specializat}</span>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.coursess}>
              <h2 className={templet2.frimwork_o}>الدورات التدريبية</h2>
              {coursessFinal.map((ele, ind) => {
                return (
                  ele.cours !== undefined && (
                    <div key={ind} className={templet2.detuls}>
                      <div className={templet2.date}>
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet2.info}>
                        <span>{ele.mantur}</span>
                        <span>{ele.cours}</span>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.projects}>
              <h2 className={templet2.frimwork_o}>الإنجازات والمشاريع</h2>
              {projectsFinal.map((ele, ind) => {
                return (
                  ele.link !== undefined && (
                    <div key={ind} className={templet2.detuls}>
                      <div className={templet2.date}>
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet2.info}>
                        <a href={ele.link}>
                          <span>{ele.name}</span>
                        </a>
                        <p>{ele.brief}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className={templet2.return}>
              <h2 className={templet2.frimwork_o}>المراجع</h2>
              {return_Final.map((ele, ind) => {
                return (
                  ele.name !== undefined && (
                    <div key={ind} className={templet2.detuls}>
                      <div className={templet2.date}>
                        <span>{ele.email}</span>
                        <span>-</span>
                        <span>{ele.number_phone}</span>
                      </div>
                      <div className={templet2.info}>
                        <span>{ele.name}</span>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Templet2;
