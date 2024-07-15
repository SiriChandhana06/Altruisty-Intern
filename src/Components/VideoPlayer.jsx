// src/components/VideoPlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../Data/dummyData';
import RelatedVideos from './RelatedVideos'; 
import Header from './Header';

const VideoPlayer = () => {
  const { id } = useParams();
  const video = videos.find(video => video.id === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <Header/>
      <div className="flex flex-wrap">
      <div className="related-videos w-full md:w-1/3 px-4">
      <RelatedVideos currentVideoId={id} />
    </div>
      <div className="video-player rounded-lg w-full md:w-2/3 px-4 my-8">
        <video controls className="w-full h-auto">
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-xl font-bold mt-4">{video.title}</h2>
        <p className="text-gray-700 rounded-xl">{video.description}</p>
      </div>
     
    </div>
    </div>
    
  );
};

export default VideoPlayer;
