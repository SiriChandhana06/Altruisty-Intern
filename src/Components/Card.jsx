import React from 'react';
import VideoSection from './VideoSection'; // Ensure correct path to VideoSection
import dummyData from '../Data/dummyData'; // Assuming this correctly imports an array of video objects

const Card = () => (
  <div className="min-h-screen bg-gray-100 py-10">
    <h1 className="text-4xl font-bold text-center pb-8">Startup Talk</h1>
    <div className="max-w-6xl mx-auto">
      <main className="mx-4 md:flex md:gap-32 md:mx-0 ">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Innovation at Its Best</h1>
          <VideoSection title="Innovation at Its Best" videos={dummyData} />
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Building the Future</h1>
          <VideoSection title="Building the Future" videos={dummyData} />
        </section>
      </main>
    </div>
  </div>
);
export default Card;
































