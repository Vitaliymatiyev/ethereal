import './App.css';
import Ethereal from './EtherealNameAndLogo.png';
import etherIcon from './EtherealLogo.png';
import './output.css';

function App() {
  return (
    <div>
        <nav className='sticky top-0 z-50 p-2 bg-black'>
          <img src={etherIcon} alt= "Ethereal Icon" className="object-contain h-[80px] w-[80px]"/>
        </nav>

      <div className= "flex justify-center mt-10">
        <div className="max-w-[1200px] flex flex-col items-center">
          <img src={Ethereal} alt= "Image displays Ethereal name with Icon" className=" w-[700px]"/>
          <p className="text-xl text-center text-white"> The Ethereal Guild is an elite assembly of adventurers bound by their mastery over the five elements: Earth, Air, Fire, Water, and the elusive fifth element, Aether. </p>
        </div>

      </div>

    </div>
  );
}

export default App;
