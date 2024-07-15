// src/components/RelatedVideos.js
import React from 'react';
import videos from '../Data/dummyData';
import VideoCard from './videoCard'; // Assuming VideoCard component is defined in VideoCard.js

const RelatedVideos = ({ currentVideoId }) => {
  // Example: Filter videos to find related ones, exclude current video
  const relatedVideos = videos.filter(video => video.id !== currentVideoId);

  return (
    <div className="bg-gray-100 p-4 mt-5 rounded-md">
      <div className='flex'>
      <a href='/'><svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg></a>
      <h3 className="text-xl font-semibold mb-4">Related Videos</h3>
      </div>
      <div className="overflow-y-auto no-scrollbar" style={{maxHeight:"450px"}}>
        <div className="grid grid-cols-1 gap-4">
          {relatedVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
