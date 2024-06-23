import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home";
import Startupstories from "./Components/Startupstories";
import Startuppodcast from "./Components/Startuppodcast";
import Startuptalk from "./Components/Startuptalk";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/startupstories" element={<Startupstories/>} />
          <Route path="/startuppodcast" element={<Startuppodcast/>} />
          <Route path="/startuptalk" element={<Startuptalk/>} />
        </Routes>
      </Router>
  );
}

export default App;
