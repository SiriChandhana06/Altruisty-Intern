// StartupStoriesPage.js
import React, { useState, useEffect } from "react";
import VideoSlider from "../components/VideoSlider_page";
import startupPodcast from "../data/videoData"; // Assuming this is the correct path
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const StartupStoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Filter categories specific to 'Startup Stories'
    const uniqueCategories = ["Startup Stories"];
    setCategories(uniqueCategories);
  }, []);

  const renderSubcategorySections = (category) => {
    // Filter subcategories based on 'Startup Stories'
    const subcategories = Array.from(new Set(
      startupPodcast
        .filter(video => video.category === category)
        .map(video => video.subcategory)
        .filter(subcategory => subcategory === "From Idea to Launch" || subcategory === "Turning dreams into reality")
    ));

    return subcategories.map((subcategory, index) => {
      const videos = startupPodcast.filter(video => video.category === category && video.subcategory === subcategory);
      return (
        <div key={index} className="mb-8">
          <VideoSlider videos={videos} subcategory={subcategory} />
        </div>
      );
    });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="startup-stories-page container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-5 text-center">Startup Stories</h1>
        {categories.map((category, index) => (
          <div key={index} className="mb-8">
            {renderSubcategorySections(category)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupStoriesPage;
