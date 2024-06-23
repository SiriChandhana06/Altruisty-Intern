import React from 'react';
import Illustration from '../Assests/Startup business landing page, isometric rocket.png';
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div className='m-4 md:grid grid-cols-2 mt-10'>
        <div>
          <h1 className='font-bold text-2xl text-[#ce4d2f] ml-4 md:text-4xl md:mt-20 md:ml-10 md:pt-10 md:pl-32'>StartUp Stories</h1>
          <h1 className='font-semibold text-xl pt-4 px-4 text-justify md:pl-40 md:pt-12'>Welcome to StartUpHub, where we celebrate the audacious entrepreneurs who turn their visions into reality. This page is dedicated to sharing the remarkable journeys of startups from diverse industries, shedding light on their unique paths to success.</h1>
          <div className='pt-4 md:flex md:gap-8 md:pt-16 md:pl-40'>
            <button onClick={() => (navigate('/startupstories'))} className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Stories</button>
            <button onClick={() => (navigate('/startuppodcast'))} className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Podcast</button>
            <button onClick={() => (navigate('/startuptalk'))} className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Talk</button>
          </div>
        </div>
        <div className='md:pl-28 md:pt-10'>
          <img src={Illustration} alt='Illustration' />
        </div>
      </div> */}
      {/* <div>
        <div>
          <h1 className='font-bold text-[#ce4d2f] text-4xl md:mt-20 md:ml-10 md:pt-10 md:pl-32'>About Us</h1>
        </div>
        <div>
          <h1 className='font-bold text-3xl text-center pt-10'>Empowering the Next Generation of Entrepreneurs</h1>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-xl pt-10 pl-32'>Blog Module with Categories and Tags</h1>
            <p className=' text-xl pt-10 pl-40 text-justify'>Our blog module is designed to organize and present content effectively. Categories and tags ensure that stories are easy to navigate, allowing readers to find topics of interest quickly. Categories might include sections like "Funding Success," "Mentorship Experiences," "Student Contributions," and more. Tags provide additional layers of specificity, making it simple for readers to delve into particular aspects of each story.</p>
          </div>
          <div>
            <img src='gfgt' alt='image'/>
          </div>
        </div>
      </div> */}
      {/* <div className='pt-8'>
        <div className='flex justify-center gap-10 m-10'>
          <div>
            <h1 className='font-bold text-2xl text-[#ce4d2f] pt-3'>Search For Most Popular Stories</h1>
          </div>
          <div className='flex'>
            <input
              className='border-y-2 border-l-2 border-black font-semibold rounded-l-xl text-xl  px-4 py-2'
              type='search'
              placeholder='Search Here' 
            />
            <svg className='bg-[#032d60] rounded-r-xl py-2 px-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
            <g fill="#ffffff">
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path></g>
            </svg>

          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Herosection
