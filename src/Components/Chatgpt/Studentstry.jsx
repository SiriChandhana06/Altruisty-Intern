import React from 'react';
import Section from './Section';

const StudentStoryPage = ({ videos }) => {
  return (
    <>

      <h1 className='flex justify-center font-bold text-4xl pt-6'>Startup Stories</h1>
     
      <Section title="From Idea to Launch" videos={videos} />
                <Section title="Turning Dreams into Reality" videos={videos} />
                <Section title="From Garage to Global" videos={videos} />
                <Section title="Revolutionizing [Industry]" videos={videos} />
               
    </>
  );
}

export default StudentStoryPage;