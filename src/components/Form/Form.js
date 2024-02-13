import React, { Fragment } from "react";
import Links from "./LinksParent/Links/Links";
import Logo from "./LinksParent/Logo/Logo";
import { Outlet } from "react-router-dom";
import NewTranfrom from "./Pages/NewTranfrom/NewTranfrom";
import Profile from "../Profile/Profile";

const Form = ({ personal }) => {
  return (
    <Fragment>
      <Profile />
      <Links />
      <Logo personalLive={personal} />
      <NewTranfrom />
      <Outlet />
    </Fragment>
  );
};

export default Form;
