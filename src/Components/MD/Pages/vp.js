import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { videos } from "../data/videoData";
import Header from '../components/Header'
const VideoPage = () => {
  const { category, videoTitle } = useParams();

  // Find the video data that matches the category and videoTitle
  const initialVideoData = Object.values(videos)
    .flat()
    .find(
      (video) =>
        video.category === category && video.title.replace(/\s+/g, "-") === videoTitle
    );

  const [currentVideo, setCurrentVideo] = useState(initialVideoData);

  
  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  // Filter videos from the same category
  const sameCategoryVideos = Object.values(videos)
    .flat()
    .filter((video) => video.category === category);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  // Determine the height based on screen size
  const playerHeight = window.innerWidth <= 768 ? "250px" : "480px";

  return (
     <div>
     <Header/>
     <div className="container mx-auto p-4">
     <ReactPlayer url={currentVideo.videoUrl} controls width="100%" height={playerHeight} />
     <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{currentVideo.title}</h1>
     <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2">{currentVideo.description}</p>

     <div className="border-t-2 border-gray-200 mt-4 pt-2">
       <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">More Videos in {category}</h2>
     </div>
     
     <div className="overflow-x-auto scrolling-touch" style={{ maxHeight: "calc(100vh - 400px)" }}>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {sameCategoryVideos.map((video, index) => (
           <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => handleVideoClick(video)}>
             <video src={video.videoUrl}  className="w-full h-48 object-cover rounded-t-lg"></video>
             <div className="p-4">
               <h3 className="text-base sm:text-lg font-bold">{video.title}</h3>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
     </div>
  );
};

export default VideoPage;
