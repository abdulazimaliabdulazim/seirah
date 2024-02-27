import React from "react";
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
import Templet2 from "../components/Templets/Templet2/Templet2";
import Design from "../components/Design/Design";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Palestine from "../components/Palestine/Palestine";
import HomePage from "../components/HomePage/HomePage";

const App = () => {
  return (
    <ContextProvider>
      <Palestine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={"dashboard/cvs/data"}
            element={
              <RequireAuth>
                <Form />
              </RequireAuth>
            }>
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
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard/cvs"
            element={
              <RequireAuth>
                <Cvs />
              </RequireAuth>
            }
          />
          <Route path={"seirah"} element={<Templet1 />} />
          <Route path={"seirah"} element={<Templet2 />} />
          <Route
            path={`dashboard/cvs/data/download-share`}
            element={
              <RequireAuth>
                <DownloadShare />
              </RequireAuth>
            }
          />
          <Route
            path={`dashboard/cvs/data/design`}
            element={
              <RequireAuth>
                <Design />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
