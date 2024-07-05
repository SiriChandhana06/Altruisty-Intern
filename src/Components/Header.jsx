import React, { useState, useEffect, useRef } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { app } from '../Components/Firebaseauth';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const auth = getAuth(app);
  const dropdownRef = useRef(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error occurred during sign-in:", error.message);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error occurred during sign-out:", error.message);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user state if user is authenticated
      } else {
        setUser(null); // Reset user state if no user is authenticated
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from auth state changes
  }, [auth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#032d60] text-white">
      <div className="flex justify-center px-10 py-4">
        <h1 className="text-4xl font-bold">StartupHub</h1>
      </div>
      <nav className="bg-white px-12 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            {['Overview', 'StartupStories', 'StartupPodcast', 'StartupTalk', 'Student Articles ','Student Contribution Stories'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full font-semibold bg-[#eaf5fe] text-black hover:bg-[#ce4d2f] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div class="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
