import React from "react";
import {useSpring, animated} from 'react-spring'

function ArrowIcon({ toggle }) {
    const arrowAnimProps = useSpring({
        from: {transform: toggle ? 'rotate(0deg)' : 'rotate(180deg)'},
        transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)'
    });

    return (
        <animated.svg
            style={{position: 'absolute', top: '50%', right: '30px', ...arrowAnimProps}}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M19 12L5 12"></path>
            <path d="M12 19L5 12 12 5"></path>
        </animated.svg>
    );
}

export default ArrowIcon;