import React from 'react';
import {Link} from 'react-router-dom';
const VideoCard = ({ video,basePath }) => {
  return (
   
    <div className=" p-6">
      
        <Link to={`/video/${video.id}`}>
      
      <video width="100%" height="auto" controls>
        <source src={process.env.PUBLIC_URL + '/' + video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='bg-gray-300 p-2'>
     <p className="pt-2 font-bold">{video.title}</p>
     <p>{video.description}</p>
   </div>
      </Link>
    
    </div>
    
  );
}

export default VideoCard;
