import React, { useState } from 'react';

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
  <div className="p-4">
    <video controls className="w-full h-48 object-cover rounded-lg">
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h3 className="mt-2 text-center">{video.title}</h3>
  </div>
);

const VideoSection = ({ title, videos }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedVideos = showMore ? videos : videos.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-[#9747FF] to-white p-4 rounded-xl shadow-lg shadow-[#9747FF]">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={`grid grid-cols-2 gap-4 ${showMore ? 'max-h-[600px] overflow-y-scroll hide-scrollbar' : ''}`}>
        {displayedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-full border-black border-2 shadow-md hover:bg-[#9747FF] hover:text-white flex justify-center"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

const Card = () => (
  <div className="min-h-screen bg-gray-100 py-10">
    <h1 className="text-4xl font-bold text-center pb-8">Startup Talk</h1>
    <div className="max-w-6xl mx-auto">
      <main className="mx-4 md:flex md:gap-32 md:mx-0 ">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Innovation at Its Best</h1>
          <VideoSection videos={videos} />
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Building the Future</h1>
          <VideoSection videos={videos} />
        </section>
      </main>
    </div>
  </div>
);

export default Card;
