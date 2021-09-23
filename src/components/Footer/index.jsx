import React from 'react';
import {
  FooterDiv, Img, Nav, A, Div, P,
} from './styles';

const Footer = () => (
  <FooterDiv>
    <Img logo src="./loopstudios-landing-page-main/images/logo.svg" alt="logo" />
    <Nav>
      <A>About</A>
      <A>Careers</A>
      <A>Events</A>
      <A>Products</A>
      <A>Support</A>
    </Nav>
    <Div>
      <Img src="./loopstudios-landing-page-main/images/icon-facebook.svg" alt="facebook logo" />
      <Img src="./loopstudios-landing-page-main/images/icon-twitter.svg" alt="twitter logo" />
      <Img src="./loopstudios-landing-page-main/images/icon-pinterest.svg" alt="pinterest logo" />
      <Img src="./loopstudios-landing-page-main/images/icon-instagram.svg" alt="instagram logo" />
    </Div>
    <P>© 2021 Loopstudios. All rights reserved.</P>
  </FooterDiv>
);

export default Footer;
