import styled from "styled-components";

export const DemoPost = styled.div`
  margin: 20px auto;
  padding: 20px;
  width: 60%;
  max-width: 800px;

  border: 1px solid black;

  & h2 {
    font-size: 30px;
  }

  & p {
    margin-top: 20px;
    font-size: 18px;
  }

  & a {
    display: block;
    border: 1px solid black;
    margin: 10px 30px 10px 0;
    width: 70px;
    height: 70px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Descr = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  & h5 {
    font-size: 14px;
  }
`;
