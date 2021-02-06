import data from './data'
import AnimalCard from '../AnimalCard/AnimalCard'
import './App.css';

function showAdditional(additional) {
  const alertInfo = Object.entries(additional).map(info => `${info[0]}: ${info[1]}`).join('\n');
  alert(alertInfo);
}

function App() {
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
    </div>
  );
}

export default App;
