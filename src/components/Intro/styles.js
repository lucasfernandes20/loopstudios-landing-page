import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  margin: 60px 20px;
  @media(min-width: 900px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  @media(min-width: 900px) {
    width: 55vw;
    margin: 5vw 0 5vw 10vw;
  }
`;

export const H1 = styled.h1`
  margin: 40px 10px 15px 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  color: black;
  font-size: 35px;
  text-align: center;
  @media(min-width: 900px) {
    font-size: 3vw;
    font-weight: 300;
    margin: 0 0 1vw 0;
  }
`;

export const P = styled.p`
  margin: 0 10px;
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  color: hsl(0, 0%, 55%);
  text-align: center;
  @media(min-width: 900px) {
    font-size: 1.2vw;
    text-align: start;
  }
`;

export const Div = styled.div`
  background-color: white;
  margin: 5vw 0 3vw 0;
  /* position: fixed; */
  width: 35vw;
  height: 17vw;
  padding: 3vw;
  z-index: 10000;
  transform: translateX(-12vw);
`;
