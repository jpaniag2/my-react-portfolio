import './App.css';
import Experience from './Components/Experience';
import Freelance from './Components/Freelance';
import { freelanceObjOne } from './Components/Freelance/Data';

function App() {
  return (
    <>
      <Experience />
      <Freelance {...freelanceObjOne}/>
    </>
  );
}

export default App;
