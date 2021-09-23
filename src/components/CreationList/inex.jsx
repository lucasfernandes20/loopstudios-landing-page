import React from 'react';
import {
  Section, H1, Div, Button, Top,
} from './styles';
import CREATION from '../../data';
import CreationCard from '../CreationCard';

const CreationList = () => (
  <Section>
    <Top>
      <H1>OUR CREATIONS</H1>
      {window.innerWidth >= 900 ? <Button type="button">SEE ALL</Button> : null}
    </Top>
    <Div>
      {
        CREATION.map((e) => <CreationCard card={e} key={e.title} />)
      }
    </Div>
    {window.innerWidth >= 900 ? null : <Button type="button">SEE ALL</Button>}
  </Section>
);

export default CreationList;
