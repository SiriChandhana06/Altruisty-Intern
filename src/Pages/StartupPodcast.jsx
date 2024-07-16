import React, { useState } from 'react';
import Podcastcard from '../Components/PodcastCard';
import video from '../Data/dummyData'
// import { Link } from 'react-router-dom';
import Header from '../Components/Header';
// import useWindowSize from '../Components/Windowsize';


  
const StartupPodcast = () => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [displaySections, setDisplaySections] = useState(true);

  // Function to set filtered videos
  const handleFilteredVideos = (filteredVideos) => {
    setFilteredVideos(filteredVideos);
  };

 return(
  <div>
    <Header videos={video} setFilteredVideos={handleFilteredVideos} setDisplaySections={setDisplaySections} />
    {!filteredVideos.length > 0 && (
      <Podcastcard video={filteredVideos.length > 0 ? filteredVideos : video} />
    )}
  </div>
 )
};

export default StartupPodcast;
