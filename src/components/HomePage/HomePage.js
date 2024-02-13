import React, { Fragment } from "react";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Features from "../Features/Features";
import SecMan from "../SecMan/SecMan";
import Footer from "../Footer/Footer";

const HomePage = () => {
  document.title =
    "موقع سيرتك | أنشئ سيرتك للتقديم في أعلي الشركات مع موقع سيرتك";
  return (
    <Fragment>
      <Header />
      <Section />
      <Features />
      <SecMan />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
