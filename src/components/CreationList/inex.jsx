import React from 'react';
import {
  Section, H1, Div, Button,
} from './styles';
import CREATION from '../../data';
import CreationCard from '../CreationCard';

const CreationList = () => (
  <Section>
    <H1>OUR CREATIONS</H1>
    <Div>
      {
        CREATION.map((e) => <CreationCard card={e} key={e.title} />)
      }
    </Div>
    <Button type="button">SEE ALL</Button>
  </Section>
);

export default CreationList;
