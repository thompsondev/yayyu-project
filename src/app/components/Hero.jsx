"use client"

import Image from 'next/image';
import React from 'react';

import heroImage1 from "../assets/slider 1.png";
// import heroImage2 from "../assets/slider3 (1).png"; 
// import heroImage3 from "../assets/slider3 (2).png";
import Link from 'next/link';



const Hero = () => {


  return (
    <div className='relative w-full lg:h-screen sm:h-[400px]'>
        <Image 
            src={heroImage1} 
            alt='hero' 
            layout='fill' 
            objectFit='cover' 
            className='absolute top-0 left-0'
        />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-8 lg:px-[100px] text-center sm:px-0'>
              <h1 className='lg:text-[52px] text-white lg:leading-[67px] sm:text-[25px] sm:leading-[38px]'>
                  Classic and Premium Collection
              </h1>
              <Link href="/shop/collection">
               <button className='text-white text-[14px] p-[20px] bg-black hover:bg-[#FCBA41] cursor-pointer'>SHOP COLLECTION NOW</button>
              </Link>

            </div>
        
    </div>
  )
}

export default Hero