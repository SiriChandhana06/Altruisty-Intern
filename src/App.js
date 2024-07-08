import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home";
import StartupTalk from "./Components/StartupTalk";
import StartupStories from "./Components/StartupStories";
import StartupPodcast from "./Components/StartupPodcast";
import StudentContributionPage from "./Components/Teja/Stdcon";
import StudentStoryPage from './Components/Teja/Studentstry';
import VideoDetail from './Components/Teja/VideoDetail';
import Header from "./Components/Header";


function App() {
  const videos = [
    { id: 1, src: 'video1.mp4', title: 'Aetherius Vael', description: 'Description 1' },
    { id: 2, src: 'video1.mp4', title: 'Seraphina Drakewind', description: 'Description 2' },
    { id: 3, src: 'video1.mp4', title: 'Lyra Nightshade', description: 'Description 3' },
    { id: 4, src: 'video1.mp4', title: 'Sylas Frostwing', description: 'Description 4' },
    { id: 5, src: 'video1.mp4', title: 'Nova Starweaver', description: 'Description 5' },
  ];
  
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/video/:id" element={
            <>
            <Header/>
            <VideoDetail videos={videos} />
            </>}
             />
          <Route path="/startupstories" element={
              <>
              <Header/>
                <StudentStoryPage videos={videos}/>
                <StudentContributionPage videos={videos} />
              </>
            } />
          {/* <Route path="/startupstories" element={<StudentStoryPage videos={videos} />} /> */}
          {/* <Route path='/startupstories' element={<StartupStories/>} /> */}
          <Route path="/startuptalk" element={<StartupTalk/>} />
          <Route path='/startuppodcast' element={<StartupPodcast/>} />
          {/* <Route path='/studentcontribution' element={<StudentContributionPage/>} /> */}
          <Route path="/studentcontribution" element={
            <>
            <Header/>
            <StudentContributionPage videos={videos} />
            </>
            } />
        </Routes>
      </Router>
  );
}

export default App;
