import React from 'react';
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="bg-black">
    <video width="100%" controls className="media">
      <source src="./video1.mp4" />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="bg-black">
    <video width="100%" controls className="media">
      <source src="./video2.mp4" />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="bg-black">
    <video width="100%" controls className="media">
      <source src="./video3.mp4" />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="bg-black">
    <video width="100%" controls className="media">
      <source src="./video1.mp4" />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="bg-black">
    <video width="100%" controls className="media">
      <source src="./video2.mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
];


const Herosection = () => {
  const [mainIndex, setMainIndex] = useState(0);

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };


  return (
    <div className='mx-10 my-4 flex gap-4'>
       <div className=" relative flex-none rounded-lg overflow-hidden shadow-lg w-8/12">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
    <div className='mt-8'>
      <h1 className='text-xl font-bold'>Description:</h1>
      <h1 className='text-black text-xl font-sans font-semibold mt-2 text-justify'>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quia sit asperiores? Similique earum voluptates dignissimos animi modi aperiam! Nostrum corrupti voluptatem fugit commodi voluptate! Reiciendis tenetur adipisci recusandae in.
      </h1>
      <div className='flex gap-6 mt-6'>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Learn</h1>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Startup </h1>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Trend</h1>
      </div>
      <div className='flex gap-6 mt-6'>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Learn</h1>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Startup </h1>
        <h1 className='bg-[#ce4d2f] px-10 py-2 shadow-lg rounded-full text-white'>#Trend</h1>
      </div>
      <div className='mt-6'>
      <button className='bg-[#032d60] mt-6 py-4 px-12 rounded-full text-white font-semibold'>Relative Links    {">"} </button>
    </div>
    </div>
    
    </div>
  )
}

export default Herosection
