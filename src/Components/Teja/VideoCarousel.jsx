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
      
      {/* <button className="slick-prev" onClick={() => sliderRef.current.slickPrev()}>
        {"<"}
      </button>
      <button className="slick-next" onClick={() => sliderRef.current.slickNext()}>
        {">"}
      </button> */}
    </div>
  );
}

export default VideoCarousel;




