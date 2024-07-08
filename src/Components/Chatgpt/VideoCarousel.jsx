import React, { useRef } from 'react';
import Slider from 'react-slick';
import VideoCard from './VideoCard'; // Assuming VideoCard component is defined
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoCarousel = ({ videos }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="px-2">
            <VideoCard video={video} />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-prev, .slick-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
         background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .slick-prev {
          left: 0;
        }

        .slick-next {
          right: 0;
        }

        .slick-prev:before, .slick-next:before {
          display: none; /* Hide the default arrow content */
        }
      `}</style>
      <button className="slick-prev" onClick={() => sliderRef.current.slickPrev()}>
        {"<"}
      </button>
      <button className="slick-next" onClick={() => sliderRef.current.slickNext()}>
        {">"}
      </button>
    </div>
  );
}

export default VideoCarousel;




