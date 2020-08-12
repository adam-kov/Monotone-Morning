import React from "react";

function ArrowCircleRight() {
  return (
    <svg
      style={{cursor: 'pointer'}}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16L16 12 12 8"></path>
      <path d="M8 12L16 12"></path>
    </svg>
  );
}

export default ArrowCircleRight;