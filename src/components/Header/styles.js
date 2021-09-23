import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 90vw;
  margin: 0 5vw;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(min-width: 900px) {
    width: 80vw;
    margin: 0 10vw;
    padding: 5vw 0;
  }
`;

export const Img = styled.img`
 width: ${(props) => (props.logo ? '150px' : '25px')};
 animation: ${(props) => (props.closeBtn ? 'spin 650ms linear' : null)};
`;

export const Div = styled.div`
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: ${(props) => (props.side ? '0' : '-100vw')};
  margin-left: ${(props) => (props.side ? '0' : '100vw')};
  transition: 0.7s;
  display: flex;
  flex-direction: column;
  z-index: 10000;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: ${(props) => (props.desktop ? 'row' : 'column')};
  align-self: ${(props) => (props.desktop ? null : 'flex-start')};
  margin-left: ${(props) => (props.desktop ? '0' : '30px')};
  margin-top: ${(props) => (props.desktop ? '0' : '30%')};
  gap: 25px;
  animation: ${(props) => (props.side ? 'fadeInDown 1000ms ease-in-out' : null)};
  `;

export const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: ${(props) => (props.desktop ? '12px' : '30px')};
  :hover {
    cursor: pointer;
    margin-bottom: -1px;
    border-bottom: 1px solid white;
  }
`;
