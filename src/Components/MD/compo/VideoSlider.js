import React from "react";

const VideoSlider = ({ videos, category }) => {
  // Ensure videos is always an array
  const filteredVideos = Array.isArray(videos) ? videos.filter(video => video.category === category) : [];

  return (
    <div className="my-2">
      {category && <h2 className="text-2xl font-bold mb-4">{category}</h2>}
      <div className="flex overflow-x-auto space-x-4 no-scrollbar">
        {filteredVideos.map((video) => (
          <div
            key={video.title}
            className="min-w-[290px] sm:min-w-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform"
          >
            <video
              src={video.videoUrl}
              controls
              className="w-full h-48 object-cover"
            ></video>
            <div className="p-4">
              <h3 className="text-lg font-bold">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
