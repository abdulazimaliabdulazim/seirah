import React from "react";
import header from "./profile.module.css";
import Container from "../Container/Container";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import Icons from "../Icons/Icons";
import UserImg from "../UserImg/UserImg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { allSeirah } from "../Form/Pages/hendlerData/hendlerData";

const Profile = () => {
  const personal = useSelector((state) => state.personal);

  return (
    <header className={header.profile}>
      <Container>
        <div className={header.right}>
          <LogoHeader checkd={false} />
          <Link to="/dashboard/cvs">
            <div className={header.icon}>
              <Icons
                path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                viewBox="0 0 24 24"
              />
              <span>السير الذاتية</span>
            </div>
          </Link>
        </div>
        <div className={header.name_dash}>
          <span className={header.full_name}>
            {personal !== undefined ? personal[0].name : ""}
          </span>
          <span className={header.part_name}>
            {personal !== undefined ? personal[0].name.split(" ")[0] : ""}
          </span>
          <UserImg
            state={personal !== undefined ? personal : ""}
            index={0}
            radius="50%"
            width="40px"
            hidden={false}
          />
        </div>
      </Container>
    </header>
  );
};

export default Profile;
