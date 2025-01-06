import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
// import ProductsCatalog from "./ProductCatalog" 


const About = () => {
  return (
    <div className='py-[50px]'>
        <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[20px] font-normal'>ABOUT US</h3>
            <Link href="/about" className="text-[16px] font-medium flex items-center gap-x-3">Learn More <MdOutlineKeyboardArrowRight /></Link>
        </div>
        <p className='italic font-normal lg:text-[28px] sm:text-[20px] leading-[40px] font-font2  pt-10'>To provide sustainable clothing for both <br/> formal and informal occasions. </p>
        <div className='flex flex-col md:flex-row  items-center justify-between pt-10'>
            <p className='text-[16px] leading-[24px] font-normal w-full sm:w-full'>
                We are dedicated to crafting garments using only the finest materials, emphasizing durability and elegance. Each piece in our collection is thoughtfully designed with exceptional craftsmanship, allowing you to express your individuality while feeling confident and comfortable.
            </p>
            <p className='w-full sm:w-full lg:text-right sm:text-left  font-medium text-[16px] leading-[24px] mt-4 md:mt-0'>
                DISCOVER THE <br/>POWER OF BEAUTY
            </p>
        </div>
        <Link href="/about" className="text-[16px] font-medium flex items-center gap-x-3 mt-4">Learn More <MdOutlineKeyboardArrowRight /></Link>
        </div>

        {/* <ProductsCatalog/> */}
        

    </div>
  )
}

export default About