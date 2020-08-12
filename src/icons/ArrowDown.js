import React from "react";
import {useSpring, animated} from 'react-spring'

function ArrowDown({ toggle }) {
  const animProps = useSpring({
      from: {transform: toggle ? 'rotate(0deg)' : 'rotate(180deg)'},
      transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)'
  })

  return (
    <animated.svg
      style={{cursor: 'pointer', ...animProps}}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      version="1.1"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 8L8 12 12 16"
        transform="matrix(0 -1.64667 1.64667 0 -7.76 28.475)"
      ></path>
    </animated.svg>
  );
}

export default ArrowDown;