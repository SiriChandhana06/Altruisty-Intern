import React from 'react';
import Section from './Section';

const StudentContributionPage = ({ videos }) => {
  return (
    <>
    <h1 className='text-center xl:text-center xl:text-4xl sm:text-left font-bold text-l sm:text-l pt-6 pb-2 border-[#eeeeee] border-b-2 mx-10 shadow-lg'>
  Student Contribution Stories
</h1>

     
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

