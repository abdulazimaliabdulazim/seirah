import React from "react";

function Icons({ path, viewBox }) {
  return (
    <svg
      style={{ width: "20px", marginLeft: "5px" }}
      fill="none"
      stroke="currentColor"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={path}></path>
    </svg>
  );
}

export default Icons;
