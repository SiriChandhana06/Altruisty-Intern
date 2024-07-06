import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#032d60] text-white">
      <div className="flex justify-center px-4 py-2 sm:px-10 sm:py-4">
        <h1 className="text-2xl sm:text-4xl font-bold">StartupHub</h1>
      </div>
      <nav className="bg-white px-4 py-10 sm:px-12 sm:py-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
            <Link to='/' className='py-2'> <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">Overview</h1></Link>
            <Link to='/startupstories' className='py-2' > <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors"> StartupStories</h1></Link>
            <Link to='/startuptalk' className='py-2'> <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">StartupTalk </h1></Link>
            <Link to='/startuppodcast' className='py-2'> <h1  className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">StartupPodcast</h1></Link>
            <Link to='/startupstories' className='py-2'> <h1  className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">Student Contribution Stories</h1></Link>
          </div>
          <div className="search mt-4 sm:mt-0">
            <input placeholder="Search..." type="text" className="border rounded-l-full py-1 px-2 sm:py-2 sm:px-4" />
            <button type="submit" className="border rounded-r-full py-1 px-2 sm:py-2 sm:px-4 bg-[#ce4d2f] text-white">
              Go
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
