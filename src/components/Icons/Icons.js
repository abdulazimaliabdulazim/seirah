import React from "react";

function Icons({ path, viewBox }) {
  return (
    <svg
      style={{ width: "18px", margin: "0 5px" }}
      fill="none"
      stroke="currentColor"
      viewBox={viewBox}
      height="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={path}></path>
      السير الذاتية
    </svg>
  );
}

export default Icons;
