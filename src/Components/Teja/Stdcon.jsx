import React from 'react';
import Section from './Section';

const StudentContributionPage = ({ videos }) => {
  return (
    <>
      <h1 className='flex justify-center font-bold text-xl pt-6 pb-2 border-[#eeeeee] border-b-2 mx-10 shadow-lg md:text-4xl' >Student Contribution Stories</h1>
      <div  className='mx-20'>
      <Section videos={videos} />
      <Section videos={videos} />
      <Section videos={videos} />
      <Section videos={videos} />
      </div>
    </>
  );
}

export default StudentContributionPage;

