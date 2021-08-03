import React from "react";
import style from "./like.module.css";

function Like({ newfill, onClick }) {
  return (
    <svg viewBox="0 0 391.837 391.837" className={style.svg} onClick={onClick}>
      <path
        className={style.path}
        style={{ fill: newfill, stroke: "black", strokeWidth: "10px", margin: "10px"}}
        d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
		c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
		c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
      />
    </svg>
  );
}

export default Like;
