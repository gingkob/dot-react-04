import data from './data'
import AnimalCard from '../AnimalCard/AnimalCard'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal=><AnimalCard 
        key={animal.name}
        name={animal.name}
        />)}
    </div>
  );
}

export default App;
