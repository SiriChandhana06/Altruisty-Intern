
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const videos = [
  { id: 1, title: 'Rciendis tenetur', src: 'video1.mp4', description: 'Description for video 1' },
  { id: 2, title: 'Reiciendis tenetur', src: 'video2.mp4', description: 'Description for video 2' },
  { id: 3, title: 'Reicien tenetur', src: 'video3.mp4', description: 'Description for video 3' },
  { id: 4, title: 'Reiciendis tenur', src: 'video4.mp4', description: 'Description for video 4' },
  { id: 5, title: 'Reiciendis tetur', src: 'video5.mp4', description: 'Description for video 5' },
  { id: 6, title: 'Reiciendis tenetur', src: 'video6.mp4', description: 'Description for video 6' },
  { id: 7, title: 'Reicies tenetur', src: 'video7.mp4', description: 'Description for video 7' },
  { id: 8, title: 'Reiciendis tetur', src: 'video8.mp4', description: 'Description for video 8' },
];

const VideoDetails = () => {
  const { id } = useParams();
  const [mainVideo, setMainVideo] = useState(videos.find(v => v.id === parseInt(id)));
  const relatedVideos = videos.filter(v => v.id !== parseInt(id)).slice(0, 4);

  const updateMainVideo = (video) => {
    setMainVideo(video);
  };

  if (!mainVideo) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/>
            </svg>
          </Link>
        </div>
        <div className="flex mb-4">
          <video controls className="w-2/3 h-64 object-cover rounded-lg">
            <source src={process.env.PUBLIC_URL + '/' + mainVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-1/3 pl-4 ml-4 border bg-gradient-to-t from-[#9747FF] to-white sm:border ">
            <h1 className="text-2xl font-bold mb-4">{mainVideo.title}</h1>
            <p className="mb-4">{mainVideo.description}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Related Videos</h2>
        <div className="flex space-x-4">
          {relatedVideos.map((relatedVideo) => (
            <div key={relatedVideo.id} className="flex-1" onClick={() => updateMainVideo(relatedVideo)}>
              <Link to={`/videos/${relatedVideo.id}`}>
                <video controls className="w-full h-32 object-cover rounded-lg">
                  <source src={process.env.PUBLIC_URL + '/' + relatedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="mt-2 text-center">{relatedVideo.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
