import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 900px) {
    width: 80vw;
    margin: 50px 10vw 0 10vw;
  }
`;

export const H1 = styled.h1`
  margin: 50px 10px 30px 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  color: black;
  font-size: 35px;
  text-align: center;
  @media(min-width: 900px) {
    font-size: 3vw;
    margin: 0;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media(min-width: 900px) {
    margin: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw 0;
  }
`;

export const Button = styled.button`
  background-color: white;
  font-family: 'Alata', sans-serif;
  border: 2px solid hsl(0, 0%, 41%);
  padding: 10px 40px;
  font-size: 15px;
  font-weight: 400;
  margin: 20px 0;
  letter-spacing: 5px;
  @media(min-width: 900px) {
    margin: 0;
    font-size: 1vw;
    border-radius: 1px;
  }
`;

export const Top = styled.div`
  @media(min-width: 900px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
  }
`;
