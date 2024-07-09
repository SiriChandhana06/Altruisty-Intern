import React from 'react';
import Section from './Section';

const StudentStoryPage = ({ videos }) => {
  return (
    <div>

      <h1 className='flex justify-center font-bold text-4xl pt-6 pb-2 border-[#eeeeee] border-b-2 mx-10 shadow-lg' >Startup Stories</h1>
               <div className='mx-20'>
               <Section title="From Idea to Launch" videos={videos} />
                <Section title="Turning Dreams into Reality" videos={videos} />
                <Section title="From Garage to Global" videos={videos} />
                <Section title="Revolutionizing [Industry]" videos={videos} />
                </div>
               
    </div>
  );
}

export default StudentStoryPage;