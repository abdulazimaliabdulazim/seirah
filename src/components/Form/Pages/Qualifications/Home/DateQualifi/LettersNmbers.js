import React, { useState } from "react";

// Day
export const Day = () => {
  const dayEmpty = [];
  const [dayState] = useState(dayEmpty);
  for (let i = 1; i <= 31; i++) dayEmpty.push(i);
  return dayState.map((ele, ind) => <span key={ind}>{ele}</span>);
};
// Manth
export const Manth = () => {
  const [manthState] = useState([
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]);
  return manthState.map((ele, ind) => <span key={ind}>{ele}</span>);
};
// Age
export const Yar = () => {
  const yarEmpty = [];
  const [yarState] = useState(yarEmpty);
  for (let i = 1963; i <= 2030; i++) yarEmpty.push(i);
  return yarState.map((ele, ind) => <span key={ind}>{ele}</span>);
};
