import * as React from "react";
import { MySVG, MyPath } from "./styled";

interface IProps {
  newfill: string;
  // any other props that come into the component
}

const Like:React.FC<IProps> = ({ newfill }) => {
  return (
    <MySVG viewBox="0 0 391.837 391.837">
      <MyPath
        newfill={newfill}
        d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
		c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
		c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
      />
    </MySVG>
  );
}

export default Like;
