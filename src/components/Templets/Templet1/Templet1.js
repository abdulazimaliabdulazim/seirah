import React, { useRef } from "react";
import templet from "./templet.module.css";
import Container from "../../Container/Container";
import UserImg from "../../UserImg/UserImg";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import Icons from "../../Icons/Icons";
import {
  allSeirah,
  outbotValuesArrayInMineObjectPages,
} from "../../Form/Pages/hendlerData/hendlerData";
import dawnloadPdf from "../../../Framework/pdf";
import dawnloadImg from "../../../Framework/png";

const Templet1 = () => {
  const pdfRef = useRef(),
    targetSeirah = window.localStorage.getItem("targetSeirah"),
    personal = allSeirah("personal")[targetSeirah - 1],
    qualifications = allSeirah("qualifications")[targetSeirah - 1],
    experiences = allSeirah("experiences")[targetSeirah - 1],
    coursess = allSeirah("coursess")[targetSeirah - 1],
    projects = allSeirah("projects")[targetSeirah - 1],
    address = allSeirah("address")[targetSeirah - 1],
    skils = allSeirah("skils")[targetSeirah - 1],
    return_ = allSeirah("return")[targetSeirah - 1],
    languages = allSeirah("languages")[targetSeirah - 1],
    links = allSeirah("links")[targetSeirah - 1],
    hobbies = allSeirah("hobbies")[targetSeirah - 1];

  const experiencesFinal = [];
  outbotValuesArrayInMineObjectPages(
    experiencesFinal,
    experiences,
    true,
    "job",
    "jobTitle",
    "esy"
  );
  const qualificationsFinal = [];
  outbotValuesArrayInMineObjectPages(
    qualificationsFinal,
    qualifications,
    true,
    "education",
    "specializat",
    "esy",
    "degree"
  );
  const coursessFinal = [];
  outbotValuesArrayInMineObjectPages(
    coursessFinal,
    coursess,
    true,
    "cours",
    "mantur",
    "esy",
    ""
  );
  const projectsFinal = [];
  outbotValuesArrayInMineObjectPages(
    projectsFinal,
    projects,
    true,
    "name",
    "link",
    "brief"
  );
  const skilsFinal = [];
  outbotValuesArrayInMineObjectPages(
    skilsFinal,
    skils,
    false,
    "skils",
    "skilsId"
  );
  const return_Final = [];
  outbotValuesArrayInMineObjectPages(
    return_Final,
    return_,
    false,
    "name",
    "number_phone",
    "email",
    "esy"
  );
  const languagesFinal = [];
  outbotValuesArrayInMineObjectPages(
    languagesFinal,
    languages,
    false,
    "lang",
    "levelLang"
  );
  const linksFinal = [];
  outbotValuesArrayInMineObjectPages(
    linksFinal,
    links,
    false,
    "link",
    "networck"
  );
  const hobbiesFinal = [];
  outbotValuesArrayInMineObjectPages(hobbiesFinal, hobbies, false, "hobbie");

  return (
    <div id="faund" className={templet.templetOne}>
      <div className={templet.header}>
        <Container>
          <img src={logo} alt="logo" />
          <Link>عربي</Link>
          <Link>English</Link>
        </Container>
      </div>
      <Container>
        <div ref={pdfRef} className={templet.box}>
          <div className={templet.colOne}>
            <UserImg srcImg={personal.srcImg1} radius="50%" width="80px" />
            <h1>{personal.name}</h1>
            <span>{personal.position}</span>
          </div>
          <hr />
          <div className={templet.colTwo}>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.phone_number}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.email}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <a href={personal.personal_website} target="_blanck">
                <span>{personal.personal_website}</span>
              </a>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.six}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.date}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.stits}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.country}</span>
            </div>
            <div className={templet.col}>
              <span className={templet.icon}>
                <Icons
                  path={
                    "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  }
                  viewBox={"0 0 24 24"}
                />
              </span>
              <span>{personal.nationality}</span>
            </div>
          </div>
          <div className={templet.textAria}>
            <p>{personal.iam}</p>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>الخبرات العمليّة</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              {experiencesFinal.map((ele, ind) => {
                return (
                  ele.job !== undefined && (
                    <div key={ind} className={templet.detuls}>
                      <div className={templet.date}>
                        <Icons
                          path={
                            "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                          }
                          viewBox={"0 0 24 24"}
                        />
                        <span>{ele.dateTwo.reverse().join("-")}</span>
                        <span>-</span>
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet.info}>
                        <h1>{ele.job}</h1>
                        <p>{ele.jobTitle}</p>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>المؤهلات العلميّة</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              {qualificationsFinal.map((ele, ind) => {
                return (
                  ele.education !== undefined && (
                    <div key={ind} className={templet.detuls}>
                      <div className={templet.date}>
                        <Icons
                          path={
                            "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                          }
                          viewBox={"0 0 24 24"}
                        />
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet.info}>
                        <h1>{ele.education}</h1>
                        <p>{ele.specializat}</p>
                        <p>{ele.esy}</p>
                        <p>{ele.degree}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>الدورات التدريبية</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              {coursessFinal.map((ele, ind) => {
                return (
                  ele.cours !== undefined && (
                    <div key={ind} className={templet.detuls}>
                      <div className={templet.date}>
                        <Icons
                          path={
                            "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                          }
                          viewBox={"0 0 24 24"}
                        />
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet.info}>
                        <h1>{ele.cours}</h1>
                        <p>{ele.mantur}</p>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>العنوان الوطني</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              <p className={templet.address}>{address.address}</p>
            </div>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>الإنجازات والمشاريع</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              {projectsFinal.map((ele, ind) => {
                return (
                  ele.link !== undefined && (
                    <div key={ind} className={templet.detuls}>
                      <div className={templet.date}>
                        <Icons
                          path={
                            "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                          }
                          viewBox={"0 0 24 24"}
                        />
                        <span>{ele.dateOne.reverse().join("-")}</span>
                      </div>
                      <div className={templet.info}>
                        <a href={ele.link}>
                          <h1>{ele.name}</h1>
                        </a>
                        <p>{ele.brief}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className={templet.pacedg}>
            {skilsFinal.map((ele, ind) => {
              return (
                ele.skilsId !== undefined && (
                  <div key={ind} className={templet.boxLevils}>
                    <div className={templet.skil}>
                      <div style={{ width: ele.skils.split(" ")[0] }}>
                        {ele.skilsId}
                      </div>
                    </div>
                    <div className={templet.lesvel}>
                      {ele.skils.split(" ")[1]}
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>المراجع</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.parent}>
              {return_Final.map((ele, ind) => {
                return (
                  ele.name !== undefined && (
                    <div key={ind} className={templet.detuls}>
                      <div className={templet.date}>
                        <span
                          style={{ display: "block", marginBottom: "10px" }}>
                          {ele.email}
                        </span>
                        <span>{ele.number_phone}</span>
                      </div>
                      <div className={templet.info}>
                        <h1>{ele.name}</h1>
                        <p>{ele.esy}</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>اللغات</h3>
            </div>
            <div className={templet.space}></div>
            {languagesFinal.map((ele, ind) => {
              return (
                ele.lang !== undefined && (
                  <div key={ind} className={templet.boxLevils}>
                    <div className={templet.languages}>
                      <div>{ele.lang}</div>
                    </div>
                    <div
                      style={{ padding: "4px 8px", fontSize: "1rem" }}
                      className={templet.lesvel}>
                      {ele.levelLang}
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>روابط</h3>
            </div>
            <div className={templet.space}></div>
            {linksFinal.map((ele, ind) => {
              return (
                ele.networck !== undefined && (
                  <div key={ind} className={templet.boxLevils}>
                    <div className={templet.languages}>
                      <div>{ele.networck}</div>
                    </div>
                    <div
                      onClick={() => window.open(ele.link)}
                      style={{ padding: "4px 8px", cursor: "pointer" }}
                      className={templet.lesvel}>
                      {ele.link}
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className={templet.pacedg}>
            <div className={templet.hedin}>
              <h3>الهوايات</h3>
            </div>
            <div className={templet.space}></div>
            <div className={templet.boxhobbie}>
              {hobbiesFinal.map((ele, ind) => {
                return (
                  ele.hobbie !== undefined && (
                    <div key={ind} className={templet.hobbie}>
                      {ele.hobbie}
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

export default Templet1;
