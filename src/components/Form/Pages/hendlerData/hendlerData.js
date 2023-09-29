import clickInTop from "../../../Functionalty/funs";
import dataJson from "../JSON_date/data_inputs.json";

export const getFormValues = (
  nameLocal,
  empty = true,
  check = true,
  objData
) => {
  const dataInLocal = window.localStorage.getItem(nameLocal);
  if (!dataInLocal) {
    if (empty === true) {
      if (check === true) {
        return dataJson[1][0];
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

//  !== "" ? id :
