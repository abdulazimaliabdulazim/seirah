import React, { useState } from "react";
import hendlerData from "../../../hendlerData/hendlerData";
import json from "../../../JSON_date/data_inputs.json";
const DateCopy = ({ state, id, setHendl }) => {
  return (
    <div id={id}>
      {state.map((ele, ind) => {
        return (
          <span
            onClick={(e) => hendlerData(e, setHendl, false, false, true, false)}
            key={ind}>
            {ele}
          </span>
        );
      })}
    </div>
  );
};
// Day
export const Day = ({ state, id }) => {
  const dayEmpty = [];
  const [dayState] = useState(dayEmpty);
  for (let i = 1; i <= 31; i++) dayEmpty.push(i);
  return <DateCopy state={dayState} id={id} setHendl={state} />;
};
// Manth
export const Manth = ({ state, id }) => {
  const [manthState] = useState(json[11]);
  return <DateCopy state={manthState} id={id} setHendl={state} />;
};
// Age
export const Yar = ({ state, id }) => {
  const yarEmpty = [];
  const [yarState] = useState(yarEmpty);
  for (let i = 1963; i <= 2030; i++) yarEmpty.push(i);
  return <DateCopy state={yarState} id={id} setHendl={state} />;
};
