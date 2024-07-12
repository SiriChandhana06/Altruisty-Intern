
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Header = ({ searchQuery, setSearchQuery }) => {
//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     navigate(`/video/${searchQuery}`);
//   };

//   return (
//     <header className="bg-[#032d60] text-white">
//       <div className="flex justify-center sm:justify-between items-center px-4 py-2 sm:px-10 sm:py-4 xl:justify-betweenitem-center">
//         <h1 className="text-2xl sm:text-4xl font-bold">StartupHub</h1>
//       </div>
//       <nav className="bg-white px-4 py-10 sm:px-12 sm:py-4 shadow-lg sm:flex sm:justify-between sm:items-center">
//         <div className="container mx-auto">
//           <div className="flex flex-col sm:flex-row justify-between items-center">
//             <div className="flex overflow-x-auto no-scrollbar sm:overflow-x-auto sm:no-scrollbar space-x-4 sm:space-x-6">
//               <Link to='/' className='py-2'> 
//                 <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">Overview</h1>
//               </Link>
//               <Link to='/startupstories' className='py-2'>
//                 <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupStories</h1>
//               </Link>
//               <Link to='/startuptalk' className='py-2'>
//                 <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupTalk</h1>
//               </Link>
//               <Link to='/startuppodcast' className='py-2'>
//                 <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupPodcast</h1>
//               </Link>
//               <Link to='/studentcontribution' className='py-2'>
//                 <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">Student Contribution Stories</h1>
//               </Link>
//             </div>
//             <form onSubmit={handleSearchSubmit} className="search mt-4 sm:mt-0">
//               <input 
//                 placeholder="Search..." 
//                 type="text"  
//                 value={searchQuery} 
//                 onChange={handleSearchChange} 
//                 className="border rounded-l-full py-1 px-2 sm:py-2 sm:px-4" 
//               />
//               <button type="submit" className="border rounded-r-full py-1 px-2 sm:py-2 sm:px-4 bg-[#ce4d2f] text-white">
//                 Go
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/video/${searchQuery}`);
  };

  return (
    <header className="bg-[#032d60] text-white">
      <div className="flex justify-center sm:justify-between items-center px-4 py-2 sm:px-10 sm:py-4 xl:justify-betweenitem-center">
        <h1 className="text-2xl sm:text-4xl font-bold">StartupHub</h1>
      </div>
      <nav className="bg-white px-4 py-10 sm:px-12 sm:py-4 shadow-lg sm:flex sm:justify-between sm:items-center sm:overflow-x-auto">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
        
            <div className="flex overflow-x-auto sm:overflow-x-auto space-x-4 sm:space-x-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              <div className="flex space-x-4 sm:space-x-6">
                <Link to='/' className='py-2'> 
                  <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">Overview</h1>
                </Link>
                <Link to='/startupstories' className='py-2'>
                  <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupStories</h1>
                </Link>
                <Link to='/startuptalk' className='py-2'>
                  <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupTalk</h1>
                </Link>
                <Link to='/startuppodcast' className='py-2'>
                  <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">StartupPodcast</h1>
                </Link>
                <Link to='/studentcontribution' className='py-2'>
                  <h1 className="px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors whitespace-nowrap">Student Contribution Stories</h1>
                </Link>
              </div>
            </div>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
