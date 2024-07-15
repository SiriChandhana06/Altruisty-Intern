import React, { useState } from 'react';
import Section from '../Components/Section';
import videos from '../Data/dummyData';
import Header from '../Components/Header';

const HomePage = () => {
  const [displaySections, setDisplaySections] = useState(true);
  const [filteredVideos, setFilteredVideos] = useState([]);

  return (
    <div>
      <Header videos={videos} setFilteredVideos={setFilteredVideos} setDisplaySections={setDisplaySections} />
      {!filteredVideos.length > 0 && (
        <div className='mx-20'>
          <Section title="Startup Stories" videos={videos} />
          <Section title="Startup Talk" videos={videos} />
          <Section title="Startup Podcast" videos={videos} />
          <Section title="Student Contribution" videos={videos} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
