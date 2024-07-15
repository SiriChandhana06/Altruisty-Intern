import React, { useState } from 'react';
import Section from '../Components/Section';
import data from '../Data/dummyData'
import Header from '../Components/Header';

const SCP = () => {
  const [displaySections, setDisplaySections] = useState(true);
  const [filteredVideos, setFilteredVideos] = useState([]);
 
      


  return (
    <div>
      <Header videos={data} setFilteredVideos={setFilteredVideos} setDisplaySections={setDisplaySections} />
      {!filteredVideos.length > 0 && (
        <div className='mx-20'>
          <Section title="My Contribution" videos={data} />
          <Section title="Success stories" videos={data} />
          <Section title="Failure stories" videos={data} />
        </div>
      )}
    </div>
  );
}

export default SCP;
