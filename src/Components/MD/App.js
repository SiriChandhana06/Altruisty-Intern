import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/MainPage";
import StartupPodcastPage from "./Pages/startup-podcast"; // Corrected name
import StartupStoriesPage from './Pages/startup-stories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/startup-stories" element={<StartupStoriesPage />} />
        <Route path="/startup-podcast" element={<StartupPodcastPage />} /> {/* Corrected name */}
          
      </Routes>
    </Router>
  );
}

export default App;
