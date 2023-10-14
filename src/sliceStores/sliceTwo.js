import { createSlice, createStore } from "@reduxjs/toolkit";

const targetSeirah = window.localStorage.getItem("targetSeirah");

const initState = {
  value: [" أعزب", "متزوج"],
  detulsUser: "",
  textPage: "معلومات الشخصية, وبيانات الإتصال الضرورية",
  [`progress${targetSeirah}`]: 0,
};
// Get Item In Local Storage
initState.detulsUser = JSON.parse(window.localStorage.getItem("detulsUser"));
initState.textPage = window.localStorage.getItem("textPage");
initState[`progress${targetSeirah}`] =
  JSON.parse(window.localStorage.getItem(`progressStory${targetSeirah}`)) !==
  null
    ? JSON.parse(window.localStorage.getItem(`progressStory${targetSeirah}`))
    : 0;

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    // Get Date In Pages
    progress: (state, action) => {
      state[`progress${targetSeirah}`] += action.payload;
      window.localStorage.setItem(
        `progressStory${targetSeirah}`,
        JSON.stringify(state[`progress${targetSeirah}`])
      );
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
