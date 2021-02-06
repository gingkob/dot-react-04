import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './AnimalCard.css';

export default function AnimalCard(props) {
  const { name, additional, additionalInfo, diet, scientificName, size } = props;
  return (
    <div className='animal-wrapper'>
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <div>{diet.join(', ')}.</div>
      {/* <button onClick={() => additional ? alert(JSON.stringify(additional)) : {}}>More...</button> */}
      <Button variant="outlined" color='secondary' onClick={() => additionalInfo(additional)}>More...</Button>
    </div>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  additionalInfo: PropTypes.func.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No additional information.'
  }
}

