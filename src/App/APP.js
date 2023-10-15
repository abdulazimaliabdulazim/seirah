import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Features from "../components/Features/Features";
import SecMan from "../components/SecMan/SecMan";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/Form/Form";
import PersonalData from "../components/Form/Pages/Personal_data/Home/Personal_data";
import Qualifications from "../components/Form/Pages/Qualifications/Home/Qualifications";
import Experiences from "../components/Form/Pages/Experiences/Experiences";
import Coursess from "../components/Form/Pages/Coursess/Coursess";
import Skils from "../components/Form/Pages/Skils/Skils";
import Projects from "../components/Form/Pages/Projects/Projects";
import Return from "../components/Form/Pages/Return/Return";
import Languages from "../components/Form/Pages/Languages/Languages";
import Hobbies from "../components/Form/Pages/Hobbies/Hobbies";
import Address from "../components/Form/Pages/Address/Address";
import LinksPage from "../components/Form/Pages/LinksPage/LinksPage";
import { ContextProvider } from "../components/Auth/Auth";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Dashboard";
import Cvs from "../components/Cvs/Cvs";
import Templet1 from "../components/Templets/Templet1/Templet1";
import DownloadShare from "../components/Download-share/DownloadShare";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Section />
                <Features />
                <SecMan />
                <Footer />
              </Fragment>
            }
          />
          <Route path={"dashboard/cvs/data"} element={<Form />}>
            <Route path="personal" element={<PersonalData />} />
            <Route path="qualifications" element={<Qualifications />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="coursess" element={<Coursess />} />
            <Route path="skils" element={<Skils />} />
            <Route path="projects" element={<Projects />} />
            <Route path="return" element={<Return />} />
            <Route path="languages" element={<Languages />} />
            <Route path="links" element={<LinksPage />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="address" element={<Address />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/cvs" element={<Cvs />} />
          <Route path={"seirah"} element={<Templet1 />} />
          <Route
            path={`dashboard/cvs/data/download-share`}
            element={<DownloadShare />}
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
