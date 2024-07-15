// videoCard.js

// src/components/VideoCard.js
// import React from 'react';


// const VideoCard = ({ video }) => (
//   <div className="pb-4 bg-gray-200">
    
//       <video controls className="w-full h-48 object-cover rounded-lg">
//         <source src={video.src} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <h3 className="mt-2 text-left pl-4">{video.title}</h3>
  
//   </div>
// );

// export default VideoCard;
// src/components/VideoCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div className="pb-4 cursor-pointer" onClick={handleClick}>
      <video controls className="w-full h-48 object-cover rounded-lg">
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="mt-2 text-left pl-4">{video.title}</h3>
    </div>
  );
};

export default VideoCard;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const videoCard = ({ videoss }) => (
//   <div className="p-4">
//     <Link to={`/videos/${videoss.id}`}>
//       <video controls className="w-full h-48 object-cover rounded-lg">
//         <source src={process.env.PUBLIC_URL + '/' + videoss.src} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <h3 className="mt-2 text-center">{videoss.title}</h3>
//     </Link>
//   </div>
// );

// export default videoCard;
