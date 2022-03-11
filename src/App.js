import './App.css';
import Experience from './Components/Experience';
import Freelance from './Components/Freelance';
import { freelanceObjOne } from './Components/Freelance/Data';
import Hero from './Components/Hero';
import { homeObjOne } from './Components/Hero/Data';
import Projects from './Components/Projects';
import { projectObjOne, projectObjTwo } from './Components/Projects/Data';

function App() {
  return (
    <>
      <Hero {...homeObjOne}/>
      <Experience />
      <Freelance {...freelanceObjOne}/>
      <Projects {...projectObjOne} />
      <Projects {...projectObjTwo} />
    </>
  );
}

export default App;
