import React, { Fragment } from "react"; // React
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Features from "../components/Features/Features";
import SecMan from "../components/SecMan/SecMan";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/Form/Form";
import PersonalData from "../components/Form/Pages/Personal_data/Home/Personal_data";
import Qualifications from "../components/Form/Pages/Qualifications/Home/Qualifications";
import dataJson from "../components/Form/Pages/JSON_date/data_inputs.json";
import Experiences from "../components/Form/Pages/Experiences/Experiences";
import Coursess from "../components/Form/Pages/Coursess/Coursess";
import Skils from "../components/Form/Pages/Skils/Skils";
import Projects from "../components/Form/Pages/Projects/Projects";
import Return from "../components/Form/Pages/Return/Return";
import Languages from "../components/Form/Pages/Langutch/Langutch";
import Hobbies from "../components/Form/Pages/Hobbies/Hobbies";
import Address from "../components/Form/Pages/Address/Address";
import LinksPage from "../components/Form/Pages/LinksPage/LinksPage";

const App = () => {
  return (
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
        <Route path="/home-detuls" element={<Form />}>
          <Route path="home-data" element={<PersonalData />} />
          <Route
            path="qualifications"
            element={
              <Qualifications
                dataJson={dataJson[0]}
                addBtu={"أضف مؤهل جديد"}
                saveBut={"حفظ المؤهلات"}
              />
            }
          />
          <Route path="experiences" element={<Experiences />} />
          <Route path="coursess" element={<Coursess />} />
          <Route path="skils" element={<Skils />} />
          <Route path="projects" element={<Projects />} />
          <Route path="return" element={<Return />} />
          <Route path="langutch" element={<Languages />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
