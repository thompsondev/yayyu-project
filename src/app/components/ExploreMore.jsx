import React from 'react';
import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import image1 from "../assets/Component 6.png";
import image2 from "../assets/Component 8.png";
import image3 from "../assets/Component 9.png";
import image4 from "../assets/Component 10.png";

const ExploreMore = () => {
  return (
    <div className='mt-20'>
        <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
            <h3 className='text-[24px] font-normal'>EXPLORE MORE</h3>
            <div className='grid grid-cols-2  gap-4 mt-10'>
                <div className='relative flex justify-center items-center group'>
                  <Image src={image1} alt='explore'  className=''/>
                  <h1 className='absolute  text-white lg:text-[48px] sm:text-[25px] font-font2 text-center'>SUIT</h1>
                  <button className='absolute  text-white text-[14px] p-[20px] lg:px-[70px] sm:px-[30px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                </div>
                <div className='relative flex justify-center items-center group'>
                  <Image src={image4} alt='explore' className=''/>
                  <h1 className='absolute  text-white lg:text-[48px] sm:text-[25px]  font-font2 text-center'>ADIRE</h1>
                  <button className='absolute  text-white text-[14px] p-[20px] lg:px-[70px] sm:px-[30px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                </div>
                <div className='relative flex justify-center items-center group'>
                  <Image src={image2} alt='explore' className=''/>
                  <h1 className='absolute  text-white lg:text-[48px] sm:text-[25px] font-font2 text-center'>KAFTAN</h1>
                  <button className='absolute  text-white text-[14px] p-[20px] lg:px-[70px] sm:px-[30px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                </div>
                <div className='relative flex justify-center items-center group'>
                  <Image src={image3} alt='explore' className=''/>
                  <h1 className='absolute  text-white lg:text-[48px] sm:text-[25px] font-font2 text-center'>GOWN</h1>
                  <button className='absolute  text-white text-[14px] p-[20px] lg:px-[70px] sm:px-[30px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                </div>
              </div>  
              {/* <div>
                <div className='overflow-hidden'>
                  <div className='flex transition-transform duration-300 ease-in-out'>
                    <div className='min-w-full flex-shrink-0 relative group'>
                      <Image src={image1} alt='explore' className='w-full h-auto' />
                      <h1 className='absolute text-white text-[48px] font-font2 text-center'>SUIT</h1>
                      <button className='absolute text-white text-[14px] p-[20px] px-[70px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                    </div>
                    <div className='min-w-full flex-shrink-0 relative group'>
                      <Image src={image4} alt='explore' className='w-full h-auto' />
                      <h1 className='absolute text-white text-[48px] font-font2 text-center'>ADIRE</h1>
                      <button className='absolute text-white text-[14px] p-[20px] px-[70px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                    </div>
                    <div className='min-w-full flex-shrink-0 relative group'>
                       <Image src={image2} alt='explore' className='w-full h-auto' />
                        <h1 className='absolute text-white text-[48px] font-font2 text-center'>KAFTAN</h1>
                        <button className='absolute text-white text-[14px] p-[20px] px-[70px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                    </div>
                    <div className='min-w-full flex-shrink-0 relative group'>
                       <Image src={image3} alt='explore' className='w-full h-auto' />
                      <h1 className='absolute text-white text-[48px] font-font2 text-center'>GOWN</h1>
                       <button className='absolute text-white text-[14px] p-[20px] px-[70px] bg-black hover:bg-[#FCBA41] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>SHOP NOW</button>
                     </div>
                  </div>
                </div>
            </div> */}
        </div>
    </div>
  
  )
}

export default ExploreMore