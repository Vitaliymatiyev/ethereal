import logo from './logo.svg';
import './App.css';
import Cube from './Cube.jpeg';
import './output.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
           Welcome to Ethereal!
        </h1>
      </header>
      <div>
        <img src={Cube} alt= "Image display a building size lexicon cube size"/>
        <p className="text-3xl font-bold underline"> Randome Text for now </p>
      </div>

    </div>
  );
}

export default App;
