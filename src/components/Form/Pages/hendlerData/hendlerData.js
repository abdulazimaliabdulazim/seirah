import clickInTop from "../../../Functionalty/funs";
import json from "../JSON_date/data_inputs.json";

export const generatNmaeObj = (numb, ...name) => {
  const nameObj = {};
  for (let i = 1; i <= numb; i++) {
    name.map((ele) => (nameObj[ele + i] = ""));
  }
  return nameObj;
};

export const getFormValues = (nameLocal, all = true) => {
  const dataInLocal = window.localStorage.getItem(nameLocal);
  if (!dataInLocal) {
    return [];
  }
  if (all === true) {
    return JSON.parse(dataInLocal);
  } else {
    return JSON.parse(dataInLocal)[0];
  }
};

export const sendActionData = (
  sendAction,
  nameLocal,
  dataLocal,
  nameCoun,
  count
) => {
  sendAction();
  window.localStorage.setItem(nameLocal, JSON.stringify(dataLocal));
  window.localStorage.setItem(nameCoun, JSON.stringify(count));
  clickInTop();
};

const hendlerData = (
  e,
  setData,
  ids = true,
  classs = false,
  inneer = false,
  valu = true,
  dircData,
  srcs = false
) => {
  e.preventDefault();
  let id = e.target.id,
    parent = e.target.parentElement.id,
    value = e.target.value,
    src = e.target.src,
    inner = e.target.innerHTML,
    clas = e.target.className;

  setData((pre) => {
    return {
      ...pre,
      [ids === true ? id : classs === true ? clas : parent]:
        valu === true
          ? value
          : inneer === true
          ? inner
          : srcs === true
          ? src
          : dircData,
    };
  });
};

export default hendlerData;

export const outbotValuesArrayInMineObjectPages = (
  arrayInPush,
  objInData,
  date = true,
  ...nameObj
) => {
  const nameManth = json[11];
  for (let i = 1; i <= 4; i++) {
    const obj = {};
    if (date) {
      obj["dateOne"] = [
        objInData[`day${i}`],
        nameManth.indexOf(objInData[`manth${i}`]) === -1
          ? undefined
          : nameManth.indexOf(objInData[`manth${i}`]) + 1,
        objInData[`yar${i}`],
      ];
      obj["dateTwo"] = [
        objInData[`day2${i}`],
        nameManth.indexOf(objInData[`manth2${i}`]) === -1
          ? undefined
          : nameManth.indexOf(objInData[`manth${i}`]) + 1,
        objInData[`yar2${i}`],
      ];
      nameObj.map((ele) => (obj[ele] = objInData[`${ele}${i}`]));
    } else {
      nameObj.map((ele) => (obj[ele] = objInData[`${ele}${i}`]));
    }
    arrayInPush.push(obj);
  }
};

// Generator Number And Leters
const leters = json[12];
leters.forEach((ele, ind) => leters.push(ele.toUpperCase(), ind));
export const generatorId = `${
  leters[Math.ceil(Math.random() * leters.length - 1)]
}${leters[Math.ceil(Math.random() * leters.length - 1)]}${
  leters[Math.ceil(Math.random() * leters.length - 1)]
}${leters[Math.ceil(Math.random() * leters.length - 1)]}${
  leters[Math.ceil(Math.random() * leters.length - 1)]
}${leters[Math.ceil(Math.random() * leters.length - 1)]}${
  leters[Math.ceil(Math.random() * leters.length - 1)]
}${leters[Math.ceil(Math.random() * leters.length - 1)]}`;

export const checkUser = (arry, ind, name) =>
  arry !== null && arry !== "" ? arry[ind][name] : "";

export const openLink = (url, target = "_blanck") => {
  window.open(url, target, "noreferrer");
};

// Next Pages
export const nextPage = () => {
  const ulrsPages = json[13];
  const filterUrls = ulrsPages.filter(
    (ele) => ele === window.location.pathname
  );
  return filterUrls;
};

// Mautpet Seirah
export const allSeirah = (nameObj) => {
  const personal = [];
  const countseirahAll = window.localStorage.getItem("countseirah");
  if (countseirahAll !== null) {
    if (countseirahAll >= 1) {
      for (let i = 1; i <= countseirahAll + 1; i++) {
        const personals = JSON.parse(
          window.localStorage.getItem(`${nameObj}${i}`)
        );
        if (personals !== null) {
          personal.push(personals);
        }
      }
    } else {
      for (let i = 1; i <= 1; i++) {
        const personals = JSON.parse(
          window.localStorage.getItem(`${nameObj}${i}`)
        );
        if (personals !== null) {
          personal.push(personals);
        }
      }
    }
  }
  return personal;
};

// progress
export const progress = (obj) => {
  const lengthObj = Object.values(obj).length; // Keys Of Object
  obj["progress"] =
    Math.ceil((lengthObj * 1) / 2) >= 10 ? 10 : Math.ceil((lengthObj * 1) / 2);
};

export const fetchDateAllSeirah = (numberSeirh, add = true) => {
  const data = [];
  json[0].map((nameObj) => {
    if (add) {
      return data.push(
        JSON.parse(window.localStorage.getItem(`${nameObj.url}${numberSeirh}`))
      );
    } else {
      return window.localStorage.removeItem(`${nameObj.url}${numberSeirh}`);
    }
  });
  return data;
};
