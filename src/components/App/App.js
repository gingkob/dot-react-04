import React, { useState } from 'react'
import data from './data'
import AnimalCard from '../AnimalCard/AnimalCard'
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import './App.css';

// function showAdditional(additional) {
//   // const alertInfo = Object.entries(additional).map(info => `${info[0]}: ${info[1]}`).join('\n');
//   // alert(alertInfo);
//   return additional
// }

function App() {

  const [additional, setAdditional] = useState([])

  const showAdditional = (add) => setAdditional(add);

  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal => <AnimalCard
        additional={animal.additional}
        additionalInfo={showAdditional}
        diet={animal.diet}
        key={animal.name}
        name={animal.name}
        scientificName={animal.scientificName}
        size={animal.size}
      />)}
      <AdditionalInfo additionalInfo={additional} />
    </div>
  );
}

export default App;
