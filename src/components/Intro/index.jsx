import React from 'react';
import {
  Section, Img, H1, P, Div,
} from './styles';

const Intro = () => {
  const windowSize = window.innerWidth >= 900;

  if (!windowSize) {
    return (
      <Section>
        <Img src="./loopstudios-landing-page-main/images/mobile/image-interactive.jpg" alt="Guy using a VR" />
        <H1>THE LEADER IN INTERACTIVE VR</H1>
        <P>
          Founded in 2011, Loopstudios has been producing world-class virtual reality
          projects for some of the best companies around the globe. Our award-winning
          creations have transformed businesses through digital experiences that bind
          to their brand.
        </P>
      </Section>
    );
  }
  return (
    <Section>
      <Img src="./loopstudios-landing-page-main/images/desktop/image-interactive.jpg" alt="Guy using a VR" />
      <Div>
        <H1>THE LEADER IN INTERACTIVE VR</H1>
        <P>
          Founded in 2011, Loopstudios has been producing world-class virtual reality
          projects for some of the best companies around the globe. Our award-winning
          creations have transformed businesses through digital experiences that bind
          to their brand.
        </P>
      </Div>
    </Section>
  );
};

export default Intro;
