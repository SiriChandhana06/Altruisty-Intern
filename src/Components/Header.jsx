import React from 'react';

const Header = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl bg-[#032d60] text-white font-bold py-4 text-center"> StartupHub </h1>
      </div>
      <div className=' m-10'>
      <div className='flex gap-6'>
        <div className='flex gap-6'>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>Home</h1>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>About</h1>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>Services</h1>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>StartupStories</h1>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>StartupPodcast</h1>
          <h1 className='border-2 font-semibold rounded-full py-4 px-8 bg-[#eaf5fe]  shadow-lg shadow-gray-500/50 active:bg-[#ce4d2f] active:text-white focus:outline-none '>StartupTalk</h1>
        </div>
        <div className='flex'>
            <input
              className='border-y-2 border-l-2 border-black font-semibold rounded-l-xl text-xl px-4 py-2 shadow-lg shadow-gray-500/50'
              type='search'
              placeholder='Search Here' 
            />
            <svg className='bg-[#032d60] rounded-r-xl py-2 px-4 shadow-lg shadow-gray-500/50' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
            <g fill="#ffffff">
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path></g>
            </svg>
            </div>
            <div>
            <button className='bg-[#ce4d2f] py-4 px-8 font-semibold rounded-xl text-white border-1 border-[#e8e8e8]' id='btn'>Login</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header;
