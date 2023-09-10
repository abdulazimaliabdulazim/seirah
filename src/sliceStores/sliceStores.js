import { createStore } from "@reduxjs/toolkit";

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
  number: "/home-detuls/qualifications",
  textPage: "معلومات الشخصية, وبيانات الإتصال الضرورية",
};

const dataForm = (state = initState, action) => {
  if (action.type === "رجل") {
    return { value: (state.value = [" أعزب", "متزوج"]) };
  }
  if (action.type === "أنثى") {
    return { value: (state.value = [" آنسة", " متزوجة"]) };
  }

  if (action.type === "/home-detuls/home-data") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage = "معلومات الشخصية, وبيانات الإتصال الضرورية"),
    };
  }
  if (action.type === "/home-detuls/qualifications") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage = "مؤهلاتك العلمية، شهاداتك ودرجاتك العلمية."),
    };
  }
  if (action.type === "/home-detuls/experiences") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "الوظائف التي عملت بها,أين ومتي وماذا كانت طبيعة عملك أو مسمي الوظيفي الذي كنت تشغله."),
    };
  }
  if (action.type === "/home-detuls/coursess") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage = "الدورات التي حصلت عليها."),
    };
  }
  if (action.type === "/home-detuls/skils") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "المهارات التي تتقنها ونسبة إتقانك لكل مهارة."),
    };
  }
  if (action.type === "/home-detuls/projects") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "إنجازاتك ومشاريعك، سواء مشاريع عملت عليها بمفردك أو كنت أحد أعضاء الفريق مع ذكر دورك ونبذة عن المشروع."),
    };
  }
  if (action.type === "/home-detuls/return") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "المراجع أو الأشخاص  الذين عملت معهم سابقاً ليتمكن صاحب العمل من التواصل معهم للسؤوال عنك في حال رغب بذلك."),
    };
  }
  if (action.type === "/home-detuls/langutch") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "اللغات التي تتحدث بها، ومدى إتقانك لكل لغة."),
    };
  }
  if (action.type === "/home-detuls/links") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "روابط حساباتك في السوشال ميديا، أو رابط مدونتك أو موقعك الشخصي."),
    };
  }
  if (action.type === "/home-detuls/hobbies") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage =
        "الهوايات :  قائمة الهوايات التي تفضّل ممارستها في أوقات المتعة والراحة."),
    };
  }
  if (action.type === "/home-detuls/address") {
    const newUlrsPages = ulrsPages
      .map((url, ine) => (url === action.type ? ine : ""))
      .filter((ele) => ele !== "");
    return {
      ...state,
      number: (state.number = ulrsPages[+newUlrsPages + 1]),
      textPage: (state.textPage = "العنوان الوطني . بيانات العنوان الوطني"),
    };
  }
  return state;
};

const store = createStore(dataForm);

export default store;
