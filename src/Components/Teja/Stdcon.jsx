import React from 'react';
import Section from './Section';

const StudentContributionPage = ({ videos }) => {
  return (
    <>
      <h1 className='flex justify-center font-bold text-4xl pt-6 pb-2 border-[#eeeeee] border-b-2 mx-10 shadow-lg'>Student Contribution Stories</h1>
      <Section videos={videos} />
      <Section videos={videos} />
      <Section videos={videos} />
      <Section videos={videos} />
    </>
  );
}

export default StudentContributionPage;

