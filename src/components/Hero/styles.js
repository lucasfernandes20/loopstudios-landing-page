import styled from 'styled-components';

const background = "linear-gradient( 90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('./loopstudios-landing-page-main/images/desktop/image-hero.jpg')";

export const Section = styled.section`
  width: 100vw;
  height: ${(props) => (props.window ? '90vh' : '650px')};
  background: ${(props) => (props.window ? background : "url('./loopstudios-landing-page-main/images/mobile/image-hero.jpg')")};
  background-repeat: no-repeat;
  background-size: cover;
         
`;

export const H1 = styled.h1`
  width: ${(props) => (props.window ? '40%' : null)};
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  margin: ${(props) => (props.window ? '0 0 0 10vw' : '0 30px')};
  padding: 25px;
  color: white;
  border: 2px solid white;
  font-size: ${(props) => (props.window ? '5vw' : '40px')};
  text-align: start;
`;

export const Div = styled.div`
  width: 100vw;
  height: ${(props) => (props.window ? '60%' : '70%')};
  display: flex;
  justify-content: ${(props) => (props.window ? 'flex-start' : 'center')};
  align-items: center;
`;
