import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './videoCard'; // Assuming VideoCard component path corrected

const Header = ({ videos, setFilteredVideos, setDisplaySections }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideosLocal] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === '') {
      setFilteredVideosLocal([]);
      setFilteredVideos([]);
      setDisplaySections(true); // Show sections when search query is cleared
    } else {
      const filtered = videos.filter(video =>
        video.title.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredVideosLocal(filtered);
      setFilteredVideos(filtered);
      setDisplaySections(false); // Hide sections when showing filtered videos
    }
  };

  return (
    <div>
      <header className="bg-[#032d60] text-white">
        <div className="flex justify-center px-4 py-2 sm:px-10 sm:py-4">
          <h1 className="text-2xl sm:text-4xl font-bold">StartupHub</h1>
        </div>
        <nav className="bg-white px-4 py-10 sm:px-12 sm:py-4 shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
              {/* Links to different sections */}
              <Link to="/" className="py-2">
                <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">
                  Overview
                </h1>
              </Link>
              <Link to="/StartupStories" className="py-2">
                <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">
                  StartupStories
                </h1>
              </Link>
              <Link to="/StartupTalk" className="py-2">
                <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">
                  StartupTalk
                </h1>
              </Link>
              <Link to="/StartupPodcast" className="py-2">
                <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">
                  StartupPodcast
                </h1>
              </Link>
              <Link to="/SCP" className="py-2">
                <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors">
                  Student Contribution Stories
                </h1>
              </Link>
            </div>
            {/* Search Form */}
            <form onSubmit={handleSearchSubmit} className="search mt-4 sm:mt-0">
              <input
                placeholder="Search..."
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border rounded-l-full py-1 px-2 sm:py-2 sm:px-4"
              />
              <button type="submit" className="border rounded-r-full py-1 px-2 sm:py-2 sm:px-4 bg-[#ce4d2f] text-white">
                Go
              </button>
            </form>
          </div>
        </nav>
      </header>
      {/* Display filtered videos */}
      {filteredVideos.length > 0 && (
        <div className="container mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
