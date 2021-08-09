import styled from "styled-components";

interface IProps {
  newfill: string;
  // any other props that come into the component
}

export const MySVG = styled.svg`
  margin: 10px;
  width: 50px;
  height: 50px;
`;

export const MyPath = styled.path`
  fill: ${(props: IProps) => props.newfill};
  stroke: black;
  stroke-width: 10px;
  margin: 10px;
`;
