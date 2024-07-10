import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ videoss }) => (
  <div className="p-4">
    <Link to={`/videos/${videoss.id}`}>
      <video controls className="w-full h-48 object-cover rounded-lg">
        <source src={process.env.PUBLIC_URL + '/' + videoss.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="mt-2 text-center">{videoss.title}</h3>
    </Link>
  </div>
);

export default VideoCard;
