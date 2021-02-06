import React from 'react';
import './AnimalCard.css';

function AnimalCard(props) {
  const { name, additional, diet, scientificName, size } = props;
  return (
    <div className='animal-wrapper'>
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <div>{diet.join(', ')}.</div>
      <button onClick={() => additional ? alert(JSON.stringify(additional)) : {}}>More...</button>
    </div>
  )
}

export default AnimalCard
