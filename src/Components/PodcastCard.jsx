import React, { useState } from 'react';

// Example video data
const videos = [
  { id: 1, title: 'Reiciendis tenetur', src: 'video1.mp4' },
  { id: 2, title: 'Reiciendis tenetur', src: 'video2.mp4' },
  { id: 3, title: 'Reiciendis tenetur', src: 'video3.mp4' },
  { id: 4, title: 'Reiciendis tenetur', src: 'video4.mp4' },
  { id: 5, title: 'Reiciendis tenetur', src: 'video5.mp4' },
  { id: 6, title: 'Reiciendis tenetur', src: 'video6.mp4' },
  { id: 7, title: 'Reiciendis tenetur', src: 'video7.mp4' },
  { id: 8, title: 'Reiciendis tenetur', src: 'video8.mp4' },
];

const VideoCard = ({ video }) => (
  <div className="p-4 flex-shrink-0 ">
    <video controls className="w-48 h-48 object-cover rounded-lg">
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h3 className="mt-2 text-center">{video.title}</h3>
  </div>
);

const VideoSection = ({ title, videos }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedVideos = showMore ? videos : videos.slice(0, 2);

  return (
    <div className="bg-gradient-to-tr from-[#9747FF] to-white p-6 rounded-xl shadow-lg shadow-[#9747FF] flex gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <div className={`flex gap-4 ${showMore ? 'overflow-x-auto hide-scrollbar scroll-smooth' : ''}`}>
          {displayedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      <div className="mt-28 text-center w-80 ">
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

const VideosSection = ({ title, videos }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedVideos = showMore ? videos : videos.slice(0, 2);

  return (
    <div className="bg-gradient-to-tl from-[#9747FF] to-white p-8 rounded-xl shadow-lg shadow-[#9747FF] flex">
        <div className="mt-28 text-center w-64">
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

const PodcastCard = () => (
  <div className="min-h-screen bg-gray-100">
    <main className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Startup Podcasts</h2>
      </div>
      <div className="max-w-6xl mx-12">
        <div className="flex gap-6 pb-10">
          <div className="py-4">
            <VideoSection videos={videos} />
          </div>
          <div className="w-96">
            <h1 className="text-2xl font-bold text-center mt-40">Making a Difference</h1>
          </div>
        </div>
        <div className="flex gap-6 pb-10">
          <div className="w-96">
            <h1 className="text-2xl font-bold text-center mt-40">Building a Dream Team</h1>
          </div>
          <div className="py-4">
            <VideosSection videos={videos} />
          </div>
        </div>
        <div className="flex gap-6 pb-10">
          <div className="py-4">
            <VideoSection videos={videos} />
          </div>
          <div className="w-96">
            <h1 className="text-2xl font-bold text-center mt-40">Against All Odds</h1>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default PodcastCard;
