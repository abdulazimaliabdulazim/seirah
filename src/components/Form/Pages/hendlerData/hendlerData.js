import clickInTop from "../../../Functionalty/funs";
import json from "../JSON_date/data_inputs.json";

export const generatNmaeObj = (numb, ...name) => {
  const nameObj = {};
  for (let i = 1; i <= numb; i++) {
    name.map((ele) => (nameObj[ele + i] = ""));
  }
  return nameObj;
};

export const getFormValues = (
  nameLocal,
  empty = true,
  check = true,
  numb,
  name1,
  name2,
  name3,
  objData,
  all = true
) => {
  const dataInLocal = window.localStorage.getItem(nameLocal);
  if (!dataInLocal) {
    if (empty === true) {
      if (check === true) {
        return generatNmaeObj(numb, name1, name2, name3);
      } else {
        return objData;
      }
    } else {
      return [];
    }
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
  const obj = Object.values(dataLocal).filter((ele) => ele !== "");
  const getItem = window.localStorage.getItem("progress");
  const setItem = (name, item) => window.localStorage.setItem(name, item);

  if (getItem) {
    obj.length >= 10
      ? setItem("progress", `${Number(getItem) + 10}`)
      : setItem("progress", `${Number(getItem) + obj.length}`);
  } else {
    obj.length >= 10
      ? setItem("progress", "10")
      : setItem("progress", `${obj.length}`);
  }

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
  ...nameObj
) => {
  const nameManth = json[11];
  for (let i = 1; i <= 4; i++) {
    const obj = {
      dateOne: [
        objInData[`day${i}`],
        nameManth.indexOf(objInData[`manth${i}`]) === -1
          ? undefined
          : nameManth.indexOf(objInData[`manth${i}`]) + 1,
        objInData[`yar${i}`],
      ],
      dateTwo: [
        objInData[`day2${i}`],
        nameManth.indexOf(objInData[`manth2${i}`]) === -1
          ? undefined
          : nameManth.indexOf(objInData[`manth${i}`]) + 1,
        objInData[`yar2${i}`],
      ],
    };
    nameObj.map((ele) => (obj[ele] = objInData[`${ele}${i}`]));
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

const ulrsPages = json[13];

export const nextPage = () => {
  const filterUrls = ulrsPages.filter(
    (ele) => ele === window.location.pathname
  );
  return filterUrls;
};
