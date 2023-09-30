import { createStore } from "@reduxjs/toolkit";
const personalLocl = JSON.parse(window.localStorage.getItem("personal")),
  qualifiLocl = JSON.parse(window.localStorage.getItem("qualifi")),
  experiencesLocl = JSON.parse(window.localStorage.getItem("experiences")),
  coursessLocl = JSON.parse(window.localStorage.getItem("coursess")),
  skilsLocl = JSON.parse(window.localStorage.getItem("skils")),
  projectsLocl = JSON.parse(window.localStorage.getItem("projects")),
  dReturnLocl = JSON.parse(window.localStorage.getItem("dataReturn")),
  languagesLocl = JSON.parse(window.localStorage.getItem("dataLanguage")),
  linksLocl = JSON.parse(window.localStorage.getItem("dataLinks")),
  hobbiesLocl = JSON.parse(window.localStorage.getItem("dataHobbies")),
  addressLocl = JSON.parse(window.localStorage.getItem("dataAddress"));

const ulrsPages = [
  "/home-detuls/home-data",
  "/home-detuls/qualifications",
  "/home-detuls/experiences",
  "/home-detuls/coursess",
  "/home-detuls/skils",
  "/home-detuls/projects",
  "/home-detuls/return",
  "/home-detuls/langutch",
  "/home-detuls/links",
  "/home-detuls/hobbies",
  "/home-detuls/address",
];

const initState = {
  value: [" أعزب", "متزوج"],
  url: "/home-detuls/qualifications",
  textPage: "معلومات الشخصية, وبيانات الإتصال الضرورية",
  personal: "",
  qualificaions: "",
  experiences: "",
  coursess: "",
  skils: "",
  projects: "",
  dReturn: "",
  languages: "",
  links: "",
  hobbies: "",
  address: "",
  nextUrl: "",
};

const dataForm = (state = initState, action) => {
  if (action.type.urls === "/home-detuls/home-data") {
    return {
      ...state,
      textPage: (state.textPage = "معلومات الشخصية, وبيانات الإتصال الضرورية"),
    };
  }
  if (action.type.urls === "/home-detuls/qualifications") {
    return {
      ...state,
      textPage: (state.textPage = "مؤهلاتك العلمية، شهاداتك ودرجاتك العلمية."),
    };
  }
  if (action.type.urls === "/home-detuls/experiences") {
    return {
      ...state,
      textPage: (state.textPage =
        "الوظائف التي عملت بها,أين ومتي وماذا كانت طبيعة عملك أو مسمي الوظيفي الذي كنت تشغله."),
    };
  }
  if (action.type.urls === "/home-detuls/coursess") {
    return {
      ...state,
      textPage: (state.textPage = "الدورات التي حصلت عليها."),
    };
  }
  if (action.type.urls === "/home-detuls/skils") {
    return {
      ...state,
      textPage: (state.textPage =
        "المهارات التي تتقنها ونسبة إتقانك لكل مهارة."),
    };
  }
  if (action.type.urls === "/home-detuls/projects") {
    return {
      ...state,
      textPage: (state.textPage =
        "إنجازاتك ومشاريعك، سواء مشاريع عملت عليها بمفردك أو كنت أحد أعضاء الفريق مع ذكر دورك ونبذة عن المشروع."),
    };
  }
  if (action.type.urls === "/home-detuls/return") {
    return {
      ...state,
      textPage: (state.textPage =
        "المراجع أو الأشخاص  الذين عملت معهم سابقاً ليتمكن صاحب العمل من التواصل معهم للسؤوال عنك في حال رغب بذلك."),
    };
  }
  if (action.type.urls === "/home-detuls/langutch") {
    return {
      ...state,
      textPage: (state.textPage =
        "اللغات التي تتحدث بها، ومدى إتقانك لكل لغة."),
    };
  }
  if (action.type.urls === "/home-detuls/links") {
    return {
      ...state,
      textPage: (state.textPage =
        "روابط حساباتك في السوشال ميديا، أو رابط مدونتك أو موقعك الشخصي."),
    };
  }
  if (action.type.urls === "/home-detuls/hobbies") {
    return {
      ...state,
      textPage: (state.textPage =
        "الهوايات :  قائمة الهوايات التي تفضّل ممارستها في أوقات المتعة والراحة."),
    };
  }
  if (action.type.urls === "/home-detuls/address") {
    return {
      ...state,
      textPage: (state.textPage = "العنوان الوطني . بيانات العنوان الوطني"),
    };
  }

  if (action.type.personal) {
    return { ...state, personal: (state.personal = action.type.personal) };
  }
  if (personalLocl !== null) state.personal = personalLocl;

  if (action.type.qualifi) {
    return {
      ...state,
      qualificaions: (state.qualificaions = action.type.qualifi),
    };
  }
  if (qualifiLocl !== null) state.qualificaions = qualifiLocl;
  if (action.type.experiences) {
    return {
      ...state,
      experiences: (state.experiences = action.type.experiences),
    };
  }
  if (experiencesLocl !== null) state.experiences = experiencesLocl;
  if (action.type.coursess) {
    return { ...state, coursess: (state.coursess = action.type.coursess) };
  }
  if (coursessLocl !== null) state.coursess = coursessLocl;
  if (action.type.skils) {
    return { ...state, skils: (state.skils = action.type.skils) };
  }
  if (skilsLocl !== null) state.skils = skilsLocl;
  if (action.type.projects) {
    return { ...state, projects: (state.projects = action.type.projects) };
  }
  if (projectsLocl !== null) state.projects = projectsLocl;
  if (action.type.dataReturn) {
    return { ...state, dReturn: (state.dReturn = action.type.dataReturn) };
  }
  if (dReturnLocl !== null) state.dReturn = dReturnLocl;
  if (action.type.dataLanguage) {
    return {
      ...state,
      languages: (state.languages = action.type.dataLanguage),
    };
  }
  if (languagesLocl !== null) state.languages = languagesLocl;
  if (action.type.dataLinks) {
    return { ...state, links: (state.links = action.type.dataLinks) };
  }
  if (linksLocl !== null) state.links = linksLocl;
  if (action.type.dataHobbies) {
    return { ...state, hobbies: (state.hobbies = action.type.dataHobbies) };
  }
  if (hobbiesLocl !== null) state.hobbies = hobbiesLocl;
  if (action.type.dataAddress) {
    return { ...state, address: (state.address = action.type.dataAddress) };
  }
  if (addressLocl !== null) state.address = hobbiesLocl;

  if (action.type === "رجل") {
    return { value: (state.value = [" أعزب", "متزوج"]) };
  }
  if (action.type === "أنثى") {
    return { value: (state.value = [" آنسة", " متزوجة"]) };
  }

  return state;
};

const store = createStore(dataForm);

export default store;
