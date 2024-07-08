import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import VideoSlider from '../components/VideoSlider';
import videosData from "../data/videoData"; // Assuming this file exports an array of videos

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
      <Header />
      <Navbar />
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
