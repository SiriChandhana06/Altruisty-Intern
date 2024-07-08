import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const VideoDetail = ({ videos }) => {
  const { id } = useParams();
  const video = videos.find(v => v.id === parseInt(id));

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Related videos on the left */}
      <div className="lg:w-1/4 flex flex-col space-y-4">
        <div className='flex items-center gap-2 mb-4'>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/>
            </svg>
          </Link>
          <h2 className="text-xl font-bold">Related Videos</h2>
        </div>
        {videos.filter(v => v.id !== video.id).map((vid) => (
          <Link to={`/video/${vid.id}`} key={vid.id} className="block">
            <div className="p-2">
              <video
                width="100%"
                height="auto"
                className="object-cover"
              >
                <source src={process.env.PUBLIC_URL + '/' + vid.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='bg-gray-300 p-2'>
                <p className="pt-2">{vid.title}</p>
                <p>{vid.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Main video on the right */}
      <div className="lg:w-3/4 flex flex-col items-center lg:items-end pl-0 lg:pl-9 mt-8 lg:mt-16">
        <div className="w-full h-auto">
          <video
            width="100%"
            height="auto"
            controls
            className="object-cover"
          >
            <source src={process.env.PUBLIC_URL + '/' + video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 border p-4 w-full bg-gradient-to-t from-[#9747FF] to-white sm:border">
          <h1 className="text-xl lg:text-2xl font-bold">{video.title}</h1>
          <p className="mt-2 font-semibold text-lg lg:text-xl">{video.description}</p>
          <h4 className='text-lg lg:text-xl font-normal pt-6 pb-4'>
            A startup story typically recounts the journey of a new business from its inception through its early struggles, growth phases, and eventual success or challenges. It often highlights the vision and passion of the founders, the innovative ideas that sparked the venture, the hurdles faced in securing funding, building a team, developing a product or service, and gaining market traction. Startup stories can be inspirational, showcasing perseverance, creativity, and resilience in the face of uncertainty and competition, while also offering insights into the dynamics of entrepreneurship and business development.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
