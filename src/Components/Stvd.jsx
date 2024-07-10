import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const videoss = [
  { id: 1, title: 'Reiciendis tenetur', src: 'video1.mp4', description: 'Description for video 1' },
  { id: 2, title: 'Reiciendis tenetur', src: 'video2.mp4', description: 'Description for video 2' },
  { id: 3, title: 'Reiciendis tenetur', src: 'video3.mp4', description: 'Description for video 3' },
  { id: 4, title: 'Reiciendis tenetur', src: 'video4.mp4', description: 'Description for video 4' },
  { id: 5, title: 'Reiciendis tenetur', src: 'video5.mp4', description: 'Description for video 5' },
  { id: 6, title: 'Reiciendis tenetur', src: 'video6.mp4', description: 'Description for video 6' },
  { id: 7, title: 'Reiciendis tenetur', src: 'video7.mp4', description: 'Description for video 7' },
  { id: 8, title: 'Reiciendis tenetur', src: 'video8.mp4', description: 'Description for video 8' },
];

const VideoDetails = () => {
  const { id } = useParams();
  const video = videoss.find(v => v.id === parseInt(id));
  const relatedVideos = videoss.filter(v => v.id !== parseInt(id));

  if (!videoss) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{videoss.title}</h1>
        <video controls className="w-full h-64 object-cover rounded-lg mb-4">
          <source src={process.env.PUBLIC_URL + '/' + videoss.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mb-4">{videoss.description}</p>
        <h2 className="text-xl font-bold mb-4">Related Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedVideos.map((relatedVideoss) => (
            <div key={relatedVideoss.id} className="p-4 bg-gray-200 rounded-lg">
              <Link to={`/videos/${relatedVideoss.id}`}>
                <video controls className="w-full h-32 object-cover rounded-lg">
                  <source  src={process.env.PUBLIC_URL + '/' + videoss.src} type="videos/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="mt-2 text-center">{relatedVideoss.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
