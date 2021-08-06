import styled from "styled-components";

export const MySVG = styled.svg`
  margin: 10px;
  width: 50px;
  height: 50px;
`;

export const MyPath = styled.path`
  fill: ${(props) => props.newfill};
  stroke: black;
  stroke-width: 10px;
  margin: 10px;
`;
