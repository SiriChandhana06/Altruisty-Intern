import React, { useState } from 'react';
import Section from '../Components/Section';
import videos from '../Data/dummyData';
import Header from '../Components/Header';

const StartupStories = () => {
  const [displaySections, setDisplaySections] = useState(true);
  const [filteredVideos, setFilteredVideos] = useState([]);

  return (
    <div>
      <Header videos={videos} setFilteredVideos={setFilteredVideos} setDisplaySections={setDisplaySections} />
      {!filteredVideos.length > 0 && (
        <div className='mx-20'>
          <Section title="Turn dream into reality" videos={videos} />
          <Section title="Success stories" videos={videos} />
          <Section title="Failure stories" videos={videos} />
        </div>
      )}
    </div>
  );
}

export default StartupStories;
