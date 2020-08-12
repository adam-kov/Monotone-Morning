import React from "react";

function ArrowCircleLeft() {
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
      <path d="M12 8L8 12 12 16"></path>
      <path d="M16 12L8 12"></path>
    </svg>
  );
}

export default ArrowCircleLeft;