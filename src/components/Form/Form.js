import React, { Fragment } from "react";
import Links from "./LinksParent/Links/Links";
import Logo from "./LinksParent/Logo/Logo";
import { Outlet } from "react-router-dom";
import NewTranfrom from "./Pages/NewTranfrom/NewTranfrom";

const Form = () => {
  return (
    <Fragment>
      <Links />
      <Logo />
      <NewTranfrom />
      <Outlet />
    </Fragment>
  );
};

export default Form;
