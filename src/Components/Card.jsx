import React from 'react';
import VideoSection from './Vd';

const videoss = [
  { id: 1, title: 'Reiciendis tenetur', src: 'video1.mp4' },
  { id: 2, title: 'Reiciendis tenetur', src: 'video2.mp4' },
  { id: 3, title: 'Reiciendis tenetur', src: 'video3.mp4' },
  { id: 4, title: 'Reiciendis tenetur', src: 'video4.mp4' },
  { id: 5, title: 'Reiciendis tenetur', src: 'video5.mp4' },
  { id: 6, title: 'Reiciendis tenetur', src: 'video6.mp4' },
  { id: 7, title: 'Reiciendis tenetur', src: 'video7.mp4' },
  { id: 8, title: 'Reiciendis tenetur', src: 'video8.mp4' },
];

const Card = () => (
  <div className="min-h-screen bg-gray-100 py-10">
    <h1 className="text-4xl font-bold text-center pb-8">Startup Talk</h1>
    <div className="max-w-6xl mx-auto">
      <main className="mx-4 md:flex md:gap-32 md:mx-0 ">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Innovation at Its Best</h1>
          <VideoSection videoss={videoss} />
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-center py-4">Building the Future</h1>
          <VideoSection  videoss={videoss} />
        </section>
      </main>
    </div>
  </div>
);

export default Card;
