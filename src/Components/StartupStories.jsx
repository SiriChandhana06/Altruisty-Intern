
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Nav from './Chatgpt/Header';
import VideoDetail from '../Components/Chatgpt/VideoDetail';
import StudentContributionPage from './Chatgpt/Stdcon';
import StudentStoryPage from './Chatgpt/Studentstry';


const videos = [
  { id: 1, src: 'video1.mp4', title: 'Aetherius Vael', description: 'Description 1' },
  { id: 2, src: 'video1.mp4', title: 'Seraphina Drakewind', description: 'Description 2' },
  { id: 3, src: 'video1.mp4', title: 'Lyra Nightshade', description: 'Description 3' },
  { id: 4, src: 'video1.mp4', title: 'Sylas Frostwing', description: 'Description 4' },
  { id: 5, src: 'video1.mp4', title: 'Nova Starweaver', description: 'Description 5' },
];

const StartupStories = () => {
  return (
    
      <div>
      
        <main className="container mx-auto px-2">
      <Nav/>
          <Routes>
            <Route path="/video/:id" element={<VideoDetail videos={videos} />} />
            <Route path="/startupstories" element={<StudentStoryPage videos={videos} />} />
            <Route path="/student-contribution" element={<StudentContributionPage videos={videos} />} />
            <Route path="/" element={
              <>
               
                <StudentStoryPage videos={videos}/>
                <StudentContributionPage videos={videos} />
              </>
            } />
          </Routes>
         
      </main>
     
      </div>
    
  );
}

export default StartupStories;