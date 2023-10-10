import { createSlice, createStore } from "@reduxjs/toolkit";
// import { allSeirah } from "../components/Form/Pages/hendlerData/hendlerData";

const initState = {
  value: [" أعزب", "متزوج"],
  url: "/home-detuls/qualifications",
  detulsUser: "",
  textPage: "معلومات الشخصية, وبيانات الإتصال الضرورية",
  // personal: [],
  // qualifications: "",
  // experiences: "",
  // coursess: "",
  // skils: "",
  // projects: "",
  // return: "",
  // languages: "",
  // links: "",
  // hobbies: "",
  // address: "",
  nextUrl: "",
  nexdsatUrl: "",
};
// Function Get Seirah All
// allSeirah(initState.personal);

// initState.qualifications = JSON.parse(
//   window.localStorage.getItem("qualification")
// );
// initState.experiences = JSON.parse(window.localStorage.getItem("experiences"));
// initState.coursess = JSON.parse(window.localStorage.getItem("coursess"));
// initState.skils = JSON.parse(window.localStorage.getItem("skils"));
// initState.projects = JSON.parse(window.localStorage.getItem("projects"));
// initState.return = JSON.parse(window.localStorage.getItem("return"));
// initState.languages = JSON.parse(window.localStorage.getItem("languages"));
// initState.links = JSON.parse(window.localStorage.getItem("links"));
// initState.hobbies = JSON.parse(window.localStorage.getItem("hobbies"));
// initState.address = JSON.parse(window.localStorage.getItem("address"));
initState.detulsUser = JSON.parse(window.localStorage.getItem("detulsUser"));
initState.textPage = window.localStorage.getItem("textPage");

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    // Get Date In Pages
    personal: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    qualifications: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    experiences: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    coursess: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    skils: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    projects: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    return: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    languages: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    links: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    hobbies: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    address: (state, action) => {
      state.nexdsatUrl = "action.payload";
    },
    detulsUser: (state, action) => {
      state.detulsUser = action.payload;
    },
    famil: (state) => {
      state.value = [" آنسة", " متزوجة"];
    },
    man: (state) => {
      state.value = [" أعزب", "متزوج"];
    },
    // Transform Pages
    name_personal: (state) => {
      state.textPage = "معلومات الشخصية, وبيانات الإتصال الضرورية";
    },
    name_qualifications: (state) => {
      state.textPage = "مؤهلاتك العلمية، شهاداتك ودرجاتك العلمية.";
    },
    name_experiences: (state) => {
      state.textPage =
        "الوظائف التي عملت بها,أين ومتي وماذا كانت طبيعة عملك أو مسمي الوظيفي الذي كنت تشغله.";
    },
    name_coursess: (state) => {
      state.textPage = "الدورات التي حصلت عليها.";
    },
    name_skils: (state) => {
      state.textPage = "المهارات التي تتقنها ونسبة إتقانك لكل مهارة.";
    },
    name_projects: (state) => {
      state.textPage =
        "إنجازاتك ومشاريعك، سواء مشاريع عملت عليها بمفردك أو كنت أحد أعضاء الفريق مع ذكر دورك ونبذة عن المشروع.";
    },
    name_return: (state) => {
      state.textPage =
        "المراجع أو الأشخاص  الذين عملت معهم سابقاً ليتمكن صاحب العمل من التواصل معهم للسؤوال عنك في حال رغب بذلك.";
    },
    name_languages: (state) => {
      state.textPage = "اللغات التي تتحدث بها، ومدى إتقانك لكل لغة.";
    },
    name_links: (state) => {
      state.textPage =
        "روابط حساباتك في السوشال ميديا، أو رابط مدونتك أو موقعك الشخصي.";
    },
    name_hobbies: (state) => {
      state.textPage =
        "الهوايات :  قائمة الهوايات التي تفضّل ممارستها في أوقات المتعة والراحة.";
    },
    name_address: (state) => {
      state.textPage = "العنوان الوطني . بيانات العنوان الوطني";
    },
  },
});

const store = createStore(counterSlice.reducer);

export const counterActions = counterSlice.actions;

export default store;
