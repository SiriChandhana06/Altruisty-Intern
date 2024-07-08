import React from 'react';
import VideoSlider from '../compo/VideoSlider';
import videosData from "../Data/videoData"; // Assuming this file exports an array of videos
import Header from '../../Header';

const MainPage = () => {
  // Assuming videosData is an array of video objects with category information

  // Group videos by category
  const groupedVideos = videosData.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div>
      <div className="container mx-auto p-4">
        {Object.keys(groupedVideos).map(category => (
          <div key={category}>
            <VideoSlider videos={groupedVideos[category]} category={category} />
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
