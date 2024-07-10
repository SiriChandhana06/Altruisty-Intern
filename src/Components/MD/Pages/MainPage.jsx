import React from 'react';

import Section from '../compo/Section';
// Assuming videosData is an array of video objects with category information
const videos = [
  { id: 1, src: 'video1.mp4', title: 'Aetherius Vael', description: 'Description 1' },
  { id: 2, src: 'video1.mp4', title: 'Seraphina Drakewind', description: 'Description 2' },
  { id: 3, src: 'video1.mp4', title: 'Lyra Nightshade', description: 'Description 3' },
  { id: 4, src: 'video1.mp4', title: 'Sylas Frostwing', description: 'Description 4' },
  { id: 5, src: 'video1.mp4', title: 'Nova Starweaver', description: 'Description 5' },
];



const MainPage = ({ video }) => {
  return (
    <div>


      <div className='mx-20'>
        <Section title="Startup Stories" videos={videos} />
        <Section title="Startup Talk" videos={videos} />
        <Section title="Startup Podcast" videos={videos} />
        <Section title="Student Contribution" videos={videos} />
      </div>





    </div>
  );
}


export default MainPage;
