import React from 'react';
import Header from '../Header';
import { Section, H1, Div } from './styles';

const Hero = () => (
  <Section window={window.innerWidth >= 900}>
    <Header />
    <Div window={window.innerWidth >= 900}>
      <H1 window={window.innerWidth >= 900}>IMMERSIVE EXPERIENCES THAT DELIVER</H1>
    </Div>
  </Section>
);

export default Hero;
