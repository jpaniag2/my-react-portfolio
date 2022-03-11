import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import HomeContents from './Components/HomeContents';

function App() {
  return (
    <Router>

    {/* <ScrollToTop /> */}
    
      <Routes >
        <Route exact path='/' element={<HomeContents />} />

      </Routes>

    </Router>  
  );
}

export default App;
