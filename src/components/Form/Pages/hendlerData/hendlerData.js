import clickInTop from "../../../Functionalty/funs";
export const generatNmaeObj = (a, b, c, d) => {
  const nameObj = {};
  for (let i = 1; i <= 5; i++) {
    nameObj[a + `${[i]}`] = "";
    nameObj[b + `${[i]}`] = "";
    nameObj[c + `${[i]}`] = "";
    nameObj[d + `${[i]}`] = "";
  }
  return nameObj;
};

export const generaatdNmaeObj = (a, b, c, d) => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    const nameObj = {};
    nameObj[a + `${[i]}`] = "";
    nameObj[b + `${[i]}`] = "";
    nameObj[c + `${[i]}`] = "";
    arr.push(nameObj);
  }
  return arr;
};
export const finalObjInDate = generaatdNmaeObj(
  "education",
  "specializat",
  "esy"
);

export const getFormValues = (
  nameLocal,
  empty = true,
  check = true,
  name1,
  name2,
  name3,
  objData
) => {
  const dataInLocal = window.localStorage.getItem(nameLocal);
  if (!dataInLocal) {
    if (empty === true) {
      if (check === true) {
        return generatNmaeObj(name1, name2, name3);
      } else {
        return objData;
      }
    } else {
      return [0];
    }
  }
  return JSON.parse(dataInLocal);
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
// 81
