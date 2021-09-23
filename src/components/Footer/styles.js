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
`;

export const Img = styled.img`
  width: ${(props) => (props.logo ? '170px' : '25px')};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const A = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 800;
`;

export const Div = styled.div`
  display: flex;
  gap: 20px;
`;

export const P = styled.p`
  font-family: 'Alata', sans-serif;
  color: hsl(0, 0%, 55%);
  transform: translateY(-40px);
  margin-bottom: -40px;
`;
