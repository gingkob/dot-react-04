import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './AnimalCard.css';

export default function AnimalCard(props) {
  const { name, additional, additionalInfo, diet, scientificName, size } = props;
  const [showAddInfo, setShowAddInfo] = useState(false);

  const sendAddInfo = () => {
    additionalInfo({ ...additional, name, showAddInfo })
    setShowAddInfo(prevState => !prevState)
  }

  return (
    <div className='animal-wrapper'>
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <div>{diet.join(', ')}.</div>
      {/* <button onClick={() => additional ? alert(JSON.stringify(additional)) : {}}>More...</button> */}
      <Button variant="outlined" color='primary' size='small' style={{ fontStyle: 'oblique', textTransform: 'none', fontFamily: 'cursive', fontWeight: '100' }} onClick={sendAddInfo}>More...</Button>
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

