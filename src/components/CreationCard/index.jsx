import React from 'react';
import PropTypes from 'prop-types';
import { Div, H2 } from './styles';

const CreationCard = ({ card: { title, img } }) => (
  <Div img={img}>
    <H2>{title}</H2>
  </Div>
);

CreationCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,

};

export default CreationCard;
