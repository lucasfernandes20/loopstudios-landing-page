import React from 'react';
import PropTypes from 'prop-types';
import { Div, H2 } from './styles';

const CreationCard = ({ card: { title, img, deskImg } }) => (
  <Div img={window.innerWidth >= 900 ? deskImg : img}>
    <H2>{title}</H2>
  </Div>
);

CreationCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    deskImg: PropTypes.string.isRequired,
  }).isRequired,

};

export default CreationCard;
