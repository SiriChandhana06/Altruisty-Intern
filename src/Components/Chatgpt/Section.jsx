import React from 'react';
import VideoCarousel from './VideoCarousel'; // Import VideoCarousel component

const Section = ({ title, videos }) => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <VideoCarousel videos={videos} />
  </section>
  );
}

export default Section;                                                                 // src/chatgpt/Section.js */}
  


