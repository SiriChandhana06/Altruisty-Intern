import React, { useState } from 'react';
import video from '../Data/dummyData'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import useWindowSize from '../Components/Windowsize';


      
  
const PodcastCard = () => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [displaySections, setDisplaySections] = useState(true);

  // Function to set filtered videos
  const handleFilteredVideos = (filteredVideos) => {
    setFilteredVideos(filteredVideos);
  };

  const VideoCard = ({ video }) => (
    <div className="p-4 flex-shrink-0">
       <Link to={`/video/${video.id}`}>
      <video controls className="w-48 h-48 object-cover rounded-lg">
        <source src={process.env.PUBLIC_URL + '/' + video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="mt-2 text-center">{video.title}</h3>
      </Link>
    </div>
  );
  
  const VideoSection = ({ title, video }) => {
    const [showMore, setShowMore] = useState(false);
    const size = useWindowSize();
    const isMobile = size.width <= 768;
  
    const displayedVideos = showMore ? video : video.slice(0, isMobile ? 1 : 2);
  
    return (
      <div className="bg-gradient-to-tr from-[#9747FF] to-white p-6 rounded-xl shadow-lg shadow-[#9747FF] flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <div className={`flex gap-4 ${showMore ? 'overflow-x-auto hide-scrollbar scroll-smooth' : ''}`}>
            {displayedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
        <div className="mt-4 lg:mt-28 text-center w-full lg:w-80">
          <button
            className="px-6 py-2 border-2 border-black bg-white text-black font-semibold rounded-full shadow-md hover:bg-[#9747FF] hover:text-white transition-colors"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>
    );
  };
  
  const VideosSection = ({ title, video }) => {
    const [showMore, setShowMore] = useState(false);
    const size = useWindowSize();
    const isMobile = size.width <= 768;
  
    const displayedVideos = showMore ? video : video.slice(0, isMobile ? 1 : 2);
  
    return (
      <div className="bg-gradient-to-tl from-[#9747FF] to-white p-8 rounded-xl shadow-lg shadow-[#9747FF] flex flex-col lg:flex-row">
        <div className="mt-4 lg:mt-28 text-center w-full lg:w-64">
          <button
            className="px-6 py-2 border-2 border-black bg-white text-black font-semibold rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className={`flex gap-4 ${showMore ? 'overflow-x-auto hide-scrollbar scroll-smooth' : ''}`}>
            {displayedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
    <Header videos={video} setFilteredVideos={handleFilteredVideos} setDisplaySections={setDisplaySections} />
    {!filteredVideos.length > 0 && (
      <main className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Startup Podcasts</h2>
      </div>
      <div className=" mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-6 pb-10">
          <div className="py-4">
            {/* Pass filteredVideos to VideoSection */}
            <VideoSection video={filteredVideos.length > 0 ? filteredVideos : video} />
          </div>
          <div className="w-full lg:w-96">
            <h1 className="text-2xl font-bold text-center mt-4 lg:mt-40">Making a Difference</h1>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-6 pb-10">
          <div className="w-full lg:w-96">
            <h1 className="text-2xl font-bold text-center mt-4 lg:mt-40">Building a Dream Team</h1>
          </div>
          <div className="py-4">
            {/* Pass filteredVideos to VideosSection */}
            <VideosSection video={filteredVideos.length > 0 ? filteredVideos : video} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pb-10">
          <div className="py-4">
            {/* Pass filteredVideos to VideoSection */}
            <VideoSection video={filteredVideos.length > 0 ? filteredVideos : video} />
          </div>
          <div className="w-full lg:w-96">
            <h1 className="text-2xl font-bold text-center mt-4 lg:mt-40">Against All Odds</h1>
          </div>
        </div>
      </div>
    </main>
    )}
      
    </div>
  );
};

export default PodcastCard;
