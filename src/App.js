import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home";
import StartupTalk from "./Components/StartupTalk";
import StartupStories from "./Components/StartupStories";
import StartupPodcast from "./Components/StartupPodcast";
import Student from "./Components/Student";


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/startupstories' element={<StartupStories/>} />
          <Route path="/startuptalk" element={<StartupTalk/>} />
          <Route path='/startuppodcast' element={<StartupPodcast/>} />
          <Route path='/studentcontribution' element={<Student/>} />
        </Routes>
      </Router>
  );
}

export default App;
