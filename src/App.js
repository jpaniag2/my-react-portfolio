import './App.css';
import Experience from './Components/Experience';
import Freelance from './Components/Freelance';
import { freelanceObjOne } from './Components/Freelance/Data';
import Hero from './Components/Hero';
import { homeObjOne } from './Components/Hero/Data';

function App() {
  return (
    <>
      <Hero {...homeObjOne}/>
      <Experience />
      <Freelance {...freelanceObjOne}/>
    </>
  );
}

export default App;
