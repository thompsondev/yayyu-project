import React from 'react'
import Image from 'next/image';
import headImage from "../assets/about.png"

import AboutImage from "../assets/aboutimage.png"

const About = () => {
  return (
    <div>
      <div className='w-full'>
        <Image src={headImage} alt='about' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
      </div>

        <div className="max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32">
              
              <div className='container mt-14'>
                <Image src={AboutImage} alt="about image"/>
                <div className='mt-10 lg:text-[18px]  sm:text-[16px] font-normal'>
                  <p>
                    At YAYYU, we believe that every woman deserves to feel both comfortable and stylish,
                    no matter the occasion. Our mission is to provide sustainable clothing options that
                      blend elegance with modern design, suitable for both formal and informal settings.
                    </p><br/>
                    <p>
                      We are committed to using only the finest materials and delivering exceptional designs
                      that reflect our dedication to quality. Our collections feature modest yet fashionable 
                      styles with clean cuts, ensuring that each piece enhances your wardrobe.
                    </p><br/>
                    <p>
                      As a socially empowered team, we strive to make shopping easy and enjoyable through 
                      our thoughtfully crafted designs and fast, seamless delivery. We aim to inspire women
                        across the globe to embrace their unique style and wear pieces that make them feel
                        their best, always.
                    </p>
                    
                  
                </div>
              </div>

            </div>

    </div>
    
  )
}

export default About