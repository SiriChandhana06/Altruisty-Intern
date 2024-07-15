import React,{useState} from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import video from '../Data/dummyData'


const StartupTalk = () => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [displaySections, setDisplaySections] = useState(true);

  // Function to set filtered videos
  const handleFilteredVideos = (filteredVideos) => {
    setFilteredVideos(filteredVideos);
  };
  return (
    <div>
    <Header videos={video} setFilteredVideos={handleFilteredVideos} setDisplaySections={setDisplaySections} />

    {!filteredVideos.length > 0 && (
      <Card video={filteredVideos.length > 0 ? filteredVideos : video} />
    )}
    </div>
  )
}

export default StartupTalk;