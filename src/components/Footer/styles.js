import styled from 'styled-components';

export const FooterDiv = styled.footer`
  width: 100vw;
  height: 450px;
  background-color: hsl(0, 0%, 0%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  padding: 30px 0;
  @media(min-width: 900px) {
    width: 80vw;
    height: 20vh;
    padding: 4vw 10vw;
  }
`;

export const Img = styled.img`
  width: ${(props) => (props.logo ? '170px' : '25px')};
  @media(min-width: 900px) {
    width: ${(props) => (props.logo ? '10vw' : '2vw')};
    align-self: ${(props) => (props.logo ? 'start' : 'center')};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media(min-width: 900px) {
    align-self: flex-start;
    flex-direction: row;
  }
`;

export const A = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 800;
  @media(min-width: 900px) {
  font-size: 1.2vw;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 20px;
  @media(min-width: 900px) {
    align-self: flex-end;
    position: absolute;
    margin-bottom: 50px;
  }
`;

export const P = styled.p`
  font-family: 'Alata', sans-serif;
  color: hsl(0, 0%, 55%);
  transform: translateY(-40px);
  margin-bottom: -40px;
  @media(min-width: 900px) {
    align-self: flex-end;
    position: absolute;
    margin-top: 100px;
  }
`;
