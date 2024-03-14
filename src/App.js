import './App.css';
import Cube from './Cube.jpeg';
import etherIcon from './etherealWithIcon.png';
import './output.css';

function App() {
  return (
    <div>
        <nav className='sticky top-0 z-50 p-2 bg-black'>
          <img src={etherIcon} alt= "Ethereal Icon" className="object-contain h-[80px] w-[200px]"/>
        </nav>
        <h1 className='font-mono text-xl'>
           Welcome to Ethereal!
        </h1>
      <div>
        <img src={Cube} alt= "Image display a building size lexicon cube size"/>
        <p className="text-3xl font-bold underline"> Randome Text for now </p>
      </div>

    </div>
  );
}

export default App;
