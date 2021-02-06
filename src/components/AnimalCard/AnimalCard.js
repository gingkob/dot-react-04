import React from 'react';
import './AnimalCard.css';
import { Button } from '@material-ui/core';

function AnimalCard(props) {
  const { name, additional, additionalInfo, diet, scientificName, size } = props;
  return (
    <div className='animal-wrapper'>
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <div>{diet.join(', ')}.</div>
      {/* <button onClick={() => additional ? alert(JSON.stringify(additional)) : {}}>More...</button> */}
      {additional ? <Button variant="outlined" color='secondary' onClick={() => additionalInfo(additional)}>More...</Button> : null}
    </div>
  )
}

export default AnimalCard
