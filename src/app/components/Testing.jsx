"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from "../assets/Component 6.png";
import image2 from "../assets/Component 8.png";
import image3 from "../assets/Component 9.png";
import image4 from "../assets/Component 10.png";

const ExploreMore = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      nextSlide(); // Swipe left
    } else if (endX - startX > 50) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className='mt-20'>
      <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
        <h3 className='text-[24px] font-normal'>EXPLORE MORE</h3>
        <div 
          className='relative overflow-hidden' 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className='flex transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className='min-w-full flex-shrink-0 relative group'>
                <Image src={image} alt={`explore ${index + 1}`} className='w-full h-[300px]' />
                <h1 className='absolute text-white text-[48px] font-font2 text-center'>TITLE {index + 1}</h1>
                <button className='absolute text-white text-[14px] p-[20px] px-[70px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded'>Prev</button>
          <button onClick={nextSlide} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;