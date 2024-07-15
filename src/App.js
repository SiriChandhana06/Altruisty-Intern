// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import StartupTalk from "./Components/StartupTalk";
// import StartupPodcast from "./Components/StartupPodcast";
// import StudentContributionPage from "./Components/Teja/Stdcon";
// import StudentStoryPage from './Components/Teja/Studentstry';
// import VideoDetail from './Components/Teja/VideoDetail';
// import RenderHeader from "./Components/RenderHeader";
// //import VideoDetails from "./Components/Stvd";

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const videos = [
//     { id: 1, src: 'video1.mp4', title: 'Aetherius Vael', description: 'Description 1' },
//     { id: 2, src: 'video1.mp4', title: 'Seraphina Drakewind', description: 'Description 2' },
//     { id: 3, src: 'video1.mp4', title: 'Lyra Nightshade', description: 'Description 3' },
//     { id: 4, src: 'video1.mp4', title: 'Sylas Frostwing', description: 'Description 4' },
//     { id: 5, src: 'video1.mp4', title: 'Nova Starweaver', description: 'Description 5' }, 
//     { id: 6, src: 'video1.mp4', title: 'Reiciendis tenetur', description: 'Description 6' },

//   ];

//   const videoss = [
//     { id: 1, title: 'Reiciendis tenetur', src: 'video1.mp4', description: 'Description for video 1' },
//     { id: 2, title: 'Reiciendis tenetur', src: 'video2.mp4', description: 'Description for video 2' },
//     { id: 3, title: 'Reiciendis tenetur', src: 'video3.mp4', description: 'Description for video 3' },
//     { id: 4, title: 'Reiciendis tenetur', src: 'video4.mp4', description: 'Description for video 4' },
//     { id: 5, title: 'Reiciendis tenetur', src: 'video5.mp4', description: 'Description for video 5' },
//     { id: 6, title: 'Reiciendis tenetur', src: 'video6.mp4', description: 'Description for video 6' },
//     { id: 7, title: 'Reiciendis tenetur', src: 'video7.mp4', description: 'Description for video 7' },
//     { id: 8, title: 'Reiciendis tenetur', src: 'video8.mp4', description: 'Description for video 8' },
//   ];

//   return (
//     <Router>
//       <RenderHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path="/video/:id" element={<VideoDetail searchQuery={searchQuery} videos={videos} />} />
//         <Route path="/startupstories" element={
//           <>
//             <StudentStoryPage searchQuery={searchQuery} videos={videos} />
//             <StudentContributionPage searchQuery={searchQuery} videos={videos} />
//           </>
//         } />
//         <Route path="/startuptalk" element={<StartupTalk searchQuery={searchQuery} />} />
//         <Route path="/videos/:id" element={<VideoDetail searchQuery={searchQuery} videoss={videoss} />} />
        
//         <Route path="/startuppodcast" element={<StartupPodcast searchQuery={searchQuery} />} />
//         <Route path="/studentcontribution" element={<StudentContributionPage searchQuery={searchQuery} videos={videos} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/HomePage"
import StartupPodcast from "./Pages/StartupPodcast";
import StartupTalk from "./Pages/StartupTalk";
import SCP from './Pages/SCP'
import StartupStories from "./Pages/StartupStories";
import VideoPage from './Components/VideoPlayer';



function App() {

  

    return (
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/StartupPodcast' element={<StartupPodcast />} />
          <Route path='/StartupTalk' element={<StartupTalk />} />
          <Route path='/StartupStories' element={<StartupStories />} />
          <Route path='/SCP' element={<SCP />} />
          <Route path="/video/:id" element={<VideoPage/>} />
       
          
          
        </Routes>
      </Router>
    );
  }
  
  export default App;
  