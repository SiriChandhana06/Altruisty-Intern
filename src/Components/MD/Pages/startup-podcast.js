import React, { useState, useEffect } from "react";
import VideoSlider from "../compo/VideoSlider_page"; 
import startupPodcast from "../Data/sp"; 
import Header from "../../Header";



const StartupPodcastPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(startupPodcast.map(video => video.category)));
    setCategories(uniqueCategories);
  }, []);

  const renderSubcategorySections = (category) => {
    const subcategories = Array.from(new Set(
      startupPodcast.filter(video => video.category === category)
        .map(video => video.subcategory)
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
   <Header/>
   <div className="startup-stories-page container mx-auto px-4 py-8">
   <h1 className="text-4xl font-bold mb-5 text-center">Startup Podcast</h1>
   {categories.map((category, index) => (
     <div key={index} className="mb-8">
       
       {renderSubcategorySections(category)}
     </div>
   ))}
 </div>
   </div>
  );
};

export default StartupPodcastPage;
