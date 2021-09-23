import React, { useState } from 'react';
import {
  HeaderDiv, Img, Div, Nav, A,
} from './styles';

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const windowWidth = window.innerWidth >= 900;

  if (!windowWidth) {
    return (
      <HeaderDiv>
        <Img logo src="./loopstudios-landing-page-main/images/logo.svg" alt="logo" />
        <Img onClick={() => setSideBar(!sideBar)} src="./loopstudios-landing-page-main/images/icon-hamburger.svg" alt="logo" />
        <Div side={sideBar}>
          <HeaderDiv>
            <Img logo src="./loopstudios-landing-page-main/images/logo.svg" alt="logo" />
            <Img closeBtn={sideBar} onClick={() => setSideBar(!sideBar)} src="./loopstudios-landing-page-main/images/icon-close.svg" alt="close button" />
          </HeaderDiv>
          <Nav side={sideBar}>
            <A>ABOUT</A>
            <A>CAREERS</A>
            <A>EVENTS</A>
            <A>PRODUCTS</A>
            <A>SUPPORT</A>
          </Nav>
        </Div>
      </HeaderDiv>
    );
  }
  return (
    <HeaderDiv>
      <Img logo src="./loopstudios-landing-page-main/images/logo.svg" alt="logo" />
      <Nav desktop side={sideBar}>
        <A desktop>ABOUT</A>
        <A desktop>CAREERS</A>
        <A desktop>EVENTS</A>
        <A desktop>PRODUCTS</A>
        <A desktop>SUPPORT</A>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
