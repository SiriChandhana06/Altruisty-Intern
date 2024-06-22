import React from 'react';
import Illustration from '../Assests/Startup business landing page, isometric rocket.png'

const Herosection = () => {
  return (
    <div>
      <div className='m-4 md:grid grid-cols-2 mt-10'>
        <div>
            <h1 className='font-bold text-2xl text-[#ce4d2f] ml-4 md:text-4xl md:mt-20 md:ml-10 md:pt-10 md:pl-32'>StartUp Stories</h1>
            <h1 className='font-semibold text-xl pt-4 px-4 text-justify md:pl-40 md:pt-12'>Welcome to StartUpHub, where we celebrate the audacious entrepreneurs who turn their visions into reality. This page is dedicated to sharing the remarkable journeys of startups from diverse industries, shedding light on their unique paths to success.</h1>
            <div className='pt-4 md:flex md:gap-8 md:pt-16 md:pl-40'>
            <button className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Stories</button>
            <button className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Podcast</button>
            <button className='bg-[#ce4d2f] p-4 rounded-lg text-white font-semibold'>Startup Talk</button>
            </div>
        </div>
        <div className='md:pl-28 md:pt-10'>
            <img src={Illustration} alt='Illustration'/>
        </div>
      </div>
    </div>
  )
}

export default Herosection
