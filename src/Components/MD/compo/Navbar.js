import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const activeLink = navRef.current.querySelector('.active');
    if (activeLink) {
      const containerWidth = navRef.current.clientWidth;
      const activeLinkWidth = activeLink.offsetWidth;
      const activeLinkLeft = activeLink.offsetLeft;
      const scrollLeft = activeLinkLeft - (containerWidth / 2) + (activeLinkWidth / 2);
      navRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <nav className="p-3 border border-b-black flex justify-center">
      <div className="overflow-x-auto no-scrollbar" ref={navRef}>
        <ul className="flex space-x-4 whitespace-nowrap p-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold p-2 rounded-full text-black hover:bg-gradient-to-r from-[#6e60c4] via-[#6e60c4] to-[#ffffff] hover:text-white transition-colors ${isActive ? 'active underline' : ''}`
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/startup-stories"
              className={({ isActive }) =>
                `font-semibold p-2 rounded-full text-black hover:bg-gradient-to-r from-[#6e60c4] via-[#6e60c4] to-[#ffffff] hover:text-white transition-colors ${isActive ? 'active underline' : ''}`
              }
            >
              Startup Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/startup-podcast"
              className={({ isActive }) =>
                `font-semibold p-2 rounded-full text-black hover:bg-gradient-to-r from-[#6e60c4] via-[#6e60c4] to-[#ffffff] hover:text-white transition-colors ${isActive ? 'active underline' : ''}`
              }
            >
              Startup Podcast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/startup-talk"
              className={({ isActive }) =>
                `font-semibold p-2 rounded-full text-black hover:bg-gradient-to-r from-[#6e60c4] via-[#6e60c4] to-[#ffffff] hover:text-white transition-colors ${isActive ? 'active underline' : ''}`
              }
            >
              Startup Talk
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contribution-program"
              className={({ isActive }) =>
                `font-semibold p-2 rounded-full text-black hover:bg-gradient-to-r from-[#6e60c4] via-[#6e60c4] to-[#ffffff] hover:text-white transition-colors ${isActive ? 'active underline' : ''}`
              }
            >
              Student Contribution Program
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
