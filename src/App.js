import './App.scss';
import Home from './components/Home'
import {useState} from "react";
import Info from './components/Info';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const [player_info , setPlayer_info] = useState({});
  
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home  setPlayer_info={setPlayer_info}/>} />
      <Route path="/info" element={<Info player_info={player_info}/>} />
      </Routes>
    </Router>  

    </div>
  );
}

export default App;
